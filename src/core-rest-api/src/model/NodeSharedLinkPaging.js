(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeSharedLinkPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeSharedLinkPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeSharedLinkPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeSharedLinkPagingList);
  }
}(this, function(ApiClient, NodeSharedLinkPagingList) {
  'use strict';

  /**
   * The NodeSharedLinkPaging model module.
   * @module model/NodeSharedLinkPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeSharedLinkPaging</code>.
   * @alias module:model/NodeSharedLinkPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>NodeSharedLinkPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeSharedLinkPaging} obj Optional instance to populate.
   * @return {module:model/NodeSharedLinkPaging} The populated <code>NodeSharedLinkPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeSharedLinkPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeSharedLinkPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
