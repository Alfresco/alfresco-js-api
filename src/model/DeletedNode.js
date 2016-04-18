(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './NodeEntry', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./NodeEntry'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNode = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.NodeEntry, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, NodeEntry, UserInfo) {
  'use strict';

  /**
   * The DeletedNode model module.
   * @module model/DeletedNode
   * @version 1
   */

  /**
   * Constructs a new <code>DeletedNode</code>.
   * @alias module:model/DeletedNode
   * @class
   * @extends module:model/NodeEntry
   * @param archivedByUser
   * @param archivedAt
   */
  var exports = function(archivedByUser, archivedAt) {
    NodeEntry.call(this);
    this['archivedByUser'] = archivedByUser;
    this['archivedAt'] = archivedAt;
  };

  /**
   * Constructs a <code>DeletedNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNode} obj Optional instance to populate.
   * @return {module:model/DeletedNode} The populated <code>DeletedNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      NodeEntry.constructFromObject(data, obj);
      if (data.hasOwnProperty('archivedByUser')) {
        obj['archivedByUser'] = UserInfo.constructFromObject(data['archivedByUser']);
      }
      if (data.hasOwnProperty('archivedAt')) {
        obj['archivedAt'] = ApiClient.convertToType(data['archivedAt'], 'Date');
      }
    }
    return obj;
  }

  exports.prototype = Object.create(NodeEntry.prototype);
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
