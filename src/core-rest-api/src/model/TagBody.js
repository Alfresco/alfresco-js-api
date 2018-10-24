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
    root.AlfrescoCoreRestApi.TagBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TagBody model module.
   * @module model/TagBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagBody</code>.
   * @alias module:model/TagBody
   * @class
   * @param tag
   */
  var exports = function(tag) {

    this['tag'] = tag;
  };

  /**
   * Constructs a <code>TagBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagBody} obj Optional instance to populate.
   * @return {module:model/TagBody} The populated <code>TagBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('tag')) {
        obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} tag
   */
  exports.prototype['tag'] = undefined;




  return exports;
}));
