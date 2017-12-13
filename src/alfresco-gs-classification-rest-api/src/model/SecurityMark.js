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
    root.AlfrescoGovernanceServicesSecurityControls.SecurityMark = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SecurityMark model module.
   * @module model/SecurityMark
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityMark</code>.
   * @alias module:model/SecurityMark
   * @class
   * @param id
   * @param name
   * @param groupId
   * @param groupName
   * @param groupType
   */
  var exports = function(id, name, groupId, groupName, groupType) {

    this['id'] = id;
    this['name'] = name;
    this['groupId'] = groupId;
    this['groupName'] = groupName;
    this['groupType'] = groupType;
  };

  /**
   * Constructs a <code>SecurityMark</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityMark} obj Optional instance to populate.
   * @return {module:model/SecurityMark} The populated <code>SecurityMark</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('groupId')) {
        obj['groupId'] = ApiClient.convertToType(data['groupId'], 'String');
      }
      if (data.hasOwnProperty('groupName')) {
        obj['groupName'] = ApiClient.convertToType(data['groupName'], 'String');
      }
      if (data.hasOwnProperty('groupType')) {
        obj['groupType'] = ApiClient.convertToType(data['groupType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} groupId
   */
  exports.prototype['groupId'] = undefined;

  /**
   * @member {String} groupName
   */
  exports.prototype['groupName'] = undefined;

  /**
   * @member {String} groupType
   */
  exports.prototype['groupType'] = undefined;




  return exports;
}));
