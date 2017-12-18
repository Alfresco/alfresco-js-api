
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
    root.AlfrescoGovernanceServicesRestApi.FilePlanBodyUpdate = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FilePlanBodyUpdate model module.
   * @module  FilePlanBodyUpdate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>FilePlanBodyUpdate</code>.
   * @alias FilePlanBodyUpdate
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>FilePlanBodyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {FilePlanBodyUpdate} obj Optional instance to populate.
   * @return {FilePlanBodyUpdate} The populated <code>FilePlanBodyUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


