(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ContentInfo = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ContentInfo model module.
   * @module model/ContentInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ContentInfo</code>.
   * @alias module:model/ContentInfo
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>ContentInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContentInfo} obj Optional instance to populate.
   * @return {module:model/ContentInfo} The populated <code>ContentInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('mimeTypeName')) {
        obj['mimeTypeName'] = ApiClient.convertToType(data['mimeTypeName'], 'String');
      }
      if (data.hasOwnProperty('sizeInBytes')) {
        obj['sizeInBytes'] = ApiClient.convertToType(data['sizeInBytes'], 'Integer');
      }
      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;

  /**
   * @member {String} mimeTypeName
   */
  exports.prototype['mimeTypeName'] = undefined;

  /**
   * @member {Integer} sizeInBytes
   */
  exports.prototype['sizeInBytes'] = undefined;

  /**
   * @member {String} encoding
   */
  exports.prototype['encoding'] = undefined;




  return exports;
}));
