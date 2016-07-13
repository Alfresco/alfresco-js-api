'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index');
var AlfrescoMock = require('../test/mockObjects/mockAlfrescoApi.js');
var AlfrescoApiClient = require('./alfrescoApiClient');
var AlfrescoContent = require('./alfrescoContent');
var AlfrescoNode = require('./alfrescoNode');
var AlfrescoSearch = require('./alfrescoSearch');
var AlfrescoUpload = require('./alfrescoUpload');
var AlfrescoWebScriptApi = require('./alfrescoWebScript');
var Emitter = require('event-emitter');

class AlfrescoApi {
    /**
     * @param {Object} config
     *
     *      config = {
     *        host:       // alfrescoHost Your share server IP or DNS name
     *        contextRoot: // contextRoot default value alfresco
     *        username:   // Username to login in share
     *        password:   // Password to login in share
     *        ticket:     // Ticket if you already have a ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *    };
     */
    constructor(config) {
        this.changeConfig(config);
        Emitter.call(this);
    }

    /**
     * @param {Object} config
     *
     *      config = {
     *        host:       // alfrescoHost Your share server IP or DNS name
     *        contextRoot: // contextRoot default value alfresco
     *        username:   // Username to login in share
     *        password:   // Password to login in share
     *        ticket:     // Ticket if you already have a ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *    };
     * */
    changeConfig(config) {
        this.config = {
            host: config.host || 'http://127.0.0.1:8080',
            contextRoot: config.contextRoot || 'alfresco',
            username: config.username,
            password: config.password,
            ticket: config.ticket
        };

        this.apiAuthUrl = this.config.host + '/' + this.config.contextRoot + '/api/-default-/public/authentication/versions/1'; //Auth Call
        this.apiCoreUrl = this.config.host + '/' + this.config.contextRoot + '/api/-default-/public/alfresco/versions/1';   //Core Call

        this.createClients(this.config.host);

        AlfrescoCoreRestApi.ApiClient.instance = this.getClient();
        this.nodes = this.node = new AlfrescoNode();
        this.search = new AlfrescoSearch();
        this.content = new AlfrescoContent(this.apiCoreUrl, this.config);
        this.upload = new AlfrescoUpload();
        this.webScript = new AlfrescoWebScriptApi();
    }

    /**
     * build  Alfresco API Clients
     *
     * @param {String} host
     * */
    createClients(host) {
        this.alfrescoClient = new AlfrescoApiClient(host);
        this.alfrescoClientAuth = new AlfrescoApiClient(host);
    }

    /**
     * return an Alfresco API Client
     *
     * @returns {ApiClient} Alfresco API Client
     * */
    getClient() {
        if (this.alfrescoClient) {
            this.alfrescoClient.basePath = this.apiCoreUrl;
            this.alfrescoClient.authentications.basicAuth.username = 'ROLE_TICKET';
            this.alfrescoClient.authentications.basicAuth.password = this.config.ticket;
            return this.alfrescoClient;
        }
    }

    /**
     * return an Alfresco API Client
     *
     * @returns {ApiClient} Alfresco API Client
     * */
    getClientAuth() {
        if (this.alfrescoClientAuth) {
            this.alfrescoClientAuth.basePath = this.apiAuthUrl;
            this.alfrescoClientAuth.authentications.basicAuth.username = 'ROLE_TICKET';
            this.alfrescoClientAuth.authentications.basicAuth.password = this.config.ticket;
            return this.alfrescoClientAuth;
        }
    }

    /**
     * login Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login() {
        var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(this.getClientAuth());
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
        var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(this.getClientAuth());

        this.promise = new Promise((resolve, reject) => {
            apiInstance.deleteTicket().then(
                (data) => {
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
     * If the client is logged in retun true
     *
     * @returns {Boolean} is logged in
     */
    isLoggedIn() {
        return !!this.config.ticket;
    }

    /**
     * Set the current Ticket
     *
     * @param {String} Ticket
     * */
    setTicket(ticket) {
        this.config.ticket = ticket;
        this.alfrescoClient.authentications.basicAuth.password = ticket;
    }

    /**
     * Get the current Ticket
     *
     * @returns {String} Ticket
     * */
    getTicket() {
        return this.config.ticket;
    }
}

Emitter(AlfrescoApi.prototype); // jshint ignore:line
module.exports = AlfrescoApi;

module.exports.Core = AlfrescoCoreRestApi;
module.exports.Auth = AlfrescoAuthRestApi;
module.exports.Mock = AlfrescoMock;
