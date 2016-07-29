(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './LoginTicketEntryEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./LoginTicketEntryEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.LoginTicketEntry = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.LoginTicketEntryEntry);
  }
}(this, function(ApiClient, LoginTicketEntryEntry) {
  'use strict';

  /**
   * The LoginTicketEntry model module.
   * @module model/LoginTicketEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>LoginTicketEntry</code>.
   * @alias module:model/LoginTicketEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>LoginTicketEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginTicketEntry} obj Optional instance to populate.
   * @return {module:model/LoginTicketEntry} The populated <code>LoginTicketEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = LoginTicketEntryEntry.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/LoginTicketEntryEntry} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
