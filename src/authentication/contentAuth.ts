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
import { AuthenticationApi } from '../api-new/auth-rest-api/api/authentication.api';
import { AlfrescoApiClient } from '../alfrescoApiClient';
import { AlfrescoApiConfig } from '../alfrescoApiConfig';
import { Storage } from '../storage';
import { AlfrescoApi } from '../alfrescoApi';
import { Authentication } from './authentication';

const Emitter = _Emitter;

export class ContentAuth extends AlfrescoApiClient {

    private static instance: ContentAuth = null;

    config: AlfrescoApiConfig;
    static basePath: string;
    ticketStorageLabel: string;
    storage: Storage;
    ticket: string;
    static authentications: Authentication = new Authentication({
        'basicAuth': { ticket: '' }, type: 'basic'
    });
    authApi: AuthenticationApi;

    static getInstance(config: AlfrescoApiConfig, alfrescoApi: AlfrescoApi): ContentAuth {
        if (!ContentAuth.instance) {
            ContentAuth.instance = new ContentAuth(config, alfrescoApi);
            ContentAuth.instance.authApi = new AuthenticationApi(alfrescoApi);
        } else {
            ContentAuth.instance.setConfig(config);
        }

        return ContentAuth.instance;
    }

    constructor(config: AlfrescoApiConfig, alfrescoApi: AlfrescoApi) {
        super();
        this.className = 'ContentAuth';

        this.setConfig(config);

        Emitter.call(this);
    }

    setConfig(config: AlfrescoApiConfig) {
        this.config = config;

        ContentAuth.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call

        if (this.config.domainPrefix) {
            this.ticketStorageLabel = this.config.domainPrefix.concat('-ticket-ECM');
        } else {
            this.ticketStorageLabel = 'ticket-ECM';
        }

        if (this.config.ticketEcm) {
            this.setTicket(config.ticketEcm);
        } else if (this.storage.getItem(this.ticketStorageLabel)) {
            this.setTicket(this.storage.getItem(this.ticketStorageLabel));
        }

    }

    changeHost() {
        ContentAuth.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call
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
        ContentAuth.authentications.basicAuth.username = username;
        ContentAuth.authentications.basicAuth.password = password;

        let loginRequest: any = {};

        loginRequest.userId = ContentAuth.authentications.basicAuth.username;
        loginRequest.password = ContentAuth.authentications.basicAuth.password;

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
        ContentAuth.authentications.basicAuth.username = 'ROLE_TICKET';
        ContentAuth.authentications.basicAuth.password = ticket;
        this.storage.setItem(this.ticketStorageLabel, ticket);
        this.ticket = ticket;
    }

    /**
     * Get the current Ticket
     * */
    getTicket(): string {
        return this.ticket;
    }

    invalidateSession() {
        this.storage.removeItem(this.ticketStorageLabel);
        ContentAuth.authentications.basicAuth.username = null;
        ContentAuth.authentications.basicAuth.password = null;
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
        return ContentAuth.authentications;
    }

}

Emitter(ContentAuth.prototype); // jshint ignore:line
