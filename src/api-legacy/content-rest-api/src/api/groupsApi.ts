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
import { GroupsApi as NewGroupsApi } from '../../../../api/content-rest-api/api/groups.api';
import { GroupEntry } from '../../../../api/content-rest-api/model/groupEntry';
import { GroupPaging } from '../../../../api/content-rest-api/model/groupPaging';
import { GroupMemberPaging } from '../../../../api/content-rest-api/model/groupMemberPaging';
import { GroupMembershipBodyCreate } from '../../../../api/content-rest-api/model/groupMembershipBodyCreate';
import { GroupMemberEntry } from '../../../../api/content-rest-api/model/groupMemberEntry';
import { GroupBodyUpdate } from '../../../../api/content-rest-api/model/groupBodyUpdate';
import { GroupBodyCreate } from '../../../../api/content-rest-api/model/groupBodyCreate';

/**
 * @deprecated 3.0.0
 */
export class GroupsApi {

    private groupsApi: NewGroupsApi;

    public init(alfrescoApi?: AlfrescoApi) {
        this.groupsApi = new NewGroupsApi(alfrescoApi);
    }

    /**
     * Create a new group
     * @param {module:model/GroupBody} GroupBody The new group
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Use the relations parameter to include one or more related entities in a single response.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/GroupsEntry}
     */

    createGroup(groupBody: GroupBodyCreate, opts?: any): Promise<GroupEntry> {
        return this.groupsApi.createGroup(groupBody, opts);
    }

    /**
     * Get groups
     * Returns a list of groups in this repository. You can sort the list if groups using the **orderBy** parameter.\n**orderBy** specifies the name of one or more\ncomma separated properties.\nFor each property you can optionally specify the order direction.\nBoth of the these **orderBy** examples retrieve sites ordered by ascending name:\n\n&#x60;&#x60;&#x60;\nname\nname ASC\n&#x60;&#x60;&#x60;\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to each site:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {string[]} opts.include Use the relations parameter to include one or more related entities in a single response.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/GroupsPaging}
     */
    getGroups(opts?: any): Promise<GroupPaging> {
        return this.groupsApi.listGroups(opts);
    }

    /**
     * Delete a group
     * Deletes the site with **groupId**.
     * @param {String} groupId The identifier of a site.
     * @param {Boolean} opts.cascade If true then the delete will be applied in cascade to sub-groups.
     */
    deleteGroup(groupId: string, opts?: any): Promise<any> {
        return this.groupsApi.deleteGroup(groupId, opts);
    }

    /**
     * Get a group
     * Returns information for site **groupId**.\n\nYou can use the **relations** parameter to include one or more related\nentities in a single response and so reduce network traffic.\n\nThe entity types in Alfresco are organized in a tree structure.\nThe **sites** entity has two children, **containers** and **members**.\nThe following relations parameter returns all the container and member\nobjects related to the site **siteId**:\n\n&#x60;&#x60;&#x60;\ncontainers,members\n&#x60;&#x60;&#x60;\n
     * @param {String} groupId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the group. The following optional fields can be requested: parentIds, zones
     * @param {string[]} opts.fields A list of field names.You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.The list applies to a returned individual entity or entries within a collection.If the API method also supports the include parameter, then the fields specified in the include parameter are returned in addition to those specified in the fields parameter.
     * data is of type: {module:model/GroupsEntry}
     */
    getGroup(groupId: string, opts?: any): Promise<GroupEntry> {
        return this.groupsApi.getGroup(groupId, opts);
    }

    /**
     * Update a site member
     * Update details (displayName) for group groupId. You must have admin rights to update a group.
     * @param {String} groupId The identifier of a site.
     * @param {module:model/GroupBody} groupBody only the displayName change attribute is allowed.
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.include Returns additional information about the group. The following optional fields can be requested: parentIds, zones
     * @param {string[]} opts.fields A list of field names.You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.The list applies to a returned individual entity or entries within a collection.If the API method also supports the include parameter, then the fields specified in the include parameter are returned in addition to those specified in the fields parameter.
     * data is of type: {module:model/GroupsEntry}
     */
    updateGroup(groupId: string, groupBody: GroupBodyUpdate, opts?: any): Promise<GroupEntry> {
        return this.groupsApi.updateGroup(groupId, groupBody, opts);
    }

    /**
     * Get group members
     * Returns a list of members for group **groupId**.
     * @param {String} groupId The identifier of a site.
     * @param {Object} opts Optional parameters
     * @param {Integer} opts.skipCount The number of entities that exist in the collection before those included in this list.
     * @param {Integer} opts.maxItems The maximum number of items to return in the list.
     * @param {String} opts.orderBy A string to control the order of the entities returned.
     * @param {String} opts.where A string to restrict the returned objects by using a predicate.
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/GroupMemberPaging}
     */
    getGroupMembers(groupId: string, opts?: any): Promise<GroupMemberPaging> {
        return this.groupsApi.listGroupMemberships(groupId, opts);
    }

    /**
     * Add a group member
     * Create a group membership (for an existing person or group) within a group groupId.
     * @param {String} groupId The identifier of a site.
     * @param {module:model/GroupMember} GroupMember The persons new role
     * @param {Object} opts Optional parameters
     * @param {string[]} opts.fields A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
     * data is of type: {module:model/GroupMemberEntry}
     */
    addGroupMember(groupId: string, groupMemberBody: GroupMembershipBodyCreate, opts?: any): Promise<GroupMemberEntry> {
        return this.groupsApi.createGroupMembership(groupId, groupMemberBody, opts);
    }

    /**
     * Delete a group membership
     * Deletes the membership **groupMemberId** from group **groupId**
     * @param {String} groupId The identifier of a group.
     * @param {String} groupMemberId The identifier of a group membership.
     */
    deleteGroupMember(groupId: string, groupMemberId: string): Promise<any> {
        return this.groupsApi.deleteGroupMembership(groupId, groupMemberId);
    }

}
