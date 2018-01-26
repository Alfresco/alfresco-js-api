
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination', './RecordFolder', './RecordFolderChildAssociationEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./RecordFolder'), require('./RecordFolderChildAssociationEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordFolderAssociationPagingList = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Pagination, root.AlfrescoGovernanceServicesRestApi.RecordFolder, root.AlfrescoGovernanceServicesRestApi.RecordFolderChildAssociationEntry);
  }
}(this, function(ApiClient, Pagination, RecordFolder, RecordFolderChildAssociationEntry) {
  'use strict';




  /**
   * The RecordFolderAssociationPagingList model module.
   * @module  RecordFolderAssociationPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordFolderAssociationPagingList</code>.
   * @alias RecordFolderAssociationPagingList
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>RecordFolderAssociationPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RecordFolderAssociationPagingList} obj Optional instance to populate.
   * @return {RecordFolderAssociationPagingList} The populated <code>RecordFolderAssociationPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [RecordFolderChildAssociationEntry]);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = RecordFolder.constructFromObject(data['source']);
      }
    }
    return obj;
  }

  /**
   * @member {Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;
  /**
   * @member {Array.<moduleRecordFolderChildAssociationEntry>} entries
   */
  exports.prototype['entries'] = undefined;
  /**
   * @member {RecordFolder} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


