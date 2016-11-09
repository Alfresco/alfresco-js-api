(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/CreateEndpointBasicAuthRepresentation', '../model/EndpointBasicAuthRepresentation', '../model/EndpointConfigurationRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/CreateEndpointBasicAuthRepresentation'), require('../model/EndpointBasicAuthRepresentation'), require('../model/EndpointConfigurationRepresentation'));
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
     * Function to receive the result of the createBasicAuthConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createBasicAuthConfiguration
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     */
    this.createBasicAuthConfiguration = function(createRepresentation) {
      var postBody = createRepresentation;

      // verify the required parameter 'createRepresentation' is set
      if (createRepresentation == undefined || createRepresentation == null) {
        throw "Missing the required parameter 'createRepresentation' when calling createBasicAuthConfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createEndpointConfiguration
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     */
    this.createEndpointConfiguration = function(representation) {
      var postBody = representation;

      // verify the required parameter 'representation' is set
      if (representation == undefined || representation == null) {
        throw "Missing the required parameter 'representation' when calling createEndpointConfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getBasicAuthConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     */
    this.getBasicAuthConfiguration = function(basicAuthId, tenantId) {
      var postBody = null;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling getBasicAuthConfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getBasicAuthConfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getBasicAuthConfigurations operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointBasicAuthRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getBasicAuthConfigurations
     * @param {Integer} tenantId tenantId
     */
    this.getBasicAuthConfigurations = function(tenantId) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getBasicAuthConfigurations";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     */
    this.getEndpointConfiguration = function(endpointConfigurationId, tenantId) {
      var postBody = null;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling getEndpointConfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getEndpointConfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getEndpointConfigurations operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/EndpointConfigurationRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getEndpointConfigurations
     * @param {Integer} tenantId tenantId
     */
    this.getEndpointConfigurations = function(tenantId) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getEndpointConfigurations";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the removeBasicAuthonfiguration operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeBasicAuthonfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {Integer} tenantId tenantId
     */
    this.removeBasicAuthonfiguration = function(basicAuthId, tenantId) {
      var postBody = null;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling removeBasicAuthonfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling removeBasicAuthonfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the removeEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * removeEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {Integer} tenantId tenantId
     */
    this.removeEndpointConfiguration = function(endpointConfigurationId, tenantId) {
      var postBody = null;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling removeEndpointConfiguration";
      }

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling removeEndpointConfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateBasicAuthConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointBasicAuthRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateBasicAuthConfiguration
     * @param {Integer} basicAuthId basicAuthId
     * @param {module:model/CreateEndpointBasicAuthRepresentation} createRepresentation createRepresentation
     */
    this.updateBasicAuthConfiguration = function(basicAuthId, createRepresentation) {
      var postBody = createRepresentation;

      // verify the required parameter 'basicAuthId' is set
      if (basicAuthId == undefined || basicAuthId == null) {
        throw "Missing the required parameter 'basicAuthId' when calling updateBasicAuthConfiguration";
      }

      // verify the required parameter 'createRepresentation' is set
      if (createRepresentation == undefined || createRepresentation == null) {
        throw "Missing the required parameter 'createRepresentation' when calling updateBasicAuthConfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateEndpointConfiguration operation.
     * @param {String} error Error message, if any.
     * @param {module:model/EndpointConfigurationRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateEndpointConfiguration
     * @param {Integer} endpointConfigurationId endpointConfigurationId
     * @param {module:model/EndpointConfigurationRepresentation} representation representation
     */
    this.updateEndpointConfiguration = function(endpointConfigurationId, representation) {
      var postBody = representation;

      // verify the required parameter 'endpointConfigurationId' is set
      if (endpointConfigurationId == undefined || endpointConfigurationId == null) {
        throw "Missing the required parameter 'endpointConfigurationId' when calling updateEndpointConfiguration";
      }

      // verify the required parameter 'representation' is set
      if (representation == undefined || representation == null) {
        throw "Missing the required parameter 'representation' when calling updateEndpointConfiguration";
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
