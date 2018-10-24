(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/SyncLogEntryRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/SyncLogEntryRepresentation'));
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
     * Function to receive the result of the getLogFile operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getLogFile
     * @param {Integer} syncLogEntryId syncLogEntryId
     */
    this.getLogFile = function(syncLogEntryId) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getSyncLogEntries operation.
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
     */
    this.getSyncLogEntries = function(opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
