(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/RelatedContentRepresentation', 'model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RelatedContentRepresentation'), require('../model/ResultListDataRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ContentApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.RelatedContentRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation);
  }
}(this, function(ApiClient, RelatedContentRepresentation, ResultListDataRepresentation) {
  'use strict';

  /**
   * Content service.
   * @module api/ContentApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ContentApi. 
   * @alias module:api/ContentApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createRelatedContentOnProcessInstanceUsingPOST operation.
     * @callback module:api/ContentApi~createRelatedContentOnProcessInstanceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRelatedContentOnProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     * @param {module:api/ContentApi~createRelatedContentOnProcessInstanceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RelatedContentRepresentation}
     */
    this.createRelatedContentOnProcessInstanceUsingPOST = function(processInstanceId, relatedContent, callback) {
      var postBody = relatedContent;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling createRelatedContentOnProcessInstanceUsingPOST";
      }

      // verify the required parameter 'relatedContent' is set
      if (relatedContent == undefined || relatedContent == null) {
        throw "Missing the required parameter 'relatedContent' when calling createRelatedContentOnProcessInstanceUsingPOST";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RelatedContentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRelatedContentOnProcessInstanceUsingPOST1 operation.
     * @callback module:api/ContentApi~createRelatedContentOnProcessInstanceUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRelatedContentOnProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {File} file file
     * @param {module:api/ContentApi~createRelatedContentOnProcessInstanceUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RelatedContentRepresentation}
     */
    this.createRelatedContentOnProcessInstanceUsingPOST1 = function(processInstanceId, file, callback) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling createRelatedContentOnProcessInstanceUsingPOST1";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling createRelatedContentOnProcessInstanceUsingPOST1";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = RelatedContentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/raw-content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRelatedContentOnTaskUsingPOST operation.
     * @callback module:api/ContentApi~createRelatedContentOnTaskUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To relate content (eg from Alfresco) to a task
     * @param {String} taskId taskId
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isRelatedContent isRelatedContent
     * @param {module:api/ContentApi~createRelatedContentOnTaskUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RelatedContentRepresentation}
     */
    this.createRelatedContentOnTaskUsingPOST = function(taskId, relatedContent, opts, callback) {
      opts = opts || {};
      var postBody = relatedContent;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling createRelatedContentOnTaskUsingPOST";
      }

      // verify the required parameter 'relatedContent' is set
      if (relatedContent == undefined || relatedContent == null) {
        throw "Missing the required parameter 'relatedContent' when calling createRelatedContentOnTaskUsingPOST";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'isRelatedContent': opts['isRelatedContent']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RelatedContentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRelatedContentOnTaskUsingPOST1 operation.
     * @callback module:api/ContentApi~createRelatedContentOnTaskUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload content to a task
     * @param {String} taskId taskId
     * @param {File} file file
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.isRelatedContent isRelatedContent
     * @param {module:api/ContentApi~createRelatedContentOnTaskUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RelatedContentRepresentation}
     */
    this.createRelatedContentOnTaskUsingPOST1 = function(taskId, file, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling createRelatedContentOnTaskUsingPOST1";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling createRelatedContentOnTaskUsingPOST1";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'isRelatedContent': opts['isRelatedContent']
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = RelatedContentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/raw-content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTemporaryRawRelatedContentUsingPOST1 operation.
     * @callback module:api/ContentApi~createTemporaryRawRelatedContentUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createTemporaryRawRelatedContent
     * @param {File} file file
     * @param {module:api/ContentApi~createTemporaryRawRelatedContentUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RelatedContentRepresentation}
     */
    this.createTemporaryRawRelatedContentUsingPOST1 = function(file, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling createTemporaryRawRelatedContentUsingPOST1";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = RelatedContentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/content/raw', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createTemporaryRelatedContentUsingPOST operation.
     * @callback module:api/ContentApi~createTemporaryRelatedContentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createTemporaryRelatedContent
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     * @param {module:api/ContentApi~createTemporaryRelatedContentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RelatedContentRepresentation}
     */
    this.createTemporaryRelatedContentUsingPOST = function(relatedContent, callback) {
      var postBody = relatedContent;

      // verify the required parameter 'relatedContent' is set
      if (relatedContent == undefined || relatedContent == null) {
        throw "Missing the required parameter 'relatedContent' when calling createTemporaryRelatedContentUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RelatedContentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteContentUsingDELETE1 operation.
     * @callback module:api/ContentApi~deleteContentUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteContent
     * @param {Integer} contentId contentId
     * @param {module:api/ContentApi~deleteContentUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteContentUsingDELETE1 = function(contentId, callback) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling deleteContentUsingDELETE1";
      }


      var pathParams = {
        'contentId': contentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/content/{contentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentUsingGET1 operation.
     * @callback module:api/ContentApi~getContentUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getContent
     * @param {Integer} contentId contentId
     * @param {module:api/ContentApi~getContentUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RelatedContentRepresentation}
     */
    this.getContentUsingGET1 = function(contentId, callback) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling getContentUsingGET1";
      }


      var pathParams = {
        'contentId': contentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RelatedContentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/content/{contentId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessInstanceContentUsingGET operation.
     * @callback module:api/ContentApi~getProcessInstanceContentUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve content attached to process instance fields
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ContentApi~getProcessInstanceContentUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getProcessInstanceContentUsingGET = function(processInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceContentUsingGET";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/field-content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRawContentUsingGET3 operation.
     * @callback module:api/ContentApi~getRawContentUsingGET3Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRawContent
     * @param {Integer} contentId contentId
     * @param {module:api/ContentApi~getRawContentUsingGET3Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getRawContentUsingGET3 = function(contentId, callback) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling getRawContentUsingGET3";
      }


      var pathParams = {
        'contentId': contentId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/content/{contentId}/raw', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelatedContentForProcessInstanceUsingGET operation.
     * @callback module:api/ContentApi~getRelatedContentForProcessInstanceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRelatedContentForProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ContentApi~getRelatedContentForProcessInstanceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getRelatedContentForProcessInstanceUsingGET = function(processInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getRelatedContentForProcessInstanceUsingGET";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelatedContentForTaskUsingGET operation.
     * @callback module:api/ContentApi~getRelatedContentForTaskUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve which content is attached to a task
     * @param {String} taskId taskId
     * @param {module:api/ContentApi~getRelatedContentForTaskUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getRelatedContentForTaskUsingGET = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getRelatedContentForTaskUsingGET";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
