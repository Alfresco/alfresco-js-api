(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/LightUserRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./LightUserRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TaskAuditRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightUserRepresentation);
  }
}(this, function(ApiClient, LightUserRepresentation) {
  'use strict';

  /**
   * The TaskAuditRepresentation model module.
   * @module model/TaskAuditRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TaskAuditRepresentation</code>.
   * @alias module:model/TaskAuditRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>TaskAuditRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskAuditRepresentation} obj Optional instance to populate.
   * @return {module:model/TaskAuditRepresentation} The populated <code>TaskAuditRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('taskId')) {
        obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
      }
      if (data.hasOwnProperty('taskName')) {
        obj['taskName'] = ApiClient.convertToType(data['taskName'], 'String');
      }
      if (data.hasOwnProperty('processInstanceId')) {
        obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionName')) {
        obj['processDefinitionName'] = ApiClient.convertToType(data['processDefinitionName'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionVersion')) {
        obj['processDefinitionVersion'] = ApiClient.convertToType(data['processDefinitionVersion'], 'Integer');
      }
      if (data.hasOwnProperty('assignee')) {
        obj['assignee'] = LightUserRepresentation.constructFromObject(data['assignee']);
      }
      if (data.hasOwnProperty('startTime')) {
        obj['startTime'] = ApiClient.convertToType(data['startTime'], 'Date');
      }
      if (data.hasOwnProperty('endTime')) {
        obj['endTime'] = ApiClient.convertToType(data['endTime'], 'Date');
      }
      if (data.hasOwnProperty('formData')) {
        obj['formData'] = ApiClient.convertToType(data['formData'], [Object]);
      }
      if (data.hasOwnProperty('selectedOutcome')) {
        obj['selectedOutcome'] = ApiClient.convertToType(data['selectedOutcome'], 'String');
      }
      if (data.hasOwnProperty('comments')) {
        obj['comments'] = ApiClient.convertToType(data['comments'], [Object]);
      }
    }
    return obj;
  }

  /**
   * @member {String} taskId
   */
  exports.prototype['taskId'] = undefined;
  /**
   * @member {String} taskName
   */
  exports.prototype['taskName'] = undefined;
  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;
  /**
   * @member {String} processDefinitionName
   */
  exports.prototype['processDefinitionName'] = undefined;
  /**
   * @member {Integer} processDefinitionVersion
   */
  exports.prototype['processDefinitionVersion'] = undefined;
  /**
   * @member {String} assignee
   */
  exports.prototype['assignee'] = undefined;
  /**
   * @member {String} startTime
   */
  exports.prototype['startTime'] = undefined;
  /**
   * @member {String} endTime
   */
  exports.prototype['endTime'] = undefined;
  /**
   * @member {String} formData
   */
  exports.prototype['formData'] = undefined;
  /**
   * @member {String} selectedOutcome
   */
  exports.prototype['selectedOutcome'] = undefined;
  /**
   * @member {String} comments
   */
  exports.prototype['comments'] = undefined;

  return exports;
}));


