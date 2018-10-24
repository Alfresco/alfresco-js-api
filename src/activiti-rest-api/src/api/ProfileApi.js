(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ChangePasswordRepresentation', '../model/UserRepresentation', '../model/ImageUploadRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ChangePasswordRepresentation'), require('../model/UserRepresentation'), require('../model/ImageUploadRepresentation'), require('../model/File'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProfileApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ChangePasswordRepresentation, root.ActivitiPublicRestApi.UserRepresentation, root.ActivitiPublicRestApi.ImageUploadRepresentation, root.ActivitiPublicRestApi.File);
  }
}(this, function(ApiClient, ChangePasswordRepresentation, UserRepresentation, ImageUploadRepresentation, File) {
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
     * Function to receive the result of the changePassword operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change user password
     * @param {module:model/ChangePasswordRepresentation} changePasswordRepresentation changePasswordRepresentation
     */
    this.changePassword = function(changePasswordRepresentation) {
      var postBody = changePasswordRepresentation;

      // verify the required parameter 'changePasswordRepresentation' is set
      if (changePasswordRepresentation == undefined || changePasswordRepresentation == null) {
        throw "Missing the required parameter 'changePasswordRepresentation' when calling changePassword";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getProfilePicture operation.
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user profile picture
     * Generally returns an image file
     */
    this.getProfilePicture = function() {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
    * Retrieve user URL profile picture
    * Generally returns an image file
    */
    this.getProfilePictureUrl = function() {
     return this.apiClient.basePath + '/app/rest/admin/profile-picture';
    }

    /**
     * Function to receive the result of the getProfile operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve user information
     *  This is useful to get the name, email, the groups that the user is part of, the user picture, etc.
     */
    this.getProfile = function() {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateProfile operation.
     * @param {String} error Error message, if any.
     * @param {module:model/UserRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update user information
     * Only a first name, last name, email and company can be updated
     * @param {module:model/UserRepresentation} userRepresentation userRepresentation
     */
    this.updateProfile = function(userRepresentation) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the uploadProfilePicture operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ImageUploadRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Change user profile picture
     * @param {File} file file
     */
    this.uploadProfilePicture = function(file) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling uploadProfilePicture";
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
