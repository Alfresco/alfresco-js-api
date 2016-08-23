(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PersonNetworkPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonNetworkPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonNetworkPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PersonNetworkPagingList);
  }
}(this, function(ApiClient, PersonNetworkPagingList) {
  'use strict';

  /**
   * The PersonNetworkPaging model module.
   * @module model/PersonNetworkPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonNetworkPaging</code>.
   * @alias module:model/PersonNetworkPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>PersonNetworkPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonNetworkPaging} obj Optional instance to populate.
   * @return {module:model/PersonNetworkPaging} The populated <code>PersonNetworkPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = PersonNetworkPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/PersonNetworkPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
