(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/AppModelDefinition', '../model/PublishIdentityInfoRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./AppModelDefinition'), require('./PublishIdentityInfoRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AppDefinition = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.AppModelDefinition, root.ActivitiPublicRestApi.PublishIdentityInfoRepresentation);
  }
}(this, function(ApiClient, AppModelDefinition, PublishIdentityInfoRepresentation) {
  'use strict';




  /**
   * The AppDefinition model module.
   * @module model/AppDefinition
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>AppDefinition</code>.
   * @alias module:model/AppDefinition
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>AppDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppDefinition} obj Optional instance to populate.
   * @return {module:model/AppDefinition} The populated <code>AppDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('models')) {
        obj['models'] = ApiClient.convertToType(data['models'], [AppModelDefinition]);
      }
      if (data.hasOwnProperty('publishIdentityInfo')) {
        obj['publishIdentityInfo'] = ApiClient.convertToType(data['publishIdentityInfo'], [PublishIdentityInfoRepresentation]);
      }
      if (data.hasOwnProperty('theme')) {
        obj['theme'] = ApiClient.convertToType(data['theme'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * @member {Array.<module:model/AppModelDefinition>} models
   */
  exports.prototype['models'] = undefined;
  /**
   * @member {Array.<module:model/PublishIdentityInfoRepresentation>} publishIdentityInfo
   */
  exports.prototype['publishIdentityInfo'] = undefined;
  /**
   * @member {String} theme
   */
  exports.prototype['theme'] = undefined;




  return exports;
}));


