(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Activity'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Activity'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ActivityEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Activity);
  }
}(this, function(ApiClient, Activity) {
  'use strict';

  /**
   * The ActivityEntry model module.
   * @module model/ActivityEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ActivityEntry</code>.
   * @alias module:model/ActivityEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ActivityEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityEntry} obj Optional instance to populate.
   * @return {module:model/ActivityEntry} The populated <code>ActivityEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Activity.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Activity} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
