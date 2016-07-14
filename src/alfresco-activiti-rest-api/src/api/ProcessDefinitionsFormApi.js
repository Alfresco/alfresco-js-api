(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FormDefinitionRepresentation', 'model/FormValueRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FormDefinitionRepresentation'), require('../model/FormValueRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessDefinitionsFormApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.FormValueRepresentation);
  }
}(this, function(ApiClient, FormDefinitionRepresentation, FormValueRepresentation) {
  'use strict';

  /**
   * ProcessDefinitionsForm service.
   * @module api/ProcessDefinitionsFormApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ProcessDefinitionsFormApi. 
   * @alias module:api/ProcessDefinitionsFormApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getProcessDefinitionStartFormUsingGET operation.
     * @callback module:api/ProcessDefinitionsFormApi~getProcessDefinitionStartFormUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the start form for a process definition
     * @param {module:api/ProcessDefinitionsFormApi~getProcessDefinitionStartFormUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormDefinitionRepresentation}
     */
    this.getProcessDefinitionStartFormUsingGET = function(callback) {
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
      var returnType = FormDefinitionRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-definitions/{processDefinitionId}/start-form', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRestFieldValuesUsingGET operation.
     * @callback module:api/ProcessDefinitionsFormApi~getRestFieldValuesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the typeahead field)
     * @param {module:api/ProcessDefinitionsFormApi~getRestFieldValuesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FormValueRepresentation>}
     */
    this.getRestFieldValuesUsingGET = function(callback) {
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
      var returnType = [FormValueRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRestTableFieldValuesUsingGET operation.
     * @callback module:api/ProcessDefinitionsFormApi~getRestTableFieldValuesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the table field)
     * @param {module:api/ProcessDefinitionsFormApi~getRestTableFieldValuesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/FormValueRepresentation>}
     */
    this.getRestTableFieldValuesUsingGET = function(callback) {
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
      var returnType = [FormValueRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
