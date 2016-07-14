(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ChangePasswordRepresentation', 'model/UserRepresentation', 'model/ImageUploadRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ChangePasswordRepresentation'), require('../model/UserRepresentation'), require('../model/ImageUploadRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProfileApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ChangePasswordRepresentation, root.ActivitiPublicRestApi.UserRepresentation, root.ActivitiPublicRestApi.ImageUploadRepresentation);
  }
}(this, function(ApiClient, ChangePasswordRepresentation, UserRepresentation, ImageUploadRepresentation) {
  'use strict';

  /**
   * Profile service.
   * @module api/ProfileApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ProfileApi. 
   * @alias module:api/ProfileApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the changePasswordUsingPOST operation.
     * @callback module:api/ProfileApi~changePasswordUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change user password
     * @param {module:model/ChangePasswordRepresentation} changePasswordRepresentation changePasswordRepresentation
     * @param {module:api/ProfileApi~changePasswordUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.changePasswordUsingPOST = function(changePasswordRepresentation, callback) {
      var postBody = changePasswordRepresentation;

      // verify the required parameter 'changePasswordRepresentation' is set
      if (changePasswordRepresentation == undefined || changePasswordRepresentation == null) {
        throw "Missing the required parameter 'changePasswordRepresentation' when calling changePasswordUsingPOST";
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
        '/api/enterprise/profile-password', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProfilePictureUsingGET operation.
     * @callback module:api/ProfileApi~getProfilePictureUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user profile picture
     * Generally returns an image file
     * @param {module:api/ProfileApi~getProfilePictureUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {File}
     */
    this.getProfilePictureUsingGET = function(callback) {
      var postBody = null;


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
      var returnType = File;

      return this.apiClient.callApi(
        '/api/enterprise/profile-picture', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProfileUsingGET operation.
     * @callback module:api/ProfileApi~getProfileUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user information
     *  This is useful to get the name, email, the groups that the user is part of, the user picture, etc.
     * @param {module:api/ProfileApi~getProfileUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserRepresentation}
     */
    this.getProfileUsingGET = function(callback) {
      var postBody = null;


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
        '/api/enterprise/profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateProfile operation.
     * @callback module:api/ProfileApi~updateProfileCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user information
     * Only a first name, last name, email and company can be updated
     * @param {module:model/UserRepresentation} userRepresentation userRepresentation
     * @param {module:api/ProfileApi~updateProfileCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/UserRepresentation}
     */
    this.updateProfile = function(userRepresentation, callback) {
      var postBody = userRepresentation;

      // verify the required parameter 'userRepresentation' is set
      if (userRepresentation == undefined || userRepresentation == null) {
        throw "Missing the required parameter 'userRepresentation' when calling updateProfile";
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
        '/api/enterprise/profile', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the uploadProfilePictureUsingPOST operation.
     * @callback module:api/ProfileApi~uploadProfilePictureUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImageUploadRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change user profile picture
     * @param {File} file file
     * @param {module:api/ProfileApi~uploadProfilePictureUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ImageUploadRepresentation}
     */
    this.uploadProfilePictureUsingPOST = function(file, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling uploadProfilePictureUsingPOST";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ImageUploadRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/profile-picture', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
