(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/FavoriteEntry', '../model/FavoriteBody', '../model/Error', '../model/FavoritePaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/FavoriteEntry'), require('../model/FavoriteBody'), require('../model/Error'), require('../model/FavoritePaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoritesApi = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteEntry, root.AlfrescoCoreRestApi.FavoriteBody, root.AlfrescoCoreRestApi.Error, root.AlfrescoCoreRestApi.FavoritePaging);
  }
}(this, function(ApiClient, FavoriteEntry, FavoriteBody, Error, FavoritePaging) {
  'use strict';

  /**
   * Favorites service.
   * @module api/FavoritesApi
   * @version 0.1.0
   */

  /**
   * Constructs a new FavoritesApi.
   * @alias module:api/FavoritesApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Add a favorite
     * Favorite a **site**, **file**, or **folder** in the repository.
     * @param {String} personId The identifier of a person.
     * @param {module:model/FavoriteBody} favoriteBody An object identifying the entity to be favorited. \n\nThe object consists of a single property which is an object with the name &#x60;site&#x60;, &#x60;file&#x60;, or &#x60;folder&#x60;. \nThe content of that object is the &#x60;guid&#x60; of the target entity.\n\nFor example, to favorite a file the following body would be used:\n\n&#x60;&#x60;&#x60;JSON\n{\n   \&quot;target\&quot;: {\n      \&quot;file\&quot;: {\n         \&quot;guid\&quot;: \&quot;abcde-01234\&quot;\n      }\n   }\n}\n&#x60;&#x60;&#x60;\n
     * data is of type: {module:model/FavoriteEntry}
     */
    this.addFavorite = function(personId, favoriteBody) {
      var postBody = favoriteBody;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling addFavorite";
      }

      // verify the required parameter 'favoriteBody' is set
      if (favoriteBody == undefined || favoriteBody == null) {
        throw "Missing the required parameter 'favoriteBody' when calling addFavorite";
      }


      var pathParams = {
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
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get a favorite
     * Returns favorite **favoriteId** for person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoriteEntry}
     */
    this.getFavorite = function(personId, favoriteId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling getFavorite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
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
      var returnType = FavoriteEntry;

      return this.apiClient.callApi(
        '/people/{personId}/favorites/{favoriteId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get favorites
     * Returns a list of favorites for person **personId**.\n\nYou can us the &#x60;-me-&#x60; string in place of &#x60;&lt;personId&gt;&#x60; to get the favorites of the currently authenticated user.\n\nYou can use the **where** parameter to restrict the list in the response\nto entries of a specific kind. The **where** parameter takes a value.\nThe value is a single predicate that can include one or more **EXISTS**\nconditions. The **EXISTS** condition uses a single operand to limit the\nlist to include entries that include that one property. The property values are:\n\n*   &#x60;target/file&#x60;\n*   &#x60;target/folder&#x60;\n*   &#x60;target/site&#x60;\n\nFor example, the following **where** parameter restricts the returned list to the file favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file))\n&#x60;&#x60;&#x60;\nYou can specify more than one condition using **OR**. The predicate must be enclosed in parentheses.\n\n\nFor example, the following **where** parameter restricts the returned list to the file and folder favorites for a person:\n\n&#x60;&#x60;&#x60;SQL\n(EXISTS(target/file) OR EXISTS(target/folder))\n&#x60;&#x60;&#x60;\n
     * @param {String} personId The identifier of a person.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/FavoritePaging}
     */
    this.getFavorites = function(personId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling getFavorites";
      }


      var pathParams = {
        'personId': personId
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems'],
        'where': opts['where'],
        'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv'),
        'include': this.apiClient.buildCollectionParam(opts['include'], 'csv')
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = FavoritePaging;

      return this.apiClient.callApi(
        '/people/{personId}/favorites', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a favorite
     * Removes **favoriteId** as a favorite of person **personId**.
     * @param {String} personId The identifier of a person.
     * @param {String} favoriteId The identifier of a favorite.
     */
    this.removeFavoriteSite = function(personId, favoriteId) {
      var postBody = null;

      // verify the required parameter 'personId' is set
      if (personId == undefined || personId == null) {
        throw "Missing the required parameter 'personId' when calling removeFavoriteSite";
      }

      // verify the required parameter 'favoriteId' is set
      if (favoriteId == undefined || favoriteId == null) {
        throw "Missing the required parameter 'favoriteId' when calling removeFavoriteSite";
      }


      var pathParams = {
        'personId': personId,
        'favoriteId': favoriteId
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
        '/people/{personId}/favorites/{favoriteId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
