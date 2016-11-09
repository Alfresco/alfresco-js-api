(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/FormFieldRepresentation', '../model/FormOutcomeRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./FormFieldRepresentation'), require('./FormOutcomeRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.FormScopeRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.FormFieldRepresentation, root.ActivitiPublicRestApi.FormOutcomeRepresentation);
  }
}(this, function(ApiClient, FormFieldRepresentation, FormOutcomeRepresentation) {
  'use strict';




  /**
   * The FormScopeRepresentation model module.
   * @module model/FormScopeRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>FormScopeRepresentation</code>.
   * @alias module:model/FormScopeRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>FormScopeRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormScopeRepresentation} obj Optional instance to populate.
   * @return {module:model/FormScopeRepresentation} The populated <code>FormScopeRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('fieldVariables')) {
        obj['fieldVariables'] = ApiClient.convertToType(data['fieldVariables'], [FormFieldRepresentation]);
      }
      if (data.hasOwnProperty('fields')) {
        obj['fields'] = ApiClient.convertToType(data['fields'], [FormFieldRepresentation]);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('outcomes')) {
        obj['outcomes'] = ApiClient.convertToType(data['outcomes'], [FormOutcomeRepresentation]);
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Array.<module:model/FormFieldRepresentation>} fieldVariables
   */
  exports.prototype['fieldVariables'] = undefined;
  /**
   * @member {Array.<module:model/FormFieldRepresentation>} fields
   */
  exports.prototype['fields'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/FormOutcomeRepresentation>} outcomes
   */
  exports.prototype['outcomes'] = undefined;




  return exports;
}));


