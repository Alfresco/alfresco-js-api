(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './SecurityMark'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./SecurityMark'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.SecurityMarks = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.SecurityMark);
  }
}(this, function(ApiClient, SecurityMark) {
  'use strict';

  /**
   * The SecurityMarks model module.
   * @module model/SecurityMarks
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SecurityMarks</code>.
   * @alias module:model/SecurityMarks
   * @class
   * @extends module:model/Array&lt;SecurityMark&gt;
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>SecurityMarks</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SecurityMarks} obj Optional instance to populate.
   * @return {module:model/SecurityMarks} The populated <code>SecurityMarks</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      Array&lt;SecurityMark&gt;.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(Array&lt;SecurityMark&gt;.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
