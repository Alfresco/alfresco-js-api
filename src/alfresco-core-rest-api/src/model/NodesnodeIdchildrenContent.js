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
    root.AlfrescoCoreRestApi.NodesnodeIdchildrenContent = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The NodesnodeIdchildrenContent model module.
   * @module model/NodesnodeIdchildrenContent
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>NodesnodeIdchildrenContent</code>.
   * @alias module:model/NodesnodeIdchildrenContent
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>NodesnodeIdchildrenContent</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NodesnodeIdchildrenContent} obj Optional instance to populate.
   * @return {module:model/NodesnodeIdchildrenContent} The populated <code>NodesnodeIdchildrenContent</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('mimeType')) {
        obj['mimeType'] = ApiClient.convertToType(data['mimeType'], 'String');
      }
      if (data.hasOwnProperty('encoding')) {
        obj['encoding'] = ApiClient.convertToType(data['encoding'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} mimeType
   */
  exports.prototype['mimeType'] = undefined;

  /**
   * @member {String} encoding
   */
  exports.prototype['encoding'] = undefined;




  return exports;
}));
