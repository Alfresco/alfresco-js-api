(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ValidateTicketEntryEntry'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ValidateTicketEntryEntry'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.ValidateTicketEntry = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.ValidateTicketEntryEntry);
  }
}(this, function(ApiClient, ValidateTicketEntryEntry) {
  'use strict';

  /**
   * The ValidateTicketEntry model module.
   * @module model/ValidateTicketEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ValidateTicketEntry</code>.
   * @alias module:model/ValidateTicketEntry
   * @class
   */
  var exports = function() {


  };

  /**
   * Constructs a <code>ValidateTicketEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ValidateTicketEntry} obj Optional instance to populate.
   * @return {module:model/ValidateTicketEntry} The populated <code>ValidateTicketEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = ValidateTicketEntryEntry.constructFromObject(data['entry']);
      }
    }
    return obj;
  }


  /**
   * @member {module:model/ValidateTicketEntryEntry} entry
   */
  exports.prototype['entry'] = undefined;




  return exports;
}));
