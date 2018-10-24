(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FavoriteSite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FavoriteSite'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteSiteEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteSite);
  }
}(this, function(ApiClient, FavoriteSite) {
  'use strict';

  /**
   * The FavoriteSiteEntry model module.
   * @module model/FavoriteSiteEntry
   * @version 1
   */

  /**
   * Constructs a new <code>FavoriteSiteEntry</code>.
   * @alias module:model/FavoriteSiteEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>FavoriteSiteEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteSiteEntry} obj Optional instance to populate.
   * @return {module:model/FavoriteSiteEntry} The populated <code>FavoriteSiteEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = FavoriteSite.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/FavoriteSite} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
