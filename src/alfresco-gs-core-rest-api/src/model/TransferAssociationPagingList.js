
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination', './Transfer', './TransferChildAssociationEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./Transfer'), require('./TransferChildAssociationEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferAssociationPagingList = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Pagination, root.AlfrescoGovernanceServicesRestApi.Transfer, root.AlfrescoGovernanceServicesRestApi.TransferChildAssociationEntry);
  }
}(this, function(ApiClient, Pagination, Transfer, TransferChildAssociationEntry) {
  'use strict';




  /**
   * The TransferAssociationPagingList model module.
   * @module  TransferAssociationPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferAssociationPagingList</code>.
   * @alias TransferAssociationPagingList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TransferAssociationPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TransferAssociationPagingList} obj Optional instance to populate.
   * @return {TransferAssociationPagingList} The populated <code>TransferAssociationPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [TransferChildAssociationEntry]);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = Transfer.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleTransferChildAssociationEntry>} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {Transfer} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


