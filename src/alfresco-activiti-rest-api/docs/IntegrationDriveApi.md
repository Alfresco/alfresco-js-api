# ActivitiPublicRestApi.IntegrationDriveApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET2**](IntegrationDriveApi.md#confirmAuthorisationUsingGET2) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
[**getFilesUsingGET1**](IntegrationDriveApi.md#getFilesUsingGET1) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders


<a name="confirmAuthorisationUsingGET2"></a>
# **confirmAuthorisationUsingGET2**
> confirmAuthorisationUsingGET2(code)

Drive Authorization

Returns Drive Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationDriveApi();

var code = "code_example"; // String | code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmAuthorisationUsingGET2(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **String**| code | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html, application/json

<a name="getFilesUsingGET1"></a>
# **getFilesUsingGET1**
> ResultListDataRepresentation getFilesUsingGET1(opts)

List file &amp; folders

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationDriveApi();

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example", // String | parent
  'currentFolderOnly': true // Boolean | currentFolderOnly
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFilesUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| filter | [optional] 
 **parent** | **String**| parent | [optional] 
 **currentFolderOnly** | **Boolean**| currentFolderOnly | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

