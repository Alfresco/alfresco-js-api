(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ChildAssociationInfo', './PathInfo', './TransferChild', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ChildAssociationInfo'), require('./PathInfo'), require('./TransferChild'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferChildAssociation = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.ChildAssociationInfo, root.AlfrescoGovernanceServicesRestApi.PathInfo, root.AlfrescoGovernanceServicesRestApi.TransferChild, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, ChildAssociationInfo, PathInfo, TransferChild, UserInfo) {
  'use strict';

  /**
   * The TransferChildAssociation model module.
   * @module model/TransferChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferChildAssociation</code>.
   * @alias module:model/TransferChildAssociation
   * @class
   * @extends module:model/TransferChild
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
    TransferChild.call(this, id, parentId, name, nodeType, modifiedAt, modifiedByUser, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>TransferChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferChildAssociation} obj Optional instance to populate.
   * @return {module:model/TransferChildAssociation} The populated <code>TransferChildAssociation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      TransferChild.constructFromObject(data, obj);
      if (data.hasOwnProperty('association')) {
        obj['association'] = ChildAssociationInfo.constructFromObject(data['association']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(TransferChild.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));
