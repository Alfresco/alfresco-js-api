(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Preference'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Preference'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PreferenceEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Preference);
  }
}(this, function(ApiClient, Preference) {
  'use strict';

  /**
   * The PreferenceEntry model module.
   * @module model/PreferenceEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PreferenceEntry</code>.
   * @alias module:model/PreferenceEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>PreferenceEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreferenceEntry} obj Optional instance to populate.
   * @return {module:model/PreferenceEntry} The populated <code>PreferenceEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Preference.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Preference} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
