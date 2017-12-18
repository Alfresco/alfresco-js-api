
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
    root.AlfrescoGovernanceServicesRestApi.TransferContainerBodyUpdate = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TransferContainerBodyUpdate model module.
   * @module  TransferContainerBodyUpdate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TransferContainerBodyUpdate</code>.
   * @alias TransferContainerBodyUpdate
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>TransferContainerBodyUpdate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TransferContainerBodyUpdate} obj Optional instance to populate.
   * @return {TransferContainerBodyUpdate} The populated <code>TransferContainerBodyUpdate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @member {string} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


