
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/FilePlanComponentBodyUpdate', '../model/RecordEntry', '../model/RequestBodyFile'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/FilePlanComponentBodyUpdate'), require('../model/RecordEntry'), require('../model/RequestBodyFile'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordsApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate, root.AlfrescoGovernanceServicesRestApi.RecordEntry, root.AlfrescoGovernanceServicesRestApi.RequestBodyFile);
  }
}(this, function(ApiClient, Error, FilePlanComponentBodyUpdate, RecordEntry, RequestBodyFile) {
  'use strict';

  /**
   * Records service.
   * @module api/RecordsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RecordsApi.
   * @alias :api/RecordsApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Complete a record
     * Completes the record **recordId**.
     * @param {string} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    this.completeRecord = function(recordId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling completeRecord");
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
     * Deletes the record **recordId**. Deleted file plan components cannot be recovered, they are deleted permanently.
     * @param {string} recordId The identifier of a record.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteRecord = function(recordId) {
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling deleteRecord");
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
     * Files the record **recordId** in the target record folder.  You need to specify the target record folder by providing its id **targetParentId**  If the record is already filed, a link to the target record folder is created.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} recordId The identifier of a record.
     * @param {RequestBodyFile} nodeBodyFile The target record folder id
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    this.fileRecord = function(recordId, nodeBodyFile, opts) {
      opts = opts || {};
      var postBody = nodeBodyFile;

      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling fileRecord");
      }

      // verify the required parameter 'nodeBodyFile' is set
      if (nodeBodyFile === undefined || nodeBodyFile === null) {
        throw new Error("Missing the required parameter 'nodeBodyFile' when calling fileRecord");
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
     * Gets information for record **recordId**  Mandatory fields and the record&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information.
     * @param {string} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    this.getRecord = function(recordId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling getRecord");
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
     *  Gets the content of the record with identifier **recordId**.
     * @param {string} recordId The identifier of a record.
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.attachment **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.getRecordContent = function(recordId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling getRecordContent");
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
     * Updates the record **recordId**. For example, you can rename a record: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:title\&quot;:\&quot;New title\&quot;,        \&quot;cm:description\&quot;:\&quot;New description\&quot;     } } &#x60;&#x60;&#x60; **Note:** if you want to add or remove aspects, then you must use **GET /records/{recordId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.
     * @param {string} recordId The identifier of a record.
     * @param {FilePlanComponentBodyUpdate} recordBodyUpdate The record information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRecordEntry} and HTTP response
     */
    this.updateRecord = function(recordId, recordBodyUpdate, opts) {
      opts = opts || {};
      var postBody = recordBodyUpdate;

      // verify the required parameter 'recordId' is set
      if (recordId === undefined || recordId === null) {
        throw new Error("Missing the required parameter 'recordId' when calling updateRecord");
      }

      // verify the required parameter 'recordBodyUpdate' is set
      if (recordBodyUpdate === undefined || recordBodyUpdate === null) {
        throw new Error("Missing the required parameter 'recordBodyUpdate' when calling updateRecord");
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
