(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', '../model/Download'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Download'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.DownloadEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Download);
  }
}(this, function(ApiClient, Download) {
  'use strict';

  /**
   * The DownloadEntry model module.
   * @module model/DownloadEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>DownloadEntry</code>.
   * @alias module:model/DownloadEntry
   * @class
   * @param entry {module:model/Download}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>DownloadEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DownloadEntry} obj Optional instance to populate.
   * @return {module:model/DownloadEntry} The populated <code>DownloadEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Download.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Download} entry
   */
  exports.prototype['entry'] = undefined;

  return exports;
}));
