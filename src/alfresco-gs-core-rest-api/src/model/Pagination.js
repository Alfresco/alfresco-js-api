
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.Pagination = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Pagination model module.
   * @module  Pagination
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Pagination</code>.
   * @alias Pagination
   * @class
   * @param count {number} The number of objects in the entries array.
   * @param hasMoreItems {boolean} A boolean value which is **true** if there are more entities in the collection beyond those in this response. A true value means a request with a larger value for the **skipCount** or the **maxItems** parameter will return more entities.
   * @param skipCount {number} An integer describing how many entities exist in the collection before those included in this list.
   * @param maxItems {number} The value of the **maxItems** parameter used to generate this list, or if there was no **maxItems** parameter the default value is 100
   */
  var exports = function(count, hasMoreItems, skipCount, maxItems) {
    var _this = this;

    _this['count'] = count;
    _this['hasMoreItems'] = hasMoreItems;

    _this['skipCount'] = skipCount;
    _this['maxItems'] = maxItems;
  };

  /**
   * Constructs a <code>Pagination</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {Pagination} obj Optional instance to populate.
   * @return {Pagination} The populated <code>Pagination</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('count')) {
        obj['count'] = ApiClient.convertToType(data['count'], 'Number');
      }
      if (data.hasOwnProperty('hasMoreItems')) {
        obj['hasMoreItems'] = ApiClient.convertToType(data['hasMoreItems'], 'Boolean');
      }
      if (data.hasOwnProperty('totalItems')) {
        obj['totalItems'] = ApiClient.convertToType(data['totalItems'], 'Number');
      }
      if (data.hasOwnProperty('skipCount')) {
        obj['skipCount'] = ApiClient.convertToType(data['skipCount'], 'Number');
      }
      if (data.hasOwnProperty('maxItems')) {
        obj['maxItems'] = ApiClient.convertToType(data['maxItems'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The number of objects in the entries array.
   * @member {number} count
   */
  exports.prototype['count'] = undefined;
  /**
   * A boolean value which is **true** if there are more entities in the collection beyond those in this response. A true value means a request with a larger value for the **skipCount** or the **maxItems** parameter will return more entities.
   * @member {boolean} hasMoreItems
   */
  exports.prototype['hasMoreItems'] = undefined;
  /**
   * An integer describing the total number of entities in the collection. The API might not be able to determine this value, in which case this property will not be present.
   * @member {number} totalItems
   */
  exports.prototype['totalItems'] = undefined;
  /**
   * An integer describing how many entities exist in the collection before those included in this list.
   * @member {number} skipCount
   */
  exports.prototype['skipCount'] = undefined;
  /**
   * The value of the **maxItems** parameter used to generate this list, or if there was no **maxItems** parameter the default value is 100
   * @member {number} maxItems
   */
  exports.prototype['maxItems'] = undefined;



  return exports;
}));


