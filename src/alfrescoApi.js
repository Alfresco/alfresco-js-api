'use strict';

var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index');
var AlfrescoApiClient = require('./alfrescoApiClient');
var alfrescoContent = require('./alfrescoContent');
var AlfrescoNode = require('./AlfrescoNode');
//var EventEmitter = require('events').EventEmitter;
//var util = require('util');

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
        this.config = {
            host: config.host,
            username: config.username,
            password: config.password,
            ticket: config.ticket
        };

        this.apiAuthUrl = this.config.host + '/alfresco/api/-default-/public/authentication/versions/1'; //Auth Call
        this.apiCoreUrl = this.config.host + '/alfresco/api/-default-/public/alfresco/versions/1';   //Core Call

        this.createClient();
    }

    /**
     * return an Alfresco API Client
     *
     * @returns {ApiClient} Alfresco API Client
     * */
    createClient() {
        this.alfrescoClient = new AlfrescoApiClient();

        //this.alfrescoClient.on('unauthorized', (event)  => {
        //    this.emit('unauthorized');
        //});
        return this.alfrescoClient;
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
        if (this.alfrescoClient) {
            this.alfrescoClient.basePath = this.apiAuthUrl;
            this.alfrescoClient.authentications.basicAuth.username = 'ROLE_TICKET';
            this.alfrescoClient.authentications.basicAuth.password = this.config.ticket;
            return this.alfrescoClient;
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
                //this.emit('success');
                this.config.ticket = data.entry.id;
                resolve(data.entry.id);
            }, function (error) {
                reject(error);
            });
        });
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
                //this.emit('logout');
                this.config.ticket = undefined;
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

    /**
     * Get thumbnail URL for the given documentId
     *
     * @param {String} documentId of the document
     *
     * @returns {String} thumbnail URL address.
     */
    getDocumentThumbnailUrl(documentId) {
        return alfrescoContent.getDocumentThumbnailUrl(documentId, this.apiCoreUrl, this.config.ticket);
    }

    /**
     * Get content URL for the given documentId
     *
     * @param {String} documentId of the document
     *
     * @returns {String}  content URL  address.
     */
    getContentUrl(documentId) {
        return alfrescoContent.getContentUrl(documentId, this.apiCoreUrl, this.config.ticket);
    }

    /**
     * Get Info about file or folder by given nodeId
     * Minimal information for each child is returned by default.
     * You can use the include parameter to return addtional information.
     *
     * @param {String} nodeId
     *
     * @returns {Promise} A promise that return the file/folder data if resolved and {error} if rejected.
     */
    getNodeInfo(nodeId) {
        this.alfrescoNodeApi = new AlfrescoNode(this.getClient());
        return this.alfrescoNodeApi.getNodeInfo(nodeId);
    }

    /**
     * Get Info about the children of the node with identifier nodeId.
     * Minimal information for each child is returned by default.
     * You can use the include parameter to return addtional information.
     *
     * @param {String} nodeId
     * @param {Object} opts
     *
     * @returns {Promise} A promise that return the Info about the children of the node if resolved and {error} if rejected.
     */
    getNodeChildrenInfo(nodeId, opts) {
        this.alfrescoNodeApi = new AlfrescoNode(this.getClient());
        return this.alfrescoNodeApi.getNodeChildrenInfo(nodeId, opts);
    }

    /**
     * Delete node by ID, If the nodeId is a folder, then its children are also
     * Deleted nodes move to the trashcan
     *
     * @param {String} nodeId
     *
     * @returns {Promise} A promise that is resolved if the file is deleted and {error} if rejected.
     */
    deleteNode(nodeId) {
        this.alfrescoNodeApi = new AlfrescoNode(this.getClient());
        return this.alfrescoNodeApi.deleteNode(nodeId);
    }

    /**
     * Delete node by ID, If the nodeId is a folder, then its children are also
     * Deleted permanent will not be possible recover it
     *
     * @param {String} nodeId
     *
     * @returns {Promise} A promise that is resolved if the file is deleted and {error} if rejected.
     */
    deleteNodePermanent(nodeId) {
        this.alfrescoNodeApi = new AlfrescoNode(this.getClient());
        return this.alfrescoNodeApi.deleteNode(nodeId, {permanent: true});
    }

}

AlfrescoApi.Core = require('./alfresco-core-rest-api/src/index.js');
AlfrescoApi.Auth = require('./alfresco-auth-rest-api/src/index.js');
AlfrescoApi.Mock = require('../test/mockObjects/mockAlfrescoApi.js');

//util.inherits(AlfrescoApi, EventEmitter);
module.exports = AlfrescoApi;
