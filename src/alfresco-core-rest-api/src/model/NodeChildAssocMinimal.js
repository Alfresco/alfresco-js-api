(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ChildAssocInfo', './ContentInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ChildAssocInfo'), require('./ContentInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocMinimal = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ChildAssocInfo, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ChildAssocInfo, ContentInfo, UserInfo) {
  'use strict';

  /**
   * The NodeChildAssocMinimal model module.
   * @module model/NodeChildAssocMinimal
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocMinimal</code>.
   * @alias module:model/NodeChildAssocMinimal
   * @class
   */
  var exports = function() {













  };

  /**
   * Constructs a <code>NodeChildAssocMinimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocMinimal} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocMinimal} The populated <code>NodeChildAssocMinimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

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
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('isFile')) {
        obj['isFile'] = ApiClient.convertToType(data['isFile'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('createdByUser')) {
        obj['createdByUser'] = UserInfo.constructFromObject(data['createdByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('association')) {
        obj['association'] = ChildAssocInfo.constructFromObject(data['association']);
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
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;

  /**
   * @member {Boolean} isFile
   */
  exports.prototype['isFile'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/UserInfo} createdByUser
   */
  exports.prototype['createdByUser'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {module:model/ChildAssocInfo} association
   */
  exports.prototype['association'] = undefined;




  return exports;
}));
