(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AboutApi = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * About service.
   * @module api/AboutApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AboutApi. 
   * @alias module:api/AboutApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getAppVersionUsingGET operation.
     * @callback module:api/AboutApi~getAppVersionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Object.<String, {'String': 'String'}>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Server Information
     * Retrieve information about the Activiti BPM Suite version
     * @param {module:api/AboutApi~getAppVersionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Object.<String, {'String': 'String'}>}
     */
    this.getAppVersionUsingGET = function(callback) {
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
      var returnType = {'String': 'String'};

      return this.apiClient.callApi(
        '/api/enterprise/app-version', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
