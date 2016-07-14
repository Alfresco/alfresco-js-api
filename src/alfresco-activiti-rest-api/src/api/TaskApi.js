(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TaskRepresentation', 'model/CommentRepresentation', 'model/ObjectNode', 'model/CompleteFormRepresentation', 'model/RelatedContentRepresentation', 'model/TaskFilterRequestRepresentation', 'model/ResultListDataRepresentation', 'model/FormValueRepresentation', 'model/FormDefinitionRepresentation', 'model/ChecklistOrderRepresentation', 'model/SaveFormRepresentation', 'model/TaskUpdateRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TaskRepresentation'), require('../model/CommentRepresentation'), require('../model/ObjectNode'), require('../model/CompleteFormRepresentation'), require('../model/RelatedContentRepresentation'), require('../model/TaskFilterRequestRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/FormValueRepresentation'), require('../model/FormDefinitionRepresentation'), require('../model/ChecklistOrderRepresentation'), require('../model/SaveFormRepresentation'), require('../model/TaskUpdateRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TaskApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.TaskRepresentation, root.ActivitiPublicRestApi.CommentRepresentation, root.ActivitiPublicRestApi.ObjectNode, root.ActivitiPublicRestApi.CompleteFormRepresentation, root.ActivitiPublicRestApi.RelatedContentRepresentation, root.ActivitiPublicRestApi.TaskFilterRequestRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.FormValueRepresentation, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.ChecklistOrderRepresentation, root.ActivitiPublicRestApi.SaveFormRepresentation, root.ActivitiPublicRestApi.TaskUpdateRepresentation);
  }
}(this, function(ApiClient, TaskRepresentation, CommentRepresentation, ObjectNode, CompleteFormRepresentation, RelatedContentRepresentation, TaskFilterRequestRepresentation, ResultListDataRepresentation, FormValueRepresentation, FormDefinitionRepresentation, ChecklistOrderRepresentation, SaveFormRepresentation, TaskUpdateRepresentation) {
  'use strict';

  /**
   * Task service.
   * @module api/TaskApi
   * @version 1.4.0
   */

  /**
   * Constructs a new TaskApi. 
   * @alias module:api/TaskApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addSubtaskUsingPOST operation.
     * @callback module:api/TaskApi~addSubtaskUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a task checklist
     * @param {String} taskId taskId
     * @param {module:model/TaskRepresentation} taskRepresentation taskRepresentation
     * @param {module:api/TaskApi~addSubtaskUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TaskRepresentation}
     */
    this.addSubtaskUsingPOST = function(taskId, taskRepresentation, callback) {
      var postBody = taskRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling addSubtaskUsingPOST";
      }

      // verify the required parameter 'taskRepresentation' is set
      if (taskRepresentation == undefined || taskRepresentation == null) {
        throw "Missing the required parameter 'taskRepresentation' when calling addSubtaskUsingPOST";
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
      var returnType = TaskRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/checklist', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addTaskCommentUsingPOST operation.
     * @callback module:api/TaskApi~addTaskCommentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a comment to a Task
     * @param {module:model/CommentRepresentation} commentRequest commentRequest
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~addTaskCommentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the assignTaskUsingPUT operation.
     * @callback module:api/TaskApi~assignTaskUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign a task to a user
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     * @param {module:api/TaskApi~assignTaskUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TaskRepresentation}
     */
    this.assignTaskUsingPUT = function(taskId, requestNode, callback) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling assignTaskUsingPUT";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling assignTaskUsingPUT";
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
      var returnType = TaskRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/assign', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the attachFormUsingPUT operation.
     * @callback module:api/TaskApi~attachFormUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a form to a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     * @param {module:api/TaskApi~attachFormUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.attachFormUsingPUT = function(taskId, requestNode, callback) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling attachFormUsingPUT";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling attachFormUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/attach-form', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the claimTaskUsingPUT operation.
     * @callback module:api/TaskApi~claimTaskUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Claim a task
     * To claim a task (in case the task is assigned to a group)
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~claimTaskUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.claimTaskUsingPUT = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling claimTaskUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/claim', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the completeTaskFormUsingPOST operation.
     * @callback module:api/TaskApi~completeTaskFormUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete a Task Form
     * @param {String} taskId taskId
     * @param {module:model/CompleteFormRepresentation} completeTaskFormRepresentation completeTaskFormRepresentation
     * @param {module:api/TaskApi~completeTaskFormUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.completeTaskFormUsingPOST = function(taskId, completeTaskFormRepresentation, callback) {
      var postBody = completeTaskFormRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling completeTaskFormUsingPOST";
      }

      // verify the required parameter 'completeTaskFormRepresentation' is set
      if (completeTaskFormRepresentation == undefined || completeTaskFormRepresentation == null) {
        throw "Missing the required parameter 'completeTaskFormRepresentation' when calling completeTaskFormUsingPOST";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/task-forms/{taskId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the completeTaskUsingPUT operation.
     * @callback module:api/TaskApi~completeTaskUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete Task
     * To complete a task (standalone or without a task form)
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~completeTaskUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.completeTaskUsingPUT = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling completeTaskUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/complete', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNewTaskUsingPOST operation.
     * @callback module:api/TaskApi~createNewTaskUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Standalone Task
     * Standalone Task is not associated with a process instance. You can define only task name &amp; description
     * @param {module:model/TaskRepresentation} taskRepresentation taskRepresentation
     * @param {module:api/TaskApi~createNewTaskUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TaskRepresentation}
     */
    this.createNewTaskUsingPOST = function(taskRepresentation, callback) {
      var postBody = taskRepresentation;

      // verify the required parameter 'taskRepresentation' is set
      if (taskRepresentation == undefined || taskRepresentation == null) {
        throw "Missing the required parameter 'taskRepresentation' when calling createNewTaskUsingPOST";
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
      var returnType = TaskRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRelatedContentOnTaskUsingPOST operation.
     * @callback module:api/TaskApi~createRelatedContentOnTaskUsingPOSTCallback
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
     * @param {module:api/TaskApi~createRelatedContentOnTaskUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TaskApi~createRelatedContentOnTaskUsingPOST1Callback
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
     * @param {module:api/TaskApi~createRelatedContentOnTaskUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the deleteTaskUsingDELETE operation.
     * @callback module:api/TaskApi~deleteTaskUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Task
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~deleteTaskUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteTaskUsingDELETE = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling deleteTaskUsingDELETE";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterTasksUsingPOST operation.
     * @callback module:api/TaskApi~filterTasksUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter list of Task
     * @param {module:model/TaskFilterRequestRepresentation} requestNode requestNode
     * @param {module:api/TaskApi~filterTasksUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.filterTasksUsingPOST = function(requestNode, callback) {
      var postBody = requestNode;

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling filterTasksUsingPOST";
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
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/filter', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getChecklistUsingGET operation.
     * @callback module:api/TaskApi~getChecklistUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Checklist added to a task
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~getChecklistUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getChecklistUsingGET = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getChecklistUsingGET";
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
        '/api/enterprise/tasks/{taskId}/checklist', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelatedContentForTaskUsingGET operation.
     * @callback module:api/TaskApi~getRelatedContentForTaskUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve which content is attached to a task
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~getRelatedContentForTaskUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the getRestFieldValuesUsingGET1 operation.
     * @callback module:api/TaskApi~getRestFieldValuesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Column Field Values
     * Specific case to retrieve information on a specific column
     * @param {String} taskId taskId
     * @param {String} field field
     * @param {String} column column
     * @param {module:api/TaskApi~getRestFieldValuesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FormValueRepresentation>}
     */
    this.getRestFieldValuesUsingGET1 = function(taskId, field, column, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getRestFieldValuesUsingGET1";
      }

      // verify the required parameter 'field' is set
      if (field == undefined || field == null) {
        throw "Missing the required parameter 'field' when calling getRestFieldValuesUsingGET1";
      }

      // verify the required parameter 'column' is set
      if (column == undefined || column == null) {
        throw "Missing the required parameter 'column' when calling getRestFieldValuesUsingGET1";
      }


      var pathParams = {
        'taskId': taskId,
        'field': field,
        'column': column
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
      var returnType = [FormValueRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/task-forms/{taskId}/form-values/{field}/{column}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRestFieldValuesUsingGET2 operation.
     * @callback module:api/TaskApi~getRestFieldValuesUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Populated Field Values
     * Form field values that are populated through a REST backend, can be retrieved via this service
     * @param {String} taskId taskId
     * @param {String} field field
     * @param {module:api/TaskApi~getRestFieldValuesUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FormValueRepresentation>}
     */
    this.getRestFieldValuesUsingGET2 = function(taskId, field, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getRestFieldValuesUsingGET2";
      }

      // verify the required parameter 'field' is set
      if (field == undefined || field == null) {
        throw "Missing the required parameter 'field' when calling getRestFieldValuesUsingGET2";
      }


      var pathParams = {
        'taskId': taskId,
        'field': field
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
      var returnType = [FormValueRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/task-forms/{taskId}/form-values/{field}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskCommentsUsingGET operation.
     * @callback module:api/TaskApi~getTaskCommentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Comment list added to Task
     * @param {String} taskId taskId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestFirst latestFirst
     * @param {module:api/TaskApi~getTaskCommentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the getTaskFormUsingGET operation.
     * @callback module:api/TaskApi~getTaskFormUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Task Form
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~getTaskFormUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormDefinitionRepresentation}
     */
    this.getTaskFormUsingGET = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskFormUsingGET";
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
      var returnType = FormDefinitionRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/task-forms/{taskId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getTaskUsingGET operation.
     * @callback module:api/TaskApi~getTaskUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Task Details
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~getTaskUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TaskRepresentation}
     */
    this.getTaskUsingGET = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskUsingGET";
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
      var returnType = TaskRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the involveUserUsingPUT operation.
     * @callback module:api/TaskApi~involveUserUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To involve a user with a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     * @param {module:api/TaskApi~involveUserUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.involveUserUsingPUT = function(taskId, requestNode, callback) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling involveUserUsingPUT";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling involveUserUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/involve', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTasksUsingPOST operation.
     * @callback module:api/TaskApi~listTasksUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Task
     * @param {module:model/ObjectNode} requestNode requestNode
     * @param {module:api/TaskApi~listTasksUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.listTasksUsingPOST = function(requestNode, callback) {
      var postBody = requestNode;

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling listTasksUsingPOST";
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
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderChecklistUsingPUT operation.
     * @callback module:api/TaskApi~orderChecklistUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the order of items on a checklist
     * @param {String} taskId taskId
     * @param {module:model/ChecklistOrderRepresentation} orderRepresentation orderRepresentation
     * @param {module:api/TaskApi~orderChecklistUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.orderChecklistUsingPUT = function(taskId, orderRepresentation, callback) {
      var postBody = orderRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling orderChecklistUsingPUT";
      }

      // verify the required parameter 'orderRepresentation' is set
      if (orderRepresentation == undefined || orderRepresentation == null) {
        throw "Missing the required parameter 'orderRepresentation' when calling orderChecklistUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/checklist', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeFormUsingDELETE operation.
     * @callback module:api/TaskApi~removeFormUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a form to a task
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~removeFormUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeFormUsingDELETE = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling removeFormUsingDELETE";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/remove-form', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeInvolvedUserUsingPUT operation.
     * @callback module:api/TaskApi~removeInvolvedUserUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an involved user from a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     * @param {module:api/TaskApi~removeInvolvedUserUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeInvolvedUserUsingPUT = function(taskId, requestNode, callback) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling removeInvolvedUserUsingPUT";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling removeInvolvedUserUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/remove-involved', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveTaskFormUsingPOST operation.
     * @callback module:api/TaskApi~saveTaskFormUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save Task Form
     * @param {String} taskId taskId
     * @param {module:model/SaveFormRepresentation} saveTaskFormRepresentation saveTaskFormRepresentation
     * @param {module:api/TaskApi~saveTaskFormUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.saveTaskFormUsingPOST = function(taskId, saveTaskFormRepresentation, callback) {
      var postBody = saveTaskFormRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling saveTaskFormUsingPOST";
      }

      // verify the required parameter 'saveTaskFormRepresentation' is set
      if (saveTaskFormRepresentation == undefined || saveTaskFormRepresentation == null) {
        throw "Missing the required parameter 'saveTaskFormRepresentation' when calling saveTaskFormUsingPOST";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/task-forms/{taskId}/save-form', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the unclaimTaskUsingPUT operation.
     * @callback module:api/TaskApi~unclaimTaskUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unclaim a task
     * To unclaim a task (in case the task was assigned to a group)
     * @param {String} taskId taskId
     * @param {module:api/TaskApi~unclaimTaskUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.unclaimTaskUsingPUT = function(taskId, callback) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling unclaimTaskUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/action/unclaim', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateTaskUsingPUT operation.
     * @callback module:api/TaskApi~updateTaskUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Task Details
     * You can edit only name, description and dueDate (ISO 8601 string).
     * @param {String} taskId taskId
     * @param {module:model/TaskUpdateRepresentation} updated updated
     * @param {module:api/TaskApi~updateTaskUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/TaskRepresentation}
     */
    this.updateTaskUsingPUT = function(taskId, updated, callback) {
      var postBody = updated;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling updateTaskUsingPUT";
      }

      // verify the required parameter 'updated' is set
      if (updated == undefined || updated == null) {
        throw "Missing the required parameter 'updated' when calling updateTaskUsingPUT";
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
      var returnType = TaskRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
