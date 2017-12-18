

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/DeclassificationExemptionBody', '../model/DeclassificationExemptionEntry', '../model/DeclassificationExemptionsPaging', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/DeclassificationExemptionBody'), require('../model/DeclassificationExemptionEntry'), require('../model/DeclassificationExemptionsPaging'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionBody, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionEntry, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging, root.AlfrescoGovernanceServicesSecurityControls.Error);
  }
}(this, function(ApiClient, DeclassificationExemptionBody, DeclassificationExemptionEntry, DeclassificationExemptionsPaging, Error) {
  'use strict';

  /**
   * Declassificationexemptions service.
   * @module api/DeclassificationExemptionsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new DeclassificationExemptionsApi.
   * @alias :api/DeclassificationExemptionsApi
   * @class
   * @param {:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a declassification exemption
     * Creates a new declassification exemption.  **Note:** You can create more than one exemption by specifying a list of exemptions in the JSON body. For example, the following JSON body creates two declassification exemptions: &#x60;&#x60;&#x60;JSON [   {     \&quot;code\&quot;:\&quot;My Code1\&quot;,     \&quot;description\&quot;:\&quot;My Description1\&quot;   },   {     \&quot;code\&quot;:\&quot;My Code2\&quot;,     \&quot;description\&quot;:\&quot;My Description2\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60;
     * @param {DeclassificationExemptionBody} declassificationExemption Declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionEntry} and HTTP response
     */
    this.createDeclassificationExemption = function(declassificationExemption) {
      var postBody = declassificationExemption;

      // verify the required parameter 'declassificationExemption' is set
      if (declassificationExemption === undefined || declassificationExemption === null) {
        throw new Error("Missing the required parameter 'declassificationExemption' when calling createDeclassificationExemption");
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
      var returnType = DeclassificationExemptionEntry;

      return this.apiClient.callApi(
        '/declassification-exemptions', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Delete a declassification exemption
     * Deletes the declassification exemption with id **declassificationExemptionId**. You can&#39;t delete a classification exemption that is being used to classify content.
     * @param {string} declassificationExemptionId The identifier for the declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    this.deleteDeclassificationExemption = function(declassificationExemptionId) {
      var postBody = null;

      // verify the required parameter 'declassificationExemptionId' is set
      if (declassificationExemptionId === undefined || declassificationExemptionId === null) {
        throw new Error("Missing the required parameter 'declassificationExemptionId' when calling deleteDeclassificationExemption");
      }


      var pathParams = {
        'declassificationExemptionId': declassificationExemptionId
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
        '/declassification-exemptions/{declassificationExemptionId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * List all declassification exemptions
     * Gets all declassification exemptions.
     * @param {Object} opts Optional parameters
     * @param {number} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {number} opts.maxItems The maximum number of items to return in the list.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionsPaging} and HTTP response
     */
    this.listDeclassificationExemptions = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'skipCount': opts['skipCount'],
        'maxItems': opts['maxItems']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['basicAuth'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = DeclassificationExemptionsPaging;

      return this.apiClient.callApi(
        '/declassification-exemptions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }


    /**
     * Get declassification exemption information
     * Gets the declassification exemption with id **declassificationExemptionId**.
     * @param {string} declassificationExemptionId The identifier for the declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionEntry} and HTTP response
     */
    this.showDeclassificationExemptionById = function(declassificationExemptionId) {
      var postBody = null;

      // verify the required parameter 'declassificationExemptionId' is set
      if (declassificationExemptionId === undefined || declassificationExemptionId === null) {
        throw new Error("Missing the required parameter 'declassificationExemptionId' when calling showDeclassificationExemptionById");
      }


      var pathParams = {
        'declassificationExemptionId': declassificationExemptionId
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
      var returnType = DeclassificationExemptionEntry;

      return this.apiClient.callApi(
        '/declassification-exemptions/{declassificationExemptionId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update a declassification exemption
     * Updates the declassification exemption with id **declassificationExemptionId**. For example, you can rename a declassification exemption.
     * @param {string} declassificationExemptionId The identifier for the declassification exemption
     * @param {DeclassificationExemptionBody} declassificationExemption Declassification exemption
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationExemptionEntry} and HTTP response
     */
    this.updateDeclassificationExemption = function(declassificationExemptionId, declassificationExemption) {
      var postBody = declassificationExemption;

      // verify the required parameter 'declassificationExemptionId' is set
      if (declassificationExemptionId === undefined || declassificationExemptionId === null) {
        throw new Error("Missing the required parameter 'declassificationExemptionId' when calling updateDeclassificationExemption");
      }

      // verify the required parameter 'declassificationExemption' is set
      if (declassificationExemption === undefined || declassificationExemption === null) {
        throw new Error("Missing the required parameter 'declassificationExemption' when calling updateDeclassificationExemption");
      }


      var pathParams = {
        'declassificationExemptionId': declassificationExemptionId
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
      var returnType = DeclassificationExemptionEntry;

      return this.apiClient.callApi(
        '/declassification-exemptions/{declassificationExemptionId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  };

  return exports;
}));
