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
   * @module model/CombinedInstructionBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>CombinedInstructionBody</code>.
   * @alias module:model/CombinedInstructionBody
   * @class
   * @extends module:model/InstructionBody
   */
  var exports = function() {
    InstructionBody.call(this);
  };

  /**
   * Constructs a <code>CombinedInstructionBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CombinedInstructionBody} obj Optional instance to populate.
   * @return {module:model/CombinedInstructionBody} The populated <code>CombinedInstructionBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      InstructionBody.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(InstructionBody.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
