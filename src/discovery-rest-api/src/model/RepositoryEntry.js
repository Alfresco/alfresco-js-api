(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RepositoryInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RepositoryInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RepositoryEntry = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.RepositoryInfo);
  }
}(this, function(ApiClient, RepositoryInfo) {
  'use strict';

  /**
   * The RepositoryEntry model module.
   * @module model/RepositoryEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RepositoryEntry</code>.
   * @alias module:model/RepositoryEntry
   * @class
   * @param repository
   */
  var exports = function(repository) {

    this['repository'] = repository;
  };

  /**
   * Constructs a <code>RepositoryEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RepositoryEntry} obj Optional instance to populate.
   * @return {module:model/RepositoryEntry} The populated <code>RepositoryEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('repository')) {
        obj['repository'] = RepositoryInfo.constructFromObject(data['repository']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/RepositoryInfo} repository
   */
  exports.prototype['repository'] = undefined;




  return exports;
}));
