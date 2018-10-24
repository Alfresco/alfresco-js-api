
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/RMNodeBodyCreate', '../model/UnfiledContainerAssociationPaging', '../model/UnfiledContainerEntry', '../model/UnfiledRecordContainerBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/RMNodeBodyCreate'), require('../model/UnfiledContainerAssociationPaging'), require('../model/UnfiledContainerEntry'), require('../model/UnfiledRecordContainerBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledContainersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerAssociationPaging, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerEntry, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordContainerBodyUpdate);
  }
}(this, function(ApiClient, Error, RMNodeBodyCreate, UnfiledContainerAssociationPaging, UnfiledContainerEntry, UnfiledRecordContainerBodyUpdate) {
  'use strict';

  /**
   * Unfiledcontainers service.
   * @module api/UnfiledContainersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new UnfiledContainersApi.
   * @alias :api/UnfiledContainersApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a record or an unfiled record folder
     * Creates a record or an unfiled record folder as a primary child of **unfiledContainerId**.  You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then the API method tries to create a unique name using an integer suffix.  This endpoint supports both JSON and multipart/form-data (file upload).  **Using multipart/form-data**  Use the **filedata** field to represent the content to upload, for example, the following curl command will create a node with the contents of test.txt in the test user&#39;s home folder.  &#x60;&#x60;&#x60;curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-containers/{unfiledContainerId}/children -F filedata&#x3D;@test.txt&#x60;&#x60;&#x60;  This API method also supports record and unfiled record folder creation using application/json.  You must specify at least a **name** and **nodeType**.  You can create a non-electronic record like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,   \&quot;properties\&quot;:     {       \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,       \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,       \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,       \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,       \&quot;rma:numberOfCopies\&quot;:1,       \&quot;rma:physicalSize\&quot;:30,       \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,       \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;     } } &#x60;&#x60;&#x60;  You can create an empty electronic record: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;cm:content\&quot; } &#x60;&#x60;&#x60;  You can create an unfiled record folder like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,   \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,   \&quot;properties\&quot;:   {     \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;   } } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  **Note:** You can create more than one child by specifying a list of nodes in the JSON body. For example, the following JSON body creates a record and an unfiled record folder inside the specified **unfiledContainerId**: &#x60;&#x60;&#x60;JSON [   {     \&quot;name\&quot;:\&quot;My Record\&quot;,     \&quot;nodeType\&quot;:\&quot;cm:content\&quot;   },   {     \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,     \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {string} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {RMNodeBodyCreate} nodeBodyCreate The node information to create.
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledContainerAssociationPaging} and HTTP response
     */
    this.createUnfiledContainerChildren = function(unfiledContainerId, nodeBodyCreate, opts) {
      opts = opts || {};
      var postBody = nodeBodyCreate;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId === undefined || unfiledContainerId === null) {
        throw new Error("Missing the required parameter 'unfiledContainerId' when calling createUnfiledContainerChildren");
      }

      // verify the required parameter 'nodeBodyCreate' is set
      if (nodeBodyCreate === undefined || nodeBodyCreate === null) {
        throw new Error("Missing the required parameter 'nodeBodyCreate' when calling createUnfiledContainerChildren");
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
      };
      var queryParams = {
        'autoRename': opts['autoRename'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = UnfiledContainerAssociationPaging;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the unfiled records container
     * Gets information for unfiled records container **unfiledContainerId**  Mandatory fields and the unfiled records container&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledContainerEntry} and HTTP response
     */
    this.getUnfiledContainer = function(unfiledContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId === undefined || unfiledContainerId === null) {
        throw new Error("Missing the required parameter 'unfiledContainerId' when calling getUnfiledContainer");
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
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
      var returnType = UnfiledContainerEntry;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List unfiled record container&#39;s children
     * Returns a list of records or unfiled record folders.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string} opts.where Optionally filter the list. Here are some examples:  *   &#x60;&#x60;&#x60;where&#x3D;(isRecord&#x3D;true)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isUnfiledRecordFolder&#x3D;false)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;cm:content INCLUDESUBTYPES&#39;)&#x60;&#x60;&#x60;
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * association * path * properties
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – the specified parent **unfiledContainerId**
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledContainerAssociationPaging} and HTTP response
     */
    this.listUnfiledContainerChildren = function(unfiledContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId === undefined || unfiledContainerId === null) {
        throw new Error("Missing the required parameter 'unfiledContainerId' when calling listUnfiledContainerChildren");
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
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
      var returnType = UnfiledContainerAssociationPaging;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an unfiled record container
     * Updates unfiled record container **unfiledContainerId**. For example, you can rename an unfiled record container: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update description and title properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:description\&quot;: \&quot;New Description\&quot;,        \&quot;cm:title\&quot;:\&quot;New Title\&quot;     } } &#x60;&#x60;&#x60;  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {UnfiledRecordContainerBodyUpdate} unfiledContainerBodyUpdate The unfiled record container information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledContainerEntry} and HTTP response
     */
    this.updateUnfiledContainer = function(unfiledContainerId, unfiledContainerBodyUpdate, opts) {
      opts = opts || {};
      var postBody = unfiledContainerBodyUpdate;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId === undefined || unfiledContainerId === null) {
        throw new Error("Missing the required parameter 'unfiledContainerId' when calling updateUnfiledContainer");
      }

      // verify the required parameter 'unfiledContainerBodyUpdate' is set
      if (unfiledContainerBodyUpdate === undefined || unfiledContainerBodyUpdate === null) {
        throw new Error("Missing the required parameter 'unfiledContainerBodyUpdate' when calling updateUnfiledContainer");
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
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
      var returnType = UnfiledContainerEntry;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  };

  return exports;
}));
