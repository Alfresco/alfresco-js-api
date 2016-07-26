(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserActionRepresentation', 'model/UserRepresentation', 'model/ResultListDataRepresentation', 'model/ResetPasswordRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserActionRepresentation'), require('../model/UserRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/ResetPasswordRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.UserApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.UserActionRepresentation, root.ActivitiPublicRestApi.UserRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.ResetPasswordRepresentation);
  }
}(this, function(ApiClient, UserActionRepresentation, UserRepresentation, ResultListDataRepresentation, ResetPasswordRepresentation) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.4.0
   */

  /**
   * Constructs a new UserApi.
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the executeAction operation.
     * @callback module:api/UserApi~executeActionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Execute an action for a specific user
     * Typical action is updating/reset password
     * @param {Integer} userId userId
     * @param {module:model/UserActionRepresentation} actionRequest actionRequest
     * @param {module:api/UserApi~executeActionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.executeAction = function(userId, actionRequest, callback) {
      var postBody = actionRequest;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling executeAction";
      }

      // verify the required parameter 'actionRequest' is set
      if (actionRequest == undefined || actionRequest == null) {
        throw "Missing the required parameter 'actionRequest' when calling executeAction";
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
        '/api/enterprise/users/{userId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProfilePicture operation.
     * @callback module:api/UserApi~getProfilePictureCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user profile picture
     * @param {Integer} userId userId
     * @param {module:api/UserApi~getProfilePictureCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getProfilePicture = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getProfilePicture";
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
        '/api/enterprise/users/{userId}/picture', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUser operation.
     * @callback module:api/UserApi~getUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user information
     * @param {Integer} userId userId
     * @param {module:api/UserApi~getUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserRepresentation}
     */
    this.getUser = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getUser";
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
      var returnType = UserRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/users/{userId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsers operation.
     * @callback module:api/UserApi~getUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List users
     * A common use case is that a user wants to select another user (eg. when assigning a task) or group.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.email email
     * @param {String} opts.externalId externalId
     * @param {String} opts.externalIdCaseInsensitive externalIdCaseInsensitive
     * @param {String} opts.excludeTaskId excludeTaskId
     * @param {String} opts.excludeProcessId excludeProcessId
     * @param {Integer} opts.groupId groupId
     * @param {Integer} opts.tenantId tenantId
     * @param {module:api/UserApi~getUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getUsers = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'email': opts['email'],
        'externalId': opts['externalId'],
        'externalIdCaseInsensitive': opts['externalIdCaseInsensitive'],
        'excludeTaskId': opts['excludeTaskId'],
        'excludeProcessId': opts['excludeProcessId'],
        'groupId': opts['groupId'],
        'tenantId': opts['tenantId']
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
        '/api/enterprise/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the requestPasswordReset operation.
     * @callback module:api/UserApi~requestPasswordResetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Request password reset
     * @param {module:model/ResetPasswordRepresentation} resetPassword resetPassword
     * @param {module:api/UserApi~requestPasswordResetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.requestPasswordReset = function(resetPassword, callback) {
      var postBody = resetPassword;

      // verify the required parameter 'resetPassword' is set
      if (resetPassword == undefined || resetPassword == null) {
        throw "Missing the required parameter 'resetPassword' when calling requestPasswordReset";
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
        '/api/enterprise/idm/passwords', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateUser operation.
     * @callback module:api/UserApi~updateUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user information
     * @param {Integer} userId userId
     * @param {module:model/UserRepresentation} userRequest userRequest
     * @param {module:api/UserApi~updateUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserRepresentation}
     */
    this.updateUser = function(userId, userRequest, callback) {
      var postBody = userRequest;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateUser";
      }

      // verify the required parameter 'userRequest' is set
      if (userRequest == undefined || userRequest == null) {
        throw "Missing the required parameter 'userRequest' when calling updateUser";
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
      var returnType = UserRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/users/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
