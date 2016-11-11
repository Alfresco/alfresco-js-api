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
    root.ActivitiPublicRestApi.SyncLogEntryRepresentation = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SyncLogEntryRepresentation model module.
   * @module model/SyncLogEntryRepresentation
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>SyncLogEntryRepresentation</code>.
   * @alias module:model/SyncLogEntryRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>SyncLogEntryRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SyncLogEntryRepresentation} obj Optional instance to populate.
   * @return {module:model/SyncLogEntryRepresentation} The populated <code>SyncLogEntryRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('timeStamp')) {
        obj['timeStamp'] = ApiClient.convertToType(data['timeStamp'], 'Date');
      }
      if (data.hasOwnProperty('type')) {
        obj['type'] = ApiClient.convertToType(data['type'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {Date} timeStamp
   */
  exports.prototype['timeStamp'] = undefined;
  /**
   * @member {String} type
   */
  exports.prototype['type'] = undefined;




  return exports;
}));


