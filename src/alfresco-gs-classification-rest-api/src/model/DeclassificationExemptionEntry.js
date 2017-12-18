

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './DeclassificationExemption'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./DeclassificationExemption'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionEntry = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemption);
  }
}(this, function(ApiClient, DeclassificationExemption) {
  'use strict';




  /**
   * The DeclassificationExemptionEntry model module.
   * @module DeclassificationExemptionEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeclassificationExemptionEntry</code>.
   * @alias DeclassificationExemptionEntry
   * @class
   * @param entry {DeclassificationExemption}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>DeclassificationExemptionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {DeclassificationExemptionEntry} obj Optional instance to populate.
   * @return {DeclassificationExemptionEntry} The populated <code>DeclassificationExemptionEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = DeclassificationExemption.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {DeclassificationExemption} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


