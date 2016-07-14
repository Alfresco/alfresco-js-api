# ActivitiPublicRestApi.TaskActionsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignTaskUsingPUT**](TaskActionsApi.md#assignTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/assign | Assign a task to a user
[**attachFormUsingPUT**](TaskActionsApi.md#attachFormUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
[**claimTaskUsingPUT**](TaskActionsApi.md#claimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/claim | Claim a task
[**completeTaskUsingPUT**](TaskActionsApi.md#completeTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/complete | Complete Task
[**involveUserUsingPUT**](TaskActionsApi.md#involveUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/involve | To involve a user with a task
[**removeFormUsingDELETE**](TaskActionsApi.md#removeFormUsingDELETE) | **DELETE** /api/enterprise/tasks/{taskId}/action/remove-form | Remove a form to a task
[**removeInvolvedUserUsingPUT**](TaskActionsApi.md#removeInvolvedUserUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
[**unclaimTaskUsingPUT**](TaskActionsApi.md#unclaimTaskUsingPUT) | **PUT** /api/enterprise/tasks/{taskId}/action/unclaim | Unclaim a task


<a name="assignTaskUsingPUT"></a>
# **assignTaskUsingPUT**
> TaskRepresentation assignTaskUsingPUT(taskId, requestNode)

Assign a task to a user

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

<a name="completeTaskUsingPUT"></a>
# **completeTaskUsingPUT**
> completeTaskUsingPUT(taskId)

Complete Task

To complete a task (standalone or without a task form)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

<a name="involveUserUsingPUT"></a>
# **involveUserUsingPUT**
> involveUserUsingPUT(taskId, requestNode)

To involve a user with a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

<a name="removeFormUsingDELETE"></a>
# **removeFormUsingDELETE**
> removeFormUsingDELETE(taskId)

Remove a form to a task

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

<a name="unclaimTaskUsingPUT"></a>
# **unclaimTaskUsingPUT**
> unclaimTaskUsingPUT(taskId)

Unclaim a task

To unclaim a task (in case the task was assigned to a group)

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskActionsApi();

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

