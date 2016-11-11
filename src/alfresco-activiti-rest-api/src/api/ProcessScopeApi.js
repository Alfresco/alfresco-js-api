(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ProcessScopesRequestRepresentation', '../model/ProcessScopeRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ProcessScopesRequestRepresentation'), require('../model/ProcessScopeRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessScopeApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ProcessScopesRequestRepresentation, root.ActivitiPublicRestApi.ProcessScopeRepresentation);
  }
}(this, function(ApiClient, ProcessScopesRequestRepresentation, ProcessScopeRepresentation) {
  'use strict';

  /**
   * ProcessScope service.
   * @module api/ProcessScopeApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ProcessScopeApi.
   * @alias module:api/ProcessScopeApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the getRuntimeProcessScopes operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ProcessScopeRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRuntimeProcessScopes
     * @param {module:model/ProcessScopesRequestRepresentation} processScopesRequest processScopesRequest
     */
    this.getRuntimeProcessScopes = function(processScopesRequest) {
      var postBody = processScopesRequest;

      // verify the required parameter 'processScopesRequest' is set
      if (processScopesRequest == undefined || processScopesRequest == null) {
        throw "Missing the required parameter 'processScopesRequest' when calling getRuntimeProcessScopes";
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
      var returnType = [ProcessScopeRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/process-scopes', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
