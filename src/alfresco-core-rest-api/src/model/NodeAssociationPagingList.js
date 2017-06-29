(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Node', './NodeAssociationEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Node'), require('./NodeAssociationEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssociationPagingList = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Node, root.AlfrescoCoreRestApi.NodeAssociationEntry, root.AlfrescoCoreRestApi.Pagination);
  }
}(this, function(ApiClient, Node, NodeAssociationEntry, Pagination) {
  'use strict';




  /**
   * The NodeAssociationPagingList model module.
   * @module model/NodeAssociationPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssociationPagingList</code>.
   * @alias module:model/NodeAssociationPagingList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>NodeAssociationPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssociationPagingList} obj Optional instance to populate.
   * @return {module:model/NodeAssociationPagingList} The populated <code>NodeAssociationPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [NodeAssociationEntry]);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = Node.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<module:model/NodeAssociationEntry>} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {module:model/Node} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


