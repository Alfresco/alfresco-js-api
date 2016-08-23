(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteMembershipRequest'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteMembershipRequest'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipRequestEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMembershipRequest);
  }
}(this, function(ApiClient, SiteMembershipRequest) {
  'use strict';

  /**
   * The SiteMembershipRequestEntry model module.
   * @module model/SiteMembershipRequestEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipRequestEntry</code>.
   * @alias module:model/SiteMembershipRequestEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteMembershipRequestEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipRequestEntry} obj Optional instance to populate.
   * @return {module:model/SiteMembershipRequestEntry} The populated <code>SiteMembershipRequestEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = SiteMembershipRequest.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMembershipRequest} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
