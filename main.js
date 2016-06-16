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
      this.basePath = '/alfresco/api/-default-/public/authentication/versions/1';

      this.config = {
        host: alfrescoHost,
        username: username,
        password: password
      };
    }

    getClient() {
      var alfrescoClient = new AlfrescoCoreRestApi.ApiClient();
      alfrescoClient.basePath = this.config.host + this.basePath;
      return alfrescoClient;
    }

    /**
     * login Alfresco API
     * @returns {Promise} A promise that returns {new authentication ticket} if resolved and {error} if rejected.
     * */
    login() {
      var alfrescoClient = this.getClient();

      var apiInstance = new AlfrescoAuthRestApi.AuthenticationApi(alfrescoClient);
      var loginRequest = new AlfrescoAuthRestApi.LoginRequest();

      loginRequest.userId = this.config.username;
      loginRequest.password = this.config.password;

      return new Promise(function (resolve, reject) {
        apiInstance.createTicket(loginRequest).then(function (data) {
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
