'use strict';

var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index');
var AlfrescoApiClient = require('./alfrescoApiClient');
var AlfrescoContent = require('./alfrescoContent');
var AlfrescoNode = require('./alfrescoNode');
var AlfrescoSearch = require('./alfrescoSearch');
var EventEmitter = require('events').EventEmitter;
var util = require('util');

class AlfrescoApi {
    /**
     * @param {Object} config
     *
     *      config = {
     *        host:       // alfrescoHost Your share server IP or DNS name
     *        username:   // Username to login in share
     *        password:   // Password to login in share
     *        ticket:     // Ticket if you already have a ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *    };
     */
    constructor(config) {
        this.changeConfig(config);
    }

    /**
     * return an Alfresco API Client
     *
     * */
    createClients() {
        this.alfrescoClient = new AlfrescoApiClient();
        this.alfrescoClientAuth = new AlfrescoApiClient();

        if (typeof this.alfrescoClientAuth.on === 'function') {
            this.alfrescoClientAuth.on('unauthorized', (event)  => {
                this.emit('unauthorized');
            });
        }

        if (typeof this.alfrescoClientAuth.on === 'function') {
            this.alfrescoClient.on('unauthorized', (event)  => {
                this.emit('unauthorized');
            });
        }
    }

    /**
     * @param {Object} config
     *
     *      config = {
     *        host:       // alfrescoHost Your share server IP or DNS name
     *        username:   // Username to login in share
     *        password:   // Password to login in share
     *        ticket:     // Ticket if you already have a ticket you can pass only the ticket and skip the login, in this case you don't need username and password
     *    };
     * */
    changeConfig(config) {
        this.config = {
            host: config.host,
            username: config.username,
            password: config.password,
            ticket: config.ticket
        };

        this.apiAuthUrl = this.config.host + '/alfresco/api/-default-/public/authentication/versions/1'; //Auth Call
        this.apiCoreUrl = this.config.host + '/alfresco/api/-default-/public/alfresco/versions/1';   //Core Call

        this.createClients();

        AlfrescoCoreRestApi.ApiClient.instance = this.getClient();
        this.node = new AlfrescoNode();
        this.search = new AlfrescoSearch();
        this.content = new AlfrescoContent(this.apiCoreUrl, this.config);
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

        return new Promise((resolve, reject) => {
            apiInstance.createTicket(loginRequest).then((data) => {
                if (typeof this.emit === 'function') {
                    this.emit('success');
                }
                this.setToken(data.entry.id);
                resolve(data.entry.id);
            }, function (error) {
                reject(error);
            });
        });
    }

    /**
     * Set the current Token
     *
     * @param {String} token
     * */
    setToken(token) {
        this.config.ticket = token;
        this.alfrescoClient.authentications.basicAuth.password = token;
    }

    /**
     * Get the current Token
     *
     * @returns {String} token
     * */
    getToken() {
        return this.config.ticket;
    }

    /**
     * logout Alfresco API
     *
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    logout() {
        var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(this.getClientAuth());

        return new Promise((resolve, reject) => {
            apiInstance.deleteTicket().then((data) => {
                if (typeof this.emit === 'function') {
                    this.emit('logout');
                }
                this.setToken(undefined);
                resolve('logout');
            }, function (error) {
                reject(error);
            });
        });
    }

    /**
     * If the client is logged in retun true
     *
     * @returns {Boolean} is logged in
     */
    isLoggedIn() {
        return !!this.config.ticket;
    }
}

AlfrescoApi.prototype.Core = require('./alfresco-core-rest-api/src/index.js');
AlfrescoApi.prototype.Auth = require('./alfresco-auth-rest-api/src/index.js');
AlfrescoApi.prototype.Mock = require('../test/mockObjects/mockAlfrescoApi.js');

util.inherits(AlfrescoApi, EventEmitter);
module.exports = AlfrescoApi;
