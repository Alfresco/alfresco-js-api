'use strict';

var AlfrescoApiClient = require('./alfrescoApiClient');
var Emitter = require('event-emitter');

class BpmAuth extends AlfrescoApiClient {

    /**
     * @param {Object} config
     */
    constructor(config) {
        super();
        this.ticket = undefined;
        this.config = config;
        this.basePath = config.hostActiviti + '/activiti-app';   //Activiti Call
        this.authentications.basicAuth.username = config.username;
        this.authentications.basicAuth.password = config.password;
        Emitter.call(this);
    }

    /**
     * login Activiti API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login() {
        var postBody = {}, pathParams = {}, queryParams = {};

        var headerParams = {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Cache-Control': 'no-cache'
        };
        var formParams = {
            j_username: this.authentications.basicAuth.username,
            j_password: this.authentications.basicAuth.password,
            _spring_security_remember_me: true,
            submit: 'Login'
        };

        var authNames = [];
        var contentTypes = ['application/x-www-form-urlencoded'];
        var accepts = ['application/json'];

        this.promise = new Promise((resolve, reject) => {
            this.callApi(
                '/app/authentication', 'POST',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts
            ).then(
                (data) => {
                    var tcket = 'Basic ' + new Buffer(this.authentications.basicAuth.username + ':' + this.authentications.basicAuth.password).toString('base64');
                    this.setTicket(tcket);
                    this.promise.emit('success');
                    resolve(tcket);
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
     * logout Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    logout() {
        var postBody = {}, pathParams = {}, queryParams = {}, headerParams = {}, formParams = {};

        var authNames = [];
        var contentTypes = ['application/json'];
        var accepts = ['application/json'];

        this.promise = new Promise((resolve, reject) => {
            this.callApi(
                '/app/logout', 'GET',
                pathParams, queryParams, headerParams, formParams, postBody,
                authNames, contentTypes, accepts
            ).then(
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
     * return an Alfresco BPM API Client
     *
     * @returns {AlfrescoApiClient} Alfresco BPM API Client
     * */
    getClient() {
        return this;
    }

}

Emitter(BpmAuth.prototype); // jshint ignore:line
module.exports = BpmAuth;
