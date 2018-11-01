(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/FormFieldRepresentation', '../model/FormJavascriptEventRepresentation', '../model/FormOutcomeRepresentation', '../model/FormTabRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./FormFieldRepresentation'), require('./FormJavascriptEventRepresentation'), require('./FormOutcomeRepresentation'), require('./FormTabRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.FormDefinitionRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.FormFieldRepresentation, root.ActivitiPublicRestApi.FormJavascriptEventRepresentation, root.ActivitiPublicRestApi.FormOutcomeRepresentation, root.ActivitiPublicRestApi.FormTabRepresentation);
  }
}(this, function(ApiClient, FormFieldRepresentation, FormJavascriptEventRepresentation, FormOutcomeRepresentation, FormTabRepresentation) {
  'use strict';




  /**
   * The FormDefinitionRepresentation model module.
   * @module model/FormDefinitionRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>FormDefinitionRepresentation</code>.
   * @alias module:model/FormDefinitionRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;




















  };

  /**
   * Constructs a <code>FormDefinitionRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormDefinitionRepresentation} obj Optional instance to populate.
   * @return {module:model/FormDefinitionRepresentation} The populated <code>FormDefinitionRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('className')) {
        obj['className'] = ApiClient.convertToType(data['className'], 'String');
      }
      if (data.hasOwnProperty('customFieldTemplates')) {
        obj['customFieldTemplates'] = ApiClient.convertToType(data['customFieldTemplates'], {'String': 'String'});
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [FormFieldRepresentation]);
      }
      if (data.hasOwnProperty('gridsterForm')) {
        obj['gridsterForm'] = ApiClient.convertToType(data['gridsterForm'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('javascriptEvents')) {
        obj['javascriptEvents'] = ApiClient.convertToType(data['javascriptEvents'], [FormJavascriptEventRepresentation]);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], {'String': 'String'});
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('outcomeTarget')) {
        obj['outcomeTarget'] = ApiClient.convertToType(data['outcomeTarget'], 'String');
      }
      if (data.hasOwnProperty('outcomes')) {
        obj['outcomes'] = ApiClient.convertToType(data['outcomes'], [FormOutcomeRepresentation]);
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
      if (data.hasOwnProperty('selectedOutcome')) {
        obj['selectedOutcome'] = ApiClient.convertToType(data['selectedOutcome'], 'String');
      }
      if (data.hasOwnProperty('style')) {
        obj['style'] = ApiClient.convertToType(data['style'], 'String');
      }
      if (data.hasOwnProperty('tabs')) {
        obj['tabs'] = ApiClient.convertToType(data['tabs'], [FormTabRepresentation]);
      }
      if (data.hasOwnProperty('taskDefinitionKey')) {
        obj['taskDefinitionKey'] = ApiClient.convertToType(data['taskDefinitionKey'], 'String');
      }
      if (data.hasOwnProperty('taskId')) {
        obj['taskId'] = ApiClient.convertToType(data['taskId'], 'String');
      }
      if (data.hasOwnProperty('taskName')) {
        obj['taskName'] = ApiClient.convertToType(data['taskName'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} className
   */
  exports.prototype['className'] = undefined;
  /**
   * @member {Object.<String, String>} customFieldTemplates
   */
  exports.prototype['customFieldTemplates'] = undefined;
  /**
   * @member {Array.<module:model/FormFieldRepresentation>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {Boolean} gridsterForm
   */
  exports.prototype['gridsterForm'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Array.<module:model/FormJavascriptEventRepresentation>} javascriptEvents
   */
  exports.prototype['javascriptEvents'] = undefined;
  /**
   * @member {Object.<String, String>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} outcomeTarget
   */
  exports.prototype['outcomeTarget'] = undefined;
  /**
   * @member {Array.<module:model/FormOutcomeRepresentation>} outcomes
   */
  exports.prototype['outcomes'] = undefined;
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
   * @member {String} selectedOutcome
   */
  exports.prototype['selectedOutcome'] = undefined;
  /**
   * @member {String} style
   */
  exports.prototype['style'] = undefined;
  /**
   * @member {Array.<module:model/FormTabRepresentation>} tabs
   */
  exports.prototype['tabs'] = undefined;
  /**
   * @member {String} taskDefinitionKey
   */
  exports.prototype['taskDefinitionKey'] = undefined;
  /**
   * @member {String} taskId
   */
  exports.prototype['taskId'] = undefined;
  /**
   * @member {String} taskName
   */
  exports.prototype['taskName'] = undefined;




  return exports;
}));


