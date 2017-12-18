

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './DeclassificationExemptionsPagingList'], factory);
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
   * @module DeclassificationExemptionsPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeclassificationExemptionsPaging</code>.
   * @alias DeclassificationExemptionsPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>DeclassificationExemptionsPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {DeclassificationExemptionsPaging} obj Optional instance to populate.
   * @return {DeclassificationExemptionsPaging} The populated <code>DeclassificationExemptionsPaging</code> instance.
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
   * @member {DeclassificationExemptionsPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


