(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/FormDefinitionRepresentation', '../model/FormValueRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/FormDefinitionRepresentation'), require('../model/FormValueRepresentation'));
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
     * Function to receive the result of the getProcessDefinitionStartForm operation.
     * @param {String} error Error message, if any.
     * @param {module:model/FormDefinitionRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve the start form for a process definition
     *  @param {String} processDefinitionId
     *  @param {String} field
     */
    this.getProcessDefinitionStartForm = function(processDefinitionId) {
      var postBody = null;


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
  };

  return exports;
}));
