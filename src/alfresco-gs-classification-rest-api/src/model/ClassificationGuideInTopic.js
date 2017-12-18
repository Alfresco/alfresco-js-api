

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuideBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuideBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideInTopic = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody);
  }
}(this, function(ApiClient, ClassificationGuideBody) {
  'use strict';




  /**
   * The ClassificationGuideInTopic model module.
   * @module ClassificationGuideInTopic
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuideInTopic</code>.
   * The classification guide which the topic is contained in. This field is only returned when requested.
   * @alias ClassificationGuideInTopic
   * @class
   * @implements moduleClassificationGuideBody
   * @param name {string}
   * @param originatingOrganization {string}
   * @param publishedOn {Date}
   */
  var exports = function(name, originatingOrganization, publishedOn) {
    var _this = this;

    ClassificationGuideBody.call(_this, name, originatingOrganization, publishedOn);
  };

  /**
   * Constructs a <code>ClassificationGuideInTopic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {ClassificationGuideInTopic} obj Optional instance to populate.
   * @return {ClassificationGuideInTopic} The populated <code>ClassificationGuideInTopic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      ClassificationGuideBody.constructFromObject(data, obj);
    }
    return obj;
  }


  // Implement ClassificationGuideBody interface:
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


