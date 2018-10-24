(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Version'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Version'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VersionEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Version);
  }
}(this, function(ApiClient, Version) {
  'use strict';

  /**
   * The VersionEntry model module.
   * @module model/VersionEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VersionEntry</code>.
   * @alias module:model/VersionEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>VersionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VersionEntry} obj Optional instance to populate.
   * @return {module:model/VersionEntry} The populated <code>VersionEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Version.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Version} entry
   */
  exports.prototype['entry'] = undefined;

  return exports;
}));
