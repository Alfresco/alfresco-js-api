# .ProcessscopesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getRuntimeProcessScopesUsingPOST**](ProcessscopesApi.md#getRuntimeProcessScopesUsingPOST) | **POST** /enterprise/process-scopes | List runtime process scopes


<a name="getRuntimeProcessScopesUsingPOST"></a>
# **getRuntimeProcessScopesUsingPOST**
> Array<ProcessScopeRepresentation> getRuntimeProcessScopesUsingPOST(processScopesRequest)

List runtime process scopes

### Example
```javascript
import ProcessscopesApi from 'ProcessscopesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processscopesApi = new ProcessscopesApi(this.alfrescoApi);


processscopesApi.getRuntimeProcessScopesUsingPOST(processScopesRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processScopesRequest** | [**ProcessScopesRequestRepresentation**](ProcessScopesRequestRepresentation.md)| processScopesRequest | 

### Return type

[**Array&lt;ProcessScopeRepresentation&gt;**](ProcessScopeRepresentation.md)

