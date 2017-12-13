(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './PathElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./PathElement'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.PathInfo = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient, root.AlfrescoGovernanceServicesRestApi.PathElement);
  }
}(this, function(ApiClient, PathElement) {
  'use strict';

  /**
   * The PathInfo model module.
   * @module model/PathInfo
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PathInfo</code>.
   * @alias module:model/PathInfo
   * @class
   */
  var exports = function() {




  };

  /**
   * Constructs a <code>PathInfo</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathInfo} obj Optional instance to populate.
   * @return {module:model/PathInfo} The populated <code>PathInfo</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('elements')) {
        obj['elements'] = ApiClient.convertToType(data['elements'], [PathElement]);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('isCompleted')) {
        obj['isCompleted'] = ApiClient.convertToType(data['isCompleted'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {Array.<module:model/PathElement>} elements
   */
  exports.prototype['elements'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {Boolean} isCompleted
   */
  exports.prototype['isCompleted'] = undefined;




  return exports;
}));
