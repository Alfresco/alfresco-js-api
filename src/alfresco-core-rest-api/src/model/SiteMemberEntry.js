(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteMember'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMemberEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMember);
  }
}(this, function(ApiClient, SiteMember) {
  'use strict';

  /**
   * The SiteMemberEntry model module.
   * @module model/SiteMemberEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMemberEntry</code>.
   * @alias module:model/SiteMemberEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteMemberEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMemberEntry} obj Optional instance to populate.
   * @return {module:model/SiteMemberEntry} The populated <code>SiteMemberEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = SiteMember.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMember} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
