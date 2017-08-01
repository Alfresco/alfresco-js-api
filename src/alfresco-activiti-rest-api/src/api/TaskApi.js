(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/TaskRepresentation', '../model/TaskAuditRepresentation', '../model/CommentRepresentation', '../model/ObjectNode', '../model/CompleteFormRepresentation', '../model/RelatedContentRepresentation', '../model/TaskFilterRequestRepresentation', '../model/ResultListDataRepresentation', '../model/FormValueRepresentation', '../model/FormDefinitionRepresentation', '../model/ChecklistOrderRepresentation', '../model/SaveFormRepresentation', '../model/TaskUpdateRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/TaskRepresentation'), require('../model/TaskAuditRepresentation'), require('../model/CommentRepresentation'), require('../model/ObjectNode'), require('../model/CompleteFormRepresentation'), require('../model/RelatedContentRepresentation'), require('../model/TaskFilterRequestRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/FormValueRepresentation'), require('../model/FormDefinitionRepresentation'), require('../model/ChecklistOrderRepresentation'), require('../model/SaveFormRepresentation'), require('../model/TaskUpdateRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TaskApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.TaskRepresentation, root.ActivitiPublicRestApi.TaskAuditRepresentation, root.ActivitiPublicRestApi.CommentRepresentation, root.ActivitiPublicRestApi.ObjectNode, root.ActivitiPublicRestApi.CompleteFormRepresentation, root.ActivitiPublicRestApi.RelatedContentRepresentation, root.ActivitiPublicRestApi.TaskFilterRequestRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.FormValueRepresentation, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.ChecklistOrderRepresentation, root.ActivitiPublicRestApi.SaveFormRepresentation, root.ActivitiPublicRestApi.TaskUpdateRepresentation);
  }
}(this, function(ApiClient, TaskRepresentation, TaskAuditRepresentation, CommentRepresentation, ObjectNode, CompleteFormRepresentation, RelatedContentRepresentation, TaskFilterRequestRepresentation, ResultListDataRepresentation, FormValueRepresentation, FormDefinitionRepresentation, ChecklistOrderRepresentation, SaveFormRepresentation, TaskUpdateRepresentation) {
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
     * Function to receive the result of the addSubtask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a task checklist
     * @param {String} taskId taskId
     * @param {module:model/TaskRepresentation} taskRepresentation taskRepresentation
     */
    this.addSubtask = function(taskId, taskRepresentation) {
      var postBody = taskRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling addSubtask";
      }

      // verify the required parameter 'taskRepresentation' is set
      if (taskRepresentation == undefined || taskRepresentation == null) {
        throw "Missing the required parameter 'taskRepresentation' when calling addSubtask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the addTaskComment operation.
     * @param {String} error Error message, if any.
     * @param {module:model/CommentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a comment to a Task
     * @param {module:model/CommentRepresentation} commentRequest commentRequest
     * @param {String} taskId taskId
     */
    this.addTaskComment = function(commentRequest, taskId) {
      var postBody = commentRequest;

      // verify the required parameter 'commentRequest' is set
      if (commentRequest == undefined || commentRequest == null) {
        throw "Missing the required parameter 'commentRequest' when calling addTaskComment";
      }

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling addTaskComment";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the assignTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Assign a task to a user
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    this.assignTask = function(taskId, requestNode) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling assignTask";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling assignTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the attachForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach a form to a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    this.attachForm = function(taskId, requestNode) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling attachForm";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling attachForm";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the claimTask operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Claim a task
     * To claim a task (in case the task is assigned to a group)
     * @param {String} taskId taskId
     */
    this.claimTask = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling claimTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the completeTaskForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete a Task Form
     * @param {String} taskId taskId
     * @param {module:model/CompleteFormRepresentation} completeTaskFormRepresentation completeTaskFormRepresentation
     */
    this.completeTaskForm = function(taskId, completeTaskFormRepresentation) {
      var postBody = completeTaskFormRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling completeTaskForm";
      }

      // verify the required parameter 'completeTaskFormRepresentation' is set
      if (completeTaskFormRepresentation == undefined || completeTaskFormRepresentation == null) {
        throw "Missing the required parameter 'completeTaskFormRepresentation' when calling completeTaskForm";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the completeTask operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete Task
     * To complete a task (standalone or without a task form)
     * @param {String} taskId taskId
     */
    this.completeTask = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling completeTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createNewTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a Standalone Task
     * Standalone Task is not associated with a process instance. You can define only task name &amp; description
     * @param {module:model/TaskRepresentation} taskRepresentation taskRepresentation
     */
    this.createNewTask = function(taskRepresentation) {
      var postBody = taskRepresentation;

      // verify the required parameter 'taskRepresentation' is set
      if (taskRepresentation == undefined || taskRepresentation == null) {
        throw "Missing the required parameter 'taskRepresentation' when calling createNewTask";
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
     * Function to receive the result of the deleteTask operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a Task
     * @param {String} taskId taskId
     */
    this.deleteTask = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling deleteTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the filterTasks operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter list of Task
     * @param {module:model/TaskFilterRequestRepresentation} requestNode requestNode
     */
    this.filterTasks = function(requestNode) {
      var postBody = requestNode;

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
          console.log('a');
          postBody = new TaskFilterRequestRepresentation();
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getChecklist operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Checklist added to a task
     * @param {String} taskId taskId
     */
    this.getChecklist = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getChecklist";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve the task audit in the JSON format
     * @param {String} taskId taskId
     */
    this.getTaskAuditJson = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskAuditPdf";
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
      var returnType = TaskAuditRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/tasks/{taskId}/audit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve the task audit in the JSON format
     * @param {String} taskId taskId
     */
    this.getTaskAuditPdf = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskAuditPdf";
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
      var returnType = Object;
      var contextRoot = null;
      var responseType = 'blob';

      return this.apiClient.callApi(
        '/app/rest/tasks/{taskId}/audit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, contextRoot, responseType
      );
    }

    /**
     * Function to receive the result of the getRelatedContentForTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve which content is attached to a task
     * @param {String} taskId taskId
     */
    this.getRelatedContentForTask = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getRelatedContentForTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getRestFieldValuesColumn operation.
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
     */
    this.getRestFieldValuesColumn = function(taskId, field, column) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getRestFieldValues";
      }

      // verify the required parameter 'field' is set
      if (field == undefined || field == null) {
        throw "Missing the required parameter 'field' when calling getRestFieldValues";
      }

      // verify the required parameter 'column' is set
      if (column == undefined || column == null) {
        throw "Missing the required parameter 'column' when calling getRestFieldValues";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getRestFieldValues operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Populated Field Values
     * Form field values that are populated through a REST backend, can be retrieved via this service
     * @param {String} taskId taskId
     * @param {String} field field
     */
    this.getRestFieldValues = function(taskId, field) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getRestFieldValues";
      }

      // verify the required parameter 'field' is set
      if (field == undefined || field == null) {
        throw "Missing the required parameter 'field' when calling getRestFieldValues";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getTaskComments operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Comment list added to Task
     * @param {String} taskId taskId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestFirst latestFirst
     */
    this.getTaskComments = function(taskId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskComments";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getTaskForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Task Form
     * @param {String} taskId taskId
     */
    this.getTaskForm = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskForm";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Task Details
     * @param {String} taskId taskId
     */
    this.getTask = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the involveUser operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To involve a user with a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    this.involveUser = function(taskId, requestNode) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling involveUser";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling involveUser";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the listTasks operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Task
     * @param {module:model/TaskQueryRequestRepresentation} requestNode requestNode
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.listTasks = function(requestNode) {
      var postBody = requestNode || {};

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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the orderChecklist operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the order of items on a checklist
     * @param {String} taskId taskId
     * @param {module:model/ChecklistOrderRepresentation} orderRepresentation orderRepresentation
     */
    this.orderChecklist = function(taskId, orderRepresentation) {
      var postBody = orderRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling orderChecklist";
      }

      // verify the required parameter 'orderRepresentation' is set
      if (orderRepresentation == undefined || orderRepresentation == null) {
        throw "Missing the required parameter 'orderRepresentation' when calling orderChecklist";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the removeForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a form to a task
     * @param {String} taskId taskId
     */
    this.removeForm = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling removeForm";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the removeInvolvedUser operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an involved user from a task
     * @param {String} taskId taskId
     * @param {module:model/ObjectNode} requestNode requestNode
     */
    this.removeInvolvedUser = function(taskId, requestNode) {
      var postBody = requestNode;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling removeInvolvedUser";
      }

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling removeInvolvedUser";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the saveTaskForm operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save Task Form
     * @param {String} taskId taskId
     * @param {module:model/SaveFormRepresentation} saveTaskFormRepresentation saveTaskFormRepresentation
     */
    this.saveTaskForm = function(taskId, saveTaskFormRepresentation) {
      var postBody = saveTaskFormRepresentation;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling saveTaskForm";
      }

      // verify the required parameter 'saveTaskFormRepresentation' is set
      if (saveTaskFormRepresentation == undefined || saveTaskFormRepresentation == null) {
        throw "Missing the required parameter 'saveTaskFormRepresentation' when calling saveTaskForm";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the unclaimTask operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unclaim a task
     * To unclaim a task (in case the task was assigned to a group)
     * @param {String} taskId taskId
     */
    this.unclaimTask = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling unclaimTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateTask operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Task Details
     * You can edit only name, description and dueDate (ISO 8601 string).
     * @param {String} taskId taskId
     * @param {module:model/TaskUpdateRepresentation} updated updated
     * data is of type: {module:model/TaskRepresentation}
     */
    this.updateTask = function(taskId, updated) {
      var postBody = updated;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling updateTask";
      }

      // verify the required parameter 'updated' is set
      if (updated == undefined || updated == null) {
        throw "Missing the required parameter 'updated' when calling updateTask";
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
