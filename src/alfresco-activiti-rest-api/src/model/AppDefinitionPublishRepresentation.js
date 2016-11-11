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
    root.ActivitiPublicRestApi.AppDefinitionPublishRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The AppDefinitionPublishRepresentation model module.
   * @module model/AppDefinitionPublishRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>AppDefinitionPublishRepresentation</code>.
   * @alias module:model/AppDefinitionPublishRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>AppDefinitionPublishRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/AppDefinitionPublishRepresentation} obj Optional instance to populate.
   * @return {module:model/AppDefinitionPublishRepresentation} The populated <code>AppDefinitionPublishRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('force')) {
        obj['force'] = ApiClient.convertToType(data['force'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {Boolean} force
   */
  exports.prototype['force'] = undefined;




  return exports;
}));


