
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/RMNodeBodyCreateWithRelativePath', '../model/UnfiledRecordFolderAssociationPaging', '../model/UnfiledRecordFolderBodyUpdate', '../model/UnfiledRecordFolderEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/RMNodeBodyCreateWithRelativePath'), require('../model/UnfiledRecordFolderAssociationPaging'), require('../model/UnfiledRecordFolderBodyUpdate'), require('../model/UnfiledRecordFolderEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFoldersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreateWithRelativePath, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderAssociationPaging, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderBodyUpdate, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderEntry);
  }
}(this, function(ApiClient, Error, RMNodeBodyCreateWithRelativePath, UnfiledRecordFolderAssociationPaging, UnfiledRecordFolderBodyUpdate, UnfiledRecordFolderEntry) {
  'use strict';

  /**
   * Unfiledrecordfolders service.
   * @module api/UnfiledRecordFoldersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new UnfiledRecordFoldersApi.
   * @alias :api/UnfiledRecordFoldersApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a record or an unfiled record folder
     * Create a record or an unfiled record folder as a primary child of **unfiledRecordFolderId**.  You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then the API method tries to create a unique name using an integer suffix.  This endpoint supports both JSON and multipart/form-data (file upload).  **Using multipart/form-data**  Use the **filedata** field to represent the content to upload, for example, the following curl command will create a node with the contents of test.txt in the test user&#39;s home folder.  &#x60;&#x60;&#x60;curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-record-folders/{unfiledRecordFolderId}/children -F filedata&#x3D;@test.txt&#x60;&#x60;&#x60;  This API method also supports record and unfiled record folder creation using application/json.  You must specify at least a **name** and **nodeType**.  You can create a non-electronic record like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,   \&quot;properties\&quot;:     {       \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,       \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,       \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,       \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,       \&quot;rma:numberOfCopies\&quot;:1,       \&quot;rma:physicalSize\&quot;:30,       \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,       \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;     } } &#x60;&#x60;&#x60;  You can create an empty electronic record like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;cm:content\&quot; } &#x60;&#x60;&#x60;  You can create an unfiled record folder like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,   \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,   \&quot;properties\&quot;:   {     \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;   } } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  **Note:** You can create more than one child by specifying a list of nodes in the JSON body. For example, the following JSON body creates a record and an unfiled record folder inside the specified **unfiledRecordFolderId**: &#x60;&#x60;&#x60;JSON [   {     \&quot;name\&quot;:\&quot;My Record\&quot;,     \&quot;nodeType\&quot;:\&quot;cm:content\&quot;   },   {     \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,     \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {string} unfiledRecordFolderId The identifier of an unfiled record folder.
     * @param {RMNodeBodyCreateWithRelativePath} nodeBodyCreate The node information to create.
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledRecordFolderAssociationPaging} and HTTP response
     */
    this.createUnfiledRecordFolderChildren = function(unfiledRecordFolderId, nodeBodyCreate, opts) {
      opts = opts || {};
      var postBody = nodeBodyCreate;

      // verify the required parameter 'unfiledRecordFolderId' is set
      if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
        throw new Error("Missing the required parameter 'unfiledRecordFolderId' when calling createUnfiledRecordFolderChildren");
      }

      // verify the required parameter 'nodeBodyCreate' is set
      if (nodeBodyCreate === undefined || nodeBodyCreate === null) {
        throw new Error("Missing the required parameter 'nodeBodyCreate' when calling createUnfiledRecordFolderChildren");
      }


      var pathParams = {
        'unfiledRecordFolderId': unfiledRecordFolderId
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
      var returnType = UnfiledRecordFolderAssociationPaging;

      return this.apiClient.callApi(
        '/unfiled-record-folders/{unfiledRecordFolderId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.
     * Deletes the unfiled record folder **unfiledRecordFolderId**.
     * @param {string} unfiledRecordFolderId The identifier of an unfiled record folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteUnfiledRecordFolder = function(unfiledRecordFolderId) {
      var postBody = null;

      // verify the required parameter 'unfiledRecordFolderId' is set
      if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
        throw new Error("Missing the required parameter 'unfiledRecordFolderId' when calling deleteUnfiledRecordFolder");
      }


      var pathParams = {
        'unfiledRecordFolderId': unfiledRecordFolderId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/unfiled-record-folders/{unfiledRecordFolderId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the unfiled record folder
     * Gets information for unfiled record folder id **unfiledRecordFolderId**  Mandatory fields and the unfiled record folder&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} unfiledRecordFolderId The identifier of an unfiled record folder.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {string} opts.relativePath Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledRecordFolderEntry} and HTTP response
     */
    this.getUnfiledRecordFolder = function(unfiledRecordFolderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'unfiledRecordFolderId' is set
      if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
        throw new Error("Missing the required parameter 'unfiledRecordFolderId' when calling getUnfiledRecordFolder");
      }


      var pathParams = {
        'unfiledRecordFolderId': unfiledRecordFolderId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UnfiledRecordFolderEntry;

      return this.apiClient.callApi(
        '/unfiled-record-folders/{unfiledRecordFolderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List unfiled record folder&#39;s children
     * Returns a list of records or unfiled record folders.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} unfiledRecordFolderId The identifier of an unfiled record folder.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string} opts.where Optionally filter the list. Here are some examples:  *   &#x60;&#x60;&#x60;where&#x3D;(isRecord&#x3D;true)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isUnfiledRecordFolder&#x3D;false)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;cm:content INCLUDESUBTYPES&#39;)&#x60;&#x60;&#x60;
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * association * path * properties
     * @param {string} opts.relativePath Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledRecordFolderAssociationPaging} and HTTP response
     */
    this.listUnfiledRecordFolderChildren = function(unfiledRecordFolderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'unfiledRecordFolderId' is set
      if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
        throw new Error("Missing the required parameter 'unfiledRecordFolderId' when calling listUnfiledRecordFolderChildren");
      }


      var pathParams = {
        'unfiledRecordFolderId': unfiledRecordFolderId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
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
      var returnType = UnfiledRecordFolderAssociationPaging;

      return this.apiClient.callApi(
        '/unfiled-record-folders/{unfiledRecordFolderId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an unfiled record folder
     * Updates unfiled record folder **unfiledRecordFolderId**. For example, you can rename a record folder: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:title\&quot;:\&quot;New title\&quot;,        \&quot;cm:description\&quot;:\&quot;New description\&quot;     } } &#x60;&#x60;&#x60; **Note:** if you want to add or remove aspects, then you must use **GET /unfiled-record-folders/{unfiledRecordFolderId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} unfiledRecordFolderId The identifier of an unfiled record folder.
     * @param {UnfiledRecordFolderBodyUpdate} unfiledRecordFolderBodyUpdate The record folder information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleUnfiledRecordFolderEntry} and HTTP response
     */
    this.updateUnfiledRecordFolder = function(unfiledRecordFolderId, unfiledRecordFolderBodyUpdate, opts) {
      opts = opts || {};
      var postBody = unfiledRecordFolderBodyUpdate;

      // verify the required parameter 'unfiledRecordFolderId' is set
      if (unfiledRecordFolderId === undefined || unfiledRecordFolderId === null) {
        throw new Error("Missing the required parameter 'unfiledRecordFolderId' when calling updateUnfiledRecordFolder");
      }

      // verify the required parameter 'unfiledRecordFolderBodyUpdate' is set
      if (unfiledRecordFolderBodyUpdate === undefined || unfiledRecordFolderBodyUpdate === null) {
        throw new Error("Missing the required parameter 'unfiledRecordFolderBodyUpdate' when calling updateUnfiledRecordFolder");
      }


      var pathParams = {
        'unfiledRecordFolderId': unfiledRecordFolderId
      };
      var queryParams = {
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
      var returnType = UnfiledRecordFolderEntry;

      return this.apiClient.callApi(
        '/unfiled-record-folders/{unfiledRecordFolderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  };

  return exports;
}));
