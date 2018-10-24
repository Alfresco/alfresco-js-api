(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeAssocMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeAssocMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeAssocMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeAssocMinimal);
  }
}(this, function(ApiClient, NodeAssocMinimal) {
  'use strict';

  /**
   * The NodeAssocMinimalEntry model module.
   * @module model/NodeAssocMinimalEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeAssocMinimalEntry</code>.
   * @alias module:model/NodeAssocMinimalEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeAssocMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeAssocMinimalEntry} obj Optional instance to populate.
   * @return {module:model/NodeAssocMinimalEntry} The populated <code>NodeAssocMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeAssocMinimal.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeAssocMinimal} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
