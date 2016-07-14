# ActivitiPublicRestApi.GroupsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getGroupsUsingGET1**](GroupsApi.md#getGroupsUsingGET1) | **GET** /api/enterprise/groups | List groups
[**getUsersForGroupUsingGET**](GroupsApi.md#getUsersForGroupUsingGET) | **GET** /api/enterprise/groups/{groupId}/users | List users member of a specific group


<a name="getGroupsUsingGET1"></a>
# **getGroupsUsingGET1**
> ResultListDataRepresentation getGroupsUsingGET1(opts)

List groups

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.GroupsApi();

var opts = { 
  'filter': "filter_example", // String | filter
  'groupId': 789, // Integer | groupId
  'externalId': "externalId_example", // String | externalId
  'externalIdCaseInsensitive': "externalIdCaseInsensitive_example", // String | externalIdCaseInsensitive
  'tenantId': 789 // Integer | tenantId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getGroupsUsingGET1(opts, callback);
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

<a name="getUsersForGroupUsingGET"></a>
# **getUsersForGroupUsingGET**
> ResultListDataRepresentation getUsersForGroupUsingGET(groupId)

List users member of a specific group

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.GroupsApi();

var groupId = 789; // Integer | groupId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersForGroupUsingGET(groupId, callback);
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

