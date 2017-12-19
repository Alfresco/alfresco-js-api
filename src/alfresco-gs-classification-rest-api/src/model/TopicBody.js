

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './InstructionBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./InstructionBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.TopicBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.InstructionBody);
  }
}(this, function(ApiClient, InstructionBody) {
  'use strict';




  /**
   * The TopicBody model module.
   * @module TopicBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TopicBody</code>.
   * @alias TopicBody
   * @class
   * @param name {string}
   */
  var exports = function(name) {
    var _this = this;

    _this['name'] = name;


  };

  /**
   * Constructs a <code>TopicBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TopicBody} obj Optional instance to populate.
   * @return {TopicBody} The populated <code>TopicBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('instruction')) {
        obj['instruction'] = InstructionBody.constructFromObject(data['instruction']);
      }
    }
    return obj;
  }

  /**
   * @member {string} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {string} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {InstructionBody} instruction
   */
  exports.prototype['instruction'] = undefined;



  return exports;
}));


