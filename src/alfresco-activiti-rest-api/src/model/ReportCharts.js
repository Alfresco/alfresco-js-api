(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Chart'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Chart'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ReportCharts = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.Chart);
  }
}(this, function(ApiClient, Chart) {
  'use strict';

  /**
   * The ReportCharts model module.
   * @module model/ReportCharts
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ReportCharts</code>.
   * @alias module:model/ReportCharts
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>ReportCharts</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @return {module:model/ReportCharts} The populated <code>ReportCharts</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [Chart]);
      }
    }
    return obj;
  }

  /**
   * @member {String} elements
   */
  exports.prototype['elements'] = undefined;

  return exports;
}));
