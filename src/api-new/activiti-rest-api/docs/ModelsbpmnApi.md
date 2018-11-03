# .ModelsbpmnApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricProcessModelBpmn20XmlUsingGET**](ModelsbpmnApi.md#getHistoricProcessModelBpmn20XmlUsingGET) | **GET** /enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a historic version of a process definition as BPMN 2.0 XML
[**getProcessModelBpmn20XmlUsingGET**](ModelsbpmnApi.md#getProcessModelBpmn20XmlUsingGET) | **GET** /enterprise/models/{processModelId}/bpmn20 | Export a process definition as BPMN 2.0 XML


<a name="getHistoricProcessModelBpmn20XmlUsingGET"></a>
# **getHistoricProcessModelBpmn20XmlUsingGET**
> getHistoricProcessModelBpmn20XmlUsingGET(processModelIdprocessModelHistoryId)

Export a historic version of a process definition as BPMN 2.0 XML

### Example
```javascript
import ModelsbpmnApi from 'ModelsbpmnApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsbpmnApi = new ModelsbpmnApi(this.alfrescoApi);


modelsbpmnApi.getHistoricProcessModelBpmn20XmlUsingGET(processModelIdprocessModelHistoryId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **number**| processModelId | 
 **processModelHistoryId** | **number**| processModelHistoryId | 

### Return type

null (empty response body)

<a name="getProcessModelBpmn20XmlUsingGET"></a>
# **getProcessModelBpmn20XmlUsingGET**
> getProcessModelBpmn20XmlUsingGET(processModelId)

Export a process definition as BPMN 2.0 XML

### Example
```javascript
import ModelsbpmnApi from 'ModelsbpmnApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsbpmnApi = new ModelsbpmnApi(this.alfrescoApi);


modelsbpmnApi.getProcessModelBpmn20XmlUsingGET(processModelId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **number**| processModelId | 

### Return type

null (empty response body)

