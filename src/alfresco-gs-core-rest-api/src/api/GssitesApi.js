(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RMSiteEntry', '../model/RMSiteBodyCreate', '../model/Error', '../model/RMSiteBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RMSiteEntry'), require('../model/RMSiteBodyCreate'), require('../model/Error'), require('../model/RMSiteBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.GssitesApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RMSiteEntry, root.AlfrescoGovernanceServicesRestApi.RMSiteBodyCreate, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.RMSiteBodyUpdate);
  }
}(this, function(ApiClient, RMSiteEntry, RMSiteBodyCreate, Error, RMSiteBodyUpdate) {
  'use strict';

  /**
   * Gssites service.
   * @module api/GssitesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new GssitesApi.
   * @alias module:api/GssitesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create the Records Management (RM) site
     * \nCreates the RM site with the given details.\n\n**Note:** The default site id is rm and the default site name is Records Management. The id of a site cannot be updated once the site has been created.\n\nFor example, to create an RM site named \&quot;Records Management\&quot; with \&quot;Records Management Description\&quot; as description, the following body could be used:\n```JSON\n{\n  \&quot;title\&quot;: \&quot;Records Management\&quot;,\n  \&quot;description\&quot;: \&quot;Records Management Description\&quot;\n}\n```\n\nThe creator will be added as a member with Site Manager role.\n\nWhen you create the RM site, the **filePlan** structure is also created including special containers, such as containers for transfers, holds and, unfiled records.\n
     * @param {module:model/RMSiteBodyCreate} siteBodyCreate The site details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the RM site should not be added to the user&#39;s site favorites. (default to false)
     * data is of type: {module:model/RMSiteEntry}
     */
    this.createRMSite = function(siteBodyCreate, opts) {
      opts = opts || {};
      var postBody = siteBodyCreate;

      // verify the required parameter 'siteBodyCreate' is set
      if (siteBodyCreate == undefined || siteBodyCreate == null) {
        throw "Missing the required parameter 'siteBodyCreate' when calling createRMSite";
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
     * \nDeletes the RM site.\n
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
     * \nGets information for RM site.\n
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RMSiteEntry}
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
     * \nUpdate the details for the RM site. Site Manager or other (site) admin can update title or description.\n\n**Note**: the id, site visibility, or compliance of the RM site cannot be updated once the site has been created.\n
     * @param {module:model/RMSiteBodyUpdate} siteBodyUpdate The RM site information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RMSiteEntry}
     */
    this.updateRMSite = function(siteBodyUpdate, opts) {
      opts = opts || {};
      var postBody = siteBodyUpdate;

      // verify the required parameter 'siteBodyUpdate' is set
      if (siteBodyUpdate == undefined || siteBodyUpdate == null) {
        throw "Missing the required parameter 'siteBodyUpdate' when calling updateRMSite";
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
