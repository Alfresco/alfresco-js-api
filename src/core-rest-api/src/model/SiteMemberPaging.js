(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SitePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SitePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMemberPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SitePagingList);
  }
}(this, function(ApiClient, SitePagingList) {
  'use strict';

  /**
   * The SiteMemberPaging model module.
   * @module model/SiteMemberPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMemberPaging</code>.
   * @alias module:model/SiteMemberPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SiteMemberPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMemberPaging} obj Optional instance to populate.
   * @return {module:model/SiteMemberPaging} The populated <code>SiteMemberPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = SitePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SitePagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
