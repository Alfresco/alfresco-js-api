(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ChildAssociationInfo', './TransferContainerChild', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ChildAssociationInfo'), require('./TransferContainerChild'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferContainerChildAssociation = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.ChildAssociationInfo, root.AlfrescoGovernanceServicesRestApi.TransferContainerChild, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, ChildAssociationInfo, TransferContainerChild, UserInfo) {
  'use strict';

  /**
   * The TransferContainerChildAssociation model module.
   * @module model/TransferContainerChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferContainerChildAssociation</code>.
   * @alias module:model/TransferContainerChildAssociation
   * @class
   * @extends module:model/TransferContainerChild
   * @param id
   * @param parentId
   * @param name
   * @param nodeType
   * @param createdAt
   * @param createdByUser
   */
  var exports = function(id, parentId, name, nodeType, createdAt, createdByUser) {
    TransferContainerChild.call(this, id, parentId, name, nodeType, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>TransferContainerChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferContainerChildAssociation} obj Optional instance to populate.
   * @return {module:model/TransferContainerChildAssociation} The populated <code>TransferContainerChildAssociation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      TransferContainerChild.constructFromObject(data, obj);
      if (data.hasOwnProperty('association')) {
        obj['association'] = ChildAssociationInfo.constructFromObject(data['association']);
      }
    }
    return obj;
  }

  exports.prototype = Object.create(TransferContainerChild.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));
