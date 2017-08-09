(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ProcessInstanceFilterRequestRepresentation', '../model/ResultListDataRepresentation', '../model/FormDefinitionRepresentation', '../model/ProcessInstanceRepresentation', '../model/ProcessInstanceAuditRepresentation', '../model/ProcessFilterRequestRepresentation', '../model/FormValueRepresentation', '../model/CreateProcessInstanceRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ProcessInstanceFilterRequestRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/FormDefinitionRepresentation'), require('../model/ProcessInstanceRepresentation'), require('../model/ProcessInstanceAuditRepresentation'), require('../model/ProcessFilterRequestRepresentation'), require('../model/FormValueRepresentation'), require('../model/CreateProcessInstanceRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ProcessInstanceFilterRequestRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.ProcessInstanceRepresentation, root.ActivitiPublicRestApi.ProcessInstanceAuditRepresentation, root.ActivitiPublicRestApi.ProcessFilterRequestRepresentation, root.ActivitiPublicRestApi.FormValueRepresentation, root.ActivitiPublicRestApi.CreateProcessInstanceRepresentation);
  }
}(this, function(ApiClient, ProcessInstanceFilterRequestRepresentation, ResultListDataRepresentation, FormDefinitionRepresentation, ProcessInstanceRepresentation, ProcessInstanceAuditRepresentation, ProcessFilterRequestRepresentation, FormValueRepresentation, CreateProcessInstanceRepresentation) {
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
     * Function to receive the result of the deleteProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a process instance
     * @param {String} processInstanceId processInstanceId
     */
    this.deleteProcessInstance = function(processInstanceId) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling deleteProcessInstance";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the filterProcessInstances operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Filter a list of process instances
     * @param {module:model/ProcessInstanceFilterRequestRepresentation} filterRequest filterRequest
     */
    this.filterProcessInstances = function(filterRequest) {
      var postBody = filterRequest;

      // verify the required parameter 'filterRequest' is set
      if (filterRequest == undefined || filterRequest == null) {
        throw "Missing the required parameter 'filterRequest' when calling filterProcessInstances";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getProcessDefinitionStartForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the start form for a process definition
     * @param {String} processDefinitionId processDefinitionId
     */
    this.getProcessDefinitionStartForm = function(processDefinitionId) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processDefinitionId == undefined || processDefinitionId == null) {
        throw "Missing the required parameter 'processDefinitionId' when calling getProcessInstanceContent";
      }


      var pathParams = {
        'processDefinitionId': processDefinitionId
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getProcessDefinitions operation.
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
     */
    this.getProcessDefinitions = function(opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getProcessInstanceContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve content attached to process instance fields
     * @param {String} processInstanceId processInstanceId
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
     * Function to receive the result of the getProcessInstanceStartForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get process start form
     * When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved
     * @param {String} processInstanceId processInstanceId
     */
    this.getProcessInstanceStartForm = function(processInstanceId) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceStartForm";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a process instance information
     * @param {String} processInstanceId processInstanceId
     */
    this.getProcessInstance = function(processInstanceId) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstance";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getProcessInstances operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a list of process instances
     * @param {module:model/ProcessFilterRequestRepresentation} requestNode requestNode
     */
    this.getProcessInstances = function(requestNode) {
      var postBody = requestNode;

      // verify the required parameter 'requestNode' is set
      if (requestNode == undefined || requestNode == null) {
        throw "Missing the required parameter 'requestNode' when calling getProcessInstances";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve the process audit in the JSON format
     * @param {String} processId processId
     */
    this.getProcessAuditJson = function(processId) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getProcessAuditJson";
      }

      var pathParams = {
        'processId': processId
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
      var returnType = ProcessInstanceAuditRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processId}/audit-log', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Retrieve the process audit in the JSON format
     * @param {String} processId processId
     */
    this.getProcessAuditPdf = function(processId) {
      var postBody = null;

      // verify the required parameter 'processId' is set
      if (processId == undefined || processId == null) {
        throw "Missing the required parameter 'processId' when calling getProcessAuditPdf";
      }

      var pathParams = {
        'processId': processId
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
      var returnType = Object;
      var contextRoot = null;
      var responseType = 'blob';

      return this.apiClient.callApi(
        '/app/rest/process-instances/{processId}/audit', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, contextRoot, responseType
      );
    }

    /**
     * Function to receive the result of the getRestFieldValues operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the typeahead field)
     *  @param {String} processDefinitionId
     *  @param {String} field
     */
    this.getRestFieldValues = function(processDefinitionId, field) {
      var postBody = null;


      var pathParams = {
          'processDefinitionId': processDefinitionId,
          'field': field
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getRestTableFieldValues operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/FormValueRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve field values (eg. the table field)
     *  @param {String} processDefinitionId
     *  @param {String} field
     *  @param {String} column
     */
    this.getRestTableFieldValues = function(processDefinitionId, field, column) {
      var postBody = null;


      var pathParams = {
          'processDefinitionId': processDefinitionId,
          'field': field,
          'column' :column
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the startNewProcessInstance operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a process instance
     * @param {module:model/CreateProcessInstanceRepresentation} startRequest startRequest
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
