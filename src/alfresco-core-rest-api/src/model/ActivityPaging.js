(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActivityPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.ActivityPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ActivityPagingList);
  }
}(this, function(ApiClient, ActivityPagingList) {
  'use strict';

  /**
   * The ActivityPaging model module.
   * @module model/ActivityPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ActivityPaging</code>.
   * @alias module:model/ActivityPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ActivityPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityPaging} obj Optional instance to populate.
   * @return {module:model/ActivityPaging} The populated <code>ActivityPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ActivityPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ActivityPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
