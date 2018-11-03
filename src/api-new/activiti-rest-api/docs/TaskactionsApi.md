# .TaskactionsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**assignTaskUsingPUT**](TaskactionsApi.md#assignTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/assign | Assign a task to a user
[**attachFormUsingPUT**](TaskactionsApi.md#attachFormUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/attach-form | Attach a form to a task
[**claimTaskUsingPUT**](TaskactionsApi.md#claimTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/claim | Claim a task
[**completeTaskUsingPUT**](TaskactionsApi.md#completeTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/complete | Complete a task
[**delegateTaskUsingPUT**](TaskactionsApi.md#delegateTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/delegate | Delegate a task
[**involveGroupUsingPOST**](TaskactionsApi.md#involveGroupUsingPOST) | **POST** /enterprise/tasks/{taskId}/groups/{groupId} | Involve a group with a task
[**involveUserUsingPUT**](TaskactionsApi.md#involveUserUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/involve | Involve a user with a task
[**removeFormUsingDELETE**](TaskactionsApi.md#removeFormUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/action/remove-form | Remove a form from a task
[**removeInvolvedUserUsingDELETE**](TaskactionsApi.md#removeInvolvedUserUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/groups/{groupId} | Remove an involved group from a task
[**removeInvolvedUserUsingPUT**](TaskactionsApi.md#removeInvolvedUserUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/remove-involved | Remove an involved user from a task
[**resolveTaskUsingPUT**](TaskactionsApi.md#resolveTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/resolve | Resolve a task
[**unclaimTaskUsingPUT**](TaskactionsApi.md#unclaimTaskUsingPUT) | **PUT** /enterprise/tasks/{taskId}/action/unclaim | Unclaim a task


<a name="assignTaskUsingPUT"></a>
# **assignTaskUsingPUT**
> TaskRepresentation assignTaskUsingPUT(taskIduserIdentifier)

Assign a task to a user

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.assignTaskUsingPUT(taskIduserIdentifier).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **userIdentifier** | [**AssigneeIdentifierRepresentation**](AssigneeIdentifierRepresentation.md)| userIdentifier | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

<a name="attachFormUsingPUT"></a>
# **attachFormUsingPUT**
> attachFormUsingPUT(taskIdformIdentifier)

Attach a form to a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.attachFormUsingPUT(taskIdformIdentifier).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **formIdentifier** | [**FormIdentifierRepresentation**](FormIdentifierRepresentation.md)| formIdentifier | 

### Return type

null (empty response body)

<a name="claimTaskUsingPUT"></a>
# **claimTaskUsingPUT**
> claimTaskUsingPUT(taskId)

Claim a task

To claim a task (in case the task is assigned to a group)

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.claimTaskUsingPUT(taskId).then(() => {
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

<a name="completeTaskUsingPUT"></a>
# **completeTaskUsingPUT**
> completeTaskUsingPUT(taskId)

Complete a task

Use this endpoint to complete a standalone task or task without a form

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.completeTaskUsingPUT(taskId).then(() => {
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

<a name="delegateTaskUsingPUT"></a>
# **delegateTaskUsingPUT**
> delegateTaskUsingPUT(taskIduserIdentifier)

Delegate a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.delegateTaskUsingPUT(taskIduserIdentifier).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **userIdentifier** | [**UserIdentifierRepresentation**](UserIdentifierRepresentation.md)| userIdentifier | 

### Return type

null (empty response body)

<a name="involveGroupUsingPOST"></a>
# **involveGroupUsingPOST**
> involveGroupUsingPOST(taskIdgroupId)

Involve a group with a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.involveGroupUsingPOST(taskIdgroupId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **groupId** | **string**| groupId | 

### Return type

null (empty response body)

<a name="involveUserUsingPUT"></a>
# **involveUserUsingPUT**
> involveUserUsingPUT(taskIduserIdentifier)

Involve a user with a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.involveUserUsingPUT(taskIduserIdentifier).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **userIdentifier** | [**UserIdentifierRepresentation**](UserIdentifierRepresentation.md)| userIdentifier | 

### Return type

null (empty response body)

<a name="removeFormUsingDELETE"></a>
# **removeFormUsingDELETE**
> removeFormUsingDELETE(taskId)

Remove a form from a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.removeFormUsingDELETE(taskId).then(() => {
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

<a name="removeInvolvedUserUsingDELETE"></a>
# **removeInvolvedUserUsingDELETE**
> removeInvolvedUserUsingDELETE(taskIdgroupId)

Remove an involved group from a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.removeInvolvedUserUsingDELETE(taskIdgroupId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **groupId** | **string**| groupId | 

### Return type

null (empty response body)

<a name="removeInvolvedUserUsingPUT"></a>
# **removeInvolvedUserUsingPUT**
> removeInvolvedUserUsingPUT(taskIduserIdentifier)

Remove an involved user from a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.removeInvolvedUserUsingPUT(taskIduserIdentifier).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **userIdentifier** | [**UserIdentifierRepresentation**](UserIdentifierRepresentation.md)| userIdentifier | 

### Return type

null (empty response body)

<a name="resolveTaskUsingPUT"></a>
# **resolveTaskUsingPUT**
> resolveTaskUsingPUT(taskId)

Resolve a task

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.resolveTaskUsingPUT(taskId).then(() => {
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

<a name="unclaimTaskUsingPUT"></a>
# **unclaimTaskUsingPUT**
> unclaimTaskUsingPUT(taskId)

Unclaim a task

To unclaim a task (in case the task was assigned to a group)

### Example
```javascript
import TaskactionsApi from 'TaskactionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let taskactionsApi = new TaskactionsApi(this.alfrescoApi);


taskactionsApi.unclaimTaskUsingPUT(taskId).then(() => {
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

