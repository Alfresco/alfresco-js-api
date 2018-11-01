(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.ModuleInfo = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ModuleInfo model module.
   * @module model/ModuleInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ModuleInfo</code>.
   * @alias module:model/ModuleInfo
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>ModuleInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModuleInfo} obj Optional instance to populate.
   * @return {module:model/ModuleInfo} The populated <code>ModuleInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('installDate')) {
        obj['installDate'] = ApiClient.convertToType(data['installDate'], 'Date');
      }
      if (data.hasOwnProperty('installState')) {
        obj['installState'] = ApiClient.convertToType(data['installState'], 'String');
      }
      if (data.hasOwnProperty('versionMin')) {
        obj['versionMin'] = ApiClient.convertToType(data['versionMin'], 'String');
      }
      if (data.hasOwnProperty('versionMax')) {
        obj['versionMax'] = ApiClient.convertToType(data['versionMax'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {string} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {string} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {string} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {string} version
   */
  exports.prototype['version'] = undefined;

  /**
   * @member {Date} installDate
   */
  exports.prototype['installDate'] = undefined;

  /**
   * @member {string} installState
   */
  exports.prototype['installState'] = undefined;

  /**
   * @member {string} versionMin
   */
  exports.prototype['versionMin'] = undefined;

  /**
   * @member {string} versionMax
   */
  exports.prototype['versionMax'] = undefined;




  return exports;
}));
