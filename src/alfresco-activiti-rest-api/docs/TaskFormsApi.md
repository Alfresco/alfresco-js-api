# ActivitiPublicRestApi.TaskFormsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeTaskForm**](TaskFormsApi.md#completeTaskForm) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
[**getRestFieldValues**](TaskFormsApi.md#getRestFieldValues) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
[**getRestFieldValues**](TaskFormsApi.md#getRestFieldValues) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
[**getTaskForm**](TaskFormsApi.md#getTaskForm) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
[**getTaskFormVariable**](TaskFormsApi.md#getTaskFormVariable) | **GET** /app/rest/task-forms/{taskId}/variables | Retrieve Task Form variables
[**saveTaskForm**](TaskFormsApi.md#saveTaskForm) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form


<a name="completeTaskForm"></a>
# **completeTaskForm**
> completeTaskForm(taskId, completeTaskFormRepresentation)

Complete a Task Form

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var completeTaskFormRepresentation = new this.alfrescoJsApi.activiti.CompleteFormRepresentation(); // CompleteFormRepresentation | completeTaskFormRepresentation

this.alfrescoJsApi.activiti.taskFormsApi.completeTaskForm(taskId, completeTaskFormRepresentation);
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

<a name="getRestFieldValues"></a>
# **getRestFieldValues**
> [FormValueRepresentation] getRestFieldValues(taskId, field, column)

Retrieve Column Field Values

Specific case to retrieve information on a specific column

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

var field = "field_example"; // String | field

var column = "column_example"; // String | column

this.alfrescoJsApi.activiti.taskFormsApi.getRestFieldValues(taskId, field, column);
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

this.alfrescoJsApi.activiti.taskFormsApi.getRestFieldValues(taskId, field);
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

<a name="getTaskForm"></a>
# **getTaskForm**
> FormDefinitionRepresentation getTaskForm(taskId)

Retrieve Task Form

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskFormsApi.getTaskForm(taskId);
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
 
<a name="getTaskFormVariables"></a>
# **getTaskFormVariables**
> ProcessInstanceVariableRepresentation getTaskFormVariables(taskId)

Retrieve Task Form Variables

### Example
```javascript

var taskId = "taskId_example"; // String | taskId

this.alfrescoJsApi.activiti.taskFormsApi.getTaskFormVariables(taskId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **String**| taskId | 

### Return type

[**ProcessInstanceVariableRepresentation**](ProcessInstanceVariableRepresentation.md)

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

this.alfrescoJsApi.activiti.taskFormsApi.saveTaskForm(taskId, saveTaskFormRepresentation);
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

