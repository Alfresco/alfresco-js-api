(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/RecordEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/RecordEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.FilesApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RecordEntry);
  }
}(this, function(ApiClient, Error, RecordEntry) {
  'use strict';

  /**
   * Files service.
   * @module api/FilesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new FilesApi.
   * @alias module:api/FilesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Declare as record
     * Declares the file **fileId** in the unfiled records container. The original file is moved to the Records Management site and a secondary parent association is created in the file&#39;s original site.
     * @param {String} fileId The identifier of a non-record file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.hideRecord Flag to indicate whether the record should be hidden from the current parent folder. (default to false)
     * @param {Array.<String>} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordEntry}
     */
    this.declareRecord = function(fileId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'fileId' is set
      if (fileId == undefined || fileId == null) {
        throw "Missing the required parameter 'fileId' when calling declareRecord";
      }


      var pathParams = {
        'fileId': fileId
      };
      var queryParams = {
        'hideRecord': opts['hideRecord'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RecordEntry;

      return this.apiClient.callApi(
        '/files/{fileId}/declare', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
