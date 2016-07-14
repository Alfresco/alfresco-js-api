# ActivitiPublicRestApi.TaskCheckListApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubtaskUsingPOST**](TaskCheckListApi.md#addSubtaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
[**getChecklistUsingGET**](TaskCheckListApi.md#getChecklistUsingGET) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
[**orderChecklistUsingPUT**](TaskCheckListApi.md#orderChecklistUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist


<a name="addSubtaskUsingPOST"></a>
# **addSubtaskUsingPOST**
> TaskRepresentation addSubtaskUsingPOST(taskId, taskRepresentation)

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
apiInstance.addSubtaskUsingPOST(taskId, taskRepresentation, callback);
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

<a name="getChecklistUsingGET"></a>
# **getChecklistUsingGET**
> ResultListDataRepresentation getChecklistUsingGET(taskId)

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
apiInstance.getChecklistUsingGET(taskId, callback);
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

<a name="orderChecklistUsingPUT"></a>
# **orderChecklistUsingPUT**
> orderChecklistUsingPUT(taskId, orderRepresentation)

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
apiInstance.orderChecklistUsingPUT(taskId, orderRepresentation, callback);
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

