(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './MinimalNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MinimalNode'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.MinimalNode);
  }
}(this, function(ApiClient, MinimalNode) {
  'use strict';

  /**
   * The NodeMinimalEntry model module.
   * @module model/NodeMinimalEntry
   * @version 1
   */

  /**
   * Constructs a new <code>NodeMinimalEntry</code>.
   * @alias module:model/NodeMinimalEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeMinimalEntry} obj Optional instance to populate.
   * @return {module:model/NodeMinimalEntry} The populated <code>NodeMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = MinimalNode.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/MinimalNode} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
