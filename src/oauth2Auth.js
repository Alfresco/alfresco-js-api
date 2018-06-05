'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');
var Emitter = require('event-emitter');
var rs = require('jsrsasign');

class oauth2Auth extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();
        this.config = config;
        this.discovery = {};

        if (this.config.oauth2) {
            if (this.config.oauth2.host === undefined || this.config.oauth2.host === null) {
                throw 'Missing the required oauth2 host parameter';
            }

            if (this.config.oauth2.clientId === undefined || this.config.oauth2.clientId === null) {
                throw 'Missing the required oauth2 clientId parameter';
            }

            if (this.config.oauth2.secret === undefined || this.config.oauth2.secret === null) {
                throw 'Missing the required oauth2 secret parameter';
            }

            if (this.config.oauth2.silentRefreshTimeout === undefined && this.config.oauth2.implicit) {
                this.config.oauth2.silentRefreshTimeout = 1000 * 20;
            }

            this.basePath = this.config.oauth2.host; //Auth Call

            this.authentications = {
                'basicAuth': {type: 'oauth2', accessToken: ''}
            };

            this.host = this.config.oauth2.host;

            this.setStorage();

            this.initOauth();

            if (this.config.accessToken) {
                this.setTicket(this.config.accessToken);
            }
        }

        Emitter.call(this);
    }

    async initOauth() { // jshint ignore:line
        await this.discoveryUrls(); // jshint ignore:line

        this.checkFragment();
    }

    checkFragment(externalHash) {
        this.hashFragmentParams = this.getHashFragmentParams(externalHash);

        if (this.hashFragmentParams) {
            let accessToken = this.hashFragmentParams.access_token;
            let idToken = this.hashFragmentParams.id_token;
            let sessionState = this.hashFragmentParams.session_state;
            let expiresIn = this.hashFragmentParams.expires_in;

            if (!sessionState) {
                console.warn('session state not present');
                return;
            }

            this.processJWTToken(idToken, accessToken).then((jwt) => {
                if (jwt) {
                    this.storeIdToken(idToken, jwt.payload.exp);
                    this.storeAccessToken(accessToken, expiresIn);
                    this.authentications.basicAuth.username = jwt.payload.preferred_username;
                    this.saveUsername(jwt.payload.preferred_username);
                    this.silentRefresh();
                }
            }, (error) => {
                console.log(error);
            });
        } else {
            if (this.isValidAccessToken()) {
                let accessToken = this.storage.getItem('access_token');
                this.setToken(accessToken, null);
            }
        }
    }

    processJWTToken(jwt) {
        return new Promise((resolve, reject) => {
            if (jwt) {
                const header = rs.jws.JWS.readSafeJSONString(rs.b64utoutf8(jwt.split('.')[0]));
                const payload = rs.jws.JWS.readSafeJSONString(rs.b64utoutf8(jwt.split('.')[1]));
                const savedNonce = this.storage.getItem('nonce');

                if (!payload.sub) {
                    reject('Missing sub in JWT');
                }

                if (payload.nonce !== savedNonce) {
                    reject('Failing nonce JWT is not corrisponding' + payload.nonce);
                }

                if (this.jwks) {
                    let validObj = this.validateJWKS(this.jwks, jwt, payload, header);
                    if (validObj) {
                        resolve(validObj);
                    } else {
                        reject('Invalid JWT');
                    }
                } else {

                    this.loadJwks().then((jwks) => {
                        this.jwks = jwks;
                        let validObj = this.validateJWKS(this.jwks, jwt, payload, header);
                        if (validObj) {
                            resolve(validObj);
                        } else {
                            reject('Invalid JWT');
                        }
                    }, (error) => {
                        reject(error);
                    });

                }

            }
        });
    }

    validateJWKS(jwks, jwt, payload, header) {
        let keyObj = rs.KEYUTIL.getKey(jwks.keys[0]);
        let isValid = rs.jws.JWS.verifyJWT(jwt, keyObj,
            {
                alg: [header.alg],
                iss: [this.config.oauth2.host],
                aud: [this.config.oauth2.clientId]
            });

        if (isValid) {
            return {
                idToken: jwt,
                payload: payload,
                header: header
            };
        }
    }

    loadJwks() {
        var postBody = {}, pathParams = {}, queryParams = {}, formParams = {}, headerParams = {};
        var authNames = [];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];

        return new Promise((resolve, reject) => {
            if (this.discovery.jwksUri) {
                this.callCustomApi(
                    this.discovery.jwksUri, 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, {}
                ).then((jwks) => {
                    resolve(jwks);
                    this.emit('jwks', jwks);
                    resolve(this.discovery);
                }, (error) => {
                    console.log(error);
                    reject(error.error);
                });
            } else {
                reject('jwks error');
            }
        });
    }

    storeIdToken(idToken, exp) {
        this.storage.setItem('id_token', idToken);
        this.storage.setItem('id_token_expires_at', Number(exp * 1000).toString());
        this.storage.setItem('id_token_stored_at', Date.now().toString());
    }

    storeAccessToken(accessToken, expiresIn) {
        this.storage.setItem('access_token', accessToken);

        const expiresInMilliSeconds = expiresIn * 1000;
        const now = new Date();
        const expiresAt = now.getTime() + expiresInMilliSeconds;

        this.storage.setItem('access_token_expires_in', expiresAt);
        this.storage.setItem('access_token_stored_at', Date.now().toString());
        this.setToken(accessToken, null);
    }

    async discoveryUrls() { // jshint ignore:line
        var postBody = {}, pathParams = {}, queryParams = {}, formParams = {}, headerParams = {};
        var authNames = [];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];

        this.promise = new Promise((resolve, reject) => {

            var url = '.well-known/openid-configuration';
            this.callApi(
                url, 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, {}
            ).then((discovery) => {
                this.discovery.loginUrl = discovery.authorization_endpoint;
                this.discovery.logoutUrl = discovery.end_session_endpoint;
                this.discovery.grantTypesSupported = discovery.grant_types_supported;
                this.discovery.issuer = discovery.issuer;
                this.discovery.tokenEndpoint = discovery.token_endpoint;
                this.discovery.userinfoEndpoint = discovery.userinfo_endpoint;
                this.discovery.jwksUri = discovery.jwks_uri;
                this.discovery.sessionCheckIFrameUrl = discovery.check_session_iframe;

                this.emit('discovery', this.discovery);
                resolve(this.discovery);
            }, (error) => {
                console.log(error);
                reject(error.error);
            });
        });

        return this.promise;
    }

    saveUsername(username) {
        if (this.supportsStorage()) {
            this.storage.setItem('USERNAME', username);
        }
    }

    implicitLogin() {
        if (!this.isValidToken() || !this.isValidAccessToken()) {
            if (this.discovery.loginUrl) {
                this.redirectLogin();
            } else {
                this.on('discovery', () => {
                    this.redirectLogin();
                });
            }
        } else {
            let accessToken = this.storage.getItem('access_token');
            this.setToken(accessToken, null);
        }
    }

    isValidToken() {
        var validToken = false;
        if (this.getIdToken()) {
            var expiresAt = this.storage.getItem('id_token_expires_at'),
                now = new Date();
            if (expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
                validToken = true;
            }
        }

        return validToken;
    }

    isValidAccessToken() {
        var validAccessToken = false;

        if (this.getAccessToken()) {
            const expiresAt = this.storage.getItem('access_token_expires_in');
            const now = new Date();
            if (expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
                validAccessToken = true;
            }
        }

        return validAccessToken;
    }

    getIdToken() {
        return this.storage.getItem('id_token');
    }

    getAccessToken() {
        return this.storage.getItem('access_token');
    }

    redirectLogin() {
        if (this.config.oauth2.implicit && typeof window !== 'undefined') {
            window.location.href = this.composeImplicitLoginUrl();
        }
    }

    genNonce() {
        let text = '';
        const possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 40; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    composeImplicitLoginUrl() {
        var nonce = this.genNonce();

        this.storage.setItem('nonce', nonce);

        var separation = this.discovery.loginUrl.indexOf('?') > -1 ? '&' : '?';

        return this.discovery.loginUrl +
            separation +
            'client_id=' +
            encodeURIComponent(this.config.oauth2.clientId) +
            '&redirect_uri=' +
            encodeURIComponent(this.config.oauth2.redirectUri) +
            '&scope=' +
            encodeURIComponent(this.config.oauth2.scope) +
            '&response_type=' +
            encodeURIComponent('id_token token') +
            '&nonce=' +
            encodeURIComponent(nonce);

    }

    getHashFragmentParams(externalHash) {
        var hashFragmentParams = null;

        if (typeof window !== 'undefined') {
            let hash;

            if (!externalHash) {
                hash = decodeURIComponent(window.location.hash);
            } else {
                hash = decodeURIComponent(externalHash);
            }

            if (hash.indexOf('#') === 0) {
                const questionMarkPosition = hash.indexOf('?');

                if (questionMarkPosition > -1) {
                    hash = hash.substr(questionMarkPosition + 1);
                } else {
                    hash = hash.substr(1);
                }
                hashFragmentParams = this.parseQueryString(hash);
            }
        }
        return hashFragmentParams;
    }

    parseQueryString(queryString) {
        const data = {};
        var pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;

        if (queryString !== null) {
            pairs = queryString.split('&');

            for (var i = 0; i < pairs.length; i++) {
                pair = pairs[i];
                separatorIndex = pair.indexOf('=');

                if (separatorIndex === -1) {
                    escapedKey = pair;
                    escapedValue = null;
                } else {
                    escapedKey = pair.substr(0, separatorIndex);
                    escapedValue = pair.substr(separatorIndex + 1);
                }

                key = decodeURIComponent(escapedKey);
                value = decodeURIComponent(escapedValue);

                if (key.substr(0, 1) === '/') {
                    key = key.substr(1);
                }

                data[key] = value;
            }
        }

        return data;
    }

    silentRefresh() {
        if (typeof document === 'undefined') {
            throw new Error('Silent refresh supported only on browsers');
        }

        setTimeout(() => {
            this.destroyIframe();
            this.createIframe();
        }, this.config.oauth2.silentRefreshTimeout);
    }

    createIframe() {
        const iframe = document.createElement('iframe');
        iframe.id = 'silent_refresh_token_iframe';
        let loginUrl = this.composeImplicitLoginUrl();
        iframe.setAttribute('src', loginUrl);
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        iframe.addEventListener('load', (event) => {
            let hash = document.getElementById('silent_refresh_token_iframe').contentWindow.location.hash;
            this.checkFragment(hash);
        });
    }

    destroyIframe() {
        const iframe = document.getElementById('silent_refresh_token_iframe');

        if (iframe) {
            iframe.removeEventListener('load');
            document.body.removeChild(iframe);
        }
    }

    /**
     * login Alfresco API
     * @param  {String} username:   // Username to login
     * @param  {String} password:   // Password to login
     *
     * @returns {Promise} A promise that returns {new authentication token} if resolved and {error} if rejected.
     * */
    login(username, password) {
        this.promise = new Promise((resolve, reject) => {

            if (this.config.oauth2.implicit) {
                resolve();
                this.implicitLogin();
            } else {
                var postBody = {}, pathParams = {}, queryParams = {}, formParams = {};

                var auth = 'Basic ' + new Buffer(this.config.oauth2.clientId + ':' + this.config.oauth2.secret).toString('base64');

                var headerParams = {
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Authorization': auth
                };

                formParams = {
                    username: username,
                    password: password,
                    grant_type: 'password',
                    client_id: this.config.oauth2.clientId
                };

                var authNames = [];
                var contentTypes = ['application/x-www-form-urlencoded'];
                var accepts = ['application/json'];

                var url = this.config.oauth2.authPath || '/oauth/token';
                this.callApi(
                    url, 'POST',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    authNames, contentTypes, accepts, {}
                ).then(
                    (data) => {
                        this.saveUsername(username);
                        this.setToken(data.access_token, data.refresh_token);
                        resolve(data);
                    },
                    (error) => {
                        if (error.error.status === 401) {
                            this.promise.emit('unauthorized');
                        }
                        this.promise.emit('error');
                        reject(error.error);
                    });
                Emitter(this.promise); // jshint ignore:line

            }
        });

        return this.promise;
    }

    /**
     * Refresh the  Token
     *
     * */
    refreshToken() {
        var postBody = {}, pathParams = {}, queryParams = {}, formParams = {};

        var auth = 'Basic ' + new Buffer(this.config.oauth2.clientId + ':' + this.config.oauth2.secret).toString('base64');

        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'Authorization': auth
        };

        queryParams = {
            refresh_token: this.authentications.basicAuth.refreshToken,
            grant_type: 'refresh_token'
        };

        var authNames = [];
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];

        this.promise = new Promise((resolve, reject) => {
            this.callApi(
                '/oauth/token', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts, {}
            ).then(
                (data) => {
                    this.setToken(data.access_token, data.refresh_token);
                    resolve(data);
                },
                (error) => {
                    if (error.error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error.error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

    /**
     * Set the current Token
     *
     * @param {String} Token
     * @param {String} refreshToken
     * */
    setToken(token, refreshToken) {
        this.authentications.basicAuth.accessToken = token;
        this.authentications.basicAuth.refreshToken = refreshToken;
        this.authentications.basicAuth.password = null;
        this.token = token;
    }

    /**
     * Get the current Token
     *
     * */
    getToken() {
        return this.token;
    }

    /**
     * return the Authentication
     *
     * @returns {Object} authentications
     * */
    getAuthentication() {
        return this.authentications;
    }

    /**
     * Change the Host
     *
     * @param {String} host
     * */
    changeHost(host) {
        this.config.hostOauth2 = host;
    }

    /**
     * If the client is logged in retun true
     *
     * @returns {Boolean} is logged in
     */
    isLoggedIn() {
        return !!this.authentications.basicAuth.accessToken;
    }

    /**
     * Logout
     **/
    logOut() {
        const id_token = this.getIdToken();

        this.cleanStorage();

        var separation = this.discovery.logoutUrl.indexOf('?') > -1 ? '&' : '?';

        var logoutUrl = this.discovery.logoutUrl +
            separation +
            'post_logout_redirect_uri=' +
            encodeURIComponent(this.config.oauth2.redirectUri) +
            '&id_token_hint=' +
            encodeURIComponent(id_token);

        if (this.config.oauth2.implicit && typeof window !== 'undefined') {
            window.location.href = logoutUrl;
        }
    }

    cleanStorage() {
        this.storage.removeItem('access_token');
        this.storage.removeItem('access_token_expires_in');
        this.storage.removeItem('access_token_stored_at');

        this.storage.removeItem('id_token');
        this.storage.removeItem('id_token');
        this.storage.removeItem('id_token_claims_obj');
        this.storage.removeItem('id_token_expires_at');
        this.storage.removeItem('id_token_stored_at');

        this.storage.removeItem('nonce');
    }
}

Emitter(oauth2Auth.prototype); // jshint ignore:line
module.exports = oauth2Auth;
