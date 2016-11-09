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
    root.ActivitiPublicRestApi.FormJavascriptEventRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The FormJavascriptEventRepresentation model module.
   * @module model/FormJavascriptEventRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>FormJavascriptEventRepresentation</code>.
   * @alias module:model/FormJavascriptEventRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>FormJavascriptEventRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FormJavascriptEventRepresentation} obj Optional instance to populate.
   * @return {module:model/FormJavascriptEventRepresentation} The populated <code>FormJavascriptEventRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('event')) {
        obj['event'] = ApiClient.convertToType(data['event'], 'String');
      }
      if (data.hasOwnProperty('javascriptLogic')) {
        obj['javascriptLogic'] = ApiClient.convertToType(data['javascriptLogic'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} event
   */
  exports.prototype['event'] = undefined;
  /**
   * @member {String} javascriptLogic
   */
  exports.prototype['javascriptLogic'] = undefined;




  return exports;
}));


