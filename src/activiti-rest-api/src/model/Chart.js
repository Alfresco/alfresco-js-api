(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.Chart = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ReportQuery model module.
   * @module model/Chart
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>Chart</code>.
   * @alias module:model/Chart
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

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['type'] = undefined;

  return exports;
}));
