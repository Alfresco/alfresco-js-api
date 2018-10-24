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
    root.ActivitiPublicRestApi.UserFilterOrderRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserFilterOrderRepresentation model module.
   * @module model/UserFilterOrderRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>UserFilterOrderRepresentation</code>.
   * @alias module:model/UserFilterOrderRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserFilterOrderRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserFilterOrderRepresentation} obj Optional instance to populate.
   * @return {module:model/UserFilterOrderRepresentation} The populated <code>UserFilterOrderRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'Integer');
      }
      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], ['Integer']);
      }
    }
    return obj;
  }

  /**
   * @member {Integer} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * @member {Array.<Integer>} order
   */
  exports.prototype['order'] = undefined;




  return exports;
}));


