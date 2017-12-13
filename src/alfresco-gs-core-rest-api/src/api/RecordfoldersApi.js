(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RMNodeBodyCreate', '../model/RecordEntry', '../model/Error', '../model/RecordFolderEntry', '../model/RecordFolderAssociationPaging', '../model/FilePlanComponentBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RMNodeBodyCreate'), require('../model/RecordEntry'), require('../model/Error'), require('../model/RecordFolderEntry'), require('../model/RecordFolderAssociationPaging'), require('../model/FilePlanComponentBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordfoldersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate, root.AlfrescoGovernanceServicesRestApi.RecordEntry, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RecordFolderEntry, root.AlfrescoGovernanceServicesRestApi.RecordFolderAssociationPaging, root.AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate);
  }
}(this, function(ApiClient, RMNodeBodyCreate, RecordEntry, Error, RecordFolderEntry, RecordFolderAssociationPaging, FilePlanComponentBodyUpdate) {
  'use strict';

  /**
   * Recordfolders service.
   * @module api/RecordfoldersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RecordfoldersApi.
   * @alias module:api/RecordfoldersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a record
     * Create a record as a primary child of **recordFolderId**.\n\nThis endpoint supports both JSON and multipart/form-data (file upload).\n\n**Using multipart/form-data**\n\nUse the **filedata** field to represent the content to upload, for example, the following curl command will\ncreate a node with the contents of test.txt in the test user&#39;s home folder.\n\n```curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/record-folders/{recordFolderId}/records -F filedata=@test.txt```\n\nThis API method also supports record creation using application/json.\n\nYou must specify at least a **name** and **nodeType**.\n\n\nYou can create a non-electronic record like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,\n      \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,\n      \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,\n      \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,\n      \&quot;rma:numberOfCopies\&quot;:1,\n      \&quot;rma:physicalSize\&quot;:30,\n      \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,\n      \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;\n    }\n}\n```\n\nYou can create an empty electronic record:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\n**Note:** You can create more than one child by\nspecifying a list of nodes in the JSON body. For example, the following JSON\nbody creates a record category and a record folder inside the specified **categoryId**:\n```JSON\n[\n  {\n    \&quot;name\&quot;:\&quot;Record 1\&quot;,\n    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n  },\n  {\n    \&quot;name\&quot;:\&quot;Record 2\&quot;,\n    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n
     * @param {String} recordFolderId The identifier of a record folder.
     * @param {module:model/RMNodeBodyCreate} recordBodyCreate The record information to create.\n\nThis field is ignored for multipart/form-data content uploads.\n
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordEntry}
     */
    this.createRecordFolderChild = function(recordFolderId, recordBodyCreate, opts) {
      opts = opts || {};
      var postBody = recordBodyCreate;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId == undefined || recordFolderId == null) {
        throw "Missing the required parameter 'recordFolderId' when calling createRecordFolderChild";
      }

      // verify the required parameter 'recordBodyCreate' is set
      if (recordBodyCreate == undefined || recordBodyCreate == null) {
        throw "Missing the required parameter 'recordBodyCreate' when calling createRecordFolderChild";
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
     * Deletes record folder **recordFolderId**. Deleted file plan components cannot be recovered, they are deleted permanently.\n
     * @param {String} recordFolderId The identifier of a record folder.
     */
    this.deleteRecordFolder = function(recordFolderId) {
      var postBody = null;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId == undefined || recordFolderId == null) {
        throw "Missing the required parameter 'recordFolderId' when calling deleteRecordFolder";
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
     * Gets information for record folder **recordFolderId**\n\nMandatory fields and the record folder&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} recordFolderId The identifier of a record folder.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* isClosed\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordFolderEntry}
     */
    this.getRecordFolder = function(recordFolderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId == undefined || recordFolderId == null) {
        throw "Missing the required parameter 'recordFolderId' when calling getRecordFolder";
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
     * Gets a list of records.\n\nMinimal information for each record is returned by default.\n\nThe list of records includes primary children and secondary children, if there are any.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} recordFolderId The identifier of a record folder.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   ```where=(nodeType=&#39;my:specialNodeType&#39;)```\n\n*   ```where=(nodeType=&#39;my:specialNodeType INCLUDESUBTYPES&#39;)```\n\n*   ```where=(isPrimary=true)```\n
     * @param {Array.<String>} opts.include Returns additional information about the records. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* content\n* isCompleted\n* path\n* properties\n
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with record information on the parent folder \u2013 the specified parent **recordFolderId**
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordFolderAssociationPaging}
     */
    this.listRecordFolderChildren = function(recordFolderId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId == undefined || recordFolderId == null) {
        throw "Missing the required parameter 'recordFolderId' when calling listRecordFolderChildren";
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
     * Updates record folder **recordFolderId**. For example, you can rename a record folder:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update one or more properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;rma:vitalRecordIndicator\&quot;: true,\n       \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;\n    }\n}\n```\n**Note:** if you want to add or remove aspects, then you must use **GET /record-folders/{recordFolderId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} recordFolderId The identifier of a record folder.
     * @param {module:model/FilePlanComponentBodyUpdate} recordFolderBodyUpdate The record folder information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* isClosed\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordFolderEntry}
     */
    this.updateRecordFolder = function(recordFolderId, recordFolderBodyUpdate, opts) {
      opts = opts || {};
      var postBody = recordFolderBodyUpdate;

      // verify the required parameter 'recordFolderId' is set
      if (recordFolderId == undefined || recordFolderId == null) {
        throw "Missing the required parameter 'recordFolderId' when calling updateRecordFolder";
      }

      // verify the required parameter 'recordFolderBodyUpdate' is set
      if (recordFolderBodyUpdate == undefined || recordFolderBodyUpdate == null) {
        throw "Missing the required parameter 'recordFolderBodyUpdate' when calling updateRecordFolder";
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
