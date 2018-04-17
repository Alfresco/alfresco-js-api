
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './PathInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./PathInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolder = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.PathInfo, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, PathInfo, UserInfo) {
  'use strict';




  /**
   * The UnfiledRecordFolder model module.
   * @module  UnfiledRecordFolder
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledRecordFolder</code>.
   * @alias UnfiledRecordFolder
   * @class
   * @param id {string}
   * @param parentId {string}
   * @param name {string} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @param nodeType {string}
   * @param isUnfiledRecordFolder {boolean}
   * @param isRecord {boolean}
   * @param modifiedAt {Date}
   * @param modifiedByUser {UserInfo}
   * @param createdAt {Date}
   * @param createdByUser {UserInfo}
   */
  var exports = function(id, parentId, name, nodeType, isUnfiledRecordFolder, isRecord, modifiedAt, modifiedByUser, createdAt, createdByUser) {
    var _this = this;

    _this['id'] = id;
    _this['parentId'] = parentId;
    _this['name'] = name;
    _this['nodeType'] = nodeType;
    _this['isUnfiledRecordFolder'] = isUnfiledRecordFolder;
    _this['isRecord'] = isRecord;
    _this['modifiedAt'] = modifiedAt;
    _this['modifiedByUser'] = modifiedByUser;
    _this['createdAt'] = createdAt;
    _this['createdByUser'] = createdByUser;




  };

  /**
   * Constructs a <code>UnfiledRecordFolder</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledRecordFolder} obj Optional instance to populate.
   * @return {UnfiledRecordFolder} The populated <code>UnfiledRecordFolder</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('isUnfiledRecordFolder')) {
        obj['isUnfiledRecordFolder'] = ApiClient.convertToType(data['isUnfiledRecordFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('isRecord')) {
        obj['isRecord'] = ApiClient.convertToType(data['isRecord'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = UserInfo.constructFromObject(data['createdByUser']);
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], Object);
      }
      if (data.hasOwnProperty('allowableOperations')) {
        obj['allowableOperations'] = ApiClient.convertToType(data['allowableOperations'], ['String']);
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = PathInfo.constructFromObject(data['path']);
      }
    }
    return obj;
  }

  /**
   * @member {string} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {string} parentId
   */
  exports.prototype['parentId'] = undefined;
  /**
   * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @member {string} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {string} nodeType
   */
  exports.prototype['nodeType'] = undefined;
  /**
   * @member {boolean} isUnfiledRecordFolder
   */
  exports.prototype['isUnfiledRecordFolder'] = undefined;
  /**
   * @member {boolean} isRecord
   */
  exports.prototype['isRecord'] = undefined;
  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;
  /**
   * @member {UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * @member {UserInfo} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;
  /**
   * @member {string[]} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;
  /**
   * @member {Object} properties
   */
  exports.prototype['properties'] = undefined;
  /**
   * @member {string[]} allowableOperations
   */
  exports.prototype['allowableOperations'] = undefined;
  /**
   * @member {PathInfo} path
   */
  exports.prototype['path'] = undefined;



  return exports;
}));


