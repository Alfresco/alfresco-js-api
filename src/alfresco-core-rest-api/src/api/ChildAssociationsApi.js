(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/NodeEntry', '../model/NodeBody', '../model/Error', '../model/AssocChildBody', '../model/NodePaging', '../model/NodeAssocPaging', '../model/NodeChildAssocPaging', '../model/MoveBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/NodeEntry'), require('../model/NodeBody'), require('../model/Error'), require('../model/AssocChildBody'), require('../model/NodePaging'), require('../model/NodeAssocPaging'), require('../model/NodeChildAssocPaging'), require('../model/MoveBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ChildAssociationsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeEntry, root.AlfrescoCoreRestApi.NodeBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.AssocChildBody, root.AlfrescoCoreRestApi.NodePaging, root.AlfrescoCoreRestApi.NodeAssocPaging, root.AlfrescoCoreRestApi.NodeChildAssocPaging, root.AlfrescoCoreRestApi.MoveBody);
  }
}(this, function(ApiClient, NodeEntry, NodeBody, Error, AssocChildBody, NodePaging, NodeAssocPaging, NodeChildAssocPaging, MoveBody) {
  'use strict';

  /**
   * ChildAssociations service.
   * @module api/ChildAssociationsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ChildAssociationsApi.
   * @alias module:api/ChildAssociationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a node
     * Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/NodeBody} nodeBody The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.addNode = function(nodeId, nodeBody, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Add secondary child
     * Add secondary child association, with given association type, between parent and child node.\n
     * @param {String} parentId The identifier of a node.
     * @param {module:model/AssocChildBody} assocChildBody The child node id and assoc type.
     */
    this.addSecondaryChildAssoc = function(parentId, assocChildBody) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a node
     * Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.permanent If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n (default to false)
     */
    this.deleteNode = function(nodeId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get node children
     * Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
     * @param {String} opts.relativePath Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
     * @param {Boolean} opts.includeSource Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;)
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodePaging}
     */
    this.getNodeChildren = function(nodeId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List parents
     * Returns a list of parent nodes that point to (ie. are associated with) the current child node. \n\nThis inclues both the primary parent and also secondary parents, if any.\n
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listParents = function(childId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List secondary children
     * Returns a list of secondary child nodes that are associated with the current parent node, via a secondary child association.\n
     * @param {String} parentId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the returned results to only those of the given association type
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeChildAssocPaging}
     */
    this.listSecondaryChildAssociations = function(parentId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Move a node
     * Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n\nThe move will effectively change the primary parent\n
     * @param {String} nodeId The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n
     * @param {module:model/MoveBody} moveBody The targetParentId and, optionally, a new name.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeEntry}
     */
    this.moveNode = function(nodeId, moveBody, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Remove secondary child (or children)
     * Remove secondary child association(s) between parent and child node for given association type. \n\nIf association type is not specified then all secondary child associations between parent and child are removed.\n
     * @param {String} parentId The identifier of a node.
     * @param {String} childId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    this.removeSecondaryChildAssoc = function(parentId, childId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
