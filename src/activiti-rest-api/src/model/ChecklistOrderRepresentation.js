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
    root.ActivitiPublicRestApi.ChecklistOrderRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ChecklistOrderRepresentation model module.
   * @module model/ChecklistOrderRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ChecklistOrderRepresentation</code>.
   * @alias module:model/ChecklistOrderRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>ChecklistOrderRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ChecklistOrderRepresentation} obj Optional instance to populate.
   * @return {module:model/ChecklistOrderRepresentation} The populated <code>ChecklistOrderRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('order')) {
        obj['order'] = ApiClient.convertToType(data['order'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {string[]} order
   */
  exports.prototype['order'] = undefined;




  return exports;
}));


