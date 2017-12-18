
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './FilePlan', './Pagination', './RecordCategoryEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./FilePlan'), require('./Pagination'), require('./RecordCategoryEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordCategoryPagingList = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.FilePlan, root.AlfrescoGovernanceServicesRestApi.Pagination, root.AlfrescoGovernanceServicesRestApi.RecordCategoryEntry);
  }
}(this, function(ApiClient, FilePlan, Pagination, RecordCategoryEntry) {
  'use strict';




  /**
   * The RecordCategoryPagingList model module.
   * @module  RecordCategoryPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordCategoryPagingList</code>.
   * @alias RecordCategoryPagingList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RecordCategoryPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RecordCategoryPagingList} obj Optional instance to populate.
   * @return {RecordCategoryPagingList} The populated <code>RecordCategoryPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [RecordCategoryEntry]);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = FilePlan.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleRecordCategoryEntry>} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {FilePlan} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


