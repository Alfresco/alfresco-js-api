(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ContentRenditionApi = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * ContentRendition service.
   * @module api/ContentRenditionApi
   * @version 1.4.0
   */

  /**
   * Constructs a new ContentRenditionApi.
   * @alias module:api/ContentRenditionApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Function to receive the result of the getRawContent operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Retrieve Raw Content
     * @param {Integer} contentId contentId
     * @param {String} renditionType renditionType
     */
    this.getRawContent = function(contentId, renditionType) {
      var postBody = null;

      // verify the required parameter 'contentId' is set
      if (contentId == undefined || contentId == null) {
        throw "Missing the required parameter 'contentId' when calling getRawContent";
      }

      // verify the required parameter 'renditionType' is set
      if (renditionType == undefined || renditionType == null) {
        throw "Missing the required parameter 'renditionType' when calling getRawContent";
      }


      var pathParams = {
        'contentId': contentId,
        'renditionType': renditionType
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/content/{contentId}/rendition/{renditionType}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
