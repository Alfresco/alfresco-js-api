'use strict';

var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index');
var AlfrescoApiClient = require('./alfrescoApiClient');
var Emitter = require('event-emitter');

class EcmAuth extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();
        this.config = config;
        this.basePath = this.config.host + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call

        if (this.config.ticket) {
            this.setTicket(this.config.ticket);
        } else {
            this.authentications.basicAuth.username = this.config.username;
            this.authentications.basicAuth.password = this.config.password;
        }

        Emitter.call(this);
    }

    /**
     * login Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login() {
        var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(this);
        var loginRequest = new AlfrescoAuthRestApi.LoginRequest();

        loginRequest.userId = this.config.username;
        loginRequest.password = this.config.password;

        this.promise = new Promise((resolve, reject) => {
            apiInstance.createTicket(loginRequest).then(
                (data) => {
                    this.setTicket(data.entry.id);
                    this.promise.emit('success');
                    resolve(data.entry.id);
                },
                (error) => {
                    if (error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

    /**
     * logout Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    logout() {
        var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(this);

        this.promise = new Promise((resolve, reject) => {
            apiInstance.deleteTicket().then(
                () => {
                    this.promise.emit('logout');
                    this.setTicket(undefined);
                    resolve('logout');
                },
                (error) => {
                    if (error.status === 401) {
                        this.promise.emit('unauthorized');
                    }
                    this.promise.emit('error');
                    reject(error);
                });
        });

        Emitter(this.promise); // jshint ignore:line

        return this.promise;
    }

    /**
     * Set the current Ticket
     *
     * @param {String} Ticket
     * */
    setTicket(ticket) {
        this.authentications.basicAuth.username = 'ROLE_TICKET';
        this.authentications.basicAuth.password = ticket;
        this.ticket = ticket;
    }

    /**
     * Get the current Ticket
     *
     * @returns {String} Ticket
     * */
    getTicket() {
        return this.ticket;
    }

    /**
     * If the client is logged in retun true
     *
     * @returns {Boolean} is logged in
     */
    isLoggedIn() {
        return !!this.ticket;
    }

    /**
     * return an Alfresco API Client
     *
     * @returns {ApiClient} Alfresco API Client
     * */
    getClient() {
        if (!this.alfrescoClient) {
            this.alfrescoClient = new AlfrescoApiClient(this.config.host);
        }

        this.alfrescoClient.basePath = this.config.host + '/' + this.config.contextRoot + '/api/-default-/public/alfresco/versions/1'; //Auth Call
        this.alfrescoClient.authentications = this.authentications;
        return this.alfrescoClient;
    }

}

Emitter(EcmAuth.prototype); // jshint ignore:line
module.exports = EcmAuth;
