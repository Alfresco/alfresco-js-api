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
export class AdmingroupsApi extends BaseApi {
    /**
    * Activate a group
    * 
    * 
    * 
    * @param groupId groupId
    * @return Promise<{}>
    */
    activateUsingPOST(groupId: number): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in activateUsingPOST");
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
            '/enterprise/admin/groups/{groupId}/action/activate', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Add users to a group
        * 
        * 
        * 
        * @param groupId groupId
        * @return Promise<{}>
        */
    addAllUsersToGroupUsingPOST(groupId: number): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addAllUsersToGroupUsingPOST");
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
            '/enterprise/admin/groups/{groupId}/add-all-users', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    addGroupCapabilitiesUsingPOST(groupId: number, addGroupCapabilitiesRepresentation: AddGroupCapabilitiesRepresentation): Promise<{}> {

        let postBody = addGroupCapabilitiesRepresentation;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addGroupCapabilitiesUsingPOST");
        }

        if (addGroupCapabilitiesRepresentation === undefined || addGroupCapabilitiesRepresentation === null) {
            throw new Error("Required param 'addGroupCapabilitiesRepresentation' in addGroupCapabilitiesUsingPOST");
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
            '/enterprise/admin/groups/{groupId}/capabilities', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    addGroupMemberUsingPOST(groupId: number, userId: number): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addGroupMemberUsingPOST");
        }

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in addGroupMemberUsingPOST");
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
            '/enterprise/admin/groups/{groupId}/members/{userId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    addRelatedGroupUsingPOST(groupId: number, relatedGroupId: number, type: string): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in addRelatedGroupUsingPOST");
        }

        if (relatedGroupId === undefined || relatedGroupId === null) {
            throw new Error("Required param 'relatedGroupId' in addRelatedGroupUsingPOST");
        }

        if (type === undefined || type === null) {
            throw new Error("Required param 'type' in addRelatedGroupUsingPOST");
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
            '/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Create a group
        * 
        * 
        * 
        * @param groupRepresentation groupRepresentation
        * @return Promise<GroupRepresentation>
        */
    createNewGroupUsingPOST(groupRepresentation: GroupRepresentation): Promise<GroupRepresentation> {

        let postBody = groupRepresentation;

        if (groupRepresentation === undefined || groupRepresentation === null) {
            throw new Error("Required param 'groupRepresentation' in createNewGroupUsingPOST");
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
            '/enterprise/admin/groups', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    deleteGroupCapabilityUsingDELETE(groupId: number, groupCapabilityId: number): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroupCapabilityUsingDELETE");
        }

        if (groupCapabilityId === undefined || groupCapabilityId === null) {
            throw new Error("Required param 'groupCapabilityId' in deleteGroupCapabilityUsingDELETE");
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
            '/enterprise/admin/groups/{groupId}/capabilities/{groupCapabilityId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    deleteGroupMemberUsingDELETE(groupId: number, userId: number): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroupMemberUsingDELETE");
        }

        if (userId === undefined || userId === null) {
            throw new Error("Required param 'userId' in deleteGroupMemberUsingDELETE");
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
            '/enterprise/admin/groups/{groupId}/members/{userId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Delete a group
        * 
        * 
        * 
        * @param groupId groupId
        * @return Promise<{}>
        */
    deleteGroupUsingDELETE(groupId: number): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroupUsingDELETE");
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
            '/enterprise/admin/groups/{groupId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    deleteRelatedGroupUsingDELETE(groupId: number, relatedGroupId: number): Promise<{}> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteRelatedGroupUsingDELETE");
        }

        if (relatedGroupId === undefined || relatedGroupId === null) {
            throw new Error("Required param 'relatedGroupId' in deleteRelatedGroupUsingDELETE");
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
            '/enterprise/admin/groups/{groupId}/related-groups/{relatedGroupId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * List group capabilities
        * 
        * 
        * 
        * @param groupId groupId
        * @return Promise<Array<string>>
        */
    getCapabilitiesUsingGET(groupId: number): Promise<Array<string>> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getCapabilitiesUsingGET");
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
            '/enterprise/admin/groups/{groupId}/potential-capabilities', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    getGroupUsersUsingGET(groupId: number, opts: any): Promise<ResultListDataRepresentationLightUserRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getGroupUsersUsingGET");
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
            '/enterprise/admin/groups/{groupId}/users', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    getGroupUsingGET(groupId: number, opts: any): Promise<AbstractGroupRepresentation> {
        opts = opts || {};
        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getGroupUsingGET");
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
            '/enterprise/admin/groups/{groupId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
        * @return Promise<Array<LightGroupRepresentation>>
        */
    getGroupsUsingGET1(opts: any): Promise<Array<LightGroupRepresentation>> {
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
            '/enterprise/admin/groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }
    /**
        * Get related groups
        * 
        * 
        * 
        * @param groupId groupId
        * @return Promise<Array<LightGroupRepresentation>>
        */
    getRelatedGroupsUsingGET(groupId: number): Promise<Array<LightGroupRepresentation>> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getRelatedGroupsUsingGET");
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
            '/enterprise/admin/groups/{groupId}/related-groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
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
    updateGroupUsingPUT(groupId: number, groupRepresentation: GroupRepresentation): Promise<GroupRepresentation> {

        let postBody = groupRepresentation;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in updateGroupUsingPUT");
        }

        if (groupRepresentation === undefined || groupRepresentation === null) {
            throw new Error("Required param 'groupRepresentation' in updateGroupUsingPUT");
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
            '/enterprise/admin/groups/{groupId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts)
    }

}
