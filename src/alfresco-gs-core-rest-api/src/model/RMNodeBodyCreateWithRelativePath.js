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
    root.AlfrescoGovernanceServicesRestApi.RMNodeBodyCreateWithRelativePath = factory(root.AlfrescoGovernanceServicesRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The RMNodeBodyCreateWithRelativePath model module.
   * @module model/RMNodeBodyCreateWithRelativePath
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>RMNodeBodyCreateWithRelativePath</code>.
   * @alias module:model/RMNodeBodyCreateWithRelativePath
   * @class
   * @param name
   * @param nodeType
   */
  var exports = function(name, nodeType) {

    this['name'] = name;
    this['nodeType'] = nodeType;



  };

  /**
   * Constructs a <code>RMNodeBodyCreateWithRelativePath</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RMNodeBodyCreateWithRelativePath} obj Optional instance to populate.
   * @return {module:model/RMNodeBodyCreateWithRelativePath} The populated <code>RMNodeBodyCreateWithRelativePath</code> instance.
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
      if (data.hasOwnProperty('relativePath')) {
        obj['relativePath'] = ApiClient.convertToType(data['relativePath'], 'String');
      }
    }
    return obj;
  }


  /**
   * The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.\nThe character . must not be used at the end of the name.\n
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} nodeType
   */
  exports.prototype['nodeType'] = undefined;

  /**
   * @member {Array.<String>} aspectNames
   */
  exports.prototype['aspectNames'] = undefined;

  /**
   * @member {Object.<String, String>} properties
   */
  exports.prototype['properties'] = undefined;

  /**
   * @member {String} relativePath
   */
  exports.prototype['relativePath'] = undefined;




  return exports;
}));
