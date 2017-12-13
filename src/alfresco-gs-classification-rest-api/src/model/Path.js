(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './PathElement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./PathElement'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.Path = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.PathElement);
  }
}(this, function(ApiClient, PathElement) {
  'use strict';

  /**
   * The Path model module.
   * @module model/Path
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Path</code>.
   * An ordered list of ancestors starting with the classification guide and ending with the parent of this topic.\nThis field is only returned when requested.\n
   * @alias module:model/Path
   * @class
   * @extends module:model/Array&lt;PathElement&gt;
   */
  var exports = function() {

  };

  /**
   * Constructs a <code>Path</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Path} obj Optional instance to populate.
   * @return {module:model/Path} The populated <code>Path</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();
      Array&lt;PathElement&gt;.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(Array&lt;PathElement&gt;.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
