/**
 * Alfresco Governance Services Security Controls
 * Provides access to classification and security mark related features.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

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
    this.calculateDefaultDeclassificationDateWithHttpInfo = function(nodeId) {
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

    /**
     * Calculate the default declassification date
     * Calculates the default declassification date for **nodeId** based on the properties of the node and the current declassification time frame.
     * @param {string} nodeId The identifier of a node.
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link moduleDeclassificationDate}
     */
    this.calculateDefaultDeclassificationDate = function(nodeId) {
      return this.calculateDefaultDeclassificationDateWithHttpInfo(nodeId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }
  };

  return exports;
}));
