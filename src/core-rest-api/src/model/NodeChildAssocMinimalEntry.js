(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeChildAssocMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeChildAssocMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeChildAssocMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeChildAssocMinimal);
  }
}(this, function(ApiClient, NodeChildAssocMinimal) {
  'use strict';

  /**
   * The NodeChildAssocMinimalEntry model module.
   * @module model/NodeChildAssocMinimalEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeChildAssocMinimalEntry</code>.
   * @alias module:model/NodeChildAssocMinimalEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeChildAssocMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeChildAssocMinimalEntry} obj Optional instance to populate.
   * @return {module:model/NodeChildAssocMinimalEntry} The populated <code>NodeChildAssocMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeChildAssocMinimal.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeChildAssocMinimal} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
