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
    define(['../../../alfrescoApiClient', './model/DeclassificationExemptionsPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./DeclassificationExemptionsPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPaging = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPagingList);
  }
}(this, function(ApiClient, DeclassificationExemptionsPagingList) {
  'use strict';




  /**
   * The DeclassificationExemptionsPaging model module.
   * @module model/DeclassificationExemptionsPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeclassificationExemptionsPaging</code>.
   * @alias module:model/DeclassificationExemptionsPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DeclassificationExemptionsPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeclassificationExemptionsPaging} obj Optional instance to populate.
   * @return {module:model/DeclassificationExemptionsPaging} The populated <code>DeclassificationExemptionsPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = DeclassificationExemptionsPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/DeclassificationExemptionsPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


