(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/UserAccountCredentialsRepresentation', '../model/ResultListDataRepresentation', '../model/BoxUserAccountCredentialsRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/UserAccountCredentialsRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/BoxUserAccountCredentialsRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.IntegrationApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.UserAccountCredentialsRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.BoxUserAccountCredentialsRepresentation);
  }
}(this, function(ApiClient, UserAccountCredentialsRepresentation, ResultListDataRepresentation, BoxUserAccountCredentialsRepresentation) {
  'use strict';

  /**
   * Integration service.
   * @module api/IntegrationApi
   * @version 1.4.0
   */

  /**
   * Constructs a new IntegrationApi.
   * @alias module:api/IntegrationApi
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
     * Function to receive the result of the confirmAuthorisation operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Box Authorization
     * Returns Box Oauth HTML Page
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
        '/api/enterprise/integration/box/confirm-auth-request', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the confirmAuthorisation operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Drive Authorization
     * Returns Drive Oauth HTML Page
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
        '/api/enterprise/integration/google-drive/confirm-auth-request', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the createRepositoryAccount operation.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     */
    this.createRepositoryAccount = function(userId, credentials) {
      var postBody = credentials;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createRepositoryAccount";
      }

      // verify the required parameter 'credentials' is set
      if (credentials == undefined || credentials == null) {
        throw "Missing the required parameter 'credentials' when calling createRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
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
        '/api/enterprise/integration/box/{userId}/account', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the deleteRepositoryAccount operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Box account
     * @param {Integer} userId userId
     */
    this.deleteRepositoryAccount = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
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
        '/api/enterprise/integration/box/{userId}/account', 'DELETE',
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
     * Function to receive the result of the getBoxPluginStatus operation.
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve if Box Integration is enabled
     */
    this.getBoxPluginStatus = function() {
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
      var returnType = 'Boolean';

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/status', 'GET',
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
     * Function to receive the result of the getFiles operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.parent parent
     */
    this.getFiles = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'parent': opts['parent']
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
        '/api/enterprise/integration/box/files', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the getFiles operation.
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.parent parent
     * @param {Boolean} opts.currentFolderOnly currentFolderOnly
     */
    this.getFiles = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filter': opts['filter'],
        'parent': opts['parent'],
        'currentFolderOnly': opts['currentFolderOnly']
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
        '/api/enterprise/integration/google-drive/files', 'GET',
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

    /**
     * Function to receive the result of the getRepositoryAccount operation.
     * @param {String} error Error message, if any.
     * @param {module:model/BoxUserAccountCredentialsRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Box Account
     * @param {Integer} userId userId
     */
    this.getRepositoryAccount = function(userId) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
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
      var returnType = BoxUserAccountCredentialsRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/integration/box/{userId}/account', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Function to receive the result of the updateRepositoryAccount operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     */
    this.updateRepositoryAccount = function(userId, credentials) {
      var postBody = credentials;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateRepositoryAccount";
      }

      // verify the required parameter 'credentials' is set
      if (credentials == undefined || credentials == null) {
        throw "Missing the required parameter 'credentials' when calling updateRepositoryAccount";
      }


      var pathParams = {
        'userId': userId
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
        '/api/enterprise/integration/box/{userId}/account', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
