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
    root.AlfrescoCoreRestApi.DownloadBodyCreate = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The DownloadBodyCreate model module.
   * @module model/DownloadBodyCreate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DownloadBodyCreate</code>.
   * @alias module:model/DownloadBodyCreate
   * @class
   * @param nodeIds {string[]}
   */
  var exports = function(nodeIds) {
    var _this = this;

    _this['nodeIds'] = nodeIds;
  };

  /**
   * Constructs a <code>DownloadBodyCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadBodyCreate} obj Optional instance to populate.
   * @return {module:model/DownloadBodyCreate} The populated <code>DownloadBodyCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('nodeIds')) {
        obj['nodeIds'] = ApiClient.convertToType(data['nodeIds'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {string[]} nodeIds
   */
  exports.prototype['nodeIds'] = undefined;

  return exports;
}));
