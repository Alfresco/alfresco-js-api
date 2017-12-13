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
   * @module model/ClassificationGuides
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuides</code>.
   * A classification guide in a list.
   * @alias module:model/ClassificationGuides
   * @class
   * @extends module:model/ClassificationGuidesInTopic
   * @param name
   * @param originatingOrganization
   * @param publishedOn
   */
  var exports = function(name, originatingOrganization, publishedOn) {
    ClassificationGuidesInTopic.call(this, name, originatingOrganization, publishedOn);
  };

  /**
   * Constructs a <code>ClassificationGuides</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationGuides} obj Optional instance to populate.
   * @return {module:model/ClassificationGuides} The populated <code>ClassificationGuides</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ClassificationGuidesInTopic.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(ClassificationGuidesInTopic.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
