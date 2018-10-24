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
    root.AlfrescoCoreRestApi.SharedLinkBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SharedLinkBody model module.
   * @module model/SharedLinkBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SharedLinkBody</code>.
   * @alias module:model/SharedLinkBody
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SharedLinkBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SharedLinkBody} obj Optional instance to populate.
   * @return {module:model/SharedLinkBody} The populated <code>SharedLinkBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('nodeId')) {
        obj['nodeId'] = ApiClient.convertToType(data['nodeId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} nodeId
   */
  exports.prototype['nodeId'] = undefined;




  return exports;
}));
