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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserprofileApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.changePasswordUsingPOST(changePasswordRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **changePasswordRepresentation** | [**ChangePasswordRepresentation**](ChangePasswordRepresentation.md)| changePasswordRepresentation | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfilePictureUsingGET"></a>
# **getProfilePictureUsingGET**
> Blob getProfilePictureUsingGET()

Retrieve user profile picture

Generally returns an image file

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserprofileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProfilePictureUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Blob**

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, */*

<a name="getProfileUsingGET"></a>
# **getProfileUsingGET**
> UserRepresentation getProfileUsingGET()

Get user profile

This operation returns account information for the current user. This is useful to get the name, email, the groups that the user is part of, the user picture, etc.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserprofileApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProfileUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProfile"></a>
# **updateProfile**
> UserRepresentation updateProfile(userRepresentation)

Update user profile

Only a first name, last name, email and company can be updated

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserprofileApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProfile(userRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userRepresentation** | [**UserRepresentation**](UserRepresentation.md)| userRepresentation | 

### Return type

[**UserRepresentation**](UserRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadProfilePictureUsingPOST"></a>
# **uploadProfilePictureUsingPOST**
> ImageUploadRepresentation uploadProfilePictureUsingPOST(file)

Change user profile picture

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserprofileApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadProfilePictureUsingPOST(file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Blob**| file | 

### Return type

[**ImageUploadRepresentation**](ImageUploadRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

