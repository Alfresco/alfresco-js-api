(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './AssociationInfo', './ContentInfo', './Node', './PathInfo', './PermissionsInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./AssociationInfo'), require('./ContentInfo'), require('./Node'), require('./PathInfo'), require('./PermissionsInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssociation = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.AssociationInfo, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.Node, root.AlfrescoCoreRestApi.PathInfo, root.AlfrescoCoreRestApi.PermissionsInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, AssociationInfo, ContentInfo, Node, PathInfo, PermissionsInfo, UserInfo) {
  'use strict';




  /**
   * The NodeAssociation model module.
   * @module model/NodeAssociation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssociation</code>.
   * @alias module:model/NodeAssociation
   * @class
   * @implements module:model/Node
   * @param id {String}
   * @param name {String} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @param nodeType {String}
   * @param isFolder {Boolean}
   * @param isFile {Boolean}
   * @param modifiedAt {Date}
   * @param modifiedByUser {module:model/UserInfo}
   * @param createdAt {Date}
   * @param createdByUser {module:model/UserInfo}
   */
  var exports = function(id, name, nodeType, isFolder, isFile, modifiedAt, modifiedByUser, createdAt, createdByUser) {
    var _this = this;

    Node.call(_this, id, name, nodeType, isFolder, isFile, modifiedAt, modifiedByUser, createdAt, createdByUser);

  };

  /**
   * Constructs a <code>NodeAssociation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssociation} obj Optional instance to populate.
   * @return {module:model/NodeAssociation} The populated <code>NodeAssociation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      Node.constructFromObject(data, obj);
      if (data.hasOwnProperty('association')) {
        obj['association'] = AssociationInfo.constructFromObject(data['association']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AssociationInfo} association
   */
  exports.prototype['association'] = undefined;

  // Implement Node interface:
  /**
   * @member {String} id
   */
exports.prototype['id'] = undefined;

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
   * @member {Boolean} isFolder
   */
exports.prototype['isFolder'] = undefined;

  /**
   * @member {Boolean} isFile
   */
exports.prototype['isFile'] = undefined;

  /**
   * @member {Boolean} isLocked
   * @default false
   */
exports.prototype['isLocked'] = false;

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
   * @member {String} parentId
   */
exports.prototype['parentId'] = undefined;

  /**
   * @member {Boolean} isLink
   */
exports.prototype['isLink'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
exports.prototype['content'] = undefined;

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

  /**
   * @member {module:model/PathInfo} path
   */
exports.prototype['path'] = undefined;

  /**
   * @member {module:model/PermissionsInfo} permissions
   */
exports.prototype['permissions'] = undefined;



  return exports;
}));


