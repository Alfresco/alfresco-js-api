(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './SecurityMarkBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./SecurityMarkBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityMarksBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.SecurityMarkBody);
  }
}(this, function(ApiClient, SecurityMarkBody) {
  'use strict';

  /**
   * The SecurityMarksBody model module.
   * @module model/SecurityMarksBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityMarksBody</code>.
   * @alias module:model/SecurityMarksBody
   * @class
   * @extends module:model/Array&lt;SecurityMarkBody&gt;
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>SecurityMarksBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityMarksBody} obj Optional instance to populate.
   * @return {module:model/SecurityMarksBody} The populated <code>SecurityMarksBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      Array&lt;SecurityMarkBody&gt;.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(Array&lt;SecurityMarkBody&gt;.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
