

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './SecurityMarks'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./SecurityMarks'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityMarkInformation = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.SecurityMarks);
  }
}(this, function(ApiClient, SecurityMarks) {
  'use strict';




  /**
   * The SecurityMarkInformation model module.
   * @module SecurityMarkInformation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityMarkInformation</code>.
   * @alias SecurityMarkInformation
   * @class
   * @param add {SecurityMarks}
   */
  var exports = function(add) {
    var _this = this;

    _this['add'] = add;
  };

  /**
   * Constructs a <code>SecurityMarkInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {SecurityMarkInformation} obj Optional instance to populate.
   * @return {SecurityMarkInformation} The populated <code>SecurityMarkInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('add')) {
        obj['add'] = SecurityMarks.constructFromObject(data['add']);
      }
    }
    return obj;
  }

  /**
   * @member {SecurityMarks} add
   */
  exports.prototype['add'] = undefined;



  return exports;
}));


