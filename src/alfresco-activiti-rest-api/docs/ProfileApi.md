# ActivitiPublicRestApi.ProfileApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**changePassword**](ProfileApi.md#changePassword) | **POST** /api/enterprise/profile-password | Change user password
[**getProfilePicture**](ProfileApi.md#getProfilePicture) | **GET** /api/enterprise/profile-picture | Retrieve user profile picture
[**getProfile**](ProfileApi.md#getProfile) | **GET** /api/enterprise/profile | Retrieve user information
[**updateProfile**](ProfileApi.md#updateProfile) | **POST** /api/enterprise/profile | Update user information
[**uploadProfilePicture**](ProfileApi.md#uploadProfilePicture) | **POST** /api/enterprise/profile-picture | Change user profile picture


<a name="changePassword"></a>
# **changePassword**
> changePassword(changePasswordRepresentation)

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
apiInstance.changePassword(changePasswordRepresentation, callback);
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

<a name="getProfilePicture"></a>
# **getProfilePicture**
> File getProfilePicture()

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
apiInstance.getProfilePicture(callback);
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

<a name="getProfile"></a>
# **getProfile**
> UserRepresentation getProfile()

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
apiInstance.getProfile(callback);
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

<a name="uploadProfilePicture"></a>
# **uploadProfilePicture**
> ImageUploadRepresentation uploadProfilePicture(file)

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
apiInstance.uploadProfilePicture(file, callback);
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

