(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/LightUserRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./LightUserRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.RelatedContentRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightUserRepresentation);
  }
}(this, function(ApiClient, LightUserRepresentation) {
  'use strict';




  /**
   * The RelatedContentRepresentation model module.
   * @module model/RelatedContentRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>RelatedContentRepresentation</code>.
   * @alias module:model/RelatedContentRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>RelatedContentRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelatedContentRepresentation} obj Optional instance to populate.
   * @return {module:model/RelatedContentRepresentation} The populated <code>RelatedContentRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('contentAvailable')) {
        obj['contentAvailable'] = ApiClient.convertToType(data['contentAvailable'], 'Boolean');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = LightUserRepresentation.constructFromObject(data['createdBy']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('link')) {
        obj['link'] = ApiClient.convertToType(data['link'], 'Boolean');
      }
      if (data.hasOwnProperty('linkUrl')) {
        obj['linkUrl'] = ApiClient.convertToType(data['linkUrl'], 'String');
      }
      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('previewStatus')) {
        obj['previewStatus'] = ApiClient.convertToType(data['previewStatus'], 'String');
      }
      if (data.hasOwnProperty('simpleType')) {
        obj['simpleType'] = ApiClient.convertToType(data['simpleType'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
      if (data.hasOwnProperty('sourceId')) {
        obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
      }
      if (data.hasOwnProperty('thumbnailStatus')) {
        obj['thumbnailStatus'] = ApiClient.convertToType(data['thumbnailStatus'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} contentAvailable
   */
  exports.prototype['contentAvailable'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {module:model/LightUserRepresentation} createdBy
   */
  exports.prototype['createdBy'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Boolean} link
   */
  exports.prototype['link'] = undefined;
  /**
   * @member {String} linkUrl
   */
  exports.prototype['linkUrl'] = undefined;
  /**
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} previewStatus
   */
  exports.prototype['previewStatus'] = undefined;
  /**
   * @member {String} simpleType
   */
  exports.prototype['simpleType'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;
  /**
   * @member {String} sourceId
   */
  exports.prototype['sourceId'] = undefined;
  /**
   * @member {String} thumbnailStatus
   */
  exports.prototype['thumbnailStatus'] = undefined;




  return exports;
}));


