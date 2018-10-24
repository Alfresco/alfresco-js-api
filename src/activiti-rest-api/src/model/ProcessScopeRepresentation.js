(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/FormScopeRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./FormScopeRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessScopeRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.FormScopeRepresentation);
  }
}(this, function(ApiClient, FormScopeRepresentation) {
  'use strict';




  /**
   * The ProcessScopeRepresentation model module.
   * @module model/ProcessScopeRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessScopeRepresentation</code>.
   * @alias module:model/ProcessScopeRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;















  };

  /**
   * Constructs a <code>ProcessScopeRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessScopeRepresentation} obj Optional instance to populate.
   * @return {module:model/ProcessScopeRepresentation} The populated <code>ProcessScopeRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('activityIds')) {
        obj['activityIds'] = ApiClient.convertToType(data['activityIds'], ['String']);
      }
      if (data.hasOwnProperty('activityIdsByCollapsedSubProcessIdMap')) {
        obj['activityIdsByCollapsedSubProcessIdMap'] = ApiClient.convertToType(data['activityIdsByCollapsedSubProcessIdMap'], {'String': Array});
      }
      if (data.hasOwnProperty('activityIdsByDecisionTableIdMap')) {
        obj['activityIdsByDecisionTableIdMap'] = ApiClient.convertToType(data['activityIdsByDecisionTableIdMap'], {'String': Array});
      }
      if (data.hasOwnProperty('activityIdsByFormIdMap')) {
        obj['activityIdsByFormIdMap'] = ApiClient.convertToType(data['activityIdsByFormIdMap'], {'String': Array});
      }
      if (data.hasOwnProperty('activityIdsWithExcludedSubProcess')) {
        obj['activityIdsWithExcludedSubProcess'] = ApiClient.convertToType(data['activityIdsWithExcludedSubProcess'], ['String']);
      }
      if (data.hasOwnProperty('customStencilVariables')) {
        obj['customStencilVariables'] = ApiClient.convertToType(data['customStencilVariables'], {'String': Array});
      }
      if (data.hasOwnProperty('entityVariables')) {
        obj['entityVariables'] = ApiClient.convertToType(data['entityVariables'], {'String': Array});
      }
      if (data.hasOwnProperty('executionVariables')) {
        obj['executionVariables'] = ApiClient.convertToType(data['executionVariables'], {'String': Array});
      }
      if (data.hasOwnProperty('fieldToVariableMappings')) {
        obj['fieldToVariableMappings'] = ApiClient.convertToType(data['fieldToVariableMappings'], {'String': Array});
      }
      if (data.hasOwnProperty('forms')) {
        obj['forms'] = ApiClient.convertToType(data['forms'], [FormScopeRepresentation]);
      }
      if (data.hasOwnProperty('metadataVariables')) {
        obj['metadataVariables'] = ApiClient.convertToType(data['metadataVariables'], {'String': Array});
      }
      if (data.hasOwnProperty('modelId')) {
        obj['modelId'] = ApiClient.convertToType(data['modelId'], 'Integer');
      }
      if (data.hasOwnProperty('processModelType')) {
        obj['processModelType'] = ApiClient.convertToType(data['processModelType'], 'Integer');
      }
      if (data.hasOwnProperty('responseVariables')) {
        obj['responseVariables'] = ApiClient.convertToType(data['responseVariables'], {'String': Array});
      }
    }
    return obj;
  }

  /**
   * @member {string[]} activityIds
   */
  exports.prototype['activityIds'] = undefined;
  /**
   * @member {Object.<String, Array>} activityIdsByCollapsedSubProcessIdMap
   */
  exports.prototype['activityIdsByCollapsedSubProcessIdMap'] = undefined;
  /**
   * @member {Object.<String, Array>} activityIdsByDecisionTableIdMap
   */
  exports.prototype['activityIdsByDecisionTableIdMap'] = undefined;
  /**
   * @member {Object.<String, Array>} activityIdsByFormIdMap
   */
  exports.prototype['activityIdsByFormIdMap'] = undefined;
  /**
   * @member {string[]} activityIdsWithExcludedSubProcess
   */
  exports.prototype['activityIdsWithExcludedSubProcess'] = undefined;
  /**
   * @member {Object.<String, Array>} customStencilVariables
   */
  exports.prototype['customStencilVariables'] = undefined;
  /**
   * @member {Object.<String, Array>} entityVariables
   */
  exports.prototype['entityVariables'] = undefined;
  /**
   * @member {Object.<String, Array>} executionVariables
   */
  exports.prototype['executionVariables'] = undefined;
  /**
   * @member {Object.<String, Array>} fieldToVariableMappings
   */
  exports.prototype['fieldToVariableMappings'] = undefined;
  /**
   * @member {Array.<module:model/FormScopeRepresentation>} forms
   */
  exports.prototype['forms'] = undefined;
  /**
   * @member {Object.<String, Array>} metadataVariables
   */
  exports.prototype['metadataVariables'] = undefined;
  /**
   * @member {Integer} modelId
   */
  exports.prototype['modelId'] = undefined;
  /**
   * @member {Integer} processModelType
   */
  exports.prototype['processModelType'] = undefined;
  /**
   * @member {Object.<String, Array>} responseVariables
   */
  exports.prototype['responseVariables'] = undefined;




  return exports;
}));


