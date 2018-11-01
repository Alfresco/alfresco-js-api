

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuideInTopic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuideInTopic'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuide = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideInTopic);
  }
}(this, function(ApiClient, ClassificationGuideInTopic) {
  'use strict';




  /**
   * The ClassificationGuide model module.
   * @module ClassificationGuide
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuide</code>.
   * A classification guide.
   * @alias ClassificationGuide
   * @class
   * @implements moduleClassificationGuideInTopic
   * @param name {string}
   * @param originatingOrganization {string}
   * @param publishedOn {Date}
   */
  var exports = function(name, originatingOrganization, publishedOn) {
    var _this = this;

    ClassificationGuideInTopic.call(_this, name, originatingOrganization, publishedOn);
  };

  /**
   * Constructs a <code>ClassificationGuide</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationGuide} obj Optional instance to populate.
   * @return {ClassificationGuide} The populated <code>ClassificationGuide</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ClassificationGuideInTopic.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ClassificationGuideInTopic interface:
  /**
   * @member {string} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {string} originatingOrganization
   */
exports.prototype['originatingOrganization'] = undefined;

  /**
   * @member {Date} publishedOn
   */
exports.prototype['publishedOn'] = undefined;

  /**
   * @member {boolean} enabled
   * @default false
   */
exports.prototype['enabled'] = false;



  return exports;
}));


