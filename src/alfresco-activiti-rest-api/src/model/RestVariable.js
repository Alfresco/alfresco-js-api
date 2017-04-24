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
    root.ActivitiPublicRestApi.RestVariable = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RestVariable model module.
   * @module model/RestVariable
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>RestVariable</code>.
   * @alias module:model/RestVariable
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>RestVariable</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RestVariable} obj Optional instance to populate.
   * @return {module:model/RestVariable} The populated <code>RestVariable</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('scope')) {
        obj['scope'] = ApiClient.convertToType(data['scope'], 'String'); // LOCAL, GLOBAL
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
      if (data.hasOwnProperty('valueUrl')) {
        obj['valueUrl'] = ApiClient.convertToType(data['valueUrl'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} scope
   */
  exports.prototype['scope'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {String} valueUrl
   */
  exports.prototype['valueUrl'] = undefined;




  return exports;
}));


