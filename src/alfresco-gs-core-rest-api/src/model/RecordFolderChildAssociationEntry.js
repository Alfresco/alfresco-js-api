
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RecordFolderChildAssociation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RecordFolderChildAssociation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordFolderChildAssociationEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordFolderChildAssociation);
  }
}(this, function(ApiClient, RecordFolderChildAssociation) {
  'use strict';




  /**
   * The RecordFolderChildAssociationEntry model module.
   * @module  RecordFolderChildAssociationEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordFolderChildAssociationEntry</code>.
   * @alias RecordFolderChildAssociationEntry
   * @class
   * @param entry {RecordFolderChildAssociation}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>RecordFolderChildAssociationEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RecordFolderChildAssociationEntry} obj Optional instance to populate.
   * @return {RecordFolderChildAssociationEntry} The populated <code>RecordFolderChildAssociationEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = RecordFolderChildAssociation.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {RecordFolderChildAssociation} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


