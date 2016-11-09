(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ArrayNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ArrayNode'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TemporaryApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ArrayNode);
  }
}(this, function(ApiClient, ArrayNode) {
  'use strict';

  /**
   * Temporary service.
   * @module api/TemporaryApi
   * @version 1.4.0
   */

  /**
   * Constructs a new TemporaryApi.
   * @alias module:api/TemporaryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the completeTasks operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * completeTasks
     * @param {Integer} userId userId
     * @param {String} processDefinitionKey processDefinitionKey
     */
    this.completeTasks = function(userId, processDefinitionKey) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling completeTasks";
      }

      // verify the required parameter 'processDefinitionKey' is set
      if (processDefinitionKey == undefined || processDefinitionKey == null) {
        throw "Missing the required parameter 'processDefinitionKey' when calling completeTasks";
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
        'processDefinitionKey': processDefinitionKey
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
        '/api/enterprise/temporary/generate-report-data/complete-tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the generateData operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * generateData
     * @param {Integer} userId userId
     * @param {String} processDefinitionKey processDefinitionKey
     */
    this.generateData = function(userId, processDefinitionKey) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling generateData";
      }

      // verify the required parameter 'processDefinitionKey' is set
      if (processDefinitionKey == undefined || processDefinitionKey == null) {
        throw "Missing the required parameter 'processDefinitionKey' when calling generateData";
      }


      var pathParams = {
      };
      var queryParams = {
        'userId': userId,
        'processDefinitionKey': processDefinitionKey
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
        '/api/enterprise/temporary/generate-report-data/start-process', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getHeaders operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ArrayNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getHeaders
     */
    this.getHeaders = function() {
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
      var returnType = ArrayNode;

      return this.apiClient.callApi(
        '/api/enterprise/temporary/example-headers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getOptions operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ArrayNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getOptions
     */
    this.getOptions = function() {
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
      var returnType = ArrayNode;

      return this.apiClient.callApi(
        '/api/enterprise/temporary/example-options', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
