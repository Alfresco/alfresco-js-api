# ActivitiPublicRestApi.CommentsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProcessInstanceComment**](CommentsApi.md#addProcessInstanceComment) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
[**addTaskComment**](CommentsApi.md#addTaskComment) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
[**getProcessInstanceComments**](CommentsApi.md#getProcessInstanceComments) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
[**getTaskComments**](CommentsApi.md#getTaskComments) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task


<a name="addProcessInstanceComment"></a>
# **addProcessInstanceComment**
> CommentRepresentation addProcessInstanceComment(commentRequest, processInstanceId)

Add a comment to a Process

### Example
```javascript

var commentRequest = new this.alfrescoJsApi.activiti.CommentRepresentation(); // CommentRepresentation | commentRequest

var processInstanceId = "processInstanceId_example"; // String | processInstanceId

this.alfrescoJsApi.activiti.commentsApi.addProcessInstanceComment(commentRequest, processInstanceId);
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

<a name="addTaskComment"></a>
# **addTaskComment**
> CommentRepresentation addTaskComment(commentRequest, taskId)

Add a comment to a Task

### Example
```javascript

var commentRequest = new this.alfrescoJsApi.activiti.CommentRepresentation(); // CommentRepresentation | commentRequest

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.commentsApi.addTaskComment(commentRequest, taskId);
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

this.alfrescoJsApi.activiti.commentsApi.getProcessInstanceComments(processInstanceId, opts);
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

<a name="getTaskComments"></a>
# **getTaskComments**
> ResultListDataRepresentation getTaskComments(taskId, opts)

Comment list added to Task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var opts = { 
  'latestFirst': true // Boolean | latestFirst
};

this.alfrescoJsApi.activiti.commentsApi.getTaskComments(taskId, opts);
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

