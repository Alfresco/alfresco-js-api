# ActivitiPublicRestApi.ProcessDefinitionsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessDefinitions**](ProcessDefinitionsApi.md#getProcessDefinitions) | **GET** /api/enterprise/process-definitions | Retrieve a list of process definitions


<a name="getProcessDefinitions"></a>
# **getProcessDefinitions**
> ResultListDataRepresentation getProcessDefinitions(opts)

Retrieve a list of process definitions

Get a list of process definitions (visible within the tenant of the user)

### Example
```javascript
var opts = { 
  'latest': true, // Boolean | latest
  'appDefinitionId': 789 // Integer | appDefinitionId
};

this.alfrescoJsApi.activiti.processDefinitionsApi.getProcessDefinitions(opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latest** | **Boolean**| latest | [optional] 
 **appDefinitionId** | **Integer**| appDefinitionId | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

