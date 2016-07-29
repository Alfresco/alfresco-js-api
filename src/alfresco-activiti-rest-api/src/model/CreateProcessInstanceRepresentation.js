(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.CreateProcessInstanceRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateProcessInstanceRepresentation model module.
   * @module model/CreateProcessInstanceRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>CreateProcessInstanceRepresentation</code>.
   * @alias module:model/CreateProcessInstanceRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CreateProcessInstanceRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateProcessInstanceRepresentation} obj Optional instance to populate.
   * @return {module:model/CreateProcessInstanceRepresentation} The populated <code>CreateProcessInstanceRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('outcome')) {
        obj['outcome'] = ApiClient.convertToType(data['outcome'], 'String');
      }
      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} outcome
   */
  exports.prototype['outcome'] = undefined;
  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;
  /**
   * @member {Object} values
   */
  exports.prototype['values'] = undefined;




  return exports;
}));


