(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Record'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Record'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RecordEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.Record);
  }
}(this, function(ApiClient, Record) {
  'use strict';

  /**
   * The RecordEntry model module.
   * @module model/RecordEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RecordEntry</code>.
   * @alias module:model/RecordEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>RecordEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RecordEntry} obj Optional instance to populate.
   * @return {module:model/RecordEntry} The populated <code>RecordEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Record.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Record} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
