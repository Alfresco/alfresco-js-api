(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../ApiClient', './ActivityActivitySummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ActivityActivitySummary'));
  } else {
    // Browser globals (root is window)
    if (!root.AlfrescoCoreRestApi) {
      root.AlfrescoCoreRestApi = {};
    }
    root.AlfrescoCoreRestApi.Activity = factory(root.AlfrescoCoreRestApi.ApiClient, root.AlfrescoCoreRestApi.ActivityActivitySummary);
  }
}(this, function(ApiClient, ActivityActivitySummary) {
  'use strict';

  /**
   * The Activity model module.
   * @module model/Activity
   * @version 0.1.0
   */

  /**
   * Constructs a new <code>Activity</code>.
   * Activities describe any past activity in a site,\nfor example creating an item of content, commenting on a node,\nliking an item of content.\n
   * @alias module:model/Activity
   * @class
   * @param postPersonId
   * @param id
   * @param feedPersonId
   * @param activityType
   */
  var exports = function(postPersonId, id, feedPersonId, activityType) {

    this['postPersonId'] = postPersonId;
    this['id'] = id;


    this['feedPersonId'] = feedPersonId;

    this['activityType'] = activityType;
  };

  /**
   * Constructs a <code>Activity</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Activity} obj Optional instance to populate.
   * @return {module:model/Activity} The populated <code>Activity</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = data || new exports();

      if (data.hasOwnProperty('postPersonId')) {
        obj['postPersonId'] = ApiClient.convertToType(data['postPersonId'], 'String');
      }
      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'Integer');
      }
      if (data.hasOwnProperty('siteId')) {
        obj['siteId'] = ApiClient.convertToType(data['siteId'], 'String');
      }
      if (data.hasOwnProperty('postedAt')) {
        obj['postedAt'] = ApiClient.convertToType(data['postedAt'], 'Date');
      }
      if (data.hasOwnProperty('feedPersonId')) {
        obj['feedPersonId'] = ApiClient.convertToType(data['feedPersonId'], 'String');
      }
      if (data.hasOwnProperty('activitySummary')) {
        obj['activitySummary'] = ActivityActivitySummary.constructFromObject(data['activitySummary']);
      }
      if (data.hasOwnProperty('activityType')) {
        obj['activityType'] = ApiClient.convertToType(data['activityType'], 'String');
      }
    }
    return obj;
  }


  /**
   * The id of the person who performed the activity
   * @member {String} postPersonId
   */
  exports.prototype['postPersonId'] = undefined;

  /**
   * The unique id of the activity
   * @member {Integer} id
   */
  exports.prototype['id'] = undefined;

  /**
   * The unique id of the site on which the activity was performed
   * @member {String} siteId
   */
  exports.prototype['siteId'] = undefined;

  /**
   * The date time at which the activity was performed
   * @member {Date} postedAt
   */
  exports.prototype['postedAt'] = undefined;

  /**
   * The feed on which this activity was posted
   * @member {String} feedPersonId
   */
  exports.prototype['feedPersonId'] = undefined;

  /**
   * @member {module:model/ActivityActivitySummary} activitySummary
   */
  exports.prototype['activitySummary'] = undefined;

  /**
   * The feed on which this activity was posted
   * @member {module:model/Activity.ActivityTypeEnum} activityType
   */
  exports.prototype['activityType'] = undefined;


  /**
   * Allowed values for the <code>activityType</code> property.
   * @enum {String}
   * @readonly
   */
  exports.ActivityTypeEnum = {
    /**
     * value: org.alfresco.comments.comment-created
     * @const
     */
    COMMENTS_COMMENT_CREATED: "org.alfresco.comments.comment-created",

    /**
     * value: org.alfresco.comments.comment-updated
     * @const
     */
    COMMENTS_COMMENT_UPDATED: "org.alfresco.comments.comment-updated",

    /**
     * value: org.alfresco.comments.comment-deleted
     * @const
     */
    COMMENTS_COMMENT_DELETED: "org.alfresco.comments.comment-deleted",

    /**
     * value: org.alfresco.documentlibrary.files-added
     * @const
     */
    DOCUMENTLIBRARY_FILES_ADDED: "org.alfresco.documentlibrary.files-added",

    /**
     * value: org.alfresco.documentlibrary.files-updated
     * @const
     */
    DOCUMENTLIBRARY_FILES_UPDATED: "org.alfresco.documentlibrary.files-updated",

    /**
     * value: org.alfresco.documentlibrary.files-deleted
     * @const
     */
    DOCUMENTLIBRARY_FILES_DELETED: "org.alfresco.documentlibrary.files-deleted",

    /**
     * value: org.alfresco.documentlibrary.file-added
     * @const
     */
    DOCUMENTLIBRARY_FILE_ADDED: "org.alfresco.documentlibrary.file-added",

    /**
     * value: org.alfresco.documentlibrary.file-created
     * @const
     */
    DOCUMENTLIBRARY_FILE_CREATED: "org.alfresco.documentlibrary.file-created",

    /**
     * value: org.alfresco.documentlibrary.file-deleted
     * @const
     */
    DOCUMENTLIBRARY_FILE_DELETED: "org.alfresco.documentlibrary.file-deleted",

    /**
     * value: org.alfresco.documentlibrary.file-downloaded
     * @const
     */
    DOCUMENTLIBRARY_FILE_DOWNLOADED: "org.alfresco.documentlibrary.file-downloaded",

    /**
     * value: org.alfresco.documentlibrary.file-liked
     * @const
     */
    DOCUMENTLIBRARY_FILE_LIKED: "org.alfresco.documentlibrary.file-liked",

    /**
     * value: org.alfresco.documentlibrary.file-previewed
     * @const
     */
    DOCUMENTLIBRARY_FILE_PREVIEWED: "org.alfresco.documentlibrary.file-previewed",

    /**
     * value: org.alfresco.documentlibrary.inline-edit
     * @const
     */
    DOCUMENTLIBRARY_INLINE_EDIT: "org.alfresco.documentlibrary.inline-edit",

    /**
     * value: org.alfresco.documentlibrary.folder-liked
     * @const
     */
    DOCUMENTLIBRARY_FOLDER_LIKED: "org.alfresco.documentlibrary.folder-liked",

    /**
     * value: org.alfresco.site.user-joined
     * @const
     */
    SITE_USER_JOINED: "org.alfresco.site.user-joined",

    /**
     * value: org.alfresco.site.user-left
     * @const
     */
    SITE_USER_LEFT: "org.alfresco.site.user-left",

    /**
     * value: org.alfresco.site.user-role-changed
     * @const
     */
    SITE_USER_ROLE_CHANGED: "org.alfresco.site.user-role-changed",

    /**
     * value: org.alfresco.site.group-added
     * @const
     */
    SITE_GROUP_ADDED: "org.alfresco.site.group-added",

    /**
     * value: org.alfresco.site.group-removed
     * @const
     */
    SITE_GROUP_REMOVED: "org.alfresco.site.group-removed",

    /**
     * value: org.alfresco.site.group-role-changed
     * @const
     */
    SITE_GROUP_ROLE_CHANGED: "org.alfresco.site.group-role-changed",

    /**
     * value: org.alfresco.discussions.reply-created
     * @const
     */
    DISCUSSIONS_REPLY_CREATED: "org.alfresco.discussions.reply-created",

    /**
     * value: org.alfresco.subscriptions.followed
     * @const
     */
    SUBSCRIPTIONS_FOLLOWED: "org.alfresco.subscriptions.followed",

    /**
     * value: org.alfresco.subscriptions.subscribed
     * @const
     */
    SUBSCRIPTIONS_SUBSCRIBED: "org.alfresco.subscriptions.subscribed"
  };

  return exports;
}));
