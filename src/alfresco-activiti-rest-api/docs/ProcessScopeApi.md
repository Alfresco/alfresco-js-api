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

var processScopesRequest = new this.alfrescoJsApi.activiti.ProcessScopesRequestRepresentation(); // ProcessScopesRequestRepresentation | processScopesRequest

this.alfrescoJsApi.activiti.processScopeApi.getRuntimeProcessScopes(processScopesRequest);
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

