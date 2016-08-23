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
    root.AlfrescoCoreRestApi.NetworkQuota = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NetworkQuota model module.
   * @module model/NetworkQuota
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NetworkQuota</code>.
   * Limits and usage of each quota. A network will have quotas for File space,\nthe number of sites in the network, the number of people in the network,\nand the number of network administrators\n
   * @alias module:model/NetworkQuota
   * @class
   * @param id
   * @param limit
   * @param usage
   */
  var exports = function(id, limit, usage) {

    this['id'] = id;
    this['limit'] = limit;
    this['usage'] = usage;
  };

  /**
   * Constructs a <code>NetworkQuota</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkQuota} obj Optional instance to populate.
   * @return {module:model/NetworkQuota} The populated <code>NetworkQuota</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('limit')) {
        obj['limit'] = ApiClient.convertToType(data['limit'], 'Integer');
      }
      if (data.hasOwnProperty('usage')) {
        obj['usage'] = ApiClient.convertToType(data['usage'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {Integer} limit
   */
  exports.prototype['limit'] = undefined;

  /**
   * @member {Integer} usage
   */
  exports.prototype['usage'] = undefined;




  return exports;
}));
