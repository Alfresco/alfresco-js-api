(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './PathInfo', './PermissionsInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./PathInfo'), require('./PermissionsInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Node = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.PathInfo, root.AlfrescoCoreRestApi.PermissionsInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, PathInfo, PermissionsInfo, UserInfo) {
  'use strict';




  /**
   * The Node model module.
   * @module model/Node
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Node</code>.
   * @alias module:model/Node
   * @class
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

    _this['id'] = id;
    _this['name'] = name;
    _this['nodeType'] = nodeType;
    _this['isFolder'] = isFolder;
    _this['isFile'] = isFile;

    _this['modifiedAt'] = modifiedAt;
    _this['modifiedByUser'] = modifiedByUser;
    _this['createdAt'] = createdAt;
    _this['createdByUser'] = createdByUser;








  };

  /**
   * Constructs a <code>Node</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Node} obj Optional instance to populate.
   * @return {module:model/Node} The populated <code>Node</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
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
      if (data.hasOwnProperty('isLocked')) {
        obj['isLocked'] = ApiClient.convertToType(data['isLocked'], 'Boolean');
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
      if (data.hasOwnProperty('parentId')) {
        obj['parentId'] = ApiClient.convertToType(data['parentId'], 'String');
      }
      if (data.hasOwnProperty('isLink')) {
        obj['isLink'] = ApiClient.convertToType(data['isLink'], 'Boolean');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
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
      if (data.hasOwnProperty('path')) {
        obj['path'] = PathInfo.constructFromObject(data['path']);
      }
      if (data.hasOwnProperty('permissions')) {
        obj['permissions'] = PermissionsInfo.constructFromObject(data['permissions']);
      }
    }
    return obj;
  }

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


