(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PreferencePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PreferencePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PreferencePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PreferencePagingList);
  }
}(this, function(ApiClient, PreferencePagingList) {
  'use strict';

  /**
   * The PreferencePaging model module.
   * @module model/PreferencePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PreferencePaging</code>.
   * @alias module:model/PreferencePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PreferencePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PreferencePaging} obj Optional instance to populate.
   * @return {module:model/PreferencePaging} The populated <code>PreferencePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = PreferencePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/PreferencePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
