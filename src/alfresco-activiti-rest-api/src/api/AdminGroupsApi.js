(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/AddGroupCapabilitiesRepresentation', 'model/GroupRepresentation', 'model/ResultListDataRepresentation', 'model/AbstractGroupRepresentation', 'model/LightGroupRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AddGroupCapabilitiesRepresentation'), require('../model/GroupRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/AbstractGroupRepresentation'), require('../model/LightGroupRepresentation'));
  } else {
    // Browser globals (root is window)
    if (!root.ActivitiPublicRestApi) {
      root.ActivitiPublicRestApi = {};
    }
    root.ActivitiPublicRestApi.AdminGroupsApi = factory(root.ActivitiPublicRestApi.ApiClient, root.ActivitiPublicRestApi.AddGroupCapabilitiesRepresentation, root.ActivitiPublicRestApi.GroupRepresentation, root.ActivitiPublicRestApi.ResultListDataRepresentation, root.ActivitiPublicRestApi.AbstractGroupRepresentation, root.ActivitiPublicRestApi.LightGroupRepresentation);
  }
}(this, function(ApiClient, AddGroupCapabilitiesRepresentation, GroupRepresentation, ResultListDataRepresentation, AbstractGroupRepresentation, LightGroupRepresentation) {
  'use strict';

  /**
   * AdminGroups service.
   * @module api/AdminGroupsApi
   * @version 1.4.0
   */

  /**
   * Constructs a new AdminGroupsApi.
   * @alias module:api/AdminGroupsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the activate operation.
     * @callback module:api/AdminGroupsApi~activateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * activate
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~activateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.activate = function(groupId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling activate";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/action/activate', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the addAllUsersToGroup operation.
     * @callback module:api/AdminGroupsApi~addAllUsersToGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addAllUsersToGroup
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~addAllUsersToGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addAllUsersToGroup = function(groupId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addAllUsersToGroup";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/add-all-users', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the addGroupCapabilities operation.
     * @callback module:api/AdminGroupsApi~addGroupCapabilitiesCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addGroupCapabilities
     * @param {Integer} groupId groupId
     * @param {module:model/AddGroupCapabilitiesRepresentation} addGroupCapabilitiesRepresentation addGroupCapabilitiesRepresentation
     * @param {module:api/AdminGroupsApi~addGroupCapabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGroupCapabilities = function(groupId, addGroupCapabilitiesRepresentation) {
      var postBody = addGroupCapabilitiesRepresentation;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addGroupCapabilities";
      }

      // verify the required parameter 'addGroupCapabilitiesRepresentation' is set
      if (addGroupCapabilitiesRepresentation == undefined || addGroupCapabilitiesRepresentation == null) {
        throw "Missing the required parameter 'addGroupCapabilitiesRepresentation' when calling addGroupCapabilities";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/capabilities', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the addGroupMember operation.
     * @callback module:api/AdminGroupsApi~addGroupMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addGroupMember
     * @param {Integer} groupId groupId
     * @param {Integer} userId userId
     * @param {module:api/AdminGroupsApi~addGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGroupMember = function(groupId, userId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addGroupMember";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addGroupMember";
      }


      var pathParams = {
        'groupId': groupId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/members/{userId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the addRelatedGroup operation.
     * @callback module:api/AdminGroupsApi~addRelatedGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addRelatedGroup
     * @param {Integer} groupId groupId
     * @param {Integer} relatedGroupId relatedGroupId
     * @param {String} type type
     * @param {module:api/AdminGroupsApi~addRelatedGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addRelatedGroup = function(groupId, relatedGroupId, type) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addRelatedGroup";
      }

      // verify the required parameter 'relatedGroupId' is set
      if (relatedGroupId == undefined || relatedGroupId == null) {
        throw "Missing the required parameter 'relatedGroupId' when calling addRelatedGroup";
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw "Missing the required parameter 'type' when calling addRelatedGroup";
      }


      var pathParams = {
        'groupId': groupId,
        'relatedGroupId': relatedGroupId
      };
      var queryParams = {
        'type': type
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the createNewGroup operation.
     * @callback module:api/AdminGroupsApi~createNewGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createNewGroup
     * @param {module:model/GroupRepresentation} groupRepresentation groupRepresentation
     * @param {module:api/AdminGroupsApi~createNewGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupRepresentation}
     */
    this.createNewGroup = function(groupRepresentation) {
      var postBody = groupRepresentation;

      // verify the required parameter 'groupRepresentation' is set
      if (groupRepresentation == undefined || groupRepresentation == null) {
        throw "Missing the required parameter 'groupRepresentation' when calling createNewGroup";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupCapability operation.
     * @callback module:api/AdminGroupsApi~deleteGroupCapabilityCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroupCapability
     * @param {Integer} groupId groupId
     * @param {Integer} groupCapabilityId groupCapabilityId
     * @param {module:api/AdminGroupsApi~deleteGroupCapabilityCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupCapability = function(groupId, groupCapabilityId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupCapability";
      }

      // verify the required parameter 'groupCapabilityId' is set
      if (groupCapabilityId == undefined || groupCapabilityId == null) {
        throw "Missing the required parameter 'groupCapabilityId' when calling deleteGroupCapability";
      }


      var pathParams = {
        'groupId': groupId,
        'groupCapabilityId': groupCapabilityId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupMember operation.
     * @callback module:api/AdminGroupsApi~deleteGroupMemberCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroupMember
     * @param {Integer} groupId groupId
     * @param {Integer} userId userId
     * @param {module:api/AdminGroupsApi~deleteGroupMemberCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupMember = function(groupId, userId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupMember";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteGroupMember";
      }


      var pathParams = {
        'groupId': groupId,
        'userId': userId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/members/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the deleteGroup operation.
     * @callback module:api/AdminGroupsApi~deleteGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroup
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~deleteGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroup = function(groupId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroup";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the deleteRelatedGroup operation.
     * @callback module:api/AdminGroupsApi~deleteRelatedGroupCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteRelatedGroup
     * @param {Integer} groupId groupId
     * @param {Integer} relatedGroupId relatedGroupId
     * @param {module:api/AdminGroupsApi~deleteRelatedGroupCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRelatedGroup = function(groupId, relatedGroupId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteRelatedGroup";
      }

      // verify the required parameter 'relatedGroupId' is set
      if (relatedGroupId == undefined || relatedGroupId == null) {
        throw "Missing the required parameter 'relatedGroupId' when calling deleteRelatedGroup";
      }


      var pathParams = {
        'groupId': groupId,
        'relatedGroupId': relatedGroupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getCapabilities operation.
     * @callback module:api/AdminGroupsApi~getCapabilitiesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCapabilities
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~getCapabilitiesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'String'>}
     */
    this.getCapabilities = function(groupId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getCapabilities";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ['String'];

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/potential-capabilities', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getGroupUsers operation.
     * @callback module:api/AdminGroupsApi~getGroupUsersCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ResultListDataRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getGroupUsers
     * @param {Integer} groupId groupId
     * @param {Object} opts Optional parameters
     * @param {String} opts.filter filter
     * @param {Integer} opts.page page
     * @param {Integer} opts.pageSize pageSize
     * @param {module:api/AdminGroupsApi~getGroupUsersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getGroupUsers = function(groupId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getGroupUsers";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
        'filter': opts['filter'],
        'page': opts['page'],
        'pageSize': opts['pageSize']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = ResultListDataRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/users', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getGroup operation.
     * @callback module:api/AdminGroupsApi~getGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/AbstractGroupRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getGroup
     * @param {Integer} groupId groupId
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.includeAllUsers includeAllUsers
     * @param {Boolean} opts.summary summary
     * @param {module:api/AdminGroupsApi~getGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AbstractGroupRepresentation}
     */
    this.getGroup = function(groupId, opts) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getGroup";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
        'includeAllUsers': opts['includeAllUsers'],
        'summary': opts['summary']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = AbstractGroupRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getGroups operation.
     * @callback module:api/AdminGroupsApi~getGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LightGroupRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getGroups
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.tenantId tenantId
     * @param {Boolean} opts.functional functional
     * @param {Boolean} opts.summary summary
     * @param {module:api/AdminGroupsApi~getGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LightGroupRepresentation>}
     */
    this.getGroups = function(opts) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'tenantId': opts['tenantId'],
        'functional': opts['functional'],
        'summary': opts['summary']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [LightGroupRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the getRelatedGroups operation.
     * @callback module:api/AdminGroupsApi~getRelatedGroupsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LightGroupRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRelatedGroups
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~getRelatedGroupsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LightGroupRepresentation>}
     */
    this.getRelatedGroups = function(groupId) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getRelatedGroups";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = [LightGroupRepresentation];

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}/related-groups', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Callback function to receive the result of the updateGroup operation.
     * @callback module:api/AdminGroupsApi~updateGroupCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateGroup
     * @param {Integer} groupId groupId
     * @param {module:model/GroupRepresentation} groupRepresentation groupRepresentation
     * @param {module:api/AdminGroupsApi~updateGroupCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupRepresentation}
     */
    this.updateGroup = function(groupId, groupRepresentation) {
      var postBody = groupRepresentation;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling updateGroup";
      }

      // verify the required parameter 'groupRepresentation' is set
      if (groupRepresentation == undefined || groupRepresentation == null) {
        throw "Missing the required parameter 'groupRepresentation' when calling updateGroup";
      }


      var pathParams = {
        'groupId': groupId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = GroupRepresentation;

      return this.apiClient.callApi(
        '/api/enterprise/admin/groups/{groupId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }
  };

  return exports;
}));
