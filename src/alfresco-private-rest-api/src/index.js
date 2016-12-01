(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient',  './api/CustomModelApi' ], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./api/CustomModelApi'));
  }
}(function(ApiClient,  CustomModelApi) {
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
     CustomModelApi: CustomModelApi
  };

  return exports;
}));
