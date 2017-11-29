(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Person', './ContentInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Person'), require('./ContentInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Version = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person, root.AlfrescoCoreRestApi.ContentInfo);
  }
}(this, function(ApiClient, Person, ContentInfo) {
  'use strict';

  /**
   * The Version model module.
   * @module model/Version
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Version</code>.
   * @alias module:model/Version
   * @class
   * @param id
   * @param content
   * @param isFile
   * @param isFolder
   * @param modifiedAt
   * @param modifiedByUser
   * @param name
   * @param nodeType
   */
  var exports = function(id, content, isFile, isFolder, modifiedAt, modifiedByUser, name, nodeType) {

    this['id'] = id;
    this['content'] = content;
    this['isFile'] = isFile;
    this['isFolder'] = isFolder;
    this['modifiedAt'] = modifiedAt;
    this['modifiedByUser'] = modifiedByUser;
    this['name'] = name;
    this['nodeType'] = nodeType;
  };

  /**
   * Constructs a <code>Version</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Version} obj Optional instance to populate.
   * @return {module:model/Version} The populated <code>Version</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('isFile')) {
        obj['isFile'] = ApiClient.convertToType(data['isFile'], 'Boolean');
      }
      if (data.hasOwnProperty('isFolder')) {
        obj['isFolder'] = ApiClient.convertToType(data['isFolder'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = Person.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {Boolean} isFile
   */
  exports.prototype['isFile'] = undefined;

  /**
   * @member {Boolean} isFolder
   */
  exports.prototype['isFolder'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/Person} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  return exports;
}));
