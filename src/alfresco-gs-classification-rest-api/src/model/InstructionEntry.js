

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Instruction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Instruction'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.InstructionEntry = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.Instruction);
  }
}(this, function(ApiClient, Instruction) {
  'use strict';




  /**
   * The InstructionEntry model module.
   * @module InstructionEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InstructionEntry</code>.
   * @alias InstructionEntry
   * @class
   * @param entry {Instruction}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>InstructionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {InstructionEntry} obj Optional instance to populate.
   * @return {InstructionEntry} The populated <code>InstructionEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Instruction.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {Instruction} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


