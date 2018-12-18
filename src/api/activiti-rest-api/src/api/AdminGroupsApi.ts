/*!
* @license
* Copyright 2018 Alfresco Software, Ltd.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*     http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

import { AlfrescoApi } from '../../../../alfrescoApi';
import { BpmClient } from '../../../../bpmClient';

export class AdminGroupsApi {

    apiClient: BpmClient;

    constructor(alfrescoApi?: AlfrescoApi) {
        this.apiClient = alfrescoApi.bpmClient;
    }

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
    activate(groupId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in activate";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/action/activate', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    addAllUsersToGroup(groupId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in addAllUsersToGroup";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/add-all-users', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    addGroupCapabilities(groupId, addGroupCapabilitiesRepresentation) {
        let postBody = addGroupCapabilitiesRepresentation;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in addGroupCapabilities";
        }

        // verify the required parameter 'addGroupCapabilitiesRepresentation' is set
        if (addGroupCapabilitiesRepresentation === undefined || addGroupCapabilitiesRepresentation === null) {
            throw "Missing param 'addGroupCapabilitiesRepresentation' in addGroupCapabilities";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/capabilities', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    addGroupMember(groupId, userId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in addGroupMember";
        }

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in addGroupMember";
        }


        let pathParams = {
            'groupId': groupId,
            'userId': userId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/members/{userId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    addRelatedGroup(groupId, relatedGroupId, type) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in addRelatedGroup";
        }

        // verify the required parameter 'relatedGroupId' is set
        if (relatedGroupId === undefined || relatedGroupId === null) {
            throw "Missing param 'relatedGroupId' in addRelatedGroup";
        }

        // verify the required parameter 'type' is set
        if (type === undefined || type === null) {
            throw "Missing param 'type' in addRelatedGroup";
        }


        let pathParams = {
            'groupId': groupId,
            'relatedGroupId': relatedGroupId
        };
        let queryParams = {
            'type': type
        };
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    createNewGroup(groupRepresentation) {
        let postBody = groupRepresentation;

        // verify the required parameter 'groupRepresentation' is set
        if (groupRepresentation === undefined || groupRepresentation === null) {
            throw "Missing param 'groupRepresentation' in createNewGroup";
        }


        let pathParams = {};
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    deleteGroupCapability(groupId, groupCapabilityId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in deleteGroupCapability";
        }

        // verify the required parameter 'groupCapabilityId' is set
        if (groupCapabilityId === undefined || groupCapabilityId === null) {
            throw "Missing param 'groupCapabilityId' in deleteGroupCapability";
        }


        let pathParams = {
            'groupId': groupId,
            'groupCapabilityId': groupCapabilityId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    deleteGroupMember(groupId, userId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in deleteGroupMember";
        }

        // verify the required parameter 'userId' is set
        if (userId === undefined || userId === null) {
            throw "Missing param 'userId' in deleteGroupMember";
        }


        let pathParams = {
            'groupId': groupId,
            'userId': userId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/members/{userId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    deleteGroup(groupId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in deleteGroup";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    deleteRelatedGroup(groupId, relatedGroupId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in deleteRelatedGroup";
        }

        // verify the required parameter 'relatedGroupId' is set
        if (relatedGroupId === undefined || relatedGroupId === null) {
            throw "Missing param 'relatedGroupId' in deleteRelatedGroup";
        }


        let pathParams = {
            'groupId': groupId,
            'relatedGroupId': relatedGroupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    getCapabilities(groupId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in getCapabilities";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/potential-capabilities', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    getGroupUsers(groupId, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in getGroupUsers";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {
            'filter': opts['filter'],
            'page': opts['page'],
            'pageSize': opts['pageSize']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    getGroup(groupId, opts?: any) {
        opts = opts || {};
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in getGroup";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {
            'includeAllUsers': opts['includeAllUsers'],
            'summary': opts['summary']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    getGroups(opts?: any) {
        opts = opts || {};
        let postBody = null;


        let pathParams = {};
        let queryParams = {
            'tenantId': opts['tenantId'],
            'functional': opts['functional'],
            'summary': opts['summary']
        };
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    getRelatedGroups(groupId) {
        let postBody = null;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in getRelatedGroups";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/related-groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
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
    updateGroup(groupId, groupRepresentation) {
        let postBody = groupRepresentation;

        // verify the required parameter 'groupId' is set
        if (groupId === undefined || groupId === null) {
            throw "Missing param 'groupId' in updateGroup";
        }

        // verify the required parameter 'groupRepresentation' is set
        if (groupRepresentation === undefined || groupRepresentation === null) {
            throw "Missing param 'groupRepresentation' in updateGroup";
        }


        let pathParams = {
            'groupId': groupId
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};

        let authNames = [];
        let contentTypes = ['application/json'];
        let accepts = ['application/json'];
        let returnType = null;

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, returnType
        );
    }
}
