(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RecordCategoryChild'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RecordCategoryChild'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordCategoryChildEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordCategoryChild);
  }
}(this, function(ApiClient, RecordCategoryChild) {
  'use strict';

  /**
   * The RecordCategoryChildEntry model module.
   * @module model/RecordCategoryChildEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordCategoryChildEntry</code>.
   * @alias module:model/RecordCategoryChildEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>RecordCategoryChildEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordCategoryChildEntry} obj Optional instance to populate.
   * @return {module:model/RecordCategoryChildEntry} The populated <code>RecordCategoryChildEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = RecordCategoryChild.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RecordCategoryChild} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
