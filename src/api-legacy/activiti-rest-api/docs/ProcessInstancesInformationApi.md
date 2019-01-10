# ActivitiPublicRestApi.ProcessInstancesInformationApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getProcessInstanceContent**](ProcessInstancesInformationApi.md#getProcessInstanceContent) | **GET** /api/enterprise/process-instances/{processInstanceId}/field-content | Retrieve content attached to process instance fields
[**startNewProcessInstance**](ProcessInstancesInformationApi.md#startNewProcessInstance) | **POST** /api/enterprise/process-instances | Start a process instance


<a name="getProcessInstanceContent"></a>
# **getProcessInstanceContent**
> ResultListDataRepresentation getProcessInstanceContent(processInstanceId)

Retrieve content attached to process instance fields

### Example
```javascript
var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processInstancesInformationApi.getProcessInstanceContent(processInstanceId);
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

<a name="startNewProcessInstance"></a>
# **startNewProcessInstance**
> ProcessInstanceRepresentation startNewProcessInstance(startRequest)

Start a process instance

### Example
```javascript

var startRequest = new this.alfrescoJsApi.activiti.CreateProcessInstanceRepresentation(); // CreateProcessInstanceRepresentation | startRequest

this.alfrescoJsApi.activiti.processInstancesInformationApi.startNewProcessInstance(startRequest);
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

