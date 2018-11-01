

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuide'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuide'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideEntry = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuide);
  }
}(this, function(ApiClient, ClassificationGuide) {
  'use strict';




  /**
   * The ClassificationGuideEntry model module.
   * @module ClassificationGuideEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuideEntry</code>.
   * @alias ClassificationGuideEntry
   * @class
   * @param entry {ClassificationGuide}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>ClassificationGuideEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationGuideEntry} obj Optional instance to populate.
   * @return {ClassificationGuideEntry} The populated <code>ClassificationGuideEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ClassificationGuide.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {ClassificationGuide} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


