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
    root.ActivitiPublicRestApi.ProcessInstanceFilterRequestRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ProcessInstanceFilterRepresentation);
  }
}(this, function(ApiClient, ProcessInstanceFilterRepresentation) {
  'use strict';




  /**
   * The ProcessInstanceFilterRequestRepresentation model module.
   * @module model/ProcessInstanceFilterRequestRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessInstanceFilterRequestRepresentation</code>.
   * @alias module:model/ProcessInstanceFilterRequestRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>ProcessInstanceFilterRequestRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessInstanceFilterRequestRepresentation} obj Optional instance to populate.
   * @return {module:model/ProcessInstanceFilterRequestRepresentation} The populated <code>ProcessInstanceFilterRequestRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('appDefinitionId')) {
        obj['appDefinitionId'] = ApiClient.convertToType(data['appDefinitionId'], 'Integer');
      }
      if (data.hasOwnProperty('filter')) {
        obj['filter'] = ProcessInstanceFilterRepresentation.constructFromObject(data['filter']);
      }
      if (data.hasOwnProperty('filterId')) {
        obj['filterId'] = ApiClient.convertToType(data['filterId'], 'Integer');
      }
      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Integer');
      }
      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} appDefinitionId
   */
  exports.prototype['appDefinitionId'] = undefined;
  /**
   * @member {module:model/ProcessInstanceFilterRepresentation} filter
   */
  exports.prototype['filter'] = undefined;
  /**
   * @member {Integer} filterId
   */
  exports.prototype['filterId'] = undefined;
  /**
   * @member {Integer} page
   */
  exports.prototype['page'] = undefined;
  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;




  return exports;
}));


