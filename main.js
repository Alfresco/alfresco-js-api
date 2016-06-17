'use strict';
var AlfrescoCoreRestApi = require('./alfresco-core-rest-api/src/index.js');
var AlfrescoAuthRestApi = require('./alfresco-auth-rest-api/src/index.js');

class AlfrescoApi {

    /**
     * @param {String} username
     * @param {String} password
     * @param {String} alfrescoHost Your share server IP or DNS name
     */
    constructor(username, password, alfrescoHost) {
        this.basePathAuth = '/alfresco/api/-default-/public/authentication/versions/1'; //Auth Call
        this.basePath = '/alfresco/api/-default-/public/alfresco/versions/1';   //Core Call

        this.config = {
            host: alfrescoHost,
            username: username,
            password: password,
            ticket: undefined
        };
    }

    /**
     * return an Alfresco API Client
     * @returns {ApiClient} Alfresco API Client
     * */
    createClient() {
        this.alfrescoClient = new AlfrescoCoreRestApi.ApiClient();
        this.alfrescoClient.basePath = this.config.host + this.basePathAuth;
        return this.alfrescoClient;
    }

    /**
     * return an Alfresco API Client
     * @returns {ApiClient} Alfresco API Client
     * */
    getClient() {
        if (this.alfrescoClient) {
            this.alfrescoClient.basePath = this.config.host + this.basePath;
            this.alfrescoClient.authentications.basicAuth.username = 'ROLE_TICKET';
            this.alfrescoClient.authentications.basicAuth.password = this.config.ticket;
            return this.alfrescoClient;
        }
    }

    /**
     * login Alfresco API
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login() {
        var alfrescoClient = this.createClient();
        var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(alfrescoClient);
        var loginRequest = new AlfrescoAuthRestApi.LoginRequest();

        loginRequest.userId = this.config.username;
        loginRequest.password = this.config.password;

        return new Promise((resolve, reject) => {
            apiInstance.createTicket(loginRequest).then((data) => {
                this.config.ticket = data.entry.id;
                resolve(data.entry.id);
            }, function (error) {
                reject(error);
            });
        });
    }
}

module.exports = {
    Auth: require('./alfresco-auth-rest-api/src/index.js'),
    Core: require('./alfresco-core-rest-api/src/index.js'),
    AlfrescoApi: AlfrescoApi
};
