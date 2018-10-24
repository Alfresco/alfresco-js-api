(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Company = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Company model module.
   * @module model/Company
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Company</code>.
   * @alias module:model/Company
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>Company</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Company} obj Optional instance to populate.
   * @return {module:model/Company} The populated <code>Company</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('organization')) {
        obj['organization'] = ApiClient.convertToType(data['organization'], 'String');
      }
      if (data.hasOwnProperty('address1')) {
        obj['address1'] = ApiClient.convertToType(data['address1'], 'String');
      }
      if (data.hasOwnProperty('address2')) {
        obj['address2'] = ApiClient.convertToType(data['address2'], 'String');
      }
      if (data.hasOwnProperty('address3')) {
        obj['address3'] = ApiClient.convertToType(data['address3'], 'String');
      }
      if (data.hasOwnProperty('postcode')) {
        obj['postcode'] = ApiClient.convertToType(data['postcode'], 'String');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
      if (data.hasOwnProperty('fax')) {
        obj['fax'] = ApiClient.convertToType(data['fax'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} organization
   */
  exports.prototype['organization'] = undefined;

  /**
   * @member {String} address1
   */
  exports.prototype['address1'] = undefined;

  /**
   * @member {String} address2
   */
  exports.prototype['address2'] = undefined;

  /**
   * @member {String} address3
   */
  exports.prototype['address3'] = undefined;

  /**
   * @member {String} postcode
   */
  exports.prototype['postcode'] = undefined;

  /**
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;

  /**
   * @member {String} fax
   */
  exports.prototype['fax'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;




  return exports;
}));
