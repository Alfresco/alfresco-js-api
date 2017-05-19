(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/CompleteFormRepresentation', '../model/FormValueRepresentation', '../model/FormDefinitionRepresentation', '../model/SaveFormRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/CompleteFormRepresentation'), require('../model/FormValueRepresentation'), require('../model/FormDefinitionRepresentation'), require('../model/SaveFormRepresentation'), require('../model/ProcessInstanceVariableRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TaskFormsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.CompleteFormRepresentation, root.ActivitiPublicRestApi.FormValueRepresentation, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.SaveFormRepresentation, root.ActivitiPublicRestApi.ProcessInstanceVariableRepresentation);
  }
}(this, function(ApiClient, CompleteFormRepresentation, FormValueRepresentation, FormDefinitionRepresentation, SaveFormRepresentation, ProcessInstanceVariableRepresentation) {
  'use strict';

  /**
   * TaskForms service.
   * @module api/TaskFormsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new TaskFormsApi.
   * @alias module:api/TaskFormsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


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
     * Function to receive the result of the getRestFieldValues operation.
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
    this.getRestFieldValues = function(taskId, field, column) {
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
     * Function to receive the result of the getTaskFormVariables operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Task Form Variables
     * @param {String} taskId taskId
     */
    this.getTaskFormVariables = function(taskId) {
      var postBody = null;

      // verify the required parameter 'taskId' is set
      if (taskId == undefined || taskId == null) {
        throw "Missing the required parameter 'taskId' when calling getTaskFormVariables";
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
      var returnType = [ProcessInstanceVariableRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/task-forms/{taskId}/variables', 'GET',
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
  };

  return exports;
}));
