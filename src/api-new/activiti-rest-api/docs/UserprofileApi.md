# .UserprofileApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePasswordUsingPOST**](UserprofileApi.md#changePasswordUsingPOST) | **POST** /enterprise/profile-password | Change user password
[**getProfilePictureUsingGET**](UserprofileApi.md#getProfilePictureUsingGET) | **GET** /enterprise/profile-picture | Retrieve user profile picture
[**getProfileUsingGET**](UserprofileApi.md#getProfileUsingGET) | **GET** /enterprise/profile | Get user profile
[**updateProfile**](UserprofileApi.md#updateProfile) | **POST** /enterprise/profile | Update user profile
[**uploadProfilePictureUsingPOST**](UserprofileApi.md#uploadProfilePictureUsingPOST) | **POST** /enterprise/profile-picture | Change user profile picture


<a name="changePasswordUsingPOST"></a>
# **changePasswordUsingPOST**
> changePasswordUsingPOST(changePasswordRepresentation)

Change user password

### Example
```javascript
import UserprofileApi from 'UserprofileApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userprofileApi = new UserprofileApi(this.alfrescoApi);


userprofileApi.changePasswordUsingPOST(changePasswordRepresentation).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordRepresentation** | [**ChangePasswordRepresentation**](ChangePasswordRepresentation.md)| changePasswordRepresentation | 

### Return type

null (empty response body)

<a name="getProfilePictureUsingGET"></a>
# **getProfilePictureUsingGET**
> Blob getProfilePictureUsingGET()

Retrieve user profile picture

Generally returns an image file

### Example
```javascript
import UserprofileApi from 'UserprofileApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userprofileApi = new UserprofileApi(this.alfrescoApi);

userprofileApi.getProfilePictureUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**Blob**

<a name="getProfileUsingGET"></a>
# **getProfileUsingGET**
> UserRepresentation getProfileUsingGET()

Get user profile

This operation returns account information for the current user. This is useful to get the name, email, the groups that the user is part of, the user picture, etc.

### Example
```javascript
import UserprofileApi from 'UserprofileApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userprofileApi = new UserprofileApi(this.alfrescoApi);

userprofileApi.getProfileUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserRepresentation**](UserRepresentation.md)

<a name="updateProfile"></a>
# **updateProfile**
> UserRepresentation updateProfile(userRepresentation)

Update user profile

Only a first name, last name, email and company can be updated

### Example
```javascript
import UserprofileApi from 'UserprofileApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userprofileApi = new UserprofileApi(this.alfrescoApi);


userprofileApi.updateProfile(userRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

<a name="uploadProfilePictureUsingPOST"></a>
# **uploadProfilePictureUsingPOST**
> ImageUploadRepresentation uploadProfilePictureUsingPOST(file)

Change user profile picture

### Example
```javascript
import UserprofileApi from 'UserprofileApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userprofileApi = new UserprofileApi(this.alfrescoApi);


userprofileApi.uploadProfilePictureUsingPOST(file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Blob**| file | 

### Return type

[**ImageUploadRepresentation**](ImageUploadRepresentation.md)

