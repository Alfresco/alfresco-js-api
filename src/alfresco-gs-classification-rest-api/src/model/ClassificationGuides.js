

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuidesInTopic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuidesInTopic'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuides = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesInTopic);
  }
}(this, function(ApiClient, ClassificationGuidesInTopic) {
  'use strict';




  /**
   * The ClassificationGuides model module.
   * @module ClassificationGuides
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuides</code>.
   * A classification guide in a list.
   * @alias ClassificationGuides
   * @class
   * @implements moduleClassificationGuidesInTopic
   * @param name {string}
   * @param originatingOrganization {string}
   * @param publishedOn {Date}
   */
  var exports = function(name, originatingOrganization, publishedOn) {
    var _this = this;

    ClassificationGuidesInTopic.call(_this, name, originatingOrganization, publishedOn);
  };

  /**
   * Constructs a <code>ClassificationGuides</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationGuides} obj Optional instance to populate.
   * @return {ClassificationGuides} The populated <code>ClassificationGuides</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ClassificationGuidesInTopic.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ClassificationGuidesInTopic interface:
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

  /**
   * @member {boolean} hasTopics
   */
exports.prototype['hasTopics'] = undefined;



  return exports;
}));


