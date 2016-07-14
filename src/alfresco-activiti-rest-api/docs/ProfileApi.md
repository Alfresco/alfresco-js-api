# ActivitiPublicRestApi.ProfileApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePasswordUsingPOST**](ProfileApi.md#changePasswordUsingPOST) | **POST** /api/enterprise/profile-password | Change user password
[**getProfilePictureUsingGET**](ProfileApi.md#getProfilePictureUsingGET) | **GET** /api/enterprise/profile-picture | Retrieve user profile picture
[**getProfileUsingGET**](ProfileApi.md#getProfileUsingGET) | **GET** /api/enterprise/profile | Retrieve user information
[**updateProfile**](ProfileApi.md#updateProfile) | **POST** /api/enterprise/profile | Update user information
[**uploadProfilePictureUsingPOST**](ProfileApi.md#uploadProfilePictureUsingPOST) | **POST** /api/enterprise/profile-picture | Change user profile picture


<a name="changePasswordUsingPOST"></a>
# **changePasswordUsingPOST**
> changePasswordUsingPOST(changePasswordRepresentation)

Change user password

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProfileApi();

var changePasswordRepresentation = new ActivitiPublicRestApi.ChangePasswordRepresentation(); // ChangePasswordRepresentation | changePasswordRepresentation


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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfilePictureUsingGET"></a>
# **getProfilePictureUsingGET**
> File getProfilePictureUsingGET()

Retrieve user profile picture

Generally returns an image file

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProfileApi();

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

**File**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProfileUsingGET"></a>
# **getProfileUsingGET**
> UserRepresentation getProfileUsingGET()

Retrieve user information

 This is useful to get the name, email, the groups that the user is part of, the user picture, etc.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProfileApi();

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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProfile"></a>
# **updateProfile**
> UserRepresentation updateProfile(userRepresentation)

Update user information

Only a first name, last name, email and company can be updated

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProfileApi();

var userRepresentation = new ActivitiPublicRestApi.UserRepresentation(); // UserRepresentation | userRepresentation


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

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadProfilePictureUsingPOST"></a>
# **uploadProfilePictureUsingPOST**
> ImageUploadRepresentation uploadProfilePictureUsingPOST(file)

Change user profile picture

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProfileApi();

var file = "/path/to/file.txt"; // File | file


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
 **file** | **File**| file | 

### Return type

[**ImageUploadRepresentation**](ImageUploadRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

