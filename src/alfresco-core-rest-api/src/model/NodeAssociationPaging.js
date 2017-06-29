(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssociationPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssociationPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssociationPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssociationPagingList);
  }
}(this, function(ApiClient, NodeAssociationPagingList) {
  'use strict';




  /**
   * The NodeAssociationPaging model module.
   * @module model/NodeAssociationPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssociationPaging</code>.
   * @alias module:model/NodeAssociationPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>NodeAssociationPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssociationPaging} obj Optional instance to populate.
   * @return {module:model/NodeAssociationPaging} The populated <code>NodeAssociationPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = NodeAssociationPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NodeAssociationPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


