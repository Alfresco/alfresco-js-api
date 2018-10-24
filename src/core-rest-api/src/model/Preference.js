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
    root.AlfrescoCoreRestApi.Preference = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Preference model module.
   * @module model/Preference
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Preference</code>.
   * A specific preference.\n
   * @alias module:model/Preference
   * @class
   * @param id
   * @param value
   */
  var exports = function(id, value) {

    this['id'] = id;
    this['value'] = value;
  };

  /**
   * Constructs a <code>Preference</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Preference} obj Optional instance to populate.
   * @return {module:model/Preference} The populated <code>Preference</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], 'String');
      }
    }
    return obj;
  }


  /**
   * The unique id of the preference
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The value of the preference. Note that this can be of any JSON type.
   * @member {String} value
   */
  exports.prototype['value'] = undefined;




  return exports;
}));
