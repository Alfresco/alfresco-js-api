(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AppDefinitionRepresentation', 'model/AppDefinitionPublishRepresentation', 'model/AppDefinitionUpdateResultRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AppDefinitionRepresentation'), require('../model/AppDefinitionPublishRepresentation'), require('../model/AppDefinitionUpdateResultRepresentation'));
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
     * Callback function to receive the result of the exportAppDefinitionUsingGET operation.
     * @callback module:api/AppsDefinitionApi~exportAppDefinitionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export App Definition
     * This will return a zip file containing the app definition model and all related models (process definitions and forms).
     * @param {Integer} modelId modelId from a runtime app or the id of an app definition model
     * @param {module:api/AppsDefinitionApi~exportAppDefinitionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.exportAppDefinitionUsingGET = function(modelId, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling exportAppDefinitionUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importAppDefinitionUsingPOST operation.
     * @callback module:api/AppsDefinitionApi~importAppDefinitionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import App Definition
     * This is useful to bootstrap an environment (for users or continous integration).
     * @param {File} file file
     * @param {module:api/AppsDefinitionApi~importAppDefinitionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AppDefinitionRepresentation}
     */
    this.importAppDefinitionUsingPOST = function(file, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importAppDefinitionUsingPOST";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importAppDefinitionUsingPOST1 operation.
     * @callback module:api/AppsDefinitionApi~importAppDefinitionUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import App
     * To import an app to an existing app definition to create a new version instead of importing a new app definition.
     * @param {Integer} modelId modelId
     * @param {File} file file
     * @param {module:api/AppsDefinitionApi~importAppDefinitionUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AppDefinitionRepresentation}
     */
    this.importAppDefinitionUsingPOST1 = function(modelId, file, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling importAppDefinitionUsingPOST1";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importAppDefinitionUsingPOST1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the publishAppDefinitionUsingPOST operation.
     * @callback module:api/AppsDefinitionApi~publishAppDefinitionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AppDefinitionUpdateResultRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Publish App
     * Before an app model can be used, it need to be published
     * @param {Integer} modelId modelId
     * @param {module:model/AppDefinitionPublishRepresentation} publishModel publishModel
     * @param {module:api/AppsDefinitionApi~publishAppDefinitionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AppDefinitionUpdateResultRepresentation}
     */
    this.publishAppDefinitionUsingPOST = function(modelId, publishModel, callback) {
      var postBody = publishModel;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling publishAppDefinitionUsingPOST";
      }

      // verify the required parameter 'publishModel' is set
      if (publishModel == undefined || publishModel == null) {
        throw "Missing the required parameter 'publishModel' when calling publishAppDefinitionUsingPOST";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
