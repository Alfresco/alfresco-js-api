(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient', './model/DiscoveryEntry', './model/EntitlementsInfo', './model/Error', './model/ErrorError', './model/LicenseInfo', './model/ModuleInfo', './model/RepositoryEntry', './model/RepositoryInfo', './model/StatusInfo', './model/VersionInfo', './api/DiscoveryApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./model/DiscoveryEntry'), require('./model/EntitlementsInfo'), require('./model/Error'), require('./model/ErrorError'), require('./model/LicenseInfo'), require('./model/ModuleInfo'), require('./model/RepositoryEntry'), require('./model/RepositoryInfo'), require('./model/StatusInfo'), require('./model/VersionInfo'), require('./api/DiscoveryApi'));
  }
}(function(ApiClient, DiscoveryEntry, EntitlementsInfo, Error, ErrorError, LicenseInfo, ModuleInfo, RepositoryEntry, RepositoryInfo, StatusInfo, VersionInfo, DiscoveryApi) {
  'use strict';

  /**
   * **Discovery API**\n\nProvides access to information about Alfresco Content Services.\n.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoContentServicesRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoContentServicesRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoContentServicesRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AlfrescoContentServicesRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoContentServicesRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The DiscoveryEntry model constructor.
     * @property {module:model/DiscoveryEntry}
     */
    DiscoveryEntry: DiscoveryEntry,
    /**
     * The EntitlementsInfo model constructor.
     * @property {module:model/EntitlementsInfo}
     */
    EntitlementsInfo: EntitlementsInfo,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError: ErrorError,
    /**
     * The LicenseInfo model constructor.
     * @property {module:model/LicenseInfo}
     */
    LicenseInfo: LicenseInfo,
    /**
     * The ModuleInfo model constructor.
     * @property {module:model/ModuleInfo}
     */
    ModuleInfo: ModuleInfo,
    /**
     * The RepositoryEntry model constructor.
     * @property {module:model/RepositoryEntry}
     */
    RepositoryEntry: RepositoryEntry,
    /**
     * The RepositoryInfo model constructor.
     * @property {module:model/RepositoryInfo}
     */
    RepositoryInfo: RepositoryInfo,
    /**
     * The StatusInfo model constructor.
     * @property {module:model/StatusInfo}
     */
    StatusInfo: StatusInfo,
    /**
     * The VersionInfo model constructor.
     * @property {module:model/VersionInfo}
     */
    VersionInfo: VersionInfo,
    /**
     * The DiscoveryApi service constructor.
     * @property {module:api/DiscoveryApi}
     */
    DiscoveryApi: DiscoveryApi
  };

  return exports;
}));
