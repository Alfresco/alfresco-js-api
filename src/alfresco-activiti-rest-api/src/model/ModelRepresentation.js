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
    root.ActivitiPublicRestApi.ModelRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ModelRepresentation model module.
   * @module model/ModelRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ModelRepresentation</code>.
   * @alias module:model/ModelRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;

















  };

  /**
   * Constructs a <code>ModelRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ModelRepresentation} obj Optional instance to populate.
   * @return {module:model/ModelRepresentation} The populated <code>ModelRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'Integer');
      }
      if (data.hasOwnProperty('createdByFullName')) {
        obj['createdByFullName'] = ApiClient.convertToType(data['createdByFullName'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('favorite')) {
        obj['favorite'] = ApiClient.convertToType(data['favorite'], 'Boolean');
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
      if (data.hasOwnProperty('latestVersion')) {
        obj['latestVersion'] = ApiClient.convertToType(data['latestVersion'], 'Boolean');
      }
      if (data.hasOwnProperty('modelType')) {
        obj['modelType'] = ApiClient.convertToType(data['modelType'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('permission')) {
        obj['permission'] = ApiClient.convertToType(data['permission'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'Integer');
      }
      if (data.hasOwnProperty('stencilSet')) {
        obj['stencilSet'] = ApiClient.convertToType(data['stencilSet'], 'Integer');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
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
   * @member {Boolean} favorite
   */
  exports.prototype['favorite'] = undefined;
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
   * @member {Boolean} latestVersion
   */
  exports.prototype['latestVersion'] = undefined;
  /**
   * @member {Integer} modelType
   */
  exports.prototype['modelType'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} permission
   */
  exports.prototype['permission'] = undefined;
  /**
   * @member {Integer} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * @member {Integer} stencilSet
   */
  exports.prototype['stencilSet'] = undefined;
  /**
   * @member {Integer} version
   */
  exports.prototype['version'] = undefined;




  return exports;
}));


