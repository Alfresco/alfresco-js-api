# .ProcessscopesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRuntimeProcessScopesUsingPOST**](ProcessscopesApi.md#getRuntimeProcessScopesUsingPOST) | **POST** /enterprise/process-scopes | List runtime process scopes


<a name="getRuntimeProcessScopesUsingPOST"></a>
# **getRuntimeProcessScopesUsingPOST**
> any getRuntimeProcessScopesUsingPOST(processScopesRequest)

List runtime process scopes

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessscopesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuntimeProcessScopesUsingPOST(processScopesRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processScopesRequest** | [**ProcessScopesRequestRepresentation**](ProcessScopesRequestRepresentation.md)| processScopesRequest | 

### Return type

[**any**](ProcessScopeRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

