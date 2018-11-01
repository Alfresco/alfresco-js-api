
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
    root.AlfrescoGovernanceServicesRestApi.RequestBodyFile = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RequestBodyFile model module.
   * @module  RequestBodyFile
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RequestBodyFile</code>.
   * @alias RequestBodyFile
   * @class
   * @param targetParentId {string}
   */
  var exports = function(targetParentId) {
    var _this = this;

    _this['targetParentId'] = targetParentId;
  };

  /**
   * Constructs a <code>RequestBodyFile</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RequestBodyFile} obj Optional instance to populate.
   * @return {RequestBodyFile} The populated <code>RequestBodyFile</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('targetParentId')) {
        obj['targetParentId'] = ApiClient.convertToType(data['targetParentId'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {string} targetParentId
   */
  exports.prototype['targetParentId'] = undefined;



  return exports;
}));


