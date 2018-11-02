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
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);


commentsApi.addProcessInstanceCommentUsingPOST(commentRequestprocessInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentRequest** | [**CommentRepresentation**](CommentRepresentation.md)| commentRequest | 
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**CommentRepresentation**](CommentRepresentation.md)

<a name="addTaskCommentUsingPOST"></a>
# **addTaskCommentUsingPOST**
> CommentRepresentation addTaskCommentUsingPOST(commentRequesttaskId)

Add a comment to a task

### Example
```javascript
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);


commentsApi.addTaskCommentUsingPOST(commentRequesttaskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **commentRequest** | [**CommentRepresentation**](CommentRepresentation.md)| commentRequest | 
 **taskId** | **string**| taskId | 

### Return type

[**CommentRepresentation**](CommentRepresentation.md)

<a name="getProcessInstanceCommentsUsingGET"></a>
# **getProcessInstanceCommentsUsingGET**
> ResultListDataRepresentationCommentRepresentation getProcessInstanceCommentsUsingGET(processInstanceIdopts)

Get comments for a process

### Example
```javascript
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);

let opts = { 
  'latestFirst': true // boolean | latestFirst
};

commentsApi.getProcessInstanceCommentsUsingGET(processInstanceIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **latestFirst** | **boolean**| latestFirst | [optional] 

### Return type

[**ResultListDataRepresentationCommentRepresentation**](ResultListDataRepresentationCommentRepresentation.md)

<a name="getTaskCommentsUsingGET"></a>
# **getTaskCommentsUsingGET**
> ResultListDataRepresentationCommentRepresentation getTaskCommentsUsingGET(taskIdopts)

Get comments for a task

### Example
```javascript
import CommentsApi from 'CommentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let commentsApi = new CommentsApi(this.alfrescoApi);

let opts = { 
  'latestFirst': true // boolean | latestFirst
};

commentsApi.getTaskCommentsUsingGET(taskIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **latestFirst** | **boolean**| latestFirst | [optional] 

### Return type

[**ResultListDataRepresentationCommentRepresentation**](ResultListDataRepresentationCommentRepresentation.md)

