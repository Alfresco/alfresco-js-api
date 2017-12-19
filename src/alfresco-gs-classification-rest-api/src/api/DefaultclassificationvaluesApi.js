

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/DeclassificationDate', '../model/Error'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/DeclassificationDate'), require('../model/Error'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsApi = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationDate, root.AlfrescoGovernanceServicesSecurityControls.Error);
  }
}(this, function(ApiClient, DeclassificationDate, Error) {
  'use strict';

  /**
   * Defaultclassificationvalues service.
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
     * Calculate the default declassification date
     * Calculates the default declassification date for **nodeId** based on the properties of the node and the current declassification time frame.
     * @param {string} nodeId The identifier of a node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link moduleDeclassificationDate} and HTTP response
     */
    this.calculateDefaultDeclassificationDate = function(nodeId) {
      var postBody = null;

      // verify the required parameter 'nodeId' is set
      if (nodeId === undefined || nodeId === null) {
        throw new Error("Missing the required parameter 'nodeId' when calling calculateDefaultDeclassificationDate");
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
      var returnType = DeclassificationDate;

      return this.apiClient.callApi(
        '/default-classification-values/{nodeId}/calculate-declassification-date', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

  };

  return exports;
}));
