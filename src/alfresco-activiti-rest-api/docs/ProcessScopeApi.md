# ActivitiPublicRestApi.ProcessScopeApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRuntimeProcessScopes**](ProcessScopeApi.md#getRuntimeProcessScopes) | **POST** /api/enterprise/process-scopes | getRuntimeProcessScopes


<a name="getRuntimeProcessScopes"></a>
# **getRuntimeProcessScopes**
> [ProcessScopeRepresentation] getRuntimeProcessScopes(processScopesRequest)

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
apiInstance.getRuntimeProcessScopes(processScopesRequest, callback);
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

