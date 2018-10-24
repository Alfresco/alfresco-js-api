(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodePaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodePagingList);
  }
}(this, function(ApiClient, NodePagingList) {
  'use strict';

  /**
   * The NodePaging model module.
   * @module model/NodePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodePaging</code>.
   * @alias module:model/NodePaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodePaging} obj Optional instance to populate.
   * @return {module:model/NodePaging} The populated <code>NodePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
