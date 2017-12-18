
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RecordCategory'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RecordCategory'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordCategoryEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordCategory);
  }
}(this, function(ApiClient, RecordCategory) {
  'use strict';




  /**
   * The RecordCategoryEntry model module.
   * @module  RecordCategoryEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordCategoryEntry</code>.
   * @alias RecordCategoryEntry
   * @class
   * @param entry {RecordCategory}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>RecordCategoryEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RecordCategoryEntry} obj Optional instance to populate.
   * @return {RecordCategoryEntry} The populated <code>RecordCategoryEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = RecordCategory.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {RecordCategory} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


