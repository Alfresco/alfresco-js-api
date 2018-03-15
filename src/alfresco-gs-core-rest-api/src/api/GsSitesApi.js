
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/Error', '../model/RMSiteBodyCreate', '../model/RMSiteBodyUpdate', '../model/RMSiteEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/Error'), require('../model/RMSiteBodyCreate'), require('../model/RMSiteBodyUpdate'), require('../model/RMSiteEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.GsSitesApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RMSiteBodyCreate, root.AlfrescoGovernanceServicesRestApi.RMSiteBodyUpdate, root.AlfrescoGovernanceServicesRestApi.RMSiteEntry);
  }
}(this, function(ApiClient, Error, RMSiteBodyCreate, RMSiteBodyUpdate, RMSiteEntry) {
  'use strict';

  /**
   * Gssites service.
   * @module api/GsSitesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new GsSitesApi.
   * @alias :api/GsSitesApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create the Records Management (RM) site
     *  Creates the RM site with the given details.  **Note:** The default site id is rm and the default site name is Records Management. The id of a site cannot be updated once the site has been created.  For example, to create an RM site named \&quot;Records Management\&quot; with \&quot;Records Management Description\&quot; as description, the following body could be used: &#x60;&#x60;&#x60;JSON {   \&quot;title\&quot;: \&quot;Records Management\&quot;,   \&quot;description\&quot;: \&quot;Records Management Description\&quot; } &#x60;&#x60;&#x60;  The creator will be added as a member with Site Manager role.  When you create the RM site, the **filePlan** structure is also created including special containers, such as containers for transfers, holds and, unfiled records.
     * @param {RMSiteBodyCreate} siteBodyCreate The site details
     * @param {Object} opts Optional parameters
     * @param {boolean} opts.skipAddToFavorites Flag to indicate whether the RM site should not be added to the user&#39;s site favorites. (default to false)
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRMSiteEntry} and HTTP response
     */
    this.createRMSite = function(siteBodyCreate, opts) {
      opts = opts || {};
      var postBody = siteBodyCreate;

      // verify the required parameter 'siteBodyCreate' is set
      if (siteBodyCreate === undefined || siteBodyCreate === null) {
        throw new Error("Missing the required parameter 'siteBodyCreate' when calling createRMSite");
      }


      var pathParams = {
      };
      var queryParams = {
        'skipAddToFavorites': opts['skipAddToFavorites']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = RMSiteEntry;

      return this.apiClient.callApi(
        '/gs-sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Delete the Records Management (RM) site
     *  Deletes the RM site.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteRMSite = function() {
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
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/gs-sites/rm', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Get the Records Management (RM) site
     *  Gets information for RM site.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRMSiteEntry} and HTTP response
     */
    this.getRMSite = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = RMSiteEntry;

      return this.apiClient.callApi(
        '/gs-sites/rm', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update the Records Management (RM) site
     *  Update the details for the RM site. Site Manager or other (site) admin can update title or description.  **Note**: the id, site visibility, or compliance of the RM site cannot be updated once the site has been created.
     * @param {RMSiteBodyUpdate} siteBodyUpdate The RM site information to update.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleRMSiteEntry} and HTTP response
     */
    this.updateRMSite = function(siteBodyUpdate, opts) {
      opts = opts || {};
      var postBody = siteBodyUpdate;

      // verify the required parameter 'siteBodyUpdate' is set
      if (siteBodyUpdate === undefined || siteBodyUpdate === null) {
        throw new Error("Missing the required parameter 'siteBodyUpdate' when calling updateRMSite");
      }


      var pathParams = {
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
      var returnType = RMSiteEntry;

      return this.apiClient.callApi(
        '/gs-sites/rm', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  };

  return exports;
}));
