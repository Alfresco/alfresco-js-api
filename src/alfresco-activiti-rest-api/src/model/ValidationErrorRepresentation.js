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
    root.ActivitiPublicRestApi.ValidationErrorRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ValidationErrorRepresentation model module.
   * @module model/ValidationErrorRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ValidationErrorRepresentation</code>.
   * @alias module:model/ValidationErrorRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>ValidationErrorRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidationErrorRepresentation} obj Optional instance to populate.
   * @return {module:model/ValidationErrorRepresentation} The populated <code>ValidationErrorRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('defaultDescription')) {
        obj['defaultDescription'] = ApiClient.convertToType(data['defaultDescription'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('problem')) {
        obj['problem'] = ApiClient.convertToType(data['problem'], 'String');
      }
      if (data.hasOwnProperty('problemReference')) {
        obj['problemReference'] = ApiClient.convertToType(data['problemReference'], 'String');
      }
      if (data.hasOwnProperty('validatorSetName')) {
        obj['validatorSetName'] = ApiClient.convertToType(data['validatorSetName'], 'String');
      }
      if (data.hasOwnProperty('warning')) {
        obj['warning'] = ApiClient.convertToType(data['warning'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} defaultDescription
   */
  exports.prototype['defaultDescription'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} problem
   */
  exports.prototype['problem'] = undefined;
  /**
   * @member {String} problemReference
   */
  exports.prototype['problemReference'] = undefined;
  /**
   * @member {String} validatorSetName
   */
  exports.prototype['validatorSetName'] = undefined;
  /**
   * @member {Boolean} warning
   */
  exports.prototype['warning'] = undefined;




  return exports;
}));


