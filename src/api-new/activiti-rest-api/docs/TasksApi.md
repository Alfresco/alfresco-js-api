# .TasksApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityLinkUsingPOST2**](TasksApi.md#createIdentityLinkUsingPOST2) | **POST** /enterprise/tasks/{taskId}/identitylinks | List the users and groups involved with a task
[**createNewTaskUsingPOST**](TasksApi.md#createNewTaskUsingPOST) | **POST** /enterprise/tasks | Create a standalone task
[**deleteIdentityLinkUsingDELETE2**](TasksApi.md#deleteIdentityLinkUsingDELETE2) | **DELETE** /enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Remove a user or group involvement from a task
[**deleteTaskUsingDELETE**](TasksApi.md#deleteTaskUsingDELETE) | **DELETE** /enterprise/tasks/{taskId} | Delete a task
[**filterTasksUsingPOST**](TasksApi.md#filterTasksUsingPOST) | **POST** /enterprise/tasks/filter | Filter a list of tasks
[**getIdentityLinkTypeUsingGET2**](TasksApi.md#getIdentityLinkTypeUsingGET2) | **GET** /enterprise/tasks/{taskId}/identitylinks/{family}/{identityId}/{type} | Get a user or group involvement with a task
[**getIdentityLinksForFamilyUsingGET2**](TasksApi.md#getIdentityLinksForFamilyUsingGET2) | **GET** /enterprise/tasks/{taskId}/identitylinks/{family} | List either the users or groups involved with a process instance
[**getIdentityLinksUsingGET2**](TasksApi.md#getIdentityLinksUsingGET2) | **GET** /enterprise/tasks/{taskId}/identitylinks | getIdentityLinks
[**getTaskAuditLogUsingGET1**](TasksApi.md#getTaskAuditLogUsingGET1) | **GET** /enterprise/tasks/{taskId}/audit | Get the audit log for a task
[**getTaskUsingGET**](TasksApi.md#getTaskUsingGET) | **GET** /enterprise/tasks/{taskId} | Get a task
[**listHistoricTasksUsingPOST**](TasksApi.md#listHistoricTasksUsingPOST) | **POST** /enterprise/historic-tasks/query | Query historic tasks
[**listTasksUsingPOST**](TasksApi.md#listTasksUsingPOST) | **POST** /enterprise/tasks/query | List tasks
[**updateTaskUsingPUT**](TasksApi.md#updateTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId} | Update a task


<a name="createIdentityLinkUsingPOST2"></a>
# **createIdentityLinkUsingPOST2**
> IdentityLinkRepresentation createIdentityLinkUsingPOST2(taskIdidentityLinkRepresentation)

List the users and groups involved with a task

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.createIdentityLinkUsingPOST2(taskIdidentityLinkRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **identityLinkRepresentation** | [**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)| identityLinkRepresentation | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="createNewTaskUsingPOST"></a>
# **createNewTaskUsingPOST**
> TaskRepresentation createNewTaskUsingPOST(taskRepresentation)

Create a standalone task

A standalone task is one which is not associated with any process instance.

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.createNewTaskUsingPOST(taskRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskRepresentation** | [**TaskRepresentation**](TaskRepresentation.md)| taskRepresentation | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

<a name="deleteIdentityLinkUsingDELETE2"></a>
# **deleteIdentityLinkUsingDELETE2**
> deleteIdentityLinkUsingDELETE2(taskIdfamilyidentityIdtype)

Remove a user or group involvement from a task

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.deleteIdentityLinkUsingDELETE2(taskIdfamilyidentityIdtype).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **family** | **string**| family | 
 **identityId** | **string**| identityId | 
 **type** | **string**| type | 

### Return type

null (empty response body)

<a name="deleteTaskUsingDELETE"></a>
# **deleteTaskUsingDELETE**
> deleteTaskUsingDELETE(taskId)

Delete a task

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.deleteTaskUsingDELETE(taskId).then(function() {
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

<a name="filterTasksUsingPOST"></a>
# **filterTasksUsingPOST**
> ResultListDataRepresentationTaskRepresentation filterTasksUsingPOST(tasksFilter)

Filter a list of tasks

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.filterTasksUsingPOST(tasksFilter).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasksFilter** | [**TaskFilterRequestRepresentation**](TaskFilterRequestRepresentation.md)| tasksFilter | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

<a name="getIdentityLinkTypeUsingGET2"></a>
# **getIdentityLinkTypeUsingGET2**
> IdentityLinkRepresentation getIdentityLinkTypeUsingGET2(taskIdfamilyidentityIdtype)

Get a user or group involvement with a task

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.getIdentityLinkTypeUsingGET2(taskIdfamilyidentityIdtype).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **family** | **string**| family | 
 **identityId** | **string**| identityId | 
 **type** | **string**| type | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="getIdentityLinksForFamilyUsingGET2"></a>
# **getIdentityLinksForFamilyUsingGET2**
> Array<IdentityLinkRepresentation> getIdentityLinksForFamilyUsingGET2(taskIdfamily)

List either the users or groups involved with a process instance

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.getIdentityLinksForFamilyUsingGET2(taskIdfamily).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **family** | **string**| family | 

### Return type

[**Array&lt;IdentityLinkRepresentation&gt;**](IdentityLinkRepresentation.md)

<a name="getIdentityLinksUsingGET2"></a>
# **getIdentityLinksUsingGET2**
> Array<IdentityLinkRepresentation> getIdentityLinksUsingGET2(taskId)

getIdentityLinks

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.getIdentityLinksUsingGET2(taskId).then(function(data) {
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

[**Array&lt;IdentityLinkRepresentation&gt;**](IdentityLinkRepresentation.md)

<a name="getTaskAuditLogUsingGET1"></a>
# **getTaskAuditLogUsingGET1**
> TaskAuditInfoRepresentation getTaskAuditLogUsingGET1(taskId)

Get the audit log for a task

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.getTaskAuditLogUsingGET1(taskId).then(function(data) {
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

[**TaskAuditInfoRepresentation**](TaskAuditInfoRepresentation.md)

<a name="getTaskUsingGET"></a>
# **getTaskUsingGET**
> TaskRepresentation getTaskUsingGET(taskId)

Get a task

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.getTaskUsingGET(taskId).then(function(data) {
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

[**TaskRepresentation**](TaskRepresentation.md)

<a name="listHistoricTasksUsingPOST"></a>
# **listHistoricTasksUsingPOST**
> ResultListDataRepresentationTaskRepresentation listHistoricTasksUsingPOST(queryRequest)

Query historic tasks

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.listHistoricTasksUsingPOST(queryRequest).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryRequest** | [**HistoricTaskInstanceQueryRepresentation**](HistoricTaskInstanceQueryRepresentation.md)| queryRequest | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

<a name="listTasksUsingPOST"></a>
# **listTasksUsingPOST**
> ResultListDataRepresentationTaskRepresentation listTasksUsingPOST(tasksQuery)

List tasks

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.listTasksUsingPOST(tasksQuery).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasksQuery** | [**TaskQueryRepresentation**](TaskQueryRepresentation.md)| tasksQuery | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

<a name="updateTaskUsingPUT"></a>
# **updateTaskUsingPUT**
> TaskRepresentation updateTaskUsingPUT(taskIdupdated)

Update a task

You can edit only name, description and dueDate (ISO 8601 string).

### Example
```javascript
import TasksApi from 'TasksApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let tasksApi = new TasksApi(this.alfrescoApi);


tasksApi.updateTaskUsingPUT(taskIdupdated).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **updated** | [**TaskUpdateRepresentation**](TaskUpdateRepresentation.md)| updated | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

