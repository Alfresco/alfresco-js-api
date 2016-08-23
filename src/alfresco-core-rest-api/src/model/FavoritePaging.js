(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FavoritePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FavoritePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoritePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoritePagingList);
  }
}(this, function(ApiClient, FavoritePagingList) {
  'use strict';

  /**
   * The FavoritePaging model module.
   * @module model/FavoritePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoritePaging</code>.
   * @alias module:model/FavoritePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>FavoritePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoritePaging} obj Optional instance to populate.
   * @return {module:model/FavoritePaging} The populated <code>FavoritePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = FavoritePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/FavoritePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
