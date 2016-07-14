(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CommentRepresentation', 'model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommentRepresentation'), require('../model/ResultListDataRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.CommentsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.CommentRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation);
  }
}(this, function(ApiClient, CommentRepresentation, ResultListDataRepresentation) {
  'use strict';

  /**
   * Comments service.
   * @module api/CommentsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new CommentsApi. 
   * @alias module:api/CommentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addProcessInstanceCommentUsingPOST operation.
     * @callback module:api/CommentsApi~addProcessInstanceCommentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a comment to a Process
     * @param {module:model/CommentRepresentation} commentRequest commentRequest
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/CommentsApi~addProcessInstanceCommentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CommentRepresentation}
     */
    this.addProcessInstanceCommentUsingPOST = function(commentRequest, processInstanceId, callback) {
      var postBody = commentRequest;

      // verify the required parameter 'commentRequest' is set
      if (commentRequest == undefined || commentRequest == null) {
        throw "Missing the required parameter 'commentRequest' when calling addProcessInstanceCommentUsingPOST";
      }

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling addProcessInstanceCommentUsingPOST";
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
      var returnType = CommentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addTaskCommentUsingPOST operation.
     * @callback module:api/CommentsApi~addTaskCommentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a comment to a Task
     * @param {module:model/CommentRepresentation} commentRequest commentRequest
     * @param {String} taskId taskId
     * @param {module:api/CommentsApi~addTaskCommentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CommentRepresentation}
     */
    this.addTaskCommentUsingPOST = function(commentRequest, taskId, callback) {
      var postBody = commentRequest;

      // verify the required parameter 'commentRequest' is set
      if (commentRequest == undefined || commentRequest == null) {
        throw "Missing the required parameter 'commentRequest' when calling addTaskCommentUsingPOST";
      }

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling addTaskCommentUsingPOST";
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
      var returnType = CommentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessInstanceCommentsUsingGET operation.
     * @callback module:api/CommentsApi~getProcessInstanceCommentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Comment list added to Process
     * @param {String} processInstanceId processInstanceId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestFirst latestFirst
     * @param {module:api/CommentsApi~getProcessInstanceCommentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getProcessInstanceCommentsUsingGET = function(processInstanceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceCommentsUsingGET";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
      };
      var queryParams = {
        'latestFirst': opts['latestFirst']
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
        '/api/enterprise/process-instances/{processInstanceId}/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskCommentsUsingGET operation.
     * @callback module:api/CommentsApi~getTaskCommentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Comment list added to Task
     * @param {String} taskId taskId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestFirst latestFirst
     * @param {module:api/CommentsApi~getTaskCommentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getTaskCommentsUsingGET = function(taskId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskCommentsUsingGET";
      }


      var pathParams = {
        'taskId': taskId
      };
      var queryParams = {
        'latestFirst': opts['latestFirst']
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
        '/api/enterprise/tasks/{taskId}/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
