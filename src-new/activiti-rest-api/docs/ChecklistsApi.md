# .ChecklistsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSubtaskUsingPOST**](ChecklistsApi.md#addSubtaskUsingPOST) | **POST** /enterprise/tasks/{taskId}/checklist | Create a task checklist
[**getChecklistUsingGET**](ChecklistsApi.md#getChecklistUsingGET) | **GET** /enterprise/tasks/{taskId}/checklist | Get checklist for a task
[**orderChecklistUsingPUT**](ChecklistsApi.md#orderChecklistUsingPUT) | **PUT** /enterprise/tasks/{taskId}/checklist | Change the order of items on a checklist


<a name="addSubtaskUsingPOST"></a>
# **addSubtaskUsingPOST**
> TaskRepresentation addSubtaskUsingPOST(taskIdtaskRepresentation)

Create a task checklist

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ChecklistsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.addSubtaskUsingPOST(taskIdtaskRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **taskRepresentation** | [**TaskRepresentation**](TaskRepresentation.md)| taskRepresentation | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getChecklistUsingGET"></a>
# **getChecklistUsingGET**
> ResultListDataRepresentationTaskRepresentation getChecklistUsingGET(taskId)

Get checklist for a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ChecklistsApi();


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
 **taskId** | **string**| taskId | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderChecklistUsingPUT"></a>
# **orderChecklistUsingPUT**
> orderChecklistUsingPUT(taskIdorderRepresentation)

Change the order of items on a checklist

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ChecklistsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderChecklistUsingPUT(taskIdorderRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **orderRepresentation** | [**ChecklistOrderRepresentation**](ChecklistOrderRepresentation.md)| orderRepresentation | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

