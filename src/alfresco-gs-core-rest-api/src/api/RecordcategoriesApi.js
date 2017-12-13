(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RecordCategoryChildEntry', '../model/RMNodeBodyCreateWithRelativePath', '../model/Error', '../model/RecordCategoryEntry', '../model/RecordCategoryChildPaging', '../model/FilePlanComponentBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RecordCategoryChildEntry'), require('../model/RMNodeBodyCreateWithRelativePath'), require('../model/Error'), require('../model/RecordCategoryEntry'), require('../model/RecordCategoryChildPaging'), require('../model/FilePlanComponentBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordcategoriesApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordCategoryChildEntry, root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreateWithRelativePath, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RecordCategoryEntry, root.AlfrescoGovernanceServicesRestApi.RecordCategoryChildPaging, root.AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate);
  }
}(this, function(ApiClient, RecordCategoryChildEntry, RMNodeBodyCreateWithRelativePath, Error, RecordCategoryEntry, RecordCategoryChildPaging, FilePlanComponentBodyUpdate) {
  'use strict';

  /**
   * Recordcategories service.
   * @module api/RecordcategoriesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RecordcategoriesApi.
   * @alias module:api/RecordcategoriesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a record category or a record folder
     * Create a record category or a record folder as a primary child of **recordCategoryId**.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nThis API method also supports record category or record folder creation using application/json.\n\nYou must specify at least a **name** and **nodeType**.\n\nYou can create a category like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;\n}\n```\n\nYou can create a record folder like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;\n}\n```\n\nYou can create a record folder inside a container hierarchy (applies to record categories as well):\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Fileplan Component\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n```\nThe **relativePath** specifies the container structure to create relative to the node (record category or record folder). Containers in the\n**relativePath** that do not exist are created before the node is created. The container type is decided considering\nthe type of the parent container and the type of the node to be created.\n\nYou can set properties when creating a record category (applies to record folders as well):\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;,\n  \&quot;properties\&quot;:\n  {\n    \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,\n    \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;\n  }\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\n**Note:** You can create more than one child by\nspecifying a list of nodes in the JSON body. For example, the following JSON\nbody creates a record category and a record folder inside the specified **categoryId**:\n```JSON\n[\n  {\n    \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n    \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;\n  },\n  {\n    \&quot;name\&quot;:\&quot;My Record Folder\&quot;,\n    \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n
     * @param {String} recordCategoryId The identifier of a record category.
     * @param {module:model/RMNodeBodyCreateWithRelativePath} nodeBodyCreate The node information to create.\n
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n
     * @param {Array.<String>} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordCategoryChildEntry}
     */
    this.createRecordCategoryChild = function(recordCategoryId, nodeBodyCreate, opts) {
      opts = opts || {};
      var postBody = nodeBodyCreate;

      // verify the required parameter 'recordCategoryId' is set
      if (recordCategoryId == undefined || recordCategoryId == null) {
        throw "Missing the required parameter 'recordCategoryId' when calling createRecordCategoryChild";
      }

      // verify the required parameter 'nodeBodyCreate' is set
      if (nodeBodyCreate == undefined || nodeBodyCreate == null) {
        throw "Missing the required parameter 'nodeBodyCreate' when calling createRecordCategoryChild";
      }


      var pathParams = {
        'recordCategoryId': recordCategoryId
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
      var returnType = RecordCategoryChildEntry;

      return this.apiClient.callApi(
        '/record-categories/{recordCategoryId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a record category
     * Deletes record category **recordCategoryId**.\n
     * @param {String} recordCategoryId The identifier of a record category.
     */
    this.deleteRecordCategory = function(recordCategoryId) {
      var postBody = null;

      // verify the required parameter 'recordCategoryId' is set
      if (recordCategoryId == undefined || recordCategoryId == null) {
        throw "Missing the required parameter 'recordCategoryId' when calling deleteRecordCategory";
      }


      var pathParams = {
        'recordCategoryId': recordCategoryId
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
        '/record-categories/{recordCategoryId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a record category
     * Gets information for record category **recordCategoryId**\n\nMandatory fields and the record category&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} recordCategoryId The identifier of a record category.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
     * @param {String} opts.relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordCategoryEntry}
     */
    this.getRecordCategory = function(recordCategoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordCategoryId' is set
      if (recordCategoryId == undefined || recordCategoryId == null) {
        throw "Missing the required parameter 'recordCategoryId' when calling getRecordCategory";
      }


      var pathParams = {
        'recordCategoryId': recordCategoryId
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
      var returnType = RecordCategoryEntry;

      return this.apiClient.callApi(
        '/record-categories/{recordCategoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List record category&#39;s children
     * Returns a list of record categories and/or record folders.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n\nThe list of child nodes includes primary children and secondary children, if there are any.\n
     * @param {String} recordCategoryId The identifier of a record category.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   ```where=(nodeType=&#39;rma:recordFolder&#39;)```\n\n*   ```where=(nodeType=&#39;rma:recordCategory&#39;)```\n\n*   ```where=(isRecordFolder=true AND isClosed=false)```\n
     * @param {Array.<String>} opts.include Returns additional information about the record category child. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* hasRetentionSchedule\n* isClosed\n* isRecordCategory\n* isRecordFolder\n* path\n* properties\n
     * @param {String} opts.relativePath Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.\n
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 either the specified parent **recordCategoryId**, or as resolved by **relativePath**.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordCategoryChildPaging}
     */
    this.listRecordCategoryChildren = function(recordCategoryId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordCategoryId' is set
      if (recordCategoryId == undefined || recordCategoryId == null) {
        throw "Missing the required parameter 'recordCategoryId' when calling listRecordCategoryChildren";
      }


      var pathParams = {
        'recordCategoryId': recordCategoryId
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
      var returnType = RecordCategoryChildPaging;

      return this.apiClient.callApi(
        '/record-categories/{recordCategoryId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a record category
     * Updates record category **recordCategoryId**. For example, you can rename a record category:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update one or more properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;rma:vitalRecordIndicator\&quot;: true,\n       \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;\n    }\n}\n```\n**Note:** If you want to add or remove aspects, then you must use **GET /record-categories/{recordCategoryId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} recordCategoryId The identifier of a record category.
     * @param {module:model/FilePlanComponentBodyUpdate} recordCategoryBodyUpdate The record category information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordCategoryEntry}
     */
    this.updateRecordCategory = function(recordCategoryId, recordCategoryBodyUpdate, opts) {
      opts = opts || {};
      var postBody = recordCategoryBodyUpdate;

      // verify the required parameter 'recordCategoryId' is set
      if (recordCategoryId == undefined || recordCategoryId == null) {
        throw "Missing the required parameter 'recordCategoryId' when calling updateRecordCategory";
      }

      // verify the required parameter 'recordCategoryBodyUpdate' is set
      if (recordCategoryBodyUpdate == undefined || recordCategoryBodyUpdate == null) {
        throw "Missing the required parameter 'recordCategoryBodyUpdate' when calling updateRecordCategory";
      }


      var pathParams = {
        'recordCategoryId': recordCategoryId
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
      var returnType = RecordCategoryEntry;

      return this.apiClient.callApi(
        '/record-categories/{recordCategoryId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
