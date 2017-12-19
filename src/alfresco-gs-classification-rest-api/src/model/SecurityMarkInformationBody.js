

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './SecurityMarksBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./SecurityMarksBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityMarkInformationBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.SecurityMarksBody);
  }
}(this, function(ApiClient, SecurityMarksBody) {
  'use strict';




  /**
   * The SecurityMarkInformationBody model module.
   * @module SecurityMarkInformationBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityMarkInformationBody</code>.
   * @alias SecurityMarkInformationBody
   * @class
   * @param add {SecurityMarksBody}
   */
  var exports = function(add) {
    var _this = this;

    _this['add'] = add;
  };

  /**
   * Constructs a <code>SecurityMarkInformationBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {SecurityMarkInformationBody} obj Optional instance to populate.
   * @return {SecurityMarkInformationBody} The populated <code>SecurityMarkInformationBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('add')) {
        obj['add'] = SecurityMarksBody.constructFromObject(data['add']);
      }
    }
    return obj;
  }

  /**
   * @member {SecurityMarksBody} add
   */
  exports.prototype['add'] = undefined;



  return exports;
}));


