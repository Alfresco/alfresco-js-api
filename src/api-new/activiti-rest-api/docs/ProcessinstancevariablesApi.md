# .ProcessinstancevariablesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateProcessInstanceVariablesUsingPUT**](ProcessinstancevariablesApi.md#createOrUpdateProcessInstanceVariablesUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/variables | Create or update variables
[**createProcessInstanceVariablesUsingPOST**](ProcessinstancevariablesApi.md#createProcessInstanceVariablesUsingPOST) | **POST** /enterprise/process-instances/{processInstanceId}/variables | Create variables
[**deleteProcessInstanceVariableUsingDELETE**](ProcessinstancevariablesApi.md#deleteProcessInstanceVariableUsingDELETE) | **DELETE** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Delete a variable
[**getProcessInstanceVariableUsingGET**](ProcessinstancevariablesApi.md#getProcessInstanceVariableUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Get a variable
[**getProcessInstanceVariablesUsingGET**](ProcessinstancevariablesApi.md#getProcessInstanceVariablesUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/variables | List variables
[**updateProcessInstanceVariableUsingPUT**](ProcessinstancevariablesApi.md#updateProcessInstanceVariableUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Update a variable


<a name="createOrUpdateProcessInstanceVariablesUsingPUT"></a>
# **createOrUpdateProcessInstanceVariablesUsingPUT**
> Array<RestVariable> createOrUpdateProcessInstanceVariablesUsingPUT(processInstanceIdrestVariables)

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


processinstancevariablesApi.createOrUpdateProcessInstanceVariablesUsingPUT(processInstanceIdrestVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 
 **restVariables** | [**Array<RestVariable>**](RestVariable.md)| restVariables | 

### Return type

[**Array<RestVariable>**](RestVariable.md)

<a name="createProcessInstanceVariablesUsingPOST"></a>
# **createProcessInstanceVariablesUsingPOST**
> Array<RestVariable> createProcessInstanceVariablesUsingPOST(processInstanceIdrestVariables)

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


processinstancevariablesApi.createProcessInstanceVariablesUsingPOST(processInstanceIdrestVariables).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 
 **restVariables** | [**Array<RestVariable>**](RestVariable.md)| restVariables | 

### Return type

[**Array<RestVariable>**](RestVariable.md)

<a name="deleteProcessInstanceVariableUsingDELETE"></a>
# **deleteProcessInstanceVariableUsingDELETE**
> deleteProcessInstanceVariableUsingDELETE(processInstanceIdvariableName)

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


processinstancevariablesApi.deleteProcessInstanceVariableUsingDELETE(processInstanceIdvariableName).then(() => {
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

<a name="getProcessInstanceVariableUsingGET"></a>
# **getProcessInstanceVariableUsingGET**
> RestVariable getProcessInstanceVariableUsingGET(processInstanceIdvariableName)

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


processinstancevariablesApi.getProcessInstanceVariableUsingGET(processInstanceIdvariableName).then((data) => {
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

<a name="getProcessInstanceVariablesUsingGET"></a>
# **getProcessInstanceVariablesUsingGET**
> Array<RestVariable> getProcessInstanceVariablesUsingGET(processInstanceId)

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


processinstancevariablesApi.getProcessInstanceVariablesUsingGET(processInstanceId).then((data) => {
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

[**Array<RestVariable>**](RestVariable.md)

<a name="updateProcessInstanceVariableUsingPUT"></a>
# **updateProcessInstanceVariableUsingPUT**
> RestVariable updateProcessInstanceVariableUsingPUT(processInstanceIdvariableNamerestVariable)

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


processinstancevariablesApi.updateProcessInstanceVariableUsingPUT(processInstanceIdvariableNamerestVariable).then((data) => {
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

