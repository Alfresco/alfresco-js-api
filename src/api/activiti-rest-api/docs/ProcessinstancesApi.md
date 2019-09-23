# ProcessinstancesApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activateProcessInstance**](ProcessinstancesApi.md#activateProcessInstance) | **PUT** /enterprise/process-instances/{processInstanceId}/activate | Activate a process instance
[**createIdentityLink**](ProcessinstancesApi.md#createIdentityLink) | **POST** /enterprise/process-instances/{processInstanceId}/identitylinks | Add a user or group involvement to a process instance
[**deleteIdentityLink**](ProcessinstancesApi.md#deleteIdentityLink) | **DELETE** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Remove a user or group involvement from a process instance
[**deleteProcessInstance**](ProcessinstancesApi.md#deleteProcessInstance) | **DELETE** /enterprise/process-instances/{processInstanceId} | Cancel or remove a process instance
[**filterProcessInstances**](ProcessinstancesApi.md#filterProcessInstances) | **POST** /enterprise/process-instances/filter | List process instances using a filter
[**getHistoricProcessInstanceDecisionTasks**](ProcessinstancesApi.md#getHistoricProcessInstanceDecisionTasks) | **GET** /enterprise/process-instances/{processInstanceId}/decision-tasks | Get decision tasks in a process instance
[**getHistoricProcessInstanceVariables**](ProcessinstancesApi.md#getHistoricProcessInstanceVariables) | **GET** /enterprise/process-instances/{processInstanceId}/historic-variables | Get historic variables for a process instance
[**getHistoricProcessInstances**](ProcessinstancesApi.md#getHistoricProcessInstances) | **POST** /enterprise/historic-process-instances/query | Query historic process instances
[**getIdentityLinkType**](ProcessinstancesApi.md#getIdentityLinkType) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family}/{identityId}/{type} | Get a user or group involvement with a process instance
[**getIdentityLinksForFamily**](ProcessinstancesApi.md#getIdentityLinksForFamily) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks/{family} | List either the users or groups involved with a process instance
[**getIdentityLinks**](ProcessinstancesApi.md#getIdentityLinks) | **GET** /enterprise/process-instances/{processInstanceId}/identitylinks | List the users and groups involved with a process instance
[**getProcessInstanceContent**](ProcessinstancesApi.md#getProcessInstanceContent) | **GET** /enterprise/process-instances/{processInstanceId}/field-content | List content attached to process instance fields
[**getProcessInstanceDiagram**](ProcessinstancesApi.md#getProcessInstanceDiagram) | **GET** /enterprise/process-instances/{processInstanceId}/diagram | Get the process diagram for the process instance
[**getProcessInstanceStartForm**](ProcessinstancesApi.md#getProcessInstanceStartForm) | **GET** /enterprise/process-instances/{processInstanceId}/start-form | Get a process instance start form
[**getProcessInstance**](ProcessinstancesApi.md#getProcessInstance) | **GET** /enterprise/process-instances/{processInstanceId} | Get a process instance
[**getProcessInstances**](ProcessinstancesApi.md#getProcessInstances) | **POST** /enterprise/process-instances/query | Query process instances
[**getTaskAuditLog**](ProcessinstancesApi.md#getTaskAuditLog) | **GET** /enterprise/process-instances/{processInstanceId}/audit-log | Get the audit log for a process instance
[**startNewProcessInstance**](ProcessinstancesApi.md#startNewProcessInstance) | **POST** /enterprise/process-instances | Start a process instance
[**suspendProcessInstance**](ProcessinstancesApi.md#suspendProcessInstance) | **PUT** /enterprise/process-instances/{processInstanceId}/suspend | Suspend a process instance
[**getProcessAuditPdf**](ProcessApi.md#getProcessAuditPdf) | **GET** /app/rest/process-instances/{processId}/audit | Retrieve the process audit infromation in pdf format


<a name="activateProcessInstance"></a>
# **activateProcessInstance**
> ProcessInstanceRepresentation activateProcessInstance(processInstanceId)

Activate a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.activateProcessInstance(processInstanceId).then((data) => {
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

<a name="createIdentityLink"></a>
# **createIdentityLink**
> IdentityLinkRepresentation createIdentityLink(processInstanceIdidentityLinkRepresentation)

Add a user or group involvement to a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.createIdentityLink(processInstanceIdidentityLinkRepresentation).then((data) => {
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

<a name="deleteIdentityLink"></a>
# **deleteIdentityLink**
> deleteIdentityLink(processInstanceIdfamilyidentityIdtype)

Remove a user or group involvement from a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.deleteIdentityLink(processInstanceIdfamilyidentityIdtype).then(() => {
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

<a name="deleteProcessInstance"></a>
# **deleteProcessInstance**
> deleteProcessInstance(processInstanceId)

Cancel or remove a process instance

If the process instance has not yet been completed, it will be cancelled. If it has already finished or been cancelled then the process instance will be removed and will no longer appear in queries.

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.deleteProcessInstance(processInstanceId).then(() => {
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

<a name="filterProcessInstances"></a>
# **filterProcessInstances**
> ResultListDataRepresentationProcessInstanceRepresentation filterProcessInstances(filterRequest)

List process instances using a filter

The request body provided must define either a valid filterId value or filter object

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.filterProcessInstances(filterRequest).then((data) => {
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

<a name="getHistoricProcessInstanceDecisionTasks"></a>
# **getHistoricProcessInstanceDecisionTasks**
> ResultListDataRepresentationDecisionTaskRepresentation getHistoricProcessInstanceDecisionTasks(processInstanceId)

Get decision tasks in a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getHistoricProcessInstanceDecisionTasks(processInstanceId).then((data) => {
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

<a name="getHistoricProcessInstanceVariables"></a>
# **getHistoricProcessInstanceVariables**
> ProcessInstanceVariableRepresentation getHistoricProcessInstanceVariables(processInstanceId)

Get historic variables for a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getHistoricProcessInstanceVariables(processInstanceId).then((data) => {
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

[**ProcessInstanceVariableRepresentation**](ProcessInstanceVariableRepresentation.md)

<a name="getHistoricProcessInstances"></a>
# **getHistoricProcessInstances**
> ResultListDataRepresentationProcessInstanceRepresentation getHistoricProcessInstances(queryRequest)

Query historic process instances

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getHistoricProcessInstances(queryRequest).then((data) => {
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

<a name="getIdentityLinkType"></a>
# **getIdentityLinkType**
> IdentityLinkRepresentation getIdentityLinkType(processInstanceIdfamilyidentityIdtype)

Get a user or group involvement with a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getIdentityLinkType(processInstanceIdfamilyidentityIdtype).then((data) => {
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

<a name="getIdentityLinksForFamily"></a>
# **getIdentityLinksForFamily**
> IdentityLinkRepresentation getIdentityLinksForFamily(processInstanceIdfamily)

List either the users or groups involved with a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getIdentityLinksForFamily(processInstanceIdfamily).then((data) => {
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

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="getIdentityLinks"></a>
# **getIdentityLinks**
> IdentityLinkRepresentation getIdentityLinks(processInstanceId)

List the users and groups involved with a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getIdentityLinks(processInstanceId).then((data) => {
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

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="getProcessInstanceContent"></a>
# **getProcessInstanceContent**
> ResultListDataRepresentationProcessContentRepresentation getProcessInstanceContent(processInstanceId)

List content attached to process instance fields

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstanceContent(processInstanceId).then((data) => {
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

<a name="getProcessInstanceDiagram"></a>
# **getProcessInstanceDiagram**
> string getProcessInstanceDiagram(processInstanceId)

Get the process diagram for the process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstanceDiagram(processInstanceId).then((data) => {
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

**string**

<a name="getProcessInstanceStartForm"></a>
# **getProcessInstanceStartForm**
> FormDefinitionRepresentation getProcessInstanceStartForm(processInstanceId)

Get a process instance start form

The start form for a process instance can be retrieved when the process definition has a start form defined (hasStartForm = true on the process instance)

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstanceStartForm(processInstanceId).then((data) => {
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

<a name="getProcessInstance"></a>
# **getProcessInstance**
> ProcessInstanceRepresentation getProcessInstance(processInstanceId)

Get a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstance(processInstanceId).then((data) => {
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

<a name="getProcessInstances"></a>
# **getProcessInstances**
> ResultListDataRepresentationProcessInstanceRepresentation getProcessInstances(processInstancesQuery)

Query process instances

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getProcessInstances(processInstancesQuery).then((data) => {
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

<a name="getTaskAuditLog"></a>
# **getTaskAuditLog**
> ProcessInstanceAuditInfoRepresentation getTaskAuditLog(processInstanceId)

Get the audit log for a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.getTaskAuditLog(processInstanceId).then((data) => {
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

<a name="startNewProcessInstance"></a>
# **startNewProcessInstance**
> ProcessInstanceRepresentation startNewProcessInstance(startRequest)

Start a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.startNewProcessInstance(startRequest).then((data) => {
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

<a name="suspendProcessInstance"></a>
# **suspendProcessInstance**
> ProcessInstanceRepresentation suspendProcessInstance(processInstanceId)

Suspend a process instance

### Example
```javascript
import ProcessinstancesApi from 'ProcessinstancesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processinstancesApi = new ProcessinstancesApi(this.alfrescoApi);


processinstancesApi.suspendProcessInstance(processInstanceId).then((data) => {
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

<a name="getProcessAuditPdf"></a>
# **getProcessAuditPdf**
> Blob getProcessAuditPdf(processId)

Retrieve process audit infromation in pdf format

### Example
```javascript

var processId = "processId_example"; // String | processId

this.alfrescoJsApi.activiti.processApi.getProcessAuditPdf(processId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processId** | **String**| processId | 

### Return type

[Blob]