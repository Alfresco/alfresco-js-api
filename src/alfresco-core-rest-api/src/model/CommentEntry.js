(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Comment'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Comment'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Comment);
  }
}(this, function(ApiClient, Comment) {
  'use strict';

  /**
   * The CommentEntry model module.
   * @module model/CommentEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentEntry</code>.
   * @alias module:model/CommentEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>CommentEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentEntry} obj Optional instance to populate.
   * @return {module:model/CommentEntry} The populated <code>CommentEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Comment.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Comment} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
