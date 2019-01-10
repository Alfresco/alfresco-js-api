# ActivitiPublicRestApi.TaskApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubtask**](TaskApi.md#addSubtask) | **POST** /api/enterprise/tasks/{taskId}/checklist | Create a task checklist
[**addTaskComment**](TaskApi.md#addTaskComment) | **POST** /api/enterprise/tasks/{taskId}/comments | Add a comment to a Task
[**assignTask**](TaskApi.md#assignTask) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
[**attachForm**](TaskApi.md#attachForm) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
[**claimTask**](TaskApi.md#claimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
[**completeTaskForm**](TaskApi.md#completeTaskForm) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
[**completeTask**](TaskApi.md#completeTask) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
[**createNewTask**](TaskApi.md#createNewTask) | **POST** /api/enterprise/tasks | Create a Standalone Task
[**createRelatedContentOnTask**](TaskApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/content | To relate content (eg from Alfresco) to a task
[**createRelatedContentOnTask**](TaskApi.md#createRelatedContentOnTask) | **POST** /api/enterprise/tasks/{taskId}/raw-content | Upload content to a task
[**deleteTask**](TaskApi.md#deleteTask) | **DELETE** /api/enterprise/tasks/{taskId} | Delete a Task
[**filterTasks**](TaskApi.md#filterTasks) | **POST** /api/enterprise/tasks/filter | Filter list of Task
[**getChecklist**](TaskApi.md#getChecklist) | **GET** /api/enterprise/tasks/{taskId}/checklist | Retrieve Checklist added to a task
[**getTaskAuditPdf**](TaskApi.md#getTaskAuditPdf) | **GET** /app/rest/tasks/{taskId}/audit | Retrieve the task audit infromation in pdf format
[**getRelatedContentForTask**](TaskApi.md#getRelatedContentForTask) | **GET** /api/enterprise/tasks/{taskId}/content | Retrieve which content is attached to a task
[**getRestFieldValuesColumn**](TaskApi.md#getRestFieldValuesColumn) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
[**getRestFieldValues**](TaskApi.md#getRestFieldValues) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
[**getTaskComments**](TaskApi.md#getTaskComments) | **GET** /api/enterprise/tasks/{taskId}/comments | Comment list added to Task
[**getTaskForm**](TaskApi.md#getTaskForm) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
[**getTask**](TaskApi.md#getTask) | **GET** /api/enterprise/tasks/{taskId} | Task Details
[**involveUser**](TaskApi.md#involveUser) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
[**listTasks**](TaskApi.md#listTasks) | **POST** /api/enterprise/tasks/query | List Task
[**orderChecklist**](TaskApi.md#orderChecklist) | **PUT** /api/enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist
[**removeForm**](TaskApi.md#removeForm) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
[**removeInvolvedUser**](TaskApi.md#removeInvolvedUser) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
[**saveTaskForm**](TaskApi.md#saveTaskForm) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form
[**unclaimTask**](TaskApi.md#unclaimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task
[**updateTask**](TaskApi.md#updateTask) | **PUT** /api/enterprise/tasks/{taskId} | Update Task Details


<a name="addSubtask"></a>
# **addSubtask**
> TaskRepresentation addSubtask(taskId, taskRepresentation)

Create a task checklist

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var taskRepresentation = new this.alfrescoJsApi.activiti.TaskRepresentation(); // TaskRepresentation | taskRepresentation


this.alfrescoJsApi.activiti.taskApi.addSubtask(taskId, taskRepresentation);
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

<a name="addTaskComment"></a>
# **addTaskComment**
> CommentRepresentation addTaskComment(commentRequest, taskId)

Add a comment to a Task

### Example
```javascript

var commentRequest = new this.alfrescoJsApi.activiti.CommentRepresentation(); // CommentRepresentation | commentRequest

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskApi.addTaskComment(commentRequest, taskId);
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

<a name="assignTask"></a>
# **assignTask**
> TaskRepresentation assignTask(taskId, requestNode)

Assign a task to a user

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var requestNode = new this.alfrescoJsApi.activiti.ObjectNode(); // ObjectNode | requestNode


this.alfrescoJsApi.activiti.taskApi.assignTask(taskId, requestNode);
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

<a name="attachForm"></a>
# **attachForm**
> attachForm(taskId, requestNode)

Attach a form to a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var requestNode = new this.alfrescoJsApi.activiti.ObjectNode(); // ObjectNode | requestNode

this.alfrescoJsApi.activiti.taskApi.attachForm(taskId, requestNode);
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

<a name="claimTask"></a>
# **claimTask**
> claimTask(taskId)

Claim a task

To claim a task (in case the task is assigned to a group)

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskApi.claimTask(taskId);
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

<a name="completeTaskForm"></a>
# **completeTaskForm**
> completeTaskForm(taskId, completeTaskFormRepresentation)

Complete a Task Form

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var completeTaskFormRepresentation = new this.alfrescoJsApi.activiti.CompleteFormRepresentation(); // CompleteFormRepresentation | completeTaskFormRepresentation

this.alfrescoJsApi.activiti.taskApi.completeTaskForm(taskId, completeTaskFormRepresentation);
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

<a name="completeTask"></a>
# **completeTask**
> completeTask(taskId)

Complete Task

To complete a task (standalone or without a task form)

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskApi.completeTask(taskId);
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

<a name="createNewTask"></a>
# **createNewTask**
> TaskRepresentation createNewTask(taskRepresentation)

Create a Standalone Task

Standalone Task is not associated with a process instance. You can define only task name &amp; description

### Example
```javascript

var taskRepresentation = new this.alfrescoJsApi.activiti.TaskRepresentation(); // TaskRepresentation | taskRepresentation

this.alfrescoJsApi.activiti.taskApi.createNewTask(taskRepresentation);
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

<a name="createRelatedContentOnTask"></a>
# **createRelatedContentOnTask**
> RelatedContentRepresentation createRelatedContentOnTask(taskId, relatedContent, opts)

To relate content (eg from Alfresco) to a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var relatedContent = new this.alfrescoJsApi.activiti.RelatedContentRepresentation(); // RelatedContentRepresentation | relatedContent

var opts = { 
  'isRelatedContent': true // Boolean | isRelatedContent
};

this.alfrescoJsApi.activiti.taskApi.createRelatedContentOnTask(taskId, relatedContent, opts);
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

<a name="createRelatedContentOnTask"></a>
# **createRelatedContentOnTask**
> RelatedContentRepresentation createRelatedContentOnTask(taskId, file, opts)

Upload content to a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var file = "/path/to/file.txt"; // File | file

var opts = { 
  'isRelatedContent': true // Boolean | isRelatedContent
};

this.alfrescoJsApi.activiti.taskApi.createRelatedContentOnTask(taskId, file, opts);
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

<a name="deleteTask"></a>
# **deleteTask**
> deleteTask(taskId)

Delete a Task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskApi.deleteTask(taskId);
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

<a name="filterTasks"></a>
# **filterTasks**
> ResultListDataRepresentation filterTasks(requestNode)

Filter list of Task

### Example
```javascript

var requestNode = new this.alfrescoJsApi.activiti.TaskFilterRequestRepresentation(); // TaskFilterRequestRepresentation | requestNode


this.alfrescoJsApi.activiti.taskApi.filterTasks(requestNode);
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

<a name="getChecklist"></a>
# **getChecklist**
> ResultListDataRepresentation getChecklist(taskId)

Retrieve Checklist added to a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId


this.alfrescoJsApi.activiti.taskApi.getChecklist(taskId);
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

<a name="getTaskAuditJson"></a>
# **getTaskAuditJson**
> TaskAuditRepresentation getTaskAuditJson(taskId)

Retrieve audit infromation in json format

### Example
```javascript

var taskId = "taskId_example"; // String | taskId


this.alfrescoJsApi.activiti.taskApi.getTaskAuditJson(taskId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

[**TaskAuditRepresentation**](TaskAuditRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRelatedContentForTask"></a>
# **getRelatedContentForTask**
> ResultListDataRepresentation getRelatedContentForTask(taskId)

Retrieve which content is attached to a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId


this.alfrescoJsApi.activiti.taskApi.getRelatedContentForTask(taskId);
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

<a name="getRestFieldValuesColumn"></a>
# **getRestFieldValuesColumn**
> [FormValueRepresentation] getRestFieldValuesColumn(taskId, field, column)

Retrieve Column Field Values

Specific case to retrieve information on a specific column

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var field = "field_example"; // String | field

var column = "column_example"; // String | column


this.alfrescoJsApi.activiti.taskApi.getRestFieldValuesColumn(taskId, field, column);
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

<a name="getRestFieldValues"></a>
# **getRestFieldValues**
> [FormValueRepresentation] getRestFieldValues(taskId, field)

Retrieve Populated Field Values

Form field values that are populated through a REST backend, can be retrieved via this service

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var field = "field_example"; // String | field


this.alfrescoJsApi.activiti.taskApi.getRestFieldValues(taskId, field);
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

this.alfrescoJsApi.activiti.taskApi.getTaskComments(taskId, opts);
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

<a name="getTaskForm"></a>
# **getTaskForm**
> FormDefinitionRepresentation getTaskForm(taskId)

Retrieve Task Form

### Example
```javascript

var taskId = "taskId_example"; // String | taskId


this.alfrescoJsApi.activiti.taskApi.getTaskForm(taskId);
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

<a name="getTask"></a>
# **getTask**
> TaskRepresentation getTask(taskId)

Task Details

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskApi.getTask(taskId);
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

<a name="involveUser"></a>
# **involveUser**
> involveUser(taskId, requestNode)

To involve a user with a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var requestNode = new this.alfrescoJsApi.activiti.ObjectNode(); // ObjectNode | requestNode

this.alfrescoJsApi.activiti.taskApi.involveUser(taskId, requestNode);
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

<a name="listTasks"></a>
# **listTasks**
> ResultListDataRepresentation listTasks(requestNode)

List Task

### Example
```javascript

var requestNode = new this.alfrescoJsApi.activiti.TaskQueryRepresentation(); // ObjectNode | requestNode


this.alfrescoJsApi.activiti.taskApi.listTasks(requestNode);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **requestNode** | [**Representation**](TaskQueryRequestRepresentation.md)| requestNode | 

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

this.alfrescoJsApi.activiti.taskApi.orderChecklist(taskId, orderRepresentation);
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

<a name="removeForm"></a>
# **removeForm**
> removeForm(taskId)

Remove a form to a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskApi.removeForm(taskId);
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

<a name="removeInvolvedUser"></a>
# **removeInvolvedUser**
> removeInvolvedUser(taskId, requestNode)

Remove an involved user from a task

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var requestNode = new this.alfrescoJsApi.activiti.ObjectNode(); // ObjectNode | requestNode


this.alfrescoJsApi.activiti.taskApi.removeInvolvedUser(taskId, requestNode);
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

<a name="saveTaskForm"></a>
# **saveTaskForm**
> saveTaskForm(taskId, saveTaskFormRepresentation)

Save Task Form

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var saveTaskFormRepresentation = new this.alfrescoJsApi.activiti.SaveFormRepresentation(); // SaveFormRepresentation | saveTaskFormRepresentation

this.alfrescoJsApi.activiti.taskApi.saveTaskForm(taskId, saveTaskFormRepresentation);
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

<a name="unclaimTask"></a>
# **unclaimTask**
> unclaimTask(taskId)

Unclaim a task

To unclaim a task (in case the task was assigned to a group)

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskApi.unclaimTask(taskId);
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

<a name="updateTask"></a>
# **updateTask**
> TaskRepresentation updateTask(taskId, updated)

Update Task Details

You can edit only name, description and dueDate (ISO 8601 string).

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var updated = new this.alfrescoJsApi.activiti.TaskUpdateRepresentation(); // TaskUpdateRepresentation | updated

this.alfrescoJsApi.activiti.taskApi.updateTask(taskId, updated);
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

