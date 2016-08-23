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
    root.AlfrescoCoreRestApi.RatingBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RatingBody model module.
   * @module model/RatingBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingBody</code>.
   * @alias module:model/RatingBody
   * @class
   * @param id
   * @param myRating
   */
  var exports = function(id, myRating) {

    this['id'] = id;
    this['myRating'] = myRating;
  };

  /**
   * Constructs a <code>RatingBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingBody} obj Optional instance to populate.
   * @return {module:model/RatingBody} The populated <code>RatingBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('myRating')) {
        obj['myRating'] = ApiClient.convertToType(data['myRating'], 'String');
      }
    }
    return obj;
  }


  /**
   * The rating scheme type. Possible values are likes and fiveStar.
   * @member {module:model/RatingBody.IdEnum} id
   * @default 'likes'
   */
  exports.prototype['id'] = 'likes';

  /**
   * The rating. The type is specific to the rating scheme, boolean for the likes and an integer for the fiveStar
   * @member {String} myRating
   */
  exports.prototype['myRating'] = undefined;


  /**
   * Allowed values for the <code>id</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IdEnum = {
    /**
     * value: likes
     * @const
     */
    LIKES: "likes",

    /**
     * value: fiveStar
     * @const
     */
    FIVESTAR: "fiveStar"
  };

  return exports;
}));
