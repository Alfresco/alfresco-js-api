(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/AssocTargetBody', '../model/NodeEntry', '../model/NodeBody1', '../model/AssocChildBody', '../model/NodeSharedLinkEntry', '../model/SharedLinkBody', '../model/CopyBody', '../model/RenditionBody', '../model/SiteBody', '../model/SiteEntry', '../model/EmailSharedLinkBody', '../model/NodeSharedLinkPaging', '../model/DeletedNodeEntry', '../model/DeletedNodesPaging', '../model/NodePaging', '../model/RenditionEntry', '../model/RenditionPaging', '../model/NodeAssocPaging', '../model/NodeChildAssocPaging', '../model/MoveBody', '../model/NodeBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/AssocTargetBody'), require('../model/NodeEntry'), require('../model/NodeBody1'), require('../model/AssocChildBody'), require('../model/NodeSharedLinkEntry'), require('../model/SharedLinkBody'), require('../model/CopyBody'), require('../model/RenditionBody'), require('../model/SiteBody'), require('../model/SiteEntry'), require('../model/EmailSharedLinkBody'), require('../model/NodeSharedLinkPaging'), require('../model/DeletedNodeEntry'), require('../model/DeletedNodesPaging'), require('../model/NodePaging'), require('../model/RenditionEntry'), require('../model/RenditionPaging'), require('../model/NodeAssocPaging'), require('../model/NodeChildAssocPaging'), require('../model/MoveBody'), require('../model/NodeBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ChangesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.AssocTargetBody, root.AlfrescoCoreRestApi.NodeEntry, root.AlfrescoCoreRestApi.NodeBody1, root.AlfrescoCoreRestApi.AssocChildBody, root.AlfrescoCoreRestApi.NodeSharedLinkEntry, root.AlfrescoCoreRestApi.SharedLinkBody, root.AlfrescoCoreRestApi.CopyBody, root.AlfrescoCoreRestApi.RenditionBody, root.AlfrescoCoreRestApi.SiteBody, root.AlfrescoCoreRestApi.SiteEntry, root.AlfrescoCoreRestApi.EmailSharedLinkBody, root.AlfrescoCoreRestApi.NodeSharedLinkPaging, root.AlfrescoCoreRestApi.DeletedNodeEntry, root.AlfrescoCoreRestApi.DeletedNodesPaging, root.AlfrescoCoreRestApi.NodePaging, root.AlfrescoCoreRestApi.RenditionEntry, root.AlfrescoCoreRestApi.RenditionPaging, root.AlfrescoCoreRestApi.NodeAssocPaging, root.AlfrescoCoreRestApi.NodeChildAssocPaging, root.AlfrescoCoreRestApi.MoveBody, root.AlfrescoCoreRestApi.NodeBody);
  }
}(this, function(ApiClient, Error, AssocTargetBody, NodeEntry, NodeBody1, AssocChildBody, NodeSharedLinkEntry, SharedLinkBody, CopyBody, RenditionBody, SiteBody, SiteEntry, EmailSharedLinkBody, NodeSharedLinkPaging, DeletedNodeEntry, DeletedNodesPaging, NodePaging, RenditionEntry, RenditionPaging, NodeAssocPaging, NodeChildAssocPaging, MoveBody, NodeBody) {
  'use strict';

  /**
   * Changes service.
   * @module api/ChangesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ChangesApi. 
   * @alias module:api/ChangesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addAssoc operation.
     * @callback module:api/ChangesApi~addAssocCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add node association
     * Add association, with given association type, between source and target node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {module:model/AssocTargetBody} assocTargetBody The target node id and assoc type.
     * @param {module:api/ChangesApi~addAssocCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addAssoc = function(sourceId, assocTargetBody, callback) {
      var postBody = assocTargetBody;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling addAssoc";
      }

      // verify the required parameter 'assocTargetBody' is set
      if (assocTargetBody == undefined || assocTargetBody == null) {
        throw "Missing the required parameter 'assocTargetBody' when calling addAssoc";
      }


      var pathParams = {
        'sourceId': sourceId
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
        '/nodes/{sourceId}/targets', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addNode operation.
     * @callback module:api/ChangesApi~addNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a node
     * Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody1} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~addNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeEntry}
     */
    this.addNode = function(nodeId, nodeBody, opts, callback) {
      opts = opts || {};
      var postBody = nodeBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addNode";
      }

      // verify the required parameter 'nodeBody' is set
      if (nodeBody == undefined || nodeBody == null) {
        throw "Missing the required parameter 'nodeBody' when calling addNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'autoRename': opts['autoRename'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json', 'multipart/form-data'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSecondaryChildAssoc operation.
     * @callback module:api/ChangesApi~addSecondaryChildAssocCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add secondary child
     * Add secondary child association, with given association type, between parent and child node.\n
     * @param {String} parentId The identifier of a node.
     * @param {module:model/AssocChildBody} assocChildBody The child node id and assoc type.
     * @param {module:api/ChangesApi~addSecondaryChildAssocCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addSecondaryChildAssoc = function(parentId, assocChildBody, callback) {
      var postBody = assocChildBody;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling addSecondaryChildAssoc";
      }

      // verify the required parameter 'assocChildBody' is set
      if (assocChildBody == undefined || assocChildBody == null) {
        throw "Missing the required parameter 'assocChildBody' when calling addSecondaryChildAssoc";
      }


      var pathParams = {
        'parentId': parentId
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
        '/nodes/{parentId}/secondary-children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addSharedLink operation.
     * @callback module:api/ChangesApi~addSharedLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeSharedLinkEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a shared link to a file
     * Create shared link to specfied file identified by **nodeId** in request body.
     * @param {module:model/SharedLinkBody} sharedLinkBody The nodeId to create a shared link for.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~addSharedLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.addSharedLink = function(sharedLinkBody, opts, callback) {
      opts = opts || {};
      var postBody = sharedLinkBody;

      // verify the required parameter 'sharedLinkBody' is set
      if (sharedLinkBody == undefined || sharedLinkBody == null) {
        throw "Missing the required parameter 'sharedLinkBody' when calling addSharedLink";
      }


      var pathParams = {
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkEntry;

      return this.apiClient.callApi(
        '/shared-links', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the copyNode operation.
     * @callback module:api/ChangesApi~copyNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Copy a node
     * Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.\n\nThe new node has the same name as the source node unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also copied.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/CopyBody} copyBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~copyNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeEntry}
     */
    this.copyNode = function(nodeId, copyBody, opts, callback) {
      opts = opts || {};
      var postBody = copyBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling copyNode";
      }

      // verify the required parameter 'copyBody' is set
      if (copyBody == undefined || copyBody == null) {
        throw "Missing the required parameter 'copyBody' when calling copyNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/copy', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createRendition operation.
     * @callback module:api/ChangesApi~createRenditionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create rendition
     * Async request to create a rendition for file with identifier\n**nodeId**. The rendition is specified by name \&quot;id\&quot; in the request body:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;id\&quot;:\&quot;doclib\&quot;\n}\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/RenditionBody} renditionBody The rendition \&quot;id\&quot;.
     * @param {module:api/ChangesApi~createRenditionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createRendition = function(nodeId, renditionBody, callback) {
      var postBody = renditionBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling createRendition";
      }

      // verify the required parameter 'renditionBody' is set
      if (renditionBody == undefined || renditionBody == null) {
        throw "Missing the required parameter 'renditionBody' when calling createRendition";
      }


      var pathParams = {
        'nodeId': nodeId
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
        '/nodes/{nodeId}/renditions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createSite operation.
     * @callback module:api/ChangesApi~createSiteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SiteEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a site
     * Creates a default site with the given details.  Unless explicitly specified, the site id will be generated from the site title. The site id must be unique and only contain alphanumeric and/or dash\ncharacters.\n\nFor example, to create a public site called \&quot;Marketing\&quot; the following body could be used:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;title\&quot;: \&quot;Marketing\&quot;,\n  \&quot;visibility\&quot;: \&quot;PUBLIC\&quot;\n}\n&#x60;&#x60;&#x60;\n\nThe creation of the (surf) configuration files required by Share can be skipped via the **skipConfiguration** query parameter.\n\n**Please note: if skipped then such a site will *not* work within Share.**\n\nThe addition of the site to the user&#39;s site favorites can be skipped via the **skipAddToFavorites** query parameter.\n\nThe creator will be added as a member with Site Manager role.\n
     * @param {module:model/SiteBody} siteBody The site details
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.skipConfiguration Flag to indicate whether the Share-specific (surf) configuration files for the site should not be created. (default to false)
     * @param {Boolean} opts.skipAddToFavorites Flag to indicate whether the site should not be added to the user&#39;s site favorites. (default to false)
     * @param {module:api/ChangesApi~createSiteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/SiteEntry}
     */
    this.createSite = function(siteBody, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteNode operation.
     * @callback module:api/ChangesApi~deleteNodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a node
     * Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n (default to false)
     * @param {module:api/ChangesApi~deleteNodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteNode = function(nodeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling deleteNode";
      }


      var pathParams = {
        'nodeId': nodeId
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
        '/nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSharedLink operation.
     * @callback module:api/ChangesApi~deleteSharedLinkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes a shared link
     * Deletes the shared link with identifier **sharedId**.
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:api/ChangesApi~deleteSharedLinkCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSharedLink = function(sharedId, callback) {
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling deleteSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
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
        '/shared-links/{sharedId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteSite operation.
     * @callback module:api/ChangesApi~deleteSiteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a site
     * Deletes the site with **siteId**.
     * @param {String} siteId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent Flag to indicate whether the site should be permanently deleted i.e. bypass the trashcan. (default to false)
     * @param {module:api/ChangesApi~deleteSiteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteSite = function(siteId, opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the emailSharedLink operation.
     * @callback module:api/ChangesApi~emailSharedLinkCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Email shared link
     * Sends email with app-specific url including identifier **sharedId**.\n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:model/EmailSharedLinkBody} emailSharedLinkBody The shared link email to send.
     * @param {module:api/ChangesApi~emailSharedLinkCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.emailSharedLink = function(sharedId, emailSharedLinkBody, callback) {
      var postBody = emailSharedLinkBody;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling emailSharedLink";
      }

      // verify the required parameter 'emailSharedLinkBody' is set
      if (emailSharedLinkBody == undefined || emailSharedLinkBody == null) {
        throw "Missing the required parameter 'emailSharedLinkBody' when calling emailSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
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
        '/shared-links/{sharedId}/email', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the findSharedLinks operation.
     * @callback module:api/ChangesApi~findSharedLinksCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeSharedLinkPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Find shared links
     * Find (search for) links that current user has read permission on source node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;)
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~findSharedLinksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeSharedLinkPaging}
     */
    this.findSharedLinks = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkPaging;

      return this.apiClient.callApi(
        '/shared-links', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeletedNode operation.
     * @callback module:api/ChangesApi~getDeletedNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletedNodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a deleted node
     * Returns a specific deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {module:api/ChangesApi~getDeletedNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DeletedNodeEntry}
     */
    this.getDeletedNode = function(nodeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getDeletedNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getDeletedNodes operation.
     * @callback module:api/ChangesApi~getDeletedNodesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/DeletedNodesPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get deleted nodes
     * Returns a list of deleted nodes for the current user.\nIf the current user is an administrator deleted nodes\nfor all users will be returned.\nThe list of deleted nodes will be ordered with the most recently deleted node at the top of the list.\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * @param {module:api/ChangesApi~getDeletedNodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/DeletedNodesPaging}
     */
    this.getDeletedNodes = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeletedNodesPaging;

      return this.apiClient.callApi(
        '/deleted-nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getFileContent operation.
     * @callback module:api/ChangesApi~getFileContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file content
     * Returns the file content of the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     * @param {module:api/ChangesApi~getFileContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getFileContent = function(nodeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getFileContent";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNode operation.
     * @callback module:api/ChangesApi~getNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a node
     * Get information for the node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {String} opts.relativePath If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~getNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeEntry}
     */
    this.getNode = function(nodeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getNodeChildren operation.
     * @callback module:api/ChangesApi~getNodeChildrenCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodePaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get node children
     * Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * @param {String} opts.relativePath Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
     * @param {Boolean} opts.includeSource Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;)
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~getNodeChildrenCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodePaging}
     */
    this.getNodeChildren = function(nodeId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNodeChildren";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'orderBy': opts['orderBy'],
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'relativePath': opts['relativePath'],
        'includeSource': opts['includeSource'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodePaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRendition operation.
     * @callback module:api/ChangesApi~getRenditionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenditionEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rendition information
     * Returns the rendition information for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {module:api/ChangesApi~getRenditionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenditionEntry}
     */
    this.getRendition = function(nodeId, renditionId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRendition";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getRendition";
      }


      var pathParams = {
        'nodeId': nodeId,
        'renditionId': renditionId
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
      var returnType = RenditionEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions/{renditionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRenditionContent operation.
     * @callback module:api/ChangesApi~getRenditionContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get rendition content
     * Returns the rendition content for file node with identifier **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     * @param {module:api/ChangesApi~getRenditionContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getRenditionContent = function(nodeId, renditionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRenditionContent";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getRenditionContent";
      }


      var pathParams = {
        'nodeId': nodeId,
        'renditionId': renditionId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions/{renditionId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRenditions operation.
     * @callback module:api/ChangesApi~getRenditionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenditionPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List information for renditions
     * Returns the rendition information for the file node with identifier **nodeId**.\nThis will return rendition information, including the rendition id, for each rendition. The\u00A0rendition status is CREATED (ie. available\u00A0to view/download) or NOT_CREATED (ie. rendition can be requested).
     * @param {String} nodeId The identifier of a node.
     * @param {module:api/ChangesApi~getRenditionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenditionPaging}
     */
    this.getRenditions = function(nodeId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRenditions";
      }


      var pathParams = {
        'nodeId': nodeId
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
      var returnType = RenditionPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/renditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSharedLink operation.
     * @callback module:api/ChangesApi~getSharedLinkCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeSharedLinkEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a shared link
     * Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~getSharedLinkCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.getSharedLink = function(sharedId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLink";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeSharedLinkEntry;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSharedLinkContent operation.
     * @callback module:api/ChangesApi~getSharedLinkContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file content
     * Returns the content of the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     * @param {module:api/ChangesApi~getSharedLinkContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getSharedLinkContent = function(sharedId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkContent";
      }


      var pathParams = {
        'sharedId': sharedId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSharedLinkRenditionContent operation.
     * @callback module:api/ChangesApi~getSharedLinkRenditionContentCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get shared link rendition content
     * Returns the rendition content for file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {String} renditionId The name of a thumbnail rendition, for example *doclib*, or *pdf*.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     * @param {module:api/ChangesApi~getSharedLinkRenditionContentCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getSharedLinkRenditionContent = function(sharedId, renditionId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditionContent";
      }

      // verify the required parameter 'renditionId' is set
      if (renditionId == undefined || renditionId == null) {
        throw "Missing the required parameter 'renditionId' when calling getSharedLinkRenditionContent";
      }


      var pathParams = {
        'sharedId': sharedId,
        'renditionId': renditionId
      };
      var queryParams = {
        'attachment': opts['attachment']
      };
      var headerParams = {
        'If-Modified-Since': opts['ifModifiedSince']
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/renditions/{renditionId}/content', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getSharedLinkRenditions operation.
     * @callback module:api/ChangesApi~getSharedLinkRenditionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/RenditionPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List information for created renditions
     * Returns the rendition information for the file with shared link identifier **sharedId**.\n\nThis will only return rendition information, including the rendition id, for each rendition\nwhere the rendition status is CREATED (ie. available\u00A0to view/download).\n\n**Note:** No authentication is required to call this endpoint.      \n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:api/ChangesApi~getSharedLinkRenditionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/RenditionPaging}
     */
    this.getSharedLinkRenditions = function(sharedId, callback) {
      var postBody = null;

      // verify the required parameter 'sharedId' is set
      if (sharedId == undefined || sharedId == null) {
        throw "Missing the required parameter 'sharedId' when calling getSharedLinkRenditions";
      }


      var pathParams = {
        'sharedId': sharedId
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
      var returnType = RenditionPaging;

      return this.apiClient.callApi(
        '/shared-links/{sharedId}/renditions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listParents operation.
     * @callback module:api/ChangesApi~listParentsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeAssocPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List parents
     * Returns a list of parent nodes that point to (ie. are associated with) the current child node. \n\nThis inclues both the primary parent and also secondary parents, if any.\n
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~listParentsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listParents = function(childId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'childId' is set
      if (childId == undefined || childId == null) {
        throw "Missing the required parameter 'childId' when calling listParents";
      }


      var pathParams = {
        'childId': childId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{childId}/parents', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSecondaryChildAssociations operation.
     * @callback module:api/ChangesApi~listSecondaryChildAssociationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeChildAssocPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List secondary children
     * Returns a list of secondary child nodes that are associated with the current parent node, via a secondary child association.\n
     * @param {String} parentId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the returned results to only those of the given association type
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~listSecondaryChildAssociationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeChildAssocPaging}
     */
    this.listSecondaryChildAssociations = function(parentId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling listSecondaryChildAssociations";
      }


      var pathParams = {
        'parentId': parentId
      };
      var queryParams = {
        'assocType': opts['assocType'],
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeChildAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{parentId}/secondary-children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listSourceNodeAssociations operation.
     * @callback module:api/ChangesApi~listSourceNodeAssociationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeAssocPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List node associations
     * Returns a list of source nodes that point to (ie. are associated with) the current target node.\n
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~listSourceNodeAssociationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listSourceNodeAssociations = function(targetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'targetId' is set
      if (targetId == undefined || targetId == null) {
        throw "Missing the required parameter 'targetId' when calling listSourceNodeAssociations";
      }


      var pathParams = {
        'targetId': targetId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{targetId}/sources', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listTargetAssociations operation.
     * @callback module:api/ChangesApi~listTargetAssociationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeAssocPaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List node associations
     * Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~listTargetAssociationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listTargetAssociations = function(sourceId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling listTargetAssociations";
      }


      var pathParams = {
        'sourceId': sourceId
      };
      var queryParams = {
        'where': opts['where'],
        'include': opts['include'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeAssocPaging;

      return this.apiClient.callApi(
        '/nodes/{sourceId}/targets', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the liveSearchNodes operation.
     * @callback module:api/ChangesApi~liveSearchNodesCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodePaging} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Live search for nodes
     * Returns a list of nodes that match the given search criteria.\n\nThe search term is used to look for nodes that match against name, title, description, full text content and tags.\n\nThe search term\n- must contain a minimum of 3 alphanumeric characters\n- allows \&quot;quoted term\&quot;\n- can optionally use &#39;*&#39; for wildcard matching\n\nBy default, file and folder types will be searched unless a specific type is provided as a query parameter.\n\nBy default, the search will be across the repository unless a specific root node id is provided to start the search from.\n
     * @param {String} term The term to search for.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.rootNodeId The id of the node to start the search from.\n\nSupports the aliases -my-, -root- and -shared-.\n
     * @param {String} opts.nodeType Restrict the returned results to only those of the given node type and it&#39;s sub-types
     * @param {String} opts.include Return additional info, eg. aspectNames, properties, path, isLink
     * @param {String} opts.orderBy The list of results can be ordered by the following:\n* name\n* modifiedAt\n* createdAt\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~liveSearchNodesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodePaging}
     */
    this.liveSearchNodes = function(term, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'term' is set
      if (term == undefined || term == null) {
        throw "Missing the required parameter 'term' when calling liveSearchNodes";
      }


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'term': term,
        'rootNodeId': opts['rootNodeId'],
        'nodeType': opts['nodeType'],
        'include': opts['include'],
        'orderBy': opts['orderBy'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodePaging;

      return this.apiClient.callApi(
        '/queries/live-search-nodes', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the moveNode operation.
     * @callback module:api/ChangesApi~moveNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Move a node
     * Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n\nThe move will effectively change the primary parent\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/MoveBody} moveBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~moveNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeEntry}
     */
    this.moveNode = function(nodeId, moveBody, opts, callback) {
      opts = opts || {};
      var postBody = moveBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling moveNode";
      }

      // verify the required parameter 'moveBody' is set
      if (moveBody == undefined || moveBody == null) {
        throw "Missing the required parameter 'moveBody' when calling moveNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/move', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the purgeDeletedNode operation.
     * @callback module:api/ChangesApi~purgeDeletedNodeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Purge a deleted node
     * Permanently removes the deleted node identified by **nodeId**.\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:api/ChangesApi~purgeDeletedNodeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.purgeDeletedNode = function(nodeId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling purgeDeletedNode";
      }


      var pathParams = {
        'nodeId': nodeId
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
        '/deleted-nodes/{nodeId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeAssoc operation.
     * @callback module:api/ChangesApi~removeAssocCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove node association(s)
     * Remove association(s) between source and target node for given association type. \n\nIf association type is not specified then all associations between source and target are removed.\n
     * @param {String} sourceId The identifier of a node.
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     * @param {module:api/ChangesApi~removeAssocCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeAssoc = function(sourceId, targetId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'sourceId' is set
      if (sourceId == undefined || sourceId == null) {
        throw "Missing the required parameter 'sourceId' when calling removeAssoc";
      }

      // verify the required parameter 'targetId' is set
      if (targetId == undefined || targetId == null) {
        throw "Missing the required parameter 'targetId' when calling removeAssoc";
      }


      var pathParams = {
        'sourceId': sourceId,
        'targetId': targetId
      };
      var queryParams = {
        'assocType': opts['assocType']
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
        '/nodes/{sourceId}/targets/{targetId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the removeSecondaryChildAssoc operation.
     * @callback module:api/ChangesApi~removeSecondaryChildAssocCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove secondary child (or children)
     * Remove secondary child association(s) between parent and child node for given association type. \n\nIf association type is not specified then all secondary child associations between parent and child are removed.\n
     * @param {String} parentId The identifier of a node.
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     * @param {module:api/ChangesApi~removeSecondaryChildAssocCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.removeSecondaryChildAssoc = function(parentId, childId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'parentId' is set
      if (parentId == undefined || parentId == null) {
        throw "Missing the required parameter 'parentId' when calling removeSecondaryChildAssoc";
      }

      // verify the required parameter 'childId' is set
      if (childId == undefined || childId == null) {
        throw "Missing the required parameter 'childId' when calling removeSecondaryChildAssoc";
      }


      var pathParams = {
        'parentId': parentId,
        'childId': childId
      };
      var queryParams = {
        'assocType': opts['assocType']
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
        '/nodes/{parentId}/secondary-children/{childId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the restoreNode operation.
     * @callback module:api/ChangesApi~restoreNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restore a deleted node
     * Attempts to restore the deleted node identified by **nodeId** to its original location.\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:api/ChangesApi~restoreNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeEntry}
     */
    this.restoreNode = function(nodeId, callback) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling restoreNode";
      }


      var pathParams = {
        'nodeId': nodeId
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
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/deleted-nodes/{nodeId}/restore', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateFileContent operation.
     * @callback module:api/ChangesApi~updateFileContentCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update file content
     * Updates the content of the node with identifier **nodeId**.\n\nThe request body for this endpoint can be any text or binary stream. The Content-Type header should be set\ncorrectly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.\n\nThe **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,\na new minor version is created by default.\n\n**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.\nThis is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for\ntooling to accept an arbitary file.\n
     * @param {String} nodeId The identifier of a node.
     * @param {String} contentBody The binary content
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.majorVersion If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n (default to false)
     * @param {String} opts.comment Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~updateFileContentCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeEntry}
     */
    this.updateFileContent = function(nodeId, contentBody, opts, callback) {
      opts = opts || {};
      var postBody = contentBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateFileContent";
      }

      // verify the required parameter 'contentBody' is set
      if (contentBody == undefined || contentBody == null) {
        throw "Missing the required parameter 'contentBody' when calling updateFileContent";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'majorVersion': opts['majorVersion'],
        'comment': opts['comment'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/content', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateNode operation.
     * @callback module:api/ChangesApi~updateNodeCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NodeEntry} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a node
     * Updates the node with identifier **nodeId**. For example, you can rename a file or folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;,\n}\n&#x60;&#x60;&#x60;\nYou can also set or update one or more properties:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\n**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody} nodeBody The node information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * @param {module:api/ChangesApi~updateNodeCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/NodeEntry}
     */
    this.updateNode = function(nodeId, nodeBody, opts, callback) {
      opts = opts || {};
      var postBody = nodeBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateNode";
      }

      // verify the required parameter 'nodeBody' is set
      if (nodeBody == undefined || nodeBody == null) {
        throw "Missing the required parameter 'nodeBody' when calling updateNode";
      }


      var pathParams = {
        'nodeId': nodeId
      };
      var queryParams = {
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NodeEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
