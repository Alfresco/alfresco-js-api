(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RecordFolder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RecordFolder'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordFolderEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordFolder);
  }
}(this, function(ApiClient, RecordFolder) {
  'use strict';

  /**
   * The RecordFolderEntry model module.
   * @module model/RecordFolderEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordFolderEntry</code>.
   * @alias module:model/RecordFolderEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>RecordFolderEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordFolderEntry} obj Optional instance to populate.
   * @return {module:model/RecordFolderEntry} The populated <code>RecordFolderEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = RecordFolder.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RecordFolder} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
