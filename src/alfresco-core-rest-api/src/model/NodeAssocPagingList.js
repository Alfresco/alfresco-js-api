(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssocMinimalEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssocMinimalEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssocPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssocMinimalEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, NodeAssocMinimalEntry, Pagination) {
  'use strict';

  /**
   * The NodeAssocPagingList model module.
   * @module model/NodeAssocPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssocPagingList</code>.
   * @alias module:model/NodeAssocPagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NodeAssocPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssocPagingList} obj Optional instance to populate.
   * @return {module:model/NodeAssocPagingList} The populated <code>NodeAssocPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [NodeAssocMinimalEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/NodeAssocMinimalEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));
