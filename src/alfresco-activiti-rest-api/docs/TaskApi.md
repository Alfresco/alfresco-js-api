# ActivitiPublicRestApi.TaskApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubtaskUsingPOST**](TaskApi.md#addSubtaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
[**addTaskCommentUsingPOST**](TaskApi.md#addTaskCommentUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
[**assignTaskUsingPUT**](TaskApi.md#assignTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
[**attachFormUsingPUT**](TaskApi.md#attachFormUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
[**claimTaskUsingPUT**](TaskApi.md#claimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
[**completeTaskFormUsingPOST**](TaskApi.md#completeTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
[**completeTaskUsingPUT**](TaskApi.md#completeTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
[**createNewTaskUsingPOST**](TaskApi.md#createNewTaskUsingPOST) | **POST** /api/enterprise/tasks | Create a Standalone Task
[**createRelatedContentOnTaskUsingPOST**](TaskApi.md#createRelatedContentOnTaskUsingPOST) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
[**createRelatedContentOnTaskUsingPOST1**](TaskApi.md#createRelatedContentOnTaskUsingPOST1) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
[**deleteTaskUsingDELETE**](TaskApi.md#deleteTaskUsingDELETE) | **DELETE** /api/enterprise/tasks/{taskId} | Delete a Task
[**filterTasksUsingPOST**](TaskApi.md#filterTasksUsingPOST) | **POST** /api/enterprise/tasks/filter | Filter list of Task
[**getChecklistUsingGET**](TaskApi.md#getChecklistUsingGET) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
[**getRelatedContentForTaskUsingGET**](TaskApi.md#getRelatedContentForTaskUsingGET) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task
[**getRestFieldValuesUsingGET1**](TaskApi.md#getRestFieldValuesUsingGET1) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
[**getRestFieldValuesUsingGET2**](TaskApi.md#getRestFieldValuesUsingGET2) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
[**getTaskCommentsUsingGET**](TaskApi.md#getTaskCommentsUsingGET) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task
[**getTaskFormUsingGET**](TaskApi.md#getTaskFormUsingGET) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
[**getTaskUsingGET**](TaskApi.md#getTaskUsingGET) | **GET** /api/enterprise/tasks/{taskId} | Task Details
[**involveUserUsingPUT**](TaskApi.md#involveUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
[**listTasksUsingPOST**](TaskApi.md#listTasksUsingPOST) | **POST** /api/enterprise/tasks/query | List Task
[**orderChecklistUsingPUT**](TaskApi.md#orderChecklistUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
[**removeFormUsingDELETE**](TaskApi.md#removeFormUsingDELETE) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
[**removeInvolvedUserUsingPUT**](TaskApi.md#removeInvolvedUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
[**saveTaskFormUsingPOST**](TaskApi.md#saveTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form
[**unclaimTaskUsingPUT**](TaskApi.md#unclaimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
[**updateTaskUsingPUT**](TaskApi.md#updateTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId} | Update Task Details


<a name="addSubtaskUsingPOST"></a>
# **addSubtaskUsingPOST**
> TaskRepresentation addSubtaskUsingPOST(taskId, taskRepresentation)

Create a task checklist

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

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

<a name="addTaskCommentUsingPOST"></a>
# **addTaskCommentUsingPOST**
> CommentRepresentation addTaskCommentUsingPOST(commentRequest, taskId)

Add a comment to a Task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

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

<a name="assignTaskUsingPUT"></a>
# **assignTaskUsingPUT**
> TaskRepresentation assignTaskUsingPUT(taskId, requestNode)

Assign a task to a user

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var requestNode = new ActivitiPublicRestApi.ObjectNode(); // ObjectNode | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.assignTaskUsingPUT(taskId, requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **requestNode** | [**ObjectNode**](ObjectNode.md)| requestNode | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="attachFormUsingPUT"></a>
# **attachFormUsingPUT**
> attachFormUsingPUT(taskId, requestNode)

Attach a form to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var requestNode = new ActivitiPublicRestApi.ObjectNode(); // ObjectNode | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.attachFormUsingPUT(taskId, requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **requestNode** | [**ObjectNode**](ObjectNode.md)| requestNode | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="claimTaskUsingPUT"></a>
# **claimTaskUsingPUT**
> claimTaskUsingPUT(taskId)

Claim a task

To claim a task (in case the task is assigned to a group)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.claimTaskUsingPUT(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="completeTaskFormUsingPOST"></a>
# **completeTaskFormUsingPOST**
> completeTaskFormUsingPOST(taskId, completeTaskFormRepresentation)

Complete a Task Form

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var completeTaskFormRepresentation = new ActivitiPublicRestApi.CompleteFormRepresentation(); // CompleteFormRepresentation | completeTaskFormRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.completeTaskFormUsingPOST(taskId, completeTaskFormRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **completeTaskFormRepresentation** | [**CompleteFormRepresentation**](CompleteFormRepresentation.md)| completeTaskFormRepresentation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="completeTaskUsingPUT"></a>
# **completeTaskUsingPUT**
> completeTaskUsingPUT(taskId)

Complete Task

To complete a task (standalone or without a task form)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.completeTaskUsingPUT(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNewTaskUsingPOST"></a>
# **createNewTaskUsingPOST**
> TaskRepresentation createNewTaskUsingPOST(taskRepresentation)

Create a Standalone Task

Standalone Task is not associated with a process instance. You can define only task name &amp; description

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskRepresentation = new ActivitiPublicRestApi.TaskRepresentation(); // TaskRepresentation | taskRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewTaskUsingPOST(taskRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskRepresentation** | [**TaskRepresentation**](TaskRepresentation.md)| taskRepresentation | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRelatedContentOnTaskUsingPOST"></a>
# **createRelatedContentOnTaskUsingPOST**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST(taskId, relatedContent, opts)

To relate content (eg from Alfresco) to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var relatedContent = new ActivitiPublicRestApi.RelatedContentRepresentation(); // RelatedContentRepresentation | relatedContent

var opts = { 
  'isRelatedContent': true // Boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnTaskUsingPOST(taskId, relatedContent, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **relatedContent** | [**RelatedContentRepresentation**](RelatedContentRepresentation.md)| relatedContent | 
 **isRelatedContent** | **Boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRelatedContentOnTaskUsingPOST1"></a>
# **createRelatedContentOnTaskUsingPOST1**
> RelatedContentRepresentation createRelatedContentOnTaskUsingPOST1(taskId, file, opts)

Upload content to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var file = "/path/to/file.txt"; // File | file

var opts = { 
  'isRelatedContent': true // Boolean | isRelatedContent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createRelatedContentOnTaskUsingPOST1(taskId, file, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **file** | **File**| file | 
 **isRelatedContent** | **Boolean**| isRelatedContent | [optional] 

### Return type

[**RelatedContentRepresentation**](RelatedContentRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="deleteTaskUsingDELETE"></a>
# **deleteTaskUsingDELETE**
> deleteTaskUsingDELETE(taskId)

Delete a Task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTaskUsingDELETE(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterTasksUsingPOST"></a>
# **filterTasksUsingPOST**
> ResultListDataRepresentation filterTasksUsingPOST(requestNode)

Filter list of Task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var requestNode = new ActivitiPublicRestApi.TaskFilterRequestRepresentation(); // TaskFilterRequestRepresentation | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterTasksUsingPOST(requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNode** | [**TaskFilterRequestRepresentation**](TaskFilterRequestRepresentation.md)| requestNode | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

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

var apiInstance = new ActivitiPublicRestApi.TaskApi();

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

<a name="getRelatedContentForTaskUsingGET"></a>
# **getRelatedContentForTaskUsingGET**
> ResultListDataRepresentation getRelatedContentForTaskUsingGET(taskId)

Retrieve which content is attached to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRelatedContentForTaskUsingGET(taskId, callback);
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

<a name="getRestFieldValuesUsingGET1"></a>
# **getRestFieldValuesUsingGET1**
> [FormValueRepresentation] getRestFieldValuesUsingGET1(taskId, field, column)

Retrieve Column Field Values

Specific case to retrieve information on a specific column

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var field = "field_example"; // String | field

var column = "column_example"; // String | column


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRestFieldValuesUsingGET1(taskId, field, column, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **field** | **String**| field | 
 **column** | **String**| column | 

### Return type

[**[FormValueRepresentation]**](FormValueRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRestFieldValuesUsingGET2"></a>
# **getRestFieldValuesUsingGET2**
> [FormValueRepresentation] getRestFieldValuesUsingGET2(taskId, field)

Retrieve Populated Field Values

Form field values that are populated through a REST backend, can be retrieved via this service

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var field = "field_example"; // String | field


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRestFieldValuesUsingGET2(taskId, field, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **field** | **String**| field | 

### Return type

[**[FormValueRepresentation]**](FormValueRepresentation.md)

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

var apiInstance = new ActivitiPublicRestApi.TaskApi();

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

<a name="getTaskFormUsingGET"></a>
# **getTaskFormUsingGET**
> FormDefinitionRepresentation getTaskFormUsingGET(taskId)

Retrieve Task Form

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskFormUsingGET(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskUsingGET"></a>
# **getTaskUsingGET**
> TaskRepresentation getTaskUsingGET(taskId)

Task Details

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskUsingGET(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="involveUserUsingPUT"></a>
# **involveUserUsingPUT**
> involveUserUsingPUT(taskId, requestNode)

To involve a user with a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var requestNode = new ActivitiPublicRestApi.ObjectNode(); // ObjectNode | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.involveUserUsingPUT(taskId, requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **requestNode** | [**ObjectNode**](ObjectNode.md)| requestNode | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTasksUsingPOST"></a>
# **listTasksUsingPOST**
> ResultListDataRepresentation listTasksUsingPOST(requestNode)

List Task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var requestNode = new ActivitiPublicRestApi.ObjectNode(); // ObjectNode | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTasksUsingPOST(requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNode** | [**ObjectNode**](ObjectNode.md)| requestNode | 

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

var apiInstance = new ActivitiPublicRestApi.TaskApi();

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

<a name="removeFormUsingDELETE"></a>
# **removeFormUsingDELETE**
> removeFormUsingDELETE(taskId)

Remove a form to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeFormUsingDELETE(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeInvolvedUserUsingPUT"></a>
# **removeInvolvedUserUsingPUT**
> removeInvolvedUserUsingPUT(taskId, requestNode)

Remove an involved user from a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var requestNode = new ActivitiPublicRestApi.ObjectNode(); // ObjectNode | requestNode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeInvolvedUserUsingPUT(taskId, requestNode, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **requestNode** | [**ObjectNode**](ObjectNode.md)| requestNode | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="saveTaskFormUsingPOST"></a>
# **saveTaskFormUsingPOST**
> saveTaskFormUsingPOST(taskId, saveTaskFormRepresentation)

Save Task Form

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var saveTaskFormRepresentation = new ActivitiPublicRestApi.SaveFormRepresentation(); // SaveFormRepresentation | saveTaskFormRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.saveTaskFormUsingPOST(taskId, saveTaskFormRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **saveTaskFormRepresentation** | [**SaveFormRepresentation**](SaveFormRepresentation.md)| saveTaskFormRepresentation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="unclaimTaskUsingPUT"></a>
# **unclaimTaskUsingPUT**
> unclaimTaskUsingPUT(taskId)

Unclaim a task

To unclaim a task (in case the task was assigned to a group)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.unclaimTaskUsingPUT(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaskUsingPUT"></a>
# **updateTaskUsingPUT**
> TaskRepresentation updateTaskUsingPUT(taskId, updated)

Update Task Details

You can edit only name, description and dueDate (ISO 8601 string).

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskApi();

var taskId = "taskId_example"; // String | taskId

var updated = new ActivitiPublicRestApi.TaskUpdateRepresentation(); // TaskUpdateRepresentation | updated


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTaskUsingPUT(taskId, updated, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 
 **updated** | [**TaskUpdateRepresentation**](TaskUpdateRepresentation.md)| updated | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

