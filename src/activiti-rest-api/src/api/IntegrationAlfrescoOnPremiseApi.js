(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ResultListDataRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ResultListDataRepresentation);
  }
}(this, function(ApiClient, ResultListDataRepresentation) {
  'use strict';

  /**
   * IntegrationAlfrescoOnPremise service.
   * @module api/IntegrationAlfrescoOnPremiseApi
   * @version 1.4.0
   */

  /**
   * Constructs a new IntegrationAlfrescoOnPremiseApi.
   * @alias module:api/IntegrationAlfrescoOnPremiseApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the getAllSites operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco sites
     * Returns ALL Sites
     * @param {String} repositoryId repositoryId
     */
    this.getAllSites = function(repositoryId) {
      var postBody = null;

      // verify the required parameter 'repositoryId' is set
      if (repositoryId == undefined || repositoryId == null) {
        throw "Missing the required parameter 'repositoryId' when calling getAllSites";
      }


      var pathParams = {
        'repositoryId': repositoryId
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
        '/api/enterprise/integration/alfresco/{repositoryId}/sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getContentInFolder operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific folder
     * @param {String} repositoryId repositoryId
     * @param {String} folderId folderId
     */
    this.getContentInFolder = function(repositoryId, folderId) {
      var postBody = null;

      // verify the required parameter 'repositoryId' is set
      if (repositoryId == undefined || repositoryId == null) {
        throw "Missing the required parameter 'repositoryId' when calling getContentInFolder";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getContentInFolder";
      }


      var pathParams = {
        'repositoryId': repositoryId,
        'folderId': folderId
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
        '/api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getContentInSite operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific site
     * @param {String} repositoryId repositoryId
     * @param {String} siteId siteId
     */
    this.getContentInSite = function(repositoryId, siteId) {
      var postBody = null;

      // verify the required parameter 'repositoryId' is set
      if (repositoryId == undefined || repositoryId == null) {
        throw "Missing the required parameter 'repositoryId' when calling getContentInSite";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getContentInSite";
      }


      var pathParams = {
        'repositoryId': repositoryId,
        'siteId': siteId
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
        '/api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getRepositories operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco repositories
     * A tenant administrator can configure one or more Alfresco repositories to use when working with content.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.tenantId tenantId
     * @param {Boolean} opts.includeAccounts includeAccounts
     */
    this.getRepositories = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tenantId': opts['tenantId'],
        'includeAccounts': opts['includeAccounts']
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
        '/api/enterprise/profile/accounts/alfresco', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
