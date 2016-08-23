(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.LoginRequest = factory(root.AlfrescoAuthRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoginRequest model module.
   * @module model/LoginRequest
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>LoginRequest</code>.
   * @alias module:model/LoginRequest
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>LoginRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginRequest} obj Optional instance to populate.
   * @return {module:model/LoginRequest} The populated <code>LoginRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('password')) {
        obj['password'] = ApiClient.convertToType(data['password'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;

  /**
   * @member {String} password
   */
  exports.prototype['password'] = undefined;




  return exports;
}));
