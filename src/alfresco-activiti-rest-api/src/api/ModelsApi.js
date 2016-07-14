(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ModelRepresentation', 'model/ObjectNode', 'model/ResultListDataRepresentation', 'model/ValidationErrorRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ModelRepresentation'), require('../model/ObjectNode'), require('../model/ResultListDataRepresentation'), require('../model/ValidationErrorRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ModelsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ModelRepresentation, root.ActivitiPublicRestApi.ObjectNode, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.ValidationErrorRepresentation);
  }
}(this, function(ApiClient, ModelRepresentation, ObjectNode, ResultListDataRepresentation, ValidationErrorRepresentation) {
  'use strict';

  /**
   * Models service.
   * @module api/ModelsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ModelsApi. 
   * @alias module:api/ModelsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createModelUsingPOST operation.
     * @callback module:api/ModelsApi~createModelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To create a new model
     * @param {module:model/ModelRepresentation} modelRepresentation modelRepresentation
     * @param {module:api/ModelsApi~createModelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.createModelUsingPOST = function(modelRepresentation, callback) {
      var postBody = modelRepresentation;

      // verify the required parameter 'modelRepresentation' is set
      if (modelRepresentation == undefined || modelRepresentation == null) {
        throw "Missing the required parameter 'modelRepresentation' when calling createModelUsingPOST";
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
      var returnType = ModelRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/models', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteModelUsingDELETE operation.
     * @callback module:api/ModelsApi~deleteModelUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a model
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.cascade cascade
     * @param {Boolean} opts.deleteRuntimeApp deleteRuntimeApp
     * @param {module:api/ModelsApi~deleteModelUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteModelUsingDELETE = function(modelId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling deleteModelUsingDELETE";
      }


      var pathParams = {
        'modelId': modelId
      };
      var queryParams = {
        'cascade': opts['cascade'],
        'deleteRuntimeApp': opts['deleteRuntimeApp']
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
        '/api/enterprise/models/{modelId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the duplicateModelUsingPOST operation.
     * @callback module:api/ModelsApi~duplicateModelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To duplicate an existing model
     * @param {Integer} modelId modelId
     * @param {module:model/ModelRepresentation} modelRepresentation modelRepresentation
     * @param {module:api/ModelsApi~duplicateModelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.duplicateModelUsingPOST = function(modelId, modelRepresentation, callback) {
      var postBody = modelRepresentation;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling duplicateModelUsingPOST";
      }

      // verify the required parameter 'modelRepresentation' is set
      if (modelRepresentation == undefined || modelRepresentation == null) {
        throw "Missing the required parameter 'modelRepresentation' when calling duplicateModelUsingPOST";
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
      var returnType = ModelRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}/clone', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelJSONUsingGET operation.
     * @callback module:api/ModelsApi~getModelJSONUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the JSON model
     * @param {Integer} modelId modelId
     * @param {module:api/ModelsApi~getModelJSONUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ObjectNode}
     */
    this.getModelJSONUsingGET = function(modelId, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getModelJSONUsingGET";
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
      var returnType = ObjectNode;

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}/editor/json', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelThumbnailUsingGET operation.
     * @callback module:api/ModelsApi~getModelThumbnailUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Model thumbnail
     * @param {Integer} modelId modelId
     * @param {module:api/ModelsApi~getModelThumbnailUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'String'>}
     */
    this.getModelThumbnailUsingGET = function(modelId, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getModelThumbnailUsingGET";
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
      var accepts = ['image/png', 'application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}/thumbnail', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelUsingGET operation.
     * @callback module:api/ModelsApi~getModelUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To retrieve details about a particular model (process, form, decision rule or app)
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermissions includePermissions
     * @param {module:api/ModelsApi~getModelUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.getModelUsingGET = function(modelId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getModelUsingGET";
      }


      var pathParams = {
        'modelId': modelId
      };
      var queryParams = {
        'includePermissions': opts['includePermissions']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ModelRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelsToIncludeInAppDefinitionUsingGET operation.
     * @callback module:api/ModelsApi~getModelsToIncludeInAppDefinitionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * TODO
     * @param {module:api/ModelsApi~getModelsToIncludeInAppDefinitionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getModelsToIncludeInAppDefinitionUsingGET = function(callback) {
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
        '/api/enterprise/models-for-app-definition', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getModelsUsingGET operation.
     * @callback module:api/ModelsApi~getModelsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List models (process, form, decision rule or app)
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.sort sort
     * @param {Integer} opts.modelType modelType
     * @param {Integer} opts.referenceId referenceId
     * @param {module:api/ModelsApi~getModelsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getModelsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'sort': opts['sort'],
        'modelType': opts['modelType'],
        'referenceId': opts['referenceId']
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
        '/api/enterprise/models', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importNewVersionUsingPOST operation.
     * @callback module:api/ModelsApi~importNewVersionUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new model version
     * @param {Integer} modelId modelId
     * @param {File} file file
     * @param {module:api/ModelsApi~importNewVersionUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.importNewVersionUsingPOST = function(modelId, file, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling importNewVersionUsingPOST";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importNewVersionUsingPOST";
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
      var returnType = ModelRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}/newversion', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the importProcessModelUsingPOST operation.
     * @callback module:api/ModelsApi~importProcessModelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To import a BPMN 2.0 xml file
     * @param {File} file file
     * @param {module:api/ModelsApi~importProcessModelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.importProcessModelUsingPOST = function(file, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importProcessModelUsingPOST";
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
      var returnType = ModelRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-models/import', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the saveModelUsingPOST operation.
     * @callback module:api/ModelsApi~saveModelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the JSON model
     * @param {Integer} modelId modelId
     * @param {Object} values values
     * @param {module:api/ModelsApi~saveModelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.saveModelUsingPOST = function(modelId, values, callback) {
      var postBody = values;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling saveModelUsingPOST";
      }

      // verify the required parameter 'values' is set
      if (values == undefined || values == null) {
        throw "Missing the required parameter 'values' when calling saveModelUsingPOST";
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
      var returnType = ModelRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}/editor/json', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateModelUsingPUT operation.
     * @callback module:api/ModelsApi~updateModelUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a specific model
     * @param {Integer} modelId modelId
     * @param {module:model/ModelRepresentation} updatedModel updatedModel
     * @param {module:api/ModelsApi~updateModelUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.updateModelUsingPUT = function(modelId, updatedModel, callback) {
      var postBody = updatedModel;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling updateModelUsingPUT";
      }

      // verify the required parameter 'updatedModel' is set
      if (updatedModel == undefined || updatedModel == null) {
        throw "Missing the required parameter 'updatedModel' when calling updateModelUsingPUT";
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
      var returnType = ModelRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the validateModelUsingPOST operation.
     * @callback module:api/ModelsApi~validateModelUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ValidationErrorRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate the JSON model
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.values values
     * @param {module:api/ModelsApi~validateModelUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ValidationErrorRepresentation>}
     */
    this.validateModelUsingPOST = function(modelId, opts, callback) {
      opts = opts || {};
      var postBody = opts['values'];

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling validateModelUsingPOST";
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
      var returnType = [ValidationErrorRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/models/{modelId}/editor/validate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
