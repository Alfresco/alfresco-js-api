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
    root.AlfrescoCoreRestApi.TagBody1 = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The TagBody1 model module.
   * @module model/TagBody1
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagBody1</code>.
   * @alias module:model/TagBody1
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TagBody1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagBody1} obj Optional instance to populate.
   * @return {module:model/TagBody1} The populated <code>TagBody1</code> instance.
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
