(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteMember = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person);
  }
}(this, function(ApiClient, Person) {
  'use strict';

  /**
   * The SiteMember model module.
   * @module model/SiteMember
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteMember</code>.
   * @alias module:model/SiteMember
   * @class
   * @param id
   * @param person
   * @param role
   */
  var exports = function(id, person, role) {

    this['id'] = id;
    this['person'] = person;
    this['role'] = role;
  };

  /**
   * Constructs a <code>SiteMember</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteMember} obj Optional instance to populate.
   * @return {module:model/SiteMember} The populated <code>SiteMember</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('person')) {
        obj['person'] = Person.constructFromObject(data['person']);
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
   * @member {module:model/Person} person
   */
  exports.prototype['person'] = undefined;

  /**
   * @member {module:model/SiteMember.RoleEnum} role
   */
  exports.prototype['role'] = undefined;


  /**
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
