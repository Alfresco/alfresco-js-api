
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './UnfiledContainerAssociationPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./UnfiledContainerAssociationPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledContainerAssociationPaging = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerAssociationPagingList);
  }
}(this, function(ApiClient, UnfiledContainerAssociationPagingList) {
  'use strict';




  /**
   * The UnfiledContainerAssociationPaging model module.
   * @module  UnfiledContainerAssociationPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledContainerAssociationPaging</code>.
   * @alias UnfiledContainerAssociationPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UnfiledContainerAssociationPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledContainerAssociationPaging} obj Optional instance to populate.
   * @return {UnfiledContainerAssociationPaging} The populated <code>UnfiledContainerAssociationPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = UnfiledContainerAssociationPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {UnfiledContainerAssociationPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


