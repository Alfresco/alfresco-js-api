# ActivitiPublicRestApi.ModelBpmnApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricProcessModelBpmn20XmlUsingGET**](ModelBpmnApi.md#getHistoricProcessModelBpmn20XmlUsingGET) | **GET** /api/enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a previous process definition model to a BPMN 2.0 xml file
[**getProcessModelBpmn20XmlUsingGET**](ModelBpmnApi.md#getProcessModelBpmn20XmlUsingGET) | **GET** /api/enterprise/models/{processModelId}/bpmn20 | Export a process definition model to a BPMN 2.0 xml file


<a name="getHistoricProcessModelBpmn20XmlUsingGET"></a>
# **getHistoricProcessModelBpmn20XmlUsingGET**
> getHistoricProcessModelBpmn20XmlUsingGET(processModelId, processModelHistoryId)

Export a previous process definition model to a BPMN 2.0 xml file

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelBpmnApi();

var processModelId = 789; // Integer | processModelId

var processModelHistoryId = 789; // Integer | processModelHistoryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHistoricProcessModelBpmn20XmlUsingGET(processModelId, processModelHistoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **Integer**| processModelId | 
 **processModelHistoryId** | **Integer**| processModelHistoryId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessModelBpmn20XmlUsingGET"></a>
# **getProcessModelBpmn20XmlUsingGET**
> getProcessModelBpmn20XmlUsingGET(processModelId)

Export a process definition model to a BPMN 2.0 xml file

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ModelBpmnApi();

var processModelId = 789; // Integer | processModelId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getProcessModelBpmn20XmlUsingGET(processModelId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **Integer**| processModelId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

