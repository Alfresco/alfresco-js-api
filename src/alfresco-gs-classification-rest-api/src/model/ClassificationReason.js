

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationReason = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ClassificationReason model module.
   * @module ClassificationReason
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationReason</code>.
   * @alias ClassificationReason
   * @class
   * @param id {string}
   * @param code {string}
   * @param description {string}
   */
  var exports = function(id, code, description) {
    var _this = this;

    _this['id'] = id;
    _this['code'] = code;
    _this['description'] = description;
  };

  /**
   * Constructs a <code>ClassificationReason</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationReason} obj Optional instance to populate.
   * @return {ClassificationReason} The populated <code>ClassificationReason</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('code')) {
        obj['code'] = ApiClient.convertToType(data['code'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {string} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {string} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {string} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


