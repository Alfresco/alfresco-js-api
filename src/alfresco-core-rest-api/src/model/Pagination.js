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
    root.AlfrescoCoreRestApi.Pagination = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The Pagination model module.
   * @module model/Pagination
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias module:model/Pagination
   * @class
   * @param count
   * @param hasMoreItems
   * @param skipCount
   * @param maxItems
   */
  var exports = function(count, hasMoreItems, skipCount, maxItems) {

    this['count'] = count;
    this['hasMoreItems'] = hasMoreItems;

    this['skipCount'] = skipCount;
    this['maxItems'] = maxItems;
  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Pagination} obj Optional instance to populate.
   * @return {module:model/Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Integer');
      }
      if (data.hasOwnProperty('hasMoreItems')) {
        obj['hasMoreItems'] = ApiClient.convertToType(data['hasMoreItems'], 'Boolean');
      }
      if (data.hasOwnProperty('totalItems')) {
        obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Integer');
      }
      if (data.hasOwnProperty('skipCount')) {
        obj['skipCount'] = ApiClient.convertToType(data['skipCount'], 'Integer');
      }
      if (data.hasOwnProperty('maxItems')) {
        obj['maxItems'] = ApiClient.convertToType(data['maxItems'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * The number of objects in the entries array.\n
   * @member {Integer} count
   */
  exports.prototype['count'] = undefined;

  /**
   * A boolean value which is **true** if there are more entities in the collection\nbeyond those in this response. A true value means a request with a larger value\nfor the **skipCount** or the **maxItems** parameter will return more entities.\n
   * @member {Boolean} hasMoreItems
   */
  exports.prototype['hasMoreItems'] = undefined;

  /**
   * An integer describing the total number of entities in the collection.\nThe API might not be able to determine this value,\nin which case this property will not be present.\n
   * @member {Integer} totalItems
   */
  exports.prototype['totalItems'] = undefined;

  /**
   * An integer describing how many entities exist in the collection before\nthose included in this list.\n
   * @member {Integer} skipCount
   */
  exports.prototype['skipCount'] = undefined;

  /**
   * The value of the **maxItems** parameter used to generate this list,\nor if there was no **maxItems** parameter the default value, 10\n
   * @member {Integer} maxItems
   */
  exports.prototype['maxItems'] = undefined;




  return exports;
}));
