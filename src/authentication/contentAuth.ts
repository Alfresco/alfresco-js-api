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

import * as _Emitter from 'event-emitter';
import { AuthenticationApi } from '../api/auth-rest-api/api/authentication.api';
import { AlfrescoApiClient } from '../alfrescoApiClient';
import { AlfrescoApiConfig } from '../alfrescoApiConfig';
import { Storage } from '../storage';
import { AlfrescoApi } from '../alfrescoApi';
import { Authentication } from './authentication';

const Emitter = _Emitter;

export class ContentAuth extends AlfrescoApiClient {

    config: AlfrescoApiConfig;
    basePath: string;
    storage: Storage;
    ticket: string;
    static authentications: Authentication = new Authentication({
        'basicAuth': { ticket: '' }, type: 'basic'
    });
    authApi: AuthenticationApi;

    constructor(config: AlfrescoApiConfig, alfrescoApi: AlfrescoApi) {
        super();
        this.className = 'ContentAuth';

        this.setConfig(config);

        this.authApi = new AuthenticationApi(alfrescoApi);

        Emitter.call(this);
    }

    setConfig(config: AlfrescoApiConfig) {
        this.config = config;

        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call

        if (this.config.ticketEcm) {
            this.setTicket(config.ticketEcm);
        } else if (this.storage.getItem('ticket-ECM')) {
            this.setTicket(this.storage.getItem('ticket-ECM'));
        }

    }

    changeHost() {
        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call
        this.ticket = undefined;
    }

    saveUsername(username: string) {
        if (this.storage.supportsStorage()) {
            this.storage.setItem('ACS_USERNAME', username);
        }
    }

    /**
     * login Alfresco API
     * @param  username:   // Username to login
     * @param   password:   // Password to login
     *
     * @returns A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login(username: string, password: string): Promise<any> {
        this.authentications.basicAuth.username = username;
        this.authentications.basicAuth.password = password;

        let loginRequest: any = {};

        loginRequest.userId = this.authentications.basicAuth.username;
        loginRequest.password = this.authentications.basicAuth.password;

        let promise: any = new Promise((resolve, reject) => {
            this.authApi.createTicket(loginRequest)
                .then((data: any) => {
                    this.saveUsername(username);
                    this.setTicket(data.entry.id);
                    promise.emit('success');
                    resolve(data.entry.id);
                })
                .catch((error) => {
                    this.saveUsername('');
                    if (error.status === 401) {
                        promise.emit('unauthorized');
                    } else if (error.status === 403) {
                        promise.emit('forbidden');
                    } else {
                        promise.emit('error');
                    }
                    reject(error);
                });
        });

        Emitter(promise); // jshint ignore:line
        return promise;
    }

    /**
     * validate the ticket present in this.config.ticket against the server
     *
     * @returns A promise that returns  if resolved and {error} if rejected.
     * */
    validateTicket(): Promise<any> {
        this.setTicket(this.config.ticketEcm);

        let promise: any = new Promise((resolve, reject) => {
            this.authApi.validateTicket().then((data: any) => {
                    this.setTicket(data.entry.id);
                    promise.emit('success');
                    resolve(data.entry.id);
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
     *
     * @returns {Promise} A promise that returns { authentication ticket} if resolved and {error} if rejected.
     * */
    logout(): Promise<any> {
        this.saveUsername('');
        let promise: any = new Promise((resolve, reject) => {
            this.authApi.deleteTicket().then(
                () => {
                    promise.emit('logout');
                    this.invalidateSession();
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
     * Set the current Ticket
     * */
    setTicket(ticket: string) {
        this.authentications.basicAuth.username = 'ROLE_TICKET';
        this.authentications.basicAuth.password = ticket;
        this.config.ticketEcm = ticket;
        this.storage.setItem('ticket-ECM', ticket);
        this.ticket = ticket;
    }

    /**
     * Get the current Ticket
     * */
    getTicket(): string {
        return this.ticket;
    }

    invalidateSession() {
        this.storage.removeItem('ticket-ECM');
        this.authentications.basicAuth.username = null;
        this.authentications.basicAuth.password = null;
        this.config.ticketEcm = null;
        this.ticket = null;
    }

    /**
     * If the client is logged in retun true
     */
    isLoggedIn(): boolean {
        return !!this.ticket;
    }

    /**
     * return the Authentication
     * */
    getAuthentication(): Authentication {
        return this.authentications;
    }

}

Emitter(ContentAuth.prototype); // jshint ignore:line
