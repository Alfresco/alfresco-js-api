(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/LightTenantRepresentation', '../model/CreateTenantRepresentation', '../model/TenantEvent', '../model/TenantRepresentation', '../model/ImageUploadRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/LightTenantRepresentation'), require('../model/CreateTenantRepresentation'), require('../model/TenantEvent'), require('../model/TenantRepresentation'), require('../model/ImageUploadRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AdminTenantsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightTenantRepresentation, root.ActivitiPublicRestApi.CreateTenantRepresentation, root.ActivitiPublicRestApi.TenantEvent, root.ActivitiPublicRestApi.TenantRepresentation, root.ActivitiPublicRestApi.ImageUploadRepresentation);
  }
}(this, function(ApiClient, LightTenantRepresentation, CreateTenantRepresentation, TenantEvent, TenantRepresentation, ImageUploadRepresentation) {
  'use strict';

  /**
   * AdminTenants service.
   * @module api/AdminTenantsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AdminTenantsApi.
   * @alias module:api/AdminTenantsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the createTenant operation.
     * @param {String} error Error message, if any.
     * @param {module:model/LightTenantRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new tenant
     * Tenant manager only
     * @param {module:model/CreateTenantRepresentation} createTenantRepresentation createTenantRepresentation
     * data is of type: {module:model/LightTenantRepresentation}
     */
    this.createTenant = function(createTenantRepresentation) {
      var postBody = createTenantRepresentation;

      // verify the required parameter 'createTenantRepresentation' is set
      if (createTenantRepresentation == undefined || createTenantRepresentation == null) {
        throw "Missing the required parameter 'createTenantRepresentation' when calling createTenant";
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
      var returnType = LightTenantRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/tenants', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the deleteTenant operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a tenant
     * @param {Integer} tenantId tenantId
     */
    this.deleteTenant = function(tenantId) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling deleteTenant";
      }


      var pathParams = {
        'tenantId': tenantId
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
        '/api/enterprise/admin/tenants/{tenantId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getTenantEvents operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TenantEvent>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tenant events
     * @param {Integer} tenantId tenantId
     * data is of type: {Array.<module:model/TenantEvent>}
     */
    this.getTenantEvents = function(tenantId) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getTenantEvents";
      }


      var pathParams = {
        'tenantId': tenantId
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
      var returnType = [TenantEvent];

      return this.apiClient.callApi(
        '/api/enterprise/admin/tenants/{tenantId}/events', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getTenantLogo operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tenant logo
     * @param {Integer} tenantId tenantId
     */
    this.getTenantLogo = function(tenantId) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getTenantLogo";
      }


      var pathParams = {
        'tenantId': tenantId
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
        '/api/enterprise/admin/tenants/{tenantId}/logo', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getTenant operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TenantRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get tenant details
     * @param {Integer} tenantId tenantId
     * data is of type: {module:model/TenantRepresentation}
     */
    this.getTenant = function(tenantId) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling getTenant";
      }


      var pathParams = {
        'tenantId': tenantId
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
      var returnType = TenantRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/tenants/{tenantId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getTenants operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LightTenantRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all tenants
     * Tenant manager only
     * data is of type: {Array.<module:model/LightTenantRepresentation>}
     */
    this.getTenants = function() {
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
      var returnType = [LightTenantRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/admin/tenants', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the update operation.
     * @param {String} error Error message, if any.
     * @param {module:model/TenantRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a tenant
     * @param {Integer} tenantId tenantId
     * @param {module:model/CreateTenantRepresentation} createTenantRepresentation createTenantRepresentation
     * data is of type: {module:model/TenantRepresentation}
     */
    this.update = function(tenantId, createTenantRepresentation) {
      var postBody = createTenantRepresentation;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling update";
      }

      // verify the required parameter 'createTenantRepresentation' is set
      if (createTenantRepresentation == undefined || createTenantRepresentation == null) {
        throw "Missing the required parameter 'createTenantRepresentation' when calling update";
      }


      var pathParams = {
        'tenantId': tenantId
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
      var returnType = TenantRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/tenants/{tenantId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the uploadTenantLogo operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ImageUploadRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update tenant logo
     * @param {Integer} tenantId tenantId
     * @param {File} file file
     * data is of type: {module:model/ImageUploadRepresentation}
     */
    this.uploadTenantLogo = function(tenantId, file) {
      var postBody = null;

      // verify the required parameter 'tenantId' is set
      if (tenantId == undefined || tenantId == null) {
        throw "Missing the required parameter 'tenantId' when calling uploadTenantLogo";
      }

      // verify the required parameter 'file' is set
      if (file == undefined || file == null) {
        throw "Missing the required parameter 'file' when calling uploadTenantLogo";
      }


      var pathParams = {
        'tenantId': tenantId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'file': file
      };

      var authNames = [];
      var contentTypes = ['multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = ImageUploadRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/tenants/{tenantId}/logo', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
