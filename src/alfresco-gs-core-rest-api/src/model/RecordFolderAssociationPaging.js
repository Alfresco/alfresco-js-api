
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RecordFolderAssociationPagingList'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RecordFolderAssociationPagingList'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordFolderAssociationPaging = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RecordFolderAssociationPagingList);
  }
}(this, function(ApiClient, RecordFolderAssociationPagingList) {
  'use strict';




  /**
   * The RecordFolderAssociationPaging model module.
   * @module  RecordFolderAssociationPaging
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordFolderAssociationPaging</code>.
   * @alias RecordFolderAssociationPaging
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>RecordFolderAssociationPaging</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RecordFolderAssociationPaging} obj Optional instance to populate.
   * @return {RecordFolderAssociationPaging} The populated <code>RecordFolderAssociationPaging</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('list')) {
        obj['list'] = RecordFolderAssociationPagingList.constructFromObject(data['list']);
      }
    }
    return obj;
  }

  /**
   * @member {RecordFolderAssociationPagingList} list
   */
  exports.prototype['list'] = undefined;



  return exports;
}));


