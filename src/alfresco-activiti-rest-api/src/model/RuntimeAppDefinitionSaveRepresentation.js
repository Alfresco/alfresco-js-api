(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/AppDefinitionRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./AppDefinitionRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.RuntimeAppDefinitionSaveRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.AppDefinitionRepresentation);
  }
}(this, function(ApiClient, AppDefinitionRepresentation) {
  'use strict';




  /**
   * The RuntimeAppDefinitionSaveRepresentation model module.
   * @module model/RuntimeAppDefinitionSaveRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>RuntimeAppDefinitionSaveRepresentation</code>.
   * @alias module:model/RuntimeAppDefinitionSaveRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RuntimeAppDefinitionSaveRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RuntimeAppDefinitionSaveRepresentation} obj Optional instance to populate.
   * @return {module:model/RuntimeAppDefinitionSaveRepresentation} The populated <code>RuntimeAppDefinitionSaveRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('appDefinitions')) {
        obj['appDefinitions'] = ApiClient.convertToType(data['appDefinitions'], [AppDefinitionRepresentation]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AppDefinitionRepresentation>} appDefinitions
   */
  exports.prototype['appDefinitions'] = undefined;




  return exports;
}));


