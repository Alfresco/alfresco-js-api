(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Error', '../model/AssocTargetBody', '../model/NodeAssocPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/AssocTargetBody'), require('../model/NodeAssocPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.AssociationsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.AssocTargetBody, root.AlfrescoCoreRestApi.NodeAssocPaging);
  }
}(this, function(ApiClient, Error, AssocTargetBody, NodeAssocPaging) {
  'use strict';

  /**
   * Associations service.
   * @module api/AssociationsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new AssociationsApi.
   * @alias module:api/AssociationsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add node association
     * Add association, with given association type, between source and target node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {module:model/AssocTargetBody} assocTargetBody The target node id and assoc type.
     */
    this.addAssoc = function(sourceId, assocTargetBody) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List node associations
     * Returns a list of source nodes that point to (ie. are associated with) the current target node.\n
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listSourceNodeAssociations = function(targetId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List node associations
     * Returns a list of target nodes that are pointed to (ie. are associated with) the current source node.\n
     * @param {String} sourceId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.where Optionally filter the list by assocType. Here&#39;s an example:\n\n*   where&#x3D;(assocType&#x3D;&#39;my:assoctype&#39;)\n
     * @param {String} opts.include Return additional info, eg. aspect, properties, path, isLink
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/NodeAssocPaging}
     */
    this.listTargetAssociations = function(sourceId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Remove node association(s)
     * Remove association(s) between source and target node for given association type. \n\nIf association type is not specified then all associations between source and target are removed.\n
     * @param {String} sourceId The identifier of a node.
     * @param {String} targetId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {String} opts.assocType Restrict the delete to only those of the given association type
     */
    this.removeAssoc = function(sourceId, targetId, opts) {
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
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
