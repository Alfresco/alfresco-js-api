
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.Transfer = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.UserInfo);
  }
}(this, function(ApiClient, UserInfo) {
  'use strict';




  /**
   * The Transfer model module.
   * @module  Transfer
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Transfer</code>.
   * @alias Transfer
   * @class
   * @param id {string}
   * @param parentId {string}
   * @param name {string} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @param nodeType {string}
   * @param createdAt {Date}
   * @param createdByUser {UserInfo}
   */
  var exports = function(id, parentId, name, nodeType, createdAt, createdByUser) {
    var _this = this;

    _this['id'] = id;
    _this['parentId'] = parentId;
    _this['name'] = name;
    _this['nodeType'] = nodeType;
    _this['createdAt'] = createdAt;
    _this['createdByUser'] = createdByUser;






  };

  /**
   * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {Transfer} obj Optional instance to populate.
   * @return {Transfer} The populated <code>Transfer</code> instance.
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
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = UserInfo.constructFromObject(data['createdByUser']);
      }
      if (data.hasOwnProperty('transferPDFIndicator')) {
        obj['transferPDFIndicator'] = ApiClient.convertToType(data['transferPDFIndicator'], 'Boolean');
      }
      if (data.hasOwnProperty('transferLocation')) {
        obj['transferLocation'] = ApiClient.convertToType(data['transferLocation'], 'String');
      }
      if (data.hasOwnProperty('transferAccessionIndicator')) {
        obj['transferAccessionIndicator'] = ApiClient.convertToType(data['transferAccessionIndicator'], 'Boolean');
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
    }
    return obj;
  }

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


