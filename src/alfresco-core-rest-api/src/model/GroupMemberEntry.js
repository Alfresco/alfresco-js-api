(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './GroupMember'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupMember'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupMemberEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.GroupMember);
  }
}(this, function(ApiClient, GroupMember) {
  'use strict';

  /**
   * The GroupMemberEntry model module.
   * @module model/GroupMemberEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupMemberEntry</code>.
   * @alias module:model/GroupMemberEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>GroupMemberEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupMemberEntry} obj Optional instance to populate.
   * @return {module:model/GroupMemberEntry} The populated <code>GroupMemberEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = GroupMember.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/GroupMember} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
