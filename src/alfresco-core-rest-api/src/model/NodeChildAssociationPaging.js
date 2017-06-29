(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssociationPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssociationPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssociationPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssociationPagingList);
  }
}(this, function(ApiClient, NodeChildAssociationPagingList) {
  'use strict';




  /**
   * The NodeChildAssociationPaging model module.
   * @module model/NodeChildAssociationPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssociationPaging</code>.
   * @alias module:model/NodeChildAssociationPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NodeChildAssociationPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssociationPaging} obj Optional instance to populate.
   * @return {module:model/NodeChildAssociationPaging} The populated <code>NodeChildAssociationPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeChildAssociationPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NodeChildAssociationPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


