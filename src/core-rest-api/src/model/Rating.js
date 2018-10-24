(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './RatingAggregate'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./RatingAggregate'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Rating = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.RatingAggregate);
  }
}(this, function(ApiClient, RatingAggregate) {
  'use strict';

  /**
   * The Rating model module.
   * @module model/Rating
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Rating</code>.
   * A person can rate an item of content by liking it. They can also remove\ntheir like of an item of content. API methods exist to get a list of\nratings and to add a new rating.\n
   * @alias module:model/Rating
   * @class
   * @param id
   */
  var exports = function(id) {

    this['id'] = id;



  };

  /**
   * Constructs a <code>Rating</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rating} obj Optional instance to populate.
   * @return {module:model/Rating} The populated <code>Rating</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('aggregate')) {
        obj['aggregate'] = RatingAggregate.constructFromObject(data['aggregate']);
      }
      if (data.hasOwnProperty('ratedAt')) {
        obj['ratedAt'] = ApiClient.convertToType(data['ratedAt'], 'Date');
      }
      if (data.hasOwnProperty('myRating')) {
        obj['myRating'] = ApiClient.convertToType(data['myRating'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {module:model/RatingAggregate} aggregate
   */
  exports.prototype['aggregate'] = undefined;

  /**
   * @member {Date} ratedAt
   */
  exports.prototype['ratedAt'] = undefined;

  /**
   * The rating. The type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar.
   * @member {String} myRating
   */
  exports.prototype['myRating'] = undefined;




  return exports;
}));
