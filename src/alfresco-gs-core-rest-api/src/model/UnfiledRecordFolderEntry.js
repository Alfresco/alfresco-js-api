
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './UnfiledRecordFolder'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./UnfiledRecordFolder'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolder);
  }
}(this, function(ApiClient, UnfiledRecordFolder) {
  'use strict';




  /**
   * The UnfiledRecordFolderEntry model module.
   * @module  UnfiledRecordFolderEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledRecordFolderEntry</code>.
   * @alias UnfiledRecordFolderEntry
   * @class
   * @param entry {UnfiledRecordFolder}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>UnfiledRecordFolderEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledRecordFolderEntry} obj Optional instance to populate.
   * @return {UnfiledRecordFolderEntry} The populated <code>UnfiledRecordFolderEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = UnfiledRecordFolder.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {UnfiledRecordFolder} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


