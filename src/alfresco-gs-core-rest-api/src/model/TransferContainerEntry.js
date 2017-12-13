(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './TransferContainer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TransferContainer'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.TransferContainerEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.TransferContainer);
  }
}(this, function(ApiClient, TransferContainer) {
  'use strict';

  /**
   * The TransferContainerEntry model module.
   * @module model/TransferContainerEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferContainerEntry</code>.
   * @alias module:model/TransferContainerEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>TransferContainerEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TransferContainerEntry} obj Optional instance to populate.
   * @return {module:model/TransferContainerEntry} The populated <code>TransferContainerEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = TransferContainer.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/TransferContainer} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
