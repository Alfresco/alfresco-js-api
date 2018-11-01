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
    root.ActivitiPublicRestApi.TaskUpdateRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TaskUpdateRepresentation model module.
   * @module model/TaskUpdateRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>TaskUpdateRepresentation</code>.
   * @alias module:model/TaskUpdateRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>TaskUpdateRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskUpdateRepresentation} obj Optional instance to populate.
   * @return {module:model/TaskUpdateRepresentation} The populated <code>TaskUpdateRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('descriptionSet')) {
        obj['descriptionSet'] = ApiClient.convertToType(data['descriptionSet'], 'Boolean');
      }
      if (data.hasOwnProperty('dueDate')) {
        obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'Date');
      }
      if (data.hasOwnProperty('dueDateSet')) {
        obj['dueDateSet'] = ApiClient.convertToType(data['dueDateSet'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nameSet')) {
        obj['nameSet'] = ApiClient.convertToType(data['nameSet'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {Boolean} descriptionSet
   */
  exports.prototype['descriptionSet'] = undefined;
  /**
   * @member {Date} dueDate
   */
  exports.prototype['dueDate'] = undefined;
  /**
   * @member {Boolean} dueDateSet
   */
  exports.prototype['dueDateSet'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} nameSet
   */
  exports.prototype['nameSet'] = undefined;




  return exports;
}));


