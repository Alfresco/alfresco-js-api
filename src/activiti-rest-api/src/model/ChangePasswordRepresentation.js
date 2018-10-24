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
    root.ActivitiPublicRestApi.ChangePasswordRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChangePasswordRepresentation model module.
   * @module model/ChangePasswordRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ChangePasswordRepresentation</code>.
   * @alias module:model/ChangePasswordRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ChangePasswordRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChangePasswordRepresentation} obj Optional instance to populate.
   * @return {module:model/ChangePasswordRepresentation} The populated <code>ChangePasswordRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('newPassword')) {
        obj['newPassword'] = ApiClient.convertToType(data['newPassword'], 'String');
      }
      if (data.hasOwnProperty('oldPassword')) {
        obj['oldPassword'] = ApiClient.convertToType(data['oldPassword'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} newPassword
   */
  exports.prototype['newPassword'] = undefined;
  /**
   * @member {String} oldPassword
   */
  exports.prototype['oldPassword'] = undefined;




  return exports;
}));


