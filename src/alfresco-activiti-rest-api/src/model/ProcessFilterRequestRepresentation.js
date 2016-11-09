(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.ProcessFilterRequestRepresentation.js = factory(root.ActivitiPublicRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The ProcessFilterRequestRepresentation.js model module.
   * @module model/ProcessFilterRequestRepresentation.js
   * @version 1.4.0
   */

  /**
   * Constructs a new <code>ProcessFilterRequestRepresentation.js</code>.
   * @alias module:model/ProcessFilterRequestRepresentation.js
   * @class
   */
  var exports = function() {

      var _this = this;

  };

  /**
   * Constructs a <code>ProcessFilterRequestRepresentation.js</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ProcessFilterRequestRepresentation.js} obj Optional instance to populate.
   * @return {module:model/ProcessFilterRequestRepresentation.js} The populated <code>ProcessFilterRequestRepresentation.js</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('processDefinitionId')) {
        obj['processDefinitionId'] = ApiClient.convertToType(data['processDefinitionId'], 'Integer');
      }

      if (data.hasOwnProperty('appDefinitionId')) {
        obj['appDefinitionId'] = ApiClient.convertToType(data['appDefinitionId'], 'Integer');
      }

     if (data.hasOwnProperty('sort')) {
        obj['sort'] = ApiClient.convertToType(data['sort'], 'String');
     }

     if (data.hasOwnProperty('state')) {
        obj['state'] = ApiClient.convertToType(data['state'], 'String');
     }

      if (data.hasOwnProperty('page')) {
        obj['page'] = ApiClient.convertToType(data['page'], 'Integer');
      }

      if (data.hasOwnProperty('size')) {
        obj['size'] = ApiClient.convertToType(data['size'], 'Integer');
      }
    }
    return obj;
  }


  /**
   * @member {Integer} processDefinitionId
   */
  exports.prototype['processDefinitionId'] = undefined;
  /**
   * @member {Integer} appDefinitionId
   */
  exports.prototype['appDefinitionId'] = undefined;
  /**
   * @member {String} state
   */
  exports.prototype['state'] = undefined;
  /**
  * @member {String} sort
  */
  exports.prototype['sort'] = undefined;
  /**
  * @member {Integer} page
  */
  exports.prototype['page'] = undefined;
  /**
   * @member {Integer} size
   */
  exports.prototype['size'] = undefined;

    return exports;
}));


