(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/LightUserRepresentation', '../model/RestVariable'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./LightUserRepresentation'), require('./RestVariable'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessInstanceAuditRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightUserRepresentation, root.ActivitiPublicRestApi.RestVariable);
  }
}(this, function(ApiClient, LightUserRepresentation, RestVariable) {
  'use strict';




  /**
   * The ProcessInstanceAuditRepresentation model module.
   * @module model/ProcessInstanceAuditRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessInstanceAuditRepresentation</code>.
   * @alias module:model/ProcessInstanceAuditRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>ProcessInstanceAuditRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessInstanceAuditRepresentation} obj Optional instance to populate.
   * @return {module:model/ProcessInstanceAuditRepresentation} The populated <code>ProcessInstanceAuditRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('processInstanceId')) {
        obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'Integer');
      }
      if (data.hasOwnProperty('processInstanceName')) {
        obj['processInstanceName'] = ApiClient.convertToType(data['processInstanceName'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionName')) {
        obj['processDefinitionName'] = ApiClient.convertToType(data['processDefinitionName'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionVersion')) {
        obj['processDefinitionVersion'] = ApiClient.convertToType(data['processDefinitionVersion'], 'Integer');
      }
      if (data.hasOwnProperty('processInstanceStartTime')) {
        obj['processInstanceStartTime'] = ApiClient.convertToType(data['processInstanceStartTime'], 'Date');
      }
      if (data.hasOwnProperty('processInstanceEndTime')) {
        obj['processInstanceEndTime'] = ApiClient.convertToType(data['processInstanceEndTime'], 'Date');
      }
      if (data.hasOwnProperty('processInstanceInitiator')) {
        obj['processInstanceInitiator'] = ApiClient.convertToType(data['processInstanceInitiator'], 'String');
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [Object]);
      }
      if (data.hasOwnProperty('decisionInfo')) {
        obj['decisionInfo'] = ApiClient.convertToType(data['decisionInfo'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} processInstanceId
   */
  exports.prototype['processInstanceId'] = undefined;
  /**
   * @member {String} processInstanceName
   */
  exports.prototype['processInstanceName'] = undefined;
  /**
   * @member {String} processDefinitionName
   */
  exports.prototype['processDefinitionName'] = undefined;
  /**
   * @member {String} processDefinitionVersion
   */
  exports.prototype['processDefinitionVersion'] = undefined;
  /**
   * @member {Date} processInstanceStartTime
   */
  exports.prototype['processInstanceStartTime'] = undefined;
  /**
   * @member {Date} processInstanceEndTime
   */
  exports.prototype['processInstanceEndTime'] = undefined;
  /**
   * @member {String} processInstanceInitiator
   */
  exports.prototype['processInstanceInitiator'] = undefined;
  /**
   * @member {Object} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {Object} decisionInfo
   */
  exports.prototype['decisionInfo'] = undefined;

  return exports;
}));


