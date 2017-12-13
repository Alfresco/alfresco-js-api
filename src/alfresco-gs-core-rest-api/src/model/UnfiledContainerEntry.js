(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './UnfiledContainer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./UnfiledContainer'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.UnfiledContainerEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.UnfiledContainer);
  }
}(this, function(ApiClient, UnfiledContainer) {
  'use strict';

  /**
   * The UnfiledContainerEntry model module.
   * @module model/UnfiledContainerEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>UnfiledContainerEntry</code>.
   * @alias module:model/UnfiledContainerEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>UnfiledContainerEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnfiledContainerEntry} obj Optional instance to populate.
   * @return {module:model/UnfiledContainerEntry} The populated <code>UnfiledContainerEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = UnfiledContainer.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/UnfiledContainer} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
