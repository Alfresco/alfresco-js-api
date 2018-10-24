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
    root.ActivitiPublicRestApi.IntegrationAlfrescoCloudApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ResultListDataRepresentation);
  }
}(this, function(ApiClient, ResultListDataRepresentation) {
  'use strict';

  /**
   * IntegrationAlfrescoCloud service.
   * @module api/IntegrationAlfrescoCloudApi
   * @version 1.4.0
   */

  /**
   * Constructs a new IntegrationAlfrescoCloudApi.
   * @alias module:api/IntegrationAlfrescoCloudApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the confirmAuthorisation operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alfresco Cloud Authorization
     * Returns Alfresco Oauth HTML Page
     * @param {String} code code
     */
    this.confirmAuthorisation = function(code) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling confirmAuthorisation";
      }


      var pathParams = {
      };
      var queryParams = {
        'code': code
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['text/html', 'application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/integration/alfresco-cloud/confirm-auth-request', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getAllNetworks operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco networks
     */
    this.getAllNetworks = function() {
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
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/integration/alfresco-cloud/networks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getAllSites operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco sites
     * Returns ALL Sites
     * @param {String} networkId networkId
     */
    this.getAllSites = function(networkId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getAllSites";
      }


      var pathParams = {
        'networkId': networkId
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
        '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites', 'GET',
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
     * @param {String} networkId networkId
     * @param {String} folderId folderId
     */
    this.getContentInFolder = function(networkId, folderId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getContentInFolder";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getContentInFolder";
      }


      var pathParams = {
        'networkId': networkId,
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
        '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content', 'GET',
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
     * @param {String} networkId networkId
     * @param {String} siteId siteId
     */
    this.getContentInSite = function(networkId, siteId) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getContentInSite";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getContentInSite";
      }


      var pathParams = {
        'networkId': networkId,
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
        '/api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
