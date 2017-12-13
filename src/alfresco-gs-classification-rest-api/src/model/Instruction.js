(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationInformation', './SecurityMarkInformation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationInformation'), require('./SecurityMarkInformation'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.Instruction = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationInformation, root.AlfrescoGovernanceServicesSecurityControls.SecurityMarkInformation);
  }
}(this, function(ApiClient, ClassificationInformation, SecurityMarkInformation) {
  'use strict';

  /**
   * The Instruction model module.
   * @module model/Instruction
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Instruction</code>.
   * Information about how a piece of content should be secured. This field is only included when requested.
   * @alias module:model/Instruction
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>Instruction</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Instruction} obj Optional instance to populate.
   * @return {module:model/Instruction} The populated <code>Instruction</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('classificationInformation')) {
        obj['classificationInformation'] = ClassificationInformation.constructFromObject(data['classificationInformation']);
      }
      if (data.hasOwnProperty('securityMarkInformation')) {
        obj['securityMarkInformation'] = SecurityMarkInformation.constructFromObject(data['securityMarkInformation']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ClassificationInformation} classificationInformation
   */
  exports.prototype['classificationInformation'] = undefined;

  /**
   * @member {module:model/SecurityMarkInformation} securityMarkInformation
   */
  exports.prototype['securityMarkInformation'] = undefined;




  return exports;
}));
