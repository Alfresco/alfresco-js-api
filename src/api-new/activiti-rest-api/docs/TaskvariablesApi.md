# .TaskvariablesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskVariableUsingPOST**](TaskvariablesApi.md#createTaskVariableUsingPOST) | **POST** /enterprise/tasks/{taskId}/variables | Create variables
[**deleteAllLocalTaskVariablesUsingDELETE**](TaskvariablesApi.md#deleteAllLocalTaskVariablesUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/variables | Create or update variables
[**deleteVariableUsingDELETE**](TaskvariablesApi.md#deleteVariableUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/variables/{variableName} | Delete a variable
[**getVariableUsingGET**](TaskvariablesApi.md#getVariableUsingGET) | **GET** /enterprise/tasks/{taskId}/variables/{variableName} | Get a variable
[**getVariablesUsingGET**](TaskvariablesApi.md#getVariablesUsingGET) | **GET** /enterprise/tasks/{taskId}/variables | List variables
[**updateVariableUsingPUT**](TaskvariablesApi.md#updateVariableUsingPUT) | **PUT** /enterprise/tasks/{taskId}/variables/{variableName} | Update a variable


<a name="createTaskVariableUsingPOST"></a>
# **createTaskVariableUsingPOST**
> Array<RestVariable> createTaskVariableUsingPOST(taskIdrestVariables)

Create variables

### Example
```javascript
import TaskvariablesApi from 'TaskvariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskvariablesApi = new TaskvariablesApi(this.alfrescoApi);


taskvariablesApi.createTaskVariableUsingPOST(taskIdrestVariables).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **restVariables** | [**Array&lt;RestVariable&gt;**](RestVariable.md)| restVariables | 

### Return type

[**Array&lt;RestVariable&gt;**](RestVariable.md)

<a name="deleteAllLocalTaskVariablesUsingDELETE"></a>
# **deleteAllLocalTaskVariablesUsingDELETE**
> deleteAllLocalTaskVariablesUsingDELETE(taskId)

Create or update variables

### Example
```javascript
import TaskvariablesApi from 'TaskvariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskvariablesApi = new TaskvariablesApi(this.alfrescoApi);


taskvariablesApi.deleteAllLocalTaskVariablesUsingDELETE(taskId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

null (empty response body)

<a name="deleteVariableUsingDELETE"></a>
# **deleteVariableUsingDELETE**
> deleteVariableUsingDELETE(taskIdvariableNameopts)

Delete a variable

### Example
```javascript
import TaskvariablesApi from 'TaskvariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskvariablesApi = new TaskvariablesApi(this.alfrescoApi);

let opts = { 
  'scope': scope_example // string | scope
};

taskvariablesApi.deleteVariableUsingDELETE(taskIdvariableNameopts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **variableName** | **string**| variableName | 
 **scope** | **string**| scope | [optional] 

### Return type

null (empty response body)

<a name="getVariableUsingGET"></a>
# **getVariableUsingGET**
> RestVariable getVariableUsingGET(taskIdvariableNameopts)

Get a variable

### Example
```javascript
import TaskvariablesApi from 'TaskvariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskvariablesApi = new TaskvariablesApi(this.alfrescoApi);

let opts = { 
  'scope': scope_example // string | scope
};

taskvariablesApi.getVariableUsingGET(taskIdvariableNameopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **variableName** | **string**| variableName | 
 **scope** | **string**| scope | [optional] 

### Return type

[**RestVariable**](RestVariable.md)

<a name="getVariablesUsingGET"></a>
# **getVariablesUsingGET**
> Array<RestVariable> getVariablesUsingGET(taskIdopts)

List variables

### Example
```javascript
import TaskvariablesApi from 'TaskvariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskvariablesApi = new TaskvariablesApi(this.alfrescoApi);

let opts = { 
  'scope': scope_example // string | scope
};

taskvariablesApi.getVariablesUsingGET(taskIdopts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **scope** | **string**| scope | [optional] 

### Return type

[**Array&lt;RestVariable&gt;**](RestVariable.md)

<a name="updateVariableUsingPUT"></a>
# **updateVariableUsingPUT**
> RestVariable updateVariableUsingPUT(taskIdvariableNamerestVariable)

Update a variable

### Example
```javascript
import TaskvariablesApi from 'TaskvariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskvariablesApi = new TaskvariablesApi(this.alfrescoApi);


taskvariablesApi.updateVariableUsingPUT(taskIdvariableNamerestVariable).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **variableName** | **string**| variableName | 
 **restVariable** | [**RestVariable**](RestVariable.md)| restVariable | 

### Return type

[**RestVariable**](RestVariable.md)

