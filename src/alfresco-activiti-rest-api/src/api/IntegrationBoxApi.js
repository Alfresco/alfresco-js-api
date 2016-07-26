(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserAccountCredentialsRepresentation', 'model/ResultListDataRepresentation', 'model/BoxUserAccountCredentialsRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserAccountCredentialsRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/BoxUserAccountCredentialsRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.IntegrationBoxApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.UserAccountCredentialsRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.BoxUserAccountCredentialsRepresentation);
  }
}(this, function(ApiClient, UserAccountCredentialsRepresentation, ResultListDataRepresentation, BoxUserAccountCredentialsRepresentation) {
  'use strict';

  /**
   * IntegrationBox service.
   * @module api/IntegrationBoxApi
   * @version 1.4.0
   */

  /**
   * Constructs a new IntegrationBoxApi.
   * @alias module:api/IntegrationBoxApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the confirmAuthorisation operation.
     * @callback module:api/IntegrationBoxApi~confirmAuthorisationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Box Authorization
     * Returns Box Oauth HTML Page
     * @param {String} code code
     * @param {module:api/IntegrationBoxApi~confirmAuthorisationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.confirmAuthorisation = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling confirmAuthorisation";
      }


      var pathParams = {
      };
      var queryParams = {
        'code': code
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/html', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/confirm-auth-request', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRepositoryAccount operation.
     * @callback module:api/IntegrationBoxApi~createRepositoryAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     * @param {module:api/IntegrationBoxApi~createRepositoryAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createRepositoryAccount = function(userId, credentials, callback) {
      var postBody = credentials;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createRepositoryAccount";
      }

      // verify the required parameter 'credentials' is set
      if (credentials == undefined || credentials == null) {
        throw "Missing the required parameter 'credentials' when calling createRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/{userId}/account', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRepositoryAccount operation.
     * @callback module:api/IntegrationBoxApi~deleteRepositoryAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Box account
     * @param {Integer} userId userId
     * @param {module:api/IntegrationBoxApi~deleteRepositoryAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRepositoryAccount = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/{userId}/account', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBoxPluginStatus operation.
     * @callback module:api/IntegrationBoxApi~getBoxPluginStatusCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve if Box Integration is enabled
     * @param {module:api/IntegrationBoxApi~getBoxPluginStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'Boolean'}
     */
    this.getBoxPluginStatus = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/status', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFiles operation.
     * @callback module:api/IntegrationBoxApi~getFilesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.parent parent
     * @param {module:api/IntegrationBoxApi~getFilesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getFiles = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'parent': opts['parent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRepositoryAccount operation.
     * @callback module:api/IntegrationBoxApi~getRepositoryAccountCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoxUserAccountCredentialsRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Box Account
     * @param {Integer} userId userId
     * @param {module:api/IntegrationBoxApi~getRepositoryAccountCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoxUserAccountCredentialsRepresentation}
     */
    this.getRepositoryAccount = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = BoxUserAccountCredentialsRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/{userId}/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRepositoryAccount operation.
     * @callback module:api/IntegrationBoxApi~updateRepositoryAccountCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     * @param {module:api/IntegrationBoxApi~updateRepositoryAccountCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateRepositoryAccount = function(userId, credentials, callback) {
      var postBody = credentials;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateRepositoryAccount";
      }

      // verify the required parameter 'credentials' is set
      if (credentials == undefined || credentials == null) {
        throw "Missing the required parameter 'credentials' when calling updateRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/{userId}/account', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
