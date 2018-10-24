(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/DiscoveryEntry', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/DiscoveryEntry'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.DiscoveryApi = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.DiscoveryEntry, root.AlfrescoContentServicesRestApi.Error);
  }
}(this, function(ApiClient, DiscoveryEntry, Error) {
  'use strict';

  /**
   * Discovery service.
   * @module api/DiscoveryApi
   * @version 0.1.0
   */

  /**
   * Constructs a new DiscoveryApi.
   * @alias module:api/DiscoveryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get repository information
     * **Note:** this endpoint is available in Alfresco 5.2 and newer versions.\n\nRetrieves the capabilities and detailed version information from the repository.\n
     * data is of type: {module:model/DiscoveryEntry}
     */
    this.getRepositoryInformation = function() {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = DiscoveryEntry;

      return this.apiClient.callApi(
        '/discovery', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
