# ActivitiPublicRestApi.UserApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeActionUsingPOST**](UserApi.md#executeActionUsingPOST) | **POST** /api/enterprise/users/{userId} | Execute an action for a specific user
[**getProfilePictureUsingGET1**](UserApi.md#getProfilePictureUsingGET1) | **GET** /api/enterprise/users/{userId}/picture | Retrieve user profile picture
[**getUserUsingGET2**](UserApi.md#getUserUsingGET2) | **GET** /api/enterprise/users/{userId} | Retrieve user information
[**getUsersUsingGET2**](UserApi.md#getUsersUsingGET2) | **GET** /api/enterprise/users | List users
[**requestPasswordResetUsingPOST**](UserApi.md#requestPasswordResetUsingPOST) | **POST** /api/enterprise/idm/passwords | Request password reset 
[**updateUserUsingPUT**](UserApi.md#updateUserUsingPUT) | **PUT** /api/enterprise/users/{userId} | Update user information


<a name="executeActionUsingPOST"></a>
# **executeActionUsingPOST**
> executeActionUsingPOST(userId, actionRequest)

Execute an action for a specific user

Typical action is updating/reset password

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserApi();

var userId = 789; // Integer | userId

var actionRequest = new ActivitiPublicRestApi.UserActionRepresentation(); // UserActionRepresentation | actionRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.executeActionUsingPOST(userId, actionRequest, callback);
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

<a name="getProfilePictureUsingGET1"></a>
# **getProfilePictureUsingGET1**
> getProfilePictureUsingGET1(userId)

Retrieve user profile picture

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserApi();

var userId = 789; // Integer | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProfilePictureUsingGET1(userId, callback);
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

<a name="getUserUsingGET2"></a>
# **getUserUsingGET2**
> UserRepresentation getUserUsingGET2(userId)

Retrieve user information

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserApi();

var userId = 789; // Integer | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET2(userId, callback);
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

<a name="getUsersUsingGET2"></a>
# **getUsersUsingGET2**
> ResultListDataRepresentation getUsersUsingGET2(opts)

List users

A common use case is that a user wants to select another user (eg. when assigning a task) or group.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserApi();

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

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsingGET2(opts, callback);
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

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> requestPasswordResetUsingPOST(resetPassword)

Request password reset 

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserApi();

var resetPassword = new ActivitiPublicRestApi.ResetPasswordRepresentation(); // ResetPasswordRepresentation | resetPassword


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.requestPasswordResetUsingPOST(resetPassword, callback);
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

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> UserRepresentation updateUserUsingPUT(userId, userRequest)

Update user information

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserApi();

var userId = 789; // Integer | userId

var userRequest = new ActivitiPublicRestApi.UserRepresentation(); // UserRepresentation | userRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserUsingPUT(userId, userRequest, callback);
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

