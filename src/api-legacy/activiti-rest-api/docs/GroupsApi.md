# ActivitiPublicRestApi.GroupsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroups**](GroupsApi.md#getGroups) | **GET** /api/enterprise/groups | List groups
[**getUsersForGroup**](GroupsApi.md#getUsersForGroup) | **GET** /api/enterprise/groups/{groupId}/users | List users member of a specific group


<a name="getGroups"></a>
# **getGroups**
> ResultListDataRepresentation getGroups(opts)

List groups

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'groupId': 789, // Integer | groupId
  'externalId': "externalId_example", // String | externalId
  'externalIdCaseInsensitive': "externalIdCaseInsensitive_example", // String | externalIdCaseInsensitive
  'tenantId': 789 // Integer | tenantId
};

this.alfrescoJsApi.activiti.groupsApi.getGroups(opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| filter | [optional] 
 **groupId** | **Integer**| groupId | [optional] 
 **externalId** | **String**| externalId | [optional] 
 **externalIdCaseInsensitive** | **String**| externalIdCaseInsensitive | [optional] 
 **tenantId** | **Integer**| tenantId | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersForGroup"></a>
# **getUsersForGroup**
> ResultListDataRepresentation getUsersForGroup(groupId)

List users member of a specific group

### Example
```javascript

var groupId = 789; // Integer | groupId

this.alfrescoJsApi.activiti.groupsApi.getUsersForGroup(groupId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **groupId** | **Integer**| groupId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

