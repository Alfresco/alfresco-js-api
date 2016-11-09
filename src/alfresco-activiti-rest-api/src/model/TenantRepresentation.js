(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TenantRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TenantRepresentation model module.
   * @module model/TenantRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TenantRepresentation</code>.
   * @alias module:model/TenantRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>TenantRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TenantRepresentation} obj Optional instance to populate.
   * @return {module:model/TenantRepresentation} The populated <code>TenantRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('created')) {
        obj['created'] = ApiClient.convertToType(data['created'], 'Date');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastUpdate')) {
        obj['lastUpdate'] = ApiClient.convertToType(data['lastUpdate'], 'Date');
      }
      if (data.hasOwnProperty('logoId')) {
        obj['logoId'] = ApiClient.convertToType(data['logoId'], 'Integer');
      }
      if (data.hasOwnProperty('maxUsers')) {
        obj['maxUsers'] = ApiClient.convertToType(data['maxUsers'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} active
   */
  exports.prototype['active'] = undefined;
  /**
   * @member {Date} created
   */
  exports.prototype['created'] = undefined;
  /**
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} lastUpdate
   */
  exports.prototype['lastUpdate'] = undefined;
  /**
   * @member {Integer} logoId
   */
  exports.prototype['logoId'] = undefined;
  /**
   * @member {Integer} maxUsers
   */
  exports.prototype['maxUsers'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;




  return exports;
}));


