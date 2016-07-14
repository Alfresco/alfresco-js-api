# ActivitiPublicRestApi.TaskFormsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeTaskFormUsingPOST**](TaskFormsApi.md#completeTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId} | Complete a Task Form
[**getRestFieldValuesUsingGET1**](TaskFormsApi.md#getRestFieldValuesUsingGET1) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve Column Field Values
[**getRestFieldValuesUsingGET2**](TaskFormsApi.md#getRestFieldValuesUsingGET2) | **GET** /api/enterprise/task-forms/{taskId}/form-values/{field} | Retrieve Populated Field Values
[**getTaskFormUsingGET**](TaskFormsApi.md#getTaskFormUsingGET) | **GET** /api/enterprise/task-forms/{taskId} | Retrieve Task Form
[**saveTaskFormUsingPOST**](TaskFormsApi.md#saveTaskFormUsingPOST) | **POST** /api/enterprise/task-forms/{taskId}/save-form | Save Task Form


<a name="completeTaskFormUsingPOST"></a>
# **completeTaskFormUsingPOST**
> completeTaskFormUsingPOST(taskId, completeTaskFormRepresentation)

Complete a Task Form

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskFormsApi();

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

<a name="getRestFieldValuesUsingGET1"></a>
# **getRestFieldValuesUsingGET1**
> [FormValueRepresentation] getRestFieldValuesUsingGET1(taskId, field, column)

Retrieve Column Field Values

Specific case to retrieve information on a specific column

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskFormsApi();

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

var apiInstance = new ActivitiPublicRestApi.TaskFormsApi();

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

<a name="getTaskFormUsingGET"></a>
# **getTaskFormUsingGET**
> FormDefinitionRepresentation getTaskFormUsingGET(taskId)

Retrieve Task Form

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskFormsApi();

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

<a name="saveTaskFormUsingPOST"></a>
# **saveTaskFormUsingPOST**
> saveTaskFormUsingPOST(taskId, saveTaskFormRepresentation)

Save Task Form

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.TaskFormsApi();

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

