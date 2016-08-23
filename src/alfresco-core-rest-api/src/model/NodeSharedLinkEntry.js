(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodeSharedLink'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodeSharedLink'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeSharedLinkEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodeSharedLink);
  }
}(this, function(ApiClient, NodeSharedLink) {
  'use strict';

  /**
   * The NodeSharedLinkEntry model module.
   * @module model/NodeSharedLinkEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeSharedLinkEntry</code>.
   * @alias module:model/NodeSharedLinkEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>NodeSharedLinkEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeSharedLinkEntry} obj Optional instance to populate.
   * @return {module:model/NodeSharedLinkEntry} The populated <code>NodeSharedLinkEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = NodeSharedLink.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/NodeSharedLink} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
