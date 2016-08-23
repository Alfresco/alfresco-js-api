(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './CommentEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CommentEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.CommentPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.CommentEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, CommentEntry, Pagination) {
  'use strict';

  /**
   * The CommentPagingList model module.
   * @module model/CommentPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CommentPagingList</code>.
   * @alias module:model/CommentPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>CommentPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CommentPagingList} obj Optional instance to populate.
   * @return {module:model/CommentPagingList} The populated <code>CommentPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [CommentEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/CommentEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));
