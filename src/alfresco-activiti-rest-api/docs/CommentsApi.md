# ActivitiPublicRestApi.CommentsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProcessInstanceCommentUsingPOST**](CommentsApi.md#addProcessInstanceCommentUsingPOST) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
[**addTaskCommentUsingPOST**](CommentsApi.md#addTaskCommentUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
[**getProcessInstanceCommentsUsingGET**](CommentsApi.md#getProcessInstanceCommentsUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
[**getTaskCommentsUsingGET**](CommentsApi.md#getTaskCommentsUsingGET) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task


<a name="addProcessInstanceCommentUsingPOST"></a>
# **addProcessInstanceCommentUsingPOST**
> CommentRepresentation addProcessInstanceCommentUsingPOST(commentRequest, processInstanceId)

Add a comment to a Process

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.CommentsApi();

var commentRequest = new ActivitiPublicRestApi.CommentRepresentation(); // CommentRepresentation | commentRequest

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProcessInstanceCommentUsingPOST(commentRequest, processInstanceId, callback);
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

<a name="addTaskCommentUsingPOST"></a>
# **addTaskCommentUsingPOST**
> CommentRepresentation addTaskCommentUsingPOST(commentRequest, taskId)

Add a comment to a Task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.CommentsApi();

var commentRequest = new ActivitiPublicRestApi.CommentRepresentation(); // CommentRepresentation | commentRequest

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTaskCommentUsingPOST(commentRequest, taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentRequest** | [**CommentRepresentation**](CommentRepresentation.md)| commentRequest | 
 **taskId** | **String**| taskId | 

### Return type

[**CommentRepresentation**](CommentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceCommentsUsingGET"></a>
# **getProcessInstanceCommentsUsingGET**
> ResultListDataRepresentation getProcessInstanceCommentsUsingGET(processInstanceId, opts)

Comment list added to Process

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.CommentsApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

var opts = { 
  'latestFirst': true // Boolean | latestFirst
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceCommentsUsingGET(processInstanceId, opts, callback);
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

<a name="getTaskCommentsUsingGET"></a>
# **getTaskCommentsUsingGET**
> ResultListDataRepresentation getTaskCommentsUsingGET(taskId, opts)

Comment list added to Task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.CommentsApi();

var taskId = "taskId_example"; // String | taskId

var opts = { 
  'latestFirst': true // Boolean | latestFirst
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskCommentsUsingGET(taskId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **latestFirst** | **Boolean**| latestFirst | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

