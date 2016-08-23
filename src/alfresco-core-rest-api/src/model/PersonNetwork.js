(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NetworkQuota'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NetworkQuota'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonNetwork = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NetworkQuota);
  }
}(this, function(ApiClient, NetworkQuota) {
  'use strict';

  /**
   * The PersonNetwork model module.
   * @module model/PersonNetwork
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonNetwork</code>.
   * A network is the group of users and sites that belong to an organization.\nNetworks are organized by email domain. When a user signs up for an\nAlfresco account , their email domain becomes their Home Network.\n
   * @alias module:model/PersonNetwork
   * @class
   * @param id
   * @param isEnabled
   */
  var exports = function(id, isEnabled) {

    this['id'] = id;

    this['isEnabled'] = isEnabled;




  };

  /**
   * Constructs a <code>PersonNetwork</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonNetwork} obj Optional instance to populate.
   * @return {module:model/PersonNetwork} The populated <code>PersonNetwork</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('homeNetwork')) {
        obj['homeNetwork'] = ApiClient.convertToType(data['homeNetwork'], 'Boolean');
      }
      if (data.hasOwnProperty('isEnabled')) {
        obj['isEnabled'] = ApiClient.convertToType(data['isEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('paidNetwork')) {
        obj['paidNetwork'] = ApiClient.convertToType(data['paidNetwork'], 'Boolean');
      }
      if (data.hasOwnProperty('subscriptionLevel')) {
        obj['subscriptionLevel'] = ApiClient.convertToType(data['subscriptionLevel'], 'String');
      }
      if (data.hasOwnProperty('quotas')) {
        obj['quotas'] = ApiClient.convertToType(data['quotas'], [NetworkQuota]);
      }
    }
    return obj;
  }


  /**
   * This network's unique id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * Is this the home network?
   * @member {Boolean} homeNetwork
   */
  exports.prototype['homeNetwork'] = undefined;

  /**
   * @member {Boolean} isEnabled
   */
  exports.prototype['isEnabled'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {Boolean} paidNetwork
   */
  exports.prototype['paidNetwork'] = undefined;

  /**
   * @member {module:model/PersonNetwork.SubscriptionLevelEnum} subscriptionLevel
   */
  exports.prototype['subscriptionLevel'] = undefined;

  /**
   * @member {Array.<module:model/NetworkQuota>} quotas
   */
  exports.prototype['quotas'] = undefined;


  /**
   * Allowed values for the <code>subscriptionLevel</code> property.
   * @enum {String}
   * @readonly
   */
  exports.SubscriptionLevelEnum = {
    /**
     * value: Free
     * @const
     */
    FREE: "Free",

    /**
     * value: Standard
     * @const
     */
    STANDARD: "Standard",

    /**
     * value: Enterprise
     * @const
     */
    ENTERPRISE: "Enterprise"
  };

  return exports;
}));
