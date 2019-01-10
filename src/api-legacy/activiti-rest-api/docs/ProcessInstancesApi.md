# ActivitiPublicRestApi.ProcessInstancesApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProcessInstanceComment**](ProcessInstancesApi.md#addProcessInstanceComment) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
[**deleteProcessInstance**](ProcessInstancesApi.md#deleteProcessInstance) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
[**getProcessInstanceComments**](ProcessInstancesApi.md#getProcessInstanceComments) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
[**getProcessInstanceStartForm**](ProcessInstancesApi.md#getProcessInstanceStartForm) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
[**getProcessInstance**](ProcessInstancesApi.md#getProcessInstance) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information


<a name="addProcessInstanceComment"></a>
# **addProcessInstanceComment**
> CommentRepresentation addProcessInstanceComment(commentRequest, processInstanceId)

Add a comment to a Process

### Example
```javascript

var commentRequest = new this.alfrescoJsApi.activiti.CommentRepresentation(); // CommentRepresentation | commentRequest

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processInstancesApi.addProcessInstanceComment(commentRequest, processInstanceId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentRequest** | [**CommentRepresentation**](CommentRepresentation.md)| commentRequest | 
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**CommentRepresentation**](CommentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProcessInstance"></a>
# **deleteProcessInstance**
> deleteProcessInstance(processInstanceId)

Delete a process instance

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processInstancesApi.deleteProcessInstance(processInstanceId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceComments"></a>
# **getProcessInstanceComments**
> ResultListDataRepresentation getProcessInstanceComments(processInstanceId, opts)

Comment list added to Process

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

var opts = { 
  'latestFirst': true // Boolean | latestFirst
};

this.alfrescoJsApi.activiti.processInstancesApi.getProcessInstanceComments(processInstanceId, opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 
 **latestFirst** | **Boolean**| latestFirst | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceStartForm"></a>
# **getProcessInstanceStartForm**
> FormDefinitionRepresentation getProcessInstanceStartForm(processInstanceId)

Get process start form

When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processInstancesApi.getProcessInstanceStartForm(processInstanceId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstance"></a>
# **getProcessInstance**
> ProcessInstanceRepresentation getProcessInstance(processInstanceId)

Retrieve a process instance information

### Example
```javascript

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.processInstancesApi.getProcessInstance(processInstanceId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

