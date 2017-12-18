

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuidePagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuidePagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePaging = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidePagingList);
  }
}(this, function(ApiClient, ClassificationGuidePagingList) {
  'use strict';




  /**
   * The ClassificationGuidePaging model module.
   * @module ClassificationGuidePaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuidePaging</code>.
   * @alias ClassificationGuidePaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ClassificationGuidePaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationGuidePaging} obj Optional instance to populate.
   * @return {ClassificationGuidePaging} The populated <code>ClassificationGuidePaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = ClassificationGuidePagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {ClassificationGuidePagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


