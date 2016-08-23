(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './FavoriteTargetSite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FavoriteTargetSite'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteTarget = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.FavoriteTargetSite);
  }
}(this, function(ApiClient, FavoriteTargetSite) {
  'use strict';

  /**
   * The FavoriteTarget model module.
   * @module model/FavoriteTarget
   * @version 1
   */

  /**
   * Constructs a new <code>FavoriteTarget</code>.
   * @alias module:model/FavoriteTarget
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>FavoriteTarget</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteTarget} obj Optional instance to populate.
   * @return {module:model/FavoriteTarget} The populated <code>FavoriteTarget</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('site')) {
        obj['site'] = FavoriteTargetSite.constructFromObject(data['site']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/FavoriteTargetSite} site
   */
  exports.prototype['site'] = undefined;




  return exports;
}));
