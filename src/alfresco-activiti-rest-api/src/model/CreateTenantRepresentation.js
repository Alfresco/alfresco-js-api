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
    root.ActivitiPublicRestApi.CreateTenantRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The CreateTenantRepresentation model module.
   * @module model/CreateTenantRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>CreateTenantRepresentation</code>.
   * @alias module:model/CreateTenantRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>CreateTenantRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTenantRepresentation} obj Optional instance to populate.
   * @return {module:model/CreateTenantRepresentation} The populated <code>CreateTenantRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('active')) {
        obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
      }
      if (data.hasOwnProperty('domain')) {
        obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
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
   * @member {String} domain
   */
  exports.prototype['domain'] = undefined;
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


