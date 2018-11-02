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
import SubmittedformsApi from 'SubmittedformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let submittedformsApi = new SubmittedformsApi(this.alfrescoApi);

let opts = { 
  'submittedBy': 789 // number | submittedBy
  'start': 56 // number | start
  'size': 56 // number | size
};

submittedformsApi.getFormSubmittedFromsUsingGET(formIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

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

<a name="getProcessSubmittedFromsUsingGET"></a>
# **getProcessSubmittedFromsUsingGET**
> ResultListDataRepresentationSubmittedFormRepresentation getProcessSubmittedFromsUsingGET(processId)

List submissions for a process instance

### Example
```javascript
import SubmittedformsApi from 'SubmittedformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let submittedformsApi = new SubmittedformsApi(this.alfrescoApi);


submittedformsApi.getProcessSubmittedFromsUsingGET(processId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **string**| processId | 

### Return type

[**ResultListDataRepresentationSubmittedFormRepresentation**](ResultListDataRepresentationSubmittedFormRepresentation.md)

<a name="getSubmittedFromUsingGET"></a>
# **getSubmittedFromUsingGET**
> SubmittedFormRepresentation getSubmittedFromUsingGET(submittedFormId)

Get a form submission

### Example
```javascript
import SubmittedformsApi from 'SubmittedformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let submittedformsApi = new SubmittedformsApi(this.alfrescoApi);


submittedformsApi.getSubmittedFromUsingGET(submittedFormId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **submittedFormId** | **number**| submittedFormId | 

### Return type

[**SubmittedFormRepresentation**](SubmittedFormRepresentation.md)

<a name="getTaskSubmittedFromsUsingGET"></a>
# **getTaskSubmittedFromsUsingGET**
> SubmittedFormRepresentation getTaskSubmittedFromsUsingGET(taskId)

Get the submitted form for a task

### Example
```javascript
import SubmittedformsApi from 'SubmittedformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let submittedformsApi = new SubmittedformsApi(this.alfrescoApi);


submittedformsApi.getTaskSubmittedFromsUsingGET(taskId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

[**SubmittedFormRepresentation**](SubmittedFormRepresentation.md)

