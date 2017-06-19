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
    root.AlfrescoCoreRestApi.AssociationInfo = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AssociationInfo model module.
   * @module model/AssociationInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>AssociationInfo</code>.
   * @alias module:model/AssociationInfo
   * @class
   * @param assocType {String}
   */
  var exports = function(assocType) {
    var _this = this;

    _this['assocType'] = assocType;
  };

  /**
   * Constructs a <code>AssociationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AssociationInfo} obj Optional instance to populate.
   * @return {module:model/AssociationInfo} The populated <code>AssociationInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('assocType')) {
        obj['assocType'] = ApiClient.convertToType(data['assocType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} assocType
   */
  exports.prototype['assocType'] = undefined;



  return exports;
}));


