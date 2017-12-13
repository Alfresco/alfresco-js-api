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
   * @module model/ClassificationGuide
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuide</code>.
   * A classification guide.
   * @alias module:model/ClassificationGuide
   * @class
   * @extends module:model/ClassificationGuideInTopic
   * @param name
   * @param originatingOrganization
   * @param publishedOn
   */
  var exports = function(name, originatingOrganization, publishedOn) {
    ClassificationGuideInTopic.call(this, name, originatingOrganization, publishedOn);
  };

  /**
   * Constructs a <code>ClassificationGuide</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationGuide} obj Optional instance to populate.
   * @return {module:model/ClassificationGuide} The populated <code>ClassificationGuide</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ClassificationGuideInTopic.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(ClassificationGuideInTopic.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
