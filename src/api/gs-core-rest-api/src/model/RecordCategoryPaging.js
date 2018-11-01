
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RecordCategoryPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RecordCategoryPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordCategoryPaging = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordCategoryPagingList);
  }
}(this, function(ApiClient, RecordCategoryPagingList) {
  'use strict';




  /**
   * The RecordCategoryPaging model module.
   * @module  RecordCategoryPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordCategoryPaging</code>.
   * @alias RecordCategoryPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecordCategoryPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RecordCategoryPaging} obj Optional instance to populate.
   * @return {RecordCategoryPaging} The populated <code>RecordCategoryPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = RecordCategoryPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {RecordCategoryPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


