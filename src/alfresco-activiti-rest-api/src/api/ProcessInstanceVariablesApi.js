(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RestVariable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RestVariable'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessInstanceVariablesApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.RestVariable);
  }
}(this, function(ApiClient, RestVariable) {
  'use strict';

  /**
   * ProcessInstanceVariables service.
   * @module api/ProcessInstanceVariablesApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ProcessInstanceVariablesApi.
   * @alias module:api/ProcessInstanceVariablesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the getProcessInstanceContent operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve variables set on a process instance
     * @param {String} processInstanceId processInstanceId
     */
    this.getProcessInstanceVariables = function(processInstanceId) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceVariables";
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
      var returnType = [RestVariable];

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/variables', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new process instance variables
     * @param {String} processInstanceId processInstanceId
     * @param {module:model/RestVariable} restVariables restVariables
     */
    this.createProcessInstanceVariables = function(processInstanceId, restVariables) {
      var postBody = restVariables;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling createProcessInstanceVariables";
      }

      // verify the required parameter 'restVariables' is set
      if (restVariables == undefined || restVariables == null) {
        throw "Missing the required parameter 'restVariables' when calling createProcessInstanceVariables";
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
      var returnType = [RestVariable];

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/variables', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Create new process variables or update existing variables
     * @param {String} processInstanceId processInstanceId
     * @param {module:model/RestVariable} restVariables restVariables
     */
    this.createOrUpdateProcessInstanceVariables = function(processInstanceId, restVariables) {
      var postBody = restVariables;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling createOrUpdateProcessInstanceVariables";
      }

      // verify the required parameter 'restVariables' is set
      if (restVariables == undefined || restVariables == null) {
        throw "Missing the required parameter 'restVariables' when calling createOrUpdateProcessInstanceVariables";
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
      var returnType = [RestVariable];

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/variables', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get an existing process instance variable
     * @param {String} processInstanceId processInstanceId
     * @param {String} variableName variableName
     */
    this.getProcessInstanceVariable = function(processInstanceId, variableName) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceVariable";
      }

      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling getProcessInstanceVariable";
      }


      var pathParams = {
        'processInstanceId': processInstanceId,
        'variableName': variableName
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
      var returnType = RestVariable;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing process instance variable
     * @param {String} processInstanceId processInstanceId
     * @param {String} variableName variableName
     * @param {module:model/RestVariable} restVariable restVariable
     */
    this.updateProcessInstanceVariable = function(processInstanceId, variableName, restVariable) {
      var postBody = restVariable;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling updateProcessInstanceVariable";
      }

      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling updateProcessInstanceVariable";
      }


      var pathParams = {
        'processInstanceId': processInstanceId,
        'variableName': variableName
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
      var returnType = RestVariable;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete an existing process instance variable
     * @param {String} processInstanceId processInstanceId
     * @param {String} variableName variableName
     */
    this.deleteProcessInstanceVariable = function(processInstanceId, variableName) {
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling deleteProcessInstanceVariable";
      }

      // verify the required parameter 'variableName' is set
      if (variableName == undefined || variableName == null) {
        throw "Missing the required parameter 'variableName' when calling deleteProcessInstanceVariable";
      }


      var pathParams = {
        'processInstanceId': processInstanceId,
        'variableName': variableName
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
        '/api/enterprise/process-instances/{processInstanceId}/variables/{variableName}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
