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
     * Callback function to receive the result of the createModel operation.
     * @callback module:api/ModelsApi~createModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To create a new model
     * @param {module:model/ModelRepresentation} modelRepresentation modelRepresentation
     * @param {module:api/ModelsApi~createModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.createModel = function(modelRepresentation) {
      var postBody = modelRepresentation;

      // verify the required parameter 'modelRepresentation' is set
      if (modelRepresentation == undefined || modelRepresentation == null) {
        throw "Missing the required parameter 'modelRepresentation' when calling createModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the deleteModel operation.
     * @callback module:api/ModelsApi~deleteModelCallback
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
     * @param {module:api/ModelsApi~deleteModelCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteModel = function(modelId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling deleteModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the duplicateModel operation.
     * @callback module:api/ModelsApi~duplicateModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To duplicate an existing model
     * @param {Integer} modelId modelId
     * @param {module:model/ModelRepresentation} modelRepresentation modelRepresentation
     * @param {module:api/ModelsApi~duplicateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.duplicateModel = function(modelId, modelRepresentation) {
      var postBody = modelRepresentation;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling duplicateModel";
      }

      // verify the required parameter 'modelRepresentation' is set
      if (modelRepresentation == undefined || modelRepresentation == null) {
        throw "Missing the required parameter 'modelRepresentation' when calling duplicateModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getModelJSON operation.
     * @callback module:api/ModelsApi~getModelJSONCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ObjectNode} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the JSON model
     * @param {Integer} modelId modelId
     * @param {module:api/ModelsApi~getModelJSONCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ObjectNode}
     */
    this.getModelJSON = function(modelId) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getModelJSON";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getModelThumbnail operation.
     * @callback module:api/ModelsApi~getModelThumbnailCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Model thumbnail
     * @param {Integer} modelId modelId
     * @param {module:api/ModelsApi~getModelThumbnailCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'String'>}
     */
    this.getModelThumbnail = function(modelId) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getModelThumbnail";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getModel operation.
     * @callback module:api/ModelsApi~getModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To retrieve details about a particular model (process, form, decision rule or app)
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includePermissions includePermissions
     * @param {module:api/ModelsApi~getModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.getModel = function(modelId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getModelsToIncludeInAppDefinition operation.
     * @callback module:api/ModelsApi~getModelsToIncludeInAppDefinitionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * TODO
     */
    this.getModelsToIncludeInAppDefinition = function() {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getModels operation.
     * @callback module:api/ModelsApi~getModelsCallback
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
     * @param {module:api/ModelsApi~getModelsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getModels = function(opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the importNewVersion operation.
     * @callback module:api/ModelsApi~importNewVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new model version
     * @param {Integer} modelId modelId
     * @param {File} file file
     * @param {module:api/ModelsApi~importNewVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.importNewVersion = function(modelId, file) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling importNewVersion";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importNewVersion";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the importProcessModel operation.
     * @callback module:api/ModelsApi~importProcessModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To import a BPMN 2.0 xml file
     * @param {File} file file
     * @param {module:api/ModelsApi~importProcessModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.importProcessModel = function(file) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling importProcessModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the saveModel operation.
     * @callback module:api/ModelsApi~saveModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Save the JSON model
     * @param {Integer} modelId modelId
     * @param {Object} values values
     * @param {module:api/ModelsApi~saveModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.saveModel = function(modelId, values) {
      var postBody = values;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling saveModel";
      }

      // verify the required parameter 'values' is set
      if (values == undefined || values == null) {
        throw "Missing the required parameter 'values' when calling saveModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the updateModel operation.
     * @callback module:api/ModelsApi~updateModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Edit a specific model
     * @param {Integer} modelId modelId
     * @param {module:model/ModelRepresentation} updatedModel updatedModel
     * @param {module:api/ModelsApi~updateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.updateModel = function(modelId, updatedModel) {
      var postBody = updatedModel;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling updateModel";
      }

      // verify the required parameter 'updatedModel' is set
      if (updatedModel == undefined || updatedModel == null) {
        throw "Missing the required parameter 'updatedModel' when calling updateModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the validateModel operation.
     * @callback module:api/ModelsApi~validateModelCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ValidationErrorRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Validate the JSON model
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Object} opts.values values
     * @param {module:api/ModelsApi~validateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/ValidationErrorRepresentation>}
     */
    this.validateModel = function(modelId, opts) {
      opts = opts || {};
      var postBody = opts['values'];

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling validateModel";
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
