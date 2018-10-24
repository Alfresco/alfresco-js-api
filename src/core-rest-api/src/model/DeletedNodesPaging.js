(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './DeletedNodesPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./DeletedNodesPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DeletedNodesPaging = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.DeletedNodesPagingList);
  }
}(this, function(ApiClient, DeletedNodesPagingList) {
  'use strict';

  /**
   * The DeletedNodesPaging model module.
   * @module model/DeletedNodesPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeletedNodesPaging</code>.
   * @alias module:model/DeletedNodesPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>DeletedNodesPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DeletedNodesPaging} obj Optional instance to populate.
   * @return {module:model/DeletedNodesPaging} The populated <code>DeletedNodesPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = DeletedNodesPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/DeletedNodesPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
