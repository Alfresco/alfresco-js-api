
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/TransferContainerAssociationPaging', '../model/TransferContainerBodyUpdate', '../model/TransferContainerEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/TransferContainerAssociationPaging'), require('../model/TransferContainerBodyUpdate'), require('../model/TransferContainerEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferContainersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.TransferContainerAssociationPaging, root.AlfrescoGovernanceServicesRestApi.TransferContainerBodyUpdate, root.AlfrescoGovernanceServicesRestApi.TransferContainerEntry);
  }
}(this, function(ApiClient, Error, TransferContainerAssociationPaging, TransferContainerBodyUpdate, TransferContainerEntry) {
  'use strict';

  /**
   * Transfercontainers service.
   * @module api/TransferContainersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TransferContainersApi.
   * @alias :api/TransferContainersApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Get a transfer container
     * Gets information for transfer container **transferContainerId**  Mandatory fields and the transfer container&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferContainerEntry} and HTTP response
     */
    this.getTransferContainer = function(transferContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferContainerId' is set
      if (transferContainerId === undefined || transferContainerId === null) {
        throw new Error("Missing the required parameter 'transferContainerId' when calling getTransferContainer");
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
     * Returns a list of transfers.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the transfer folders. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * properties * transferPDFIndicator * transferLocation * transferAccessionIndicator
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the specified parent **transferContainerId**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferContainerAssociationPaging} and HTTP response
     */
    this.listTransfers = function(transferContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'transferContainerId' is set
      if (transferContainerId === undefined || transferContainerId === null) {
        throw new Error("Missing the required parameter 'transferContainerId' when calling listTransfers");
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
     * Updates the transfer container **transferContainerId**. For example, you can rename transfer container: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update description and title properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:description\&quot;: \&quot;New Description\&quot;,        \&quot;cm:title\&quot;:\&quot;New Title\&quot;     } } &#x60;&#x60;&#x60; **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} transferContainerId The identifier of a transfer container. You can also use the -transfers- alias.
     * @param {TransferContainerBodyUpdate} nodeBodyUpdate The node information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the transfer container. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleTransferContainerEntry} and HTTP response
     */
    this.updateTransferContainer = function(transferContainerId, nodeBodyUpdate, opts) {
      opts = opts || {};
      var postBody = nodeBodyUpdate;

      // verify the required parameter 'transferContainerId' is set
      if (transferContainerId === undefined || transferContainerId === null) {
        throw new Error("Missing the required parameter 'transferContainerId' when calling updateTransferContainer");
      }

      // verify the required parameter 'nodeBodyUpdate' is set
      if (nodeBodyUpdate === undefined || nodeBodyUpdate === null) {
        throw new Error("Missing the required parameter 'nodeBodyUpdate' when calling updateTransferContainer");
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
