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
    root.AlfrescoCoreRestApi.SiteContainer = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteContainer model module.
   * @module model/SiteContainer
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteContainer</code>.
   * @alias module:model/SiteContainer
   * @class
   * @param id
   * @param folderId
   */
  var exports = function(id, folderId) {

    this['id'] = id;
    this['folderId'] = folderId;
  };

  /**
   * Constructs a <code>SiteContainer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteContainer} obj Optional instance to populate.
   * @return {module:model/SiteContainer} The populated <code>SiteContainer</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('folderId')) {
        obj['folderId'] = ApiClient.convertToType(data['folderId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} folderId
   */
  exports.prototype['folderId'] = undefined;




  return exports;
}));
