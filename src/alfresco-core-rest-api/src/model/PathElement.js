(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PathElement = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The PathElement model module.
   * @module model/PathElement
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PathElement</code>.
   * @alias module:model/PathElement
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>PathElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PathElement} obj Optional instance to populate.
   * @return {module:model/PathElement} The populated <code>PathElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {string[]} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;


  return exports;
}));
