

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
    root.AlfrescoGovernanceServicesSecurityControls.DeclassificationExemptionBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DeclassificationExemptionBody model module.
   * @module DeclassificationExemptionBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DeclassificationExemptionBody</code>.
   * @alias DeclassificationExemptionBody
   * @class
   * @param code {string}
   * @param description {string}
   */
  var exports = function(code, description) {
    var _this = this;

    _this['code'] = code;
    _this['description'] = description;
  };

  /**
   * Constructs a <code>DeclassificationExemptionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {DeclassificationExemptionBody} obj Optional instance to populate.
   * @return {DeclassificationExemptionBody} The populated <code>DeclassificationExemptionBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

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
   * @member {string} code
   */
  exports.prototype['code'] = undefined;
  /**
   * @member {string} description
   */
  exports.prototype['description'] = undefined;



  return exports;
}));


