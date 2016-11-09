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
    root.ActivitiPublicRestApi.ProcessInstanceRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightUserRepresentation, root.ActivitiPublicRestApi.RestVariable);
  }
}(this, function(ApiClient, LightUserRepresentation, RestVariable) {
  'use strict';




  /**
   * The ProcessInstanceRepresentation model module.
   * @module model/ProcessInstanceRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessInstanceRepresentation</code>.
   * @alias module:model/ProcessInstanceRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;


















  };

  /**
   * Constructs a <code>ProcessInstanceRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessInstanceRepresentation} obj Optional instance to populate.
   * @return {module:model/ProcessInstanceRepresentation} The populated <code>ProcessInstanceRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('businessKey')) {
        obj['businessKey'] = ApiClient.convertToType(data['businessKey'], 'String');
      }
      if (data.hasOwnProperty('ended')) {
        obj['ended'] = ApiClient.convertToType(data['ended'], 'Date');
      }
      if (data.hasOwnProperty('graphicalNotationDefined')) {
        obj['graphicalNotationDefined'] = ApiClient.convertToType(data['graphicalNotationDefined'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionCategory')) {
        obj['processDefinitionCategory'] = ApiClient.convertToType(data['processDefinitionCategory'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionDeploymentId')) {
        obj['processDefinitionDeploymentId'] = ApiClient.convertToType(data['processDefinitionDeploymentId'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionDescription')) {
        obj['processDefinitionDescription'] = ApiClient.convertToType(data['processDefinitionDescription'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionKey')) {
        obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionName')) {
        obj['processDefinitionName'] = ApiClient.convertToType(data['processDefinitionName'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionVersion')) {
        obj['processDefinitionVersion'] = ApiClient.convertToType(data['processDefinitionVersion'], 'Integer');
      }
      if (data.hasOwnProperty('startFormDefined')) {
        obj['startFormDefined'] = ApiClient.convertToType(data['startFormDefined'], 'Boolean');
      }
      if (data.hasOwnProperty('started')) {
        obj['started'] = ApiClient.convertToType(data['started'], 'Date');
      }
      if (data.hasOwnProperty('startedBy')) {
        obj['startedBy'] = LightUserRepresentation.constructFromObject(data['startedBy']);
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'String');
      }
      if (data.hasOwnProperty('variables')) {
        obj['variables'] = ApiClient.convertToType(data['variables'], [RestVariable]);
      }
    }
    return obj;
  }

  /**
   * @member {String} businessKey
   */
  exports.prototype['businessKey'] = undefined;
  /**
   * @member {Date} ended
   */
  exports.prototype['ended'] = undefined;
  /**
   * @member {Boolean} graphicalNotationDefined
   */
  exports.prototype['graphicalNotationDefined'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} processDefinitionCategory
   */
  exports.prototype['processDefinitionCategory'] = undefined;
  /**
   * @member {String} processDefinitionDeploymentId
   */
  exports.prototype['processDefinitionDeploymentId'] = undefined;
  /**
   * @member {String} processDefinitionDescription
   */
  exports.prototype['processDefinitionDescription'] = undefined;
  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;
  /**
   * @member {String} processDefinitionKey
   */
  exports.prototype['processDefinitionKey'] = undefined;
  /**
   * @member {String} processDefinitionName
   */
  exports.prototype['processDefinitionName'] = undefined;
  /**
   * @member {Integer} processDefinitionVersion
   */
  exports.prototype['processDefinitionVersion'] = undefined;
  /**
   * @member {Boolean} startFormDefined
   */
  exports.prototype['startFormDefined'] = undefined;
  /**
   * @member {Date} started
   */
  exports.prototype['started'] = undefined;
  /**
   * @member {module:model/LightUserRepresentation} startedBy
   */
  exports.prototype['startedBy'] = undefined;
  /**
   * @member {String} tenantId
   */
  exports.prototype['tenantId'] = undefined;
  /**
   * @member {Array.<module:model/RestVariable>} variables
   */
  exports.prototype['variables'] = undefined;




  return exports;
}));


