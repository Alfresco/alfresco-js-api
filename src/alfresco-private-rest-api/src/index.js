(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['./ApiClient',  './api/CustomModelApi', './api/WebscriptApi' ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./api/CustomModelApi'), require('./api/WebscriptApi'));
  }
}(function(ApiClient,  CustomModelApi,  WebscriptApi) {
  'use strict';

  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
      /**
     * The CustomModelApi service constructor.
     * @property {module:api/CustomModelApi}
     */
    CustomModelApi: CustomModelApi,
      /**
     * The WebscriptApi service constructor.
     * @property {module:api/WebscriptApi}
     */
     WebscriptApi: WebscriptApi
  };

  return exports;
}));
