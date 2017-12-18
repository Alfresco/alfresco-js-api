
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
   * @module  RMSite
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RMSite</code>.
   * @alias RMSite
   * @class
   * @param id {string}
   * @param guid {string}
   * @param title {string}
   * @param visibility {RMSite.VisibilityEnum}
   * @param compliance {RMSite.ComplianceEnum}
   */
  var exports = function(id, guid, title, visibility, compliance) {
    var _this = this;

    _this['id'] = id;
    _this['guid'] = guid;
    _this['title'] = title;

    _this['visibility'] = visibility;
    _this['compliance'] = compliance;

  };

  /**
   * Constructs a <code>RMSite</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RMSite} obj Optional instance to populate.
   * @return {RMSite} The populated <code>RMSite</code> instance.
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
   * @member {string} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {string} guid
   */
  exports.prototype['guid'] = undefined;
  /**
   * @member {string} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {string} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {RMSite.VisibilityEnum} visibility
   */
  exports.prototype['visibility'] = undefined;
  /**
   * @member {RMSite.ComplianceEnum} compliance
   */
  exports.prototype['compliance'] = undefined;
  /**
   * @member {RMSite.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
   * Allowed values for the <code>visibility</code> property.
   * @enum {string}
   * @readonly
   */
  exports.VisibilityEnum = {
    /**
     * value: "PRIVATE"
     * @const
     */
    "PRIVATE": "PRIVATE",
    /**
     * value: "MODERATED"
     * @const
     */
    "MODERATED": "MODERATED",
    /**
     * value: "PUBLIC"
     * @const
     */
    "PUBLIC": "PUBLIC"  };

  /**
   * Allowed values for the <code>compliance</code> property.
   * @enum {string}
   * @readonly
   */
  exports.ComplianceEnum = {
    /**
     * value: "STANDARD"
     * @const
     */
    "STANDARD": "STANDARD",
    /**
     * value: "DOD5015"
     * @const
     */
    "DOD5015": "DOD5015"  };

  /**
   * Allowed values for the <code>role</code> property.
   * @enum {string}
   * @readonly
   */
  exports.RoleEnum = {
    /**
     * value: "SiteConsumer"
     * @const
     */
    "SiteConsumer": "SiteConsumer",
    /**
     * value: "SiteCollaborator"
     * @const
     */
    "SiteCollaborator": "SiteCollaborator",
    /**
     * value: "SiteContributor"
     * @const
     */
    "SiteContributor": "SiteContributor",
    /**
     * value: "SiteManager"
     * @const
     */
    "SiteManager": "SiteManager"  };


  return exports;
}));


