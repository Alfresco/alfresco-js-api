(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ChildAssociationInfo', './ContentInfo', './PathInfo', './Record', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ChildAssociationInfo'), require('./ContentInfo'), require('./PathInfo'), require('./Record'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordFolderChildAssociation = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.ChildAssociationInfo, root.AlfrescoGovernanceServicesRestApi.ContentInfo, root.AlfrescoGovernanceServicesRestApi.PathInfo, root.AlfrescoGovernanceServicesRestApi.Record, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, ChildAssociationInfo, ContentInfo, PathInfo, Record, UserInfo) {
  'use strict';

  /**
   * The RecordFolderChildAssociation model module.
   * @module model/RecordFolderChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordFolderChildAssociation</code>.
   * @alias module:model/RecordFolderChildAssociation
   * @class
   * @extends module:model/Record
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
    Record.call(this, id, parentId, name, nodeType, modifiedAt, modifiedByUser, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>RecordFolderChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordFolderChildAssociation} obj Optional instance to populate.
   * @return {module:model/RecordFolderChildAssociation} The populated <code>RecordFolderChildAssociation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      Record.constructFromObject(data, obj);
      if (data.hasOwnProperty('association')) {
        obj['association'] = ChildAssociationInfo.constructFromObject(data['association']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(Record.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));
