(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/FormRepresentation', '../model/ProcessScopeIdentifierRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./FormRepresentation'), require('./ProcessScopeIdentifierRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.FormSaveRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.FormRepresentation, root.ActivitiPublicRestApi.ProcessScopeIdentifierRepresentation);
  }
}(this, function(ApiClient, FormRepresentation, ProcessScopeIdentifierRepresentation) {
  'use strict';




  /**
   * The FormSaveRepresentation model module.
   * @module model/FormSaveRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>FormSaveRepresentation</code>.
   * @alias module:model/FormSaveRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>FormSaveRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormSaveRepresentation} obj Optional instance to populate.
   * @return {module:model/FormSaveRepresentation} The populated <code>FormSaveRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('formImageBase64')) {
        obj['formImageBase64'] = ApiClient.convertToType(data['formImageBase64'], 'String');
      }
      if (data.hasOwnProperty('formRepresentation')) {
        obj['formRepresentation'] = FormRepresentation.constructFromObject(data['formRepresentation']);
      }
      if (data.hasOwnProperty('newVersion')) {
        obj['newVersion'] = ApiClient.convertToType(data['newVersion'], 'Boolean');
      }
      if (data.hasOwnProperty('processScopeIdentifiers')) {
        obj['processScopeIdentifiers'] = ApiClient.convertToType(data['processScopeIdentifiers'], [ProcessScopeIdentifierRepresentation]);
      }
      if (data.hasOwnProperty('reusable')) {
        obj['reusable'] = ApiClient.convertToType(data['reusable'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {String} formImageBase64
   */
  exports.prototype['formImageBase64'] = undefined;
  /**
   * @member {module:model/FormRepresentation} formRepresentation
   */
  exports.prototype['formRepresentation'] = undefined;
  /**
   * @member {Boolean} newVersion
   */
  exports.prototype['newVersion'] = undefined;
  /**
   * @member {Array.<module:model/ProcessScopeIdentifierRepresentation>} processScopeIdentifiers
   */
  exports.prototype['processScopeIdentifiers'] = undefined;
  /**
   * @member {Boolean} reusable
   */
  exports.prototype['reusable'] = undefined;




  return exports;
}));


