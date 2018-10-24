(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeFull'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeFull'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeFull);
  }
}(this, function(ApiClient, NodeFull) {
  'use strict';

  /**
   * The NodeEntry model module.
   * @module model/NodeEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeEntry</code>.
   * @alias module:model/NodeEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeEntry} obj Optional instance to populate.
   * @return {module:model/NodeEntry} The populated <code>NodeEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeFull.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeFull} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
