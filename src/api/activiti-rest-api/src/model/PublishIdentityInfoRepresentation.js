(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/LightGroupRepresentation', '../model/LightUserRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./LightGroupRepresentation'), require('./LightUserRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.PublishIdentityInfoRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightGroupRepresentation, root.ActivitiPublicRestApi.LightUserRepresentation);
  }
}(this, function(ApiClient, LightGroupRepresentation, LightUserRepresentation) {
  'use strict';




  /**
   * The PublishIdentityInfoRepresentation model module.
   * @module model/PublishIdentityInfoRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>PublishIdentityInfoRepresentation</code>.
   * @alias module:model/PublishIdentityInfoRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>PublishIdentityInfoRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PublishIdentityInfoRepresentation} obj Optional instance to populate.
   * @return {module:model/PublishIdentityInfoRepresentation} The populated <code>PublishIdentityInfoRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('group')) {
        obj['group'] = LightGroupRepresentation.constructFromObject(data['group']);
      }
      if (data.hasOwnProperty('person')) {
        obj['person'] = LightUserRepresentation.constructFromObject(data['person']);
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/LightGroupRepresentation} group
   */
  exports.prototype['group'] = undefined;
  /**
   * @member {module:model/LightUserRepresentation} person
   */
  exports.prototype['person'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;




  return exports;
}));


