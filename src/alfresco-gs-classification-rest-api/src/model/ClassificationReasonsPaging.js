

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationReasonsPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationReasonsPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPaging = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonsPagingList);
  }
}(this, function(ApiClient, ClassificationReasonsPagingList) {
  'use strict';




  /**
   * The ClassificationReasonsPaging model module.
   * @module ClassificationReasonsPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationReasonsPaging</code>.
   * @alias ClassificationReasonsPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClassificationReasonsPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationReasonsPaging} obj Optional instance to populate.
   * @return {ClassificationReasonsPaging} The populated <code>ClassificationReasonsPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ClassificationReasonsPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {ClassificationReasonsPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


