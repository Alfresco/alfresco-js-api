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


  /**
   * The Version model module.
   * @module model/Version
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Version</code>.
   * @alias module:model/Version
   * @class
   * @param id {String}
   * @param name {String} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @param nodeType {String}
   * @param isFolder {Boolean}
   * @param isFile {Boolean}
   * @param modifiedAt {Date}
   * @param modifiedByUser {module:model/Person}
   */
  var exports = function(id, name, nodeType, isFolder, isFile, modifiedAt, modifiedByUser) {
    var _this = this;

    _this['id'] = id;

    _this['name'] = name;
    _this['nodeType'] = nodeType;
    _this['isFolder'] = isFolder;
    _this['isFile'] = isFile;
    _this['modifiedAt'] = modifiedAt;
    _this['modifiedByUser'] = modifiedByUser;



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
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('versionComment')) {
        obj['versionComment'] = ApiClient.convertToType(data['versionComment'], 'String');
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
        obj['modifiedByUser'] = Person.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} versionComment
   */
  exports.prototype['versionComment'] = undefined;
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
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;
  /**
   * @member {module:model/Person} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;
  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;
  /**
   * @member {Array.<String>} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;
  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


