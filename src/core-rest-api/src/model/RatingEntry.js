(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Rating'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rating'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RatingEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Rating);
  }
}(this, function(ApiClient, Rating) {
  'use strict';

  /**
   * The RatingEntry model module.
   * @module model/RatingEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RatingEntry</code>.
   * @alias module:model/RatingEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>RatingEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RatingEntry} obj Optional instance to populate.
   * @return {module:model/RatingEntry} The populated <code>RatingEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Rating.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Rating} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
