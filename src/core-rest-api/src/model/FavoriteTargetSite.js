(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.FavoriteTargetSite = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FavoriteTargetSite model module.
   * @module model/FavoriteTargetSite
   * @version 1
   */

  /**
   * Constructs a new <code>FavoriteTargetSite</code>.
   * @alias module:model/FavoriteTargetSite
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>FavoriteTargetSite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteTargetSite} obj Optional instance to populate.
   * @return {module:model/FavoriteTargetSite} The populated <code>FavoriteTargetSite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;




  return exports;
}));
