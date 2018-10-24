
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ChildAssociationInfo', './PathInfo', './UnfiledRecordFolderChild', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ChildAssociationInfo'), require('./PathInfo'), require('./UnfiledRecordFolderChild'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChildAssociation = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.ChildAssociationInfo, root.AlfrescoGovernanceServicesRestApi.PathInfo, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChild, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, ChildAssociationInfo, PathInfo, UnfiledRecordFolderChild, UserInfo) {
  'use strict';




  /**
   * The UnfiledRecordFolderChildAssociation model module.
   * @module  UnfiledRecordFolderChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledRecordFolderChildAssociation</code>.
   * @alias UnfiledRecordFolderChildAssociation
   * @class
   * @implements moduleUnfiledRecordFolderChild
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

    UnfiledRecordFolderChild.call(_this, id, parentId, name, nodeType, isUnfiledRecordFolder, isRecord, modifiedAt, modifiedByUser, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>UnfiledRecordFolderChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledRecordFolderChildAssociation} obj Optional instance to populate.
   * @return {UnfiledRecordFolderChildAssociation} The populated <code>UnfiledRecordFolderChildAssociation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      UnfiledRecordFolderChild.constructFromObject(data, obj);
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

  // Implement UnfiledRecordFolderChild interface:
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


