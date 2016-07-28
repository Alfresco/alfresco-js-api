# ActivitiPublicRestApi.UsersWorkflowApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getUsers**](UsersWorkflowApi.md#getUsers) | **GET** /api/enterprise/users | List users


<a name="getUsers"></a>
# **getUsers**
> ResultListDataRepresentation getUsers(opts)

List users

A common use case is that a user wants to select another user (eg. when assigning a task) or group.

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'email': "email_example", // String | email
  'externalId': "externalId_example", // String | externalId
  'externalIdCaseInsensitive': "externalIdCaseInsensitive_example", // String | externalIdCaseInsensitive
  'excludeTaskId': "excludeTaskId_example", // String | excludeTaskId
  'excludeProcessId': "excludeProcessId_example", // String | excludeProcessId
  'groupId': 789, // Integer | groupId
  'tenantId': 789 // Integer | tenantId
};

this.alfrescoJsApi.activiti.usersWorkflowApi.getUsers(opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| filter | [optional] 
 **email** | **String**| email | [optional] 
 **externalId** | **String**| externalId | [optional] 
 **externalIdCaseInsensitive** | **String**| externalIdCaseInsensitive | [optional] 
 **excludeTaskId** | **String**| excludeTaskId | [optional] 
 **excludeProcessId** | **String**| excludeProcessId | [optional] 
 **groupId** | **Integer**| groupId | [optional] 
 **tenantId** | **Integer**| tenantId | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

