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
    root.ActivitiPublicRestApi.ReportParametersDefinition = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportParametersDefinition model module.
   * @module model/ReportParametersDefinition
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ReportParametersDefinition</code>.
   * @alias module:model/ReportParametersDefinition
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReportParametersDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportParametersDefinition} obj Optional instance to populate.
   * @return {module:model/ReportParametersDefinition} The populated <code>ReportParametersDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('definition')) {
        obj['definition'] = ApiClient.convertToType(data['definition'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} definition
   */
  exports.prototype['definition'] = undefined;
  /**
   * @member {String} value
   */
  exports.prototype['created'] = undefined;

  return exports;
}));
