(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './InlineResponse201Entry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./InlineResponse201Entry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.InlineResponse201 = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.InlineResponse201Entry);
  }
}(this, function(ApiClient, InlineResponse201Entry) {
  'use strict';

  /**
   * The InlineResponse201 model module.
   * @module model/InlineResponse201
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>InlineResponse201</code>.
   * @alias module:model/InlineResponse201
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>InlineResponse201</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/InlineResponse201} obj Optional instance to populate.
   * @return {module:model/InlineResponse201} The populated <code>InlineResponse201</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = InlineResponse201Entry.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/InlineResponse201Entry} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
