(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ClassPropertyDescription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClassPropertyDescription'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ClassDescription = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ClassPropertyDescription);
  }
}(this, function(ApiClient, ClassPropertyDescription) {
  'use strict';

  /**
   * The ClassDescription model module.
   * @module model/ClassDescription
   * @ClassDescription 0.1.0
   */

  /**
   * Constructs a new <code>ClassDescription</code>.
   * @alias module:model/ClassDescription
   * @class
   * @param associations
   * @param childassociations
   * @param defaultAspects
   * @param description
   * @param isAspect
   * @param isContainer
   * @param name
   * @param parent
   * @param properties
   * @param title
   * @param url
   */
  var exports = function(associations, childassociations, defaultAspects, description, isAspect, isContainer, name, parent, properties, title, url) {
    this['associations'] = associations;
    this['childassociations'] = childassociations;
    this['defaultAspects'] = defaultAspects;
    this['description'] = description;
    this['isAspect'] = isAspect;
    this['isContainer'] = isContainer;
    this['name'] = name;
    this['parent'] = parent;
    this['properties'] = properties;
    this['title'] = title;
    this['url'] = url;
  };

  /**
   * Constructs a <code>ClassDescription</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassDescription} obj Optional instance to populate.
   * @return {module:model/ClassDescription} The populated <code>ClassDescription</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('associations')) {
        obj['associations'] = ApiClient.convertToType(data['associations'], 'Object');
      }
      if (data.hasOwnProperty('childassociations')) {
        obj['childassociations'] = ApiClient.convertToType(data['childassociations'], 'Object');
      }
      if (data.hasOwnProperty('defaultAspects')) {
        obj['defaultAspects'] = ApiClient.convertToType(data['defaultAspects'], 'Object');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }      
      if (data.hasOwnProperty('isAspect')) {
        obj['isAspect'] = ApiClient.convertToType(data['isAspect'], 'Boolean');
      }
      if (data.hasOwnProperty('isContainer')) {
        obj['isContainer'] = ApiClient.convertToType(data['isContainer'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parent')) {
        obj['parent'] = ApiClient.convertToType(data['parent'], 'Object');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': ClassPropertyDescription});
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
   * @member {Object} associations
   */
  exports.prototype['associations'] = undefined;

  /**
   * @member {Object} childassociations
   */
  exports.prototype['childassociations'] = undefined;

  /**
   * @member {Object} defaultAspects
   */
  exports.prototype['defaultAspects'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {Boolean} isAspect
   */
  exports.prototype['isAspect'] = undefined;

  /**
   * @member {Boolean} isContainer
   */
  exports.prototype['isContainer'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Object} parent
   */
  exports.prototype['parent'] = undefined;

  /**
   * @member {Object.<String, ClassPropertyDescription>} properties
   */
  exports.prototype['properties'] = undefined;

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
