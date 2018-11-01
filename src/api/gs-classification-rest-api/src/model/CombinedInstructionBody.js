

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationInformation', './InstructionBody', './SecurityMarkInformationBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationInformation'), require('./InstructionBody'), require('./SecurityMarkInformationBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.CombinedInstructionBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationInformation, root.AlfrescoGovernanceServicesSecurityControls.InstructionBody, root.AlfrescoGovernanceServicesSecurityControls.SecurityMarkInformationBody);
  }
}(this, function(ApiClient, ClassificationInformation, InstructionBody, SecurityMarkInformationBody) {
  'use strict';




  /**
   * The CombinedInstructionBody model module.
   * @module CombinedInstructionBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CombinedInstructionBody</code>.
   * @alias CombinedInstructionBody
   * @class
   * @implements moduleInstructionBody
   */
  var exports = function() {
    var _this = this;

    InstructionBody.call(_this);
  };

  /**
   * Constructs a <code>CombinedInstructionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {CombinedInstructionBody} obj Optional instance to populate.
   * @return {CombinedInstructionBody} The populated <code>CombinedInstructionBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      InstructionBody.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement InstructionBody interface:
  /**
   * @member {ClassificationInformation} classificationInformation
   */
exports.prototype['classificationInformation'] = undefined;

  /**
   * @member {SecurityMarkInformationBody} securityMarkInformation
   */
exports.prototype['securityMarkInformation'] = undefined;



  return exports;
}));


