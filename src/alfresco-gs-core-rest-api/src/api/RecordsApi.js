(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/RecordEntry', '../model/RequestBodyFile', '../model/FilePlanComponentBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/RecordEntry'), require('../model/RequestBodyFile'), require('../model/FilePlanComponentBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordsApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RecordEntry, root.AlfrescoGovernanceServicesRestApi.RequestBodyFile, root.AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate);
  }
}(this, function(ApiClient, Error, RecordEntry, RequestBodyFile, FilePlanComponentBodyUpdate) {
  'use strict';

  /**
   * Records service.
   * @module api/RecordsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RecordsApi.
   * @alias module:api/RecordsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Complete a record
     * Completes the record **recordId**.\n
     * @param {String} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordEntry}
     */
    this.completeRecord = function(recordId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId == undefined || recordId == null) {
        throw "Missing the required parameter 'recordId' when calling completeRecord";
      }


      var pathParams = {
        'recordId': recordId
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
      var returnType = RecordEntry;

      return this.apiClient.callApi(
        '/records/{recordId}/complete', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a record
     * Deletes the record **recordId**. Deleted file plan components cannot be recovered, they are deleted permanently.\n
     * @param {String} recordId The identifier of a record.
     */
    this.deleteRecord = function(recordId) {
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId == undefined || recordId == null) {
        throw "Missing the required parameter 'recordId' when calling deleteRecord";
      }


      var pathParams = {
        'recordId': recordId
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
        '/records/{recordId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * File a record
     * Files the record **recordId** in the target record folder.\n\nYou need to specify the target record folder by providing its id **targetParentId**\n\nIf the record is already filed, a link to the target record folder is created.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} recordId The identifier of a record.
     * @param {module:model/RequestBodyFile} nodeBodyFile The target record folder id
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordEntry}
     */
    this.fileRecord = function(recordId, nodeBodyFile, opts) {
      opts = opts || {};
      var postBody = nodeBodyFile;

      // verify the required parameter 'recordId' is set
      if (recordId == undefined || recordId == null) {
        throw "Missing the required parameter 'recordId' when calling fileRecord";
      }

      // verify the required parameter 'nodeBodyFile' is set
      if (nodeBodyFile == undefined || nodeBodyFile == null) {
        throw "Missing the required parameter 'nodeBodyFile' when calling fileRecord";
      }


      var pathParams = {
        'recordId': recordId
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
      var returnType = RecordEntry;

      return this.apiClient.callApi(
        '/records/{recordId}/file', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a record
     * Gets information for record **recordId**\n\nMandatory fields and the record&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordEntry}
     */
    this.getRecord = function(recordId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId == undefined || recordId == null) {
        throw "Missing the required parameter 'recordId' when calling getRecord";
      }


      var pathParams = {
        'recordId': recordId
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
      var returnType = RecordEntry;

      return this.apiClient.callApi(
        '/records/{recordId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get record content
     * \nGets the content of the record with identifier **recordId**.\n
     * @param {String} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
     */
    this.getRecordContent = function(recordId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId == undefined || recordId == null) {
        throw "Missing the required parameter 'recordId' when calling getRecordContent";
      }


      var pathParams = {
        'recordId': recordId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/records/{recordId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update record
     * Updates the record **recordId**. For example, you can rename a record:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update one or more properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:title\&quot;:\&quot;New title\&quot;,\n       \&quot;cm:description\&quot;:\&quot;New description\&quot;\n    }\n}\n```\n**Note:** if you want to add or remove aspects, then you must use **GET /records/{recordId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} recordId The identifier of a record.
     * @param {module:model/FilePlanComponentBodyUpdate} recordBodyUpdate The record information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RecordEntry}
     */
    this.updateRecord = function(recordId, recordBodyUpdate, opts) {
      opts = opts || {};
      var postBody = recordBodyUpdate;

      // verify the required parameter 'recordId' is set
      if (recordId == undefined || recordId == null) {
        throw "Missing the required parameter 'recordId' when calling updateRecord";
      }

      // verify the required parameter 'recordBodyUpdate' is set
      if (recordBodyUpdate == undefined || recordBodyUpdate == null) {
        throw "Missing the required parameter 'recordBodyUpdate' when calling updateRecord";
      }


      var pathParams = {
        'recordId': recordId
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
      var returnType = RecordEntry;

      return this.apiClient.callApi(
        '/records/{recordId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
