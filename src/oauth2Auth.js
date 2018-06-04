'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');
var Emitter = require('event-emitter');

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

            this.basePath = this.config.oauth2.host; //Auth Call

            this.authentications = {
                'basicAuth': {type: 'oauth2', accessToken: ''}
            };

            this.host = this.config.oauth2.host;

            this.setStorage();
            this.discoveryUrls();
            this.checkFragment();

            if (this.config.accessToken) {
                this.setTicket(this.config.accessToken);
            }
        }

        Emitter.call(this);
    }

    checkFragment() {
        this.hashFragmentParams = this.getHashFragmentParams();

        if (this.hashFragmentParams) {
            let nonceState = this.hashFragmentParams.state;
            let accessToken = this.hashFragmentParams.access_token;
            let idToken = this.hashFragmentParams.id_token;
            let sessionState = this.hashFragmentParams.session_state;
            let scope = this.hashFragmentParams.scope;

            console.log(nonceState + accessToken + idToken + sessionState + scope);

            this.processIdToken(idToken, accessToken);
        }
    }

    padBase64(base64data) {
        while (base64data.length % 4 !== 0) {
            base64data += '=';
        }
        return base64data;
    }

    b64DecodeUnicode(str) {
        const base64 = str.replace(/\-/g, '+').replace(/\_/g, '/');

        return decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );
    }

    processIdToken(idToken, accessToken) {
        if (idToken) {
            const tokenParts = idToken.split('.');
            const headerBase64 = this.padBase64(tokenParts[0]);
            const headerJson = this.b64DecodeUnicode(headerBase64);
            const header = JSON.parse(headerJson);
            const claimsBase64 = this.padBase64(tokenParts[1]);
            const claimsJson = this.b64DecodeUnicode(claimsBase64);
            const claims = JSON.parse(claimsJson);
            const savedNonce = this.storage.getItem('nonce');

            if (Array.isArray(claims.aud)) {
                if (claims.aud.every(v => v !== this.config.oauth2.clientId)) {
                    console.warn('Failing JWT audience: ' + claims.aud.join(','));
                }
            } else {
                if (claims.aud !== this.config.oauth2.clientId) {
                    console.warn('Failing JWT audience: ' + claims.aud);
                }
            }

            if (!claims.sub) {
                console.warn('Missing sub in JWT');
                return;
            }

            if (!claims.iat) {
                console.warn('Missing iat in JWT');
                return;
            }

            if (claims.iss !== this.config.oauth2.host) {
                console.warn('Failing issuer: ' + claims.iss);
                return;
            }

            if (claims.nonce !== savedNonce) {
                console.warn('Failing nonce JWT is not corrisponding' + claims.nonce);
                return;
            }

            if (this.isJWTExpired(claims)) {
                console.error('Failing JWT token Expired');
                return;
            }

            if (this.validateSignature({
                    accessToken: accessToken,
                    idToken: idToken,
                    idTokenClaims: claims,
                    idTokenHeader: header
                })) {

                return {
                    idToken: idToken,
                    idTokenClaims: claims,
                    idTokenClaimsJson: claimsJson,
                    idTokenHeader: header,
                    idTokenHeaderJson: headerJson,
                    idTokenExpiresAt: (claims.exp * 1000)
                };
            }
        }
    }

    isJWTExpired(claims) {
        const now = Date.now();
        const issuedAtMSec = claims.iat * 1000;
        const expiresAtMSec = claims.exp * 1000;
        const tenMinutesInMsec = 1000 * 60 * 10;

        return issuedAtMSec - tenMinutesInMsec >= now || expiresAtMSec + tenMinutesInMsec <= now;
    }

    validateSignature(params) {
        let hashAlg = this.inferHashAlgorithm(params.idTokenHeader);

        let tokenHash = this.calcHash(params.accessToken, hashAlg); // sha256(accessToken, { asString: true });
        let leftMostHalf = tokenHash.substr(0, tokenHash.length / 2);

        let tokenHashBase64 = btoa(leftMostHalf);

        let atHash = tokenHashBase64
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
        let claimsAtHash = params.idTokenClaims.at_hash.replace(/=/g, '');

        if (atHash !== claimsAtHash) {
            console.error('exptected at_hash: ' + atHash);
            console.error('actual at_hash: ' + claimsAtHash);
        }

        return atHash === claimsAtHash;
    }

    inferHashAlgorithm(jwtHeader) {
        let alg = jwtHeader.alg;

        if (!alg.match(/^.S[0-9]{3}$/)) {
            throw new Error('Algorithm not supported: ' + alg);
        }

        return 'sha' + alg.substr(2);
    }

    setStorage() {
        if (typeof window !== 'undefined') {
            this.storage = window.sessionStorage;
        }
    }

    discoveryUrls() {
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
            ).then((doc) => {
                this.discovery.loginUrl = doc.authorization_endpoint;
                this.discovery.logoutUrl = doc.end_session_endpoint || this.logoutUrl;
                this.discovery.grantTypesSupported = doc.grant_types_supported;
                this.discovery.issuer = doc.issuer;
                this.discovery.tokenEndpoint = doc.token_endpoint;
                this.discovery.userinfoEndpoint = doc.userinfo_endpoint;
                this.discovery.jwksUri = doc.jwks_uri;
                this.discovery.sessionCheckIFrameUrl = doc.check_session_iframe || this.sessionCheckIFrameUrl;

                this.emit('discovery', this.discovery);
                resolve(this.discovery);
            }, (error) => {
                console.log(error);
                reject(error.error);
            });
        });

        return this.promise;
    }

    implicitLogin() {
        if (!this.hasValidIdToken() || !this.hasValidAccessToken()) {
            if (this.discovery.loginUrl) {
                this.redirectLogin();
            } else {
                this.on('discovery', () => {
                    this.redirectLogin();
                });
            }
        }
    }

    hasValidIdToken() {
        var validToken = false;
        if (this.getIdToken()) {
            var expiresAt = this.storage.getItem('id_token_expires_at'),
                now = new Date();
            if (!expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
                validToken = true;
            }
        }

        return validToken;
    }

    hasValidAccessToken() {
        var validAccessToken = false;

        if (this.getAccessToken()) {
            const expiresAt = this.storage.getItem('expires_at');
            const now = new Date();
            if (!expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
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

        if (this.state) {
            this.state = nonce + ';' + this.state;
        } else {
            this.state = nonce;
        }

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
            encodeURIComponent('id_token') +
            '&nonce=' +
            encodeURIComponent(nonce) +
            '&state=' +
            encodeURIComponent(this.state);

    }

    getHashFragmentParams() {
        var hashFragmentParams = {};

        if (typeof window !== 'undefined') {
            var hash = decodeURIComponent(window.location.hash);

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

    /**
     * login Alfresco API
     * @param  {String} username:   // Username to login
     * @param  {String} password:   // Password to login
     *
     * @returns {Promise} A promise that returns {new authentication token} if resolved and {error} if rejected.
     * */
    login(username, password) {
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
        this.promise = new Promise((resolve, reject) => {
            this.callApi(
                url, 'POST',
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
}

Emitter(oauth2Auth.prototype); // jshint ignore:line
module.exports = oauth2Auth;
