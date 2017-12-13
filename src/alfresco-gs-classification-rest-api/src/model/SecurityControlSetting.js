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
   * @module model/SecurityControlSetting
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityControlSetting</code>.
   * @alias module:model/SecurityControlSetting
   * @class
   * @param key
   * @param value
   */
  var exports = function(key, value) {

    this['key'] = key;
    this['value'] = value;
  };

  /**
   * Constructs a <code>SecurityControlSetting</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityControlSetting} obj Optional instance to populate.
   * @return {module:model/SecurityControlSetting} The populated <code>SecurityControlSetting</code> instance.
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
   * @member {String} key
   */
  exports.prototype['key'] = undefined;

  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));
