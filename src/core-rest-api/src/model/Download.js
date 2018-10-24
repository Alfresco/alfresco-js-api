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
    root.AlfrescoCoreRestApi.Download = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Download model module.
   * @module model/Download
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Download</code>.
   * @alias module:model/Download
   * @class
   */
  var exports = function() {
    var _this = this;
  };

  /**
   * Constructs a <code>Download</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Download} obj Optional instance to populate.
   * @return {module:model/Download} The populated <code>Download</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('filesAdded')) {
        obj['filesAdded'] = ApiClient.convertToType(data['filesAdded'], 'Number');
      }
      if (data.hasOwnProperty('bytesAdded')) {
        obj['bytesAdded'] = ApiClient.convertToType(data['bytesAdded'], 'Number');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('totalFiles')) {
        obj['totalFiles'] = ApiClient.convertToType(data['totalFiles'], 'Number');
      }
      if (data.hasOwnProperty('totalBytes')) {
        obj['totalBytes'] = ApiClient.convertToType(data['totalBytes'], 'Number');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
    }
    return obj;
  }

  /**
   * number of files added so far in the zip
   * @member {Number} filesAdded
   */
  exports.prototype['filesAdded'] = undefined;
  /**
   * number of bytes added so far in the zip
   * @member {Number} bytesAdded
   */
  exports.prototype['bytesAdded'] = undefined;
  /**
   * the id of the download node
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * the total number of files to be added in the zip
   * @member {Number} totalFiles
   */
  exports.prototype['totalFiles'] = undefined;
  /**
   * the total number of bytes to be added in the zip
   * @member {Number} totalBytes
   */
  exports.prototype['totalBytes'] = undefined;
  /**
   * the current status of the download node creation
   * @member {module:model/Download.StatusEnum} status
   * @default 'PENDING'
   */
  exports.prototype['status'] = 'PENDING';


  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "PENDING"
     * @const
     */
    "PENDING": "PENDING",
    /**
     * value: "CANCELLED"
     * @const
     */
    "CANCELLED": "CANCELLED",
    /**
     * value: "IN_PROGRESS"
     * @const
     */
    "IN_PROGRESS": "IN_PROGRESS",
    /**
     * value: "DONE"
     * @const
     */
    "DONE": "DONE",
    /**
     * value: "MAX_CONTENT_SIZE_EXCEEDED"
     * @const
     */
    "MAX_CONTENT_SIZE_EXCEEDED": "MAX_CONTENT_SIZE_EXCEEDED"  };


  return exports;
}));
