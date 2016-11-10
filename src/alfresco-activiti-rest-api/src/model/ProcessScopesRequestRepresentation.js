(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ProcessScopeIdentifierRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessScopeIdentifierRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessScopesRequestRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ProcessScopeIdentifierRepresentation);
  }
}(this, function(ApiClient, ProcessScopeIdentifierRepresentation) {
  'use strict';




  /**
   * The ProcessScopesRequestRepresentation model module.
   * @module model/ProcessScopesRequestRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessScopesRequestRepresentation</code>.
   * @alias module:model/ProcessScopesRequestRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProcessScopesRequestRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessScopesRequestRepresentation} obj Optional instance to populate.
   * @return {module:model/ProcessScopesRequestRepresentation} The populated <code>ProcessScopesRequestRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('identifiers')) {
        obj['identifiers'] = ApiClient.convertToType(data['identifiers'], [ProcessScopeIdentifierRepresentation]);
      }
      if (data.hasOwnProperty('overriddenModel')) {
        obj['overriddenModel'] = ApiClient.convertToType(data['overriddenModel'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/ProcessScopeIdentifierRepresentation>} identifiers
   */
  exports.prototype['identifiers'] = undefined;
  /**
   * @member {String} overriddenModel
   */
  exports.prototype['overriddenModel'] = undefined;




  return exports;
}));


