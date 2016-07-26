(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BulkUserUpdateRepresentation', 'model/UserRepresentation', 'model/AbstractUserRepresentation', 'model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BulkUserUpdateRepresentation'), require('../model/UserRepresentation'), require('../model/AbstractUserRepresentation'), require('../model/ResultListDataRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AdminUsersApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.BulkUserUpdateRepresentation, root.ActivitiPublicRestApi.UserRepresentation, root.ActivitiPublicRestApi.AbstractUserRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation);
  }
}(this, function(ApiClient, BulkUserUpdateRepresentation, UserRepresentation, AbstractUserRepresentation, ResultListDataRepresentation) {
  'use strict';

  /**
   * AdminUsers service.
   * @module api/AdminUsersApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AdminUsersApi.
   * @alias module:api/AdminUsersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the bulkUpdateUsers operation.
     * @callback module:api/AdminUsersApi~bulkUpdateUsersCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Bulk Update a list of users
     * @param {module:model/BulkUserUpdateRepresentation} update update
     * @param {module:api/AdminUsersApi~bulkUpdateUsersCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.bulkUpdateUsers = function(update, callback) {
      var postBody = update;

      // verify the required parameter 'update' is set
      if (update == undefined || update == null) {
        throw "Missing the required parameter 'update' when calling bulkUpdateUsers";
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
        '/api/enterprise/admin/users', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNewUser operation.
     * @callback module:api/AdminUsersApi~createNewUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new user
     * @param {module:model/UserRepresentation} userRepresentation userRepresentation
     * @param {module:api/AdminUsersApi~createNewUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserRepresentation}
     */
    this.createNewUser = function(userRepresentation, callback) {
      var postBody = userRepresentation;

      // verify the required parameter 'userRepresentation' is set
      if (userRepresentation == undefined || userRepresentation == null) {
        throw "Missing the required parameter 'userRepresentation' when calling createNewUser";
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
      var returnType = UserRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/AdminUsersApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AbstractUserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user information
     * @param {Integer} userId userId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.summary summary
     * @param {module:api/AdminUsersApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AbstractUserRepresentation}
     */
    this.getUser = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUser";
      }


      var pathParams = {
        'userId': userId
      };
      var queryParams = {
        'summary': opts['summary']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AbstractUserRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/AdminUsersApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of users
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.status status
     * @param {String} opts.accountType accountType
     * @param {String} opts.sort sort
     * @param {String} opts.company company
     * @param {Integer} opts.start start
     * @param {Integer} opts.page page
     * @param {Integer} opts.size size
     * @param {Integer} opts.groupId groupId
     * @param {Integer} opts.tenantId tenantId
     * @param {Boolean} opts.summary summary
     * @param {module:api/AdminUsersApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'status': opts['status'],
        'accountType': opts['accountType'],
        'sort': opts['sort'],
        'company': opts['company'],
        'start': opts['start'],
        'page': opts['page'],
        'size': opts['size'],
        'groupId': opts['groupId'],
        'tenantId': opts['tenantId'],
        'summary': opts['summary']
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
        '/api/enterprise/admin/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUserDetails operation.
     * @callback module:api/AdminUsersApi~updateUserDetailsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user details
     * @param {Integer} userId userId
     * @param {module:model/UserRepresentation} userRepresentation userRepresentation
     * @param {module:api/AdminUsersApi~updateUserDetailsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateUserDetails = function(userId, userRepresentation, callback) {
      var postBody = userRepresentation;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateUserDetails";
      }

      // verify the required parameter 'userRepresentation' is set
      if (userRepresentation == undefined || userRepresentation == null) {
        throw "Missing the required parameter 'userRepresentation' when calling updateUserDetails";
      }


      var pathParams = {
        'userId': userId
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
        '/api/enterprise/admin/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
