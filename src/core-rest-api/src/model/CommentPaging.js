(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CommentPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.CommentPagingList);
  }
}(this, function(ApiClient, CommentPagingList) {
  'use strict';

  /**
   * The CommentPaging model module.
   * @module model/CommentPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentPaging</code>.
   * @alias module:model/CommentPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>CommentPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentPaging} obj Optional instance to populate.
   * @return {module:model/CommentPaging} The populated <code>CommentPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = CommentPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/CommentPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
