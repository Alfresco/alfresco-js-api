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
    root.AlfrescoCoreRestApi.NodeBodyLock = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The NodeBodyLock model module.
   * @module model/NodeBodyLock
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeBodyLock</code>.
   * @alias module:model/NodeBodyLock
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>NodeBodyLock</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeBodyLock} obj Optional instance to populate.
   * @return {module:model/NodeBodyLock} The populated <code>NodeBodyLock</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('timeToExpire')) {
        obj['timeToExpire'] = ApiClient.convertToType(data['timeToExpire'], 'Number');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('lifetime')) {
        obj['lifetime'] = ApiClient.convertToType(data['lifetime'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} timeToExpire
   */
  exports.prototype['timeToExpire'] = undefined;
  /**
   * @member {module:model/NodeBodyLock.TypeEnum} type
   * @default 'ALLOW_OWNER_CHANGES'
   */
  exports.prototype['type'] = 'ALLOW_OWNER_CHANGES';
  /**
   * @member {module:model/NodeBodyLock.LifetimeEnum} lifetime
   * @default 'PERSISTENT'
   */
  exports.prototype['lifetime'] = 'PERSISTENT';


  /**
   * Allowed values for the <code>type</code> property.
   * @enum {String}
   * @readonly
   */
  exports.TypeEnum = {
    /**
     * value: "ALLOW_OWNER_CHANGES"
     * @const
     */
    "ALLOW_OWNER_CHANGES": "ALLOW_OWNER_CHANGES",
    /**
     * value: "FULL"
     * @const
     */
    "FULL": "FULL"  };

  /**
   * Allowed values for the <code>lifetime</code> property.
   * @enum {String}
   * @readonly
   */
  exports.LifetimeEnum = {
    /**
     * value: "PERSISTENT"
     * @const
     */
    "PERSISTENT": "PERSISTENT",
    /**
     * value: "EPHEMERAL"
     * @const
     */
    "EPHEMERAL": "EPHEMERAL"  };


  return exports;
}));


