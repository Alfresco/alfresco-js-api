(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AppDefinitionRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AppDefinitionRepresentation model module.
   * @module model/AppDefinitionRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>AppDefinitionRepresentation</code>.
   * @alias module:model/AppDefinitionRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>AppDefinitionRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppDefinitionRepresentation} obj Optional instance to populate.
   * @return {module:model/AppDefinitionRepresentation} The populated <code>AppDefinitionRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('defaultAppId')) {
        obj['defaultAppId'] = ApiClient.convertToType(data['defaultAppId'], 'String');
      }
      if (data.hasOwnProperty('deploymentId')) {
        obj['deploymentId'] = ApiClient.convertToType(data['deploymentId'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('modelId')) {
        obj['modelId'] = ApiClient.convertToType(data['modelId'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Integer');
      }
      if (data.hasOwnProperty('theme')) {
        obj['theme'] = ApiClient.convertToType(data['theme'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} defaultAppId
   */
  exports.prototype['defaultAppId'] = undefined;
  /**
   * @member {String} deploymentId
   */
  exports.prototype['deploymentId'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} modelId
   */
  exports.prototype['modelId'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Integer} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {String} theme
   */
  exports.prototype['theme'] = undefined;




  return exports;
}));


