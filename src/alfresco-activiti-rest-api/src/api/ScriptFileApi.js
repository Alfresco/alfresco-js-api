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
    root.ActivitiPublicRestApi.ScriptFileApi = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ScriptFile service.
   * @module api/ScriptFileApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ScriptFileApi.
   * @alias module:api/ScriptFileApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getControllers operation.
     * @callback module:api/ScriptFileApi~getControllersCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getControllers
     * @param {module:api/ScriptFileApi~getControllersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.getControllers = function(callback) {
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
      var accepts = ['application/json', 'application/javascript'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/enterprise/script-files/controllers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getLibraries operation.
     * @callback module:api/ScriptFileApi~getLibrariesCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getLibraries
     * @param {module:api/ScriptFileApi~getLibrariesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'String'}
     */
    this.getLibraries = function(callback) {
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
      var accepts = ['application/json', 'application/javascript'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/api/enterprise/script-files/libraries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
