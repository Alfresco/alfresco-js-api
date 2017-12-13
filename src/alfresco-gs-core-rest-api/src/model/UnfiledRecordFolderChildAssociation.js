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
   * @module model/UnfiledRecordFolderChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledRecordFolderChildAssociation</code>.
   * @alias module:model/UnfiledRecordFolderChildAssociation
   * @class
   * @extends module:model/UnfiledRecordFolderChild
   * @param id
   * @param parentId
   * @param name
   * @param nodeType
   * @param isUnfiledRecordFolder
   * @param isRecord
   * @param modifiedAt
   * @param modifiedByUser
   * @param createdAt
   * @param createdByUser
   */
  var exports = function(id, parentId, name, nodeType, isUnfiledRecordFolder, isRecord, modifiedAt, modifiedByUser, createdAt, createdByUser) {
    UnfiledRecordFolderChild.call(this, id, parentId, name, nodeType, isUnfiledRecordFolder, isRecord, modifiedAt, modifiedByUser, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>UnfiledRecordFolderChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnfiledRecordFolderChildAssociation} obj Optional instance to populate.
   * @return {module:model/UnfiledRecordFolderChildAssociation} The populated <code>UnfiledRecordFolderChildAssociation</code> instance.
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

  exports.prototype = Object.create(UnfiledRecordFolderChild.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));
