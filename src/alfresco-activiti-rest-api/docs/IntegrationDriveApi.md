# ActivitiPublicRestApi.IntegrationDriveApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisation**](IntegrationDriveApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
[**getFiles**](IntegrationDriveApi.md#getFiles) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders


<a name="confirmAuthorisation"></a>
# **confirmAuthorisation**
> confirmAuthorisation(code)

Drive Authorization

Returns Drive Oauth HTML Page

### Example
```javascript

var code = "code_example"; // String | code

this.alfrescoJsApi.activiti.integrationDriveApi.confirmAuthorisation(code);
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

<a name="getFiles"></a>
# **getFiles**
> ResultListDataRepresentation getFiles(opts)

List file &amp; folders

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example", // String | parent
  'currentFolderOnly': true // Boolean | currentFolderOnly
};

this.alfrescoJsApi.activiti.integrationDriveApi.getFiles(opts);
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

