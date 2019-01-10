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

import { AbstractGroupRepresentation } from '../model/abstractGroupRepresentation';
import { AddGroupCapabilitiesRepresentation } from '../model/addGroupCapabilitiesRepresentation';
import { GroupRepresentation } from '../model/groupRepresentation';
import { LightGroupRepresentation } from '../model/lightGroupRepresentation';
import { ResultListDataRepresentationLightUserRepresentation } from '../model/resultListDataRepresentationLightUserRepresentation';
import { BaseApi } from './base.api';

/**
* Admingroups service.
* @module AdmingroupsApi
*/
export class AdminGroupsApi extends BaseApi {
    /**
    * Activate a group
    *
    *
    *
    * @param groupId groupId
    * @return Promise<{}>
    */
    activate(groupId: number): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in activate");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/action/activate', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Add users to a group
        *
        *
        *
        * @param groupId groupId
        * @return Promise<{}>
        */
    addAllUsersToGroup(groupId: number): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addAllUsersToGroup");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/add-all-users', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Add capabilities to a group
        *
        *
        *
        * @param groupId groupId
        * @param addGroupCapabilitiesRepresentation addGroupCapabilitiesRepresentation
        * @return Promise<{}>
        */
    addGroupCapabilities(groupId: number, addGroupCapabilitiesRepresentation: AddGroupCapabilitiesRepresentation): Promise<any> {

        let postBody = addGroupCapabilitiesRepresentation;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addGroupCapabilities");
        }

        if (addGroupCapabilitiesRepresentation === undefined || addGroupCapabilitiesRepresentation === null) {
            throw new Error("Required param 'addGroupCapabilitiesRepresentation' in addGroupCapabilities");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/capabilities', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Add a user to a group
        *
        *
        *
        * @param groupId groupId
        * @param userId userId
        * @return Promise<{}>
        */
    addGroupMember(groupId: number, userId: number): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addGroupMember");
        }

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in addGroupMember");
        }

        let pathParams = {
            'groupId': groupId, 'userId': userId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/members/{userId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get a related group
        *
        *
        *
        * @param groupId groupId
        * @param relatedGroupId relatedGroupId
        * @param type type
        * @return Promise<{}>
        */
    addRelatedGroup(groupId: number, relatedGroupId: number, type: string): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addRelatedGroup");
        }

        if (relatedGroupId === undefined || relatedGroupId === null) {
            throw new Error("Required param 'relatedGroupId' in addRelatedGroup");
        }

        if (type === undefined || type === null) {
            throw new Error("Required param 'type' in addRelatedGroup");
        }

        let pathParams = {
            'groupId': groupId, 'relatedGroupId': relatedGroupId
        };

        let queryParams = {
            'type': type
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Create a group
        *
        *
        *
        * @param groupRepresentation groupRepresentation
        * @return Promise<GroupRepresentation>
        */
    createNewGroup(groupRepresentation: GroupRepresentation): Promise<GroupRepresentation> {

        let postBody = groupRepresentation;

        if (groupRepresentation === undefined || groupRepresentation === null) {
            throw new Error("Required param 'groupRepresentation' in createNewGroup");
        }

        let pathParams = {

        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupRepresentation);
    }
    /**
        * Remove a capability from a group
        *
        *
        *
        * @param groupId groupId
        * @param groupCapabilityId groupCapabilityId
        * @return Promise<{}>
        */
    deleteGroupCapability(groupId: number, groupCapabilityId: number): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroupCapability");
        }

        if (groupCapabilityId === undefined || groupCapabilityId === null) {
            throw new Error("Required param 'groupCapabilityId' in deleteGroupCapability");
        }

        let pathParams = {
            'groupId': groupId, 'groupCapabilityId': groupCapabilityId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a member from a group
        *
        *
        *
        * @param groupId groupId
        * @param userId userId
        * @return Promise<{}>
        */
    deleteGroupMember(groupId: number, userId: number): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroupMember");
        }

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in deleteGroupMember");
        }

        let pathParams = {
            'groupId': groupId, 'userId': userId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/members/{userId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a group
        *
        *
        *
        * @param groupId groupId
        * @return Promise<{}>
        */
    deleteGroup(groupId: number): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroup");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a related group
        *
        *
        *
        * @param groupId groupId
        * @param relatedGroupId relatedGroupId
        * @return Promise<{}>
        */
    deleteRelatedGroup(groupId: number, relatedGroupId: number): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteRelatedGroup");
        }

        if (relatedGroupId === undefined || relatedGroupId === null) {
            throw new Error("Required param 'relatedGroupId' in deleteRelatedGroup");
        }

        let pathParams = {
            'groupId': groupId, 'relatedGroupId': relatedGroupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * List group capabilities
        *
        *
        *
        * @param groupId groupId
        * @return Promise<string>
        */
    getCapabilities(groupId: number): Promise<string> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getCapabilities");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/potential-capabilities', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get group members
        *
        *
        *
        * @param groupId groupId
        * @param opts Optional parameters
        * @param opts.filter filter
        * @param opts.page page
        * @param opts.pageSize pageSize
        * @return Promise<ResultListDataRepresentationLightUserRepresentation>
        */
    getGroupUsers(groupId: number, opts?: any): Promise<ResultListDataRepresentationLightUserRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getGroupUsers");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
            'filter': opts['filter'],
            'page': opts['page'],
            'pageSize': opts['pageSize']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, ResultListDataRepresentationLightUserRepresentation);
    }
    /**
        * Get a group
        *
        *
        *
        * @param groupId groupId
        * @param opts Optional parameters
        * @param opts.includeAllUsers includeAllUsers
        * @param opts.summary summary
        * @return Promise<AbstractGroupRepresentation>
        */
    getGroup(groupId: number, opts?: any): Promise<AbstractGroupRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getGroup");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
            'includeAllUsers': opts['includeAllUsers'],
            'summary': opts['summary']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, AbstractGroupRepresentation);
    }
    /**
        * Query groups
        *
        *
        *
        * @param opts Optional parameters
        * @param opts.tenantId tenantId
        * @param opts.functional functional
        * @param opts.summary summary
        * @return Promise<LightGroupRepresentation>
        */
    getGroups(opts?: any): Promise<LightGroupRepresentation> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'tenantId': opts['tenantId'],
            'functional': opts['functional'],
            'summary': opts['summary']
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, LightGroupRepresentation);
    }
    /**
        * Get related groups
        *
        *
        *
        * @param groupId groupId
        * @return Promise<LightGroupRepresentation>
        */
    getRelatedGroups(groupId: number): Promise<LightGroupRepresentation> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getRelatedGroups");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}/related-groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, LightGroupRepresentation);
    }
    /**
        * Update a group
        *
        *
        *
        * @param groupId groupId
        * @param groupRepresentation groupRepresentation
        * @return Promise<GroupRepresentation>
        */
    updateGroup(groupId: number, groupRepresentation: GroupRepresentation): Promise<GroupRepresentation> {

        let postBody = groupRepresentation;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in updateGroup");
        }

        if (groupRepresentation === undefined || groupRepresentation === null) {
            throw new Error("Required param 'groupRepresentation' in updateGroup");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/api/enterprise/admin/groups/{groupId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupRepresentation);
    }

}
