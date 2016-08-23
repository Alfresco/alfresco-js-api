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
    root.AlfrescoCoreRestApi.Favorite = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Favorite model module.
   * @module model/Favorite
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Favorite</code>.
   * A favorite describes an Alfresco entity that a person has marked as a favorite.\nThe target can be a site, file or folder.\n
   * @alias module:model/Favorite
   * @class
   * @param targetGuid
   * @param target
   */
  var exports = function(targetGuid, target) {

    this['targetGuid'] = targetGuid;

    this['target'] = target;
  };

  /**
   * Constructs a <code>Favorite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Favorite} obj Optional instance to populate.
   * @return {module:model/Favorite} The populated <code>Favorite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('targetGuid')) {
        obj['targetGuid'] = ApiClient.convertToType(data['targetGuid'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('target')) {
        obj['target'] = ApiClient.convertToType(data['target'], Object);
      }
    }
    return obj;
  }


  /**
   * The guid of the object that is a favorite.
   * @member {String} targetGuid
   */
  exports.prototype['targetGuid'] = undefined;

  /**
   * The time the object was made a favorite.
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {Object} target
   */
  exports.prototype['target'] = undefined;




  return exports;
}));
