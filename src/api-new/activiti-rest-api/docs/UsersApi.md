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
import UsersApi from 'UsersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let usersApi = new UsersApi(this.alfrescoApi);


usersApi.executeActionUsingPOST(userIdactionRequest).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **actionRequest** | [**UserActionRepresentation**](UserActionRepresentation.md)| actionRequest | 

### Return type

null (empty response body)

<a name="getProfilePictureUsingGET1"></a>
# **getProfilePictureUsingGET1**
> getProfilePictureUsingGET1(userId)

Stream user profile picture

### Example
```javascript
import UsersApi from 'UsersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let usersApi = new UsersApi(this.alfrescoApi);


usersApi.getProfilePictureUsingGET1(userId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 

### Return type

null (empty response body)

<a name="getUserUsingGET1"></a>
# **getUserUsingGET1**
> UserRepresentation getUserUsingGET1(userId)

Get a user

### Example
```javascript
import UsersApi from 'UsersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let usersApi = new UsersApi(this.alfrescoApi);


usersApi.getUserUsingGET1(userId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

<a name="getUsersUsingGET1"></a>
# **getUsersUsingGET1**
> ResultListDataRepresentationLightUserRepresentation getUsersUsingGET1(opts)

Query users

A common use case is that a user wants to select another user (eg. when assigning a task) or group.

### Example
```javascript
import UsersApi from 'UsersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let usersApi = new UsersApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example //  | filter
  'email': email_example //  | email
  'externalId': externalId_example //  | externalId
  'externalIdCaseInsensitive': externalIdCaseInsensitive_example //  | externalIdCaseInsensitive
  'excludeTaskId': excludeTaskId_example //  | excludeTaskId
  'excludeProcessId': excludeProcessId_example //  | excludeProcessId
  'groupId': 789 //  | groupId
  'tenantId': 789 //  | tenantId
};

usersApi.getUsersUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="requestPasswordResetUsingPOST"></a>
# **requestPasswordResetUsingPOST**
> requestPasswordResetUsingPOST(resetPassword)

Request a password reset

### Example
```javascript
import UsersApi from 'UsersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let usersApi = new UsersApi(this.alfrescoApi);


usersApi.requestPasswordResetUsingPOST(resetPassword).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resetPassword** | [**ResetPasswordRepresentation**](ResetPasswordRepresentation.md)| resetPassword | 

### Return type

null (empty response body)

<a name="updateUserUsingPUT"></a>
# **updateUserUsingPUT**
> UserRepresentation updateUserUsingPUT(userIduserRequest)

Update a user

### Example
```javascript
import UsersApi from 'UsersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let usersApi = new UsersApi(this.alfrescoApi);


usersApi.updateUserUsingPUT(userIduserRequest).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **userRequest** | [**UserRepresentation**](UserRepresentation.md)| userRequest | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

