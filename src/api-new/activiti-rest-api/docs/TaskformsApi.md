# .TaskformsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**completeTaskFormUsingPOST**](TaskformsApi.md#completeTaskFormUsingPOST) | **POST** /enterprise/task-forms/{taskId} | Complete a task form
[**getProcessInstanceVariablesUsingGET1**](TaskformsApi.md#getProcessInstanceVariablesUsingGET1) | **GET** /enterprise/task-forms/{taskId}/variables | Get task variables
[**getRestFieldValuesUsingGET1**](TaskformsApi.md#getRestFieldValuesUsingGET1) | **GET** /enterprise/task-forms/{taskId}/form-values/{field}/{column} | Retrieve column field values
[**getRestFieldValuesUsingGET2**](TaskformsApi.md#getRestFieldValuesUsingGET2) | **GET** /enterprise/task-forms/{taskId}/form-values/{field} | Retrieve populated field values
[**getTaskFormUsingGET**](TaskformsApi.md#getTaskFormUsingGET) | **GET** /enterprise/task-forms/{taskId} | Get a task form
[**saveTaskFormUsingPOST**](TaskformsApi.md#saveTaskFormUsingPOST) | **POST** /enterprise/task-forms/{taskId}/save-form | Save a task form


<a name="completeTaskFormUsingPOST"></a>
# **completeTaskFormUsingPOST**
> completeTaskFormUsingPOST(taskIdcompleteTaskFormRepresentation)

Complete a task form

### Example
```javascript
import TaskformsApi from 'TaskformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskformsApi = new TaskformsApi(this.alfrescoApi);


taskformsApi.completeTaskFormUsingPOST(taskIdcompleteTaskFormRepresentation).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **completeTaskFormRepresentation** | [**CompleteFormRepresentation**](CompleteFormRepresentation.md)| completeTaskFormRepresentation | 

### Return type

null (empty response body)

<a name="getProcessInstanceVariablesUsingGET1"></a>
# **getProcessInstanceVariablesUsingGET1**
> Array<ProcessInstanceVariableRepresentation> getProcessInstanceVariablesUsingGET1(taskId)

Get task variables

### Example
```javascript
import TaskformsApi from 'TaskformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskformsApi = new TaskformsApi(this.alfrescoApi);


taskformsApi.getProcessInstanceVariablesUsingGET1(taskId).then((data) => {
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

[**Array<ProcessInstanceVariableRepresentation>**](ProcessInstanceVariableRepresentation.md)

<a name="getRestFieldValuesUsingGET1"></a>
# **getRestFieldValuesUsingGET1**
> Array<FormValueRepresentation> getRestFieldValuesUsingGET1(taskIdfieldcolumn)

Retrieve column field values

Specific case to retrieve information on a specific column

### Example
```javascript
import TaskformsApi from 'TaskformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskformsApi = new TaskformsApi(this.alfrescoApi);


taskformsApi.getRestFieldValuesUsingGET1(taskIdfieldcolumn).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **field** | **string**| field | 
 **column** | **string**| column | 

### Return type

[**Array<FormValueRepresentation>**](FormValueRepresentation.md)

<a name="getRestFieldValuesUsingGET2"></a>
# **getRestFieldValuesUsingGET2**
> Array<FormValueRepresentation> getRestFieldValuesUsingGET2(taskIdfield)

Retrieve populated field values

Form field values that are populated through a REST backend, can be retrieved via this service

### Example
```javascript
import TaskformsApi from 'TaskformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskformsApi = new TaskformsApi(this.alfrescoApi);


taskformsApi.getRestFieldValuesUsingGET2(taskIdfield).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **field** | **string**| field | 

### Return type

[**Array<FormValueRepresentation>**](FormValueRepresentation.md)

<a name="getTaskFormUsingGET"></a>
# **getTaskFormUsingGET**
> FormDefinitionRepresentation getTaskFormUsingGET(taskId)

Get a task form

### Example
```javascript
import TaskformsApi from 'TaskformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskformsApi = new TaskformsApi(this.alfrescoApi);


taskformsApi.getTaskFormUsingGET(taskId).then((data) => {
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

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

<a name="saveTaskFormUsingPOST"></a>
# **saveTaskFormUsingPOST**
> saveTaskFormUsingPOST(taskIdsaveTaskFormRepresentation)

Save a task form

### Example
```javascript
import TaskformsApi from 'TaskformsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskformsApi = new TaskformsApi(this.alfrescoApi);


taskformsApi.saveTaskFormUsingPOST(taskIdsaveTaskFormRepresentation).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **saveTaskFormRepresentation** | [**SaveFormRepresentation**](SaveFormRepresentation.md)| saveTaskFormRepresentation | 

### Return type

null (empty response body)

