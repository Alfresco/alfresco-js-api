(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CompleteFormRepresentation', 'model/FormValueRepresentation', 'model/FormDefinitionRepresentation', 'model/SaveFormRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CompleteFormRepresentation'), require('../model/FormValueRepresentation'), require('../model/FormDefinitionRepresentation'), require('../model/SaveFormRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TaskFormsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.CompleteFormRepresentation, root.ActivitiPublicRestApi.FormValueRepresentation, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.SaveFormRepresentation);
  }
}(this, function(ApiClient, CompleteFormRepresentation, FormValueRepresentation, FormDefinitionRepresentation, SaveFormRepresentation) {
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
     * Callback function to receive the result of the completeTaskFormUsingPOST operation.
     * @callback module:api/TaskFormsApi~completeTaskFormUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Complete a Task Form
     * @param {String} taskId taskId
     * @param {module:model/CompleteFormRepresentation} completeTaskFormRepresentation completeTaskFormRepresentation
     * @param {module:api/TaskFormsApi~completeTaskFormUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getRestFieldValuesUsingGET1 operation.
     * @callback module:api/TaskFormsApi~getRestFieldValuesUsingGET1Callback
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
     * @param {module:api/TaskFormsApi~getRestFieldValuesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/TaskFormsApi~getRestFieldValuesUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Populated Field Values
     * Form field values that are populated through a REST backend, can be retrieved via this service
     * @param {String} taskId taskId
     * @param {String} field field
     * @param {module:api/TaskFormsApi~getRestFieldValuesUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getTaskFormUsingGET operation.
     * @callback module:api/TaskFormsApi~getTaskFormUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Task Form
     * @param {String} taskId taskId
     * @param {module:api/TaskFormsApi~getTaskFormUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the saveTaskFormUsingPOST operation.
     * @callback module:api/TaskFormsApi~saveTaskFormUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save Task Form
     * @param {String} taskId taskId
     * @param {module:model/SaveFormRepresentation} saveTaskFormRepresentation saveTaskFormRepresentation
     * @param {module:api/TaskFormsApi~saveTaskFormUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
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
  };

  return exports;
}));
