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
    root.AlfrescoContentServicesRestApi.EntitlementsInfo = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EntitlementsInfo model module.
   * @module model/EntitlementsInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>EntitlementsInfo</code>.
   * @alias module:model/EntitlementsInfo
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>EntitlementsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntitlementsInfo} obj Optional instance to populate.
   * @return {module:model/EntitlementsInfo} The populated <code>EntitlementsInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('maxUsers')) {
        obj['maxUsers'] = ApiClient.convertToType(data['maxUsers'], 'Integer');
      }
      if (data.hasOwnProperty('maxDocs')) {
        obj['maxDocs'] = ApiClient.convertToType(data['maxDocs'], 'Integer');
      }
      if (data.hasOwnProperty('isClusterEnabled')) {
        obj['isClusterEnabled'] = ApiClient.convertToType(data['isClusterEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('isCryptodocEnabled')) {
        obj['isCryptodocEnabled'] = ApiClient.convertToType(data['isCryptodocEnabled'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} maxUsers
   */
  exports.prototype['maxUsers'] = undefined;

  /**
   * @member {Integer} maxDocs
   */
  exports.prototype['maxDocs'] = undefined;

  /**
   * @member {Boolean} isClusterEnabled
   * @default false
   */
  exports.prototype['isClusterEnabled'] = false;

  /**
   * @member {Boolean} isCryptodocEnabled
   * @default false
   */
  exports.prototype['isCryptodocEnabled'] = false;




  return exports;
}));
