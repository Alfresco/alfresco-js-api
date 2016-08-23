(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNode'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNode'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodeEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNode);
  }
}(this, function(ApiClient, DeletedNode) {
  'use strict';

  /**
   * The DeletedNodeEntry model module.
   * @module model/DeletedNodeEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodeEntry</code>.
   * @alias module:model/DeletedNodeEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeletedNodeEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodeEntry} obj Optional instance to populate.
   * @return {module:model/DeletedNodeEntry} The populated <code>DeletedNodeEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = DeletedNode.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/DeletedNode} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
