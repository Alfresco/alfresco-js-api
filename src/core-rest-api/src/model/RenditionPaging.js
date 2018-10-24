(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RenditionPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RenditionPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RenditionPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RenditionPagingList);
  }
}(this, function(ApiClient, RenditionPagingList) {
  'use strict';

  /**
   * The RenditionPaging model module.
   * @module model/RenditionPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RenditionPaging</code>.
   * @alias module:model/RenditionPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>RenditionPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionPaging} obj Optional instance to populate.
   * @return {module:model/RenditionPaging} The populated <code>RenditionPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = RenditionPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RenditionPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
