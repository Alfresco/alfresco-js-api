

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', './Topic'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('./Topic'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoGovernanceServicesSecurityControls) {
      root.AlfrescoGovernanceServicesSecurityControls = {};
    }
    root.AlfrescoGovernanceServicesSecurityControls.TopicEntry = factory(root.AlfrescoGovernanceServicesSecurityControls.ApiClient, root.AlfrescoGovernanceServicesSecurityControls.Topic);
  }
}(this, function(ApiClient, Topic) {
  'use strict';




  /**
   * The TopicEntry model module.
   * @module TopicEntry
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>TopicEntry</code>.
   * @alias TopicEntry
   * @class
   * @param entry {Topic}
   */
  var exports = function(entry) {
    var _this = this;

    _this['entry'] = entry;
  };

  /**
   * Constructs a <code>TopicEntry</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {TopicEntry} obj Optional instance to populate.
   * @return {TopicEntry} The populated <code>TopicEntry</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('entry')) {
        obj['entry'] = Topic.constructFromObject(data['entry']);
      }
    }
    return obj;
  }

  /**
   * @member {Topic} entry
   */
  exports.prototype['entry'] = undefined;



  return exports;
}));


