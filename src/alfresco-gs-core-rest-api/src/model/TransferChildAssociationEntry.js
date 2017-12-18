
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './TransferChildAssociation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TransferChildAssociation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferChildAssociationEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.TransferChildAssociation);
  }
}(this, function(ApiClient, TransferChildAssociation) {
  'use strict';




  /**
   * The TransferChildAssociationEntry model module.
   * @module  TransferChildAssociationEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferChildAssociationEntry</code>.
   * @alias TransferChildAssociationEntry
   * @class
   * @param entry {TransferChildAssociation}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>TransferChildAssociationEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TransferChildAssociationEntry} obj Optional instance to populate.
   * @return {TransferChildAssociationEntry} The populated <code>TransferChildAssociationEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = TransferChildAssociation.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {TransferChildAssociation} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


