(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ClassificationReasonBody', '../model/ClassificationReasonEntry', '../model/Error', '../model/ClassificationReasonsPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ClassificationReasonBody'), require('../model/ClassificationReasonEntry'), require('../model/Error'), require('../model/ClassificationReasonsPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationreasonsApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonEntry, root.AlfrescoGovernanceServicesSecurityControls.Error, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPaging);
  }
}(this, function(ApiClient, ClassificationReasonBody, ClassificationReasonEntry, Error, ClassificationReasonsPaging) {
  'use strict';

  /**
   * Classificationreasons service.
   * @module api/ClassificationreasonsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ClassificationreasonsApi.
   * @alias module:api/ClassificationreasonsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a classification reason
     * Creates a new classification reason.\n\n**Note:** You can create more than one reason by specifying a list of reasons in the JSON body.\nFor example, the following JSON body creates two classification reasons:\n```JSON\n[\n  {\n    \&quot;code\&quot;:\&quot;My Code1\&quot;,\n    \&quot;description\&quot;:\&quot;My Description1\&quot;\n  },\n  {\n    \&quot;code\&quot;:\&quot;My Code2\&quot;,\n    \&quot;description\&quot;:\&quot;My Description2\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n
     * @param {module:model/ClassificationReasonBody} classificationReason Classification reason
     * data is of type: {module:model/ClassificationReasonEntry}
     */
    this.createClassificationReason = function(classificationReason) {
      var postBody = classificationReason;

      // verify the required parameter 'classificationReason' is set
      if (classificationReason == undefined || classificationReason == null) {
        throw "Missing the required parameter 'classificationReason' when calling createClassificationReason";
      }


      var pathParams = {
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
      var returnType = ClassificationReasonEntry;

      return this.apiClient.callApi(
        '/classification-reasons', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a classification reason
     * Deletes the classification reason  **classificationReasonId**. You can&#39;t delete a classification reason that is being used to classify content. There must be at least one classification reason.
     * @param {String} classificationReasonId The identifier for the classification reason
     */
    this.deleteClassificationReason = function(classificationReasonId) {
      var postBody = null;

      // verify the required parameter 'classificationReasonId' is set
      if (classificationReasonId == undefined || classificationReasonId == null) {
        throw "Missing the required parameter 'classificationReasonId' when calling deleteClassificationReason";
      }


      var pathParams = {
        'classificationReasonId': classificationReasonId
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
        '/classification-reasons/{classificationReasonId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * List all classification reasons
     * Gets all classification reasons.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {Array.<String>} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/ClassificationReasonsPaging}
     */
    this.listClassificationReasons = function(opts) {
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
      var returnType = ClassificationReasonsPaging;

      return this.apiClient.callApi(
        '/classification-reasons', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get classification reason information
     * Gets the classification reason  **classificationReasonId**.
     * @param {String} classificationReasonId The identifier for the classification reason
     * data is of type: {module:model/ClassificationReasonEntry}
     */
    this.showClassificationReasonById = function(classificationReasonId) {
      var postBody = null;

      // verify the required parameter 'classificationReasonId' is set
      if (classificationReasonId == undefined || classificationReasonId == null) {
        throw "Missing the required parameter 'classificationReasonId' when calling showClassificationReasonById";
      }


      var pathParams = {
        'classificationReasonId': classificationReasonId
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
      var returnType = ClassificationReasonEntry;

      return this.apiClient.callApi(
        '/classification-reasons/{classificationReasonId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Update a classification reason
     * Updates the classification reason with id **classificationReasonId**. For example, you can change a classification reason code or description.
     * @param {String} classificationReasonId The identifier for the classification reason
     * @param {module:model/ClassificationReasonBody} classificationReason Classification reason
     * data is of type: {module:model/ClassificationReasonEntry}
     */
    this.updateClassificationReason = function(classificationReasonId, classificationReason) {
      var postBody = classificationReason;

      // verify the required parameter 'classificationReasonId' is set
      if (classificationReasonId == undefined || classificationReasonId == null) {
        throw "Missing the required parameter 'classificationReasonId' when calling updateClassificationReason";
      }

      // verify the required parameter 'classificationReason' is set
      if (classificationReason == undefined || classificationReason == null) {
        throw "Missing the required parameter 'classificationReason' when calling updateClassificationReason";
      }


      var pathParams = {
        'classificationReasonId': classificationReasonId
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
      var returnType = ClassificationReasonEntry;

      return this.apiClient.callApi(
        '/classification-reasons/{classificationReasonId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
