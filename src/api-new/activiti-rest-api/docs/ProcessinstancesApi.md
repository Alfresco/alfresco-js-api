# .ProcessinstancesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateProcessInstanceUsingPUT**](ProcessinstancesApi.md#activateProcessInstanceUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/activate | Activate a process instance
[**createIdentityLinkUsingPOST1**](ProcessinstancesApi.md#createIdentityLinkUsingPOST1) | **POST** /enterprise/process-instances/{processInstanceId}/identitylinks | Add a user or group involvement to a process instance
[**deleteIdentityLinkUsingDELETE1**](ProcessinstancesApi.md#deleteIdentityLinkUsingDELETE1) | **DELETE** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Remove a user or group involvement from a process instance
[**deleteProcessInstanceUsingDELETE**](ProcessinstancesApi.md#deleteProcessInstanceUsingDELETE) | **DELETE** /enterprise/process-instances/{processInstanceId} | Cancel or remove a process instance
[**filterProcessInstancesUsingPOST**](ProcessinstancesApi.md#filterProcessInstancesUsingPOST) | **POST** /enterprise/process-instances/filter | List process instances using a filter
[**getHistoricProcessInstanceDecisionTasksUsingGET**](ProcessinstancesApi.md#getHistoricProcessInstanceDecisionTasksUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/decision-tasks | Get decision tasks in a process instance
[**getHistoricProcessInstanceVariablesUsingGET**](ProcessinstancesApi.md#getHistoricProcessInstanceVariablesUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/historic-variables | Get historic variables for a process instance
[**getHistoricProcessInstancesUsingPOST**](ProcessinstancesApi.md#getHistoricProcessInstancesUsingPOST) | **POST** /enterprise/historic-process-instances/query | Query historic process instances
[**getIdentityLinkTypeUsingGET1**](ProcessinstancesApi.md#getIdentityLinkTypeUsingGET1) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Get a user or group involvement with a process instance
[**getIdentityLinksForFamilyUsingGET1**](ProcessinstancesApi.md#getIdentityLinksForFamilyUsingGET1) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family} | List either the users or groups involved with a process instance
[**getIdentityLinksUsingGET1**](ProcessinstancesApi.md#getIdentityLinksUsingGET1) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks | List the users and groups involved with a process instance
[**getProcessInstanceContentUsingGET**](ProcessinstancesApi.md#getProcessInstanceContentUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/field-content | List content attached to process instance fields
[**getProcessInstanceDiagramUsingGET**](ProcessinstancesApi.md#getProcessInstanceDiagramUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/diagram | Get the process diagram for the process instance
[**getProcessInstanceStartFormUsingGET**](ProcessinstancesApi.md#getProcessInstanceStartFormUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/start-form | Get a process instance start form
[**getProcessInstanceUsingGET**](ProcessinstancesApi.md#getProcessInstanceUsingGET) | **GET** /enterprise/process-instances/{processInstanceId} | Get a process instance
[**getProcessInstancesUsingPOST**](ProcessinstancesApi.md#getProcessInstancesUsingPOST) | **POST** /enterprise/process-instances/query | Query process instances
[**getTaskAuditLogUsingGET**](ProcessinstancesApi.md#getTaskAuditLogUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/audit-log | Get the audit log for a process instance
[**startNewProcessInstanceUsingPOST**](ProcessinstancesApi.md#startNewProcessInstanceUsingPOST) | **POST** /enterprise/process-instances | Start a process instance
[**suspendProcessInstanceUsingPUT**](ProcessinstancesApi.md#suspendProcessInstanceUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/suspend | Suspend a process instance


<a name="activateProcessInstanceUsingPUT"></a>
# **activateProcessInstanceUsingPUT**
> ProcessInstanceRepresentation activateProcessInstanceUsingPUT(processInstanceId)

Activate a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.activateProcessInstanceUsingPUT(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

<a name="createIdentityLinkUsingPOST1"></a>
# **createIdentityLinkUsingPOST1**
> IdentityLinkRepresentation createIdentityLinkUsingPOST1(processInstanceIdidentityLinkRepresentation)

Add a user or group involvement to a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.createIdentityLinkUsingPOST1(processInstanceIdidentityLinkRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **identityLinkRepresentation** | [**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)| identityLinkRepresentation | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="deleteIdentityLinkUsingDELETE1"></a>
# **deleteIdentityLinkUsingDELETE1**
> deleteIdentityLinkUsingDELETE1(processInstanceIdfamilyidentityIdtype)

Remove a user or group involvement from a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.deleteIdentityLinkUsingDELETE1(processInstanceIdfamilyidentityIdtype).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **family** | **string**| family | 
 **identityId** | **string**| identityId | 
 **type** | **string**| type | 

### Return type

null (empty response body)

<a name="deleteProcessInstanceUsingDELETE"></a>
# **deleteProcessInstanceUsingDELETE**
> deleteProcessInstanceUsingDELETE(processInstanceId)

Cancel or remove a process instance

If the process instance has not yet been completed, it will be cancelled. If it has already finished or been cancelled then the process instance will be removed and will no longer appear in queries.

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.deleteProcessInstanceUsingDELETE(processInstanceId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

null (empty response body)

<a name="filterProcessInstancesUsingPOST"></a>
# **filterProcessInstancesUsingPOST**
> ResultListDataRepresentationProcessInstanceRepresentation filterProcessInstancesUsingPOST(filterRequest)

List process instances using a filter

The request body provided must define either a valid filterId value or filter object

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.filterProcessInstancesUsingPOST(filterRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterRequest** | [**ProcessInstanceFilterRequestRepresentation**](ProcessInstanceFilterRequestRepresentation.md)| filterRequest | 

### Return type

[**ResultListDataRepresentationProcessInstanceRepresentation**](ResultListDataRepresentationProcessInstanceRepresentation.md)

<a name="getHistoricProcessInstanceDecisionTasksUsingGET"></a>
# **getHistoricProcessInstanceDecisionTasksUsingGET**
> ResultListDataRepresentationDecisionTaskRepresentation getHistoricProcessInstanceDecisionTasksUsingGET(processInstanceId)

Get decision tasks in a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getHistoricProcessInstanceDecisionTasksUsingGET(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**ResultListDataRepresentationDecisionTaskRepresentation**](ResultListDataRepresentationDecisionTaskRepresentation.md)

<a name="getHistoricProcessInstanceVariablesUsingGET"></a>
# **getHistoricProcessInstanceVariablesUsingGET**
> Array<ProcessInstanceVariableRepresentation> getHistoricProcessInstanceVariablesUsingGET(processInstanceId)

Get historic variables for a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getHistoricProcessInstanceVariablesUsingGET(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**Array&lt;ProcessInstanceVariableRepresentation&gt;**](ProcessInstanceVariableRepresentation.md)

<a name="getHistoricProcessInstancesUsingPOST"></a>
# **getHistoricProcessInstancesUsingPOST**
> ResultListDataRepresentationProcessInstanceRepresentation getHistoricProcessInstancesUsingPOST(queryRequest)

Query historic process instances

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getHistoricProcessInstancesUsingPOST(queryRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryRequest** | [**HistoricProcessInstanceQueryRepresentation**](HistoricProcessInstanceQueryRepresentation.md)| queryRequest | 

### Return type

[**ResultListDataRepresentationProcessInstanceRepresentation**](ResultListDataRepresentationProcessInstanceRepresentation.md)

<a name="getIdentityLinkTypeUsingGET1"></a>
# **getIdentityLinkTypeUsingGET1**
> IdentityLinkRepresentation getIdentityLinkTypeUsingGET1(processInstanceIdfamilyidentityIdtype)

Get a user or group involvement with a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getIdentityLinkTypeUsingGET1(processInstanceIdfamilyidentityIdtype).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **family** | **string**| family | 
 **identityId** | **string**| identityId | 
 **type** | **string**| type | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="getIdentityLinksForFamilyUsingGET1"></a>
# **getIdentityLinksForFamilyUsingGET1**
> Array<IdentityLinkRepresentation> getIdentityLinksForFamilyUsingGET1(processInstanceIdfamily)

List either the users or groups involved with a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getIdentityLinksForFamilyUsingGET1(processInstanceIdfamily).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **family** | **string**| family | 

### Return type

[**Array&lt;IdentityLinkRepresentation&gt;**](IdentityLinkRepresentation.md)

<a name="getIdentityLinksUsingGET1"></a>
# **getIdentityLinksUsingGET1**
> Array<IdentityLinkRepresentation> getIdentityLinksUsingGET1(processInstanceId)

List the users and groups involved with a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getIdentityLinksUsingGET1(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**Array&lt;IdentityLinkRepresentation&gt;**](IdentityLinkRepresentation.md)

<a name="getProcessInstanceContentUsingGET"></a>
# **getProcessInstanceContentUsingGET**
> ResultListDataRepresentationProcessContentRepresentation getProcessInstanceContentUsingGET(processInstanceId)

List content attached to process instance fields

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstanceContentUsingGET(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**ResultListDataRepresentationProcessContentRepresentation**](ResultListDataRepresentationProcessContentRepresentation.md)

<a name="getProcessInstanceDiagramUsingGET"></a>
# **getProcessInstanceDiagramUsingGET**
> Array<string> getProcessInstanceDiagramUsingGET(processInstanceId)

Get the process diagram for the process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstanceDiagramUsingGET(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

**Array<string>**

<a name="getProcessInstanceStartFormUsingGET"></a>
# **getProcessInstanceStartFormUsingGET**
> FormDefinitionRepresentation getProcessInstanceStartFormUsingGET(processInstanceId)

Get a process instance start form

The start form for a process instance can be retrieved when the process definition has a start form defined (hasStartForm &#x3D; true on the process instance)

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstanceStartFormUsingGET(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

<a name="getProcessInstanceUsingGET"></a>
# **getProcessInstanceUsingGET**
> ProcessInstanceRepresentation getProcessInstanceUsingGET(processInstanceId)

Get a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstanceUsingGET(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

<a name="getProcessInstancesUsingPOST"></a>
# **getProcessInstancesUsingPOST**
> ResultListDataRepresentationProcessInstanceRepresentation getProcessInstancesUsingPOST(processInstancesQuery)

Query process instances

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstancesUsingPOST(processInstancesQuery).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstancesQuery** | [**ProcessInstanceQueryRepresentation**](ProcessInstanceQueryRepresentation.md)| processInstancesQuery | 

### Return type

[**ResultListDataRepresentationProcessInstanceRepresentation**](ResultListDataRepresentationProcessInstanceRepresentation.md)

<a name="getTaskAuditLogUsingGET"></a>
# **getTaskAuditLogUsingGET**
> ProcessInstanceAuditInfoRepresentation getTaskAuditLogUsingGET(processInstanceId)

Get the audit log for a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getTaskAuditLogUsingGET(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**ProcessInstanceAuditInfoRepresentation**](ProcessInstanceAuditInfoRepresentation.md)

<a name="startNewProcessInstanceUsingPOST"></a>
# **startNewProcessInstanceUsingPOST**
> ProcessInstanceRepresentation startNewProcessInstanceUsingPOST(startRequest)

Start a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.startNewProcessInstanceUsingPOST(startRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **startRequest** | [**CreateProcessInstanceRepresentation**](CreateProcessInstanceRepresentation.md)| startRequest | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

<a name="suspendProcessInstanceUsingPUT"></a>
# **suspendProcessInstanceUsingPUT**
> ProcessInstanceRepresentation suspendProcessInstanceUsingPUT(processInstanceId)

Suspend a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.suspendProcessInstanceUsingPUT(processInstanceId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 

### Return type

[**ProcessInstanceRepresentation**](ProcessInstanceRepresentation.md)

