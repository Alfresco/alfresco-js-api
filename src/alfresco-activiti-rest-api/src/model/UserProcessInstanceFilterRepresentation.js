(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ProcessInstanceFilterRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ProcessInstanceFilterRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ProcessInstanceFilterRepresentation);
  }
}(this, function(ApiClient, ProcessInstanceFilterRepresentation) {
  'use strict';




  /**
   * The UserProcessInstanceFilterRepresentation model module.
   * @module model/UserProcessInstanceFilterRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>UserProcessInstanceFilterRepresentation</code>.
   * @alias module:model/UserProcessInstanceFilterRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>UserProcessInstanceFilterRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserProcessInstanceFilterRepresentation} obj Optional instance to populate.
   * @return {module:model/UserProcessInstanceFilterRepresentation} The populated <code>UserProcessInstanceFilterRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('appId')) {
        obj['appId'] = ApiClient.convertToType(data['appId'], 'Integer');
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ProcessInstanceFilterRepresentation.constructFromObject(data['filter']);
      }
      if (data.hasOwnProperty('icon')) {
        obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('index')) {
        obj['index'] = ApiClient.convertToType(data['index'], 'Integer');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('recent')) {
        obj['recent'] = ApiClient.convertToType(data['recent'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} appId
   */
  exports.prototype['appId'] = undefined;
  /**
   * @member {module:model/ProcessInstanceFilterRepresentation} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * @member {String} icon
   */
  exports.prototype['icon'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Integer} index
   */
  exports.prototype['index'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} recent
   */
  exports.prototype['recent'] = undefined;




  return exports;
}));


