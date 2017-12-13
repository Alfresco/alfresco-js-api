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
   * @module model/ClassificationGuideInTopic
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuideInTopic</code>.
   * The classification guide which the topic is contained in. This field is only returned when requested.
   * @alias module:model/ClassificationGuideInTopic
   * @class
   * @extends module:model/ClassificationGuideBody
   * @param name
   * @param originatingOrganization
   * @param publishedOn
   */
  var exports = function(name, originatingOrganization, publishedOn) {
    ClassificationGuideBody.call(this, name, originatingOrganization, publishedOn);
  };

  /**
   * Constructs a <code>ClassificationGuideInTopic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationGuideInTopic} obj Optional instance to populate.
   * @return {module:model/ClassificationGuideInTopic} The populated <code>ClassificationGuideInTopic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ClassificationGuideBody.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(ClassificationGuideBody.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
