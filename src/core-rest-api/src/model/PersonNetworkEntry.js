(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './PersonNetwork'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./PersonNetwork'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.PersonNetworkEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.PersonNetwork);
  }
}(this, function(ApiClient, PersonNetwork) {
  'use strict';

  /**
   * The PersonNetworkEntry model module.
   * @module model/PersonNetworkEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PersonNetworkEntry</code>.
   * @alias module:model/PersonNetworkEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>PersonNetworkEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PersonNetworkEntry} obj Optional instance to populate.
   * @return {module:model/PersonNetworkEntry} The populated <code>PersonNetworkEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = PersonNetwork.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/PersonNetwork} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
