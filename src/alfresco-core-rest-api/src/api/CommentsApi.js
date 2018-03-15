(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/CommentBody', '../model/CommentEntry', '../model/Error', '../model/CommentPaging', '../model/CommentBody1'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/CommentBody'), require('../model/CommentEntry'), require('../model/Error'), require('../model/CommentPaging'), require('../model/CommentBody1'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.CommentBody, root.AlfrescoCoreRestApi.CommentEntry, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.CommentPaging, root.AlfrescoCoreRestApi.CommentBody1);
  }
}(this, function(ApiClient, CommentBody, CommentEntry, Error, CommentPaging, CommentBody1) {
  'use strict';

  /**
   * Comments service.
   * @module api/CommentsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new CommentsApi.
   * @alias module:api/CommentsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a comment
     * Creates one or more comments on node **nodeId**. You can create more than one comment by \nspecifying a list of comments in the JSON body like this:      \n\n&#x60;&#x60;&#x60;JSON\n[\n  {\n    \&quot;content\&quot;: \&quot;This is a comment\&quot;\n  },\n  {\n    \&quot;content\&quot;: \&quot;This is another comment\&quot;\n  }\n]\n&#x60;&#x60;&#x60;\n
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/CommentBody} commentBody The comment text. Note that you can provide an array of comments.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/CommentEntry}
     * data is of type: {module:model/CommentEntry}
     */
    this.addComment = function(nodeId, commentBody, opts) {
      opts = opts || {};

      var postBody = commentBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling addComment";
      }

      // verify the required parameter 'commentBody' is set
      if (commentBody == undefined || commentBody == null) {
        throw "Missing the required parameter 'commentBody' when calling addComment";
      }


      var pathParams = {
        'nodeId': nodeId
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
      var returnType = CommentEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/comments', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get comments
     * Returns a list of comments for the node identified by **nodeId**, sorted chronologically with the newest comment first.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/CommentPaging}
     */
    this.getComments = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getComments";
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
      var returnType = CommentPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/comments', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a comment
     * Removes the comment **commentId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} commentId The identifier of a comment.
     */
    this.removeComment = function(nodeId, commentId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling removeComment";
      }

      // verify the required parameter 'commentId' is set
      if (commentId == undefined || commentId == null) {
        throw "Missing the required parameter 'commentId' when calling removeComment";
      }


      var pathParams = {
        'nodeId': nodeId,
        'commentId': commentId
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
        '/nodes/{nodeId}/comments/{commentId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a comment
     * Updates an existing comment **commentId** on node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} commentId The identifier of a comment.
     * @param {module:model/CommentBody1} commentBody The JSON representing the comment to be updated.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/CommentEntry}
     */
    this.updateComment = function(nodeId, commentId, commentBody, opts) {
      opts = opts || {};
      var postBody = commentBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling updateComment";
      }

      // verify the required parameter 'commentId' is set
      if (commentId == undefined || commentId == null) {
        throw "Missing the required parameter 'commentId' when calling updateComment";
      }

      // verify the required parameter 'commentBody' is set
      if (commentBody == undefined || commentBody == null) {
        throw "Missing the required parameter 'commentBody' when calling updateComment";
      }


      var pathParams = {
        'nodeId': nodeId,
        'commentId': commentId
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
      var returnType = CommentEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/comments/{commentId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
