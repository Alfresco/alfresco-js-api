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
   * @module model/Topic
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Topic</code>.
   * @alias module:model/Topic
   * @class
   * @param id
   * @param name
   * @param hasInstruction
   * @param createdAt
   */
  var exports = function(id, name, hasInstruction, createdAt) {

    this['id'] = id;
    this['name'] = name;

    this['hasInstruction'] = hasInstruction;

    this['createdAt'] = createdAt;



  };

  /**
   * Constructs a <code>Topic</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Topic} obj Optional instance to populate.
   * @return {module:model/Topic} The populated <code>Topic</code> instance.
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
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;

  /**
   * @member {String} description
   */
  exports.prototype['description'] = undefined;

  /**
   * Flag indicating whether the topic has an instruction or not.
   * @member {Boolean} hasInstruction
   */
  exports.prototype['hasInstruction'] = undefined;

  /**
   * @member {module:model/Instruction} instruction
   */
  exports.prototype['instruction'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * Flag indicating whether the topic has subtopics. This field is only included when requested.
   * @member {Boolean} hasSubtopics
   * @default false
   */
  exports.prototype['hasSubtopics'] = false;

  /**
   * @member {module:model/Path} path
   */
  exports.prototype['path'] = undefined;

  /**
   * @member {module:model/ClassificationGuideInTopic} classificationGuide
   */
  exports.prototype['classificationGuide'] = undefined;




  return exports;
}));
