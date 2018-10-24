(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './Person'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Person'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Comment = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.Person);
  }
}(this, function(ApiClient, Person) {
  'use strict';

  /**
   * The Comment model module.
   * @module model/Comment
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Comment</code>.
   * @alias module:model/Comment
   * @class
   * @param id
   * @param content
   * @param createdBy
   * @param createdAt
   * @param edited
   * @param modifiedBy
   * @param modifiedAt
   * @param canEdit
   * @param canDelete
   */
  var exports = function(id, content, createdBy, createdAt, edited, modifiedBy, modifiedAt, canEdit, canDelete) {

    this['id'] = id;
    this['content'] = content;
    this['createdBy'] = createdBy;
    this['createdAt'] = createdAt;
    this['edited'] = edited;
    this['modifiedBy'] = modifiedBy;
    this['modifiedAt'] = modifiedAt;
    this['canEdit'] = canEdit;
    this['canDelete'] = canDelete;
  };

  /**
   * Constructs a <code>Comment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Comment} obj Optional instance to populate.
   * @return {module:model/Comment} The populated <code>Comment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('createdBy')) {
        obj['createdBy'] = Person.constructFromObject(data['createdBy']);
      }
      if (data.hasOwnProperty('createdAt')) {
        obj['createdAt'] = ApiClient.convertToType(data['createdAt'], 'Date');
      }
      if (data.hasOwnProperty('edited')) {
        obj['edited'] = ApiClient.convertToType(data['edited'], 'Boolean');
      }
      if (data.hasOwnProperty('modifiedBy')) {
        obj['modifiedBy'] = Person.constructFromObject(data['modifiedBy']);
      }
      if (data.hasOwnProperty('modifiedAt')) {
        obj['modifiedAt'] = ApiClient.convertToType(data['modifiedAt'], 'Date');
      }
      if (data.hasOwnProperty('canEdit')) {
        obj['canEdit'] = ApiClient.convertToType(data['canEdit'], 'Boolean');
      }
      if (data.hasOwnProperty('canDelete')) {
        obj['canDelete'] = ApiClient.convertToType(data['canDelete'], 'Boolean');
      }
    }
    return obj;
  }


  /**
   * @member {String} id
   */
  exports.prototype['id'] = undefined;

  /**
   * @member {String} content
   */
  exports.prototype['content'] = undefined;

  /**
   * @member {module:model/Person} createdBy
   */
  exports.prototype['createdBy'] = undefined;

  /**
   * @member {Date} createdAt
   */
  exports.prototype['createdAt'] = undefined;

  /**
   * @member {Boolean} edited
   */
  exports.prototype['edited'] = undefined;

  /**
   * @member {module:model/Person} modifiedBy
   */
  exports.prototype['modifiedBy'] = undefined;

  /**
   * @member {Date} modifiedAt
   */
  exports.prototype['modifiedAt'] = undefined;

  /**
   * @member {Boolean} canEdit
   */
  exports.prototype['canEdit'] = undefined;

  /**
   * @member {Boolean} canDelete
   */
  exports.prototype['canDelete'] = undefined;




  return exports;
}));
