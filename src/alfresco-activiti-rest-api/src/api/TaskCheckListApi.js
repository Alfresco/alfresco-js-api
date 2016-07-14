(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/TaskRepresentation', 'model/ResultListDataRepresentation', 'model/ChecklistOrderRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TaskRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/ChecklistOrderRepresentation'));
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
     * Callback function to receive the result of the addSubtaskUsingPOST operation.
     * @callback module:api/TaskCheckListApi~addSubtaskUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TaskRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a task checklist
     * @param {String} taskId taskId
     * @param {module:model/TaskRepresentation} taskRepresentation taskRepresentation
     * @param {module:api/TaskCheckListApi~addSubtaskUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getChecklistUsingGET operation.
     * @callback module:api/TaskCheckListApi~getChecklistUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Checklist added to a task
     * @param {String} taskId taskId
     * @param {module:api/TaskCheckListApi~getChecklistUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the orderChecklistUsingPUT operation.
     * @callback module:api/TaskCheckListApi~orderChecklistUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change the order of items on a checklist
     * @param {String} taskId taskId
     * @param {module:model/ChecklistOrderRepresentation} orderRepresentation orderRepresentation
     * @param {module:api/TaskCheckListApi~orderChecklistUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
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
  };

  return exports;
}));
