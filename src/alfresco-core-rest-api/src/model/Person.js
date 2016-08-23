(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Company'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Company'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Person = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Company);
  }
}(this, function(ApiClient, Company) {
  'use strict';

  /**
   * The Person model module.
   * @module model/Person
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Person</code>.
   * @alias module:model/Person
   * @class
   * @param id
   * @param firstName
   * @param lastName
   * @param email
   * @param enabled
   */
  var exports = function(id, firstName, lastName, email, enabled) {

    this['id'] = id;
    this['firstName'] = firstName;
    this['lastName'] = lastName;


    this['email'] = email;










    this['enabled'] = enabled;

  };

  /**
   * Constructs a <code>Person</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Person} obj Optional instance to populate.
   * @return {module:model/Person} The populated <code>Person</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('avatarId')) {
        obj['avatarId'] = ApiClient.convertToType(data['avatarId'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('skypeId')) {
        obj['skypeId'] = ApiClient.convertToType(data['skypeId'], 'String');
      }
      if (data.hasOwnProperty('googleId')) {
        obj['googleId'] = ApiClient.convertToType(data['googleId'], 'String');
      }
      if (data.hasOwnProperty('instantMessageId')) {
        obj['instantMessageId'] = ApiClient.convertToType(data['instantMessageId'], 'String');
      }
      if (data.hasOwnProperty('jobTitle')) {
        obj['jobTitle'] = ApiClient.convertToType(data['jobTitle'], 'String');
      }
      if (data.hasOwnProperty('location')) {
        obj['location'] = ApiClient.convertToType(data['location'], 'String');
      }
      if (data.hasOwnProperty('company')) {
        obj['company'] = Company.constructFromObject(data['company']);
      }
      if (data.hasOwnProperty('mobile')) {
        obj['mobile'] = ApiClient.convertToType(data['mobile'], 'String');
      }
      if (data.hasOwnProperty('telephone')) {
        obj['telephone'] = ApiClient.convertToType(data['telephone'], 'String');
      }
      if (data.hasOwnProperty('statusUpdatedAt')) {
        obj['statusUpdatedAt'] = ApiClient.convertToType(data['statusUpdatedAt'], 'Date');
      }
      if (data.hasOwnProperty('userStatus')) {
        obj['userStatus'] = ApiClient.convertToType(data['userStatus'], 'String');
      }
      if (data.hasOwnProperty('enabled')) {
        obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
      }
      if (data.hasOwnProperty('emailNotificationsEnabled')) {
        obj['emailNotificationsEnabled'] = ApiClient.convertToType(data['emailNotificationsEnabled'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * @member {String} avatarId
   */
  exports.prototype['avatarId'] = undefined;

  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;

  /**
   * @member {String} skypeId
   */
  exports.prototype['skypeId'] = undefined;

  /**
   * @member {String} googleId
   */
  exports.prototype['googleId'] = undefined;

  /**
   * @member {String} instantMessageId
   */
  exports.prototype['instantMessageId'] = undefined;

  /**
   * @member {String} jobTitle
   */
  exports.prototype['jobTitle'] = undefined;

  /**
   * @member {String} location
   */
  exports.prototype['location'] = undefined;

  /**
   * @member {module:model/Company} company
   */
  exports.prototype['company'] = undefined;

  /**
   * @member {String} mobile
   */
  exports.prototype['mobile'] = undefined;

  /**
   * @member {String} telephone
   */
  exports.prototype['telephone'] = undefined;

  /**
   * @member {Date} statusUpdatedAt
   */
  exports.prototype['statusUpdatedAt'] = undefined;

  /**
   * @member {String} userStatus
   */
  exports.prototype['userStatus'] = undefined;

  /**
   * @member {Boolean} enabled
   * @default true
   */
  exports.prototype['enabled'] = true;

  /**
   * @member {Boolean} emailNotificationsEnabled
   */
  exports.prototype['emailNotificationsEnabled'] = undefined;




  return exports;
}));
