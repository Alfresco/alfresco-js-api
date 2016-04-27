(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './MinimalNode', './NodeMinimalEntry', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MinimalNode'), require('./NodeMinimalEntry'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodeMinimal = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.MinimalNode, root.AlfrescoCoreRestApi.NodeMinimalEntry, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, MinimalNode, NodeMinimalEntry, UserInfo) {
  'use strict';

  /**
   * The DeletedNodeMinimal model module.
   * @module model/DeletedNodeMinimal
   * @version 1
   */

  /**
   * Constructs a new <code>DeletedNodeMinimal</code>.
   * @alias module:model/DeletedNodeMinimal
   * @class
   * @extends module:model/NodeMinimalEntry
   * @param entry
   * @param archivedByUser
   * @param archivedAt
   */
  var exports = function(entry, archivedByUser, archivedAt) {
    NodeMinimalEntry.call(this, entry);
    this['archivedByUser'] = archivedByUser;
    this['archivedAt'] = archivedAt;
  };

  /**
   * Constructs a <code>DeletedNodeMinimal</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodeMinimal} obj Optional instance to populate.
   * @return {module:model/DeletedNodeMinimal} The populated <code>DeletedNodeMinimal</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      NodeMinimalEntry.constructFromObject(data, obj);
      if (data.hasOwnProperty('archivedByUser')) {
        obj['archivedByUser'] = UserInfo.constructFromObject(data['archivedByUser']);
      }
      if (data.hasOwnProperty('archivedAt')) {
        obj['archivedAt'] = ApiClient.convertToType(data['archivedAt'], 'Date');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NodeMinimalEntry.prototype);
  exports.prototype.constructor = exports;


  /**
   * @member {module:model/UserInfo} archivedByUser
   */
  exports.prototype['archivedByUser'] = undefined;

  /**
   * @member {Date} archivedAt
   */
  exports.prototype['archivedAt'] = undefined;




  return exports;
}));
