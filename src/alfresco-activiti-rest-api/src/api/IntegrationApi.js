(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/UserAccountCredentialsRepresentation', 'model/ResultListDataRepresentation', 'model/BoxUserAccountCredentialsRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserAccountCredentialsRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/BoxUserAccountCredentialsRepresentation'));
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
     * Callback function to receive the result of the confirmAuthorisationUsingGET operation.
     * @callback module:api/IntegrationApi~confirmAuthorisationUsingGETCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Alfresco Cloud Authorization
     * Returns Alfresco Oauth HTML Page
     * @param {String} code code
     * @param {module:api/IntegrationApi~confirmAuthorisationUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.confirmAuthorisationUsingGET = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling confirmAuthorisationUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the confirmAuthorisationUsingGET1 operation.
     * @callback module:api/IntegrationApi~confirmAuthorisationUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Box Authorization
     * Returns Box Oauth HTML Page
     * @param {String} code code
     * @param {module:api/IntegrationApi~confirmAuthorisationUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.confirmAuthorisationUsingGET1 = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling confirmAuthorisationUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the confirmAuthorisationUsingGET2 operation.
     * @callback module:api/IntegrationApi~confirmAuthorisationUsingGET2Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Drive Authorization
     * Returns Drive Oauth HTML Page
     * @param {String} code code
     * @param {module:api/IntegrationApi~confirmAuthorisationUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.confirmAuthorisationUsingGET2 = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code == undefined || code == null) {
        throw "Missing the required parameter 'code' when calling confirmAuthorisationUsingGET2";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRepositoryAccountUsingPOST operation.
     * @callback module:api/IntegrationApi~createRepositoryAccountUsingPOSTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     * @param {module:api/IntegrationApi~createRepositoryAccountUsingPOSTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createRepositoryAccountUsingPOST = function(userId, credentials, callback) {
      var postBody = credentials;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling createRepositoryAccountUsingPOST";
      }

      // verify the required parameter 'credentials' is set
      if (credentials == undefined || credentials == null) {
        throw "Missing the required parameter 'credentials' when calling createRepositoryAccountUsingPOST";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRepositoryAccountUsingDELETE operation.
     * @callback module:api/IntegrationApi~deleteRepositoryAccountUsingDELETECallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete Box account
     * @param {Integer} userId userId
     * @param {module:api/IntegrationApi~deleteRepositoryAccountUsingDELETECallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRepositoryAccountUsingDELETE = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteRepositoryAccountUsingDELETE";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllNetworksUsingGET operation.
     * @callback module:api/IntegrationApi~getAllNetworksUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco networks
     * @param {module:api/IntegrationApi~getAllNetworksUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getAllNetworksUsingGET = function(callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllSitesUsingGET operation.
     * @callback module:api/IntegrationApi~getAllSitesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco sites
     * Returns ALL Sites
     * @param {String} networkId networkId
     * @param {module:api/IntegrationApi~getAllSitesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getAllSitesUsingGET = function(networkId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getAllSitesUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getAllSitesUsingGET1 operation.
     * @callback module:api/IntegrationApi~getAllSitesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Alfresco sites
     * Returns ALL Sites
     * @param {String} repositoryId repositoryId
     * @param {module:api/IntegrationApi~getAllSitesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getBoxPluginStatusUsingGET operation.
     * @callback module:api/IntegrationApi~getBoxPluginStatusUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {'Boolean'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve if Box Integration is enabled
     * @param {module:api/IntegrationApi~getBoxPluginStatusUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {'Boolean'}
     */
    this.getBoxPluginStatusUsingGET = function(callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentInFolderUsingGET operation.
     * @callback module:api/IntegrationApi~getContentInFolderUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific folder
     * @param {String} networkId networkId
     * @param {String} folderId folderId
     * @param {module:api/IntegrationApi~getContentInFolderUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getContentInFolderUsingGET = function(networkId, folderId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getContentInFolderUsingGET";
      }

      // verify the required parameter 'folderId' is set
      if (folderId == undefined || folderId == null) {
        throw "Missing the required parameter 'folderId' when calling getContentInFolderUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentInFolderUsingGET1 operation.
     * @callback module:api/IntegrationApi~getContentInFolderUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific folder
     * @param {String} repositoryId repositoryId
     * @param {String} folderId folderId
     * @param {module:api/IntegrationApi~getContentInFolderUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getContentInSiteUsingGET operation.
     * @callback module:api/IntegrationApi~getContentInSiteUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific site
     * @param {String} networkId networkId
     * @param {String} siteId siteId
     * @param {module:api/IntegrationApi~getContentInSiteUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getContentInSiteUsingGET = function(networkId, siteId, callback) {
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getContentInSiteUsingGET";
      }

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getContentInSiteUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getContentInSiteUsingGET1 operation.
     * @callback module:api/IntegrationApi~getContentInSiteUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders inside a specific site
     * @param {String} repositoryId repositoryId
     * @param {String} siteId siteId
     * @param {module:api/IntegrationApi~getContentInSiteUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
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
     * Callback function to receive the result of the getFilesUsingGET operation.
     * @callback module:api/IntegrationApi~getFilesUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List file &amp; folders
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {String} opts.parent parent
     * @param {module:api/IntegrationApi~getFilesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getFilesUsingGET = function(opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFilesUsingGET1 operation.
     * @callback module:api/IntegrationApi~getFilesUsingGET1Callback
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
     * @param {module:api/IntegrationApi~getFilesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getFilesUsingGET1 = function(opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRepositoriesUsingGET operation.
     * @callback module:api/IntegrationApi~getRepositoriesUsingGETCallback
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
     * @param {module:api/IntegrationApi~getRepositoriesUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
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

    /**
     * Callback function to receive the result of the getRepositoryAccountUsingGET operation.
     * @callback module:api/IntegrationApi~getRepositoryAccountUsingGETCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BoxUserAccountCredentialsRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Box Account
     * @param {Integer} userId userId
     * @param {module:api/IntegrationApi~getRepositoryAccountUsingGETCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/BoxUserAccountCredentialsRepresentation}
     */
    this.getRepositoryAccountUsingGET = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling getRepositoryAccountUsingGET";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateRepositoryAccountUsingPUT operation.
     * @callback module:api/IntegrationApi~updateRepositoryAccountUsingPUTCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update Box account
     * @param {Integer} userId userId
     * @param {module:model/UserAccountCredentialsRepresentation} credentials credentials
     * @param {module:api/IntegrationApi~updateRepositoryAccountUsingPUTCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.updateRepositoryAccountUsingPUT = function(userId, credentials, callback) {
      var postBody = credentials;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling updateRepositoryAccountUsingPUT";
      }

      // verify the required parameter 'credentials' is set
      if (credentials == undefined || credentials == null) {
        throw "Missing the required parameter 'credentials' when calling updateRepositoryAccountUsingPUT";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
