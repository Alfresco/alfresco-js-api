# ActivitiPublicRestApi.TaskActionsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignTask**](TaskActionsApi.md#assignTask) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
[**attachForm**](TaskActionsApi.md#attachForm) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
[**claimTask**](TaskActionsApi.md#claimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
[**completeTask**](TaskActionsApi.md#completeTask) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
[**involveUser**](TaskActionsApi.md#involveUser) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
[**removeForm**](TaskActionsApi.md#removeForm) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
[**removeInvolvedUser**](TaskActionsApi.md#removeInvolvedUser) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
[**unclaimTask**](TaskActionsApi.md#unclaimTask) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task


<a name="assignTask"></a>
# **assignTask**
> TaskRepresentation assignTask(taskId, requestNode)

Assign a task to a user

### Example
```javascript
var taskId = "taskId_example"; // String | taskId

var requestNode = new this.alfrescoJsApi.activiti.ObjectNode(); // ObjectNode | requestNode

this.alfrescoJsApi.activiti.taskActionsApi.assignTask(taskId, requestNode);
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

this.alfrescoJsApi.activiti.taskActionsApi.attachForm(taskId, requestNode);
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

this.alfrescoJsApi.activiti.taskActionsApi.claimTask(taskId);
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

<a name="completeTask"></a>
# **completeTask**
> completeTask(taskId)

Complete Task

To complete a task (standalone or without a task form)

### Example
```javascript
var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskActionsApi.completeTask(taskId);
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

<a name="involveUser"></a>
# **involveUser**
> involveUser(taskId, requestNode)

To involve a user with a task

### Example
```javascript
var taskId = "taskId_example"; // String | taskId

var requestNode = new this.alfrescoJsApi.activiti.ObjectNode(); // ObjectNode | requestNode

this.alfrescoJsApi.activiti.taskActionsApi.involveUser(taskId, requestNode);
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

<a name="removeForm"></a>
# **removeForm**
> removeForm(taskId)

Remove a form to a task

### Example
```javascript
var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskActionsApi.removeForm(taskId);
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

this.alfrescoJsApi.activiti.taskActionsApi.removeInvolvedUser(taskId, requestNode);
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

<a name="unclaimTask"></a>
# **unclaimTask**
> unclaimTask(taskId)

Unclaim a task

To unclaim a task (in case the task was assigned to a group)

### Example
```javascript
var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskActionsApi.unclaimTask(taskId);
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

