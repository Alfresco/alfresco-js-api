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
    root.AlfrescoCoreRestApi.AssocTargetBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AssocTargetBody model module.
   * @module model/AssocTargetBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AssocTargetBody</code>.
   * @alias module:model/AssocTargetBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>AssocTargetBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssocTargetBody} obj Optional instance to populate.
   * @return {module:model/AssocTargetBody} The populated <code>AssocTargetBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('targetId')) {
        obj['targetId'] = ApiClient.convertToType(data['targetId'], 'String');
      }
      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} targetId
   */
  exports.prototype['targetId'] = undefined;

  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;




  return exports;
}));
