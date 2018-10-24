(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.VersionInfo = factory(root.AlfrescoContentServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VersionInfo model module.
   * @module model/VersionInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VersionInfo</code>.
   * @alias module:model/VersionInfo
   * @class
   * @param major
   * @param minor
   * @param patch
   * @param hotfix
   * @param schema
   * @param label
   * @param display
   */
  var exports = function(major, minor, patch, hotfix, schema, label, display) {

    this['major'] = major;
    this['minor'] = minor;
    this['patch'] = patch;
    this['hotfix'] = hotfix;
    this['schema'] = schema;
    this['label'] = label;
    this['display'] = display;
  };

  /**
   * Constructs a <code>VersionInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VersionInfo} obj Optional instance to populate.
   * @return {module:model/VersionInfo} The populated <code>VersionInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('major')) {
        obj['major'] = ApiClient.convertToType(data['major'], 'String');
      }
      if (data.hasOwnProperty('minor')) {
        obj['minor'] = ApiClient.convertToType(data['minor'], 'String');
      }
      if (data.hasOwnProperty('patch')) {
        obj['patch'] = ApiClient.convertToType(data['patch'], 'String');
      }
      if (data.hasOwnProperty('hotfix')) {
        obj['hotfix'] = ApiClient.convertToType(data['hotfix'], 'String');
      }
      if (data.hasOwnProperty('schema')) {
        obj['schema'] = ApiClient.convertToType(data['schema'], 'Integer');
      }
      if (data.hasOwnProperty('label')) {
        obj['label'] = ApiClient.convertToType(data['label'], 'String');
      }
      if (data.hasOwnProperty('display')) {
        obj['display'] = ApiClient.convertToType(data['display'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {string} major
   */
  exports.prototype['major'] = undefined;

  /**
   * @member {string} minor
   */
  exports.prototype['minor'] = undefined;

  /**
   * @member {string} patch
   */
  exports.prototype['patch'] = undefined;

  /**
   * @member {string} hotfix
   */
  exports.prototype['hotfix'] = undefined;

  /**
   * @member {Integer} schema
   */
  exports.prototype['schema'] = undefined;

  /**
   * @member {string} label
   */
  exports.prototype['label'] = undefined;

  /**
   * @member {string} display
   */
  exports.prototype['display'] = undefined;




  return exports;
}));
