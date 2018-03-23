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
    root.AlfrescoCoreRestApi.GroupMember = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The GroupMember model module.
   * @module model/GroupMember
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupMember</code>.
   * @alias module:model/GroupMember
   * @class
   * @param id
   * @param person
   * @param role
   */
  var exports = function(id, displayName, memberType) {

    this['id'] = id;
    this['displayName'] = displayName;
    this['memberType'] = memberType;
  };

  /**
   * Constructs a <code>GroupMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupMember} obj Optional instance to populate.
   * @return {module:model/GroupMember} The populated <code>GroupMember</code> instance.
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
      if (data.hasOwnProperty('memberType')) {
        obj['memberType'] = ApiClient.convertToType(data['memberType'], 'String');
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
   * @member {String} memberType
   */
  exports.prototype['memberType'] = undefined;

  return exports;
}));
