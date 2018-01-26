
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.ChildAssociationInfo = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChildAssociationInfo model module.
   * @module  ChildAssociationInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ChildAssociationInfo</code>.
   * @alias ChildAssociationInfo
   * @class
   * @param assocType {string}
   * @param isPrimary {boolean}
   */
  var exports = function(assocType, isPrimary) {
    var _this = this;

    _this['assocType'] = assocType;
    _this['isPrimary'] = isPrimary;
  };

  /**
   * Constructs a <code>ChildAssociationInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ChildAssociationInfo} obj Optional instance to populate.
   * @return {ChildAssociationInfo} The populated <code>ChildAssociationInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
   * @member {string} assocType
   */
  exports.prototype['assocType'] = undefined;
  /**
   * @member {boolean} isPrimary
   */
  exports.prototype['isPrimary'] = undefined;



  return exports;
}));


