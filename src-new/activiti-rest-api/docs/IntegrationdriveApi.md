# .IntegrationdriveApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET2**](IntegrationdriveApi.md#confirmAuthorisationUsingGET2) | **GET** /enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
[**getFilesUsingGET1**](IntegrationdriveApi.md#getFilesUsingGET1) | **GET** /enterprise/integration/google-drive/files | List files and folders


<a name="confirmAuthorisationUsingGET2"></a>
# **confirmAuthorisationUsingGET2**
> confirmAuthorisationUsingGET2()

Drive Authorization

Returns Drive OAuth HTML Page

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationdriveApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmAuthorisationUsingGET2(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

<a name="getFilesUsingGET1"></a>
# **getFilesUsingGET1**
> ResultListDataRepresentationGoogleDriveContent getFilesUsingGET1(opts)

List files and folders

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationdriveApi();

var opts = { 
  'filter': filter_example // string | filter
  'parent': parent_example // string | parent
  'currentFolderOnly': true // boolean | currentFolderOnly
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
 **filter** | **string**| filter | [optional] 
 **parent** | **string**| parent | [optional] 
 **currentFolderOnly** | **boolean**| currentFolderOnly | [optional] 

### Return type

[**ResultListDataRepresentationGoogleDriveContent**](ResultListDataRepresentationGoogleDriveContent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

