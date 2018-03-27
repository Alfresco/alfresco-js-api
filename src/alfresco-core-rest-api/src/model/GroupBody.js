(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GroupBody model module.
   * @module model/GroupBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupBody</code>.
   * @alias module:model/GroupBody
   * @class
   * @param isRoot
   * @param displayName
   * @param parentIds
   * @param id
   */
  var exports = function(isRoot, displayName, id) {
    this['displayName'] = displayName;
    this['id'] = id;
  };

  /**
   * Constructs a <code>Group</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Group} obj Optional instance to populate.
   * @return {module:model/Group} The populated <code>Group</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('displayName')) {
        obj['displayName'] = ApiClient.convertToType(data['displayName'], 'String');
      }
      if (data.hasOwnProperty('parentIds')) {
        obj['parentIds'] = ApiClient.convertToType(data['parentIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} displayName
   */
  exports.prototype['displayName'] = undefined;

  /**
   * @member {string[]} parentIds
   */
  exports.prototype['parentIds'] = undefined;

  return exports;
}));
