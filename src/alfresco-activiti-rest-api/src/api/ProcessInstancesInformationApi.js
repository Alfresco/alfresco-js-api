(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResultListDataRepresentation', 'model/CreateProcessInstanceRepresentation', 'model/ProcessInstanceRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResultListDataRepresentation'), require('../model/CreateProcessInstanceRepresentation'), require('../model/ProcessInstanceRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessInstancesInformationApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.CreateProcessInstanceRepresentation, root.ActivitiPublicRestApi.ProcessInstanceRepresentation);
  }
}(this, function(ApiClient, ResultListDataRepresentation, CreateProcessInstanceRepresentation, ProcessInstanceRepresentation) {
  'use strict';

  /**
   * ProcessInstancesInformation service.
   * @module api/ProcessInstancesInformationApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ProcessInstancesInformationApi.
   * @alias module:api/ProcessInstancesInformationApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getProcessInstanceContent operation.
     * @callback module:api/ProcessInstancesInformationApi~getProcessInstanceContentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve content attached to process instance fields
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessInstancesInformationApi~getProcessInstanceContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getProcessInstanceContent = function(processInstanceId) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceContent";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
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
        '/api/enterprise/process-instances/{processInstanceId}/field-content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the startNewProcessInstance operation.
     * @callback module:api/ProcessInstancesInformationApi~startNewProcessInstanceCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a process instance
     * @param {module:model/CreateProcessInstanceRepresentation} startRequest startRequest
     * @param {module:api/ProcessInstancesInformationApi~startNewProcessInstanceCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProcessInstanceRepresentation}
     */
    this.startNewProcessInstance = function(startRequest) {
      var postBody = startRequest;

      // verify the required parameter 'startRequest' is set
      if (startRequest == undefined || startRequest == null) {
        throw "Missing the required parameter 'startRequest' when calling startNewProcessInstance";
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
      var returnType = ProcessInstanceRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
