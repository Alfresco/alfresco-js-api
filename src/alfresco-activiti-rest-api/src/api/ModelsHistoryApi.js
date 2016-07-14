(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResultListDataRepresentation', 'model/ModelRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResultListDataRepresentation'), require('../model/ModelRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ModelsHistoryApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.ModelRepresentation);
  }
}(this, function(ApiClient, ResultListDataRepresentation, ModelRepresentation) {
  'use strict';

  /**
   * ModelsHistory service.
   * @module api/ModelsHistoryApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ModelsHistoryApi. 
   * @alias module:api/ModelsHistoryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getModelHistoryCollectionUsingGET operation.
     * @callback module:api/ModelsHistoryApi~getModelHistoryCollectionUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To get the version information for a model
     * @param {Integer} modelId modelId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeLatestVersion includeLatestVersion
     * @param {module:api/ModelsHistoryApi~getModelHistoryCollectionUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getModelHistoryCollectionUsingGET = function(modelId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getModelHistoryCollectionUsingGET";
      }


      var pathParams = {
        'modelId': modelId
      };
      var queryParams = {
        'includeLatestVersion': opts['includeLatestVersion']
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
        '/api/enterprise/models/{modelId}/history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessModelHistoryUsingGET operation.
     * @callback module:api/ModelsHistoryApi~getProcessModelHistoryUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ModelRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * To get a particular older version of a model
     * @param {Integer} modelId modelId
     * @param {Integer} modelHistoryId modelHistoryId
     * @param {module:api/ModelsHistoryApi~getProcessModelHistoryUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ModelRepresentation}
     */
    this.getProcessModelHistoryUsingGET = function(modelId, modelHistoryId, callback) {
      var postBody = null;

      // verify the required parameter 'modelId' is set
      if (modelId == undefined || modelId == null) {
        throw "Missing the required parameter 'modelId' when calling getProcessModelHistoryUsingGET";
      }

      // verify the required parameter 'modelHistoryId' is set
      if (modelHistoryId == undefined || modelHistoryId == null) {
        throw "Missing the required parameter 'modelHistoryId' when calling getProcessModelHistoryUsingGET";
      }


      var pathParams = {
        'modelId': modelId,
        'modelHistoryId': modelHistoryId
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
        '/api/enterprise/models/{modelId}/history/{modelHistoryId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
