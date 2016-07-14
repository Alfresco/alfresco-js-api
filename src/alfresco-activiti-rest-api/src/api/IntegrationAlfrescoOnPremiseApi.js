(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/ResultListDataRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ResultListDataRepresentation'));
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
     * Callback function to receive the result of the getAllSitesUsingGET1 operation.
     * @callback module:api/IntegrationAlfrescoOnPremiseApi~getAllSitesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco sites
     * Returns ALL Sites
     * @param {String} repositoryId repositoryId
     * @param {module:api/IntegrationAlfrescoOnPremiseApi~getAllSitesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getAllSitesUsingGET1 = function(repositoryId, callback) {
      var postBody = null;

      // verify the required parameter 'repositoryId' is set
      if (repositoryId == undefined || repositoryId == null) {
        throw "Missing the required parameter 'repositoryId' when calling getAllSitesUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentInFolderUsingGET1 operation.
     * @callback module:api/IntegrationAlfrescoOnPremiseApi~getContentInFolderUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific folder
     * @param {String} repositoryId repositoryId
     * @param {String} folderId folderId
     * @param {module:api/IntegrationAlfrescoOnPremiseApi~getContentInFolderUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getContentInFolderUsingGET1 = function(repositoryId, folderId, callback) {
      var postBody = null;

      // verify the required parameter 'repositoryId' is set
      if (repositoryId == undefined || repositoryId == null) {
        throw "Missing the required parameter 'repositoryId' when calling getContentInFolderUsingGET1";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getContentInFolderUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentInSiteUsingGET1 operation.
     * @callback module:api/IntegrationAlfrescoOnPremiseApi~getContentInSiteUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific site
     * @param {String} repositoryId repositoryId
     * @param {String} siteId siteId
     * @param {module:api/IntegrationAlfrescoOnPremiseApi~getContentInSiteUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getContentInSiteUsingGET1 = function(repositoryId, siteId, callback) {
      var postBody = null;

      // verify the required parameter 'repositoryId' is set
      if (repositoryId == undefined || repositoryId == null) {
        throw "Missing the required parameter 'repositoryId' when calling getContentInSiteUsingGET1";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getContentInSiteUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRepositoriesUsingGET operation.
     * @callback module:api/IntegrationAlfrescoOnPremiseApi~getRepositoriesUsingGETCallback
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
     * @param {module:api/IntegrationAlfrescoOnPremiseApi~getRepositoriesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getRepositoriesUsingGET = function(opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
