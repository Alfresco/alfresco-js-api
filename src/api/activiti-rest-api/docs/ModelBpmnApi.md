# ActivitiPublicRestApi.ModelBpmnApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricProcessModelBpmn20Xml**](ModelBpmnApi.md#getHistoricProcessModelBpmn20Xml) | **GET** /api/enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a previous process definition model to a BPMN 2.0 xml file
[**getProcessModelBpmn20Xml**](ModelBpmnApi.md#getProcessModelBpmn20Xml) | **GET** /api/enterprise/models/{processModelId}/bpmn20 | Export a process definition model to a BPMN 2.0 xml file


<a name="getHistoricProcessModelBpmn20Xml"></a>
# **getHistoricProcessModelBpmn20Xml**
> getHistoricProcessModelBpmn20Xml(processModelId, processModelHistoryId)

Export a previous process definition model to a BPMN 2.0 xml file

### Example
```javascript

var processModelId = 789; // Integer | processModelId

var processModelHistoryId = 789; // Integer | processModelHistoryId

this.alfrescoJsApi.activiti.modelBpmnApi.getHistoricProcessModelBpmn20Xml(processModelId, processModelHistoryId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **Integer**| processModelId | 
 **processModelHistoryId** | **Integer**| processModelHistoryId | 

### Return type

JSON

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessModelBpmn20Xml"></a>
# **getProcessModelBpmn20Xml**
> getProcessModelBpmn20Xml(processModelId)

Export a process definition model to a BPMN 2.0 xml file

### Example
```javascript

var processModelId = 789; // Integer | processModelId

this.alfrescoJsApi.activiti.modelBpmnApi.getProcessModelBpmn20Xml(processModelId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **Integer**| processModelId | 

### Return type

JSON

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

