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

import * as  Emitter_ from 'event-emitter';

import { AlfrescoContent } from './alfrescoContent';
import { AlfrescoUpload } from './alfrescoUpload';
import { EcmAuth } from './ecmAuth';
import { BpmAuth } from './bpmAuth';
import { Oauth2Auth } from './oauth2Auth';
import { EcmClient } from './ecmClient';
import { BpmClient } from './bpmClient';
import { Storage } from './storage';
import { AlfrescoApiConfig } from './alfrescoApiConfig';

const Emitter = Emitter_;

export class AlfrescoApi {

    storage: Storage;
    config: AlfrescoApiConfig;
    ecmClient: EcmClient;
    ecmPrivateClient: EcmClient;
    bpmClient: BpmClient;
    searchClient: EcmClient;
    discoveryClient: EcmClient;
    gsClient: EcmClient;
    authClient: EcmClient;
    oauth2Auth: Oauth2Auth;
    bpmAuth: BpmAuth;
    ecmAuth: EcmAuth;

    content: AlfrescoContent;
    upload: AlfrescoUpload;
    webScript: any;

    on = Emitter.on;
    off = Emitter.off;
    once = Emitter.once;
    emit = Emitter.emit;

    constructor() {
        //  this.config = this.configureJsApi(config);

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

        this.ecmPrivateClient = new EcmClient(this.config, '/api/-default-/private/alfresco/versions/1');
        this.ecmClient = new EcmClient(this.config, '/api/-default-/public/alfresco/versions/1');
        this.authClient = new EcmClient(this.config, '/api/-default-/public/authentication/versions/1');
        this.searchClient = new EcmClient(this.config, '/api/-default-/public/search/versions/1');
        this.discoveryClient = new EcmClient(this.config, '/api');
        this.gsClient = new EcmClient(this.config, '/api/-default-/public/gs/versions/1');
        this.bpmClient = new BpmClient(this.config);

        this.errorListeners();

        if (this.isOauthConfiguration()) {
            this.oauth2Auth = new Oauth2Auth(this.config);
            this.setAuthenticationClientECMBPM(this.oauth2Auth.getAuthentication(), this.oauth2Auth.getAuthentication());
        } else {
            this.bpmAuth = new BpmAuth(this.config);
            this.ecmAuth = new EcmAuth(this.config, this);
            this.setAuthenticationClientECMBPM(this.ecmAuth.getAuthentication(), this.bpmAuth.getAuthentication());
        }

        return config;
    }

    errorListeners() {

        // this.ecmClient.off('error');
        //
        // this.ecmPrivateClient.off('error');
        //
        // this.bpmClient.off('error');
        //
        // this.searchClient.off('error');
        //
        // this.discoveryClient.off('error');
        //
        // this.gsClient.off('error');

        this.ecmClient.on('error', (error: any) => {
            this.errorHandler(error);
        });

        this.ecmPrivateClient.on('error', (error: any) => {
            this.errorHandler(error);
        });

        this.bpmClient.on('error', (error: any) => {
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
        this.bpmAuth.changeCsrfConfig(disableCsrf);
    }

    changeEcmHost(hostEcm: string) {
        this.config.hostEcm = hostEcm;
        this.ecmAuth.changeHost();
        this.ecmClient.changeHost();
    }

    changeBpmHost(hostBpm: string) {
        this.config.hostBpm = hostBpm;
        this.bpmAuth.changeHost();
        this.bpmClient.changeHost();
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
            },()=>{
                console.log('login OAUTH error');
            });

            return oauth2AuthPromise;

        } else {

            if (this.isBpmConfiguration()) {
                let bpmPromise = this.bpmAuth.login(username, password);

                bpmPromise.then((ticketBpm) => {
                    this.config.ticketBpm = ticketBpm;
                },()=>{
                    console.log('login BPM error');
                });

                return bpmPromise;
            } else if (this.isEcmConfiguration()) {
                let ecmPromise = this.ecmAuth.login(username, password);

                ecmPromise.then((ticketEcm) => {
                    this.setAuthenticationClientECMBPM(this.ecmAuth.getAuthentication(), null);

                    this.config.ticketEcm = ticketEcm;
                },()=>{
                    console.log('login ECM error');
                });

                return ecmPromise;

            } else if (this.isEcmBpmConfiguration()) {
                let bpmEcmPromise = this._loginBPMECM(username, password);

                bpmEcmPromise.then((data) => {
                    this.config.ticketEcm = data[0];
                    this.config.ticketBpm = data[1];
                });

                return bpmEcmPromise;
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

    setAuthenticationClientECMBPM(authECM: any, authBPM: any) {
        this.ecmClient.setAuthentications(authECM);
        this.searchClient.setAuthentications(authECM);
        this.ecmPrivateClient.setAuthentications(authECM);
        this.bpmClient.setAuthentications(authBPM);
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

        return this.ecmAuth.validateTicket();
    }

    _loginBPMECM(username: string, password: string): Promise<any> {
        let ecmPromise = this.ecmAuth.login(username, password);
        let bpmPromise = this.bpmAuth.login(username, password);

        let promise: any = new Promise((resolve, reject) => {
            Promise.all([ecmPromise, bpmPromise]).then(
                (data) => {
                    promise.emit('success');
                    resolve(data);
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
     * logout Alfresco API
     * */
    logout(): Promise<any> {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.logOut();
        } else {
            if (this.isBpmConfiguration()) {
                return this.bpmAuth.logout();
            } else if (this.isEcmConfiguration()) {
                let ecmPromise = this.ecmAuth.logout();
                ecmPromise.then(() => {
                    this.config.ticket = undefined;
                }, () => {
                });

                return ecmPromise;
            } else if (this.isEcmBpmConfiguration()) {
                return this._logoutBPMECM();
            }
        }
    }

    _logoutBPMECM(): Promise<any> {
        let ecmPromise = this.ecmAuth.logout();
        let bpmPromise = this.bpmAuth.logout();

        let promise: any = new Promise((resolve, reject) => {
            Promise.all([ecmPromise, bpmPromise]).then(
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
                return this.bpmAuth.isLoggedIn();
            } else if (this.isEcmConfiguration()) {
                return this.ecmAuth.isLoggedIn();
            } else if (this.isEcmBpmConfiguration()) {
                return this.ecmAuth.isLoggedIn() && this.bpmAuth.isLoggedIn();
            }
        }
    }

    isBpmLoggedIn(): boolean {
        if (this.isBpmConfiguration() || this.isEcmBpmConfiguration()) {
            if (this.isOauthConfiguration()) {
                return this.oauth2Auth.isLoggedIn();
            } else {
                return this.bpmAuth.isLoggedIn();
            }
        }
        return false;
    }

    isEcmLoggedIn(): boolean {
        if (this.isEcmConfiguration() || this.isEcmBpmConfiguration()) {
            if (this.isOauthConfiguration()) {
                return this.oauth2Auth.isLoggedIn();
            } else {
                return this.ecmAuth.isLoggedIn();
            }
        }
        return false;
    }

    getBpmUsername(): string {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.storage.getItem('USERNAME');
        } else {
            return this.bpmAuth.storage.getItem('APS_USERNAME');
        }
    }

    getEcmUsername(): string {
        if (this.isOauthConfiguration()) {
            return this.oauth2Auth.storage.getItem('USERNAME');
        } else {
            return this.ecmAuth.storage.getItem('ACS_USERNAME');
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
        if (this.ecmAuth) {
            this.ecmAuth.setTicket(ticketEcm);
        }
        if (this.bpmAuth) {
            this.bpmAuth.setTicket(TicketBpm);
        }
    }

    /**
     * invalidate the current session
     * */
    invalidateSession() {
        if (this.oauth2Auth) {
            this.oauth2Auth.invalidateSession();
        } else {
            this.ecmAuth.invalidateSession();
            this.bpmAuth.invalidateSession();
        }
    }

    /**
     * Get the current Ticket for the Bpm
     * */
    getTicketBpm(): string {
        return this.bpmAuth && this.bpmAuth.getTicket();
    }

    /**
     * Get the current Ticket for the Ecm
     * */
    getTicketEcm(): string {
        return this.ecmAuth && this.ecmAuth.getTicket();
    }

    /**
     * Get the current Ticket for the Ecm and BPM
     * */
    getTicket(): string[] {
        return [this.ecmAuth.getTicket(), this.bpmAuth.getTicket()];
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
