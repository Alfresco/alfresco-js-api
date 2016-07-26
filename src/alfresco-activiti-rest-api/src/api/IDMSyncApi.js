(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/SyncLogEntryRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SyncLogEntryRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.IDMSyncApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.SyncLogEntryRepresentation);
  }
}(this, function(ApiClient, SyncLogEntryRepresentation) {
  'use strict';

  /**
   * IDMSync service.
   * @module api/IDMSyncApi
   * @version 1.4.0
   */

  /**
   * Constructs a new IDMSyncApi.
   * @alias module:api/IDMSyncApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getLogFile operation.
     * @callback module:api/IDMSyncApi~getLogFileCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getLogFile
     * @param {Integer} syncLogEntryId syncLogEntryId
     * @param {module:api/IDMSyncApi~getLogFileCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getLogFile = function(syncLogEntryId, callback) {
      var postBody = null;

      // verify the required parameter 'syncLogEntryId' is set
      if (syncLogEntryId == undefined || syncLogEntryId == null) {
        throw "Missing the required parameter 'syncLogEntryId' when calling getLogFile";
      }


      var pathParams = {
        'syncLogEntryId': syncLogEntryId
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
        '/api/enterprise/idm-sync-log-entries/{syncLogEntryId}/logfile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSyncLogEntries operation.
     * @callback module:api/IDMSyncApi~getSyncLogEntriesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/SyncLogEntryRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getSyncLogEntries
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.tenantId tenantId
     * @param {Integer} opts.page page
     * @param {Integer} opts.size size
     * @param {module:api/IDMSyncApi~getSyncLogEntriesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/SyncLogEntryRepresentation>}
     */
    this.getSyncLogEntries = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tenantId': opts['tenantId'],
        'page': opts['page'],
        'size': opts['size']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [SyncLogEntryRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/idm-sync-log-entries', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
