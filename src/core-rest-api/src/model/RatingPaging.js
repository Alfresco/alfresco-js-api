(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RatingPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RatingPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RatingPagingList);
  }
}(this, function(ApiClient, RatingPagingList) {
  'use strict';

  /**
   * The RatingPaging model module.
   * @module model/RatingPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingPaging</code>.
   * @alias module:model/RatingPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RatingPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingPaging} obj Optional instance to populate.
   * @return {module:model/RatingPaging} The populated <code>RatingPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = RatingPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RatingPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
