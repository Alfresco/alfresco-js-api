# ActivitiPublicRestApi.TaskCheckListApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubtask**](TaskCheckListApi.md#addSubtask) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
[**getChecklist**](TaskCheckListApi.md#getChecklist) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
[**orderChecklist**](TaskCheckListApi.md#orderChecklist) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist


<a name="addSubtask"></a>
# **addSubtask**
> TaskRepresentation addSubtask(taskId, taskRepresentation)

Create a task checklist

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var taskRepresentation = new this.alfrescoJsApi.activiti.TaskRepresentation(); // TaskRepresentation | taskRepresentation

this.alfrescoJsApi.activiti.taskCheckListApi.addSubtask(taskId, taskRepresentation);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **taskRepresentation** | [**TaskRepresentation**](TaskRepresentation.md)| taskRepresentation | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChecklist"></a>
# **getChecklist**
> ResultListDataRepresentation getChecklist(taskId)

Retrieve Checklist added to a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskCheckListApi.getChecklist(taskId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderChecklist"></a>
# **orderChecklist**
> orderChecklist(taskId, orderRepresentation)

Change the order of items on a checklist

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var orderRepresentation = new this.alfrescoJsApi.activiti.ChecklistOrderRepresentation(); // ChecklistOrderRepresentation | orderRepresentation

this.alfrescoJsApi.activiti.taskCheckListApi.orderChecklist(taskId, orderRepresentation);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **orderRepresentation** | [**ChecklistOrderRepresentation**](ChecklistOrderRepresentation.md)| orderRepresentation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

