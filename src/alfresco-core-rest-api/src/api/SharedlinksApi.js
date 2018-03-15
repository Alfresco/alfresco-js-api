(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/NodeSharedLinkEntry', '../model/SharedLinkBody', '../model/EmailSharedLinkBody', '../model/NodeSharedLinkPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/NodeSharedLinkEntry'), require('../model/SharedLinkBody'), require('../model/EmailSharedLinkBody'), require('../model/NodeSharedLinkPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SharedlinksApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.NodeSharedLinkEntry, root.AlfrescoCoreRestApi.SharedLinkBody, root.AlfrescoCoreRestApi.EmailSharedLinkBody, root.AlfrescoCoreRestApi.NodeSharedLinkPaging);
  }
}(this, function(ApiClient, Error, NodeSharedLinkEntry, SharedLinkBody, EmailSharedLinkBody, NodeSharedLinkPaging) {
  'use strict';

  /**
   * Sharedlinks service.
   * @module api/SharedlinksApi
   * @version 0.1.0
   */

  /**
   * Constructs a new SharedlinksApi.
   * @alias module:api/SharedlinksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a shared link to a file
     * Create shared link to specfied file identified by **nodeId** in request body.
     * @param {module:model/SharedLinkBody} sharedLinkBody The nodeId to create a shared link for.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.addSharedLink = function(sharedLinkBody, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Deletes a shared link
     * Deletes the shared link with identifier **sharedId**.
     * @param {String} sharedId The identifier of a shared link to a file.
     */
    this.deleteSharedLink = function(sharedId) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Email shared link
     * Sends email with app-specific url including identifier **sharedId**.\n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {module:model/EmailSharedLinkBody} emailSharedLinkBody The shared link email to send.
     */
    this.emailSharedLink = function(sharedId, emailSharedLinkBody) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Find shared links
     * Find (search for) links that current user has read permission on source node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;)
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkPaging}
     */
    this.findSharedLinks = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a shared link
     * Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeSharedLinkEntry}
     */
    this.getSharedLink = function(sharedId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get file content
     * Returns the content of the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n
     * @param {String} sharedId The identifier of a shared link to a file.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.attachment **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n (default to true)
     * @param {Date} opts.ifModifiedSince Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n
     */
    this.getSharedLinkContent = function(sharedId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
