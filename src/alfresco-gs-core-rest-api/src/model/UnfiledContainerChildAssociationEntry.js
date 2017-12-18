
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './UnfiledContainerChildAssociation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./UnfiledContainerChildAssociation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledContainerChildAssociationEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.UnfiledContainerChildAssociation);
  }
}(this, function(ApiClient, UnfiledContainerChildAssociation) {
  'use strict';




  /**
   * The UnfiledContainerChildAssociationEntry model module.
   * @module  UnfiledContainerChildAssociationEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledContainerChildAssociationEntry</code>.
   * @alias UnfiledContainerChildAssociationEntry
   * @class
   * @param entry {UnfiledContainerChildAssociation}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>UnfiledContainerChildAssociationEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {UnfiledContainerChildAssociationEntry} obj Optional instance to populate.
   * @return {UnfiledContainerChildAssociationEntry} The populated <code>UnfiledContainerChildAssociationEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = UnfiledContainerChildAssociation.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {UnfiledContainerChildAssociation} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


