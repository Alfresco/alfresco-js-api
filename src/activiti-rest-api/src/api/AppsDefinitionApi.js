(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/AppDefinitionRepresentation', '../model/AppDefinitionPublishRepresentation', '../model/AppDefinitionUpdateResultRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/AppDefinitionRepresentation'), require('../model/AppDefinitionPublishRepresentation'), require('../model/AppDefinitionUpdateResultRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AppsDefinitionApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.AppDefinitionRepresentation, root.ActivitiPublicRestApi.AppDefinitionPublishRepresentation, root.ActivitiPublicRestApi.AppDefinitionUpdateResultRepresentation);
  }
}(this, function(ApiClient, AppDefinitionRepresentation, AppDefinitionPublishRepresentation, AppDefinitionUpdateResultRepresentation) {
  'use strict';

  /**
   * AppsDefinition service.
   * @module api/AppsDefinitionApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AppsDefinitionApi.
   * @alias module:api/AppsDefinitionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the exportAppDefinition operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export App Definition
     * This will return a zip file containing the app definition model and all related models (process definitions and forms).
     * @param {Integer} modelId modelId from a runtime app or the id of an app definition model
     */
    this.exportAppDefinition = function(modelId) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling exportAppDefinition";
      }


      var pathParams = {
        'modelId': modelId
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
        '/api/enterprise/app-definitions/{modelId}/export', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the importAppDefinition operation.
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import App Definition
     * This is useful to bootstrap an environment (for users or continous integration).
     * @param {File} file file
     * data is of type: {module:model/AppDefinitionRepresentation}
     */
    this.importAppDefinition = function(file) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importAppDefinition";
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
      var returnType = AppDefinitionRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import App
     * To import an app to an existing app definition to create a new version instead of importing a new app definition.
     * @param {Integer} modelId modelId
     * @param {File} file file
     * data is of type: {module:model/AppDefinitionRepresentation}
     */
    this.importNewAppDefinition = function(modelId, file) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling importAppDefinition";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importAppDefinition";
      }


      var pathParams = {
        'modelId': modelId
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
      var returnType = AppDefinitionRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/{modelId}/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionUpdateResultRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish App
     * Before an app model can be used, it need to be published
     * @param {Integer} modelId modelId
     * @param {module:model/AppDefinitionPublishRepresentation} publishModel publishModel
     * data is of type: {module:model/AppDefinitionUpdateResultRepresentation}
     */
    this.publishAppDefinition = function(modelId, publishModel) {
      var postBody = publishModel;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling publishAppDefinition";
      }

      // verify the required parameter 'publishModel' is set
      if (publishModel == undefined || publishModel == null) {
        throw "Missing the required parameter 'publishModel' when calling publishAppDefinition";
      }


      var pathParams = {
        'modelId': modelId
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
      var returnType = AppDefinitionUpdateResultRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/app-definitions/{modelId}/publish', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
