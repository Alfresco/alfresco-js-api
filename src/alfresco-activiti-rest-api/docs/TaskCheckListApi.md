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
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskCheckListApi();

var taskId = "taskId_example"; // String | taskId

var taskRepresentation = new ActivitiPublicRestApi.TaskRepresentation(); // TaskRepresentation | taskRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addSubtask(taskId, taskRepresentation, callback);
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
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskCheckListApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getChecklist(taskId, callback);
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
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskCheckListApi();

var taskId = "taskId_example"; // String | taskId

var orderRepresentation = new ActivitiPublicRestApi.ChecklistOrderRepresentation(); // ChecklistOrderRepresentation | orderRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderChecklist(taskId, orderRepresentation, callback);
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

