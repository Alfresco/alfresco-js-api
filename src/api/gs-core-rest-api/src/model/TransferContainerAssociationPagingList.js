
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination', './TransferContainer', './TransferContainerChildAssociationEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./TransferContainer'), require('./TransferContainerChildAssociationEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferContainerAssociationPagingList = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Pagination, root.AlfrescoGovernanceServicesRestApi.TransferContainer, root.AlfrescoGovernanceServicesRestApi.TransferContainerChildAssociationEntry);
  }
}(this, function(ApiClient, Pagination, TransferContainer, TransferContainerChildAssociationEntry) {
  'use strict';




  /**
   * The TransferContainerAssociationPagingList model module.
   * @module  TransferContainerAssociationPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferContainerAssociationPagingList</code>.
   * @alias TransferContainerAssociationPagingList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TransferContainerAssociationPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TransferContainerAssociationPagingList} obj Optional instance to populate.
   * @return {TransferContainerAssociationPagingList} The populated <code>TransferContainerAssociationPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [TransferContainerChildAssociationEntry]);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = TransferContainer.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleTransferContainerChildAssociationEntry>} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {TransferContainer} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


