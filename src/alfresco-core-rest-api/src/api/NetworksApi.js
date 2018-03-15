
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/PersonNetworkEntry', '../model/PersonNetworkPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/PersonNetworkEntry'), require('../model/PersonNetworkPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NetworksApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.PersonNetworkEntry, root.AlfrescoCoreRestApi.PersonNetworkPaging);
  }
}(this, function(ApiClient, Error, PersonNetworkEntry, PersonNetworkPaging) {
  'use strict';

  /**
   * Networks service.
   * @module api/NetworksApi
   * @version 0.1.0
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
     * Get a network
     * Returns information for a network **networkId**.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/PersonNetworkEntry}
     */
    this.getNetwork = function(networkId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }



    /**
     * Get network information
     * Gets network information on a single network specified by **networkId** for **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.
     * @param {String} personId The identifier of a person.
     * @param {String} networkId The identifier of a network.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonNetworkEntry}
     */
    this.getNetworkForPerson = function(personId, networkId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw new Error("Missing the required parameter 'personId' when calling getNetworkForPerson");
      }

      // verify the required parameter 'networkId' is set
      if (networkId == undefined || networkId == null) {
        throw new Error("Missing the required parameter 'networkId' when calling getNetworkForPerson");
      }


      var pathParams = {
        'personId': personId,
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
        '/people/{personId}/networks/{networkId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List network membership
     * Gets a list of network memberships for person **personId**.  You can use the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to specify the currently authenticated user.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/PersonNetworkPaging}
     */
    this.listNetworksForPerson = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw new Error("Missing the required parameter 'personId' when calling listNetworksForPerson");
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = PersonNetworkPaging;

      return this.apiClient.callApi(
        '/people/{personId}/networks', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
