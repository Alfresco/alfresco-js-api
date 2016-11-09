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
    root.ActivitiPublicRestApi.ArrayNode = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ArrayNode model module.
   * @module model/ArrayNode
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ArrayNode</code>.
   * @alias module:model/ArrayNode
   * @class
   */
  var exports = function() {
    var _this = this;






















  };

  /**
   * Constructs a <code>ArrayNode</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ArrayNode} obj Optional instance to populate.
   * @return {module:model/ArrayNode} The populated <code>ArrayNode</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('array')) {
        obj['array'] = ApiClient.convertToType(data['array'], 'Boolean');
      }
      if (data.hasOwnProperty('bigDecimal')) {
        obj['bigDecimal'] = ApiClient.convertToType(data['bigDecimal'], 'Boolean');
      }
      if (data.hasOwnProperty('bigInteger')) {
        obj['bigInteger'] = ApiClient.convertToType(data['bigInteger'], 'Boolean');
      }
      if (data.hasOwnProperty('binary')) {
        obj['binary'] = ApiClient.convertToType(data['binary'], 'Boolean');
      }
      if (data.hasOwnProperty('boolean')) {
        obj['boolean'] = ApiClient.convertToType(data['boolean'], 'Boolean');
      }
      if (data.hasOwnProperty('containerNode')) {
        obj['containerNode'] = ApiClient.convertToType(data['containerNode'], 'Boolean');
      }
      if (data.hasOwnProperty('double')) {
        obj['double'] = ApiClient.convertToType(data['double'], 'Boolean');
      }
      if (data.hasOwnProperty('float')) {
        obj['float'] = ApiClient.convertToType(data['float'], 'Boolean');
      }
      if (data.hasOwnProperty('floatingPointNumber')) {
        obj['floatingPointNumber'] = ApiClient.convertToType(data['floatingPointNumber'], 'Boolean');
      }
      if (data.hasOwnProperty('int')) {
        obj['int'] = ApiClient.convertToType(data['int'], 'Boolean');
      }
      if (data.hasOwnProperty('integralNumber')) {
        obj['integralNumber'] = ApiClient.convertToType(data['integralNumber'], 'Boolean');
      }
      if (data.hasOwnProperty('long')) {
        obj['long'] = ApiClient.convertToType(data['long'], 'Boolean');
      }
      if (data.hasOwnProperty('missingNode')) {
        obj['missingNode'] = ApiClient.convertToType(data['missingNode'], 'Boolean');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('null')) {
        obj['null'] = ApiClient.convertToType(data['null'], 'Boolean');
      }
      if (data.hasOwnProperty('number')) {
        obj['number'] = ApiClient.convertToType(data['number'], 'Boolean');
      }
      if (data.hasOwnProperty('object')) {
        obj['object'] = ApiClient.convertToType(data['object'], 'Boolean');
      }
      if (data.hasOwnProperty('pojo')) {
        obj['pojo'] = ApiClient.convertToType(data['pojo'], 'Boolean');
      }
      if (data.hasOwnProperty('short')) {
        obj['short'] = ApiClient.convertToType(data['short'], 'Boolean');
      }
      if (data.hasOwnProperty('textual')) {
        obj['textual'] = ApiClient.convertToType(data['textual'], 'Boolean');
      }
      if (data.hasOwnProperty('valueNode')) {
        obj['valueNode'] = ApiClient.convertToType(data['valueNode'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} array
   */
  exports.prototype['array'] = undefined;
  /**
   * @member {Boolean} bigDecimal
   */
  exports.prototype['bigDecimal'] = undefined;
  /**
   * @member {Boolean} bigInteger
   */
  exports.prototype['bigInteger'] = undefined;
  /**
   * @member {Boolean} binary
   */
  exports.prototype['binary'] = undefined;
  /**
   * @member {Boolean} boolean
   */
  exports.prototype['boolean'] = undefined;
  /**
   * @member {Boolean} containerNode
   */
  exports.prototype['containerNode'] = undefined;
  /**
   * @member {Boolean} double
   */
  exports.prototype['double'] = undefined;
  /**
   * @member {Boolean} float
   */
  exports.prototype['float'] = undefined;
  /**
   * @member {Boolean} floatingPointNumber
   */
  exports.prototype['floatingPointNumber'] = undefined;
  /**
   * @member {Boolean} int
   */
  exports.prototype['int'] = undefined;
  /**
   * @member {Boolean} integralNumber
   */
  exports.prototype['integralNumber'] = undefined;
  /**
   * @member {Boolean} long
   */
  exports.prototype['long'] = undefined;
  /**
   * @member {Boolean} missingNode
   */
  exports.prototype['missingNode'] = undefined;
  /**
   * @member {module:model/ArrayNode.NodeTypeEnum} nodeType
   */
  exports.prototype['nodeType'] = undefined;
  /**
   * @member {Boolean} null
   */
  exports.prototype['null'] = undefined;
  /**
   * @member {Boolean} number
   */
  exports.prototype['number'] = undefined;
  /**
   * @member {Boolean} object
   */
  exports.prototype['object'] = undefined;
  /**
   * @member {Boolean} pojo
   */
  exports.prototype['pojo'] = undefined;
  /**
   * @member {Boolean} short
   */
  exports.prototype['short'] = undefined;
  /**
   * @member {Boolean} textual
   */
  exports.prototype['textual'] = undefined;
  /**
   * @member {Boolean} valueNode
   */
  exports.prototype['valueNode'] = undefined;


  /**
   * Allowed values for the <code>nodeType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NodeTypeEnum = {
    /**
     * value: "ARRAY"
     * @const
     */
    "ARRAY": "ARRAY",
    /**
     * value: "BINARY"
     * @const
     */
    "BINARY": "BINARY",
    /**
     * value: "BOOLEAN"
     * @const
     */
    "BOOLEAN": "BOOLEAN",
    /**
     * value: "MISSING"
     * @const
     */
    "MISSING": "MISSING",
    /**
     * value: "NULL"
     * @const
     */
    "NULL": "NULL",
    /**
     * value: "NUMBER"
     * @const
     */
    "NUMBER": "NUMBER",
    /**
     * value: "OBJECT"
     * @const
     */
    "OBJECT": "OBJECT",
    /**
     * value: "POJO"
     * @const
     */
    "POJO": "POJO",
    /**
     * value: "STRING"
     * @const
     */
    "STRING": "STRING"  };


  return exports;
}));


