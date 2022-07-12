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

import ee from 'event-emitter';
import { BaseAlfrescoApiClient } from '../BaseAlfrescoApi';
import { AlfrescoApiConfig } from '../alfrescoApiConfig';
import { Authentication } from './authentication';
import { Storage } from '../storage';
import { HttpClient } from '../api-clients/http-client.interface';
import { LegacyAlfrescoHttpClient } from '../alfrescoApiClient';
import { isBrowser } from '../helpers';

export class ProcessAuth extends BaseAlfrescoApiClient {

    ticket: string;
    storage: Storage;

    authentications: Authentication = {
        'basicAuth': { ticket: '' }, type: 'activiti'
    };

    constructor(config: AlfrescoApiConfig, httpClient: HttpClient = new LegacyAlfrescoHttpClient()) {
        super(httpClient);
        this.storage = new Storage();
        this.storage.setDomainPrefix(config.domainPrefix);

        this.className = 'ProcessAuth';

        if (!isBrowser()) {
            this.defaultHeaders = {
                'user-agent': 'alfresco-js-api'
            };
        }

        this.setConfig(config);
    }

    setConfig(config: AlfrescoApiConfig): void {
        this.config = config;
        this.ticket = undefined;

        this.basePath = config.hostBpm + '/' + this.config.contextRootBpm;   //Activiti Call

        if (this.config.ticketBpm) {
            this.setTicket(config.ticketBpm);
        } else if (this.storage.getItem('ticket-BPM')) {
            this.setTicket(this.storage.getItem('ticket-BPM'));
        }

    }

    changeHost(): void {
        this.basePath = this.config.hostBpm + '/' + this.config.contextRootBpm;    //Activiti Call
        this.ticket = undefined;
    }

    changeCsrfConfig(disableCsrf: boolean): void {
        this.config.disableCsrf = disableCsrf;
    }

    saveUsername(username: string): void {
        if (this.storage.supportsStorage()) {
            this.storage.setItem('APS_USERNAME', username);
        }
    }

    /**
     * login Activiti API
     * @param  username:   // Username to login
     * @param  password:   // Password to login
     *
     * @returns A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login(username: string, password: string): Promise<any> {
        this.authentications.basicAuth.username = username;
        this.authentications.basicAuth.password = password;

        const postBody = {}, pathParams = {}, queryParams = {};

        const headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        };
        const formParams = {
            j_username:  this.authentications.basicAuth.username,
            j_password:  this.authentications.basicAuth.password,
            _spring_security_remember_me: true,
            submit: 'Login'
        };

        const contentTypes = ['application/x-www-form-urlencoded'];
        const accepts = ['application/json'];

        const promise: any = new Promise((resolve, reject) => {
            this.callApi(
                '/app/authentication', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts
            ).then(
                () => {
                    this.saveUsername(username);
                    const ticket = this.basicAuth(this.authentications.basicAuth.username,  this.authentications.basicAuth.password);
                    this.setTicket(ticket);
                    promise.emit('success');
                    this.emit('logged-in');
                    resolve(ticket);
                },
                (error: any) => {
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

        ee(promise); // jshint ignore:line

        return promise;
    }

    /**
     * logout Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    logout(): Promise<any> {
        this.saveUsername('');
        const postBody = {}, pathParams = {}, queryParams = {}, headerParams = {}, formParams = {};

        const contentTypes = ['application/json'];
        const accepts = ['application/json'];

        const promise: any = new Promise((resolve, reject) => {
            this.callApi(
                '/app/logout', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts
            ).then(
                () => {
                    this.invalidateSession();
                    promise.emit('logout');
                    resolve('logout');
                },
                (error: any) => {
                    if (error.status === 401) {
                        promise.emit('unauthorized');
                    }
                    promise.emit('error');
                    reject(error);
                });
        });

        ee(promise);

        return promise;
    }

    /**
     * Set the current Ticket
     *
     * @param  Ticket
     * */
    setTicket(ticket: string): void {
        this.authentications.basicAuth.ticket = ticket;
        this.authentications.basicAuth.password = null;
        this.config.ticketBpm = ticket;
        this.storage.setItem('ticket-BPM', ticket);
        this.ticket = ticket;
    }

    invalidateSession(): void {
        this.storage.removeItem('ticket-BPM');
        this.authentications.basicAuth.ticket = null;
        this.authentications.basicAuth.password = null;
        this.authentications.basicAuth.username = null;
        this.config.ticketBpm = null;
        this.ticket = null;
    }

    /**
     * Get the current Ticket
     * */
    getTicket(): string {
        return this.ticket;
    }

    /**
     * If the client is logged in return true
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
