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

import * as Emitter_ from 'event-emitter';
import { AlfrescoApiClient } from './alfrescoApiClient';
import { Storage } from './storage';
import { AlfrescoApiConfig } from './alfrescoApiConfig';

const Emitter = Emitter_;

export class BpmAuth extends AlfrescoApiClient {

    config: AlfrescoApiConfig;
    basePath: string;
    storage: Storage;
    ticket: string;
    authentications: any;

    constructor(config: AlfrescoApiConfig) {
        super();
        this.className = 'BpmAuth';

        this.config = config;
        this.ticket = undefined;

        this.basePath = config.hostBpm + '/' + this.config.contextRootBpm;   //Activiti Call

        this.authentications = {
            'basicAuth': { type: 'activiti', ticket: '' }
        };

        if (this.config.ticketBpm) {
            this.setTicket(config.ticketBpm);
        } else if (this.storage.getItem('ticket-BPM')) {
            this.setTicket(this.storage.getItem('ticket-BPM'));
        }

        Emitter.call(this);
    }

    changeHost() {
        this.basePath = this.config.hostBpm + '/' + this.config.contextRootBpm;    //Activiti Call
        this.ticket = undefined;
    }

    changeCsrfConfig(disableCsrf) {
        this.config.disableCsrf = disableCsrf;
    }

    saveUsername(username) {
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

        let postBody = {}, pathParams = {}, queryParams = {};

        let headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        };
        let formParams = {
            j_username: this.authentications.basicAuth.username,
            j_password: this.authentications.basicAuth.password,
            _spring_security_remember_me: true,
            submit: 'Login'
        };

        let authNames = [];
        let contentTypes = ['application/x-www-form-urlencoded'];
        let accepts = ['application/json'];

        let promise: any = new Promise((resolve, reject) => {
            this.callApi(
                '/app/authentication', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts
            ).then(
                (data) => {
                    this.saveUsername(username);
                    let ticket = 'Basic ' + new Buffer(this.authentications.basicAuth.username + ':' + this.authentications.basicAuth.password).toString('base64');
                    this.setTicket(ticket);
                    promise.emit('success');
                    resolve(ticket);
                },
                (error) => {
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
     * logout Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    logout(): Promise<any> {
        this.saveUsername('');
        let postBody = {}, pathParams = {}, queryParams = {}, headerParams = {}, formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        let promise: any = new Promise((resolve, reject) => {
            this.callApi(
                '/app/logout', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                contentTypes, accepts
            ).then(
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
     *
     * @param  Ticket
     * */
    setTicket(ticket: string) {
        this.authentications.basicAuth.ticket = ticket;
        this.authentications.basicAuth.password = null;
        this.storage.setItem('ticket-BPM', ticket);
        this.ticket = ticket;
    }

    invalidateSession() {
        this.storage.removeItem('ticket-BPM');
        this.authentications.basicAuth.ticket = null;
        this.authentications.basicAuth.password = null;
        this.ticket = null;
    }

    /**
     * Get the current Ticket
     * */
    getTicket(): string {
        return this.ticket;
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
    getAuthentication(): any {
        return this.authentications;
    }
}

Emitter(BpmAuth.prototype); // jshint ignore:line
