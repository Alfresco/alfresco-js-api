

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityControlSettingBody model module.
   * @module SecurityControlSettingBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityControlSettingBody</code>.
   * @alias SecurityControlSettingBody
   * @class
   * @param value {Object}
   */
  var exports = function(value) {
    var _this = this;

    _this['value'] = value;
  };

  /**
   * Constructs a <code>SecurityControlSettingBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {SecurityControlSettingBody} obj Optional instance to populate.
   * @return {SecurityControlSettingBody} The populated <code>SecurityControlSettingBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


