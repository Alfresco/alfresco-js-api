(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ModelBpmnApi = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ModelBpmn service.
   * @module api/ModelBpmnApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ModelBpmnApi. 
   * @alias module:api/ModelBpmnApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getHistoricProcessModelBpmn20XmlUsingGET operation.
     * @callback module:api/ModelBpmnApi~getHistoricProcessModelBpmn20XmlUsingGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a previous process definition model to a BPMN 2.0 xml file
     * @param {Integer} processModelId processModelId
     * @param {Integer} processModelHistoryId processModelHistoryId
     * @param {module:api/ModelBpmnApi~getHistoricProcessModelBpmn20XmlUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getHistoricProcessModelBpmn20XmlUsingGET = function(processModelId, processModelHistoryId, callback) {
      var postBody = null;

      // verify the required parameter 'processModelId' is set
      if (processModelId == undefined || processModelId == null) {
        throw "Missing the required parameter 'processModelId' when calling getHistoricProcessModelBpmn20XmlUsingGET";
      }

      // verify the required parameter 'processModelHistoryId' is set
      if (processModelHistoryId == undefined || processModelHistoryId == null) {
        throw "Missing the required parameter 'processModelHistoryId' when calling getHistoricProcessModelBpmn20XmlUsingGET";
      }


      var pathParams = {
        'processModelId': processModelId,
        'processModelHistoryId': processModelHistoryId
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
        '/api/enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessModelBpmn20XmlUsingGET operation.
     * @callback module:api/ModelBpmnApi~getProcessModelBpmn20XmlUsingGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a process definition model to a BPMN 2.0 xml file
     * @param {Integer} processModelId processModelId
     * @param {module:api/ModelBpmnApi~getProcessModelBpmn20XmlUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getProcessModelBpmn20XmlUsingGET = function(processModelId, callback) {
      var postBody = null;

      // verify the required parameter 'processModelId' is set
      if (processModelId == undefined || processModelId == null) {
        throw "Missing the required parameter 'processModelId' when calling getProcessModelBpmn20XmlUsingGET";
      }


      var pathParams = {
        'processModelId': processModelId
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
        '/api/enterprise/models/{processModelId}/bpmn20', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
