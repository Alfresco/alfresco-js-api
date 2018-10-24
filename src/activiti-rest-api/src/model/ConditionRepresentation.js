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
    root.ActivitiPublicRestApi.ConditionRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ConditionRepresentation model module.
   * @module model/ConditionRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ConditionRepresentation</code>.
   * @alias module:model/ConditionRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>ConditionRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ConditionRepresentation} obj Optional instance to populate.
   * @return {module:model/ConditionRepresentation} The populated <code>ConditionRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('leftFormFieldId')) {
        obj['leftFormFieldId'] = ApiClient.convertToType(data['leftFormFieldId'], 'String');
      }
      if (data.hasOwnProperty('leftRestResponseId')) {
        obj['leftRestResponseId'] = ApiClient.convertToType(data['leftRestResponseId'], 'String');
      }
      if (data.hasOwnProperty('nextConditionOperator')) {
        obj['nextConditionOperator'] = ApiClient.convertToType(data['nextConditionOperator'], 'String');
      }
      if (data.hasOwnProperty('operator')) {
        obj['operator'] = ApiClient.convertToType(data['operator'], 'String');
      }
      if (data.hasOwnProperty('rightFormFieldId')) {
        obj['rightFormFieldId'] = ApiClient.convertToType(data['rightFormFieldId'], 'String');
      }
      if (data.hasOwnProperty('rightRestResponseId')) {
        obj['rightRestResponseId'] = ApiClient.convertToType(data['rightRestResponseId'], 'String');
      }
      if (data.hasOwnProperty('rightType')) {
        obj['rightType'] = ApiClient.convertToType(data['rightType'], 'String');
      }
      if (data.hasOwnProperty('rightValue')) {
        obj['rightValue'] = ApiClient.convertToType(data['rightValue'], Object);
      }
    }
    return obj;
  }

  /**
   * @member {String} leftFormFieldId
   */
  exports.prototype['leftFormFieldId'] = undefined;
  /**
   * @member {String} leftRestResponseId
   */
  exports.prototype['leftRestResponseId'] = undefined;
  /**
   * @member {String} nextConditionOperator
   */
  exports.prototype['nextConditionOperator'] = undefined;
  /**
   * @member {String} operator
   */
  exports.prototype['operator'] = undefined;
  /**
   * @member {String} rightFormFieldId
   */
  exports.prototype['rightFormFieldId'] = undefined;
  /**
   * @member {String} rightRestResponseId
   */
  exports.prototype['rightRestResponseId'] = undefined;
  /**
   * @member {String} rightType
   */
  exports.prototype['rightType'] = undefined;
  /**
   * @member {Object} rightValue
   */
  exports.prototype['rightValue'] = undefined;




  return exports;
}));


