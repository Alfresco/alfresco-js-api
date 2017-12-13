(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ModelDate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideBody = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassificationGuideBody model module.
   * @module model/ClassificationGuideBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationGuideBody</code>.
   * @alias module:model/ClassificationGuideBody
   * @class
   * @param name
   * @param originatingOrganization
   * @param publishedOn
   */
  var exports = function(name, originatingOrganization, publishedOn) {

    this['name'] = name;
    this['originatingOrganization'] = originatingOrganization;
    this['publishedOn'] = publishedOn;

  };

  /**
   * Constructs a <code>ClassificationGuideBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationGuideBody} obj Optional instance to populate.
   * @return {module:model/ClassificationGuideBody} The populated <code>ClassificationGuideBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('originatingOrganization')) {
        obj['originatingOrganization'] = ApiClient.convertToType(data['originatingOrganization'], 'String');
      }
      if (data.hasOwnProperty('publishedOn')) {
        obj['publishedOn'] = ApiClient.convertToType(data['publishedOn'], 'Date');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
    }
    return obj;
  }


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
