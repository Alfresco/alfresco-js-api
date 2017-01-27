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

        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call

        if (this.config.ticketEcm) {
            this.setTicket(config.ticketEcm);
        }

        Emitter.call(this);
    }

    changeHost() {
        this.basePath = this.config.hostEcm + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call
        this.ticket = undefined;
    }

    /**
     * login Alfresco API
     * @param  {String} username:   // Username to login
     * @param  {String} password:   // Password to login
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login(username, password) {
        this.authentications.basicAuth.username = username;
        this.authentications.basicAuth.password = password;

        var authApi = new AlfrescoAuthRestApi.AuthenticationApi(this);
        var loginRequest = new AlfrescoAuthRestApi.LoginRequest();

        loginRequest.userId = this.authentications.basicAuth.username;
        loginRequest.password = this.authentications.basicAuth.password;

        this.promise = new Promise((resolve, reject) => {
            authApi.createTicket(loginRequest).then(
                (data) => {
                    this.setTicket(data.entry.id);
                    this.promise.emit('success');
                    resolve(data.entry.id);
                },
                (error) => {
                    if (error.status === 401) {
                        this.promise.emit('unauthorized');
                    } else if (error.status === 403) {
                        this.promise.emit('forbidden');
                    } else {
                        this.promise.emit('error');
                    }
                    reject(error);
                });
        });

        Emitter(this.promise); // jshint ignore:line
        return this.promise;
    }

    /**
     * validate the ticket present in this.config.ticket against the server
     *
     * @returns {Promise} A promise that returns  if resolved and {error} if rejected.
     * */
    validateTicket() {
        var authApi = new AlfrescoAuthRestApi.AuthenticationApi(this);

        this.promise = new Promise((resolve, reject) => {
            authApi.validateTicket().then(
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
     * @returns {Promise} A promise that returns { authentication ticket} if resolved and {error} if rejected.
     * */
    logout() {
        var authApi = new AlfrescoAuthRestApi.AuthenticationApi(this);

        this.promise = new Promise((resolve, reject) => {
            authApi.deleteTicket().then(
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
     * return the Authentication
     *
     * @returns {Object} authentications
     * */
    getAuthentication() {
        return this.authentications;
    }

}

Emitter(EcmAuth.prototype); // jshint ignore:line
module.exports = EcmAuth;
