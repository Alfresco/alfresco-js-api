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
    root.AlfrescoCoreRestApi.ChildAssocInfo = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ChildAssocInfo model module.
   * @module model/ChildAssocInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ChildAssocInfo</code>.
   * @alias module:model/ChildAssocInfo
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>ChildAssocInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChildAssocInfo} obj Optional instance to populate.
   * @return {module:model/ChildAssocInfo} The populated <code>ChildAssocInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
      if (data.hasOwnProperty('isPrimary')) {
        obj['isPrimary'] = ApiClient.convertToType(data['isPrimary'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;

  /**
   * @member {Boolean} isPrimary
   */
  exports.prototype['isPrimary'] = undefined;




  return exports;
}));
