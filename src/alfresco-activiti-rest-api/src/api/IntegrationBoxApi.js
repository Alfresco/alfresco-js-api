(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/UserAccountCredentialsRepresentation', '../model/ResultListDataRepresentation', '../model/BoxUserAccountCredentialsRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/UserAccountCredentialsRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/BoxUserAccountCredentialsRepresentation'));
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
     * Function to receive the result of the confirmAuthorisation operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Box Authorization
     * Returns Box Oauth HTML Page
     * @param {String} code code
     */
    this.confirmAuthorisation = function(code) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createRepositoryAccount operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     */
    this.createRepositoryAccount = function(userId, credentials) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the deleteRepositoryAccount operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Box account
     * @param {Integer} userId userId
     */
    this.deleteRepositoryAccount = function(userId) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getBoxPluginStatus operation.
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve if Box Integration is enabled
     */
    this.getBoxPluginStatus = function() {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getFiles operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.parent parent
     */
    this.getFiles = function(opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getRepositoryAccount operation.
     * @param {String} error Error message, if any.
     * @param {module:model/BoxUserAccountCredentialsRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Box Account
     * @param {Integer} userId userId
     */
    this.getRepositoryAccount = function(userId) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateRepositoryAccount operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     */
    this.updateRepositoryAccount = function(userId, credentials) {
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
