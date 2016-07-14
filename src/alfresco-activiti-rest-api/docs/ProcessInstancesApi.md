# ActivitiPublicRestApi.ProcessInstancesApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addProcessInstanceCommentUsingPOST**](ProcessInstancesApi.md#addProcessInstanceCommentUsingPOST) | **POST** /api/enterprise/process-instances/{processInstanceId}/comments | Add a comment to a Process
[**deleteProcessInstanceUsingDELETE**](ProcessInstancesApi.md#deleteProcessInstanceUsingDELETE) | **DELETE** /api/enterprise/process-instances/{processInstanceId} | Delete a process instance
[**getProcessInstanceCommentsUsingGET**](ProcessInstancesApi.md#getProcessInstanceCommentsUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/comments | Comment list added to Process
[**getProcessInstanceStartFormUsingGET**](ProcessInstancesApi.md#getProcessInstanceStartFormUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId}/start-form | Get process start form
[**getProcessInstanceUsingGET**](ProcessInstancesApi.md#getProcessInstanceUsingGET) | **GET** /api/enterprise/process-instances/{processInstanceId} | Retrieve a process instance information


<a name="addProcessInstanceCommentUsingPOST"></a>
# **addProcessInstanceCommentUsingPOST**
> CommentRepresentation addProcessInstanceCommentUsingPOST(commentRequest, processInstanceId)

Add a comment to a Process

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesApi();

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

<a name="deleteProcessInstanceUsingDELETE"></a>
# **deleteProcessInstanceUsingDELETE**
> deleteProcessInstanceUsingDELETE(processInstanceId)

Delete a process instance

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProcessInstanceUsingDELETE(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

null (empty response body)

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

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesApi();

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

<a name="getProcessInstanceStartFormUsingGET"></a>
# **getProcessInstanceStartFormUsingGET**
> FormDefinitionRepresentation getProcessInstanceStartFormUsingGET(processInstanceId)

Get process start form

When a process definitions has a start form (hasStartForm is true in the call above), the start form can be retrieved

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceStartFormUsingGET(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceUsingGET"></a>
# **getProcessInstanceUsingGET**
> ProcessInstanceRepresentation getProcessInstanceUsingGET(processInstanceId)

Retrieve a process instance information

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.ProcessInstancesApi();

var processInstanceId = "processInstanceId_example"; // String | processInstanceId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceUsingGET(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **String**| processInstanceId | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

