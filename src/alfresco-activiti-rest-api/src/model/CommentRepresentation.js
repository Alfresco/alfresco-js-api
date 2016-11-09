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
    root.ActivitiPublicRestApi.CommentRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.LightUserRepresentation);
  }
}(this, function(ApiClient, LightUserRepresentation) {
  'use strict';




  /**
   * The CommentRepresentation model module.
   * @module model/CommentRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>CommentRepresentation</code>.
   * @alias module:model/CommentRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CommentRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentRepresentation} obj Optional instance to populate.
   * @return {module:model/CommentRepresentation} The populated <code>CommentRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = LightUserRepresentation.constructFromObject(data['createdBy']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
    }
    return obj;
  }

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
   * @member {String} message
   */
  exports.prototype['message'] = undefined;




  return exports;
}));


