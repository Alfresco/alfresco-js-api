(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/TaskRepresentation', '../model/ResultListDataRepresentation', '../model/ChecklistOrderRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/TaskRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/ChecklistOrderRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TaskCheckListApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.TaskRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.ChecklistOrderRepresentation);
  }
}(this, function(ApiClient, TaskRepresentation, ResultListDataRepresentation, ChecklistOrderRepresentation) {
  'use strict';

  /**
   * TaskCheckList service.
   * @module api/TaskCheckListApi
   * @version 1.4.0
   */

  /**
   * Constructs a new TaskCheckListApi.
   * @alias module:api/TaskCheckListApi
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
  };

  return exports;
}));
