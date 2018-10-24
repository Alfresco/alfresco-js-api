(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './NodesnodeIdchildrenContent'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./NodesnodeIdchildrenContent'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.NodeBody = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.NodesnodeIdchildrenContent);
  }
}(this, function(ApiClient, NodesnodeIdchildrenContent) {
  'use strict';

  /**
   * The NodeBody model module.
   * @module model/NodeBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodeBody</code>.
   * @alias module:model/NodeBody
   * @class
   */
  var exports = function() {







  };

  /**
   * Constructs a <code>NodeBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodeBody} obj Optional instance to populate.
   * @return {module:model/NodeBody} The populated <code>NodeBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('relativePath')) {
        obj['relativePath'] = ApiClient.convertToType(data['relativePath'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = NodesnodeIdchildrenContent.constructFromObject(data['content']);
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }


  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {String} relativePath
   */
  exports.prototype['relativePath'] = undefined;

  /**
   * @member {module:model/NodesnodeIdchildrenContent} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {string[]} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;

  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;




  return exports;
}));
