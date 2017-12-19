

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationReasonEntry', './Pagination'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationReasonEntry'), require('./Pagination'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPagingList = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonEntry, root.AlfrescoGovernanceServicesSecurityControls.Pagination);
  }
}(this, function(ApiClient, ClassificationReasonEntry, Pagination) {
  'use strict';




  /**
   * The ClassificationReasonsPagingList model module.
   * @module ClassificationReasonsPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationReasonsPagingList</code>.
   * @alias ClassificationReasonsPagingList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ClassificationReasonsPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationReasonsPagingList} obj Optional instance to populate.
   * @return {ClassificationReasonsPagingList} The populated <code>ClassificationReasonsPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [ClassificationReasonEntry]);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleClassificationReasonEntry>} entries
   */
  exports.prototype['entries'] = undefined;



  return exports;
}));


