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
    root.AlfrescoCoreRestApi.CommentBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The CommentBody model module.
   * @module model/CommentBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentBody</code>.
   * @alias module:model/CommentBody
   * @class
   * @param content
   */
  var exports = function(content) {

    this['content'] = content;
  };

  /**
   * Constructs a <code>CommentBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentBody} obj Optional instance to populate.
   * @return {module:model/CommentBody} The populated <code>CommentBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;




  return exports;
}));
