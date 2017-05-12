/**
 * Alfresco Content Services REST API
 * **Authentication API**  Provides access to the authentication features of Alfresco Content Services.
 *
 * OpenAPI spec version: 1
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Ticket'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Ticket'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoAuthRestApi) {
      root.AlfrescoAuthRestApi = {};
    }
    root.AlfrescoAuthRestApi.TicketEntry = factory(root.AlfrescoAuthRestApi.ApiClient, root.AlfrescoAuthRestApi.Ticket);
  }
}(this, function(ApiClient, Ticket) {
  'use strict';




  /**
   * The TicketEntry model module.
   * @module model/TicketEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TicketEntry</code>.
   * @alias module:model/TicketEntry
   * @class
   * @param entry {module:model/Ticket}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>TicketEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TicketEntry} obj Optional instance to populate.
   * @return {module:model/TicketEntry} The populated <code>TicketEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Ticket.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Ticket} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


