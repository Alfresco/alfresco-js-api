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
    root.ActivitiPublicRestApi.BoxUserAccountCredentialsRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The BoxUserAccountCredentialsRepresentation model module.
   * @module model/BoxUserAccountCredentialsRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>BoxUserAccountCredentialsRepresentation</code>.
   * @alias module:model/BoxUserAccountCredentialsRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>BoxUserAccountCredentialsRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/BoxUserAccountCredentialsRepresentation} obj Optional instance to populate.
   * @return {module:model/BoxUserAccountCredentialsRepresentation} The populated <code>BoxUserAccountCredentialsRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('authenticationURL')) {
        obj['authenticationURL'] = ApiClient.convertToType(data['authenticationURL'], 'String');
      }
      if (data.hasOwnProperty('expireDate')) {
        obj['expireDate'] = ApiClient.convertToType(data['expireDate'], 'Date');
      }
      if (data.hasOwnProperty('ownerEmail')) {
        obj['ownerEmail'] = ApiClient.convertToType(data['ownerEmail'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} authenticationURL
   */
  exports.prototype['authenticationURL'] = undefined;
  /**
   * @member {Date} expireDate
   */
  exports.prototype['expireDate'] = undefined;
  /**
   * @member {String} ownerEmail
   */
  exports.prototype['ownerEmail'] = undefined;




  return exports;
}));


