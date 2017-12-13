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
   * @module model/SubtopicPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SubtopicPaging</code>.
   * @alias module:model/SubtopicPaging
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>SubtopicPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SubtopicPaging} obj Optional instance to populate.
   * @return {module:model/SubtopicPaging} The populated <code>SubtopicPaging</code> instance.
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
   * @member {module:model/TopicPagingList} list
   */
  exports.prototype['list'] = undefined;




  return exports;
}));
