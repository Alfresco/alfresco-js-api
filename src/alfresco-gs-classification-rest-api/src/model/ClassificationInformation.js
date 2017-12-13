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
    root.AlfrescoGovernanceServicesSecurityControls.ClassificationInformation = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The ClassificationInformation model module.
   * @module model/ClassificationInformation
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>ClassificationInformation</code>.
   * @alias module:model/ClassificationInformation
   * @class
   * @param level
   * @param reasonIds
   */
  var exports = function(level, reasonIds) {

    this['level'] = level;

    this['reasonIds'] = reasonIds;






  };

  /**
   * Constructs a <code>ClassificationInformation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ClassificationInformation} obj Optional instance to populate.
   * @return {module:model/ClassificationInformation} The populated <code>ClassificationInformation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('level')) {
        obj['level'] = ApiClient.convertToType(data['level'], 'String');
      }
      if (data.hasOwnProperty('classificationAgency')) {
        obj['classificationAgency'] = ApiClient.convertToType(data['classificationAgency'], 'String');
      }
      if (data.hasOwnProperty('reasonIds')) {
        obj['reasonIds'] = ApiClient.convertToType(data['reasonIds'], ['String']);
      }
      if (data.hasOwnProperty('downgradeOn')) {
        obj['downgradeOn'] = ApiClient.convertToType(data['downgradeOn'], 'Date');
      }
      if (data.hasOwnProperty('downgradeEvent')) {
        obj['downgradeEvent'] = ApiClient.convertToType(data['downgradeEvent'], 'String');
      }
      if (data.hasOwnProperty('downgradeInstructions')) {
        obj['downgradeInstructions'] = ApiClient.convertToType(data['downgradeInstructions'], 'String');
      }
      if (data.hasOwnProperty('declassifyOn')) {
        obj['declassifyOn'] = ApiClient.convertToType(data['declassifyOn'], 'Date');
      }
      if (data.hasOwnProperty('declassificationEvent')) {
        obj['declassificationEvent'] = ApiClient.convertToType(data['declassificationEvent'], 'String');
      }
      if (data.hasOwnProperty('exemptionIds')) {
        obj['exemptionIds'] = ApiClient.convertToType(data['exemptionIds'], ['String']);
      }
    }
    return obj;
  }


  /**
   * @member {String} level
   */
  exports.prototype['level'] = undefined;

  /**
   * @member {String} classificationAgency
   */
  exports.prototype['classificationAgency'] = undefined;

  /**
   * @member {Array.<String>} reasonIds
   */
  exports.prototype['reasonIds'] = undefined;

  /**
   * @member {Date} downgradeOn
   */
  exports.prototype['downgradeOn'] = undefined;

  /**
   * @member {String} downgradeEvent
   */
  exports.prototype['downgradeEvent'] = undefined;

  /**
   * @member {String} downgradeInstructions
   */
  exports.prototype['downgradeInstructions'] = undefined;

  /**
   * @member {Date} declassifyOn
   */
  exports.prototype['declassifyOn'] = undefined;

  /**
   * @member {String} declassificationEvent
   */
  exports.prototype['declassificationEvent'] = undefined;

  /**
   * @member {Array.<String>} exemptionIds
   */
  exports.prototype['exemptionIds'] = undefined;




  return exports;
}));
