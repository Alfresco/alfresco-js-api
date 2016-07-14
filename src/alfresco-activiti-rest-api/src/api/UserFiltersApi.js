(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserProcessInstanceFilterRepresentation', 'model/UserTaskFilterRepresentation', 'model/ResultListDataRepresentation', 'model/UserFilterOrderRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserProcessInstanceFilterRepresentation'), require('../model/UserTaskFilterRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/UserFilterOrderRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.UserFiltersApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation, root.ActivitiPublicRestApi.UserTaskFilterRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.UserFilterOrderRepresentation);
  }
}(this, function(ApiClient, UserProcessInstanceFilterRepresentation, UserTaskFilterRepresentation, ResultListDataRepresentation, UserFilterOrderRepresentation) {
  'use strict';

  /**
   * UserFilters service.
   * @module api/UserFiltersApi
   * @version 1.4.0
   */

  /**
   * Constructs a new UserFiltersApi. 
   * @alias module:api/UserFiltersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createUserProcessInstanceFilterUsingPOST operation.
     * @callback module:api/UserFiltersApi~createUserProcessInstanceFilterUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user process instance task filter
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * @param {module:api/UserFiltersApi~createUserProcessInstanceFilterUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.createUserProcessInstanceFilterUsingPOST = function(userProcessInstanceFilterRepresentation, callback) {
      var postBody = userProcessInstanceFilterRepresentation;

      // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
      if (userProcessInstanceFilterRepresentation == undefined || userProcessInstanceFilterRepresentation == null) {
        throw "Missing the required parameter 'userProcessInstanceFilterRepresentation' when calling createUserProcessInstanceFilterUsingPOST";
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
      var returnType = UserProcessInstanceFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createUserTaskFilterUsingPOST operation.
     * @callback module:api/UserFiltersApi~createUserTaskFilterUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new task filter
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * @param {module:api/UserFiltersApi~createUserTaskFilterUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.createUserTaskFilterUsingPOST = function(userTaskFilterRepresentation, callback) {
      var postBody = userTaskFilterRepresentation;

      // verify the required parameter 'userTaskFilterRepresentation' is set
      if (userTaskFilterRepresentation == undefined || userTaskFilterRepresentation == null) {
        throw "Missing the required parameter 'userTaskFilterRepresentation' when calling createUserTaskFilterUsingPOST";
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
      var returnType = UserTaskFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserProcessInstanceFilterUsingDELETE operation.
     * @callback module:api/UserFiltersApi~deleteUserProcessInstanceFilterUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~deleteUserProcessInstanceFilterUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserProcessInstanceFilterUsingDELETE = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling deleteUserProcessInstanceFilterUsingDELETE";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
        '/api/enterprise/filters/processes/{userFilterId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteUserTaskFilterUsingDELETE operation.
     * @callback module:api/UserFiltersApi~deleteUserTaskFilterUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~deleteUserTaskFilterUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteUserTaskFilterUsingDELETE = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling deleteUserTaskFilterUsingDELETE";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
        '/api/enterprise/filters/tasks/{userFilterId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProcessInstanceFilterUsingGET operation.
     * @callback module:api/UserFiltersApi~getUserProcessInstanceFilterUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~getUserProcessInstanceFilterUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.getUserProcessInstanceFilterUsingGET = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling getUserProcessInstanceFilterUsingGET";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserProcessInstanceFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes/{userFilterId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserProcessInstanceFiltersUsingGET operation.
     * @callback module:api/UserFiltersApi~getUserProcessInstanceFiltersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of taks filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * @param {module:api/UserFiltersApi~getUserProcessInstanceFiltersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUserProcessInstanceFiltersUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'appId': opts['appId']
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
        '/api/enterprise/filters/processes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTaskFilterUsingGET operation.
     * @callback module:api/UserFiltersApi~getUserTaskFilterUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:api/UserFiltersApi~getUserTaskFilterUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.getUserTaskFilterUsingGET = function(userFilterId, callback) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling getUserTaskFilterUsingGET";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserTaskFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks/{userFilterId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserTaskFiltersUsingGET operation.
     * @callback module:api/UserFiltersApi~getUserTaskFiltersUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of task filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * @param {module:api/UserFiltersApi~getUserTaskFiltersUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUserTaskFiltersUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'appId': opts['appId']
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
        '/api/enterprise/filters/tasks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderUserProcessInstanceFiltersUsingPUT operation.
     * @callback module:api/UserFiltersApi~orderUserProcessInstanceFiltersUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user process instance filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     * @param {module:api/UserFiltersApi~orderUserProcessInstanceFiltersUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.orderUserProcessInstanceFiltersUsingPUT = function(filterOrderRepresentation, callback) {
      var postBody = filterOrderRepresentation;

      // verify the required parameter 'filterOrderRepresentation' is set
      if (filterOrderRepresentation == undefined || filterOrderRepresentation == null) {
        throw "Missing the required parameter 'filterOrderRepresentation' when calling orderUserProcessInstanceFiltersUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the orderUserTaskFiltersUsingPUT operation.
     * @callback module:api/UserFiltersApi~orderUserTaskFiltersUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user task filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     * @param {module:api/UserFiltersApi~orderUserTaskFiltersUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.orderUserTaskFiltersUsingPUT = function(filterOrderRepresentation, callback) {
      var postBody = filterOrderRepresentation;

      // verify the required parameter 'filterOrderRepresentation' is set
      if (filterOrderRepresentation == undefined || filterOrderRepresentation == null) {
        throw "Missing the required parameter 'filterOrderRepresentation' when calling orderUserTaskFiltersUsingPUT";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserProcessInstanceFilterUsingPUT operation.
     * @callback module:api/UserFiltersApi~updateUserProcessInstanceFilterUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * @param {module:api/UserFiltersApi~updateUserProcessInstanceFilterUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.updateUserProcessInstanceFilterUsingPUT = function(userFilterId, userProcessInstanceFilterRepresentation, callback) {
      var postBody = userProcessInstanceFilterRepresentation;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling updateUserProcessInstanceFilterUsingPUT";
      }

      // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
      if (userProcessInstanceFilterRepresentation == undefined || userProcessInstanceFilterRepresentation == null) {
        throw "Missing the required parameter 'userProcessInstanceFilterRepresentation' when calling updateUserProcessInstanceFilterUsingPUT";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserProcessInstanceFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/processes/{userFilterId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserTaskFilterUsingPUT operation.
     * @callback module:api/UserFiltersApi~updateUserTaskFilterUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * @param {module:api/UserFiltersApi~updateUserTaskFilterUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.updateUserTaskFilterUsingPUT = function(userFilterId, userTaskFilterRepresentation, callback) {
      var postBody = userTaskFilterRepresentation;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling updateUserTaskFilterUsingPUT";
      }

      // verify the required parameter 'userTaskFilterRepresentation' is set
      if (userTaskFilterRepresentation == undefined || userTaskFilterRepresentation == null) {
        throw "Missing the required parameter 'userTaskFilterRepresentation' when calling updateUserTaskFilterUsingPUT";
      }


      var pathParams = {
        'userFilterId': userFilterId
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
      var returnType = UserTaskFilterRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/filters/tasks/{userFilterId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
