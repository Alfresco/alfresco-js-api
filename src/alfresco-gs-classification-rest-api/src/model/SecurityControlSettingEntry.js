(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './SecurityControlSetting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./SecurityControlSetting'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSettingEntry = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.SecurityControlSetting);
  }
}(this, function(ApiClient, SecurityControlSetting) {
  'use strict';

  /**
   * The SecurityControlSettingEntry model module.
   * @module model/SecurityControlSettingEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityControlSettingEntry</code>.
   * @alias module:model/SecurityControlSettingEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SecurityControlSettingEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityControlSettingEntry} obj Optional instance to populate.
   * @return {module:model/SecurityControlSettingEntry} The populated <code>SecurityControlSettingEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = SecurityControlSetting.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SecurityControlSetting} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
