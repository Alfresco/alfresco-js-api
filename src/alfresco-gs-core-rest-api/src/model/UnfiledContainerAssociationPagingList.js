
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination', './UnfiledContainer', './UnfiledContainerChildAssociationEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./UnfiledContainer'), require('./UnfiledContainerChildAssociationEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledContainerAssociationPagingList = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Pagination, root.AlfrescoGovernanceServicesRestApi.UnfiledContainer, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerChildAssociationEntry);
  }
}(this, function(ApiClient, Pagination, UnfiledContainer, UnfiledContainerChildAssociationEntry) {
  'use strict';




  /**
   * The UnfiledContainerAssociationPagingList model module.
   * @module  UnfiledContainerAssociationPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledContainerAssociationPagingList</code>.
   * @alias UnfiledContainerAssociationPagingList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UnfiledContainerAssociationPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledContainerAssociationPagingList} obj Optional instance to populate.
   * @return {UnfiledContainerAssociationPagingList} The populated <code>UnfiledContainerAssociationPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [UnfiledContainerChildAssociationEntry]);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = UnfiledContainer.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleUnfiledContainerChildAssociationEntry>} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {UnfiledContainer} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


