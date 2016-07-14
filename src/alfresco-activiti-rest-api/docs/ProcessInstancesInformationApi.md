# ActivitiPublicRestApi.ProcessInstancesInformationApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessInstanceContentUsingGET**](ProcessInstancesInformationApi.md#getProcessInstanceContentUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
[**startNewProcessInstanceUsingPOST**](ProcessInstancesInformationApi.md#startNewProcessInstanceUsingPOST) | **POST** /api/enterprise/process-instances | Start a process instance


<a name="getProcessInstanceContentUsingGET"></a>
# **getProcessInstanceContentUsingGET**
> ResultListDataRepresentation getProcessInstanceContentUsingGET(processInstanceId)

Retrieve content attached to process instance fields

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesInformationApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceContentUsingGET(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="startNewProcessInstanceUsingPOST"></a>
# **startNewProcessInstanceUsingPOST**
> ProcessInstanceRepresentation startNewProcessInstanceUsingPOST(startRequest)

Start a process instance

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesInformationApi();

var startRequest = new ActivitiPublicRestApi.CreateProcessInstanceRepresentation(); // CreateProcessInstanceRepresentation | startRequest


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.startNewProcessInstanceUsingPOST(startRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startRequest** | [**CreateProcessInstanceRepresentation**](CreateProcessInstanceRepresentation.md)| startRequest | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

