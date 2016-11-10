(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TenantEvent = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TenantEvent model module.
   * @module model/TenantEvent
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TenantEvent</code>.
   * @alias module:model/TenantEvent
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>TenantEvent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TenantEvent} obj Optional instance to populate.
   * @return {module:model/TenantEvent} The populated <code>TenantEvent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('eventTime')) {
        obj['eventTime'] = ApiClient.convertToType(data['eventTime'], 'Date');
      }
      if (data.hasOwnProperty('eventType')) {
        obj['eventType'] = ApiClient.convertToType(data['eventType'], 'String');
      }
      if (data.hasOwnProperty('extraInfo')) {
        obj['extraInfo'] = ApiClient.convertToType(data['extraInfo'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Integer');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'Integer');
      }
      if (data.hasOwnProperty('userName')) {
        obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Date} eventTime
   */
  exports.prototype['eventTime'] = undefined;
  /**
   * @member {String} eventType
   */
  exports.prototype['eventType'] = undefined;
  /**
   * @member {String} extraInfo
   */
  exports.prototype['extraInfo'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {Integer} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * @member {String} userName
   */
  exports.prototype['userName'] = undefined;




  return exports;
}));


