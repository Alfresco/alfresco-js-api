

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './DeclassificationExemptionEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./DeclassificationExemptionEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionsPagingList = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionEntry, root.AlfrescoGovernanceServicesSecurityControls.Pagination);
  }
}(this, function(ApiClient, DeclassificationExemptionEntry, Pagination) {
  'use strict';




  /**
   * The DeclassificationExemptionsPagingList model module.
   * @module DeclassificationExemptionsPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeclassificationExemptionsPagingList</code>.
   * @alias DeclassificationExemptionsPagingList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DeclassificationExemptionsPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {DeclassificationExemptionsPagingList} obj Optional instance to populate.
   * @return {DeclassificationExemptionsPagingList} The populated <code>DeclassificationExemptionsPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [DeclassificationExemptionEntry]);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleDeclassificationExemptionEntry>} entries
   */
  exports.prototype['entries'] = undefined;



  return exports;
}));


