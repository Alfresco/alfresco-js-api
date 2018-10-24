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
    root.ActivitiPublicRestApi.TaskFilterRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaskFilterRepresentation model module.
   * @module model/TaskFilterRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TaskFilterRepresentation</code>.
   * @alias module:model/TaskFilterRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>TaskFilterRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskFilterRepresentation} obj Optional instance to populate.
   * @return {module:model/TaskFilterRepresentation} The populated <code>TaskFilterRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('asc')) {
        obj['asc'] = ApiClient.convertToType(data['asc'], 'Boolean');
      }
      if (data.hasOwnProperty('assignment')) {
        obj['assignment'] = ApiClient.convertToType(data['assignment'], 'String');
      }
      if (data.hasOwnProperty('dueAfter')) {
        obj['dueAfter'] = ApiClient.convertToType(data['dueAfter'], 'Date');
      }
      if (data.hasOwnProperty('dueBefore')) {
        obj['dueBefore'] = ApiClient.convertToType(data['dueBefore'], 'Date');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionKey')) {
        obj['processDefinitionKey'] = ApiClient.convertToType(data['processDefinitionKey'], 'String');
      }
      if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
      }
      if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} asc
   */
  exports.prototype['asc'] = undefined;
  /**
   * @member {String} assignment
   */
  exports.prototype['assignment'] = undefined;
  /**
   * @member {Date} dueAfter
   */
  exports.prototype['dueAfter'] = undefined;
  /**
   * @member {Date} dueBefore
   */
  exports.prototype['dueBefore'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;
  /**
   * @member {String} processDefinitionKey
   */
  exports.prototype['processDefinitionKey'] = undefined;
  /**
   * @member {String} sort
   */
  exports.prototype['sort'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;




  return exports;
}));


