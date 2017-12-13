(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/TransferContainerEntry', '../model/Error', '../model/TransferContainerAssociationPaging', '../model/TransferContainerBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/TransferContainerEntry'), require('../model/Error'), require('../model/TransferContainerAssociationPaging'), require('../model/TransferContainerBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransfercontainersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.TransferContainerEntry, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.TransferContainerAssociationPaging, root.AlfrescoGovernanceServicesRestApi.TransferContainerBodyUpdate);
  }
}(this, function(ApiClient, TransferContainerEntry, Error, TransferContainerAssociationPaging, TransferContainerBodyUpdate) {
  'use strict';

  /**
   * Transfercontainers service.
   * @module api/TransfercontainersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransfercontainersApi.
   * @alias module:api/TransfercontainersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a transfer container
     * Gets information for transfer container **transferContainerId**\n\nMandatory fields and the transfer container&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TransferContainerEntry}
     */
    this.getTransferContainer = function(transferContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferContainerId' is set
      if (transferContainerId == undefined || transferContainerId == null) {
        throw "Missing the required parameter 'transferContainerId' when calling getTransferContainer";
      }


      var pathParams = {
        'transferContainerId': transferContainerId
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
      var returnType = TransferContainerEntry;

      return this.apiClient.callApi(
        '/transfer-containers/{transferContainerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List transfer container&#39;s children
     * Returns a list of transfers.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.include Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* properties\n* transferPDFIndicator\n* transferLocation\n* transferAccessionIndicator\n
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TransferContainerAssociationPaging}
     */
    this.listTransfers = function(transferContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferContainerId' is set
      if (transferContainerId == undefined || transferContainerId == null) {
        throw "Missing the required parameter 'transferContainerId' when calling listTransfers";
      }


      var pathParams = {
        'transferContainerId': transferContainerId
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
      var returnType = TransferContainerAssociationPaging;

      return this.apiClient.callApi(
        '/transfer-containers/{transferContainerId}/transfers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update transfer container
     * Updates the transfer container **transferContainerId**. For example, you can rename transfer container:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update description and title properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:description\&quot;: \&quot;New Description\&quot;,\n       \&quot;cm:title\&quot;:\&quot;New Title\&quot;\n    }\n}\n```\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {module:model/TransferContainerBodyUpdate} nodeBodyUpdate The node information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TransferContainerEntry}
     */
    this.updateTransferContainer = function(transferContainerId, nodeBodyUpdate, opts) {
      opts = opts || {};
      var postBody = nodeBodyUpdate;

      // verify the required parameter 'transferContainerId' is set
      if (transferContainerId == undefined || transferContainerId == null) {
        throw "Missing the required parameter 'transferContainerId' when calling updateTransferContainer";
      }

      // verify the required parameter 'nodeBodyUpdate' is set
      if (nodeBodyUpdate == undefined || nodeBodyUpdate == null) {
        throw "Missing the required parameter 'nodeBodyUpdate' when calling updateTransferContainer";
      }


      var pathParams = {
        'transferContainerId': transferContainerId
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
      var returnType = TransferContainerEntry;

      return this.apiClient.callApi(
        '/transfer-containers/{transferContainerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
