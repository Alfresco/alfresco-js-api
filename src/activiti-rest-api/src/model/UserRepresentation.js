(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/GroupRepresentation', '../model/LightAppRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./GroupRepresentation'), require('./LightAppRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.UserRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.GroupRepresentation, root.ActivitiPublicRestApi.LightAppRepresentation);
  }
}(this, function(ApiClient, GroupRepresentation, LightAppRepresentation) {
  'use strict';




  /**
   * The UserRepresentation model module.
   * @module model/UserRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>UserRepresentation</code>.
   * @alias module:model/UserRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;





















  };

  /**
   * Constructs a <code>UserRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserRepresentation} obj Optional instance to populate.
   * @return {module:model/UserRepresentation} The populated <code>UserRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('apps')) {
        obj['apps'] = ApiClient.convertToType(data['apps'], [LightAppRepresentation]);
      }
      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = ApiClient.convertToType(data['company'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('fullname')) {
        obj['fullname'] = ApiClient.convertToType(data['fullname'], 'String');
      }
      if (data.hasOwnProperty('groups')) {
        obj['groups'] = ApiClient.convertToType(data['groups'], [GroupRepresentation]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('lastUpdate')) {
        obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Date');
      }
      if (data.hasOwnProperty('latestSyncTimeStamp')) {
        obj['latestSyncTimeStamp'] = ApiClient.convertToType(data['latestSyncTimeStamp'], 'Date');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
      if (data.hasOwnProperty('pictureId')) {
        obj['pictureId'] = ApiClient.convertToType(data['pictureId'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Integer');
      }
      if (data.hasOwnProperty('tenantName')) {
        obj['tenantName'] = ApiClient.convertToType(data['tenantName'], 'String');
      }
      if (data.hasOwnProperty('tenantPictureId')) {
        obj['tenantPictureId'] = ApiClient.convertToType(data['tenantPictureId'], 'Integer');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/LightAppRepresentation>} apps
   */
  exports.prototype['apps'] = undefined;
  /**
   * @member {string[]} capabilities
   */
  exports.prototype['capabilities'] = undefined;
  /**
   * @member {String} company
   */
  exports.prototype['company'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} externalId
   */
  exports.prototype['externalId'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {String} fullname
   */
  exports.prototype['fullname'] = undefined;
  /**
   * @member {Array.<module:model/GroupRepresentation>} groups
   */
  exports.prototype['groups'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {Date} lastUpdate
   */
  exports.prototype['lastUpdate'] = undefined;
  /**
   * @member {Date} latestSyncTimeStamp
   */
  exports.prototype['latestSyncTimeStamp'] = undefined;
  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;
  /**
   * @member {Integer} pictureId
   */
  exports.prototype['pictureId'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Integer} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {String} tenantName
   */
  exports.prototype['tenantName'] = undefined;
  /**
   * @member {Integer} tenantPictureId
   */
  exports.prototype['tenantPictureId'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;




  return exports;
}));


