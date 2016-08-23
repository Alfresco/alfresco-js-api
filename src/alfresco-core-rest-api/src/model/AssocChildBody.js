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
    root.AlfrescoCoreRestApi.AssocChildBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The AssocChildBody model module.
   * @module model/AssocChildBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AssocChildBody</code>.
   * @alias module:model/AssocChildBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>AssocChildBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssocChildBody} obj Optional instance to populate.
   * @return {module:model/AssocChildBody} The populated <code>AssocChildBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('childId')) {
        obj['childId'] = ApiClient.convertToType(data['childId'], 'String');
      }
      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} childId
   */
  exports.prototype['childId'] = undefined;

  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;




  return exports;
}));
