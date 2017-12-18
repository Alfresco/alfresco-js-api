

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './ClassificationGuideInTopic', './Instruction', './Path'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./ClassificationGuideInTopic'), require('./Instruction'), require('./Path'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.Topic = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.ClassificationGuideInTopic, root.AlfrescoGovernanceServicesSecurityControls.Instruction, root.AlfrescoGovernanceServicesSecurityControls.Path);
  }
}(this, function(ApiClient, ClassificationGuideInTopic, Instruction, Path) {
  'use strict';




  /**
   * The Topic model module.
   * @module Topic
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Topic</code>.
   * @alias Topic
   * @class
   * @param id {string}
   * @param name {string}
   * @param hasInstruction {boolean} Flag indicating whether the topic has an instruction or not.
   * @param createdAt {Date}
   */
  var exports = function(id, name, hasInstruction, createdAt) {
    var _this = this;

    _this['id'] = id;
    _this['name'] = name;

    _this['hasInstruction'] = hasInstruction;

    _this['createdAt'] = createdAt;



  };

  /**
   * Constructs a <code>Topic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {Topic} obj Optional instance to populate.
   * @return {Topic} The populated <code>Topic</code> instance.
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
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('hasInstruction')) {
        obj['hasInstruction'] = ApiClient.convertToType(data['hasInstruction'], 'Boolean');
      }
      if (data.hasOwnProperty('instruction')) {
        obj['instruction'] = Instruction.constructFromObject(data['instruction']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('hasSubtopics')) {
        obj['hasSubtopics'] = ApiClient.convertToType(data['hasSubtopics'], 'Boolean');
      }
      if (data.hasOwnProperty('path')) {
        obj['path'] = Path.constructFromObject(data['path']);
      }
      if (data.hasOwnProperty('classificationGuide')) {
        obj['classificationGuide'] = ClassificationGuideInTopic.constructFromObject(data['classificationGuide']);
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
  /**
   * @member {string} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Flag indicating whether the topic has an instruction or not.
   * @member {boolean} hasInstruction
   */
  exports.prototype['hasInstruction'] = undefined;
  /**
   * @member {Instruction} instruction
   */
  exports.prototype['instruction'] = undefined;
  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;
  /**
   * Flag indicating whether the topic has subtopics. This field is only included when requested.
   * @member {boolean} hasSubtopics
   * @default false
   */
  exports.prototype['hasSubtopics'] = false;
  /**
   * @member {Path} path
   */
  exports.prototype['path'] = undefined;
  /**
   * @member {ClassificationGuideInTopic} classificationGuide
   */
  exports.prototype['classificationGuide'] = undefined;



  return exports;
}));


