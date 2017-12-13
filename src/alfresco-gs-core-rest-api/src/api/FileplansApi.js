(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RootCategoryBodyCreate', '../model/RecordCategoryEntry', '../model/FilePlanEntry', '../model/Error', '../model/RecordCategoryPaging', '../model/FilePlanBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RootCategoryBodyCreate'), require('../model/RecordCategoryEntry'), require('../model/FilePlanEntry'), require('../model/Error'), require('../model/RecordCategoryPaging'), require('../model/FilePlanBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.FileplansApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RootCategoryBodyCreate, root.AlfrescoGovernanceServicesRestApi.RecordCategoryEntry, root.AlfrescoGovernanceServicesRestApi.FilePlanEntry, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RecordCategoryPaging, root.AlfrescoGovernanceServicesRestApi.FilePlanBodyUpdate);
  }
}(this, function(ApiClient, RootCategoryBodyCreate, RecordCategoryEntry, FilePlanEntry, Error, RecordCategoryPaging, FilePlanBodyUpdate) {
  'use strict';

  /**
   * Fileplans service.
   * @module api/FileplansApi
   * @version 0.1.0
   */

  /**
   * Constructs a new FileplansApi.
   * @alias module:api/FileplansApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create record categories for a file plan
     * Creates a record category as a primary child of **filePlanId**.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nThis API method also supports record category creation using application/json.\n\nYou must specify at least a **name**.\n\nYou can create a category like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;\n}\n```\nYou can set properties when creating a record category:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n  \&quot;properties\&quot;:\n  {\n    \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,\n    \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;\n  }\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n
     * @param {String} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {module:model/RootCategoryBodyCreate} nodeBodyCreate The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n
     * @param {Array.<String>} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordCategoryEntry}
     */
    this.createFilePlanCategories = function(filePlanId, nodeBodyCreate, opts) {
      opts = opts || {};
      var postBody = nodeBodyCreate;

      // verify the required parameter 'filePlanId' is set
      if (filePlanId == undefined || filePlanId == null) {
        throw "Missing the required parameter 'filePlanId' when calling createFilePlanCategories";
      }

      // verify the required parameter 'nodeBodyCreate' is set
      if (nodeBodyCreate == undefined || nodeBodyCreate == null) {
        throw "Missing the required parameter 'nodeBodyCreate' when calling createFilePlanCategories";
      }


      var pathParams = {
        'filePlanId': filePlanId
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
      var returnType = RecordCategoryEntry;

      return this.apiClient.callApi(
        '/file-plans/{filePlanId}/categories', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a file plan
     * Gets information for file plan **filePlanId**\n\nMandatory fields and the file plan&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the file plan. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FilePlanEntry}
     */
    this.getFilePlan = function(filePlanId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'filePlanId' is set
      if (filePlanId == undefined || filePlanId == null) {
        throw "Missing the required parameter 'filePlanId' when calling getFilePlan";
      }


      var pathParams = {
        'filePlanId': filePlanId
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
      var returnType = FilePlanEntry;

      return this.apiClient.callApi(
        '/file-plans/{filePlanId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List file plans&#39;s children
     * Returns a list of record categories.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.include Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* hasRetentionSchedule\n* path\n* properties\n
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 the specified parent **filePlanId**
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordCategoryPaging}
     */
    this.getFilePlanCategories = function(filePlanId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'filePlanId' is set
      if (filePlanId == undefined || filePlanId == null) {
        throw "Missing the required parameter 'filePlanId' when calling getFilePlanCategories";
      }


      var pathParams = {
        'filePlanId': filePlanId
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
      var returnType = RecordCategoryPaging;

      return this.apiClient.callApi(
        '/file-plans/{filePlanId}/categories', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a file plan
     * Updates file plan **filePlanId**.\nYou can only set or update description and title properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:description\&quot;: \&quot;New Description\&quot;,\n       \&quot;cm:title\&quot;:\&quot;New Title\&quot;\n    }\n}\n```\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} filePlanId The identifier of a file plan. You can also use the -filePlan- alias.
     * @param {module:model/FilePlanBodyUpdate} filePlanBodyUpdate The file plan information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the file plan. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FilePlanEntry}
     */
    this.updateFilePlan = function(filePlanId, filePlanBodyUpdate, opts) {
      opts = opts || {};
      var postBody = filePlanBodyUpdate;

      // verify the required parameter 'filePlanId' is set
      if (filePlanId == undefined || filePlanId == null) {
        throw "Missing the required parameter 'filePlanId' when calling updateFilePlan";
      }

      // verify the required parameter 'filePlanBodyUpdate' is set
      if (filePlanBodyUpdate == undefined || filePlanBodyUpdate == null) {
        throw "Missing the required parameter 'filePlanBodyUpdate' when calling updateFilePlan";
      }


      var pathParams = {
        'filePlanId': filePlanId
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
      var returnType = FilePlanEntry;

      return this.apiClient.callApi(
        '/file-plans/{filePlanId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
