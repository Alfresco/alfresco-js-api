(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/RatingEntry', '../model/Error', '../model/RatingPaging', '../model/RatingBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/RatingEntry'), require('../model/Error'), require('../model/RatingPaging'), require('../model/RatingBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingsApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RatingEntry, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.RatingPaging, root.AlfrescoCoreRestApi.RatingBody);
  }
}(this, function(ApiClient, RatingEntry, Error, RatingPaging, RatingBody) {
  'use strict';

  /**
   * Ratings service.
   * @module api/RatingsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new RatingsApi.
   * @alias module:api/RatingsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Get a rating
     * Get the specific rating **ratingId** on node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} ratingId The identifier of a rating.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RatingEntry}
     */
    this.getRating = function(nodeId, ratingId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRating";
      }

      // verify the required parameter 'ratingId' is set
      if (ratingId == undefined || ratingId == null) {
        throw "Missing the required parameter 'ratingId' when calling getRating";
      }


      var pathParams = {
        'nodeId': nodeId,
        'ratingId': ratingId
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
      var returnType = RatingEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/ratings/{ratingId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get ratings
     * Get the ratings for node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/RatingPaging}
     */
    this.getRatings = function(nodeId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling getRatings";
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
      var returnType = RatingPaging;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/ratings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Rate
     * Rate the node with identifier **nodeId**
     * @param {String} nodeId The identifier of a node.
     * @param {module:model/RatingBody} ratingBody For \&quot;myRating\&quot; the type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.\n\nFor example, to \&quot;like\&quot; a file the following body would be used:\n\n  &#x60;&#x60;&#x60;JSON\n    {\n      \&quot;id\&quot;: \&quot;likes\&quot;,\n      \&quot;myRating\&quot;: true\n    }\n  &#x60;&#x60;&#x60;\n
     * data is of type: {module:model/RatingEntry}
     */
    this.rate = function(nodeId, ratingBody) {
      var postBody = ratingBody;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling rate";
      }

      // verify the required parameter 'ratingBody' is set
      if (ratingBody == undefined || ratingBody == null) {
        throw "Missing the required parameter 'ratingBody' when calling rate";
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
      var returnType = RatingEntry;

      return this.apiClient.callApi(
        '/nodes/{nodeId}/ratings', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a rating
     * Removes rating **ratingId** from node **nodeId**.
     * @param {String} nodeId The identifier of a node.
     * @param {String} ratingId The identifier of a rating.
     */
    this.removeRating = function(nodeId, ratingId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId == undefined || nodeId == null) {
        throw "Missing the required parameter 'nodeId' when calling removeRating";
      }

      // verify the required parameter 'ratingId' is set
      if (ratingId == undefined || ratingId == null) {
        throw "Missing the required parameter 'ratingId' when calling removeRating";
      }


      var pathParams = {
        'nodeId': nodeId,
        'ratingId': ratingId
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
        '/nodes/{nodeId}/ratings/{ratingId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
