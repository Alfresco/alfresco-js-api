(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Tag'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Tag'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Tag);
  }
}(this, function(ApiClient, Tag) {
  'use strict';

  /**
   * The TagEntry model module.
   * @module model/TagEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagEntry</code>.
   * @alias module:model/TagEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>TagEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagEntry} obj Optional instance to populate.
   * @return {module:model/TagEntry} The populated <code>TagEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Tag.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Tag} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
