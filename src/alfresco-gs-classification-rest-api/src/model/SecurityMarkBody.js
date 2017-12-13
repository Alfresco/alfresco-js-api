(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityMarkBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SecurityMarkBody model module.
   * @module model/SecurityMarkBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityMarkBody</code>.
   * @alias module:model/SecurityMarkBody
   * @class
   * @param id
   * @param groupId
   */
  var exports = function(id, groupId) {

    this['id'] = id;
    this['groupId'] = groupId;
  };

  /**
   * Constructs a <code>SecurityMarkBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityMarkBody} obj Optional instance to populate.
   * @return {module:model/SecurityMarkBody} The populated <code>SecurityMarkBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} groupId
   */
  exports.prototype['groupId'] = undefined;




  return exports;
}));
