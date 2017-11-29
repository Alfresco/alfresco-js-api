(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './VersionEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VersionEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VersionPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.VersionEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, VersionEntry, Pagination) {
  'use strict';

  /**
   * The VersionPagingList model module.
   * @module model/VersionPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VersionPagingList</code>.
   * @alias module:model/VersionPagingList
   * @class
   * @param entries
   * @param pagination
   */
  var exports = function(entries, pagination) {

    this['entries'] = entries;
    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>VersionPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VersionPagingList} obj Optional instance to populate.
   * @return {module:model/VersionPagingList} The populated <code>VersionPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [VersionEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/VersionEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;

  return exports;
}));
