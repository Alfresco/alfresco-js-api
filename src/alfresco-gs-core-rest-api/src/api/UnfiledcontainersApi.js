(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/RMNodeBodyCreate', '../model/UnfiledContainerAssociationPaging', '../model/Error', '../model/UnfiledContainerEntry', '../model/UnfiledRecordContainerBodyUpdate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/RMNodeBodyCreate'), require('../model/UnfiledContainerAssociationPaging'), require('../model/Error'), require('../model/UnfiledContainerEntry'), require('../model/UnfiledRecordContainerBodyUpdate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledcontainersApi = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerAssociationPaging, root.AlfrescoGovernanceServicesRestApi.Error, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerEntry, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordContainerBodyUpdate);
  }
}(this, function(ApiClient, RMNodeBodyCreate, UnfiledContainerAssociationPaging, Error, UnfiledContainerEntry, UnfiledRecordContainerBodyUpdate) {
  'use strict';

  /**
   * Unfiledcontainers service.
   * @module api/UnfiledcontainersApi
   * @version 0.1.0
   */

  /**
   * Constructs a new UnfiledcontainersApi.
   * @alias module:api/UnfiledcontainersApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a record or an unfiled record folder
     * Creates a record or an unfiled record folder as a primary child of **unfiledContainerId**.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create a unique name using an integer suffix.\n\nThis endpoint supports both JSON and multipart/form-data (file upload).\n\n**Using multipart/form-data**\n\nUse the **filedata** field to represent the content to upload, for example, the following curl command will\ncreate a node with the contents of test.txt in the test user&#39;s home folder.\n\n```curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-containers/{unfiledContainerId}/children -F filedata=@test.txt```\n\nThis API method also supports record and unfiled record folder creation using application/json.\n\nYou must specify at least a **name** and **nodeType**.\n\nYou can create a non-electronic record like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,\n      \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,\n      \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,\n      \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,\n      \&quot;rma:numberOfCopies\&quot;:1,\n      \&quot;rma:physicalSize\&quot;:30,\n      \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,\n      \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;\n    }\n}\n```\n\nYou can create an empty electronic record:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n}\n```\n\nYou can create an unfiled record folder like this:\n```JSON\n{\n  \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,\n  \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,\n  \&quot;properties\&quot;:\n  {\n    \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;\n  }\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\n**Note:** You can create more than one child by\nspecifying a list of nodes in the JSON body. For example, the following JSON\nbody creates a record and an unfiled record folder inside the specified **unfiledContainerId**:\n```JSON\n[\n  {\n    \&quot;name\&quot;:\&quot;My Record\&quot;,\n    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n  },\n  {\n    \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,\n    \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n
     * @param {String} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {module:model/RMNodeBodyCreate} nodeBodyCreate The node information to create.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.autoRename If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n
     * @param {Array.<String>} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/UnfiledContainerAssociationPaging}
     */
    this.createUnfiledContainerChildren = function(unfiledContainerId, nodeBodyCreate, opts) {
      opts = opts || {};
      var postBody = nodeBodyCreate;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId == undefined || unfiledContainerId == null) {
        throw "Missing the required parameter 'unfiledContainerId' when calling createUnfiledContainerChildren";
      }

      // verify the required parameter 'nodeBodyCreate' is set
      if (nodeBodyCreate == undefined || nodeBodyCreate == null) {
        throw "Missing the required parameter 'nodeBodyCreate' when calling createUnfiledContainerChildren";
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
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
      var returnType = UnfiledContainerAssociationPaging;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}/children', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get the unfiled records container
     * Gets information for unfiled records container **unfiledContainerId**\n\nMandatory fields and the unfiled records container&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/UnfiledContainerEntry}
     */
    this.getUnfiledContainer = function(unfiledContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId == undefined || unfiledContainerId == null) {
        throw "Missing the required parameter 'unfiledContainerId' when calling getUnfiledContainer";
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
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
      var returnType = UnfiledContainerEntry;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List unfiled record container&#39;s children
     * Returns a list of records or unfiled record folders.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n
     * @param {String} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where Optionally filter the list. Here are some examples:\n\n*   ```where=(isRecord=true)```\n\n*   ```where=(isUnfiledRecordFolder=false)```\n\n*   ```where=(nodeType=&#39;cm:content INCLUDESUBTYPES&#39;)```\n
     * @param {Array.<String>} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* path\n* properties\n
     * @param {Boolean} opts.includeSource Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 the specified parent **unfiledContainerId**
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/UnfiledContainerAssociationPaging}
     */
    this.listUnfiledContainerChildren = function(unfiledContainerId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId == undefined || unfiledContainerId == null) {
        throw "Missing the required parameter 'unfiledContainerId' when calling listUnfiledContainerChildren";
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
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
      var returnType = UnfiledContainerAssociationPaging;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}/children', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update an unfiled record container
     * Updates unfiled record container **unfiledContainerId**. For example, you can rename an unfiled record container:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update description and title properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:description\&quot;: \&quot;New Description\&quot;,\n       \&quot;cm:title\&quot;:\&quot;New Title\&quot;\n    }\n}\n```\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n
     * @param {String} unfiledContainerId The identifier of an unfiled records container. You can use the **-unfiled-** alias.
     * @param {module:model/UnfiledRecordContainerBodyUpdate} unfiledContainerBodyUpdate The unfiled record container information to update.
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.include Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/UnfiledContainerEntry}
     */
    this.updateUnfiledContainer = function(unfiledContainerId, unfiledContainerBodyUpdate, opts) {
      opts = opts || {};
      var postBody = unfiledContainerBodyUpdate;

      // verify the required parameter 'unfiledContainerId' is set
      if (unfiledContainerId == undefined || unfiledContainerId == null) {
        throw "Missing the required parameter 'unfiledContainerId' when calling updateUnfiledContainer";
      }

      // verify the required parameter 'unfiledContainerBodyUpdate' is set
      if (unfiledContainerBodyUpdate == undefined || unfiledContainerBodyUpdate == null) {
        throw "Missing the required parameter 'unfiledContainerBodyUpdate' when calling updateUnfiledContainer";
      }


      var pathParams = {
        'unfiledContainerId': unfiledContainerId
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
      var returnType = UnfiledContainerEntry;

      return this.apiClient.callApi(
        '/unfiled-containers/{unfiledContainerId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
