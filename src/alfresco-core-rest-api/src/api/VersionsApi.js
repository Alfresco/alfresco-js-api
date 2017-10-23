(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VersionsApi = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Versions service.
   * @module api/VersionsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new VersionsApi.
   * @alias module:api/VersionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the getVersions operation.
     * @param {String} error Error message, if any.
     * @param {module:model/Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get versions of a node
     * @param {module:model/Object} commentRequest commentRequest
     * @param {String} processInstanceId processInstanceId
     * data is of type: {module:model/Object}
     */
    this.listVersionHistory = function(nodeId, include, fields, skipCount, maxItems, opts) {
      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getVersions";
      }

      var postBody = null;
      var pathParams = {
        'nodeId': nodeId
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
      var returnType = Object;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/versions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    this.revertVersion = function(nodeId, versionId, revertBody, fields, opts) {

    }
  };

  return exports;
}));
