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
    root.AlfrescoCoreRestApi.FavoriteBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FavoriteBody model module.
   * @module model/FavoriteBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FavoriteBody</code>.
   * @alias module:model/FavoriteBody
   * @class
   * @param target
   */
  var exports = function(target) {

    this['target'] = target;
  };

  /**
   * Constructs a <code>FavoriteBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteBody} obj Optional instance to populate.
   * @return {module:model/FavoriteBody} The populated <code>FavoriteBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], Object);
      }
    }
    return obj;
  }


  /**
   * @member {Object} target
   */
  exports.prototype['target'] = undefined;




  return exports;
}));
