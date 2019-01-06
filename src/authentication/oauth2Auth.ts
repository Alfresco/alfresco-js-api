/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy oauth2of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import * as _Emitter from 'event-emitter';
import { AlfrescoApiClient } from '../alfrescoApiClient';
import { Storage } from '../storage';
import { AlfrescoApiConfig } from '../alfrescoApiConfig';
import { Authentication } from './authentication';

const Emitter = _Emitter;

export class Oauth2Auth extends AlfrescoApiClient {

    storage: Storage;
    config: AlfrescoApiConfig;
    init: boolean;
    hashFragmentParams: any;
    static basePath: string;
    host: string;
    token: string;
    discovery: any;
    jwks: any;
    private static authentications: Authentication = new Authentication({
        'oauth2': { accessToken: '' }, type: 'oauth2'
    });

    iFameHashListner: any;

    constructor(config: AlfrescoApiConfig) {
        super();
        this.config = config;
        this.init = false;

        if (this.config.oauth2) {
            if (this.config.oauth2.host === undefined || this.config.oauth2.host === null) {
                throw 'Missing the required oauth2 host parameter';
            }

            if (this.config.oauth2.clientId === undefined || this.config.oauth2.clientId === null) {
                throw 'Missing the required oauth2 clientId parameter';
            }

            if (this.config.oauth2.scope === undefined || this.config.oauth2.scope === null) {
                throw 'Missing the required oauth2 scope parameter';
            }

            if (this.config.oauth2.secret === undefined || this.config.oauth2.secret === null) {
                this.config.oauth2.secret = '';
            }

            if ((this.config.oauth2.redirectUri === undefined || this.config.oauth2.redirectUri === null) && this.config.oauth2.implicitFlow) {
                throw 'Missing redirectUri required parameter';
            }

            if (!this.config.oauth2.refreshTokenTimeout) {
                this.config.oauth2.refreshTokenTimeout = 40000;
            }

            if (!this.config.oauth2.redirectSilentIframeUri) {
                let context = '';
                if (typeof window !== 'undefined') {
                    context = window.location.origin;
                }
                this.config.oauth2.redirectSilentIframeUri = context + '/assets/silent-refresh.html';
            }

            Oauth2Auth.basePath = this.config.oauth2.host; //Auth Call

            this.host = this.config.oauth2.host;

            this.initOauth(); // jshint ignore:line

        }

        Emitter.call(this);
    }

    initOauth() {
        if (!this.config.oauth2.implicitFlow && this.isValidAccessToken()) {
            const accessToken = this.storage.getItem('access_token');
            this.setToken(accessToken, null);
        }
        return Promise.resolve()
            .then(() => {
                return this.discoveryUrls();
            })
            .then(() => {
                if (this.config.oauth2.implicitFlow) {
                    return this.loadJwks();
                }
            })
            .then(() => {
                if (this.config.oauth2.implicitFlow) {
                    return this.checkFragment();
                }
            });
    }

    discoveryUrls() {
        return new Promise((resolve, reject) => {
            let discoveryStore = this.storage.getItem('discovery');
            if (discoveryStore) {
                this.discovery = JSON.parse(discoveryStore);
            }

            if (!this.discovery) {
                let postBody = {}, pathParams = {}, queryParams = {}, formParams = {}, headerParams = {};
                let contentTypes = ['application/json'];
                let accepts = ['application/json'];

                let url = '.well-known/openid-configuration';
                this.callApi(
                    url, 'GET',
                    pathParams, queryParams, headerParams, formParams, postBody,
                    contentTypes, accepts, {}
                ).then((discovery) => {
                    this.discovery = {};
                    this.discovery.loginUrl = discovery.authorization_endpoint;
                    this.discovery.logoutUrl = discovery.end_session_endpoint;
                    this.discovery.grantTypesSupported = discovery.grant_types_supported;
                    this.discovery.issuer = discovery.issuer;
                    this.discovery.tokenEndpoint = discovery.token_endpoint;
                    this.discovery.userinfoEndpoint = discovery.userinfo_endpoint;
                    this.discovery.jwksUri = discovery.jwks_uri;
                    this.discovery.sessionCheckIFrameUrl = discovery.check_session_iframe;

                    this.emit('discovery', this.discovery);
                    this.storage.setItem('discovery', JSON.stringify(this.discovery));
                    resolve(discovery);
                }, (error) => {
                    reject(error.error);
                });
            } else {
                this.emit('discovery', this.discovery);
                resolve(this.discovery);
            }
        });

    }

    loadJwks() {
        return new Promise((resolve, reject) => {
            let jwksStore = this.storage.getItem('jwks');
            if (jwksStore) {
                this.jwks = JSON.parse(jwksStore);
            }

            if (this.discovery.jwksUri) {
                if (!this.jwks) {
                    let postBody = {}, pathParams = {}, queryParams = {}, formParams = {}, headerParams = {};
                    let contentTypes = ['application/json'];
                    let accepts = ['application/json'];

                    this.callCustomApi(
                        this.discovery.jwksUri, 'GET',
                        pathParams, queryParams, headerParams, formParams, postBody,
                        contentTypes, accepts, {}
                    ).then((jwks) => {
                        this.jwks = jwks;
                        this.emit('jwks', jwks);
                        this.storage.setItem('jwks', JSON.stringify(jwks));
                        resolve(jwks);
                    }, (error) => {
                        reject(error.error);
                    });
                } else {
                    this.emit('jwks', this.jwks);
                    resolve(this.jwks);
                }
            } else {
                reject('jwks error');
            }
        });
    }

    checkFragment(externalHash?: any) {// jshint ignore:line
        return new Promise((resolve, reject) => {

            this.hashFragmentParams = this.getHashFragmentParams(externalHash);

            if (externalHash === undefined && this.isValidAccessToken()) {
                let accessToken = this.storage.getItem('access_token');
                this.setToken(accessToken, null);
                this.silentRefresh();
                resolve(accessToken);
            }

            if (this.hashFragmentParams) {
                let accessToken = this.hashFragmentParams.access_token;
                let idToken = this.hashFragmentParams.id_token;
                let sessionState = this.hashFragmentParams.session_state;
                let expiresIn = this.hashFragmentParams.expires_in;

                if (!sessionState) {
                    reject('session state not present');
                }

                this.processJWTToken(idToken).then((jwt: any) => {
                    if (jwt) {
                        this.storeIdToken(idToken, jwt.payload.exp);
                        this.storeAccessToken(accessToken, expiresIn);
                        Oauth2Auth.authentications.basicAuth.username = jwt.payload.preferred_username;
                        this.saveUsername(jwt.payload.preferred_username);
                        this.silentRefresh();
                        resolve(accessToken);
                    }
                }, (error) => {
                    reject('Validation JWT error' + error);
                });
            } else {
                if (this.config.oauth2.silentLogin) {
                    this.implicitLogin();
                }
            }
        });

    }

    padBase64(base64data: any) {
        while (base64data.length % 4 !== 0) {
            base64data += '=';
        }
        return base64data;
    }

    processJWTToken(jwt: any) {
        return new Promise((resolve, reject) => {
            if (jwt) {

                const jwtArray = jwt.split('.');
                const headerBase64 = this.padBase64(jwtArray[0]);
                const headerJson = this.b64DecodeUnicode(headerBase64);
                const header = JSON.parse(headerJson);

                const payloadBase64 = this.padBase64(jwtArray[1]);
                const payloadJson = this.b64DecodeUnicode(payloadBase64);
                const payload = JSON.parse(payloadJson);

                const savedNonce = this.storage.getItem('nonce');

                if (!payload.sub) {
                    reject('Missing sub in JWT');
                }

                if (payload.nonce !== savedNonce) {
                    reject('Failing nonce JWT is not corrisponding' + payload.nonce);
                }

                if (this.jwks) {
                    resolve({
                        idToken: jwt,
                        payload: payload,
                        header: header
                    });
                }
            }
        });
    }

    b64DecodeUnicode(b64string: string) {
        const base64 = b64string.replace(/\-/g, '+').replace(/\_/g, '/');
        return decodeURIComponent(
            atob(base64)
                .split('')
                .map((c) => {
                    return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
                })
                .join('')
        );
    }

    storeIdToken(idToken: string, exp: number) {
        this.storage.setItem('id_token', idToken);
        this.storage.setItem('id_token_expires_at', Number(exp * 1000).toString());
        this.storage.setItem('id_token_stored_at', Date.now().toString());
    }

    storeAccessToken(accessToken: string, expiresIn: number) {
        this.storage.setItem('access_token', accessToken);

        const expiresInMilliSeconds = expiresIn * 1000;
        const now = new Date();
        const expiresAt = now.getTime() + expiresInMilliSeconds;

        this.storage.setItem('access_token_expires_in', expiresAt);
        this.storage.setItem('access_token_stored_at', Date.now().toString());
        this.setToken(accessToken, null);
    }

    saveUsername(username: string) {
        if (this.storage.supportsStorage()) {
            this.storage.setItem('USERNAME', username);
        }
    }

    implicitLogin() {
        if (!this.isValidToken() || !this.isValidAccessToken()) {
            if (this.discovery && this.discovery.loginUrl) {
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

    isValidToken(): boolean {
        let validToken = false;
        if (this.getIdToken()) {
            let expiresAt = this.storage.getItem('id_token_expires_at'),
                now = new Date();
            if (expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
                validToken = true;
            }
        }

        return validToken;
    }

    isValidAccessToken(): boolean {
        let validAccessToken = false;

        if (this.getAccessToken()) {
            const expiresAt = this.storage.getItem('access_token_expires_in');
            const now = new Date();
            if (expiresAt && parseInt(expiresAt, 10) >= now.getTime()) {
                validAccessToken = true;
            }
        }

        return validAccessToken;
    }

    getIdToken(): string {
        return this.storage.getItem('id_token');
    }

    getAccessToken(): string {
        return this.storage.getItem('access_token');
    }

    redirectLogin() {
        if (this.config.oauth2.implicitFlow && typeof window !== 'undefined') {
            let href = this.composeImplicitLoginUrl();
            window.location.href = href;
            this.emit('implicit_redirect', href);
        }
    }

    genNonce(): string {
        let text = '';
        const possible =
            'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < 40; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }

        return text;
    }

    composeImplicitLoginUrl(): string {
        let nonce = this.genNonce();

        this.storage.setItem('nonce', nonce);

        let separation = this.discovery.loginUrl.indexOf('?') > -1 ? '&' : '?';

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

    composeIframeLoginUrl(): string {
        let nonce = this.genNonce();

        this.storage.setItem('nonce', nonce);

        let separation = this.discovery.loginUrl.indexOf('?') > -1 ? '&' : '?';

        return this.discovery.loginUrl +
            separation +
            'client_id=' +
            encodeURIComponent(this.config.oauth2.clientId) +
            '&redirect_uri=' +
            encodeURIComponent(this.config.oauth2.redirectSilentIframeUri) +
            '&scope=' +
            encodeURIComponent(this.config.oauth2.scope) +
            '&response_type=' +
            encodeURIComponent('id_token token') +
            '&nonce=' +
            encodeURIComponent(nonce) +
            '&prompt=none';

    }

    hasHashCharacter(hash: string): boolean {
        return hash.indexOf('#') === 0;
    }

    startWithHashRoute(hash: string) {
        return hash.startsWith('#/');
    }

    getHashFragmentParams(externalHash: string) {
        let hashFragmentParams = null;

        if (typeof window !== 'undefined') {
            let hash;

            if (!externalHash) {
                hash = decodeURIComponent(window.location.hash);
                if (!this.startWithHashRoute(hash)) {
                    window.location.hash = '';
                }
            } else {
                hash = decodeURIComponent(externalHash);
                this.removeHashFromSilentIframe();
                this.destroyIframe();
            }

            if (this.hasHashCharacter(hash) && !this.startWithHashRoute(hash)) {
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

    parseQueryString(queryString: string): any {
        const data = {};
        let pairs, pair, separatorIndex, escapedKey, escapedValue, key, value;

        if (queryString !== null) {
            pairs = queryString.split('&');

            for (let i = 0; i < pairs.length; i++) {
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
        }, this.config.oauth2.refreshTokenTimeout);
    }

    removeHashFromSilentIframe() {
        let iframe: any = document.getElementById('silent_refresh_token_iframe');
        if (iframe && iframe.contentWindow.location.hash) {
            iframe.contentWindow.location.hash = '';
        }
    }

    createIframe() {
        const iframe = document.createElement('iframe');
        iframe.id = 'silent_refresh_token_iframe';
        let loginUrl = this.composeIframeLoginUrl();
        iframe.setAttribute('src', loginUrl);
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        this.iFameHashListner = () => {
            let silentRefreshTokenIframe: any = document.getElementById('silent_refresh_token_iframe');
            let hash = silentRefreshTokenIframe.contentWindow.location.hash;
            this.checkFragment(hash);
        };

        iframe.addEventListener('load', this.iFameHashListner);
    }

    destroyIframe() {
        const iframe = document.getElementById('silent_refresh_token_iframe');

        if (iframe) {
            iframe.removeEventListener('load', this.iFameHashListner);
            document.body.removeChild(iframe);
        }
    }

    /**
     * login Alfresco API
     * @returns {Promise} A promise that returns {new authentication token} if resolved and {error} if rejected.
     * */
    login(username: string, password: string): Promise<any> {
        let promise = new Promise((resolve, reject) => {
            if (this.discovery) {
                this.grantPasswordLogin(username, password, resolve, reject);
            } else {
                this.on('discovery', () => {
                    this.grantPasswordLogin(username, password, resolve, reject);
                });
            }
        });

        return promise;
    }

    grantPasswordLogin(username: string, password: string, resolve: any, reject: any) {
        let postBody = {}, pathParams = {}, queryParams = {};

        let authHeader = this.basicAuth(Oauth2Auth.authentications.basicAuth.username, Oauth2Auth.authentications.basicAuth.password);

        let headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': authHeader
        };

        let formParams = {
            username: username,
            password: password,
            grant_type: 'password',
            client_id: this.config.oauth2.clientId
        };

        let contentTypes = ['application/x-www-form-urlencoded'];
        let accepts = ['application/json'];

        let promise = this.callCustomApi(
            this.discovery.tokenEndpoint, 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, {}
        ).then(
            (data: any) => {
                this.saveUsername(username);
                this.setToken(data.access_token, data.refresh_token);
                this.storeAccessToken(data.access_token, data.expires_in);
                resolve(data);
            },
            (error) => {
                if (error.error.status === 401) {
                    this.emit('unauthorized');
                }
                this.emit('error');
                reject(error.error);
            });

        Emitter(promise); // jshint ignore:line
    }

    /**
     * Refresh the  Token
     * */
    refreshToken(): Promise<any> {
        let postBody = {}, pathParams = {}, queryParams = {}, formParams = {};

        let auth = 'Basic ' + btoa(this.config.oauth2.clientId + ':' + this.config.oauth2.secret);

        let headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache',
            'Authorization': auth
        };

        queryParams = {
            refresh_token: Oauth2Auth.authentications.oauth2.refreshToken,
            grant_type: 'refresh_token'
        };

        let contentTypes = ['application/x-www-form-urlencoded'];
        let accepts = ['application/json'];

        let promise = new Promise((resolve, reject) => {
            this.callCustomApi(
                this.discovery.tokenEndpoint, 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts, {}
            ).then(
                (data: any) => {
                    this.setToken(data.access_token, data.refresh_token);
                    resolve(data);
                },
                (error) => {
                    if (error.error.status === 401) {
                        this.emit('unauthorized');
                    }
                    this.emit('error');
                    reject(error.error);
                });
        });

        Emitter(promise); // jshint ignore:line

        return promise;
    }

    /**
     * Set the current Token
     * */
    setToken(token: string, refreshToken: string) {
        Oauth2Auth.authentications.oauth2.accessToken = token;
        Oauth2Auth.authentications.oauth2.refreshToken = refreshToken;
        Oauth2Auth.authentications.basicAuth.password = null;
        this.token = token;
        this.emit('token_issued');
    }

    /**
     * Get the current Token
     *
     * */
    getToken(): string {
        return this.token;
    }

    /**
     * return the Authentication
     *
     * @returns {Object} authentications
     * */
    getAuthentication(): Authentication {
        return Oauth2Auth.authentications;
    }

    /**
     * Change the Host
     * */
    changeHost(host: string) {
        this.config.hostOauth2 = host;
    }

    /**
     * If the client is logged in retun true
     *
     * @returns {Boolean} is logged in
     */
    isLoggedIn(): boolean {
        return !!Oauth2Auth.authentications.oauth2.accessToken;
    }

    /**
     * Logout
     **/
    logOut() {
        const id_token = this.getIdToken();

        this.invalidateSession();

        this.setToken(null, null);

        let separation = this.discovery.logoutUrl.indexOf('?') > -1 ? '&' : '?';

        let redirectLogout = this.config.oauth2.redirectUriLogout || this.config.oauth2.redirectUri;

        let logoutUrl = this.discovery.logoutUrl +
            separation +
            'post_logout_redirect_uri=' +
            encodeURIComponent(redirectLogout) +
            '&id_token_hint=' +
            encodeURIComponent(id_token);

        let returnPromise = Promise.resolve().then(() => {
            if (this.config.oauth2.implicitFlow && typeof window !== 'undefined') {
                window.location.href = logoutUrl;
            }
        });

        return returnPromise;
    }

    invalidateSession() {
        this.storage.removeItem('access_token');
        this.storage.removeItem('access_token_expires_in');
        this.storage.removeItem('access_token_stored_at');

        this.storage.removeItem('id_token');
        this.storage.removeItem('id_token');
        this.storage.removeItem('id_token_claims_obj');
        this.storage.removeItem('id_token_expires_at');
        this.storage.removeItem('id_token_stored_at');

        this.storage.removeItem('nonce');
        this.storage.removeItem('jwks');
        this.storage.removeItem('discovery');
    }
}
