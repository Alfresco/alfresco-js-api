(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.EmailSharedLinkBody = factory(root.AlfrescoCoreRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The EmailSharedLinkBody model module.
   * @module model/EmailSharedLinkBody
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>EmailSharedLinkBody</code>.
   * @alias module:model/EmailSharedLinkBody
   * @class
   */
  var exports = function() {





  };

  /**
   * Constructs a <code>EmailSharedLinkBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/EmailSharedLinkBody} obj Optional instance to populate.
   * @return {module:model/EmailSharedLinkBody} The populated <code>EmailSharedLinkBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('client')) {
        obj['client'] = ApiClient.convertToType(data['client'], 'String');
      }
      if (data.hasOwnProperty('message')) {
        obj['message'] = ApiClient.convertToType(data['message'], 'String');
      }
      if (data.hasOwnProperty('locale')) {
        obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
      }
      if (data.hasOwnProperty('recipientEmails')) {
        obj['recipientEmails'] = ApiClient.convertToType(data['recipientEmails'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} client
   */
  exports.prototype['client'] = undefined;

  /**
   * @member {String} message
   */
  exports.prototype['message'] = undefined;

  /**
   * @member {String} locale
   */
  exports.prototype['locale'] = undefined;

  /**
   * @member {string[]} recipientEmails
   */
  exports.prototype['recipientEmails'] = undefined;




  return exports;
}));
