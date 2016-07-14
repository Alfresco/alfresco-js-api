# ActivitiPublicRestApi.ProcessScopeApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRuntimeProcessScopesUsingPOST**](ProcessScopeApi.md#getRuntimeProcessScopesUsingPOST) | **POST** /api/enterprise/process-scopes | getRuntimeProcessScopes


<a name="getRuntimeProcessScopesUsingPOST"></a>
# **getRuntimeProcessScopesUsingPOST**
> [ProcessScopeRepresentation] getRuntimeProcessScopesUsingPOST(processScopesRequest)

getRuntimeProcessScopes

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessScopeApi();

var processScopesRequest = new ActivitiPublicRestApi.ProcessScopesRequestRepresentation(); // ProcessScopesRequestRepresentation | processScopesRequest


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

[**[ProcessScopeRepresentation]**](ProcessScopeRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

