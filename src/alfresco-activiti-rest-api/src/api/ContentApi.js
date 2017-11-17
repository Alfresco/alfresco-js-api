(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RelatedContentRepresentation', '../model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RelatedContentRepresentation'), require('../model/ResultListDataRepresentation'));
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
     * Function to receive the result of the createRelatedContentOnProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRelatedContentOnProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     */
    this.createRelatedContentOnProcessInstance = function(processInstanceId, relatedContent, opts) {
      var postBody = relatedContent;
      opts = opts || {};

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling createRelatedContentOnProcessInstance";
      }

      // verify the required parameter 'relatedContent' is set
      if (relatedContent == undefined || relatedContent == null) {
        throw "Missing the required parameter 'relatedContent' when calling createRelatedContentOnProcessInstance";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
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
        '/api/enterprise/process-instances/{processInstanceId}/content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createRelatedContentOnProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createRelatedContentOnProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {File} file file
     */
    this.createRelatedContentOnProcessInstance = function(processInstanceId, file, opts) {
      var postBody = null;
      opts = opts || {};

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling createRelatedContentOnProcessInstance";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling createRelatedContentOnProcessInstance";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
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
        '/api/enterprise/process-instances/{processInstanceId}/raw-content', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createRelatedContentOnTask operation.
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
     */
    this.createRelatedContentOnTask = function(taskId, relatedContent, opts) {
      opts = opts || {};
      var postBody = relatedContent;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling createRelatedContentOnTask";
      }

      // verify the required parameter 'relatedContent' is set
      if (relatedContent == undefined || relatedContent == null) {
        throw "Missing the required parameter 'relatedContent' when calling createRelatedContentOnTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createRelatedContentOnTask operation.
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
     */
    this.createRelatedContentOnTask = function(taskId, file, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling createRelatedContentOnTask";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling createRelatedContentOnTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createTemporaryRawRelatedContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createTemporaryRawRelatedContent
     * @param {File} file file
     */
    this.createTemporaryRawRelatedContent = function(file) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling createTemporaryRawRelatedContent";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createTemporaryRelatedContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createTemporaryRelatedContent
     * @param {module:model/RelatedContentRepresentation} relatedContent relatedContent
     */
    this.createTemporaryRelatedContent = function(relatedContent) {
      var postBody = relatedContent;

      // verify the required parameter 'relatedContent' is set
      if (relatedContent == undefined || relatedContent == null) {
        throw "Missing the required parameter 'relatedContent' when calling createTemporaryRelatedContent";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the deleteContent operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteContent
     * @param {Integer} contentId contentId
     */
    this.deleteContent = function(contentId) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling deleteContent";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/RelatedContentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getContent
     * @param {Integer} contentId contentId
     */
    this.getContent = function(contentId) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling getContent";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getProcessInstanceContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve content attached to process instance fields
     * @param {String} processInstanceId processInstanceId
     */
    this.getProcessInstanceContent = function(processInstanceId) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceContent";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getRawContent operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRawContent
     * @param {Integer} contentId contentId
     */
    this.getRawContent = function(contentId) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling getRawContent";
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
      var returnType = Object;
      var contextRoot = null;
      var responseType = 'blob';

      return this.apiClient.callApi(
        '/api/enterprise/content/{contentId}/raw', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, contextRoot, responseType
      );
    }

    this.getContentPreview = function(contentId) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling getRawContent";
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
      var returnType = Object;
      var contextRoot = null;
      var responseType = 'blob';

      return this.apiClient.callApi(
        '/api/enterprise/content/{contentId}/rendition/preview', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, contextRoot, responseType
      );
    }


    /**
     * Get content Raw URL for the given contentId
     * @param {Integer} contentId contentId
     */
    this.getRawContentUrl = function(contentId) {
      return this.apiClient.basePath + '/api/enterprise/content/' + contentId + '/raw';
    }

    /**
     * Get thumbnail for the given contentId
     * @param {Integer} contentId contentId
     */
    this.getContentThumbnail = function(contentId) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling getRawContent";
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
      var returnType = Object;
      var contextRoot = null;
      var responseType = 'blob';

      return this.apiClient.callApi(
        '/api/enterprise/content/{contentId}/rendition/thumbnail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, contextRoot, responseType
      );
    }

    /**
     * Function to receive the result of the getRelatedContentForProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRelatedContentForProcessInstance
     * @param {String} processInstanceId processInstanceId
     * @param {Boolean} isRelated isRelated optional
     */
    this.getRelatedContentForProcessInstance = function(processInstanceId, isRelated) {
      isRelated = isRelated || true;
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getRelatedContentForProcessInstance";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
      };
      var queryParams = {
        'isRelatedContent' : isRelated
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getRelatedContentForTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     * @param {Boolean} isRelated isRelated optional
     */

    /**
     * Retrieve which content is attached to a task
     * @param {String} taskId taskId
     */
    this.getRelatedContentForTask = function(taskId, isRelated) {
      isRelated = isRelated || true;
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getRelatedContentForTask";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'isRelatedContent' : isRelated
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
