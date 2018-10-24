(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './SiteContainer'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SiteContainer'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.SiteContainerEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.SiteContainer);
  }
}(this, function(ApiClient, SiteContainer) {
  'use strict';

  /**
   * The SiteContainerEntry model module.
   * @module model/SiteContainerEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>SiteContainerEntry</code>.
   * @alias module:model/SiteContainerEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>SiteContainerEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SiteContainerEntry} obj Optional instance to populate.
   * @return {module:model/SiteContainerEntry} The populated <code>SiteContainerEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = SiteContainer.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/SiteContainer} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
