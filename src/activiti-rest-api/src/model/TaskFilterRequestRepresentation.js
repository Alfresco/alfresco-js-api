(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/TaskFilterRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./TaskFilterRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.TaskFilterRequestRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.TaskFilterRepresentation);
  }
}(this, function(ApiClient, TaskFilterRepresentation) {
  'use strict';




  /**
   * The TaskFilterRequestRepresentation model module.
   * @module model/TaskFilterRequestRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TaskFilterRequestRepresentation</code>.
   * @alias module:model/TaskFilterRequestRepresentation
   * @class
   */
  var exports = function() {

      if(!this.hasOwnProperty('filter') && !this.hasOwnProperty('filterId')){
          this.filter = new TaskFilterRepresentation();
      }

      var _this = this;

  };

  /**
   * Constructs a <code>TaskFilterRequestRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskFilterRequestRepresentation} obj Optional instance to populate.
   * @return {module:model/TaskFilterRequestRepresentation} The populated <code>TaskFilterRequestRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('appDefinitionId')) {
        obj['appDefinitionId'] = ApiClient.convertToType(data['appDefinitionId'], 'Integer');
      }

      if (data.hasOwnProperty('filter')) {
        obj['filter'] = TaskFilterRepresentation.constructFromObject(data['filter']);
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
   * @member {module:model/TaskFilterRepresentation} filter
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


