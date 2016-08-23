(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './TagPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TagPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.TagPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.TagPagingList);
  }
}(this, function(ApiClient, TagPagingList) {
  'use strict';

  /**
   * The TagPaging model module.
   * @module model/TagPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TagPaging</code>.
   * @alias module:model/TagPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>TagPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TagPaging} obj Optional instance to populate.
   * @return {module:model/TagPaging} The populated <code>TagPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = TagPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/TagPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
