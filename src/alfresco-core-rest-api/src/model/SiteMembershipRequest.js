(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipRequest = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Site);
  }
}(this, function(ApiClient, Site) {
  'use strict';

  /**
   * The SiteMembershipRequest model module.
   * @module model/SiteMembershipRequest
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipRequest</code>.
   * @alias module:model/SiteMembershipRequest
   * @class
   * @param id
   * @param createdAt
   * @param entry
   */
  var exports = function(id, createdAt, entry) {

    this['id'] = id;
    this['createdAt'] = createdAt;
    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteMembershipRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipRequest} obj Optional instance to populate.
   * @return {module:model/SiteMembershipRequest} The populated <code>SiteMembershipRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Site.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {module:model/Site} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
