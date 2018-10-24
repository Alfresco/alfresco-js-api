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
    root.ActivitiPublicRestApi.SaveFormRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SaveFormRepresentation model module.
   * @module model/SaveFormRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>SaveFormRepresentation</code>.
   * @alias module:model/SaveFormRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SaveFormRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SaveFormRepresentation} obj Optional instance to populate.
   * @return {module:model/SaveFormRepresentation} The populated <code>SaveFormRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('values')) {
        obj['values'] = ApiClient.convertToType(data['values'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {Object} values
   */
  exports.prototype['values'] = undefined;




  return exports;
}));


