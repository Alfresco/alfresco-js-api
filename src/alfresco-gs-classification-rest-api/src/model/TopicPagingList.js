

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination', './TopicEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./TopicEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.TopicPagingList = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.Pagination, root.AlfrescoGovernanceServicesSecurityControls.TopicEntry);
  }
}(this, function(ApiClient, Pagination, TopicEntry) {
  'use strict';




  /**
   * The TopicPagingList model module.
   * @module TopicPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TopicPagingList</code>.
   * @alias TopicPagingList
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TopicPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TopicPagingList} obj Optional instance to populate.
   * @return {TopicPagingList} The populated <code>TopicPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [TopicEntry]);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleTopicEntry>} entries
   */
  exports.prototype['entries'] = undefined;



  return exports;
}));


