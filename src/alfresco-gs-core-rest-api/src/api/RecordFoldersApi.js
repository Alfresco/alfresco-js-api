
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/FilePlanComponentBodyUpdate', '../model/RMNodeBodyCreate', '../model/RecordEntry', '../model/RecordFolderAssociationPaging', '../model/RecordFolderEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/FilePlanComponentBodyUpdate'), require('../model/RMNodeBodyCreate'), require('../model/RecordEntry'), require('../model/RecordFolderAssociationPaging'), require('../model/RecordFolderEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordFoldersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate, root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate, root.AlfrescoGovernanceServicesRestApi.RecordEntry, root.AlfrescoGovernanceServicesRestApi.RecordFolderAssociationPaging, root.AlfrescoGovernanceServicesRestApi.RecordFolderEntry);
  }
}(this, function(ApiClient, Error, FilePlanComponentBodyUpdate, RMNodeBodyCreate, RecordEntry, RecordFolderAssociationPaging, RecordFolderEntry) {
  'use strict';

  /**
   * Recordfolders service.
   * @module api/RecordFoldersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RecordFoldersApi.
   * @alias :api/RecordFoldersApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a record
     * Create a record as a primary child of **recordFolderId**.  This endpoint supports both JSON and multipart/form-data (file upload).  **Using multipart/form-data**  Use the **filedata** field to represent the content to upload, for example, the following curl command will create a node with the contents of test.txt in the test user&#39;s home folder.  &#x60;&#x60;&#x60;curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/record-folders/{recordFolderId}/records -F filedata&#x3D;@test.txt&#x60;&#x60;&#x60;  This API method also supports record creation using application/json.  You must specify at least a **name** and **nodeType**.   You can create a non-electronic record like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,   \&quot;properties\&quot;:     {       \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,       \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,       \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,       \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,       \&quot;rma:numberOfCopies\&quot;:1,       \&quot;rma:physicalSize\&quot;:30,       \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,       \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;     } } &#x60;&#x60;&#x60;  You can create an empty electronic record: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;cm:content\&quot; } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  **Note:** You can create more than one child by specifying a list of nodes in the JSON body. For example, the following JSON body creates a record category and a record folder inside the specified **categoryId**: &#x60;&#x60;&#x60;JSON [   {     \&quot;name\&quot;:\&quot;Record 1\&quot;,     \&quot;nodeType\&quot;:\&quot;cm:content\&quot;   },   {     \&quot;name\&quot;:\&quot;Record 2\&quot;,     \&quot;nodeType\&quot;:\&quot;cm:content\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {string} recordFolderId The identifier of a record folder.
     * @param {RMNodeBodyCreate} recordBodyCreate The record information to create.  This field is ignored for multipart/form-data content uploads.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    this.createRecordFolderChild = function(recordFolderId, recordBodyCreate, opts) {
      opts = opts || {};
      var postBody = recordBodyCreate;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId === undefined || recordFolderId === null) {
        throw new Error("Missing the required parameter 'recordFolderId' when calling createRecordFolderChild");
      }

      // verify the required parameter 'recordBodyCreate' is set
      if (recordBodyCreate === undefined || recordBodyCreate === null) {
        throw new Error("Missing the required parameter 'recordBodyCreate' when calling createRecordFolderChild");
      }


      var pathParams = {
        'recordFolderId': recordFolderId
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
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = RecordEntry;

      return this.apiClient.callApi(
        '/record-folders/{recordFolderId}/records', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete a record folder
     * Deletes record folder **recordFolderId**. Deleted file plan components cannot be recovered, they are deleted permanently.
     * @param {string} recordFolderId The identifier of a record folder.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteRecordFolder = function(recordFolderId) {
      var postBody = null;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId === undefined || recordFolderId === null) {
        throw new Error("Missing the required parameter 'recordFolderId' when calling deleteRecordFolder");
      }


      var pathParams = {
        'recordFolderId': recordFolderId
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
        '/record-folders/{recordFolderId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get a record folder
     * Gets information for record folder **recordFolderId**  Mandatory fields and the record folder&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} recordFolderId The identifier of a record folder.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record folders. Any optional field from the response model can be requested. For example: * allowableOperations * isClosed * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordFolderEntry} and HTTP response
     */
    this.getRecordFolder = function(recordFolderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId === undefined || recordFolderId === null) {
        throw new Error("Missing the required parameter 'recordFolderId' when calling getRecordFolder");
      }


      var pathParams = {
        'recordFolderId': recordFolderId
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
      var returnType = RecordFolderEntry;

      return this.apiClient.callApi(
        '/record-folders/{recordFolderId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List records
     * Gets a list of records.  Minimal information for each record is returned by default.  The list of records includes primary children and secondary children, if there are any.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} recordFolderId The identifier of a record folder.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string} opts.where Optionally filter the list. Here are some examples:  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;my:specialNodeType&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;my:specialNodeType INCLUDESUBTYPES&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isPrimary&#x3D;true)&#x60;&#x60;&#x60;
     * @param {string[]} opts.include Returns additional information about the records. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * association * content * isCompleted * path * properties
     * @param {boolean} opts.includeSource Also include **source** (in addition to **entries**) with record information on the parent folder – the specified parent **recordFolderId**
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordFolderAssociationPaging} and HTTP response
     */
    this.listRecordFolderChildren = function(recordFolderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId === undefined || recordFolderId === null) {
        throw new Error("Missing the required parameter 'recordFolderId' when calling listRecordFolderChildren");
      }


      var pathParams = {
        'recordFolderId': recordFolderId
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
      var returnType = RecordFolderAssociationPaging;

      return this.apiClient.callApi(
        '/record-folders/{recordFolderId}/records', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a record folder
     * Updates record folder **recordFolderId**. For example, you can rename a record folder: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;rma:vitalRecordIndicator\&quot;: true,        \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;     } } &#x60;&#x60;&#x60; **Note:** if you want to add or remove aspects, then you must use **GET /record-folders/{recordFolderId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} recordFolderId The identifier of a record folder.
     * @param {FilePlanComponentBodyUpdate} recordFolderBodyUpdate The record folder information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record folders. Any optional field from the response model can be requested. For example: * allowableOperations * isClosed * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordFolderEntry} and HTTP response
     */
    this.updateRecordFolder = function(recordFolderId, recordFolderBodyUpdate, opts) {
      opts = opts || {};
      var postBody = recordFolderBodyUpdate;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId === undefined || recordFolderId === null) {
        throw new Error("Missing the required parameter 'recordFolderId' when calling updateRecordFolder");
      }

      // verify the required parameter 'recordFolderBodyUpdate' is set
      if (recordFolderBodyUpdate === undefined || recordFolderBodyUpdate === null) {
        throw new Error("Missing the required parameter 'recordFolderBodyUpdate' when calling updateRecordFolder");
      }


      var pathParams = {
        'recordFolderId': recordFolderId
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
      var returnType = RecordFolderEntry;

      return this.apiClient.callApi(
        '/record-folders/{recordFolderId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  };

  return exports;
}));
