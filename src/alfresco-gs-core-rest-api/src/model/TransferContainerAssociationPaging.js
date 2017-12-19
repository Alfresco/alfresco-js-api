
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './TransferContainerAssociationPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TransferContainerAssociationPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferContainerAssociationPaging = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.TransferContainerAssociationPagingList);
  }
}(this, function(ApiClient, TransferContainerAssociationPagingList) {
  'use strict';




  /**
   * The TransferContainerAssociationPaging model module.
   * @module  TransferContainerAssociationPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferContainerAssociationPaging</code>.
   * @alias TransferContainerAssociationPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>TransferContainerAssociationPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TransferContainerAssociationPaging} obj Optional instance to populate.
   * @return {TransferContainerAssociationPaging} The populated <code>TransferContainerAssociationPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = TransferContainerAssociationPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {TransferContainerAssociationPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


