(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNodeMinimal'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNodeMinimal'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodeMinimalEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNodeMinimal);
  }
}(this, function(ApiClient, DeletedNodeMinimal) {
  'use strict';

  /**
   * The DeletedNodeMinimalEntry model module.
   * @module model/DeletedNodeMinimalEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodeMinimalEntry</code>.
   * @alias module:model/DeletedNodeMinimalEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeletedNodeMinimalEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodeMinimalEntry} obj Optional instance to populate.
   * @return {module:model/DeletedNodeMinimalEntry} The populated <code>DeletedNodeMinimalEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = DeletedNodeMinimal.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/DeletedNodeMinimal} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
