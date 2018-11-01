# .SubmittedformsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormSubmittedFromsUsingGET**](SubmittedformsApi.md#getFormSubmittedFromsUsingGET) | **GET** /enterprise/form-submitted-forms/{formId} | List submissions for a form
[**getProcessSubmittedFromsUsingGET**](SubmittedformsApi.md#getProcessSubmittedFromsUsingGET) | **GET** /enterprise/process-submitted-forms/{processId} | List submissions for a process instance
[**getSubmittedFromUsingGET**](SubmittedformsApi.md#getSubmittedFromUsingGET) | **GET** /enterprise/submitted-forms/{submittedFormId} | Get a form submission
[**getTaskSubmittedFromsUsingGET**](SubmittedformsApi.md#getTaskSubmittedFromsUsingGET) | **GET** /enterprise/task-submitted-form/{taskId} | Get the submitted form for a task


<a name="getFormSubmittedFromsUsingGET"></a>
# **getFormSubmittedFromsUsingGET**
> ResultListDataRepresentationSubmittedFormRepresentation getFormSubmittedFromsUsingGET(formIdopts)

List submissions for a form

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SubmittedformsApi();

var opts = { 
  'submittedBy': 789 // number | submittedBy
  'start': 56 // number | start
  'size': 56 // number | size
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFormSubmittedFromsUsingGET(formIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 
 **submittedBy** | **number**| submittedBy | [optional] 
 **start** | **number**| start | [optional] 
 **size** | **number**| size | [optional] 

### Return type

[**ResultListDataRepresentationSubmittedFormRepresentation**](ResultListDataRepresentationSubmittedFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessSubmittedFromsUsingGET"></a>
# **getProcessSubmittedFromsUsingGET**
> ResultListDataRepresentationSubmittedFormRepresentation getProcessSubmittedFromsUsingGET(processId)

List submissions for a process instance

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SubmittedformsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessSubmittedFromsUsingGET(processId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **string**| processId | 

### Return type

[**ResultListDataRepresentationSubmittedFormRepresentation**](ResultListDataRepresentationSubmittedFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSubmittedFromUsingGET"></a>
# **getSubmittedFromUsingGET**
> SubmittedFormRepresentation getSubmittedFromUsingGET(submittedFormId)

Get a form submission

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SubmittedformsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getSubmittedFromUsingGET(submittedFormId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submittedFormId** | **number**| submittedFormId | 

### Return type

[**SubmittedFormRepresentation**](SubmittedFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskSubmittedFromsUsingGET"></a>
# **getTaskSubmittedFromsUsingGET**
> SubmittedFormRepresentation getTaskSubmittedFromsUsingGET(taskId)

Get the submitted form for a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .SubmittedformsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskSubmittedFromsUsingGET(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

[**SubmittedFormRepresentation**](SubmittedFormRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

