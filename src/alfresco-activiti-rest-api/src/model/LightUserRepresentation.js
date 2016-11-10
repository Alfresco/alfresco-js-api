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
    root.ActivitiPublicRestApi.LightUserRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The LightUserRepresentation model module.
   * @module model/LightUserRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>LightUserRepresentation</code>.
   * @alias module:model/LightUserRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>LightUserRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LightUserRepresentation} obj Optional instance to populate.
   * @return {module:model/LightUserRepresentation} The populated <code>LightUserRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('externalId')) {
        obj['externalId'] = ApiClient.convertToType(data['externalId'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('pictureId')) {
        obj['pictureId'] = ApiClient.convertToType(data['pictureId'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {String} externalId
   */
  exports.prototype['externalId'] = undefined;
  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;
  /**
   * @member {Integer} pictureId
   */
  exports.prototype['pictureId'] = undefined;




  return exports;
}));


