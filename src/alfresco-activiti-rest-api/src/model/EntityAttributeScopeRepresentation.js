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
    root.ActivitiPublicRestApi.EntityAttributeScopeRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The EntityAttributeScopeRepresentation model module.
   * @module model/EntityAttributeScopeRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>EntityAttributeScopeRepresentation</code>.
   * @alias module:model/EntityAttributeScopeRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>EntityAttributeScopeRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EntityAttributeScopeRepresentation} obj Optional instance to populate.
   * @return {module:model/EntityAttributeScopeRepresentation} The populated <code>EntityAttributeScopeRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;




  return exports;
}));


