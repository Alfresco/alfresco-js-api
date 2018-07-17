(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/SiteMemberEntry', '../model/Error', '../model/SiteMemberBody', '../model/SiteBody', '../model/SiteEntry', '../model/SiteContainerEntry', '../model/SiteContainerPaging', '../model/SiteMemberPaging', '../model/SitePaging', '../model/SiteMemberRoleBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/SiteMemberEntry'), require('../model/Error'), require('../model/SiteMemberBody'), require('../model/SiteBody'), require('../model/SiteEntry'), require('../model/SiteContainerEntry'), require('../model/SiteContainerPaging'), require('../model/SiteMemberPaging'), require('../model/SitePaging'), require('../model/SiteMemberRoleBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SitesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMemberEntry, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.SiteMemberBody, root.AlfrescoCoreRestApi.SiteBody, root.AlfrescoCoreRestApi.SiteEntry, root.AlfrescoCoreRestApi.SiteContainerEntry, root.AlfrescoCoreRestApi.SiteContainerPaging, root.AlfrescoCoreRestApi.SiteMemberPaging, root.AlfrescoCoreRestApi.SitePaging, root.AlfrescoCoreRestApi.SiteMemberRoleBody);
  }
}(this, function(ApiClient, SiteMemberEntry, Error, SiteMemberBody, SiteBody, SiteEntry, SiteContainerEntry, SiteContainerPaging, SiteMemberPaging, SitePaging, SiteMemberRoleBody) {
  'use strict';

  /**
   * Sites service.
   * @module api/SitesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SitesApi.
   * @alias module:api/SitesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a person
     * Adds person **personId** as a member of site **siteId**.\n\nYou can set the **role** to one of four types:\n\n* SiteConsumer\n* SiteCollaborator\n* SiteContributor\n* SiteManager\n
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteMemberBody} siteMemberBody The person to add and their role
     * data is of type: {module:model/SiteMemberEntry}
     */
    this.addSiteMember = function(siteId, siteMemberBody) {
      var postBody = siteMemberBody;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling addSiteMember";
      }

      // verify the required parameter 'siteMemberBody' is set
      if (siteMemberBody == undefined || siteMemberBody == null) {
        throw "Missing the required parameter 'siteMemberBody' when calling addSiteMember";
      }


      var pathParams = {
        'siteId': siteId
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
      var returnType = SiteMemberEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/members', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Create a site
     * Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public site called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a site will *not* work within Share.**\n\nThe addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with Site Manager role.\n
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the site should not be added to the user&#39;s site favorites. (default to false)
     * data is of type: {module:model/SiteEntry}
     */
    this.createSite = function(siteBody, opts) {
      opts = opts || {};
      var postBody = siteBody;

      // verify the required parameter 'siteBody' is set
      if (siteBody == undefined || siteBody == null) {
        throw "Missing the required parameter 'siteBody' when calling createSite";
      }


      var pathParams = {
      };
      var queryParams = {
        'skipConfiguration': opts['skipConfiguration'],
        'skipAddToFavorites': opts['skipAddToFavorites']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteEntry;

      return this.apiClient.callApi(
        '/sites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a site
     * Update existing site
     * @param {String} siteId The identifier of a site.
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    this.updateSite = function(siteId, siteBody, opts) {
      opts = opts || {};
      var postBody = siteBody;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling updateSite";
      }

      // verify the required parameter 'siteBody' is set
      if (siteBody == undefined || siteBody == null) {
        throw "Missing the required parameter 'siteBody' when calling updateSite";
      }

      var pathParams = {
        'siteId': siteId,
        'siteBodyUpdate': siteBody
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
      var returnType = SiteEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a site
     * Deletes the site with **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. (default to false)
     */
    this.deleteSite = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling deleteSite";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'permanent': opts['permanent']
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
        '/sites/{siteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a site
     * Returns information for site **siteId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the site **siteId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteEntry}
     */
    this.getSite = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSite";
      }


      var pathParams = {
        'siteId': siteId
      };
      var queryParams = {
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SiteEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a container
     * Returns information on the container **containerId** in site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} containerId The unique identifier of a site container.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteContainerEntry}
     */
    this.getSiteContainer = function(siteId, containerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteContainer";
      }

      // verify the required parameter 'containerId' is set
      if (containerId == undefined || containerId == null) {
        throw "Missing the required parameter 'containerId' when calling getSiteContainer";
      }


      var pathParams = {
        'siteId': siteId,
        'containerId': containerId
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
      var returnType = SiteContainerEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/containers/{containerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get containers
     * Returns a list of containers information for site identified by **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteContainerPaging}
     */
    this.getSiteContainers = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteContainers";
      }


      var pathParams = {
        'siteId': siteId
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
      var returnType = SiteContainerPaging;

      return this.apiClient.callApi(
        '/sites/{siteId}/containers', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a site member
     * Returns site membership information for person **personId** on site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMemberEntry}
     */
    this.getSiteMember = function(siteId, personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteMember";
      }

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getSiteMember";
      }


      var pathParams = {
        'siteId': siteId,
        'personId': personId
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
      var returnType = SiteMemberEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/members/{personId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get members
     * Returns a list of site memberships for site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SiteMemberPaging}
     */
    this.getSiteMembers = function(siteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling getSiteMembers";
      }


      var pathParams = {
        'siteId': siteId
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
      var returnType = SiteMemberPaging;

      return this.apiClient.callApi(
        '/sites/{siteId}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get sites
     * Returns a list of sites in this repository. You can sort the list if sites using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each site:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {string[]} opts.relations Use the relations parameter to include one or more related entities in a single response.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/SitePaging}
     */
    this.getSites = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'relations': this.apiClient.buildCollectionParam(opts['relations'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = SitePaging;

      return this.apiClient.callApi(
        '/sites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a site member
     * Removes person **personId** as a member of site **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     */
    this.removeSiteMember = function(siteId, personId) {
      var postBody = null;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling removeSiteMember";
      }

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeSiteMember";
      }


      var pathParams = {
        'siteId': siteId,
        'personId': personId
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
        '/sites/{siteId}/members/{personId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a site member
     * Update the membership of person **personId** in site **siteId**.\n\nYou can set the **role** to one of four types:\n\n* SiteConsumer\n* SiteCollaborator\n* SiteContributor\n* SiteManager\n
     * @param {String} siteId The identifier of a site.
     * @param {String} personId The identifier of a person.
     * @param {module:model/SiteMemberRoleBody} siteMemberRoleBody The persons new role
     * data is of type: {module:model/SiteMemberEntry}
     */
    this.updateSiteMember = function(siteId, personId, siteMemberRoleBody) {
      var postBody = siteMemberRoleBody;

      // verify the required parameter 'siteId' is set
      if (siteId == undefined || siteId == null) {
        throw "Missing the required parameter 'siteId' when calling updateSiteMember";
      }

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling updateSiteMember";
      }

      // verify the required parameter 'siteMemberRoleBody' is set
      if (siteMemberRoleBody == undefined || siteMemberRoleBody == null) {
        throw "Missing the required parameter 'siteMemberRoleBody' when calling updateSiteMember";
      }


      var pathParams = {
        'siteId': siteId,
        'personId': personId
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
      var returnType = SiteMemberEntry;

      return this.apiClient.callApi(
        '/sites/{siteId}/members/{personId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
