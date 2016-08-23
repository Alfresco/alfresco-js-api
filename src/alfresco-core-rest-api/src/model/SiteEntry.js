(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Site'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Site'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Site);
  }
}(this, function(ApiClient, Site) {
  'use strict';

  /**
   * The SiteEntry model module.
   * @module model/SiteEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteEntry</code>.
   * @alias module:model/SiteEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteEntry} obj Optional instance to populate.
   * @return {module:model/SiteEntry} The populated <code>SiteEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Site.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Site} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
