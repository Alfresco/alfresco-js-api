(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../../alfrescoApiClient', '../model/AddGroupCapabilitiesRepresentation', '../model/GroupRepresentation', '../model/ResultListDataRepresentation', '../model/AbstractGroupRepresentation', '../model/LightGroupRepresentation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../../alfrescoApiClient'), require('../model/AddGroupCapabilitiesRepresentation'), require('../model/GroupRepresentation'), require('../model/ResultListDataRepresentation'), require('../model/AbstractGroupRepresentation'), require('../model/LightGroupRepresentation'));
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
     * Function to receive the result of the activate operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * activate
     * @param {Integer} groupId groupId
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
     * Function to receive the result of the addAllUsersToGroup operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addAllUsersToGroup
     * @param {Integer} groupId groupId
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
     * Function to receive the result of the addGroupCapabilities operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addGroupCapabilities
     * @param {Integer} groupId groupId
     * @param {module:model/AddGroupCapabilitiesRepresentation} addGroupCapabilitiesRepresentation addGroupCapabilitiesRepresentation
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
     * Function to receive the result of the addGroupMember operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addGroupMember
     * @param {Integer} groupId groupId
     * @param {Integer} userId userId
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
     * Function to receive the result of the addRelatedGroup operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * addRelatedGroup
     * @param {Integer} groupId groupId
     * @param {Integer} relatedGroupId relatedGroupId
     * @param {String} type type
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
     * Function to receive the result of the createNewGroup operation.
     * @param {String} error Error message, if any.
     * @param {module:model/GroupRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * createNewGroup
     * @param {module:model/GroupRepresentation} groupRepresentation groupRepresentation
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
     * Function to receive the result of the deleteGroupCapability operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroupCapability
     * @param {Integer} groupId groupId
     * @param {Integer} groupCapabilityId groupCapabilityId
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
     * Function to receive the result of the deleteGroupMember operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroupMember
     * @param {Integer} groupId groupId
     * @param {Integer} userId userId
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
     * Function to receive the result of the deleteGroup operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteGroup
     * @param {Integer} groupId groupId
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
     * Function to receive the result of the deleteRelatedGroup operation.
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * deleteRelatedGroup
     * @param {Integer} groupId groupId
     * @param {Integer} relatedGroupId relatedGroupId
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
     * Function to receive the result of the getCapabilities operation.
     * @param {String} error Error message, if any.
     * @param {Array.<'String'>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getCapabilities
     * @param {Integer} groupId groupId
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
     * Function to receive the result of the getGroupUsers operation.
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
     * Function to receive the result of the getGroup operation.
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
     * Function to receive the result of the getGroups operation.
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
     * Function to receive the result of the getRelatedGroups operation.
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/LightGroupRepresentation>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * getRelatedGroups
     * @param {Integer} groupId groupId
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
     * Function to receive the result of the updateGroup operation.
     * @param {String} error Error message, if any.
     * @param {module:model/GroupRepresentation} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * updateGroup
     * @param {Integer} groupId groupId
     * @param {module:model/GroupRepresentation} groupRepresentation groupRepresentation
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
