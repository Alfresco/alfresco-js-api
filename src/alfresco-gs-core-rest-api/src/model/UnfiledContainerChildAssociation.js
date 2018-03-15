
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ChildAssociationInfo', './PathInfo', './UnfiledContainerChild', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ChildAssociationInfo'), require('./PathInfo'), require('./UnfiledContainerChild'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledContainerChildAssociation = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.ChildAssociationInfo, root.AlfrescoGovernanceServicesRestApi.PathInfo, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerChild, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, ChildAssociationInfo, PathInfo, UnfiledContainerChild, UserInfo) {
  'use strict';




  /**
   * The UnfiledContainerChildAssociation model module.
   * @module  UnfiledContainerChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledContainerChildAssociation</code>.
   * @alias UnfiledContainerChildAssociation
   * @class
   * @implements moduleUnfiledContainerChild
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

    UnfiledContainerChild.call(_this, id, parentId, name, nodeType, isUnfiledRecordFolder, isRecord, modifiedAt, modifiedByUser, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>UnfiledContainerChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledContainerChildAssociation} obj Optional instance to populate.
   * @return {UnfiledContainerChildAssociation} The populated <code>UnfiledContainerChildAssociation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      UnfiledContainerChild.constructFromObject(data, obj);
      if (data.hasOwnProperty('association')) {
        obj['association'] = ChildAssociationInfo.constructFromObject(data['association']);
      }
    }
    return obj;
  }

  /**
   * @member {ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;

  // Implement UnfiledContainerChild interface:
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


