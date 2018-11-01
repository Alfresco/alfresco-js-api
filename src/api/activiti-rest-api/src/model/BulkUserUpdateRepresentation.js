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
    root.ActivitiPublicRestApi.BulkUserUpdateRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BulkUserUpdateRepresentation model module.
   * @module model/BulkUserUpdateRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>BulkUserUpdateRepresentation</code>.
   * @alias module:model/BulkUserUpdateRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>BulkUserUpdateRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BulkUserUpdateRepresentation} obj Optional instance to populate.
   * @return {module:model/BulkUserUpdateRepresentation} The populated <code>BulkUserUpdateRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('accountType')) {
        obj['accountType'] = ApiClient.convertToType(data['accountType'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('sendNotifications')) {
        obj['sendNotifications'] = ApiClient.convertToType(data['sendNotifications'], 'Boolean');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Integer');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], ['Integer']);
      }
    }
    return obj;
  }

  /**
   * @member {String} accountType
   */
  exports.prototype['accountType'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Boolean} sendNotifications
   */
  exports.prototype['sendNotifications'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Integer} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {Array.<Integer>} users
   */
  exports.prototype['users'] = undefined;




  return exports;
}));


