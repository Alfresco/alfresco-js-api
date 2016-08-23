(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssocMinimalEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssocMinimalEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssocMinimalEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, NodeChildAssocMinimalEntry, Pagination) {
  'use strict';

  /**
   * The NodeChildAssocPagingList model module.
   * @module model/NodeChildAssocPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocPagingList</code>.
   * @alias module:model/NodeChildAssocPagingList
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NodeChildAssocPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocPagingList} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocPagingList} The populated <code>NodeChildAssocPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [NodeChildAssocMinimalEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/NodeChildAssocMinimalEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;




  return exports;
}));
