(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/PersonNetworkEntry', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/PersonNetworkEntry'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NetworksApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PersonNetworkEntry, root.AlfrescoCoreRestApi.Error);
  }
}(this, function(ApiClient, PersonNetworkEntry, Error) {
  'use strict';

  /**
   * Networks service.
   * @module api/NetworksApi
   * @version 1
   */

  /**
   * Constructs a new NetworksApi. 
   * @alias module:api/NetworksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getNetwork operation.
     * @callback module:api/NetworksApi~getNetworkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/PersonNetworkEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a network
     * Returns information for a network **networkId**.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/NetworksApi~getNetworkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/PersonNetworkEntry}
     */
    this.getNetwork = function(networkId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw "Missing the required parameter 'networkId' when calling getNetwork";
      }


      var pathParams = {
        'networkId': networkId
      };
      var queryParams = {
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonNetworkEntry;

      return this.apiClient.callApi(
        '/networks/{networkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
