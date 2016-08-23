(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssocPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssocPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssocPagingList);
  }
}(this, function(ApiClient, NodeChildAssocPagingList) {
  'use strict';

  /**
   * The NodeChildAssocPaging model module.
   * @module model/NodeChildAssocPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocPaging</code>.
   * @alias module:model/NodeChildAssocPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodeChildAssocPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocPaging} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocPaging} The populated <code>NodeChildAssocPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeChildAssocPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeChildAssocPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
