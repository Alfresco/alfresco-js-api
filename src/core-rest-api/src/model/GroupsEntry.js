(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Group'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Group'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupsEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Group);
  }
}(this, function(ApiClient, Group) {
  'use strict';

  /**
   * The GroupsEntry model module.
   * @module model/GroupsEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupsEntry</code>.
   * @alias module:model/GroupsEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>GroupsEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupsEntry} obj Optional instance to populate.
   * @return {module:model/GroupsEntry} The populated <code>GroupsEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Group.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Group} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
