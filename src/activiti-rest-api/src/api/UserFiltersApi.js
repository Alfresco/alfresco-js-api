(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/UserProcessInstanceFilterRepresentation', '../model/UserTaskFilterRepresentation', '../model/ResultListDataRepresentation', '../model/UserFilterOrderRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/UserProcessInstanceFilterRepresentation'), require('../model/UserTaskFilterRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/UserFilterOrderRepresentation'));
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
     * Function to receive the result of the createUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a user process instance task filter
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.createUserProcessInstanceFilter = function(userProcessInstanceFilterRepresentation) {
      var postBody = userProcessInstanceFilterRepresentation;

      // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
      if (userProcessInstanceFilterRepresentation == undefined || userProcessInstanceFilterRepresentation == null) {
        throw "Missing the required parameter 'userProcessInstanceFilterRepresentation' when calling createUserProcessInstanceFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new task filter
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.createUserTaskFilter = function(userTaskFilterRepresentation) {
      var postBody = userTaskFilterRepresentation;

      // verify the required parameter 'userTaskFilterRepresentation' is set
      if (userTaskFilterRepresentation == undefined || userTaskFilterRepresentation == null) {
        throw "Missing the required parameter 'userTaskFilterRepresentation' when calling createUserTaskFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the deleteUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     */
    this.deleteUserProcessInstanceFilter = function(userFilterId) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling deleteUserProcessInstanceFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the deleteUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a task filter
     * @param {Integer} userFilterId userFilterId
     */
    this.deleteUserTaskFilter = function(userFilterId) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling deleteUserTaskFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.getUserProcessInstanceFilter = function(userFilterId) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling getUserProcessInstanceFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getUserProcessInstanceFilters operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of taks filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUserProcessInstanceFilters = function(opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a specific task filter
     * @param {Integer} userFilterId userFilterId
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.getUserTaskFilter = function(userFilterId) {
      var postBody = null;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling getUserTaskFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getUserTaskFilters operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve list of task filters
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.appId appId
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUserTaskFilters = function(opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the orderUserProcessInstanceFilters operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user process instance filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     */
    this.orderUserProcessInstanceFilters = function(filterOrderRepresentation) {
      var postBody = filterOrderRepresentation;

      // verify the required parameter 'filterOrderRepresentation' is set
      if (filterOrderRepresentation == undefined || filterOrderRepresentation == null) {
        throw "Missing the required parameter 'filterOrderRepresentation' when calling orderUserProcessInstanceFilters";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the orderUserTaskFilters operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To order the list of user task filters
     * @param {module:model/UserFilterOrderRepresentation} filterOrderRepresentation filterOrderRepresentation
     */
    this.orderUserTaskFilters = function(filterOrderRepresentation) {
      var postBody = filterOrderRepresentation;

      // verify the required parameter 'filterOrderRepresentation' is set
      if (filterOrderRepresentation == undefined || filterOrderRepresentation == null) {
        throw "Missing the required parameter 'filterOrderRepresentation' when calling orderUserTaskFilters";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateUserProcessInstanceFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserProcessInstanceFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a user process instance task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserProcessInstanceFilterRepresentation} userProcessInstanceFilterRepresentation userProcessInstanceFilterRepresentation
     * data is of type: {module:model/UserProcessInstanceFilterRepresentation}
     */
    this.updateUserProcessInstanceFilter = function(userFilterId, userProcessInstanceFilterRepresentation) {
      var postBody = userProcessInstanceFilterRepresentation;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling updateUserProcessInstanceFilter";
      }

      // verify the required parameter 'userProcessInstanceFilterRepresentation' is set
      if (userProcessInstanceFilterRepresentation == undefined || userProcessInstanceFilterRepresentation == null) {
        throw "Missing the required parameter 'userProcessInstanceFilterRepresentation' when calling updateUserProcessInstanceFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateUserTaskFilter operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserTaskFilterRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a specific task filter
     * @param {Integer} userFilterId userFilterId
     * @param {module:model/UserTaskFilterRepresentation} userTaskFilterRepresentation userTaskFilterRepresentation
     * data is of type: {module:model/UserTaskFilterRepresentation}
     */
    this.updateUserTaskFilter = function(userFilterId, userTaskFilterRepresentation) {
      var postBody = userTaskFilterRepresentation;

      // verify the required parameter 'userFilterId' is set
      if (userFilterId == undefined || userFilterId == null) {
        throw "Missing the required parameter 'userFilterId' when calling updateUserTaskFilter";
      }

      // verify the required parameter 'userTaskFilterRepresentation' is set
      if (userTaskFilterRepresentation == undefined || userTaskFilterRepresentation == null) {
        throw "Missing the required parameter 'userTaskFilterRepresentation' when calling updateUserTaskFilter";
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
