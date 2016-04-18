(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMemberBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The SiteMemberBody model module.
   * @module model/SiteMemberBody
   * @version 1
   */

  /**
   * Constructs a new <code>SiteMemberBody</code>.
   * @alias module:model/SiteMemberBody
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>SiteMemberBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMemberBody} obj Optional instance to populate.
   * @return {module:model/SiteMemberBody} The populated <code>SiteMemberBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) { 
      obj = obj || new exports();

      if (data.hasOwnProperty('Role')) {
        obj['Role'] = ApiClient.convertToType(data['Role'], 'String');
      }
      if (data.hasOwnProperty('PersonId')) {
        obj['PersonId'] = ApiClient.convertToType(data['PersonId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteMemberBody.RoleEnum} Role
   */
  exports.prototype['Role'] = undefined;

  /**
   * @member {String} PersonId
   */
  exports.prototype['PersonId'] = undefined;


  /**
   * Allowed values for the <code>Role</code> property.
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
