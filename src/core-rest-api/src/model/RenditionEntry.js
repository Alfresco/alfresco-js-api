(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Rendition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Rendition'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.RenditionEntry = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Rendition);
  }
}(this, function(ApiClient, Rendition) {
  'use strict';

  /**
   * The RenditionEntry model module.
   * @module model/RenditionEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RenditionEntry</code>.
   * @alias module:model/RenditionEntry
   * @class
   * @param entry
   */
  var exports = function(entry) {

    this['entry'] = entry;
  };

  /**
   * Constructs a <code>RenditionEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RenditionEntry} obj Optional instance to populate.
   * @return {module:model/RenditionEntry} The populated <code>RenditionEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Rendition.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/Rendition} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
