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
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassificationReasonBody model module.
   * @module model/ClassificationReasonBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationReasonBody</code>.
   * @alias module:model/ClassificationReasonBody
   * @class
   * @param code
   * @param description
   */
  var exports = function(code, description) {

    this['code'] = code;
    this['description'] = description;
  };

  /**
   * Constructs a <code>ClassificationReasonBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationReasonBody} obj Optional instance to populate.
   * @return {module:model/ClassificationReasonBody} The populated <code>ClassificationReasonBody</code> instance.
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
   * @member {String} code
   */
  exports.prototype['code'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;




  return exports;
}));
