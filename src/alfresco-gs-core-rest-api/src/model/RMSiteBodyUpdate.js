
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
    root.AlfrescoGovernanceServicesRestApi.RMSiteBodyUpdate = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RMSiteBodyUpdate model module.
   * @module  RMSiteBodyUpdate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RMSiteBodyUpdate</code>.
   * @alias RMSiteBodyUpdate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>RMSiteBodyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RMSiteBodyUpdate} obj Optional instance to populate.
   * @return {RMSiteBodyUpdate} The populated <code>RMSiteBodyUpdate</code> instance.
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



  return exports;
}));


