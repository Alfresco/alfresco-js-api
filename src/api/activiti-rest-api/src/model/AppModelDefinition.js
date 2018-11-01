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
    root.ActivitiPublicRestApi.AppModelDefinition = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AppModelDefinition model module.
   * @module model/AppModelDefinition
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>AppModelDefinition</code>.
   * @alias module:model/AppModelDefinition
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>AppModelDefinition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppModelDefinition} obj Optional instance to populate.
   * @return {module:model/AppModelDefinition} The populated <code>AppModelDefinition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Integer');
      }
      if (data.hasOwnProperty('createdByFullName')) {
        obj['createdByFullName'] = ApiClient.convertToType(data['createdByFullName'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
      }
      if (data.hasOwnProperty('lastUpdatedBy')) {
        obj['lastUpdatedBy'] = ApiClient.convertToType(data['lastUpdatedBy'], 'Integer');
      }
      if (data.hasOwnProperty('lastUpdatedByFullName')) {
        obj['lastUpdatedByFullName'] = ApiClient.convertToType(data['lastUpdatedByFullName'], 'String');
      }
      if (data.hasOwnProperty('modelType')) {
        obj['modelType'] = ApiClient.convertToType(data['modelType'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('stencilSetId')) {
        obj['stencilSetId'] = ApiClient.convertToType(data['stencilSetId'], 'Integer');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {String} createdByFullName
   */
  exports.prototype['createdByFullName'] = undefined;
  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;
  /**
   * @member {Integer} lastUpdatedBy
   */
  exports.prototype['lastUpdatedBy'] = undefined;
  /**
   * @member {String} lastUpdatedByFullName
   */
  exports.prototype['lastUpdatedByFullName'] = undefined;
  /**
   * @member {Integer} modelType
   */
  exports.prototype['modelType'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Integer} stencilSetId
   */
  exports.prototype['stencilSetId'] = undefined;
  /**
   * @member {Integer} version
   */
  exports.prototype['version'] = undefined;




  return exports;
}));


