(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RuntimeAppDefinitionSaveRepresentation', '../model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RuntimeAppDefinitionSaveRepresentation'), require('../model/ResultListDataRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AppsRuntimeApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.RuntimeAppDefinitionSaveRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation);
  }
}(this, function(ApiClient, RuntimeAppDefinitionSaveRepresentation, ResultListDataRepresentation) {
  'use strict';

  /**
   * AppsRuntime service.
   * @module api/AppsRuntimeApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AppsRuntimeApi.
   * @alias module:api/AppsRuntimeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the deployAppDefinitions operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deploy published app
     * After creating and puclished an app the user can add it to his/her landing page.
     * @param {module:model/RuntimeAppDefinitionSaveRepresentation} saveObject saveObject
     */
    this.deployAppDefinitions = function(saveObject) {
      var postBody = saveObject;

      // verify the required parameter 'saveObject' is set
      if (saveObject == undefined || saveObject == null) {
        throw "Missing the required parameter 'saveObject' when calling deployAppDefinitions";
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
        '/api/enterprise/runtime-app-definitions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getAppDefinitions operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List runtime apps
     * When a user logs in into the Alfresco Activiti BPM Suite, the landing page is displayed containing all the apps that the user is allowed to see and use.
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getAppDefinitions = function() {
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
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/runtime-app-definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
