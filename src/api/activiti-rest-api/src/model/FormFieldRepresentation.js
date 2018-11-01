(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/ConditionRepresentation', '../model/LayoutRepresentation', '../model/OptionRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ConditionRepresentation'), require('./LayoutRepresentation'), require('./OptionRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.FormFieldRepresentation = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.ConditionRepresentation, root.ActivitiPublicRestApi.LayoutRepresentation, root.ActivitiPublicRestApi.OptionRepresentation);
  }
}(this, function(ApiClient, ConditionRepresentation, LayoutRepresentation, OptionRepresentation) {
  'use strict';




  /**
   * The FormFieldRepresentation model module.
   * @module model/FormFieldRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>FormFieldRepresentation</code>.
   * @alias module:model/FormFieldRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;































  };

  /**
   * Constructs a <code>FormFieldRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormFieldRepresentation} obj Optional instance to populate.
   * @return {module:model/FormFieldRepresentation} The populated <code>FormFieldRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('className')) {
        obj['className'] = ApiClient.convertToType(data['className'], 'String');
      }
      if (data.hasOwnProperty('col')) {
        obj['col'] = ApiClient.convertToType(data['col'], 'Integer');
      }
      if (data.hasOwnProperty('colspan')) {
        obj['colspan'] = ApiClient.convertToType(data['colspan'], 'Integer');
      }
      if (data.hasOwnProperty('hasEmptyValue')) {
        obj['hasEmptyValue'] = ApiClient.convertToType(data['hasEmptyValue'], 'Boolean');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('layout')) {
        obj['layout'] = LayoutRepresentation.constructFromObject(data['layout']);
      }
      if (data.hasOwnProperty('maxLength')) {
        obj['maxLength'] = ApiClient.convertToType(data['maxLength'], 'Integer');
      }
      if (data.hasOwnProperty('maxValue')) {
        obj['maxValue'] = ApiClient.convertToType(data['maxValue'], 'String');
      }
      if (data.hasOwnProperty('minLength')) {
        obj['minLength'] = ApiClient.convertToType(data['minLength'], 'Integer');
      }
      if (data.hasOwnProperty('minValue')) {
        obj['minValue'] = ApiClient.convertToType(data['minValue'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('optionType')) {
        obj['optionType'] = ApiClient.convertToType(data['optionType'], 'String');
      }
      if (data.hasOwnProperty('options')) {
        obj['options'] = ApiClient.convertToType(data['options'], [OptionRepresentation]);
      }
      if (data.hasOwnProperty('overrideId')) {
        obj['overrideId'] = ApiClient.convertToType(data['overrideId'], 'Boolean');
      }
      if (data.hasOwnProperty('params')) {
        obj['params'] = ApiClient.convertToType(data['params'], Object);
      }
      if (data.hasOwnProperty('placeholder')) {
        obj['placeholder'] = ApiClient.convertToType(data['placeholder'], 'String');
      }
      if (data.hasOwnProperty('readOnly')) {
        obj['readOnly'] = ApiClient.convertToType(data['readOnly'], 'Boolean');
      }
      if (data.hasOwnProperty('regexPattern')) {
        obj['regexPattern'] = ApiClient.convertToType(data['regexPattern'], 'String');
      }
      if (data.hasOwnProperty('required')) {
        obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
      }
      if (data.hasOwnProperty('restIdProperty')) {
        obj['restIdProperty'] = ApiClient.convertToType(data['restIdProperty'], 'String');
      }
      if (data.hasOwnProperty('restLabelProperty')) {
        obj['restLabelProperty'] = ApiClient.convertToType(data['restLabelProperty'], 'String');
      }
      if (data.hasOwnProperty('restResponsePath')) {
        obj['restResponsePath'] = ApiClient.convertToType(data['restResponsePath'], 'String');
      }
      if (data.hasOwnProperty('restUrl')) {
        obj['restUrl'] = ApiClient.convertToType(data['restUrl'], 'String');
      }
      if (data.hasOwnProperty('row')) {
        obj['row'] = ApiClient.convertToType(data['row'], 'Integer');
      }
      if (data.hasOwnProperty('sizeX')) {
        obj['sizeX'] = ApiClient.convertToType(data['sizeX'], 'Integer');
      }
      if (data.hasOwnProperty('sizeY')) {
        obj['sizeY'] = ApiClient.convertToType(data['sizeY'], 'Integer');
      }
      if (data.hasOwnProperty('tab')) {
        obj['tab'] = ApiClient.convertToType(data['tab'], 'String');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
      if (data.hasOwnProperty('value')) {
        obj['value'] = ApiClient.convertToType(data['value'], Object);
      }
      if (data.hasOwnProperty('visibilityCondition')) {
        obj['visibilityCondition'] = ConditionRepresentation.constructFromObject(data['visibilityCondition']);
      }
    }
    return obj;
  }

  /**
   * @member {String} className
   */
  exports.prototype['className'] = undefined;
  /**
   * @member {Integer} col
   */
  exports.prototype['col'] = undefined;
  /**
   * @member {Integer} colspan
   */
  exports.prototype['colspan'] = undefined;
  /**
   * @member {Boolean} hasEmptyValue
   */
  exports.prototype['hasEmptyValue'] = undefined;
  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {module:model/LayoutRepresentation} layout
   */
  exports.prototype['layout'] = undefined;
  /**
   * @member {Integer} maxLength
   */
  exports.prototype['maxLength'] = undefined;
  /**
   * @member {String} maxValue
   */
  exports.prototype['maxValue'] = undefined;
  /**
   * @member {Integer} minLength
   */
  exports.prototype['minLength'] = undefined;
  /**
   * @member {String} minValue
   */
  exports.prototype['minValue'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} optionType
   */
  exports.prototype['optionType'] = undefined;
  /**
   * @member {Array.<module:model/OptionRepresentation>} options
   */
  exports.prototype['options'] = undefined;
  /**
   * @member {Boolean} overrideId
   */
  exports.prototype['overrideId'] = undefined;
  /**
   * @member {Object} params
   */
  exports.prototype['params'] = undefined;
  /**
   * @member {String} placeholder
   */
  exports.prototype['placeholder'] = undefined;
  /**
   * @member {Boolean} readOnly
   */
  exports.prototype['readOnly'] = undefined;
  /**
   * @member {String} regexPattern
   */
  exports.prototype['regexPattern'] = undefined;
  /**
   * @member {Boolean} required
   */
  exports.prototype['required'] = undefined;
  /**
   * @member {String} restIdProperty
   */
  exports.prototype['restIdProperty'] = undefined;
  /**
   * @member {String} restLabelProperty
   */
  exports.prototype['restLabelProperty'] = undefined;
  /**
   * @member {String} restResponsePath
   */
  exports.prototype['restResponsePath'] = undefined;
  /**
   * @member {String} restUrl
   */
  exports.prototype['restUrl'] = undefined;
  /**
   * @member {Integer} row
   */
  exports.prototype['row'] = undefined;
  /**
   * @member {Integer} sizeX
   */
  exports.prototype['sizeX'] = undefined;
  /**
   * @member {Integer} sizeY
   */
  exports.prototype['sizeY'] = undefined;
  /**
   * @member {String} tab
   */
  exports.prototype['tab'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;
  /**
   * @member {Object} value
   */
  exports.prototype['value'] = undefined;
  /**
   * @member {module:model/ConditionRepresentation} visibilityCondition
   */
  exports.prototype['visibilityCondition'] = undefined;




  return exports;
}));


