(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FavoriteSitePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FavoriteSitePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteSitePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteSitePagingList);
  }
}(this, function(ApiClient, FavoriteSitePagingList) {
  'use strict';

  /**
   * The FavoriteSitePaging model module.
   * @module model/FavoriteSitePaging
   * @version 1
   */

  /**
   * Constructs a new <code>FavoriteSitePaging</code>.
   * @alias module:model/FavoriteSitePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>FavoriteSitePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteSitePaging} obj Optional instance to populate.
   * @return {module:model/FavoriteSitePaging} The populated <code>FavoriteSitePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = FavoriteSitePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/FavoriteSitePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
