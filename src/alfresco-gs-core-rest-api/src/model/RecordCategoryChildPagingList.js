(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination', './RecordCategory', './RecordCategoryChildEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./RecordCategory'), require('./RecordCategoryChildEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordCategoryChildPagingList = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Pagination, root.AlfrescoGovernanceServicesRestApi.RecordCategory, root.AlfrescoGovernanceServicesRestApi.RecordCategoryChildEntry);
  }
}(this, function(ApiClient, Pagination, RecordCategory, RecordCategoryChildEntry) {
  'use strict';

  /**
   * The RecordCategoryChildPagingList model module.
   * @module model/RecordCategoryChildPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordCategoryChildPagingList</code>.
   * @alias module:model/RecordCategoryChildPagingList
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>RecordCategoryChildPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordCategoryChildPagingList} obj Optional instance to populate.
   * @return {module:model/RecordCategoryChildPagingList} The populated <code>RecordCategoryChildPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [RecordCategoryChildEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = RecordCategory.constructFromObject(data['source']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/RecordCategoryChildEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;

  /**
   * @member {module:model/RecordCategory} source
   */
  exports.prototype['source'] = undefined;




  return exports;
}));
