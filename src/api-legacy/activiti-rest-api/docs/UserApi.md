# ActivitiPublicRestApi.UserApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeAction**](UserApi.md#executeAction) | **POST** /api/enterprise/users/{userId} | Execute an action for a specific user
[**getProfilePicture**](UserApi.md#getProfilePicture) | **GET** /api/enterprise/users/{userId}/picture | Retrieve user profile picture
[**getUser**](UserApi.md#getUser) | **GET** /api/enterprise/users/{userId} | Retrieve user information
[**getUsers**](UserApi.md#getUsers) | **GET** /api/enterprise/users | List users
[**requestPasswordReset**](UserApi.md#requestPasswordReset) | **POST** /api/enterprise/idm/passwords | Request password reset 
[**updateUser**](UserApi.md#updateUser) | **PUT** /api/enterprise/users/{userId} | Update user information


<a name="executeAction"></a>
# **executeAction**
> executeAction(userId, actionRequest)

Execute an action for a specific user

Typical action is updating/reset password

### Example
```javascript

var userId = 789; // Integer | userId

var actionRequest = new this.alfrescoJsApi.activiti.UserActionRepresentation(); // UserActionRepresentation | actionRequest

this.alfrescoJsApi.activiti.userApi.executeAction(userId, actionRequest);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **actionRequest** | [**UserActionRepresentation**](UserActionRepresentation.md)| actionRequest | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfilePicture"></a>
# **getProfilePicture**
> getProfilePicture(userId)

Retrieve user profile picture

### Example
```javascript

var userId = 789; // Integer | userId

this.alfrescoJsApi.activiti.userApi.getProfilePicture(userId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserProfilePictureUrl"></a>
# **getUserProfilePictureUrl**
> getUserProfilePictureUrl(userId)

Retrieve user profile picture

### Example
```javascript

var userId = 789; // Integer | userId

this.alfrescoJsApi.activiti.userApi.getUserProfilePictureUrl(userId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **String**| userId | 

### Return type

string 

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json 

<a name="getUser"></a>
# **getUser**
> UserRepresentation getUser(userId)

Retrieve user information

### Example
```javascript

var userId = 789; // Integer | userId


this.alfrescoJsApi.activiti.userApi.getUser(userId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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

this.alfrescoJsApi.activiti.userApi.getUsers(opts);
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

<a name="requestPasswordReset"></a>
# **requestPasswordReset**
> requestPasswordReset(resetPassword)

Request password reset 

### Example
```javascript

var resetPassword = new this.alfrescoJsApi.activiti.ResetPasswordRepresentation(); // ResetPasswordRepresentation | resetPassword

this.alfrescoJsApi.activiti.userApi.requestPasswordReset(resetPassword);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPassword** | [**ResetPasswordRepresentation**](ResetPasswordRepresentation.md)| resetPassword | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUser"></a>
# **updateUser**
> UserRepresentation updateUser(userId, userRequest)

Update user information

### Example
```javascript

var userId = 789; // Integer | userId

var userRequest = new this.alfrescoJsApi.activiti.UserRepresentation(); // UserRepresentation | userRequest

this.alfrescoJsApi.activiti.userApi.updateUser(userId, userRequest);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **userRequest** | [**UserRepresentation**](UserRepresentation.md)| userRequest | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

