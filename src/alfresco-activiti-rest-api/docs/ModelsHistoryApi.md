# ActivitiPublicRestApi.ModelsHistoryApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getModelHistoryCollection**](ModelsHistoryApi.md#getModelHistoryCollection) | **GET** /api/enterprise/models/{modelId}/history | To get the version information for a model
[**getProcessModelHistory**](ModelsHistoryApi.md#getProcessModelHistory) | **GET** /api/enterprise/models/{modelId}/history/{modelHistoryId} | To get a particular older version of a model


<a name="getModelHistoryCollection"></a>
# **getModelHistoryCollection**
> ResultListDataRepresentation getModelHistoryCollection(modelId, opts)

To get the version information for a model

### Example
```javascript

var modelId = 789; // Integer | modelId

var opts = { 
  'includeLatestVersion': true // Boolean | includeLatestVersion
};

this.alfrescoJsApi.activiti.modelsHistoryApi.getModelHistoryCollection(modelId, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **includeLatestVersion** | **Boolean**| includeLatestVersion | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessModelHistory"></a>
# **getProcessModelHistory**
> ModelRepresentation getProcessModelHistory(modelId, modelHistoryId)

To get a particular older version of a model

### Example
```javascript

var modelId = 789; // Integer | modelId

var modelHistoryId = 789; // Integer | modelHistoryId

this.alfrescoJsApi.activiti.modelsHistoryApi.getProcessModelHistory(modelId, modelHistoryId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **Integer**| modelId | 
 **modelHistoryId** | **Integer**| modelHistoryId | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

