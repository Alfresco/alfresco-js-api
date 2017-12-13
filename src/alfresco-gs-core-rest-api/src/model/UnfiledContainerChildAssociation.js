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
   * @module model/UnfiledContainerChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledContainerChildAssociation</code>.
   * @alias module:model/UnfiledContainerChildAssociation
   * @class
   * @extends module:model/UnfiledContainerChild
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
    UnfiledContainerChild.call(this, id, parentId, name, nodeType, isUnfiledRecordFolder, isRecord, modifiedAt, modifiedByUser, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>UnfiledContainerChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnfiledContainerChildAssociation} obj Optional instance to populate.
   * @return {module:model/UnfiledContainerChildAssociation} The populated <code>UnfiledContainerChildAssociation</code> instance.
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

  exports.prototype = Object.create(UnfiledContainerChild.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));
