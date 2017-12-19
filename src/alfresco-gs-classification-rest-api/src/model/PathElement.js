

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.PathElement = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PathElement model module.
   * @module PathElement
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>PathElement</code>.
   * The id and name of a topic or classification guide that is an ancestor of this topic.
   * @alias PathElement
   * @class
   * @param id {string}
   * @param name {string}
   */
  var exports = function(id, name) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;
  };

  /**
   * Constructs a <code>PathElement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {PathElement} obj Optional instance to populate.
   * @return {PathElement} The populated <code>PathElement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {string} id
   */
  exports.prototype['id'] = undefined;
  /**
   * @member {string} name
   */
  exports.prototype['name'] = undefined;



  return exports;
}));


