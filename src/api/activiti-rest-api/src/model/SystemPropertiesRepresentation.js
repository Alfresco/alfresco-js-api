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
    root.ActivitiPublicRestApi.SystemPropertiesRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SystemPropertiesRepresentation model module.
   * @module model/SystemPropertiesRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>SystemPropertiesRepresentation</code>.
   * @alias module:model/SystemPropertiesRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SystemPropertiesRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SystemPropertiesRepresentation} obj Optional instance to populate.
   * @return {module:model/SystemPropertiesRepresentation} The populated <code>SystemPropertiesRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('allowInvolveByEmail')) {
        obj['allowInvolveByEmail'] = ApiClient.convertToType(data['allowInvolveByEmail'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} allowInvolveByEmail
   */
  exports.prototype['allowInvolveByEmail'] = undefined;




  return exports;
}));


