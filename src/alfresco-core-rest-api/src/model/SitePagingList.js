(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SitePagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, Pagination) {
  'use strict';

  /**
   * The SitePagingList model module.
   * @module model/SitePagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SitePagingList</code>.
   * @alias module:model/SitePagingList
   * @class
   * @param pagination
   */
  var exports = function(pagination) {

    this['pagination'] = pagination;
  };

  /**
   * Constructs a <code>SitePagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SitePagingList} obj Optional instance to populate.
   * @return {module:model/SitePagingList} The populated <code>SitePagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));
