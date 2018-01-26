(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ClassPropertyDescription = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassPropertyDescription model module.
   * @module model/ClassPropertyDescription
   * @ClassPropertyDescription 0.1.0
   */

  /**
   * Constructs a new <code>ClassPropertyDescription</code>.
   * @alias module:model/ClassPropertyDescription
   * @class 
   * @param dataType
   * @param defaultValue
   * @param description
   * @param enforced
   * @param indexed
   * @param mandatory
   * @param multiValued
   * @param name
   * @param protected
   * @param title
   * @param url
   */
  var exports = function(dataType, defaultValue, description, enforced, indexed, mandatory, multiValued, name, protectedParam, title, url) {
    this['dataType'] = dataType;
    this['defaultValue'] = defaultValue;
    this['description'] = description;
    this['enforced'] = enforced;
    this['indexed'] = indexed;
    this['mandatory'] = mandatory;
    this['multiValued'] = multiValued;
    this['name'] = name;
    this['protected'] = protectedParam;
    this['title'] = title;
    this['url'] = url;
  };

  /**
   * Constructs a <code>ClassPropertyDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassPropertyDescription} obj Optional instance to populate.
   * @return {module:model/ClassPropertyDescription} The populated <code>ClassPropertyDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('dataType')) {
        obj['dataType'] = ApiClient.convertToType(data['dataType'], 'String');
      }
      if (data.hasOwnProperty('defaultValue')) {
        obj['defaultValue'] = ApiClient.convertToType(data['defaultValue'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }      
      if (data.hasOwnProperty('enforced')) {
        obj['enforced'] = ApiClient.convertToType(data['enforced'], 'Boolean');
      }
      if (data.hasOwnProperty('indexed')) {
        obj['indexed'] = ApiClient.convertToType(data['indexed'], 'Boolean');
      }
      if (data.hasOwnProperty('mandatory')) {
        obj['mandatory'] = ApiClient.convertToType(data['mandatory'], 'Boolean');
      }
      if (data.hasOwnProperty('multiValued')) {
        obj['multiValued'] = ApiClient.convertToType(data['multiValued'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('protected')) {
        obj['protected'] = ApiClient.convertToType(data['protected'], 'Boolean');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }      
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }      
    }
    return obj;
  }


  /**
   * @member {String} dataType
   */
  exports.prototype['dataType'] = undefined;

  /**
   * @member {String} defaultValue
   */
  exports.prototype['defaultValue'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {Boolean} enforced
   */
  exports.prototype['enforced'] = undefined;

  /**
   * @member {Boolean} indexed
   */
  exports.prototype['indexed'] = undefined;

  /**
   * @member {Boolean} mandatory
   */
  exports.prototype['mandatory'] = undefined;

  /**
   * @member {Boolean} multiValued
   */
  exports.prototype['multiValued'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Boolean} protected
   */
  exports.prototype['protected'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {String} url
   */
  exports.prototype['url'] = undefined;

  return exports;
}));
