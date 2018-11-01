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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsbpmnApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getHistoricProcessModelBpmn20XmlUsingGET(processModelIdprocessModelHistoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processModelId** | **number**| processModelId | 
 **processModelHistoryId** | **number**| processModelHistoryId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml

<a name="getProcessModelBpmn20XmlUsingGET"></a>
# **getProcessModelBpmn20XmlUsingGET**
> getProcessModelBpmn20XmlUsingGET(processModelId)

Export a process definition as BPMN 2.0 XML

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ModelsbpmnApi();


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
 **processModelId** | **number**| processModelId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/xml

