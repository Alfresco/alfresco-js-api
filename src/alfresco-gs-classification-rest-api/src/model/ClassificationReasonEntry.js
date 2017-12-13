(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationReason'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationReason'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationReasonEntry = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationReason);
  }
}(this, function(ApiClient, ClassificationReason) {
  'use strict';

  /**
   * The ClassificationReasonEntry model module.
   * @module model/ClassificationReasonEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationReasonEntry</code>.
   * @alias module:model/ClassificationReasonEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>ClassificationReasonEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationReasonEntry} obj Optional instance to populate.
   * @return {module:model/ClassificationReasonEntry} The populated <code>ClassificationReasonEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ClassificationReason.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ClassificationReason} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
