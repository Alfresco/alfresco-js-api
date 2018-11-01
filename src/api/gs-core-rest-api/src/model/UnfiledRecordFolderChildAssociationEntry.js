
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './UnfiledRecordFolderChildAssociation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./UnfiledRecordFolderChildAssociation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChildAssociationEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderChildAssociation);
  }
}(this, function(ApiClient, UnfiledRecordFolderChildAssociation) {
  'use strict';




  /**
   * The UnfiledRecordFolderChildAssociationEntry model module.
   * @module  UnfiledRecordFolderChildAssociationEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledRecordFolderChildAssociationEntry</code>.
   * @alias UnfiledRecordFolderChildAssociationEntry
   * @class
   * @param entry {UnfiledRecordFolderChildAssociation}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>UnfiledRecordFolderChildAssociationEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledRecordFolderChildAssociationEntry} obj Optional instance to populate.
   * @return {UnfiledRecordFolderChildAssociationEntry} The populated <code>UnfiledRecordFolderChildAssociationEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = UnfiledRecordFolderChildAssociation.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {UnfiledRecordFolderChildAssociation} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


