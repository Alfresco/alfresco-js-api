/**
 * Alfresco Governance Services REST API
 * **GS Core API**  Provides access to the core features of Alfresco Governance Services.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './model/ChildAssociationInfo', './model/TransferContainerChild', './model/UserInfo'], factory);
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
   * @implements module:model/TransferContainerChild
   * @param id {String}
   * @param parentId {String}
   * @param name {String} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @param nodeType {String}
   * @param createdAt {Date}
   * @param createdByUser {module:model/UserInfo}
   */
  var exports = function(id, parentId, name, nodeType, createdAt, createdByUser) {
    var _this = this;

    TransferContainerChild.call(_this, id, parentId, name, nodeType, createdAt, createdByUser);

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

  /**
   * @member {module:model/ChildAssociationInfo} association
   */
  exports.prototype['association'] = undefined;

  // Implement TransferContainerChild interface:
  /**
   * @member {String} id
   */
exports.prototype['id'] = undefined;

  /**
   * @member {String} parentId
   */
exports.prototype['parentId'] = undefined;

  /**
   * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
exports.prototype['nodeType'] = undefined;

  /**
   * @member {Date} createdAt
   */
exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/UserInfo} createdByUser
   */
exports.prototype['createdByUser'] = undefined;

  /**
   * Present only for transfer nodes.
   * @member {Boolean} transferPDFIndicator
   * @default false
   */
exports.prototype['transferPDFIndicator'] = false;

  /**
   * Present only for transfer nodes.
   * @member {String} transferLocation
   */
exports.prototype['transferLocation'] = undefined;

  /**
   * Present only for transfer nodes.
   * @member {Boolean} transferAccessionIndicator
   * @default false
   */
exports.prototype['transferAccessionIndicator'] = false;

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



  return exports;
}));


