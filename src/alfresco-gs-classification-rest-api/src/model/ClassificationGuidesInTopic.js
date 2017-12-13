(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuidesBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuidesBody'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesInTopic = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuidesBody);
  }
}(this, function(ApiClient, ClassificationGuidesBody) {
  'use strict';

  /**
   * The ClassificationGuidesInTopic model module.
   * @module model/ClassificationGuidesInTopic
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuidesInTopic</code>.
   * The classification guide which the topic is contained in. This field is only returned when requested.
   * @alias module:model/ClassificationGuidesInTopic
   * @class
   * @extends module:model/ClassificationGuidesBody
   * @param name
   * @param originatingOrganization
   * @param publishedOn
   */
  var exports = function(name, originatingOrganization, publishedOn) {
    ClassificationGuidesBody.call(this, name, originatingOrganization, publishedOn);
  };

  /**
   * Constructs a <code>ClassificationGuidesInTopic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationGuidesInTopic} obj Optional instance to populate.
   * @return {module:model/ClassificationGuidesInTopic} The populated <code>ClassificationGuidesInTopic</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ClassificationGuidesBody.constructFromObject(data, obj);
    }
    return obj;
  }

  exports.prototype = Object.create(ClassificationGuidesBody.prototype);
  exports.prototype.constructor = exports;





  return exports;
}));
