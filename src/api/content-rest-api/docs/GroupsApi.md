# GroupsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](GroupsApi.md#createGroup) | **POST** /groups | Create a group
[**createGroupMembership**](GroupsApi.md#createGroupMembership) | **POST** /groups/{groupId}/members | Create a group membership
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /groups/{groupId} | Delete a group
[**deleteGroupMembership**](GroupsApi.md#deleteGroupMembership) | **DELETE** /groups/{groupId}/members/{groupMemberId} | Delete a group membership
[**getGroup**](GroupsApi.md#getGroup) | **GET** /groups/{groupId} | Get group details
[**listGroupMemberships**](GroupsApi.md#listGroupMemberships) | **GET** /groups/{groupId}/members | List memberships of a group
[**listGroupMembershipsForPerson**](GroupsApi.md#listGroupMembershipsForPerson) | **GET** /people/{personId}/groups | List group memberships
[**listGroups**](GroupsApi.md#listGroups) | **GET** /groups | List groups
[**updateGroup**](GroupsApi.md#updateGroup) | **PUT** /groups/{groupId} | Update group details


<a name="createGroup"></a>
# **createGroup**
> GroupEntry createGroup(groupBodyCreateopts)

Create a group

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Create a group.

The group id must start with \"GROUP\\_\". If this is omitted it will be added automatically.
This format is also returned when listing groups or group memberships. It should be noted
that the other group-related operations also expect the id to start with \"GROUP\\_\".

If one or more parentIds are specified then the group will be created and become a member
of each of the specified parent groups.

If no parentIds are specified then the group will be created as a root group.

The group will be created in the **APP.DEFAULT** and **AUTH.ALF** zones.

You must have admin rights to create a group.


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

groupsApi.createGroup(groupBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupBodyCreate** | [**GroupBodyCreate**](GroupBodyCreate.md)| The group to create. | 
 **include** | [**string**](string.md)| Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones
 | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**GroupEntry**](GroupEntry.md)

<a name="createGroupMembership"></a>
# **createGroupMembership**
> GroupMemberEntry createGroupMembership(groupIdgroupMembershipBodyCreateopts)

Create a group membership

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Create a group membership (for an existing person or group) within a group **groupId**.

If the added group was previously a root group then it becomes a non-root group since it now has a parent.

It is an error to specify an **id** that does not exist.

You must have admin rights to create a group membership.


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

groupsApi.createGroupMembership(groupIdgroupMembershipBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The identifier of a group. | 
 **groupMembershipBodyCreate** | [**GroupMembershipBodyCreate**](GroupMembershipBodyCreate.md)| The group membership to add (person or sub-group). | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**GroupMemberEntry**](GroupMemberEntry.md)

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupIdopts)

Delete a group

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Delete group **groupId**.

The option to cascade delete applies this recursively to any hierarchy of group members.
In this case, removing a group member does not delete the person or sub-group itself.
If a removed sub-group no longer has any parent groups then it becomes a root group.

You must have admin rights to delete a group.


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'cascade': true //  | If **true** then the delete will be applied in cascade to sub-groups.

};

groupsApi.deleteGroup(groupIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The identifier of a group. | 
 **cascade** | **boolean**| If **true** then the delete will be applied in cascade to sub-groups.
 | [optional] [default to false]

### Return type

null (empty response body)

<a name="deleteGroupMembership"></a>
# **deleteGroupMembership**
> deleteGroupMembership(groupIdgroupMemberId)

Delete a group membership

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Delete group member **groupMemberId** (person or sub-group) from group **groupId**.

Removing a group member does not delete the person or sub-group itself.

If a removed sub-group no longer has any parent groups then it becomes a root group.

You must have admin rights to delete a group membership.


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);


groupsApi.deleteGroupMembership(groupIdgroupMemberId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The identifier of a group. | 
 **groupMemberId** | **string**| The identifier of a person or group. | 

### Return type

null (empty response body)

<a name="getGroup"></a>
# **getGroup**
> GroupEntry getGroup(groupIdopts)

Get group details

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Get details for group **groupId**.

You can use the **include** parameter to return additional information.


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

groupsApi.getGroup(groupIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The identifier of a group. | 
 **include** | [**string**](string.md)| Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones
 | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**GroupEntry**](GroupEntry.md)

<a name="listGroupMemberships"></a>
# **listGroupMemberships**
> GroupMemberPaging listGroupMemberships(groupIdopts)

List memberships of a group

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Gets a list of the group memberships for the group **groupId**.

You can use the **where** parameter to filter the returned groups by **memberType**.

Example to filter by **memberType**, use any one of:


(memberType='GROUP')
(memberType='PERSON')


The default sort order for the returned list is for group members to be sorted by ascending displayName.
You can override the default by using the **orderBy** parameter. You can specify one of the following fields in the **orderBy** parameter:
* id
* displayName


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'where': where_example //  | A string to restrict the returned objects by using a predicate.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

groupsApi.listGroupMemberships(groupIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The identifier of a group. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**GroupMemberPaging**](GroupMemberPaging.md)

<a name="listGroupMembershipsForPerson"></a>
# **listGroupMembershipsForPerson**
> GroupPaging listGroupMembershipsForPerson(personIdopts)

List group memberships

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

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


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'include':  //  | Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones

  'where': where_example //  | A string to restrict the returned objects by using a predicate.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

groupsApi.listGroupMembershipsForPerson(personIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **personId** | **string**| The identifier of a person. | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**GroupPaging**](GroupPaging.md)

<a name="listGroups"></a>
# **listGroups**
> GroupPaging listGroups(opts)

List groups

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

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


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'include':  //  | Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones

  'where': where_example //  | A string to restrict the returned objects by using a predicate.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

groupsApi.listGroups(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones
 | [optional] 
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**GroupPaging**](GroupPaging.md)

<a name="updateGroup"></a>
# **updateGroup**
> GroupEntry updateGroup(groupIdgroupBodyUpdateopts)

Update group details

**Note:** this endpoint is available in Alfresco 5.2.1 and newer versions.

Update details (displayName) for group **groupId**.

You must have admin rights to update a group.


### Example
```javascript
import GroupsApi from 'GroupsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let groupsApi = new GroupsApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

groupsApi.updateGroup(groupIdgroupBodyUpdateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **string**| The identifier of a group. | 
 **groupBodyUpdate** | [**GroupBodyUpdate**](GroupBodyUpdate.md)| The group information to update. | 
 **include** | [**string**](string.md)| Returns additional information about the group. The following optional fields can be requested:
* parentIds
* zones
 | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**GroupEntry**](GroupEntry.md)

