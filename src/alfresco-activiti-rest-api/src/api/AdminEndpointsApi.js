(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/CreateEndpointBasicAuthRepresentation', 'model/EndpointBasicAuthRepresentation', 'model/EndpointConfigurationRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CreateEndpointBasicAuthRepresentation'), require('../model/EndpointBasicAuthRepresentation'), require('../model/EndpointConfigurationRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AdminEndpointsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.CreateEndpointBasicAuthRepresentation, root.ActivitiPublicRestApi.EndpointBasicAuthRepresentation, root.ActivitiPublicRestApi.EndpointConfigurationRepresentation);
  }
}(this, function(ApiClient, CreateEndpointBasicAuthRepresentation, EndpointBasicAuthRepresentation, EndpointConfigurationRepresentation) {
  'use strict';

  /**
   * AdminEndpoints service.
   * @module api/AdminEndpointsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AdminEndpointsApi. 
   * @alias module:api/AdminEndpointsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createBasicAuthConfigurationUsingPOST1 operation.
     * @callback module:api/AdminEndpointsApi~createBasicAuthConfigurationUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createBasicAuthConfiguration
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     * @param {module:api/AdminEndpointsApi~createBasicAuthConfigurationUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointBasicAuthRepresentation}
     */
    this.createBasicAuthConfigurationUsingPOST1 = function(createRepresentation, callback) {
      var postBody = createRepresentation;

      // verify the required parameter 'createRepresentation' is set
      if (createRepresentation == undefined || createRepresentation == null) {
        throw "Missing the required parameter 'createRepresentation' when calling createBasicAuthConfigurationUsingPOST1";
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
      var returnType = EndpointBasicAuthRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createEndpointConfigurationUsingPOST1 operation.
     * @callback module:api/AdminEndpointsApi~createEndpointConfigurationUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createEndpointConfiguration
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     * @param {module:api/AdminEndpointsApi~createEndpointConfigurationUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointConfigurationRepresentation}
     */
    this.createEndpointConfigurationUsingPOST1 = function(representation, callback) {
      var postBody = representation;

      // verify the required parameter 'representation' is set
      if (representation == undefined || representation == null) {
        throw "Missing the required parameter 'representation' when calling createEndpointConfigurationUsingPOST1";
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
      var returnType = EndpointConfigurationRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBasicAuthConfigurationUsingGET1 operation.
     * @callback module:api/AdminEndpointsApi~getBasicAuthConfigurationUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getBasicAuthConfigurationUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointBasicAuthRepresentation}
     */
    this.getBasicAuthConfigurationUsingGET1 = function(basicAuthId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling getBasicAuthConfigurationUsingGET1";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getBasicAuthConfigurationUsingGET1";
      }


      var pathParams = {
        'basicAuthId': basicAuthId
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EndpointBasicAuthRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths/{basicAuthId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getBasicAuthConfigurationsUsingGET1 operation.
     * @callback module:api/AdminEndpointsApi~getBasicAuthConfigurationsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointBasicAuthRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfigurations
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getBasicAuthConfigurationsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/EndpointBasicAuthRepresentation>}
     */
    this.getBasicAuthConfigurationsUsingGET1 = function(tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getBasicAuthConfigurationsUsingGET1";
      }


      var pathParams = {
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [EndpointBasicAuthRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEndpointConfigurationUsingGET1 operation.
     * @callback module:api/AdminEndpointsApi~getEndpointConfigurationUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getEndpointConfigurationUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointConfigurationRepresentation}
     */
    this.getEndpointConfigurationUsingGET1 = function(endpointConfigurationId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling getEndpointConfigurationUsingGET1";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getEndpointConfigurationUsingGET1";
      }


      var pathParams = {
        'endpointConfigurationId': endpointConfigurationId
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = EndpointConfigurationRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEndpointConfigurationsUsingGET1 operation.
     * @callback module:api/AdminEndpointsApi~getEndpointConfigurationsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointConfigurationRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfigurations
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~getEndpointConfigurationsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/EndpointConfigurationRepresentation>}
     */
    this.getEndpointConfigurationsUsingGET1 = function(tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getEndpointConfigurationsUsingGET1";
      }


      var pathParams = {
      };
      var queryParams = {
        'tenantId': tenantId
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [EndpointConfigurationRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeBasicAuthonfigurationUsingDELETE1 operation.
     * @callback module:api/AdminEndpointsApi~removeBasicAuthonfigurationUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeBasicAuthonfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~removeBasicAuthonfigurationUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeBasicAuthonfigurationUsingDELETE1 = function(basicAuthId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling removeBasicAuthonfigurationUsingDELETE1";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling removeBasicAuthonfigurationUsingDELETE1";
      }


      var pathParams = {
        'basicAuthId': basicAuthId
      };
      var queryParams = {
        'tenantId': tenantId
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
        '/api/enterprise/admin/basic-auths/{basicAuthId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeEndpointConfigurationUsingDELETE1 operation.
     * @callback module:api/AdminEndpointsApi~removeEndpointConfigurationUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     * @param {module:api/AdminEndpointsApi~removeEndpointConfigurationUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeEndpointConfigurationUsingDELETE1 = function(endpointConfigurationId, tenantId, callback) {
      var postBody = null;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling removeEndpointConfigurationUsingDELETE1";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling removeEndpointConfigurationUsingDELETE1";
      }


      var pathParams = {
        'endpointConfigurationId': endpointConfigurationId
      };
      var queryParams = {
        'tenantId': tenantId
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
        '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateBasicAuthConfigurationUsingPUT1 operation.
     * @callback module:api/AdminEndpointsApi~updateBasicAuthConfigurationUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     * @param {module:api/AdminEndpointsApi~updateBasicAuthConfigurationUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointBasicAuthRepresentation}
     */
    this.updateBasicAuthConfigurationUsingPUT1 = function(basicAuthId, createRepresentation, callback) {
      var postBody = createRepresentation;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling updateBasicAuthConfigurationUsingPUT1";
      }

      // verify the required parameter 'createRepresentation' is set
      if (createRepresentation == undefined || createRepresentation == null) {
        throw "Missing the required parameter 'createRepresentation' when calling updateBasicAuthConfigurationUsingPUT1";
      }


      var pathParams = {
        'basicAuthId': basicAuthId
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
      var returnType = EndpointBasicAuthRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/basic-auths/{basicAuthId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateEndpointConfigurationUsingPUT1 operation.
     * @callback module:api/AdminEndpointsApi~updateEndpointConfigurationUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     * @param {module:api/AdminEndpointsApi~updateEndpointConfigurationUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/EndpointConfigurationRepresentation}
     */
    this.updateEndpointConfigurationUsingPUT1 = function(endpointConfigurationId, representation, callback) {
      var postBody = representation;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling updateEndpointConfigurationUsingPUT1";
      }

      // verify the required parameter 'representation' is set
      if (representation == undefined || representation == null) {
        throw "Missing the required parameter 'representation' when calling updateEndpointConfigurationUsingPUT1";
      }


      var pathParams = {
        'endpointConfigurationId': endpointConfigurationId
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
      var returnType = EndpointConfigurationRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/endpoints/{endpointConfigurationId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
