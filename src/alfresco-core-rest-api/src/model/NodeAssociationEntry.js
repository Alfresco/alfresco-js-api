(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssociation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssociation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssociationEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssociation);
  }
}(this, function(ApiClient, NodeAssociation) {
  'use strict';




  /**
   * The NodeAssociationEntry model module.
   * @module model/NodeAssociationEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssociationEntry</code>.
   * @alias module:model/NodeAssociationEntry
   * @class
   * @param entry {module:model/NodeAssociation}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeAssociationEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssociationEntry} obj Optional instance to populate.
   * @return {module:model/NodeAssociationEntry} The populated <code>NodeAssociationEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeAssociation.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/NodeAssociation} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


