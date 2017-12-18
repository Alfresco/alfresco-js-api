

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './TopicPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TopicPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SubtopicPaging = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.TopicPagingList);
  }
}(this, function(ApiClient, TopicPagingList) {
  'use strict';




  /**
   * The SubtopicPaging model module.
   * @module SubtopicPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SubtopicPaging</code>.
   * @alias SubtopicPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>SubtopicPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {SubtopicPaging} obj Optional instance to populate.
   * @return {SubtopicPaging} The populated <code>SubtopicPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = TopicPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {TopicPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


