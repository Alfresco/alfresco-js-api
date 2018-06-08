(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/ClassDescription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ClassDescription'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ClassesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ClassDescription);
  }
}(this, function (ApiClient, ClassDescription) {
  'use strict';

  /**
   * Classes service.
   * @module api/ClassesApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ClassesApi.
   * @alias module:api/ClassesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function (apiClient) {
    this.apiClient = apiClient || ApiClient.instance;

    /**
     * Function to receive the result of the getClass operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ClassDescription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Gets the class information for the specified className.
     * @param {String} className The identifier of the class.
     * @param {Object} opts Optional parameters
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ClassDescription}
     * data is of type: {module:model/ClassDescription}
     */
    this.getClass = function (className, opts) {
      opts = opts || {};

      // verify the required parameter 'className' is set
      if (className == undefined || className == null) {
        throw "Missing the required parameter 'className' when calling getClass";
      }

      var postBody = null;
      var pathParams = {
        'className': className
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ClassDescription;
      var contextRoot = this.apiClient.config.contextRoot + '/s';

      return this.apiClient.callApi(
        '/api/classes/{className}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, contextRoot
      );
    }
  };

  return exports;
}));
