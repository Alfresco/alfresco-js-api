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
    root.AlfrescoCoreRestApi.ActivityActivitySummary = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ActivityActivitySummary model module.
   * @module model/ActivityActivitySummary
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ActivityActivitySummary</code>.
   * An object summarizing the activity
   * @alias module:model/ActivityActivitySummary
   * @class
   */
  var exports = function() {






  };

  /**
   * Constructs a <code>ActivityActivitySummary</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ActivityActivitySummary} obj Optional instance to populate.
   * @return {module:model/ActivityActivitySummary} The populated <code>ActivityActivitySummary</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('firstName')) {
        obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
      }
      if (data.hasOwnProperty('lastName')) {
        obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
      }
      if (data.hasOwnProperty('parentObjectId')) {
        obj['parentObjectId'] = ApiClient.convertToType(data['parentObjectId'], 'String');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('objectId')) {
        obj['objectId'] = ApiClient.convertToType(data['objectId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} firstName
   */
  exports.prototype['firstName'] = undefined;

  /**
   * @member {String} lastName
   */
  exports.prototype['lastName'] = undefined;

  /**
   * @member {String} parentObjectId
   */
  exports.prototype['parentObjectId'] = undefined;

  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;

  /**
   * @member {String} objectId
   */
  exports.prototype['objectId'] = undefined;




  return exports;
}));
