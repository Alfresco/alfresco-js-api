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
    root.ActivitiPublicRestApi.ProcessScopeIdentifierRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProcessScopeIdentifierRepresentation model module.
   * @module model/ProcessScopeIdentifierRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessScopeIdentifierRepresentation</code>.
   * @alias module:model/ProcessScopeIdentifierRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ProcessScopeIdentifierRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessScopeIdentifierRepresentation} obj Optional instance to populate.
   * @return {module:model/ProcessScopeIdentifierRepresentation} The populated <code>ProcessScopeIdentifierRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('processActivityId')) {
        obj['processActivityId'] = ApiClient.convertToType(data['processActivityId'], 'String');
      }
      if (data.hasOwnProperty('processModelId')) {
        obj['processModelId'] = ApiClient.convertToType(data['processModelId'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} processActivityId
   */
  exports.prototype['processActivityId'] = undefined;
  /**
   * @member {Integer} processModelId
   */
  exports.prototype['processModelId'] = undefined;




  return exports;
}));


