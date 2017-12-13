(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './TransferContainerChildAssociation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TransferContainerChildAssociation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferContainerChildAssociationEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.TransferContainerChildAssociation);
  }
}(this, function(ApiClient, TransferContainerChildAssociation) {
  'use strict';

  /**
   * The TransferContainerChildAssociationEntry model module.
   * @module model/TransferContainerChildAssociationEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferContainerChildAssociationEntry</code>.
   * @alias module:model/TransferContainerChildAssociationEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>TransferContainerChildAssociationEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferContainerChildAssociationEntry} obj Optional instance to populate.
   * @return {module:model/TransferContainerChildAssociationEntry} The populated <code>TransferContainerChildAssociationEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = TransferContainerChildAssociation.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/TransferContainerChildAssociation} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
