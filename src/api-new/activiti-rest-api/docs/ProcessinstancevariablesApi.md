# .ProcessinstancevariablesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateProcessInstanceVariables**](ProcessinstancevariablesApi.md#createOrUpdateProcessInstanceVariables) | **PUT** /enterprise/process-instances/{processInstanceId}/variables | Create or update variables
[**createProcessInstanceVariables**](ProcessinstancevariablesApi.md#createProcessInstanceVariables) | **POST** /enterprise/process-instances/{processInstanceId}/variables | Create variables
[**deleteProcessInstanceVariable**](ProcessinstancevariablesApi.md#deleteProcessInstanceVariable) | **DELETE** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Delete a variable
[**getProcessInstanceVariable**](ProcessinstancevariablesApi.md#getProcessInstanceVariable) | **GET** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Get a variable
[**getProcessInstanceVariables**](ProcessinstancevariablesApi.md#getProcessInstanceVariables) | **GET** /enterprise/process-instances/{processInstanceId}/variables | List variables
[**updateProcessInstanceVariable**](ProcessinstancevariablesApi.md#updateProcessInstanceVariable) | **PUT** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Update a variable


<a name="createOrUpdateProcessInstanceVariables"></a>
# **createOrUpdateProcessInstanceVariables**
> RestVariable createOrUpdateProcessInstanceVariables(processInstanceIdrestVariables)

Create or update variables

### Example
```javascript
import ProcessinstancevariablesApi from 'ProcessinstancevariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancevariablesApi = new ProcessinstancevariablesApi(this.alfrescoApi);


processinstancevariablesApi.createOrUpdateProcessInstanceVariables(processInstanceIdrestVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 
 **restVariables** | [**RestVariable**](RestVariable.md)| restVariables | 

### Return type

[**RestVariable**](RestVariable.md)

<a name="createProcessInstanceVariables"></a>
# **createProcessInstanceVariables**
> RestVariable createProcessInstanceVariables(processInstanceIdrestVariables)

Create variables

### Example
```javascript
import ProcessinstancevariablesApi from 'ProcessinstancevariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancevariablesApi = new ProcessinstancevariablesApi(this.alfrescoApi);


processinstancevariablesApi.createProcessInstanceVariables(processInstanceIdrestVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 
 **restVariables** | [**RestVariable**](RestVariable.md)| restVariables | 

### Return type

[**RestVariable**](RestVariable.md)

<a name="deleteProcessInstanceVariable"></a>
# **deleteProcessInstanceVariable**
> deleteProcessInstanceVariable(processInstanceIdvariableName)

Delete a variable

### Example
```javascript
import ProcessinstancevariablesApi from 'ProcessinstancevariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancevariablesApi = new ProcessinstancevariablesApi(this.alfrescoApi);


processinstancevariablesApi.deleteProcessInstanceVariable(processInstanceIdvariableName).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **variableName** | **string**| variableName | 

### Return type

null (empty response body)

<a name="getProcessInstanceVariable"></a>
# **getProcessInstanceVariable**
> RestVariable getProcessInstanceVariable(processInstanceIdvariableName)

Get a variable

### Example
```javascript
import ProcessinstancevariablesApi from 'ProcessinstancevariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancevariablesApi = new ProcessinstancevariablesApi(this.alfrescoApi);


processinstancevariablesApi.getProcessInstanceVariable(processInstanceIdvariableName).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **variableName** | **string**| variableName | 

### Return type

[**RestVariable**](RestVariable.md)

<a name="getProcessInstanceVariables"></a>
# **getProcessInstanceVariables**
> RestVariable getProcessInstanceVariables(processInstanceId)

List variables

### Example
```javascript
import ProcessinstancevariablesApi from 'ProcessinstancevariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancevariablesApi = new ProcessinstancevariablesApi(this.alfrescoApi);


processinstancevariablesApi.getProcessInstanceVariables(processInstanceId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 

### Return type

[**RestVariable**](RestVariable.md)

<a name="updateProcessInstanceVariable"></a>
# **updateProcessInstanceVariable**
> RestVariable updateProcessInstanceVariable(processInstanceIdvariableNamerestVariable)

Update a variable

### Example
```javascript
import ProcessinstancevariablesApi from 'ProcessinstancevariablesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancevariablesApi = new ProcessinstancevariablesApi(this.alfrescoApi);


processinstancevariablesApi.updateProcessInstanceVariable(processInstanceIdvariableNamerestVariable).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **variableName** | **string**| variableName | 
 **restVariable** | [**RestVariable**](RestVariable.md)| restVariable | 

### Return type

[**RestVariable**](RestVariable.md)

