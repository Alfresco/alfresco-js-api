

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ClassificationReasonBody', '../model/ClassificationReasonEntry', '../model/ClassificationReasonsPaging', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/ClassificationReasonBody'), require('../model/ClassificationReasonEntry'), require('../model/ClassificationReasonsPaging'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonEntry, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPaging, root.AlfrescoGovernanceServicesSecurityControls.Error);
  }
}(this, function(ApiClient, ClassificationReasonBody, ClassificationReasonEntry, ClassificationReasonsPaging, Error) {
  'use strict';

  /**
   * Classificationreasons service.
   * @module api/ClassificationReasonsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new ClassificationReasonsApi.
   * @alias :api/ClassificationReasonsApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a classification reason
     * Creates a new classification reason.  **Note:** You can create more than one reason by specifying a list of reasons in the JSON body. For example, the following JSON body creates two classification reasons: &#x60;&#x60;&#x60;JSON [   {     \&quot;code\&quot;:\&quot;My Code1\&quot;,     \&quot;description\&quot;:\&quot;My Description1\&quot;   },   {     \&quot;code\&quot;:\&quot;My Code2\&quot;,     \&quot;description\&quot;:\&quot;My Description2\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {ClassificationReasonBody} classificationReason Classification reason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationReasonEntry} and HTTP response
     */
    this.createClassificationReason = function(classificationReason) {
      var postBody = classificationReason;

      // verify the required parameter 'classificationReason' is set
      if (classificationReason === undefined || classificationReason === null) {
        throw new Error("Missing the required parameter 'classificationReason' when calling createClassificationReason");
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
     * @param {string} classificationReasonId The identifier for the classification reason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteClassificationReason = function(classificationReasonId) {
      var postBody = null;

      // verify the required parameter 'classificationReasonId' is set
      if (classificationReasonId === undefined || classificationReasonId === null) {
        throw new Error("Missing the required parameter 'classificationReasonId' when calling deleteClassificationReason");
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
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @param {string[]} opts.fields A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationReasonsPaging} and HTTP response
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
     * @param {string} classificationReasonId The identifier for the classification reason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationReasonEntry} and HTTP response
     */
    this.showClassificationReasonById = function(classificationReasonId) {
      var postBody = null;

      // verify the required parameter 'classificationReasonId' is set
      if (classificationReasonId === undefined || classificationReasonId === null) {
        throw new Error("Missing the required parameter 'classificationReasonId' when calling showClassificationReasonById");
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
     * @param {string} classificationReasonId The identifier for the classification reason
     * @param {ClassificationReasonBody} classificationReason Classification reason
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleClassificationReasonEntry} and HTTP response
     */
    this.updateClassificationReason = function(classificationReasonId, classificationReason) {
      var postBody = classificationReason;

      // verify the required parameter 'classificationReasonId' is set
      if (classificationReasonId === undefined || classificationReasonId === null) {
        throw new Error("Missing the required parameter 'classificationReasonId' when calling updateClassificationReason");
      }

      // verify the required parameter 'classificationReason' is set
      if (classificationReason === undefined || classificationReason === null) {
        throw new Error("Missing the required parameter 'classificationReason' when calling updateClassificationReason");
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
