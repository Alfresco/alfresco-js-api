(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Rendition = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo);
  }
}(this, function(ApiClient, ContentInfo) {
  'use strict';

  /**
   * The Rendition model module.
   * @module model/Rendition
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Rendition</code>.
   * @alias module:model/Rendition
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>Rendition</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rendition} obj Optional instance to populate.
   * @return {module:model/Rendition} The populated <code>Rendition</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;




  return exports;
}));
