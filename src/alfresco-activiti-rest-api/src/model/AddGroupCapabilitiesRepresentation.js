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
    root.ActivitiPublicRestApi.AddGroupCapabilitiesRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AddGroupCapabilitiesRepresentation model module.
   * @module model/AddGroupCapabilitiesRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>AddGroupCapabilitiesRepresentation</code>.
   * @alias module:model/AddGroupCapabilitiesRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>AddGroupCapabilitiesRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AddGroupCapabilitiesRepresentation} obj Optional instance to populate.
   * @return {module:model/AddGroupCapabilitiesRepresentation} The populated <code>AddGroupCapabilitiesRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('capabilities')) {
        obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {string[]} capabilities
   */
  exports.prototype['capabilities'] = undefined;




  return exports;
}));


