
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Transfer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Transfer'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Transfer);
  }
}(this, function(ApiClient, Transfer) {
  'use strict';




  /**
   * The TransferEntry model module.
   * @module  TransferEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferEntry</code>.
   * @alias TransferEntry
   * @class
   * @param entry {Transfer}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>TransferEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TransferEntry} obj Optional instance to populate.
   * @return {TransferEntry} The populated <code>TransferEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Transfer.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {Transfer} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


