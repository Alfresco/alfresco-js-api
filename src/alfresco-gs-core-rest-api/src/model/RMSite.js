(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RMSite = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RMSite model module.
   * @module model/RMSite
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RMSite</code>.
   * @alias module:model/RMSite
   * @class
   * @param id
   * @param guid
   * @param title
   * @param visibility
   * @param compliance
   */
  var exports = function(id, guid, title, visibility, compliance) {

    this['id'] = id;
    this['guid'] = guid;
    this['title'] = title;

    this['visibility'] = visibility;
    this['compliance'] = compliance;

  };

  /**
   * Constructs a <code>RMSite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RMSite} obj Optional instance to populate.
   * @return {module:model/RMSite} The populated <code>RMSite</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('guid')) {
        obj['guid'] = ApiClient.convertToType(data['guid'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('visibility')) {
        obj['visibility'] = ApiClient.convertToType(data['visibility'], 'String');
      }
      if (data.hasOwnProperty('compliance')) {
        obj['compliance'] = ApiClient.convertToType(data['compliance'], 'String');
      }
      if (data.hasOwnProperty('role')) {
        obj['role'] = ApiClient.convertToType(data['role'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} guid
   */
  exports.prototype['guid'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {module:model/RMSite.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;

  /**
   * @member {module:model/RMSite.ComplianceEnum} compliance
   */
  exports.prototype['compliance'] = undefined;

  /**
   * @member {module:model/RMSite.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {String}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: PRIVATE
     * @const
     */
    PRIVATE: "PRIVATE",

    /**
     * value: MODERATED
     * @const
     */
    MODERATED: "MODERATED",

    /**
     * value: PUBLIC
     * @const
     */
    PUBLIC: "PUBLIC"
  };  /**
   * Allowed values for the <code>compliance</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ComplianceEnum = {
    /**
     * value: STANDARD
     * @const
     */
    STANDARD: "STANDARD",

    /**
     * value: DOD5015
     * @const
     */
    DOD5015: "DOD5015"
  };  /**
   * Allowed values for the <code>role</code> property.
   * @enum {String}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: SiteConsumer
     * @const
     */
    SITECONSUMER: "SiteConsumer",

    /**
     * value: SiteCollaborator
     * @const
     */
    SITECOLLABORATOR: "SiteCollaborator",

    /**
     * value: SiteContributor
     * @const
     */
    SITECONTRIBUTOR: "SiteContributor",

    /**
     * value: SiteManager
     * @const
     */
    SITEMANAGER: "SiteManager"
  };

  return exports;
}));
