(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CommentRepresentation', 'model/ResultListDataRepresentation', 'model/FormDefinitionRepresentation', 'model/ProcessInstanceRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommentRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/FormDefinitionRepresentation'), require('../model/ProcessInstanceRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessInstancesApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.CommentRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.FormDefinitionRepresentation, root.ActivitiPublicRestApi.ProcessInstanceRepresentation);
  }
}(this, function(ApiClient, CommentRepresentation, ResultListDataRepresentation, FormDefinitionRepresentation, ProcessInstanceRepresentation) {
  'use strict';

  /**
   * ProcessInstances service.
   * @module api/ProcessInstancesApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ProcessInstancesApi. 
   * @alias module:api/ProcessInstancesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addProcessInstanceCommentUsingPOST operation.
     * @callback module:api/ProcessInstancesApi~addProcessInstanceCommentUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CommentRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add a comment to a Process
     * @param {module:model/CommentRepresentation} commentRequest commentRequest
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessInstancesApi~addProcessInstanceCommentUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/CommentRepresentation}
     */
    this.addProcessInstanceCommentUsingPOST = function(commentRequest, processInstanceId, callback) {
      var postBody = commentRequest;

      // verify the required parameter 'commentRequest' is set
      if (commentRequest == undefined || commentRequest == null) {
        throw "Missing the required parameter 'commentRequest' when calling addProcessInstanceCommentUsingPOST";
      }

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling addProcessInstanceCommentUsingPOST";
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
      var returnType = CommentRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/process-instances/{processInstanceId}/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteProcessInstanceUsingDELETE operation.
     * @callback module:api/ProcessInstancesApi~deleteProcessInstanceUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a process instance
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessInstancesApi~deleteProcessInstanceUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getProcessInstanceCommentsUsingGET operation.
     * @callback module:api/ProcessInstancesApi~getProcessInstanceCommentsUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Comment list added to Process
     * @param {String} processInstanceId processInstanceId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.latestFirst latestFirst
     * @param {module:api/ProcessInstancesApi~getProcessInstanceCommentsUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getProcessInstanceCommentsUsingGET = function(processInstanceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'processInstanceId' is set
      if (processInstanceId == undefined || processInstanceId == null) {
        throw "Missing the required parameter 'processInstanceId' when calling getProcessInstanceCommentsUsingGET";
      }


      var pathParams = {
        'processInstanceId': processInstanceId
      };
      var queryParams = {
        'latestFirst': opts['latestFirst']
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
        '/api/enterprise/process-instances/{processInstanceId}/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getProcessInstanceStartFormUsingGET operation.
     * @callback module:api/ProcessInstancesApi~getProcessInstanceStartFormUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get process start form
     * When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessInstancesApi~getProcessInstanceStartFormUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
     * @callback module:api/ProcessInstancesApi~getProcessInstanceUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ProcessInstanceRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve a process instance information
     * @param {String} processInstanceId processInstanceId
     * @param {module:api/ProcessInstancesApi~getProcessInstanceUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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
  };

  return exports;
}));
