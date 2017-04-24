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
    root.AlfrescoContentServicesRestApi.StatusInfo = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The StatusInfo model module.
   * @module model/StatusInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>StatusInfo</code>.
   * @alias module:model/StatusInfo
   * @class
   * @param isReadOnly
   * @param isAuditEnabled
   * @param isQuickShareEnabled
   * @param isThumbnailGenerationEnabled
   */
  var exports = function(isReadOnly, isAuditEnabled, isQuickShareEnabled, isThumbnailGenerationEnabled) {

    this['isReadOnly'] = isReadOnly;
    this['isAuditEnabled'] = isAuditEnabled;
    this['isQuickShareEnabled'] = isQuickShareEnabled;
    this['isThumbnailGenerationEnabled'] = isThumbnailGenerationEnabled;
  };

  /**
   * Constructs a <code>StatusInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StatusInfo} obj Optional instance to populate.
   * @return {module:model/StatusInfo} The populated <code>StatusInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isReadOnly')) {
        obj['isReadOnly'] = ApiClient.convertToType(data['isReadOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('isAuditEnabled')) {
        obj['isAuditEnabled'] = ApiClient.convertToType(data['isAuditEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('isQuickShareEnabled')) {
        obj['isQuickShareEnabled'] = ApiClient.convertToType(data['isQuickShareEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('isThumbnailGenerationEnabled')) {
        obj['isThumbnailGenerationEnabled'] = ApiClient.convertToType(data['isThumbnailGenerationEnabled'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {Boolean} isReadOnly
   * @default false
   */
  exports.prototype['isReadOnly'] = false;

  /**
   * @member {Boolean} isAuditEnabled
   */
  exports.prototype['isAuditEnabled'] = undefined;

  /**
   * @member {Boolean} isQuickShareEnabled
   */
  exports.prototype['isQuickShareEnabled'] = undefined;

  /**
   * @member {Boolean} isThumbnailGenerationEnabled
   */
  exports.prototype['isThumbnailGenerationEnabled'] = undefined;




  return exports;
}));
