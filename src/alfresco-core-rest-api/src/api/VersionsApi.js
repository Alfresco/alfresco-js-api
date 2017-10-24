(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/VersionPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VersionPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VersionsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.VersionPaging);
  }
}(this, function(ApiClient, VersionPaging) {
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
     * Function to receive the result of the listVersionHistory operation.
     * @param {String} error Error message, if any.
     * @param {module:model/VersionPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get versions history of a node
     * @param {String} nodeId The identifier of a child node. You can also use one of these well-known aliases: * -my- * -shared- * -root-
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested: * properties * aspectNames
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeAssociationPaging}
     * data is of type: {module:model/VersionPaging}
     */
    this.listVersionHistory = function(nodeId, opts) {
      opts = opts || {};
      
      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling listVersionHistory";
      }

      var postBody = null;
      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems']        
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VersionPaging;

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
