(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/TagBody', '../model/Error', '../model/TagEntry', '../model/TagPaging', '../model/TagBody1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/TagBody'), require('../model/Error'), require('../model/TagEntry'), require('../model/TagPaging'), require('../model/TagBody1'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.TagBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.TagEntry, root.AlfrescoCoreRestApi.TagPaging, root.AlfrescoCoreRestApi.TagBody1);
  }
}(this, function(ApiClient, TagBody, Error, TagEntry, TagPaging, TagBody1) {
  'use strict';

  /**
   * Tags service.
   * @module api/TagsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new TagsApi. 
   * @alias module:api/TagsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a tag
     * Adds one or more tags to the node **nodeId**. You can create more than one tag by\nspecifying a list of tags in the JSON body like this:\n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-1\&quot;\n  },\n  {\n    \&quot;tag\&quot;:\&quot;test-tag-2\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/TagBody} tagBody The new tag
     * data is of type: {module:model/TagEntry}
     */
    this.addTag = function(nodeId, tagBody) {
      var postBody = tagBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addTag";
      }

      // verify the required parameter 'tagBody' is set
      if (tagBody == undefined || tagBody == null) {
        throw "Missing the required parameter 'tagBody' when calling addTag";
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
      var returnType = TagEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/tags', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get tags
     * Returns a list of tags for node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TagPaging}
     */
    this.getNodeTags = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getNodeTags";
      }


      var pathParams = {
        'nodeId': nodeId
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
      var returnType = TagPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a tag
     * Return a specific tag with **tagId**.
     * @param {String} tagId The identifier of a tag.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TagEntry}
     */
    this.getTag = function(tagId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'tagId' is set
      if (tagId == undefined || tagId == null) {
        throw "Missing the required parameter 'tagId' when calling getTag";
      }


      var pathParams = {
        'tagId': tagId
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
      var returnType = TagEntry;

      return this.apiClient.callApi(
        '/tags/{tagId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get tags
     * Returns a list of tags in this repository.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/TagPaging}
     */
    this.getTags = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
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
      var returnType = TagPaging;

      return this.apiClient.callApi(
        '/tags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a tag
     * Removes tag **tagId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} tagId The identifier of a tag.
     */
    this.removeTag = function(nodeId, tagId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling removeTag";
      }

      // verify the required parameter 'tagId' is set
      if (tagId == undefined || tagId == null) {
        throw "Missing the required parameter 'tagId' when calling removeTag";
      }


      var pathParams = {
        'nodeId': nodeId,
        'tagId': tagId
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
        '/nodes/{nodeId}/tags/{tagId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a tag
     * Updates the tag **tagId**.
     * @param {String} tagId The identifier of a tag.
     * @param {module:model/TagBody1} tagBody The updated tag
     * data is of type: {module:model/TagEntry}
     */
    this.updateTag = function(tagId, tagBody) {
      var postBody = tagBody;

      // verify the required parameter 'tagId' is set
      if (tagId == undefined || tagId == null) {
        throw "Missing the required parameter 'tagId' when calling updateTag";
      }

      // verify the required parameter 'tagBody' is set
      if (tagBody == undefined || tagBody == null) {
        throw "Missing the required parameter 'tagBody' when calling updateTag";
      }


      var pathParams = {
        'tagId': tagId
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
      var returnType = TagEntry;

      return this.apiClient.callApi(
        '/tags/{tagId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
