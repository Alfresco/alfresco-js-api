(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ReportDateRangeRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ReportDateRangeRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ReportExportQueryRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ReportDateRangeRepresentation);
  }
}(this, function(ApiClient, ReportDateRangeRepresentation) {
  'use strict';




  /**
   * The ReportExportQueryRepresentation.js model module.
   * @module model/ReportExportQueryRepresentation.js
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ReportExportQueryRepresentation.js</code>.
   * @alias module:model/ReportExportQueryRepresentation.js
   * @class
   */
  var exports = function() {
    var _this = this;

  };

  /**
   * Constructs a <code>ReportExportQueryRepresentation.js</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ReportExportQueryRepresentation.js} obj Optional instance to populate.
   * @return {module:model/ReportExportQueryRepresentation.js} The populated <code>ReportExportQueryRepresentation.js</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'String');
      }
      if (data.hasOwnProperty('reportName')) {
        obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
      }
      if (data.hasOwnProperty('slowProcessInstanceInteger')) {
        obj['slowProcessInstanceInteger'] = ApiClient.convertToType(data['slowProcessInstanceInteger'], 'Integer');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'String');
      }
      if (data.hasOwnProperty('typeFiltering')) {
        obj['typeFiltering'] = ApiClient.convertToType(data['typeFiltering'], 'String');
      }
      if (data.hasOwnProperty('duration')) {
        obj['duration'] = ApiClient.convertToType(data['duration'], 'Integer');
      }
      if (data.hasOwnProperty('taskName')) {
        obj['taskName'] = ApiClient.convertToType(data['taskName'], 'String');
      }
      if (data.hasOwnProperty('dateRangeInterval')) {
        obj['dateRangeInterval'] = ApiClient.convertToType(data['dateRangeInterval'], 'String');
      }
      if (data.hasOwnProperty('dateRange')) {
        obj['dateRange'] = ReportDateRangeRepresentation.constructFromObject(data['dateRange']);
      }
    }
    return obj;

  }

  /**
   * @member {String} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;
  /**
   * @member {String} reportName
   */
  exports.prototype['reportName'] = undefined;
  /**
   * @member {Integer} slowProcessInstanceInteger
   */
  exports.prototype['slowProcessInstanceInteger'] = undefined;
  /**
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {String} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} typeFiltering
   */
  exports.prototype['typeFiltering'] = undefined;
  /**
   * @member {String} duration
   */
  exports.prototype['duration'] = undefined;
  /**
   * @member {String} taskName
   */
  exports.prototype['taskName'] = undefined;
  /**
   * @member {String} dateRangeInterval
   */
  exports.prototype['dateRangeInterval'] = undefined;
  /**
   * @member {module:model/ReportDateRangeRepresentation} dateRange
   */
  exports.prototype['dateRange'] = undefined;

  return exports;
}));
