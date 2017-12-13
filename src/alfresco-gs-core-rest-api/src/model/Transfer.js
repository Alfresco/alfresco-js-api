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
   * @module model/Transfer
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Transfer</code>.
   * @alias module:model/Transfer
   * @class
   * @param id
   * @param parentId
   * @param name
   * @param nodeType
   * @param createdAt
   * @param createdByUser
   */
  var exports = function(id, parentId, name, nodeType, createdAt, createdByUser) {

    this['id'] = id;
    this['parentId'] = parentId;
    this['name'] = name;
    this['nodeType'] = nodeType;
    this['createdAt'] = createdAt;
    this['createdByUser'] = createdByUser;






  };

  /**
   * Constructs a <code>Transfer</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Transfer} obj Optional instance to populate.
   * @return {module:model/Transfer} The populated <code>Transfer</code> instance.
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
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} parentId
   */
  exports.prototype['parentId'] = undefined;

  /**
   * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.\nThe character . must not be used at the end of the name.\n
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
