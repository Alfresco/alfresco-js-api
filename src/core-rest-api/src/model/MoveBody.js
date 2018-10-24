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
    root.AlfrescoCoreRestApi.MoveBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The MoveBody model module.
   * @module model/MoveBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>MoveBody</code>.
   * @alias module:model/MoveBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>MoveBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MoveBody} obj Optional instance to populate.
   * @return {module:model/MoveBody} The populated <code>MoveBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('targetParentId')) {
        obj['targetParentId'] = ApiClient.convertToType(data['targetParentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} targetParentId
   */
  exports.prototype['targetParentId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));
