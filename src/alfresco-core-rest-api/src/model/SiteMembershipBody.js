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
    root.AlfrescoCoreRestApi.SiteMembershipBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteMembershipBody model module.
   * @module model/SiteMembershipBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipBody</code>.
   * @alias module:model/SiteMembershipBody
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>SiteMembershipBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipBody} obj Optional instance to populate.
   * @return {module:model/SiteMembershipBody} The populated <code>SiteMembershipBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;




  return exports;
}));
