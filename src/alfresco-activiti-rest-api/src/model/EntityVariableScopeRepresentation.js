(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/EntityAttributeScopeRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./EntityAttributeScopeRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.EntityVariableScopeRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.EntityAttributeScopeRepresentation);
  }
}(this, function(ApiClient, EntityAttributeScopeRepresentation) {
  'use strict';




  /**
   * The EntityVariableScopeRepresentation model module.
   * @module model/EntityVariableScopeRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>EntityVariableScopeRepresentation</code>.
   * @alias module:model/EntityVariableScopeRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>EntityVariableScopeRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityVariableScopeRepresentation} obj Optional instance to populate.
   * @return {module:model/EntityVariableScopeRepresentation} The populated <code>EntityVariableScopeRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('attributes')) {
        obj['attributes'] = ApiClient.convertToType(data['attributes'], [EntityAttributeScopeRepresentation]);
      }
      if (data.hasOwnProperty('entityName')) {
        obj['entityName'] = ApiClient.convertToType(data['entityName'], 'String');
      }
      if (data.hasOwnProperty('mappedDataModel')) {
        obj['mappedDataModel'] = ApiClient.convertToType(data['mappedDataModel'], 'Integer');
      }
      if (data.hasOwnProperty('mappedVariableName')) {
        obj['mappedVariableName'] = ApiClient.convertToType(data['mappedVariableName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/EntityAttributeScopeRepresentation>} attributes
   */
  exports.prototype['attributes'] = undefined;
  /**
   * @member {String} entityName
   */
  exports.prototype['entityName'] = undefined;
  /**
   * @member {Integer} mappedDataModel
   */
  exports.prototype['mappedDataModel'] = undefined;
  /**
   * @member {String} mappedVariableName
   */
  exports.prototype['mappedVariableName'] = undefined;




  return exports;
}));


