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
    root.ActivitiPublicRestApi.ProcessInstanceFilterRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProcessInstanceFilterRepresentation model module.
   * @module model/ProcessInstanceFilterRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessInstanceFilterRepresentation</code>.
   * @alias module:model/ProcessInstanceFilterRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>ProcessInstanceFilterRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessInstanceFilterRepresentation} obj Optional instance to populate.
   * @return {module:model/ProcessInstanceFilterRepresentation} The populated <code>ProcessInstanceFilterRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('asc')) {
        obj['asc'] = ApiClient.convertToType(data['asc'], 'Boolean');
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


