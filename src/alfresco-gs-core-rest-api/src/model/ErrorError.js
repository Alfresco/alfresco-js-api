
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.ErrorError = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ErrorError model module.
   * @module  ErrorError
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ErrorError</code>.
   * @alias ErrorError
   * @class
   * @param statusCode {number}
   * @param briefSummary {string}
   * @param stackTrace {string}
   * @param descriptionURL {string}
   */
  var exports = function(statusCode, briefSummary, stackTrace, descriptionURL) {
    var _this = this;


    _this['statusCode'] = statusCode;
    _this['briefSummary'] = briefSummary;
    _this['stackTrace'] = stackTrace;
    _this['descriptionURL'] = descriptionURL;

  };

  /**
   * Constructs a <code>ErrorError</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ErrorError} obj Optional instance to populate.
   * @return {ErrorError} The populated <code>ErrorError</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('errorKey')) {
        obj['errorKey'] = ApiClient.convertToType(data['errorKey'], 'String');
      }
      if (data.hasOwnProperty('statusCode')) {
        obj['statusCode'] = ApiClient.convertToType(data['statusCode'], 'Number');
      }
      if (data.hasOwnProperty('briefSummary')) {
        obj['briefSummary'] = ApiClient.convertToType(data['briefSummary'], 'String');
      }
      if (data.hasOwnProperty('stackTrace')) {
        obj['stackTrace'] = ApiClient.convertToType(data['stackTrace'], 'String');
      }
      if (data.hasOwnProperty('descriptionURL')) {
        obj['descriptionURL'] = ApiClient.convertToType(data['descriptionURL'], 'String');
      }
      if (data.hasOwnProperty('logId')) {
        obj['logId'] = ApiClient.convertToType(data['logId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {string} errorKey
   */
  exports.prototype['errorKey'] = undefined;
  /**
   * @member {number} statusCode
   */
  exports.prototype['statusCode'] = undefined;
  /**
   * @member {string} briefSummary
   */
  exports.prototype['briefSummary'] = undefined;
  /**
   * @member {string} stackTrace
   */
  exports.prototype['stackTrace'] = undefined;
  /**
   * @member {string} descriptionURL
   */
  exports.prototype['descriptionURL'] = undefined;
  /**
   * @member {string} logId
   */
  exports.prototype['logId'] = undefined;



  return exports;
}));


