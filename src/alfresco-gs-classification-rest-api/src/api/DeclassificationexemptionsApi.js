(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/DeclassificationExemptionEntry', '../model/Error', '../model/DeclassificationExemptionBody', '../model/DeclassificationExemptionsPaging'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/DeclassificationExemptionEntry'), require('../model/Error'), require('../model/DeclassificationExemptionBody'), require('../model/DeclassificationExemptionsPaging'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.DeclassificationexemptionsApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionEntry, root.AlfrescoGovernanceServicesSecurityControls.Error, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionBody, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging);
  }
}(this, function(ApiClient, DeclassificationExemptionEntry, Error, DeclassificationExemptionBody, DeclassificationExemptionsPaging) {
  'use strict';

  /**
   * Declassificationexemptions service.
   * @module api/DeclassificationexemptionsApi
   * @version 0.1.0
   */

  /**
   * Constructs a new DeclassificationexemptionsApi.
   * @alias module:api/DeclassificationexemptionsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use, default to {@link module:ApiClient#instance}
   * if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;



    /**
     * Create a declassification exemption
     * Creates a new declassification exemption.\n\n**Note:** You can create more than one exemption by specifying a list of exemptions in the JSON body.\nFor example, the following JSON body creates two declassification exemptions:\n```JSON\n[\n  {\n    \&quot;code\&quot;:\&quot;My Code1\&quot;,\n    \&quot;description\&quot;:\&quot;My Description1\&quot;\n  },\n  {\n    \&quot;code\&quot;:\&quot;My Code2\&quot;,\n    \&quot;description\&quot;:\&quot;My Description2\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n
     * @param {module:model/DeclassificationExemptionBody} declassificationExemption Declassification exemption
     * data is of type: {module:model/DeclassificationExemptionEntry}
     */
    this.createDeclassificationExemption = function(declassificationExemption) {
      var postBody = declassificationExemption;

      // verify the required parameter 'declassificationExemption' is set
      if (declassificationExemption == undefined || declassificationExemption == null) {
        throw "Missing the required parameter 'declassificationExemption' when calling createDeclassificationExemption";
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
     * @param {String} declassificationExemptionId The identifier for the declassification exemption
     */
    this.deleteDeclassificationExemption = function(declassificationExemptionId) {
      var postBody = null;

      // verify the required parameter 'declassificationExemptionId' is set
      if (declassificationExemptionId == undefined || declassificationExemptionId == null) {
        throw "Missing the required parameter 'declassificationExemptionId' when calling deleteDeclassificationExemption";
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
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * data is of type: {module:model/DeclassificationExemptionsPaging}
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
     * @param {String} declassificationExemptionId The identifier for the declassification exemption
     * data is of type: {module:model/DeclassificationExemptionEntry}
     */
    this.showDeclassificationExemptionById = function(declassificationExemptionId) {
      var postBody = null;

      // verify the required parameter 'declassificationExemptionId' is set
      if (declassificationExemptionId == undefined || declassificationExemptionId == null) {
        throw "Missing the required parameter 'declassificationExemptionId' when calling showDeclassificationExemptionById";
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
     * @param {String} declassificationExemptionId The identifier for the declassification exemption
     * @param {module:model/DeclassificationExemptionBody} declassificationExemption Declassification exemption
     * data is of type: {module:model/DeclassificationExemptionEntry}
     */
    this.updateDeclassificationExemption = function(declassificationExemptionId, declassificationExemption) {
      var postBody = declassificationExemption;

      // verify the required parameter 'declassificationExemptionId' is set
      if (declassificationExemptionId == undefined || declassificationExemptionId == null) {
        throw "Missing the required parameter 'declassificationExemptionId' when calling updateDeclassificationExemption";
      }

      // verify the required parameter 'declassificationExemption' is set
      if (declassificationExemption == undefined || declassificationExemption == null) {
        throw "Missing the required parameter 'declassificationExemption' when calling updateDeclassificationExemption";
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
