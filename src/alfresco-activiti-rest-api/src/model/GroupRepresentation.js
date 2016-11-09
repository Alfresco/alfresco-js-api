(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/GroupCapabilityRepresentation', '../model/GroupRepresentation', '../model/UserRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./GroupCapabilityRepresentation'), require('./GroupRepresentation'), require('./UserRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.GroupRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.GroupCapabilityRepresentation, root.ActivitiPublicRestApi.GroupRepresentation, root.ActivitiPublicRestApi.UserRepresentation);
  }
}(this, function(ApiClient, GroupCapabilityRepresentation, GroupRepresentation, UserRepresentation) {
  'use strict';




  /**
   * The GroupRepresentation model module.
   * @module model/GroupRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>GroupRepresentation</code>.
   * @alias module:model/GroupRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>GroupRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupRepresentation} obj Optional instance to populate.
   * @return {module:model/GroupRepresentation} The populated <code>GroupRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], [GroupCapabilityRepresentation]);
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [GroupRepresentation]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastSyncTimeStamp')) {
        obj['lastSyncTimeStamp'] = ApiClient.convertToType(data['lastSyncTimeStamp'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parentGroupId')) {
        obj['parentGroupId'] = ApiClient.convertToType(data['parentGroupId'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'Integer');
      }
      if (data.hasOwnProperty('userCount')) {
        obj['userCount'] = ApiClient.convertToType(data['userCount'], 'Integer');
      }
      if (data.hasOwnProperty('users')) {
        obj['users'] = ApiClient.convertToType(data['users'], [UserRepresentation]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/GroupCapabilityRepresentation>} capabilities
   */
  exports.prototype['capabilities'] = undefined;
  /**
   * @member {String} externalId
   */
  exports.prototype['externalId'] = undefined;
  /**
   * @member {Array.<module:model/GroupRepresentation>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} lastSyncTimeStamp
   */
  exports.prototype['lastSyncTimeStamp'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Integer} parentGroupId
   */
  exports.prototype['parentGroupId'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Integer} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {Integer} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Integer} userCount
   */
  exports.prototype['userCount'] = undefined;
  /**
   * @member {Array.<module:model/UserRepresentation>} users
   */
  exports.prototype['users'] = undefined;




  return exports;
}));


