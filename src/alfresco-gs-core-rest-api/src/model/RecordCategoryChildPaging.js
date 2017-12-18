
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RecordCategoryChildPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RecordCategoryChildPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordCategoryChildPaging = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordCategoryChildPagingList);
  }
}(this, function(ApiClient, RecordCategoryChildPagingList) {
  'use strict';




  /**
   * The RecordCategoryChildPaging model module.
   * @module  RecordCategoryChildPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordCategoryChildPaging</code>.
   * @alias RecordCategoryChildPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecordCategoryChildPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RecordCategoryChildPaging} obj Optional instance to populate.
   * @return {RecordCategoryChildPaging} The populated <code>RecordCategoryChildPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = RecordCategoryChildPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {RecordCategoryChildPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


