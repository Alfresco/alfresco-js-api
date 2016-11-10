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
    root.ActivitiPublicRestApi.VariableScopeRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VariableScopeRepresentation model module.
   * @module model/VariableScopeRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>VariableScopeRepresentation</code>.
   * @alias module:model/VariableScopeRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>VariableScopeRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VariableScopeRepresentation} obj Optional instance to populate.
   * @return {module:model/VariableScopeRepresentation} The populated <code>VariableScopeRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('mapVariable')) {
        obj['mapVariable'] = ApiClient.convertToType(data['mapVariable'], 'String');
      }
      if (data.hasOwnProperty('mappedColumn')) {
        obj['mappedColumn'] = ApiClient.convertToType(data['mappedColumn'], 'String');
      }
      if (data.hasOwnProperty('mappedDataModel')) {
        obj['mappedDataModel'] = ApiClient.convertToType(data['mappedDataModel'], 'Integer');
      }
      if (data.hasOwnProperty('mappedEntity')) {
        obj['mappedEntity'] = ApiClient.convertToType(data['mappedEntity'], 'String');
      }
      if (data.hasOwnProperty('mappedVariableName')) {
        obj['mappedVariableName'] = ApiClient.convertToType(data['mappedVariableName'], 'String');
      }
      if (data.hasOwnProperty('processVariableName')) {
        obj['processVariableName'] = ApiClient.convertToType(data['processVariableName'], 'String');
      }
      if (data.hasOwnProperty('processVariableType')) {
        obj['processVariableType'] = ApiClient.convertToType(data['processVariableType'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} mapVariable
   */
  exports.prototype['mapVariable'] = undefined;
  /**
   * @member {String} mappedColumn
   */
  exports.prototype['mappedColumn'] = undefined;
  /**
   * @member {Integer} mappedDataModel
   */
  exports.prototype['mappedDataModel'] = undefined;
  /**
   * @member {String} mappedEntity
   */
  exports.prototype['mappedEntity'] = undefined;
  /**
   * @member {String} mappedVariableName
   */
  exports.prototype['mappedVariableName'] = undefined;
  /**
   * @member {String} processVariableName
   */
  exports.prototype['processVariableName'] = undefined;
  /**
   * @member {String} processVariableType
   */
  exports.prototype['processVariableType'] = undefined;




  return exports;
}));


