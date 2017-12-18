
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './RMSite'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./RMSite'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RMSiteEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.RMSite);
  }
}(this, function(ApiClient, RMSite) {
  'use strict';




  /**
   * The RMSiteEntry model module.
   * @module  RMSiteEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RMSiteEntry</code>.
   * @alias RMSiteEntry
   * @class
   * @param entry {RMSite}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>RMSiteEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RMSiteEntry} obj Optional instance to populate.
   * @return {RMSiteEntry} The populated <code>RMSiteEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = RMSite.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {RMSite} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


