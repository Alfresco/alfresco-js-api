(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './VersionPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./VersionPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.VersionPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.VersionPagingList);
  }
}(this, function(ApiClient, VersionPagingList) {
  'use strict';

  /**
   * The VersionPaging model module.
   * @module model/VersionPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>VersionPaging</code>.
   * @alias module:model/VersionPaging
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>VersionPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VersionPaging} obj Optional instance to populate.
   * @return {module:model/VersionPaging} The populated <code>VersionPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = VersionPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/VersionPagingList} list
   */
  exports.prototype['list'] = undefined;

  return exports;
}));
