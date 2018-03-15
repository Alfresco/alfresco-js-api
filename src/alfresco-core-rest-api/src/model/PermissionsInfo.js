(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PermissionElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PermissionElement'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PermissionsInfo = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PermissionElement);
  }
}(this, function(ApiClient, PermissionElement) {
  'use strict';




  /**
   * The PermissionsInfo model module.
   * @module model/PermissionsInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PermissionsInfo</code>.
   * @alias module:model/PermissionsInfo
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PermissionsInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PermissionsInfo} obj Optional instance to populate.
   * @return {module:model/PermissionsInfo} The populated <code>PermissionsInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isInheritanceEnabled')) {
        obj['isInheritanceEnabled'] = ApiClient.convertToType(data['isInheritanceEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('inherited')) {
        obj['inherited'] = ApiClient.convertToType(data['inherited'], [PermissionElement]);
      }
      if (data.hasOwnProperty('locallySet')) {
        obj['locallySet'] = ApiClient.convertToType(data['locallySet'], [PermissionElement]);
      }
      if (data.hasOwnProperty('settable')) {
        obj['settable'] = ApiClient.convertToType(data['settable'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} isInheritanceEnabled
   */
  exports.prototype['isInheritanceEnabled'] = undefined;
  /**
   * @member {Array.<module:model/PermissionElement>} inherited
   */
  exports.prototype['inherited'] = undefined;
  /**
   * @member {Array.<module:model/PermissionElement>} locallySet
   */
  exports.prototype['locallySet'] = undefined;
  /**
   * @member {string[]} settable
   */
  exports.prototype['settable'] = undefined;



  return exports;
}));


