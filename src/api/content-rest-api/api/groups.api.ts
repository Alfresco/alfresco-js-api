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

import { GroupBodyCreate } from '../model/groupBodyCreate';
import { GroupBodyUpdate } from '../model/groupBodyUpdate';
import { GroupEntry } from '../model/groupEntry';
import { GroupMemberEntry } from '../model/groupMemberEntry';
import { GroupMemberPaging } from '../model/groupMemberPaging';
import { GroupMembershipBodyCreate } from '../model/groupMembershipBodyCreate';
import { GroupPaging } from '../model/groupPaging';
import { BaseApi } from './base.api';

/**
* Groups service.
* @module GroupsApi
*/
export class GroupsApi extends BaseApi {
    /**
    * Create a group
    *
    * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Create a group.

The group id must start with \"GROUP\\_\". If this is omitted it will be added automatically.
This format is also returned when listing groups or group memberships. It should be noted
that the other group-related operations also expect the id to start with \"GROUP\\_\".

If one or more parentIds are specified then the group will be created and become a member
of each of the specified parent groups.

If no parentIds are specified then the group will be created as a root group.

The group will be created in the **APP.DEFAULT** and **AUTH.ALF** zones.

You must have admin rights to create a group.

    *
    * @param groupBodyCreate The group to create.
    * @param opts Optional parameters
    * @param opts.include Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones

    * @param opts.fields A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

    * @return Promise<GroupEntry>
    */
    createGroup(groupBodyCreate: GroupBodyCreate, opts?: any): Promise<GroupEntry> {
        opts = opts || {};
        let postBody = groupBodyCreate;

        if (groupBodyCreate === undefined || groupBodyCreate === null) {
            throw new Error("Required param 'groupBodyCreate' in createGroup");
        }

        let pathParams = {

        };

        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/groups', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupEntry);
    }
    /**
        * Create a group membership
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Create a group membership (for an existing person or group) within a group **groupId**.

    If the added group was previously a root group then it becomes a non-root group since it now has a parent.

    It is an error to specify an **id** that does not exist.

    You must have admin rights to create a group membership.

        *
        * @param groupId The identifier of a group.
        * @param groupMembershipBodyCreate The group membership to add (person or sub-group).
        * @param opts Optional parameters
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<GroupMemberEntry>
        */
    createGroupMembership(groupId: string, groupMembershipBodyCreate: GroupMembershipBodyCreate, opts?: any): Promise<GroupMemberEntry> {
        opts = opts || {};
        let postBody = groupMembershipBodyCreate;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in createGroupMembership");
        }

        if (groupMembershipBodyCreate === undefined || groupMembershipBodyCreate === null) {
            throw new Error("Required param 'groupMembershipBodyCreate' in createGroupMembership");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/groups/{groupId}/members', 'POST',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupMemberEntry);
    }
    /**
        * Delete a group
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Delete group **groupId**.

    The option to cascade delete applies this recursively to any hierarchy of group members.
    In this case, removing a group member does not delete the person or sub-group itself.
    If a removed sub-group no longer has any parent groups then it becomes a root group.

    You must have admin rights to delete a group.

        *
        * @param groupId The identifier of a group.
        * @param opts Optional parameters
        * @param opts.cascade If **true** then the delete will be applied in cascade to sub-groups.
     (default to false)
        * @return Promise<{}>
        */
    deleteGroup(groupId: string, opts?: any): Promise<any> {
        opts = opts || {};
        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroup");
        }

        let cascadeDelete = opts['cascade'] ? opts['cascade'] : false;

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
            'cascade': cascadeDelete
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/groups/{groupId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Delete a group membership
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Delete group member **groupMemberId** (person or sub-group) from group **groupId**.

    Removing a group member does not delete the person or sub-group itself.

    If a removed sub-group no longer has any parent groups then it becomes a root group.

    You must have admin rights to delete a group membership.

        *
        * @param groupId The identifier of a group.
        * @param groupMemberId The identifier of a person or group.
        * @return Promise<{}>
        */
    deleteGroupMembership(groupId: string, groupMemberId: string): Promise<any> {

        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in deleteGroupMembership");
        }

        if (groupMemberId === undefined || groupMemberId === null) {
            throw new Error("Required param 'groupMemberId' in deleteGroupMembership");
        }

        let pathParams = {
            'groupId': groupId, 'groupMemberId': groupMemberId
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
            '/groups/{groupId}/members/{groupMemberId}', 'DELETE',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts);
    }
    /**
        * Get group details
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Get details for group **groupId**.

    You can use the **include** parameter to return additional information.

        *
        * @param groupId The identifier of a group.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the group. The following optional fields can be requested:
    * parentIds
    * zones

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<GroupEntry>
        */
    getGroup(groupId: string, opts?: any): Promise<GroupEntry> {
        opts = opts || {};
        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in getGroup");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/groups/{groupId}', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupEntry);
    }
    /**
        * List memberships of a group
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Gets a list of the group memberships for the group **groupId**.

    You can use the **where** parameter to filter the returned groups by **memberType**.

    Example to filter by **memberType**, use any one of:


    (memberType='GROUP')
    (memberType='PERSON')


    The default sort order for the returned list is for group members to be sorted by ascending displayName.
    You can override the default by using the **orderBy** parameter. You can specify one of the following fields in the **orderBy** parameter:
    * id
    * displayName

        *
        * @param groupId The identifier of a group.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<GroupMemberPaging>
        */
    listGroupMemberships(groupId: string, opts?: any): Promise<GroupMemberPaging> {
        opts = opts || {};
        let postBody = null;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in listGroupMemberships");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
            'where': opts['where'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/groups/{groupId}/members', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupMemberPaging);
    }
    /**
        * List group memberships
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

     Gets a list of group membership information for person **personId**.

     You can use the -me- string in place of <personId> to specify the currently authenticated user.

     You can use the **include** parameter to return additional information.

     You can use the **where** parameter to filter the returned groups by **isRoot**. For example, the following **where**
     clause will return just the root groups:


     (isRoot=true)


     The **where** parameter can also be used to filter by ***zone***. This may be combined with isRoot to narrow
     a result set even further. For example, the following where clause will only return groups belonging to the
     MY.ZONE zone.


     where=(zones in ('MY.ZONE'))


     This may be combined with the isRoot filter, as shown below:


     where=(isRoot=false AND zones in ('MY.ZONE'))


     ***Note:*** restrictions include
     * AND is the only supported operator when combining isRoot and zones filters
     * Only one zone is supported by the filter
     * The quoted zone name must be placed in parenthesis — a 400 error will result if these are omitted.


     The default sort order for the returned list is for groups to be sorted by ascending displayName.
     You can override the default by using the **orderBy** parameter. You can specify one or more of the following fields in the **orderBy** parameter:
     * id
     * displayName

        *
        * @param personId The identifier of a person.
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.include Returns additional information about the group. The following optional fields can be requested:
    * parentIds
    * zones

        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<GroupPaging>
        */
    listGroupMembershipsForPerson(personId: string, opts?: any): Promise<GroupPaging> {
        opts = opts || {};
        let postBody = null;

        if (personId === undefined || personId === null) {
            throw new Error("Required param 'personId' in listGroupMembershipsForPerson");
        }

        let pathParams = {
            'personId': personId
        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'where': opts['where'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/people/{personId}/groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupPaging);
    }
    /**
        * List groups
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Gets a list of groups.

    You can use the **include** parameter to return additional information.

    You can use the **where** parameter to filter the returned groups by **isRoot**. For example, the following **where**
    clause will return just the root groups:


    (isRoot=true)


    The **where** parameter can also be used to filter by ***zone***. This may be combined with isRoot to narrow
    a result set even further. For example, the following where clause will only return groups belonging to the
    MY.ZONE zone.


    where=(zones in ('MY.ZONE'))


    This may be combined with the isRoot filter, as shown below:


    where=(isRoot=false AND zones in ('MY.ZONE'))


    ***Note:*** restrictions include
    * AND is the only supported operator when combining isRoot and zones filters
    * Only one zone is supported by the filter
    * The quoted zone name must be placed in parenthesis — a 400 error will result if these are omitted.

    The default sort order for the returned list is for groups to be sorted by ascending displayName.
    You can override the default by using the **orderBy** parameter. You can specify one of the following fields in the **orderBy** parameter:
    * id
    * displayName

        *
        * @param opts Optional parameters
        * @param opts.skipCount The number of entities that exist in the collection before those included in this list.
    If not supplied then the default value is 0.
     (default to 0)
        * @param opts.maxItems The maximum number of items to return in the list.
    If not supplied then the default value is 100.
     (default to 100)
        * @param opts.orderBy A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
    sort the list by one or more fields.

    Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
    above to check if any fields used in this method have a descending default search order.

    To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

        * @param opts.include Returns additional information about the group. The following optional fields can be requested:
    * parentIds
    * zones

        * @param opts.where A string to restrict the returned objects by using a predicate.
        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<GroupPaging>
        */
    listGroups(opts?: any): Promise<GroupPaging> {
        opts = opts || {};
        let postBody = null;

        let pathParams = {

        };

        let queryParams = {
            'skipCount': opts['skipCount'],
            'maxItems': opts['maxItems'],
            'orderBy': this.apiClient.buildCollectionParam(opts['orderBy'], 'csv'),
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'where': opts['where'],
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/groups', 'GET',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupPaging);
    }
    /**
        * Update group details
        *
        * **Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

    Update details (displayName) for group **groupId**.

    You must have admin rights to update a group.

        *
        * @param groupId The identifier of a group.
        * @param groupBodyUpdate The group information to update.
        * @param opts Optional parameters
        * @param opts.include Returns additional information about the group. The following optional fields can be requested:
    * parentIds
    * zones

        * @param opts.fields A list of field names.

    You can use this parameter to restrict the fields
    returned within a response if, for example, you want to save on overall bandwidth.

    The list applies to a returned individual
    entity or entries within a collection.

    If the API method also supports the **include**
    parameter, then the fields specified in the **include**
    parameter are returned in addition to those specified in the **fields** parameter.

        * @return Promise<GroupEntry>
        */
    updateGroup(groupId: string, groupBodyUpdate: GroupBodyUpdate, opts?: any): Promise<GroupEntry> {
        opts = opts || {};
        let postBody = groupBodyUpdate;

        if (groupId === undefined || groupId === null) {
            throw new Error("Required param 'groupId' in updateGroup");
        }

        if (groupBodyUpdate === undefined || groupBodyUpdate === null) {
            throw new Error("Required param 'groupBodyUpdate' in updateGroup");
        }

        let pathParams = {
            'groupId': groupId
        };

        let queryParams = {
            'include': this.apiClient.buildCollectionParam(opts['include'], 'csv'),
            'fields': this.apiClient.buildCollectionParam(opts['fields'], 'csv')
        };

        let headerParams = {

        };
        let formParams = {
        };

        let contentTypes = ['application/json'];
        let accepts = ['application/json'];

        return this.apiClient.callApi(
            '/groups/{groupId}', 'PUT',
            pathParams, queryParams, headerParams, formParams, postBody,
            contentTypes, accepts, GroupEntry);
    }

}
