
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './FilePlan'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./FilePlan'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.FilePlanEntry = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.FilePlan);
  }
}(this, function(ApiClient, FilePlan) {
  'use strict';




  /**
   * The FilePlanEntry model module.
   * @module  FilePlanEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FilePlanEntry</code>.
   * @alias FilePlanEntry
   * @class
   * @param entry {FilePlan}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>FilePlanEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {FilePlanEntry} obj Optional instance to populate.
   * @return {FilePlanEntry} The populated <code>FilePlanEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = FilePlan.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {FilePlan} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


