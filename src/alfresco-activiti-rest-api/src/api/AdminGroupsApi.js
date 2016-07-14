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
     * Callback function to receive the result of the activateUsingPOST1 operation.
     * @callback module:api/AdminGroupsApi~activateUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * activate
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~activateUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.activateUsingPOST1 = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling activateUsingPOST1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addAllUsersToGroupUsingPOST1 operation.
     * @callback module:api/AdminGroupsApi~addAllUsersToGroupUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addAllUsersToGroup
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~addAllUsersToGroupUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addAllUsersToGroupUsingPOST1 = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addAllUsersToGroupUsingPOST1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGroupCapabilitiesUsingPOST1 operation.
     * @callback module:api/AdminGroupsApi~addGroupCapabilitiesUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addGroupCapabilities
     * @param {Integer} groupId groupId
     * @param {module:model/AddGroupCapabilitiesRepresentation} addGroupCapabilitiesRepresentation addGroupCapabilitiesRepresentation
     * @param {module:api/AdminGroupsApi~addGroupCapabilitiesUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGroupCapabilitiesUsingPOST1 = function(groupId, addGroupCapabilitiesRepresentation, callback) {
      var postBody = addGroupCapabilitiesRepresentation;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addGroupCapabilitiesUsingPOST1";
      }

      // verify the required parameter 'addGroupCapabilitiesRepresentation' is set
      if (addGroupCapabilitiesRepresentation == undefined || addGroupCapabilitiesRepresentation == null) {
        throw "Missing the required parameter 'addGroupCapabilitiesRepresentation' when calling addGroupCapabilitiesUsingPOST1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addGroupMemberUsingPOST1 operation.
     * @callback module:api/AdminGroupsApi~addGroupMemberUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addGroupMember
     * @param {Integer} groupId groupId
     * @param {Integer} userId userId
     * @param {module:api/AdminGroupsApi~addGroupMemberUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addGroupMemberUsingPOST1 = function(groupId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addGroupMemberUsingPOST1";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling addGroupMemberUsingPOST1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the addRelatedGroupUsingPOST1 operation.
     * @callback module:api/AdminGroupsApi~addRelatedGroupUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addRelatedGroup
     * @param {Integer} groupId groupId
     * @param {Integer} relatedGroupId relatedGroupId
     * @param {String} type type
     * @param {module:api/AdminGroupsApi~addRelatedGroupUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.addRelatedGroupUsingPOST1 = function(groupId, relatedGroupId, type, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling addRelatedGroupUsingPOST1";
      }

      // verify the required parameter 'relatedGroupId' is set
      if (relatedGroupId == undefined || relatedGroupId == null) {
        throw "Missing the required parameter 'relatedGroupId' when calling addRelatedGroupUsingPOST1";
      }

      // verify the required parameter 'type' is set
      if (type == undefined || type == null) {
        throw "Missing the required parameter 'type' when calling addRelatedGroupUsingPOST1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the createNewGroupUsingPOST1 operation.
     * @callback module:api/AdminGroupsApi~createNewGroupUsingPOST1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createNewGroup
     * @param {module:model/GroupRepresentation} groupRepresentation groupRepresentation
     * @param {module:api/AdminGroupsApi~createNewGroupUsingPOST1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupRepresentation}
     */
    this.createNewGroupUsingPOST1 = function(groupRepresentation, callback) {
      var postBody = groupRepresentation;

      // verify the required parameter 'groupRepresentation' is set
      if (groupRepresentation == undefined || groupRepresentation == null) {
        throw "Missing the required parameter 'groupRepresentation' when calling createNewGroupUsingPOST1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupCapabilityUsingDELETE1 operation.
     * @callback module:api/AdminGroupsApi~deleteGroupCapabilityUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroupCapability
     * @param {Integer} groupId groupId
     * @param {Integer} groupCapabilityId groupCapabilityId
     * @param {module:api/AdminGroupsApi~deleteGroupCapabilityUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupCapabilityUsingDELETE1 = function(groupId, groupCapabilityId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupCapabilityUsingDELETE1";
      }

      // verify the required parameter 'groupCapabilityId' is set
      if (groupCapabilityId == undefined || groupCapabilityId == null) {
        throw "Missing the required parameter 'groupCapabilityId' when calling deleteGroupCapabilityUsingDELETE1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupMemberUsingDELETE1 operation.
     * @callback module:api/AdminGroupsApi~deleteGroupMemberUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroupMember
     * @param {Integer} groupId groupId
     * @param {Integer} userId userId
     * @param {module:api/AdminGroupsApi~deleteGroupMemberUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupMemberUsingDELETE1 = function(groupId, userId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupMemberUsingDELETE1";
      }

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling deleteGroupMemberUsingDELETE1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteGroupUsingDELETE1 operation.
     * @callback module:api/AdminGroupsApi~deleteGroupUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroup
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~deleteGroupUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteGroupUsingDELETE1 = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteGroupUsingDELETE1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteRelatedGroupUsingDELETE1 operation.
     * @callback module:api/AdminGroupsApi~deleteRelatedGroupUsingDELETE1Callback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteRelatedGroup
     * @param {Integer} groupId groupId
     * @param {Integer} relatedGroupId relatedGroupId
     * @param {module:api/AdminGroupsApi~deleteRelatedGroupUsingDELETE1Callback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteRelatedGroupUsingDELETE1 = function(groupId, relatedGroupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling deleteRelatedGroupUsingDELETE1";
      }

      // verify the required parameter 'relatedGroupId' is set
      if (relatedGroupId == undefined || relatedGroupId == null) {
        throw "Missing the required parameter 'relatedGroupId' when calling deleteRelatedGroupUsingDELETE1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getCapabilitiesUsingGET1 operation.
     * @callback module:api/AdminGroupsApi~getCapabilitiesUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCapabilities
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~getCapabilitiesUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<'String'>}
     */
    this.getCapabilitiesUsingGET1 = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getCapabilitiesUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupUsersUsingGET1 operation.
     * @callback module:api/AdminGroupsApi~getGroupUsersUsingGET1Callback
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
     * @param {module:api/AdminGroupsApi~getGroupUsersUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/ResultListDataRepresentation}
     */
    this.getGroupUsersUsingGET1 = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getGroupUsersUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupUsingGET1 operation.
     * @callback module:api/AdminGroupsApi~getGroupUsingGET1Callback
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
     * @param {module:api/AdminGroupsApi~getGroupUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/AbstractGroupRepresentation}
     */
    this.getGroupUsingGET1 = function(groupId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getGroupUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getGroupsUsingGET2 operation.
     * @callback module:api/AdminGroupsApi~getGroupsUsingGET2Callback
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
     * @param {module:api/AdminGroupsApi~getGroupsUsingGET2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LightGroupRepresentation>}
     */
    this.getGroupsUsingGET2 = function(opts, callback) {
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRelatedGroupsUsingGET1 operation.
     * @callback module:api/AdminGroupsApi~getRelatedGroupsUsingGET1Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LightGroupRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRelatedGroups
     * @param {Integer} groupId groupId
     * @param {module:api/AdminGroupsApi~getRelatedGroupsUsingGET1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {Array.<module:model/LightGroupRepresentation>}
     */
    this.getRelatedGroupsUsingGET1 = function(groupId, callback) {
      var postBody = null;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling getRelatedGroupsUsingGET1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the updateGroupUsingPUT1 operation.
     * @callback module:api/AdminGroupsApi~updateGroupUsingPUT1Callback
     * @param {String} error Error message, if any.
     * @param {module:model/GroupRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateGroup
     * @param {Integer} groupId groupId
     * @param {module:model/GroupRepresentation} groupRepresentation groupRepresentation
     * @param {module:api/AdminGroupsApi~updateGroupUsingPUT1Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {module:model/GroupRepresentation}
     */
    this.updateGroupUsingPUT1 = function(groupId, groupRepresentation, callback) {
      var postBody = groupRepresentation;

      // verify the required parameter 'groupId' is set
      if (groupId == undefined || groupId == null) {
        throw "Missing the required parameter 'groupId' when calling updateGroupUsingPUT1";
      }

      // verify the required parameter 'groupRepresentation' is set
      if (groupRepresentation == undefined || groupRepresentation == null) {
        throw "Missing the required parameter 'groupRepresentation' when calling updateGroupUsingPUT1";
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
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
