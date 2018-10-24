(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteMembershipRequestPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteMembershipRequestPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMembershipRequestPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteMembershipRequestPagingList);
  }
}(this, function(ApiClient, SiteMembershipRequestPagingList) {
  'use strict';

  /**
   * The SiteMembershipRequestPaging model module.
   * @module model/SiteMembershipRequestPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMembershipRequestPaging</code>.
   * @alias module:model/SiteMembershipRequestPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SiteMembershipRequestPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMembershipRequestPaging} obj Optional instance to populate.
   * @return {module:model/SiteMembershipRequestPaging} The populated <code>SiteMembershipRequestPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = SiteMembershipRequestPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMembershipRequestPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
