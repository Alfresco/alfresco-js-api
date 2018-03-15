
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesRestApi) {
      root.AlfrescoGovernanceServicesRestApi = {};
    }
    root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The RMNodeBodyCreate model module.
   * @module  RMNodeBodyCreate
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RMNodeBodyCreate</code>.
   * @alias RMNodeBodyCreate
   * @class
   * @param name {string} The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @param nodeType {string}
   */
  var exports = function(name, nodeType) {
    var _this = this;

    _this['name'] = name;
    _this['nodeType'] = nodeType;


  };

  /**
   * Constructs a <code>RMNodeBodyCreate</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {RMNodeBodyCreate} obj Optional instance to populate.
   * @return {RMNodeBodyCreate} The populated <code>RMNodeBodyCreate</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('nodeType')) {
        obj['nodeType'] = ApiClient.convertToType(data['nodeType'], 'String');
      }
      if (data.hasOwnProperty('aspectNames')) {
        obj['aspectNames'] = ApiClient.convertToType(data['aspectNames'], ['String']);
      }
      if (data.hasOwnProperty('properties')) {
        obj['properties'] = ApiClient.convertToType(data['properties'], {'String': 'String'});
      }
    }
    return obj;
  }

  /**
   * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |. The character . must not be used at the end of the name.
   * @member {string} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {string} nodeType
   */
  exports.prototype['nodeType'] = undefined;
  /**
   * @member {string[]} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;
  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;



  return exports;
}));


