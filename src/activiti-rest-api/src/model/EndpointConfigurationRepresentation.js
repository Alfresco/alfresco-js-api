(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/EndpointRequestHeaderRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./EndpointRequestHeaderRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.EndpointConfigurationRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.EndpointRequestHeaderRepresentation);
  }
}(this, function(ApiClient, EndpointRequestHeaderRepresentation) {
  'use strict';




  /**
   * The EndpointConfigurationRepresentation model module.
   * @module model/EndpointConfigurationRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>EndpointConfigurationRepresentation</code>.
   * @alias module:model/EndpointConfigurationRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>EndpointConfigurationRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EndpointConfigurationRepresentation} obj Optional instance to populate.
   * @return {module:model/EndpointConfigurationRepresentation} The populated <code>EndpointConfigurationRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('basicAuthId')) {
        obj['basicAuthId'] = ApiClient.convertToType(data['basicAuthId'], 'Integer');
      }
      if (data.hasOwnProperty('basicAuthName')) {
        obj['basicAuthName'] = ApiClient.convertToType(data['basicAuthName'], 'String');
      }
      if (data.hasOwnProperty('host')) {
        obj['host'] = ApiClient.convertToType(data['host'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = ApiClient.convertToType(data['path'], 'String');
      }
      if (data.hasOwnProperty('port')) {
        obj['port'] = ApiClient.convertToType(data['port'], 'String');
      }
      if (data.hasOwnProperty('protocol')) {
        obj['protocol'] = ApiClient.convertToType(data['protocol'], 'String');
      }
      if (data.hasOwnProperty('requestHeaders')) {
        obj['requestHeaders'] = ApiClient.convertToType(data['requestHeaders'], [EndpointRequestHeaderRepresentation]);
      }
      if (data.hasOwnProperty('tenantId')) {
        obj['tenantId'] = ApiClient.convertToType(data['tenantId'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} basicAuthId
   */
  exports.prototype['basicAuthId'] = undefined;
  /**
   * @member {String} basicAuthName
   */
  exports.prototype['basicAuthName'] = undefined;
  /**
   * @member {String} host
   */
  exports.prototype['host'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {String} port
   */
  exports.prototype['port'] = undefined;
  /**
   * @member {String} protocol
   */
  exports.prototype['protocol'] = undefined;
  /**
   * @member {Array.<module:model/EndpointRequestHeaderRepresentation>} requestHeaders
   */
  exports.prototype['requestHeaders'] = undefined;
  /**
   * @member {Integer} tenantId
   */
  exports.prototype['tenantId'] = undefined;




  return exports;
}));


