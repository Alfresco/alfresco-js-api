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
    root.AlfrescoCoreRestApi.FavoriteSite = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The FavoriteSite model module.
   * @module model/FavoriteSite
   * @version 1
   */

  /**
   * Constructs a new <code>FavoriteSite</code>.
   * @alias module:model/FavoriteSite
   * @class
   * @param id
   * @param title
   * @param visibility
   */
  var exports = function(id, title, visibility) {

    this['id'] = id;
    this['title'] = title;

    this['visibility'] = visibility;
  };

  /**
   * Constructs a <code>FavoriteSite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FavoriteSite} obj Optional instance to populate.
   * @return {module:model/FavoriteSite} The populated <code>FavoriteSite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {module:model/FavoriteSite.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: PRIVATE
     * @const
     */
    PRIVATE: "PRIVATE",

    /**
     * value: MODERATED
     * @const
     */
    MODERATED: "MODERATED",

    /**
     * value: PUBLIC
     * @const
     */
    PUBLIC: "PUBLIC"
  };

  return exports;
}));
