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
    root.AlfrescoGovernanceServicesRestApi.TransferChild = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.PathInfo, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, PathInfo, UserInfo) {
  'use strict';

  /**
   * The TransferChild model module.
   * @module model/TransferChild
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferChild</code>.
   * @alias module:model/TransferChild
   * @class
   * @param id
   * @param parentId
   * @param name
   * @param nodeType
   * @param modifiedAt
   * @param modifiedByUser
   * @param createdAt
   * @param createdByUser
   */
  var exports = function(id, parentId, name, nodeType, modifiedAt, modifiedByUser, createdAt, createdByUser) {

    this['id'] = id;
    this['parentId'] = parentId;
    this['name'] = name;
    this['nodeType'] = nodeType;



    this['modifiedAt'] = modifiedAt;
    this['modifiedByUser'] = modifiedByUser;
    this['createdAt'] = createdAt;
    this['createdByUser'] = createdByUser;




  };

  /**
   * Constructs a <code>TransferChild</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferChild} obj Optional instance to populate.
   * @return {module:model/TransferChild} The populated <code>TransferChild</code> instance.
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
      if (data.hasOwnProperty('isRecordFolder')) {
        obj['isRecordFolder'] = ApiClient.convertToType(data['isRecordFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('isRecord')) {
        obj['isRecord'] = ApiClient.convertToType(data['isRecord'], 'Boolean');
      }
      if (data.hasOwnProperty('isClosed')) {
        obj['isClosed'] = ApiClient.convertToType(data['isClosed'], 'Boolean');
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
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;

  /**
   * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.\nThe character . must not be used at the end of the name.\n
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Boolean} isRecordFolder
   * @default false
   */
  exports.prototype['isRecordFolder'] = false;

  /**
   * @member {Boolean} isRecord
   * @default false
   */
  exports.prototype['isRecord'] = false;

  /**
   * Indicates if the record folder is closed
   * @member {Boolean} isClosed
   * @default false
   */
  exports.prototype['isClosed'] = false;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/UserInfo} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;

  /**
   * @member {Array.<String>} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;

  /**
   * @member {Object} properties
   */
  exports.prototype['properties'] = undefined;

  /**
   * @member {Array.<String>} allowableOperations
   */
  exports.prototype['allowableOperations'] = undefined;

  /**
   * @member {module:model/PathInfo} path
   */
  exports.prototype['path'] = undefined;




  return exports;
}));
