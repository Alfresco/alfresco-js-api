(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssocPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssocPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssocPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssocPagingList);
  }
}(this, function(ApiClient, NodeAssocPagingList) {
  'use strict';

  /**
   * The NodeAssocPaging model module.
   * @module model/NodeAssocPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssocPaging</code>.
   * @alias module:model/NodeAssocPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodeAssocPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssocPaging} obj Optional instance to populate.
   * @return {module:model/NodeAssocPaging} The populated <code>NodeAssocPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeAssocPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeAssocPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
