

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ErrorError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ErrorError'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.Error = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ErrorError);
  }
}(this, function(ApiClient, ErrorError) {
  'use strict';




  /**
   * The Error model module.
   * @module Error
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Error</code>.
   * @alias Error
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Error</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {Error} obj Optional instance to populate.
   * @return {Error} The populated <code>Error</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('error')) {
        obj['error'] = ErrorError.constructFromObject(data['error']);
      }
    }
    return obj;
  }

  /**
   * @member {ErrorError} error
   */
  exports.prototype['error'] = undefined;



  return exports;
}));


