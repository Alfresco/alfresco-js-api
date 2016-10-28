# ActivitiPublicRestApi.ModelJsonBpmnApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricEditorDisplayJsonClient**](ModelJsonBpmnApi.md#getHistoricEditorDisplayJsonClient) | **GET** /app/rest/process-instances/{processModelId}/history/{processModelHistoryId}/model-json | Export a previous process definition model to JSON
[**getEditorDisplayJsonClient**](ModelJsonBpmnApi.md#getEditorDisplayJsonClient) | **GET** /app/rest/process-instances/{processModelId}/model-json | Export a process definition model to JSON


<a name="getEditorDisplayJsonClient"></a>
# **getEditorDisplayJsonClient**
> getEditorDisplayJsonClient(processModelId, processModelHistoryId)

Export a previous process definition model to JSON

### Example
```javascript

var processModelId = 789; // Integer | processModelId

var processModelHistoryId = 789; // Integer | processModelHistoryId

this.alfrescoJsApi.activiti.modelJsonBpmnApi.getHistoricEditorDisplayJsonClient(processModelId, processModelHistoryId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **Integer**| processModelId | 
 **processModelHistoryId** | **Integer**| processModelHistoryId | 

### Return type

JSON definition model 

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEditorDisplayJsonClient"></a>
# **getEditorDisplayJsonClient**
> getEditorDisplayJsonClient(processModelId)

Export a process definition model to a BPMN 2.0 xml file

### Example
```javascript

var processModelId = 789; // Integer | processModelId

this.alfrescoJsApi.activiti.modelJsonBpmnApi.getEditorDisplayJsonClient(processModelId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **Integer**| processModelId | 

### Return type

JSON definition model 

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

