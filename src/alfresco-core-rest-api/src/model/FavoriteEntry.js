(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Favorite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Favorite'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Favorite);
  }
}(this, function(ApiClient, Favorite) {
  'use strict';

  /**
   * The FavoriteEntry model module.
   * @module model/FavoriteEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoriteEntry</code>.
   * @alias module:model/FavoriteEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>FavoriteEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteEntry} obj Optional instance to populate.
   * @return {module:model/FavoriteEntry} The populated <code>FavoriteEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Favorite.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Favorite} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
