/**
 * Alfresco Governance Services Security Controls
 * Provides access to classification and security mark related features.
 *
 * OpenAPI spec version: 1
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './model/ClassificationGuideInTopic'], factory);
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
   * @implements module:model/ClassificationGuideInTopic
   * @param name {String}
   * @param originatingOrganization {String}
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


  // Implement ClassificationGuideInTopic interface:
  /**
   * @member {String} name
   */
exports.prototype['name'] = undefined;

  /**
   * @member {String} originatingOrganization
   */
exports.prototype['originatingOrganization'] = undefined;

  /**
   * @member {Date} publishedOn
   */
exports.prototype['publishedOn'] = undefined;

  /**
   * @member {Boolean} enabled
   * @default false
   */
exports.prototype['enabled'] = false;



  return exports;
}));


