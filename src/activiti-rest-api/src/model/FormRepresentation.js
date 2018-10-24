(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/FormDefinitionRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./FormDefinitionRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.FormRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.FormDefinitionRepresentation);
  }
}(this, function(ApiClient, FormDefinitionRepresentation) {
  'use strict';




  /**
   * The FormRepresentation model module.
   * @module model/FormRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>FormRepresentation</code>.
   * @alias module:model/FormRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;











  };

  /**
   * Constructs a <code>FormRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormRepresentation} obj Optional instance to populate.
   * @return {module:model/FormRepresentation} The populated <code>FormRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('formDefinition')) {
        obj['formDefinition'] = FormDefinitionRepresentation.constructFromObject(data['formDefinition']);
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('lastUpdated')) {
        obj['lastUpdated'] = ApiClient.convertToType(data['lastUpdated'], 'Date');
      }
      if (data.hasOwnProperty('lastUpdatedBy')) {
        obj['lastUpdatedBy'] = ApiClient.convertToType(data['lastUpdatedBy'], 'Integer');
      }
      if (data.hasOwnProperty('lastUpdatedByFullName')) {
        obj['lastUpdatedByFullName'] = ApiClient.convertToType(data['lastUpdatedByFullName'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('referenceId')) {
        obj['referenceId'] = ApiClient.convertToType(data['referenceId'], 'Integer');
      }
      if (data.hasOwnProperty('stencilSetId')) {
        obj['stencilSetId'] = ApiClient.convertToType(data['stencilSetId'], 'Integer');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * @member {module:model/FormDefinitionRepresentation} formDefinition
   */
  exports.prototype['formDefinition'] = undefined;
  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} lastUpdated
   */
  exports.prototype['lastUpdated'] = undefined;
  /**
   * @member {Integer} lastUpdatedBy
   */
  exports.prototype['lastUpdatedBy'] = undefined;
  /**
   * @member {String} lastUpdatedByFullName
   */
  exports.prototype['lastUpdatedByFullName'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Integer} referenceId
   */
  exports.prototype['referenceId'] = undefined;
  /**
   * @member {Integer} stencilSetId
   */
  exports.prototype['stencilSetId'] = undefined;
  /**
   * @member {Integer} version
   */
  exports.prototype['version'] = undefined;




  return exports;
}));


