(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Pagination', './UnfiledRecordFolder', './UnfiledRecordFolderChildAssociationEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Pagination'), require('./UnfiledRecordFolder'), require('./UnfiledRecordFolderChildAssociationEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderAssociationPagingList = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Pagination, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolder, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChildAssociationEntry);
  }
}(this, function(ApiClient, Pagination, UnfiledRecordFolder, UnfiledRecordFolderChildAssociationEntry) {
  'use strict';

  /**
   * The UnfiledRecordFolderAssociationPagingList model module.
   * @module model/UnfiledRecordFolderAssociationPagingList
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledRecordFolderAssociationPagingList</code>.
   * @alias module:model/UnfiledRecordFolderAssociationPagingList
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>UnfiledRecordFolderAssociationPagingList</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnfiledRecordFolderAssociationPagingList} obj Optional instance to populate.
   * @return {module:model/UnfiledRecordFolderAssociationPagingList} The populated <code>UnfiledRecordFolderAssociationPagingList</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entries')) {
        obj['entries'] = ApiClient.convertToType(data['entries'], [UnfiledRecordFolderChildAssociationEntry]);
      }
      if (data.hasOwnProperty('pagination')) {
        obj['pagination'] = Pagination.constructFromObject(data['pagination']);
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = UnfiledRecordFolder.constructFromObject(data['source']);
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/UnfiledRecordFolderChildAssociationEntry>} entries
   */
  exports.prototype['entries'] = undefined;

  /**
   * @member {module:model/Pagination} pagination
   */
  exports.prototype['pagination'] = undefined;

  /**
   * @member {module:model/UnfiledRecordFolder} source
   */
  exports.prototype['source'] = undefined;




  return exports;
}));
