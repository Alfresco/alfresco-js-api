(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/TransferEntry', '../model/Error', '../model/TransferAssociationPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/TransferEntry'), require('../model/Error'), require('../model/TransferAssociationPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransfersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.TransferEntry, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.TransferAssociationPaging);
  }
}(this, function(ApiClient, TransferEntry, Error, TransferAssociationPaging) {
  'use strict';

  /**
   * Transfers service.
   * @module api/TransfersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransfersApi.
   * @alias module:api/TransfersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a transfer
     * Gets information for transfer **transferId**\n\nMandatory fields and the transfer&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} transferId The identifier of a transfer.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* transferPDFIndicator\n* transferLocation\n* transferAccessionIndicator\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TransferEntry}
     */
    this.getTransfer = function(transferId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferId' is set
      if (transferId == undefined || transferId == null) {
        throw "Missing the required parameter 'transferId' when calling getTransfer";
      }


      var pathParams = {
        'transferId': transferId
      };
      var queryParams = {
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
      var returnType = TransferEntry;

      return this.apiClient.callApi(
        '/transfers/{transferId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List transfer&#39;s children
     * Gets a list of transfer&#39;s children.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} transferId The identifier of a transfer.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.include Returns additional information about the transfer&#39;s child. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* isClosed\n* isRecord\n* isRecordFolder\n* path\n* properties\n
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TransferAssociationPaging}
     */
    this.listTransfersChildren = function(transferId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferId' is set
      if (transferId == undefined || transferId == null) {
        throw "Missing the required parameter 'transferId' when calling listTransfersChildren";
      }


      var pathParams = {
        'transferId': transferId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'includeSource': opts['includeSource'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = TransferAssociationPaging;

      return this.apiClient.callApi(
        '/transfers/{transferId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
