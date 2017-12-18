
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
    root.AlfrescoGovernanceServicesRestApi.RMSiteBodyCreate = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RMSiteBodyCreate model module.
   * @module  RMSiteBodyCreate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RMSiteBodyCreate</code>.
   * @alias RMSiteBodyCreate
   * @class
   * @param title {string}
   */
  var exports = function(title) {
    var _this = this;

    _this['title'] = title;


  };

  /**
   * Constructs a <code>RMSiteBodyCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RMSiteBodyCreate} obj Optional instance to populate.
   * @return {RMSiteBodyCreate} The populated <code>RMSiteBodyCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('compliance')) {
        obj['compliance'] = ApiClient.convertToType(data['compliance'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {string} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {string} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {RMSiteBodyCreate.ComplianceEnum} compliance
   * @default 'STANDARD'
   */
  exports.prototype['compliance'] = 'STANDARD';


  /**
   * Allowed values for the <code>compliance</code> property.
   * @enum {string}
   * @readonly
   */
  exports.ComplianceEnum = {
    /**
     * value: "STANDARD"
     * @const
     */
    "STANDARD": "STANDARD",
    /**
     * value: "DOD5015"
     * @const
     */
    "DOD5015": "DOD5015"  };


  return exports;
}));


