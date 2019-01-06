/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import * as  _Emitter from 'event-emitter';

import { ContentAuth } from './authentication/contentAuth';
import { ProcessAuth } from './authentication/processAuth';
import { Oauth2Auth } from './authentication/oauth2Auth';
import { ContentClient } from './contentClient';
import { ProcessClient } from './processClient';
import { Storage } from './storage';
import { AlfrescoApiConfig } from './alfrescoApiConfig';
import { Authentication } from './authentication/authentication';

const Emitter = _Emitter;

export class AlfrescoApi {

    storage: Storage;
    config: AlfrescoApiConfig;
    contentClient: ContentClient;
    contentPrivateClient: ContentClient;
    processClient: ProcessClient;
    searchClient: ContentClient;
    discoveryClient: ContentClient;
    gsClient: ContentClient;
    authClient: ContentClient;
    oauth2Auth: Oauth2Auth;
    processAuth: ProcessAuth;
    contentAuth: ContentAuth;

    on = Emitter.on;
    off = Emitter.off;
    once = Emitter.once;
    emit = Emitter.emit;

    constructor() {
        this.on = (new Emitter()).on;
        this.off = (new Emitter()).off;
        this.once = (new Emitter()).once;
        this.emit = (new Emitter()).emit;

        Emitter.call(this);
    }

    setConfig(config: AlfrescoApiConfig) {
        if (!config) {
            config = {};
        }

        this.storage = new Storage();

        this.config = {
            hostEcm: config.hostEcm || 'http://127.0.0.1:8080',
            hostBpm: config.hostBpm || 'http://127.0.0.1:9999',
            oauth2: config.oauth2,
            authType: config.authType || 'BASIC',
            contextRoot: config.contextRoot || 'alfresco',
            contextRootBpm: config.contextRootBpm || 'activiti-app',
            provider: config.provider || 'ECM',
            ticketEcm: config.ticketEcm,
            ticketBpm: config.ticketBpm,
            accessToken: config.accessToken,
            disableCsrf: config.disableCsrf || false,
            domainPrefix: config.domainPrefix || '',
            withCredentials: config.withCredentials || false
        };

        this.contentPrivateClient = new ContentClient(this.config, '/api/-default-/private/alfresco/versions/1');
        this.contentClient = new ContentClient(this.config, '/api/-default-/public/alfresco/versions/1');
        this.authClient = new ContentClient(this.config, '/api/-default-/public/authentication/versions/1');
        this.searchClient = new ContentClient(this.config, '/api/-default-/public/search/versions/1');
        this.discoveryClient = new ContentClient(this.config, '/api');
        this.gsClient = new ContentClient(this.config, '/api/-default-/public/gs/versions/1');
        this.processClient = new ProcessClient(this.config);

        this.errorListeners();

        if (this.isOauthConfiguration()) {
            this.oauth2Auth = new Oauth2Auth(this.config);
            this.setAuthenticationClientECMBPM(this.oauth2Auth.getAuthentication(), this.oauth2Auth.getAuthentication());
        } else {
            this.processAuth = ProcessAuth.getInstance(this.config);
            this.contentAuth = ContentAuth.getInstance(this.config, this);
            this.setAuthenticationClientECMBPM(this.contentAuth.getAuthentication(), this.processAuth.getAuthentication());
        }

        return config;
    }

    errorListeners() {

        // this.contentClient.off('error');
        //
        // this.contentPrivateClient.off('error');
        //
        // this.processClient.off('error');
        //
        // this.searchClient.off('error');
        //
        // this.discoveryClient.off('error');
        //
        // this.gsClient.off('error');

        this.contentClient.on('error', (error: any) => {
            this.errorHandler(error);
        });

        this.contentPrivateClient.on('error', (error: any) => {
            this.errorHandler(error);
        });

        this.processClient.on('error', (error: any) => {
            this.errorHandler(error);
        });

        this.searchClient.on('error', (error: any) => {
            this.errorHandler(error);
        });

        this.discoveryClient.on('error', (error: any) => {
            this.errorHandler(error);
        });

        this.gsClient.on('error', (error) => {
            this.errorHandler(error);
        });
    }

    errorHandler(error) {
        if (error.status === 401) {
            this.invalidateSession();
        }

        this.emit('error', error);
    }

    changeWithCredentialsConfig(withCredentials: boolean) {
        this.config.withCredentials = withCredentials;
    }

    changeCsrfConfig(disableCsrf: boolean) {
        this.config.disableCsrf = disableCsrf;
        this.processAuth.changeCsrfConfig(disableCsrf);
    }

    changeEcmHost(hostEcm: string) {
        this.config.hostEcm = hostEcm;
        this.contentAuth.changeHost();
        this.contentClient.changeHost();
    }

    changeBpmHost(hostBpm: string) {
        this.config.hostBpm = hostBpm;
        this.processAuth.changeHost();
        this.processClient.changeHost();
    }

    /**
     * login Alfresco API
     * @param  username:   // Username to login
     * @param  password:   // Password to login
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login(username: string, password: string): Promise<any> {

        if (username) {
            username = username.trim();
        }

        if (this.isOauthConfiguration()) {

            let oauth2AuthPromise;

            oauth2AuthPromise = this.oauth2Auth.login(username, password);

            oauth2AuthPromise.then((accessToken) => {
                this.config.accessToken = accessToken;
            }, () => {
                console.log('login OAUTH error');
            });

            return oauth2AuthPromise;

        } else {

            if (this.isBpmConfiguration()) {
                let processPromise = this.processAuth.login(username, password);

                processPromise.then((ticketBpm) => {
                    this.config.ticketBpm = ticketBpm;
                }, () => {
                    console.log('login BPM error');
                });

                return processPromise;
            } else if (this.isEcmConfiguration()) {
                let contentPromise = this.contentAuth.login(username, password);

                contentPromise.then((ticketEcm) => {
                    this.setAuthenticationClientECMBPM(this.contentAuth.getAuthentication(), null);

                    this.config.ticketEcm = ticketEcm;
                }, () => {
                    console.log('login ECM error');
                });

                return contentPromise;

            } else if (this.isEcmBpmConfiguration()) {
                let contentProcessPromise = this._loginBPMECM(username, password);

                contentProcessPromise.then((data) => {
                    this.config.ticketEcm = data[0];
                    this.config.ticketBpm = data[1];
                });

                return contentProcessPromise;
            }
        }
    }

    implicitLogin(): Promise<any> {
        if (!this.isOauthConfiguration()) {
            return Promise.reject('Missing the required oauth2 configuration');
        }

        return new Promise(() => {
            this.oauth2Auth.implicitLogin();
        });
    }

    setAuthenticationClientECMBPM(authECM: Authentication, authBPM: Authentication) {
        this.contentClient.setAuthentications(authECM);
        this.searchClient.setAuthentications(authECM);
        this.contentPrivateClient.setAuthentications(authECM);
        this.processClient.setAuthentications(authBPM);
        this.searchClient.setAuthentications(authECM);
        this.discoveryClient.setAuthentications(authECM);
        this.gsClient.setAuthentications(authECM);
    }

    /**
     * login Tickets
     *
     * @param   ticketEcm // alfresco ticket
     * @param   ticketBpm // alfresco ticket
     * */
    loginTicket(ticketEcm: string, ticketBpm: string): Promise<any> {
        this.config.ticketEcm = ticketEcm;
        this.config.ticketBpm = ticketBpm;

        return this.contentAuth.validateTicket();
    }

    _loginBPMECM(username: string, password: string): Promise<any> {
        let contentPromise = this.contentAuth.login(username, password);
        let processPromise = this.processAuth.login(username, password);

        let promise: any = new Promise((resolve, reject) => {
            Promise.all([contentPromise, processPromise]).then(
                (data) => {
                    promise.emit('success');
                    resolve(data);
                },
                (error) => {
                    this.contentAuth.invalidateSession();
                    this.processAuth.invalidateSession();

                    if (error.status === 401) {
                        promise.emit('unauthorized');
                    }
                    promise.emit('error');
                    reject(error);
                });
        });

        Emitter(promise); // jshint ignore:line

        return promise;
    }

    /**
     * logout Alfresco API
     * */
    logout(): Promise<any> {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.logOut();
        } else {
            if (this.isBpmConfiguration()) {
                return this.processAuth.logout();
            } else if (this.isEcmConfiguration()) {
                let contentPromise = this.contentAuth.logout();
                contentPromise.then(() => {
                    this.config.ticket = undefined;
                }, () => {
                });

                return contentPromise;
            } else if (this.isEcmBpmConfiguration()) {
                return this._logoutBPMECM();
            }
        }
    }

    _logoutBPMECM(): Promise<any> {
        let contentPromise = this.contentAuth.logout();
        let processPromise = this.processAuth.logout();

        let promise: any = new Promise((resolve, reject) => {
            Promise.all([contentPromise, processPromise]).then(
                (data) => {
                    this.config.ticket = undefined;
                    promise.emit('logout');
                    resolve('logout');
                },
                (error) => {
                    if (error.status === 401) {
                        promise.emit('unauthorized');
                    }
                    promise.emit('error');
                    reject(error);
                });
        });

        Emitter(promise); // jshint ignore:line

        return promise;
    }

    /**
     * If the client is logged in retun true
     */
    isLoggedIn(): boolean {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.isLoggedIn();
        } else {
            if (this.isBpmConfiguration()) {
                return this.processAuth.isLoggedIn();
            } else if (this.isEcmConfiguration()) {
                return this.contentAuth.isLoggedIn();
            } else if (this.isEcmBpmConfiguration()) {
                return this.contentAuth.isLoggedIn() && this.processAuth.isLoggedIn();
            }
        }
    }

    isBpmLoggedIn(): boolean {
        if (this.isBpmConfiguration() || this.isEcmBpmConfiguration()) {
            if (this.isOauthConfiguration()) {
                return this.oauth2Auth.isLoggedIn();
            } else {
                return this.processAuth.isLoggedIn();
            }
        }
        return false;
    }

    isEcmLoggedIn(): boolean {
        if (this.isEcmConfiguration() || this.isEcmBpmConfiguration()) {
            if (this.isOauthConfiguration()) {
                return this.oauth2Auth.isLoggedIn();
            } else {
                return this.contentAuth.isLoggedIn();
            }
        }
        return false;
    }

    getBpmUsername(): string {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.storage.getItem('USERNAME');
        } else {
            return this.processAuth.storage.getItem('APS_USERNAME');
        }
    }

    getEcmUsername(): string {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.storage.getItem('USERNAME');
        } else {
            return this.contentAuth.storage.getItem('ACS_USERNAME');
        }
    }

    /**
     * refresh token
     * */
    refreshToken(): Promise<string> {
        if (!this.isOauthConfiguration()) {
            return Promise.reject('Missing the required oauth2 configuration');
        }

        if (this.config.oauth2.implicitFlow) {
            return Promise.reject('Manual refresh token not possible in implicit flow');
        }

        return this.oauth2Auth.refreshToken();
    }

    getTicketAuth(): string {
        return this.oauth2Auth && this.oauth2Auth.getToken();
    }

    /**
     * Set the current Ticket
     *
     * @param ticketEcm
     * @param TicketBpm
     * */
    setTicket(ticketEcm: string, TicketBpm: string) {
        if (this.contentAuth) {
            this.contentAuth.setTicket(ticketEcm);
        }
        if (this.processAuth) {
            this.processAuth.setTicket(TicketBpm);
        }
    }

    /**
     * invalidate the current session
     * */
    invalidateSession() {
        if (this.oauth2Auth) {
            this.oauth2Auth.invalidateSession();
        } else {
            this.contentAuth.invalidateSession();
            this.processAuth.invalidateSession();
        }
    }

    /**
     * Get the current Ticket for the Bpm
     * */
    getTicketBpm(): string {
        return this.processAuth && this.processAuth.getTicket();
    }

    /**
     * Get the current Ticket for the Ecm
     * */
    getTicketEcm(): string {
        return this.contentAuth && this.contentAuth.getTicket();
    }

    /**
     * Get the current Ticket for the Ecm and BPM
     * */
    getTicket(): string[] {
        return [this.contentAuth.getTicket(), this.processAuth.getTicket()];
    }

    isBpmConfiguration(): boolean {
        return this.config.provider && this.config.provider.toUpperCase() === 'BPM';
    }

    isEcmConfiguration(): boolean {
        return this.config.provider && this.config.provider.toUpperCase() === 'ECM';
    }

    isOauthConfiguration(): boolean {
        return this.config.authType === 'OAUTH';
    }

    isEcmBpmConfiguration(): boolean {
        return this.config.provider && this.config.provider.toUpperCase() === 'ALL';
    }
}
