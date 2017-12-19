
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './UnfiledRecordFolderAssociationPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./UnfiledRecordFolderAssociationPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderAssociationPaging = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderAssociationPagingList);
  }
}(this, function(ApiClient, UnfiledRecordFolderAssociationPagingList) {
  'use strict';




  /**
   * The UnfiledRecordFolderAssociationPaging model module.
   * @module  UnfiledRecordFolderAssociationPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledRecordFolderAssociationPaging</code>.
   * @alias UnfiledRecordFolderAssociationPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>UnfiledRecordFolderAssociationPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledRecordFolderAssociationPaging} obj Optional instance to populate.
   * @return {UnfiledRecordFolderAssociationPaging} The populated <code>UnfiledRecordFolderAssociationPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = UnfiledRecordFolderAssociationPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {UnfiledRecordFolderAssociationPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


