(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ProcessInstanceFilterRequestRepresentation', 'model/ResultListDataRepresentation', 'model/FormDefinitionRepresentation', 'model/ProcessInstanceRepresentation', 'model/ObjectNode', 'model/FormValueRepresentation', 'model/CreateProcessInstanceRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ProcessInstanceFilterRequestRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/FormDefinitionRepresentation'), require('../model/ProcessInstanceRepresentation'), require('../model/ObjectNode'), require('../model/FormValueRepresentation'), require('../model/CreateProcessInstanceRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ProcessInstanceFilterRequestRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.ProcessInstanceRepresentation, root.ActivitiPublicRestApi.ObjectNode, root.ActivitiPublicRestApi.FormValueRepresentation, root.ActivitiPublicRestApi.CreateProcessInstanceRepresentation);
  }
}(this, function(ApiClient, ProcessInstanceFilterRequestRepresentation, ResultListDataRepresentation, FormDefinitionRepresentation, ProcessInstanceRepresentation, ObjectNode, FormValueRepresentation, CreateProcessInstanceRepresentation) {
  'use strict';

  /**
   * Process service.
   * @module api/ProcessApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ProcessApi. 
   * @alias module:api/ProcessApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteProcessInstanceUsingDELETE operation.
     * @callback module:api/ProcessApi~deleteProcessInstanceUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a process instance
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessApi~deleteProcessInstanceUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteProcessInstanceUsingDELETE = function(processInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling deleteProcessInstanceUsingDELETE";
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
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the filterProcessInstancesUsingPOST operation.
     * @callback module:api/ProcessApi~filterProcessInstancesUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter a list of process instances
     * @param {module:model/ProcessInstanceFilterRequestRepresentation} filterRequest filterRequest
     * @param {module:api/ProcessApi~filterProcessInstancesUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.filterProcessInstancesUsingPOST = function(filterRequest, callback) {
      var postBody = filterRequest;

      // verify the required parameter 'filterRequest' is set
      if (filterRequest == undefined || filterRequest == null) {
        throw "Missing the required parameter 'filterRequest' when calling filterProcessInstancesUsingPOST";
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
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/filter', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessDefinitionStartFormUsingGET operation.
     * @callback module:api/ProcessApi~getProcessDefinitionStartFormUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the start form for a process definition
     * @param {module:api/ProcessApi~getProcessDefinitionStartFormUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getProcessDefinitionsUsingGET operation.
     * @callback module:api/ProcessApi~getProcessDefinitionsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of process definitions
     * Get a list of process definitions (visible within the tenant of the user)
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latest latest
     * @param {Integer} opts.appDefinitionId appDefinitionId
     * @param {module:api/ProcessApi~getProcessDefinitionsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getProcessDefinitionsUsingGET = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'latest': opts['latest'],
        'appDefinitionId': opts['appDefinitionId']
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
        '/api/enterprise/process-definitions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessInstanceContentUsingGET operation.
     * @callback module:api/ProcessApi~getProcessInstanceContentUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve content attached to process instance fields
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessApi~getProcessInstanceContentUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getProcessInstanceContentUsingGET = function(processInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceContentUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessInstanceStartFormUsingGET operation.
     * @callback module:api/ProcessApi~getProcessInstanceStartFormUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get process start form
     * When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessApi~getProcessInstanceStartFormUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/FormDefinitionRepresentation}
     */
    this.getProcessInstanceStartFormUsingGET = function(processInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceStartFormUsingGET";
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
      var returnType = FormDefinitionRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/start-form', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessInstanceUsingGET operation.
     * @callback module:api/ProcessApi~getProcessInstanceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a process instance information
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessApi~getProcessInstanceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProcessInstanceRepresentation}
     */
    this.getProcessInstanceUsingGET = function(processInstanceId, callback) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceUsingGET";
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
      var returnType = ProcessInstanceRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessInstancesUsingPOST operation.
     * @callback module:api/ProcessApi~getProcessInstancesUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of process instances
     * @param {module:model/ObjectNode} requestNode requestNode
     * @param {module:api/ProcessApi~getProcessInstancesUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getProcessInstancesUsingPOST = function(requestNode, callback) {
      var postBody = requestNode;

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling getProcessInstancesUsingPOST";
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
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/query', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRestFieldValuesUsingGET operation.
     * @callback module:api/ProcessApi~getRestFieldValuesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the typeahead field)
     * @param {module:api/ProcessApi~getRestFieldValuesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ProcessApi~getRestTableFieldValuesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the table field)
     * @param {module:api/ProcessApi~getRestTableFieldValuesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the startNewProcessInstanceUsingPOST operation.
     * @callback module:api/ProcessApi~startNewProcessInstanceUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a process instance
     * @param {module:model/CreateProcessInstanceRepresentation} startRequest startRequest
     * @param {module:api/ProcessApi~startNewProcessInstanceUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ProcessInstanceRepresentation}
     */
    this.startNewProcessInstanceUsingPOST = function(startRequest, callback) {
      var postBody = startRequest;

      // verify the required parameter 'startRequest' is set
      if (startRequest == undefined || startRequest == null) {
        throw "Missing the required parameter 'startRequest' when calling startNewProcessInstanceUsingPOST";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
