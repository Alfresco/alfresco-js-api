(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person);
  }
}(this, function(ApiClient, Person) {
  'use strict';

  /**
   * The PersonEntry model module.
   * @module model/PersonEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonEntry</code>.
   * @alias module:model/PersonEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>PersonEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonEntry} obj Optional instance to populate.
   * @return {module:model/PersonEntry} The populated <code>PersonEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Person.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Person} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
