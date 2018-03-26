(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './GroupsPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GroupsPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.GroupMemberPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.GroupsPagingList);
  }
}(this, function(ApiClient, GroupsPagingList) {
  'use strict';

  /**
   * The GroupMemberPaging model module.
   * @module model/GroupMemberPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>GroupMemberPaging</code>.
   * @alias module:model/GroupMemberPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>GroupsPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GroupsPagingList} obj Optional instance to populate.
   * @return {module:model/GroupsPagingList} The populated <code>GroupsPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = GroupsPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/GroupMemberPaging} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
