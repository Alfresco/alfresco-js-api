(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ContentInfo', './UserInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContentInfo'), require('./UserInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeSharedLink = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ContentInfo, root.AlfrescoCoreRestApi.UserInfo);
  }
}(this, function(ApiClient, ContentInfo, UserInfo) {
  'use strict';

  /**
   * The NodeSharedLink model module.
   * @module model/NodeSharedLink
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeSharedLink</code>.
   * @alias module:model/NodeSharedLink
   * @class
   */
  var exports = function() {









  };

  /**
   * Constructs a <code>NodeSharedLink</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeSharedLink} obj Optional instance to populate.
   * @return {module:model/NodeSharedLink} The populated <code>NodeSharedLink</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('nodeId')) {
        obj['nodeId'] = ApiClient.convertToType(data['nodeId'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('modifiedByUser')) {
        obj['modifiedByUser'] = UserInfo.constructFromObject(data['modifiedByUser']);
      }
      if (data.hasOwnProperty('sharedByUser')) {
        obj['sharedByUser'] = UserInfo.constructFromObject(data['sharedByUser']);
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ContentInfo.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('allowableOperations')) {
        obj['allowableOperations'] = ApiClient.convertToType(data['allowableOperations'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} nodeId
   */
  exports.prototype['nodeId'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {module:model/UserInfo} modifiedByUser
   */
  exports.prototype['modifiedByUser'] = undefined;

  /**
   * @member {module:model/UserInfo} sharedByUser
   */
  exports.prototype['sharedByUser'] = undefined;

  /**
   * @member {module:model/ContentInfo} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {string[]} allowableOperations
   */
  exports.prototype['allowableOperations'] = undefined;




  return exports;
}));
