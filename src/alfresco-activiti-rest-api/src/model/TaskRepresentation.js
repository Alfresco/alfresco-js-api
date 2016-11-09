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
    root.ActivitiPublicRestApi.TaskRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightUserRepresentation);
  }
}(this, function(ApiClient, LightUserRepresentation) {
  'use strict';




  /**
   * The TaskRepresentation model module.
   * @module model/TaskRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TaskRepresentation</code>.
   * @alias module:model/TaskRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;





























  };

  /**
   * Constructs a <code>TaskRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskRepresentation} obj Optional instance to populate.
   * @return {module:model/TaskRepresentation} The populated <code>TaskRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('adhocTaskCanBeReassigned')) {
        obj['adhocTaskCanBeReassigned'] = ApiClient.convertToType(data['adhocTaskCanBeReassigned'], 'Boolean');
      }
      if (data.hasOwnProperty('assignee')) {
        obj['assignee'] = LightUserRepresentation.constructFromObject(data['assignee']);
      }
      if (data.hasOwnProperty('category')) {
        obj['category'] = ApiClient.convertToType(data['category'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('dueDate')) {
        obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
      }
      if (data.hasOwnProperty('formKey')) {
        obj['formKey'] = ApiClient.convertToType(data['formKey'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('initiatorCanCompleteTask')) {
        obj['initiatorCanCompleteTask'] = ApiClient.convertToType(data['initiatorCanCompleteTask'], 'Boolean');
      }
      if (data.hasOwnProperty('involvedPeople')) {
        obj['involvedPeople'] = ApiClient.convertToType(data['involvedPeople'], [LightUserRepresentation]);
      }
      if (data.hasOwnProperty('memberOfCandidateGroup')) {
        obj['memberOfCandidateGroup'] = ApiClient.convertToType(data['memberOfCandidateGroup'], 'Boolean');
      }
      if (data.hasOwnProperty('memberOfCandidateUsers')) {
        obj['memberOfCandidateUsers'] = ApiClient.convertToType(data['memberOfCandidateUsers'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('parentTaskId')) {
        obj['parentTaskId'] = ApiClient.convertToType(data['parentTaskId'], 'String');
      }
      if (data.hasOwnProperty('parentTaskName')) {
        obj['parentTaskName'] = ApiClient.convertToType(data['parentTaskName'], 'String');
      }
      if (data.hasOwnProperty('priority')) {
        obj['priority'] = ApiClient.convertToType(data['priority'], 'Integer');
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
      if (data.hasOwnProperty('processInstanceId')) {
        obj['processInstanceId'] = ApiClient.convertToType(data['processInstanceId'], 'String');
      }
      if (data.hasOwnProperty('processInstanceName')) {
        obj['processInstanceName'] = ApiClient.convertToType(data['processInstanceName'], 'String');
      }
      if (data.hasOwnProperty('processInstanceStartUserId')) {
        obj['processInstanceStartUserId'] = ApiClient.convertToType(data['processInstanceStartUserId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} adhocTaskCanBeReassigned
   */
  exports.prototype['adhocTaskCanBeReassigned'] = undefined;
  /**
   * @member {module:model/LightUserRepresentation} assignee
   */
  exports.prototype['assignee'] = undefined;
  /**
   * @member {String} category
   */
  exports.prototype['category'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Date} dueDate
   */
  exports.prototype['dueDate'] = undefined;
  /**
   * @member {Integer} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {Date} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * @member {String} formKey
   */
  exports.prototype['formKey'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} initiatorCanCompleteTask
   */
  exports.prototype['initiatorCanCompleteTask'] = undefined;
  /**
   * @member {Array.<module:model/LightUserRepresentation>} involvedPeople
   */
  exports.prototype['involvedPeople'] = undefined;
  /**
   * @member {Boolean} memberOfCandidateGroup
   */
  exports.prototype['memberOfCandidateGroup'] = undefined;
  /**
   * @member {Boolean} memberOfCandidateUsers
   */
  exports.prototype['memberOfCandidateUsers'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} parentTaskId
   */
  exports.prototype['parentTaskId'] = undefined;
  /**
   * @member {String} parentTaskName
   */
  exports.prototype['parentTaskName'] = undefined;
  /**
   * @member {Integer} priority
   */
  exports.prototype['priority'] = undefined;
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
   * @member {String} processInstanceId
   */
  exports.prototype['processInstanceId'] = undefined;
  /**
   * @member {String} processInstanceName
   */
  exports.prototype['processInstanceName'] = undefined;
  /**
   * @member {String} processInstanceStartUserId
   */
  exports.prototype['processInstanceStartUserId'] = undefined;




  return exports;
}));


