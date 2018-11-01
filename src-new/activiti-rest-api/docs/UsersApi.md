# .UsersApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**executeActionUsingPOST**](UsersApi.md#executeActionUsingPOST) | **POST** /enterprise/users/{userId} | Execute an action for a specific user
[**getProfilePictureUsingGET1**](UsersApi.md#getProfilePictureUsingGET1) | **GET** /enterprise/users/{userId}/picture | Stream user profile picture
[**getUserUsingGET1**](UsersApi.md#getUserUsingGET1) | **GET** /enterprise/users/{userId} | Get a user
[**getUsersUsingGET1**](UsersApi.md#getUsersUsingGET1) | **GET** /enterprise/users | Query users
[**requestPasswordResetUsingPOST**](UsersApi.md#requestPasswordResetUsingPOST) | **POST** /enterprise/idm/passwords | Request a password reset
[**updateUserUsingPUT**](UsersApi.md#updateUserUsingPUT) | **PUT** /enterprise/users/{userId} | Update a user


<a name="executeActionUsingPOST"></a>
# **executeActionUsingPOST**
> executeActionUsingPOST(userIdactionRequest)

Execute an action for a specific user

Typical action is updating/reset password

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UsersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.executeActionUsingPOST(userIdactionRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **actionRequest** | [**UserActionRepresentation**](UserActionRepresentation.md)| actionRequest | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfilePictureUsingGET1"></a>
# **getProfilePictureUsingGET1**
> getProfilePictureUsingGET1(userId)

Stream user profile picture

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UsersApi();


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
 **userId** | **number**| userId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

<a name="getUserUsingGET1"></a>
# **getUserUsingGET1**
> UserRepresentation getUserUsingGET1(userId)

Get a user

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UsersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserUsingGET1(userId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUsersUsingGET1"></a>
# **getUsersUsingGET1**
> ResultListDataRepresentationLightUserRepresentation getUsersUsingGET1(opts)

Query users

A common use case is that a user wants to select another user (eg. when assigning a task) or group.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UsersApi();

var opts = { 
  'filter': filter_example // string | filter
  'email': email_example // string | email
  'externalId': externalId_example // string | externalId
  'externalIdCaseInsensitive': externalIdCaseInsensitive_example // string | externalIdCaseInsensitive
  'excludeTaskId': excludeTaskId_example // string | excludeTaskId
  'excludeProcessId': excludeProcessId_example // string | excludeProcessId
  'groupId': 789 // number | groupId
  'tenantId': 789 // number | tenantId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUsersUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| filter | [optional] 
 **email** | **string**| email | [optional] 
 **externalId** | **string**| externalId | [optional] 
 **externalIdCaseInsensitive** | **string**| externalIdCaseInsensitive | [optional] 
 **excludeTaskId** | **string**| excludeTaskId | [optional] 
 **excludeProcessId** | **string**| excludeProcessId | [optional] 
 **groupId** | **number**| groupId | [optional] 
 **tenantId** | **number**| tenantId | [optional] 

### Return type

[**ResultListDataRepresentationLightUserRepresentation**](ResultListDataRepresentationLightUserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> requestPasswordResetUsingPOST(resetPassword)

Request a password reset

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UsersApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> UserRepresentation updateUserUsingPUT(userIduserRequest)

Update a user

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UsersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserUsingPUT(userIduserRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **userRequest** | [**UserRepresentation**](UserRepresentation.md)| userRequest | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

