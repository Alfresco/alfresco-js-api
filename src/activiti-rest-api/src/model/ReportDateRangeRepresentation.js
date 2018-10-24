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
    root.ActivitiPublicRestApi.ReportSaveDateRangeRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ReportDateRangeRepresentation.js model module.
   * @module model/ReportDateRangeRepresentation.js
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ReportDateRangeRepresentation.js</code>.
   * @alias module:model/ReportDateRangeRepresentation.js
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReportDateRangeRepresentation.js</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportDateRangeRepresentation.js} obj Optional instance to populate.
   * @return {module:model/ReportDateRangeRepresentation.js} The populated <code>ReportDateRangeRepresentation.js</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
      }
      if (data.hasOwnProperty('rangeId')) {
        obj['rangeId'] = ApiClient.convertToType(data['rangeId'], 'String');
      }
      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
    }
    return obj;

  }

  /**
   * @member {String} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * @member {Integer} rangeId
   */
  exports.prototype['rangeId'] = undefined;
  /**
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;


  return exports;
}));
