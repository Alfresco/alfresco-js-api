
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
   * @module  TransferContainerChildAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferContainerChildAssociation</code>.
   * @alias TransferContainerChildAssociation
   * @class
   * @implements moduleTransferContainerChild
   * @param id {string}
   * @param parentId {string}
   * @param name {string} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @param nodeType {string}
   * @param createdAt {Date}
   * @param createdByUser {UserInfo}
   */
  var exports = function(id, parentId, name, nodeType, createdAt, createdByUser) {
    var _this = this;

    TransferContainerChild.call(_this, id, parentId, name, nodeType, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>TransferContainerChildAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TransferContainerChildAssociation} obj Optional instance to populate.
   * @return {TransferContainerChildAssociation} The populated <code>TransferContainerChildAssociation</code> instance.
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

  /**
   * @member {ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;

  // Implement TransferContainerChild interface:
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
   * @member {Date} createdAt
   */
exports.prototype['createdAt'] = undefined;

  /**
   * @member {UserInfo} createdByUser
   */
exports.prototype['createdByUser'] = undefined;

  /**
   * Present only for transfer nodes.
   * @member {boolean} transferPDFIndicator
   * @default false
   */
exports.prototype['transferPDFIndicator'] = false;

  /**
   * Present only for transfer nodes.
   * @member {string} transferLocation
   */
exports.prototype['transferLocation'] = undefined;

  /**
   * Present only for transfer nodes.
   * @member {boolean} transferAccessionIndicator
   * @default false
   */
exports.prototype['transferAccessionIndicator'] = false;

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



  return exports;
}));


