

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuides'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuides'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesEntry = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuides);
  }
}(this, function(ApiClient, ClassificationGuides) {
  'use strict';




  /**
   * The ClassificationGuidesEntry model module.
   * @module ClassificationGuidesEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuidesEntry</code>.
   * @alias ClassificationGuidesEntry
   * @class
   * @param entry {ClassificationGuides}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>ClassificationGuidesEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationGuidesEntry} obj Optional instance to populate.
   * @return {ClassificationGuidesEntry} The populated <code>ClassificationGuidesEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ClassificationGuides.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {ClassificationGuides} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


