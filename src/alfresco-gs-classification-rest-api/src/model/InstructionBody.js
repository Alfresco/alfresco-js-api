

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationInformation', './SecurityMarkInformationBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationInformation'), require('./SecurityMarkInformationBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.InstructionBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationInformation, root.AlfrescoGovernanceServicesSecurityControls.SecurityMarkInformationBody);
  }
}(this, function(ApiClient, ClassificationInformation, SecurityMarkInformationBody) {
  'use strict';




  /**
   * The InstructionBody model module.
   * @module InstructionBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InstructionBody</code>.
   * @alias InstructionBody
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>InstructionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {InstructionBody} obj Optional instance to populate.
   * @return {InstructionBody} The populated <code>InstructionBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('classificationInformation')) {
        obj['classificationInformation'] = ClassificationInformation.constructFromObject(data['classificationInformation']);
      }
      if (data.hasOwnProperty('securityMarkInformation')) {
        obj['securityMarkInformation'] = SecurityMarkInformationBody.constructFromObject(data['securityMarkInformation']);
      }
    }
    return obj;
  }

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


