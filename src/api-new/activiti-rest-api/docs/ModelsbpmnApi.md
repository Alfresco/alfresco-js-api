# .ModelsbpmnApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getHistoricProcessModelBpmn20Xml**](ModelsbpmnApi.md#getHistoricProcessModelBpmn20Xml) | **GET** /enterprise/models/{processModelId}/history/{processModelHistoryId}/bpmn20 | Export a historic version of a process definition as BPMN 2.0 XML
[**getProcessModelBpmn20Xml**](ModelsbpmnApi.md#getProcessModelBpmn20Xml) | **GET** /enterprise/models/{processModelId}/bpmn20 | Export a process definition as BPMN 2.0 XML


<a name="getHistoricProcessModelBpmn20Xml"></a>
# **getHistoricProcessModelBpmn20Xml**
> getHistoricProcessModelBpmn20Xml(processModelIdprocessModelHistoryId)

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


modelsbpmnApi.getHistoricProcessModelBpmn20Xml(processModelIdprocessModelHistoryId).then(() => {
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

<a name="getProcessModelBpmn20Xml"></a>
# **getProcessModelBpmn20Xml**
> getProcessModelBpmn20Xml(processModelId)

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


modelsbpmnApi.getProcessModelBpmn20Xml(processModelId).then(() => {
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

