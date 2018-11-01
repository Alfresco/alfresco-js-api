(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RepositoryEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RepositoryEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.DiscoveryEntry = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.RepositoryEntry);
  }
}(this, function(ApiClient, RepositoryEntry) {
  'use strict';

  /**
   * The DiscoveryEntry model module.
   * @module model/DiscoveryEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DiscoveryEntry</code>.
   * @alias module:model/DiscoveryEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>DiscoveryEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DiscoveryEntry} obj Optional instance to populate.
   * @return {module:model/DiscoveryEntry} The populated <code>DiscoveryEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = RepositoryEntry.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RepositoryEntry} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
