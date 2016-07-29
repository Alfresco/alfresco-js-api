(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient', './model/Error', './model/ErrorError', './model/LoginRequest', './model/LoginTicketEntry', './model/LoginTicketEntryEntry', './model/ValidateTicketEntry', './model/ValidateTicketEntryEntry', './api/AuthenticationApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./model/Error'), require('./model/ErrorError'), require('./model/LoginRequest'), require('./model/LoginTicketEntry'), require('./model/LoginTicketEntryEntry'), require('./model/ValidateTicketEntry'), require('./model/ValidateTicketEntryEntry'), require('./api/AuthenticationApi'));
  }
}(function(ApiClient, Error, ErrorError, LoginRequest, LoginTicketEntry, LoginTicketEntryEntry, ValidateTicketEntry, ValidateTicketEntryEntry, AuthenticationApi) {
  'use strict';

  /**
   * Provides access to the Authentication features of Alfresco.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoAuthRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoAuthRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoAuthRestApi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new AlfrescoAuthRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoAuthRestApi.Yyy(); // Construct a model instance.
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
     * The LoginRequest model constructor.
     * @property {module:model/LoginRequest}
     */
    LoginRequest: LoginRequest,
    /**
     * The LoginTicketEntry model constructor.
     * @property {module:model/LoginTicketEntry}
     */
    LoginTicketEntry: LoginTicketEntry,
    /**
     * The LoginTicketEntryEntry model constructor.
     * @property {module:model/LoginTicketEntryEntry}
     */
    LoginTicketEntryEntry: LoginTicketEntryEntry,
    /**
     * The ValidateTicketEntry model constructor.
     * @property {module:model/ValidateTicketEntry}
     */
    ValidateTicketEntry: ValidateTicketEntry,
    /**
     * The ValidateTicketEntryEntry model constructor.
     * @property {module:model/ValidateTicketEntryEntry}
     */
    ValidateTicketEntryEntry: ValidateTicketEntryEntry,
    /**
     * The AuthenticationApi service constructor.
     * @property {module:api/AuthenticationApi}
     */
    AuthenticationApi: AuthenticationApi
  };

  return exports;
}));
