# AlfrescoCoreRestApi.GroupsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createGroup**](GroupsApi.md#createGroup) | **POST** /groups | Create a group
[**getGroups**](GroupsApi.md#getGroups) | **GET** /groups | Get groups
[**deleteGroup**](GroupsApi.md#deleteGroup) | **DELETE** /groups/{groupId} | Delete a group
[**getGroup**](GroupsApi.md#getGroup) | **GET** /groups/{groupId} | Get a group
[**updateGroup**](GroupsApi.md#updateGroup) | **PUT** /groups/{groupId} | Update a group name
[**getGroupMembers**](GroupsApi.md#getGroupMembers) | **GET** /groups/{groupId}/members | Get members of the group
[**addGroupMember**](GroupsApi.md#addGroupMember) | **POST** /groups/{groupId}/members | Add a group member
[**deleteGroupMember**](GroupsApi.md#deleteGroupMember) | **DELETE** /groups/{groupId}/members/{groupMemberId} | Remove a group member


<a name="createGroup"></a>
# **createGroup**
> GroupsEntry createGroup(groupBody, opts)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Create a group.

The group id must start with "GROUP_". If this is omitted it will be added automatically. This format is also returned when listing groups or group memberships. It should be noted that the other group-related operations also expect the id to start with "GROUP_".

If one or more parentIds are specified then the group will be created and become a member of each of the specified parent groups.

If no parentIds are specified then the group will be created as a root group.

The group will be created in the APP.DEFAULT and AUTH.ALF zones.

You must have admin rights to create a group.

### Example
```javascript

var opts = {
  'include': [String], // {[String]} Returns additional information about the group. The following optional fields can be requested: parentIds and zones.
  'fields': [String] // {[String]} A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection.
};

var groupBody = new this.alfrescoJsApi.core.GroupBody(); // {GroupBody} The group to create

this.alfrescoJsApi.core.groupsApi.createGroup(groupBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupBody** | [**GroupBody**](GroupBody.md)| The group to create |
 **opts.include**| [**[String]**](String.md) | the extra information to get when the group will be created | [optional]
 **opts.fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**GroupsEntry**](GroupsEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroups"></a>
# **getGroups**
> GroupsPaging getGroups(opts)

Note: this endpoint is available in Alfresco 5.2.1 and newer versions.

Gets a list of groups.

You can use the include parameter to return additional information.

You can use the where parameter to filter the returned groups by isRoot. For example, the following where clause will return just the root groups:
```HTML
    (isRoot=true)
```
The where parameter can also be used to filter by zone. This may be combined with isRoot to narrow a result set even further. For example, the following where clause will only return groups belonging to the MY.ZONE zone.
```HTML
    where=(zones in ('MY.ZONE'))
```
This may be combined with the isRoot filter, as shown below:
```HTML
    where=(isRoot=false AND zones in ('MY.ZONE'))
```
Note: restrictions include

* AND is the only supported operator when combining isRoot and zones filters
* Only one zone is supported by the filter
* The quoted zone name must be placed in parenthesis a 400 error will result if these are omitted.
The default sort order for the returned list is for groups to be sorted by ascending displayName. You can override the default by using the orderBy parameter. You can specify one of the following fields in the orderBy parameter:

    * id
    * displayName


### Example
```javascript

this.alfrescoJsApi.core.groupsApi()

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", // {String} A string to control the order of the entities returned.
  'include': [String], // {[String]} Returns additional information about the group. The following optional fields can be requested: parentIds and zones.
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */,
  'where': '(isRoot=true)', // A string to restrict the returned objects by using a predicate.  
};

this.alfrescoJsApi.core.groupsApi.getGroups(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **orderBy** | **String**| A string to control the order of the entities returned. | [optional]
 **where** | **String** | A string to restrict the returned objects by using a predicate. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the group. The following optional fields can be requested: parentIds and zones. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**GroupsPaging**](GroupsPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteGroup"></a>
# **deleteGroup**
> deleteGroup(groupId, opts)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Delete group **groupId**.

The option to cascade delete applies this recursively to any hierarchy of group members. In this case, removing a group member does not delete the person or sub-group itself. If a removed sub-group no longer has any parent groups then it becomes a root group.

You must have admin rights to delete a group.

### Example
```javascript

this.alfrescoJsApi.core.groupsApi()

var groupId = "groupId_example"; // {String} The identifier of a group.

var opts = {
  'cascade': false // {Boolean} If true then the delete will be applied in cascade to sub-groups.
};

this.alfrescoJsApi.core.groupsApi.deleteGroup(groupId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The identifier of a group. |
 **cascade** | **Boolean**| If true then the delete will be applied in cascade to sub-groups. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroup"></a>
# **getGroup**
> GroupsEntry getGroup(groupId, opts)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Get details for group **groupId**.

You can use the **include** parameter to return additional information.


### Example
```javascript

this.alfrescoJsApi.core.groupsApi()

var groupId = "groupId_example"; // {String} The identifier of a group.

var opts = {
  'include': [String], // {[String]} Returns additional information about the group. The following optional fields can be requested: parentIds and zones.
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};

this.alfrescoJsApi.core.groupsApi.getGroup(groupId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The identifier of a group. |
 **include** | [**[String]**](String.md)| Returns additional information about the group. The following optional fields can be requested: parentIds and zones. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**GroupsEntry**](GroupsEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateGroup"></a>
# **updateGroup**
> GroupsEntry updateGroup(groupId, groupBody, opts)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Update details (displayName) for group **groupId**.

You must have admin rights to update a group.

### Example
```javascript

this.alfrescoJsApi.core.groupsApi()

var groupId = "groupId_example"; // {String} The identifier of a group.

var groupBodyUpdate = new this.alfrescoJsApi.core.GroupBody();  // The group information to update.

var opts = {
  'include': [String], // {[String]} Returns additional information about the group. The following optional fields can be requested: parentIds and zones.
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};
this.alfrescoJsApi.core.groupsApi.updateGroup(groupId, groupBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The identifier of a group. |
 **groupBody** | [**GroupBody**](GroupBody.md)|  The group information to update |
 **include** | [**[String]**](String.md)| Returns additional information about the group. The following optional fields can be requested: parentIds and zones. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**GroupsEntry**](GroupsEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getGroupMembers"></a>
# **getSiteMembers**
> GroupMemberPaging getGroupMembers(siteId, opts)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Gets a list of the group memberships for the group **groupId**.

You can use the **where** parameter to filter the returned groups by **memberType**.

Example to filter by **memberType**, use any one of:
```HTML
    (memberType='GROUP')
    (memberType='PERSON')
```
The default sort order for the returned list is for group members to be sorted by ascending displayName. You can override the default by using the **orderBy** parameter. You can specify one of the following fields in the **orderBy** parameter:

* id
* displayName


### Example
```javascript

this.alfrescoJsApi.core.groupsApi()

var groupId = "groupId_example"; // {String} The identifier of a group.

var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", // {String} A string to control the order of the entities returned.
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */,
   'where': '(isRoot=true)', // A string to restrict the returned objects by using a predicate.
};
this.alfrescoJsApi.core.groupsApi.getGroupMembers(groupId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The identifier of a group. |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **orderBy** | **String**| A string to control the order of the entities returned. | [optional]
 **where** | **String** | A string to restrict the returned objects by using a predicate. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the group. The following optional fields can be requested: parentIds and zones. | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**GroupMemberPaging**](GroupMemberPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addGroupMember"></a>
# **addGroupMember**
> GroupMemberEntry addGroupMember(groupId, groupMemberBody, opts)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Create a group membership (for an existing person or group) within a group **groupId**.

If the added group was previously a root group then it becomes a non-root group since it now has a parent.

It is an error to specify an **id** that does not exist.

You must have admin rights to create a group membership.

### Example
```javascript

this.alfrescoJsApi.core.groupsApi()

var groupId = 'groupId_example'; // The identifier of a group.

var groupMemberBody = new this.alfrescoJsApi.core.GroupMember(); // The group membership to add (person or sub-group).

var opts = {
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */
};
this.alfrescoJsApi.core.groupsApi.addGroupMember(groupId, groupMemberBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The identifier of a group. |
 **groupMemberBody** | [**GroupMember**](GroupMember.md) | The group membership to add (person or sub-group). |
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**GroupMemberEntry**](GroupMemberEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


<a name="deleteGroupMember"></a>
# **deleteGroupMember**
> deleteGroupMember(groupId, groupMemberId)

**Note**: this endpoint is available in Alfresco 5.2.1 and newer versions.

Delete group member **groupMemberId** (person or sub-group) from group **groupId**.

Removing a group member does not delete the person or sub-group itself.

If a removed sub-group no longer has any parent groups then it becomes a root group.

You must have admin rights to delete a group membership.

### Example
```javascript

this.alfrescoJsApi.core.groupsApi()

var groupId = "groupId_example"; // {String} The identifier of a group.

var groupMemberId = "groupMemberId_example"; // {String} The identifier of a person or group.

this.alfrescoJsApi.core.groupsApi.deleteGroupMember(groupId, groupMemberId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **String**| The identifier of a group. |
 **groupMemberId** | **String**| The identifier of a person or group. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
