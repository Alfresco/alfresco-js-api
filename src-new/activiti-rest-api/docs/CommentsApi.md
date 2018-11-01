# .CommentsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProcessInstanceCommentUsingPOST**](CommentsApi.md#addProcessInstanceCommentUsingPOST) | **POST** /enterprise/process-instances/{processInstanceId}/comments | Add a comment to a process instance
[**addTaskCommentUsingPOST**](CommentsApi.md#addTaskCommentUsingPOST) | **POST** /enterprise/tasks/{taskId}/comments | Add a comment to a task
[**getProcessInstanceCommentsUsingGET**](CommentsApi.md#getProcessInstanceCommentsUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/comments | Get comments for a process
[**getTaskCommentsUsingGET**](CommentsApi.md#getTaskCommentsUsingGET) | **GET** /enterprise/tasks/{taskId}/comments | Get comments for a task


<a name="addProcessInstanceCommentUsingPOST"></a>
# **addProcessInstanceCommentUsingPOST**
> CommentRepresentation addProcessInstanceCommentUsingPOST(commentRequestprocessInstanceId)

Add a comment to a process instance

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .CommentsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addProcessInstanceCommentUsingPOST(commentRequestprocessInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentRequest** | [**CommentRepresentation**](CommentRepresentation.md)| commentRequest | 
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**CommentRepresentation**](CommentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="addTaskCommentUsingPOST"></a>
# **addTaskCommentUsingPOST**
> CommentRepresentation addTaskCommentUsingPOST(commentRequesttaskId)

Add a comment to a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .CommentsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addTaskCommentUsingPOST(commentRequesttaskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentRequest** | [**CommentRepresentation**](CommentRepresentation.md)| commentRequest | 
 **taskId** | **string**| taskId | 

### Return type

[**CommentRepresentation**](CommentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceCommentsUsingGET"></a>
# **getProcessInstanceCommentsUsingGET**
> ResultListDataRepresentationCommentRepresentation getProcessInstanceCommentsUsingGET(processInstanceIdopts)

Get comments for a process

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .CommentsApi();

var opts = { 
  'latestFirst': true // boolean | latestFirst
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceCommentsUsingGET(processInstanceIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **latestFirst** | **boolean**| latestFirst | [optional] 

### Return type

[**ResultListDataRepresentationCommentRepresentation**](ResultListDataRepresentationCommentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskCommentsUsingGET"></a>
# **getTaskCommentsUsingGET**
> ResultListDataRepresentationCommentRepresentation getTaskCommentsUsingGET(taskIdopts)

Get comments for a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .CommentsApi();

var opts = { 
  'latestFirst': true // boolean | latestFirst
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskCommentsUsingGET(taskIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **latestFirst** | **boolean**| latestFirst | [optional] 

### Return type

[**ResultListDataRepresentationCommentRepresentation**](ResultListDataRepresentationCommentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

