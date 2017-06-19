(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssociation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssociation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssociationEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssociation);
  }
}(this, function(ApiClient, NodeChildAssociation) {
  'use strict';




  /**
   * The NodeChildAssociationEntry model module.
   * @module model/NodeChildAssociationEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssociationEntry</code>.
   * @alias module:model/NodeChildAssociationEntry
   * @class
   * @param entry {module:model/NodeChildAssociation}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeChildAssociationEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssociationEntry} obj Optional instance to populate.
   * @return {module:model/NodeChildAssociationEntry} The populated <code>NodeChildAssociationEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeChildAssociation.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NodeChildAssociation} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


