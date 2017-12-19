(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './LicenseInfo', './ModuleInfo', './StatusInfo', './VersionInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./LicenseInfo'), require('./ModuleInfo'), require('./StatusInfo'), require('./VersionInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoContentServicesRestApi) {
      root.AlfrescoContentServicesRestApi = {};
    }
    root.AlfrescoContentServicesRestApi.RepositoryInfo = factory(root.AlfrescoContentServicesRestApi.ApiClient, root.AlfrescoContentServicesRestApi.LicenseInfo, root.AlfrescoContentServicesRestApi.ModuleInfo, root.AlfrescoContentServicesRestApi.StatusInfo, root.AlfrescoContentServicesRestApi.VersionInfo);
  }
}(this, function(ApiClient, LicenseInfo, ModuleInfo, StatusInfo, VersionInfo) {
  'use strict';

  /**
   * The RepositoryInfo model module.
   * @module model/RepositoryInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RepositoryInfo</code>.
   * @alias module:model/RepositoryInfo
   * @class
   * @param edition
   * @param version
   * @param status
   */
  var exports = function(edition, version, status) {

    this['edition'] = edition;
    this['version'] = version;
    this['status'] = status;


  };

  /**
   * Constructs a <code>RepositoryInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RepositoryInfo} obj Optional instance to populate.
   * @return {module:model/RepositoryInfo} The populated <code>RepositoryInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('edition')) {
        obj['edition'] = ApiClient.convertToType(data['edition'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = VersionInfo.constructFromObject(data['version']);
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = StatusInfo.constructFromObject(data['status']);
      }
      if (data.hasOwnProperty('license')) {
        obj['license'] = LicenseInfo.constructFromObject(data['license']);
      }
      if (data.hasOwnProperty('modules')) {
        obj['modules'] = ApiClient.convertToType(data['modules'], [ModuleInfo]);
      }
    }
    return obj;
  }


  /**
   * @member {string} edition
   */
  exports.prototype['edition'] = undefined;

  /**
   * @member {module:model/VersionInfo} version
   */
  exports.prototype['version'] = undefined;

  /**
   * @member {module:model/StatusInfo} status
   */
  exports.prototype['status'] = undefined;

  /**
   * @member {module:model/LicenseInfo} license
   */
  exports.prototype['license'] = undefined;

  /**
   * @member {Array.<module:model/ModuleInfo>} modules
   */
  exports.prototype['modules'] = undefined;




  return exports;
}));
