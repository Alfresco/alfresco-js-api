

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
    root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSetting = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SecurityControlSetting model module.
   * @module SecurityControlSetting
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityControlSetting</code>.
   * @alias SecurityControlSetting
   * @class
   * @param key {string}
   * @param value {Object}
   */
  var exports = function(key, value) {
    var _this = this;

    _this['key'] = key;
    _this['value'] = value;
  };

  /**
   * Constructs a <code>SecurityControlSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {SecurityControlSetting} obj Optional instance to populate.
   * @return {SecurityControlSetting} The populated <code>SecurityControlSetting</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {string} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;



  return exports;
}));


