(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/AppDefinitionRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./AppDefinitionRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AppDefinitionUpdateResultRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.AppDefinitionRepresentation);
  }
}(this, function(ApiClient, AppDefinitionRepresentation) {
  'use strict';




  /**
   * The AppDefinitionUpdateResultRepresentation model module.
   * @module model/AppDefinitionUpdateResultRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>AppDefinitionUpdateResultRepresentation</code>.
   * @alias module:model/AppDefinitionUpdateResultRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>AppDefinitionUpdateResultRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppDefinitionUpdateResultRepresentation} obj Optional instance to populate.
   * @return {module:model/AppDefinitionUpdateResultRepresentation} The populated <code>AppDefinitionUpdateResultRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('appDefinition')) {
        obj['appDefinition'] = AppDefinitionRepresentation.constructFromObject(data['appDefinition']);
      }
      if (data.hasOwnProperty('customData')) {
        obj['customData'] = ApiClient.convertToType(data['customData'], Object);
      }
      if (data.hasOwnProperty('error')) {
        obj['error'] = ApiClient.convertToType(data['error'], 'Boolean');
      }
      if (data.hasOwnProperty('errorDescription')) {
        obj['errorDescription'] = ApiClient.convertToType(data['errorDescription'], 'String');
      }
      if (data.hasOwnProperty('errorType')) {
        obj['errorType'] = ApiClient.convertToType(data['errorType'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('messageKey')) {
        obj['messageKey'] = ApiClient.convertToType(data['messageKey'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/AppDefinitionRepresentation} appDefinition
   */
  exports.prototype['appDefinition'] = undefined;
  /**
   * @member {Object} customData
   */
  exports.prototype['customData'] = undefined;
  /**
   * @member {Boolean} error
   */
  exports.prototype['error'] = undefined;
  /**
   * @member {String} errorDescription
   */
  exports.prototype['errorDescription'] = undefined;
  /**
   * @member {Integer} errorType
   */
  exports.prototype['errorType'] = undefined;
  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;
  /**
   * @member {String} messageKey
   */
  exports.prototype['messageKey'] = undefined;




  return exports;
}));


