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
    root.ActivitiPublicRestApi.LayoutRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LayoutRepresentation model module.
   * @module model/LayoutRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>LayoutRepresentation</code>.
   * @alias module:model/LayoutRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>LayoutRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LayoutRepresentation} obj Optional instance to populate.
   * @return {module:model/LayoutRepresentation} The populated <code>LayoutRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('colspan')) {
        obj['colspan'] = ApiClient.convertToType(data['colspan'], 'Integer');
      }
      if (data.hasOwnProperty('column')) {
        obj['column'] = ApiClient.convertToType(data['column'], 'Integer');
      }
      if (data.hasOwnProperty('row')) {
        obj['row'] = ApiClient.convertToType(data['row'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} colspan
   */
  exports.prototype['colspan'] = undefined;
  /**
   * @member {Integer} column
   */
  exports.prototype['column'] = undefined;
  /**
   * @member {Integer} row
   */
  exports.prototype['row'] = undefined;




  return exports;
}));


