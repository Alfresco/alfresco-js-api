(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/AbstractRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./AbstractRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ResultListDataRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.AbstractRepresentation);
  }
}(this, function(ApiClient, AbstractRepresentation) {
  'use strict';




  /**
   * The ResultListDataRepresentation model module.
   * @module model/ResultListDataRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ResultListDataRepresentation</code>.
   * @alias module:model/ResultListDataRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>ResultListDataRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ResultListDataRepresentation} obj Optional instance to populate.
   * @return {module:model/ResultListDataRepresentation} The populated <code>ResultListDataRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('data')) {
        obj['data'] = ApiClient.convertToType(data['data'], 'object');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
      if (data.hasOwnProperty('start')) {
        obj['start'] = ApiClient.convertToType(data['start'], 'Integer');
      }
      if (data.hasOwnProperty('total')) {
        obj['total'] = ApiClient.convertToType(data['total'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/AbstractRepresentation>} data
   */
  exports.prototype['data'] = undefined;
  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;
  /**
   * @member {Integer} start
   */
  exports.prototype['start'] = undefined;
  /**
   * @member {Integer} total
   */
  exports.prototype['total'] = undefined;




  return exports;
}));


