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
    root.AlfrescoCoreRestApi.RatingAggregate = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RatingAggregate model module.
   * @module model/RatingAggregate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingAggregate</code>.
   * @alias module:model/RatingAggregate
   * @class
   * @param numberOfRatings
   */
  var exports = function(numberOfRatings) {


    this['numberOfRatings'] = numberOfRatings;
  };

  /**
   * Constructs a <code>RatingAggregate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingAggregate} obj Optional instance to populate.
   * @return {module:model/RatingAggregate} The populated <code>RatingAggregate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('average')) {
        obj['average'] = ApiClient.convertToType(data['average'], 'Integer');
      }
      if (data.hasOwnProperty('numberOfRatings')) {
        obj['numberOfRatings'] = ApiClient.convertToType(data['numberOfRatings'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} average
   */
  exports.prototype['average'] = undefined;

  /**
   * @member {Integer} numberOfRatings
   */
  exports.prototype['numberOfRatings'] = undefined;




  return exports;
}));
