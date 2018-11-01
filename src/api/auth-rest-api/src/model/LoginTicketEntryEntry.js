(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.LoginTicketEntryEntry = factory(root.AlfrescoAuthRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The LoginTicketEntryEntry model module.
   * @module model/LoginTicketEntryEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>LoginTicketEntryEntry</code>.
   * @alias module:model/LoginTicketEntryEntry
   * @class
   */
  var exports = function() {



  };

  /**
   * Constructs a <code>LoginTicketEntryEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/LoginTicketEntryEntry} obj Optional instance to populate.
   * @return {module:model/LoginTicketEntryEntry} The populated <code>LoginTicketEntryEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;




  return exports;
}));
