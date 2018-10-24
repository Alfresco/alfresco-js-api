(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './EntitlementsInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./EntitlementsInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.LicenseInfo = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.EntitlementsInfo);
  }
}(this, function(ApiClient, EntitlementsInfo) {
  'use strict';

  /**
   * The LicenseInfo model module.
   * @module model/LicenseInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>LicenseInfo</code>.
   * @alias module:model/LicenseInfo
   * @class
   * @param issuedAt
   * @param expiresAt
   * @param remainingDays
   * @param holder
   * @param mode
   */
  var exports = function(issuedAt, expiresAt, remainingDays, holder, mode) {

    this['issuedAt'] = issuedAt;
    this['expiresAt'] = expiresAt;
    this['remainingDays'] = remainingDays;
    this['holder'] = holder;
    this['mode'] = mode;

  };

  /**
   * Constructs a <code>LicenseInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LicenseInfo} obj Optional instance to populate.
   * @return {module:model/LicenseInfo} The populated <code>LicenseInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('issuedAt')) {
        obj['issuedAt'] = ApiClient.convertToType(data['issuedAt'], 'Date');
      }
      if (data.hasOwnProperty('expiresAt')) {
        obj['expiresAt'] = ApiClient.convertToType(data['expiresAt'], 'Date');
      }
      if (data.hasOwnProperty('remainingDays')) {
        obj['remainingDays'] = ApiClient.convertToType(data['remainingDays'], 'Integer');
      }
      if (data.hasOwnProperty('holder')) {
        obj['holder'] = ApiClient.convertToType(data['holder'], 'String');
      }
      if (data.hasOwnProperty('mode')) {
        obj['mode'] = ApiClient.convertToType(data['mode'], 'String');
      }
      if (data.hasOwnProperty('entitlements')) {
        obj['entitlements'] = EntitlementsInfo.constructFromObject(data['entitlements']);
      }
    }
    return obj;
  }


  /**
   * @member {Date} issuedAt
   */
  exports.prototype['issuedAt'] = undefined;

  /**
   * @member {Date} expiresAt
   */
  exports.prototype['expiresAt'] = undefined;

  /**
   * @member {Integer} remainingDays
   */
  exports.prototype['remainingDays'] = undefined;

  /**
   * @member {string} holder
   */
  exports.prototype['holder'] = undefined;

  /**
   * @member {string} mode
   */
  exports.prototype['mode'] = undefined;

  /**
   * @member {module:model/EntitlementsInfo} entitlements
   */
  exports.prototype['entitlements'] = undefined;




  return exports;
}));
