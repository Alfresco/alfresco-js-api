(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/VersionPaging', '../model/VersionEntry', '../model/RevertBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/VersionPaging'), require('../model/VersionEntry'), require('../model/RevertBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VersionsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.VersionPaging, root.AlfrescoCoreRestApi.VersionEntry, root.AlfrescoCoreRestApi.RevertBody);
  }
}(this, function(ApiClient, VersionPaging, VersionEntry, RevertBody) {
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
     * Gets the version history as an ordered list of versions for the specified nodeId.
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
      var headerParams = {};
      var formParams = {};

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

    /**
     * Function to revert to a previous version
     * @param {String} error Error message, if any.
     * @param {module:model/VersionEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attempts to revert the version identified by versionId and nodeId to the live node.
     * @param {String} nodeId The identifier of a child node. You can also use one of these well-known aliases: * -my- * -shared- * -root-
     * @param {String} versionId The identifier of a version, ie. version label, within the version history of a node.
     * @param {RevertBody} revertBody Specify a version comment and whether this should be a major version, or not.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/NodeAssociationPaging}
     * data is of type: {module:model/VersionEntry}
     */
    this.revertVersion = function(nodeId, versionId, revertBody, opts) {
      opts = opts || {};
      var postBody = revertBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling listVersionHistory";
      }

      // verify the required parameter 'versionId' is set
      if (versionId == undefined || versionId == null) {
        throw "Missing the required parameter 'versionId' when calling listVersionHistory";
      }

      var pathParams = {
        'nodeId': nodeId,
        'versionId': versionId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {};
      var formParams = {};

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = VersionEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/versions/{versionId}/revert', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
