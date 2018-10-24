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
    root.AlfrescoCoreRestApi.PermissionElement = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PermissionElement model module.
   * @module model/PermissionElement
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PermissionElement</code>.
   * @alias module:model/PermissionElement
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PermissionElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionElement} obj Optional instance to populate.
   * @return {module:model/PermissionElement} The populated <code>PermissionElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('authorityId')) {
        obj['authorityId'] = ApiClient.convertToType(data['authorityId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('accessStatus')) {
        obj['accessStatus'] = ApiClient.convertToType(data['accessStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} authorityId
   */
  exports.prototype['authorityId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {module:model/PermissionElement.AccessStatusEnum} accessStatus
   * @default 'ALLOWED'
   */
  exports.prototype['accessStatus'] = 'ALLOWED';


  /**
   * Allowed values for the <code>accessStatus</code> property.
   * @enum {String}
   * @readonly
   */
  exports.AccessStatusEnum = {
    /**
     * value: "ALLOWED"
     * @const
     */
    "ALLOWED": "ALLOWED",
    /**
     * value: "DENIED"
     * @const
     */
    "DENIED": "DENIED"  };


  return exports;
}));


