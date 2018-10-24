
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/TransferAssociationPaging', '../model/TransferEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/TransferAssociationPaging'), require('../model/TransferEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransfersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.TransferAssociationPaging, root.AlfrescoGovernanceServicesRestApi.TransferEntry);
  }
}(this, function(ApiClient, Error, TransferAssociationPaging, TransferEntry) {
  'use strict';

  /**
   * Transfers service.
   * @module api/TransfersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransfersApi.
   * @alias :api/TransfersApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a transfer
     * Gets information for transfer **transferId**  Mandatory fields and the transfer&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferId The identifier of a transfer.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the transfer folder. Any optional field from the response model can be requested. For example: * allowableOperations * transferPDFIndicator * transferLocation * transferAccessionIndicator
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferEntry} and HTTP response
     */
    this.getTransfer = function(transferId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferId' is set
      if (transferId === undefined || transferId === null) {
        throw new Error("Missing the required parameter 'transferId' when calling getTransfer");
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
     * Gets a list of transfer&#39;s children.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferId The identifier of a transfer.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the transfer&#39;s child. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * isClosed * isRecord * isRecordFolder * path * properties
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferId**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferAssociationPaging} and HTTP response
     */
    this.listTransfersChildren = function(transferId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferId' is set
      if (transferId === undefined || transferId === null) {
        throw new Error("Missing the required parameter 'transferId' when calling listTransfersChildren");
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
