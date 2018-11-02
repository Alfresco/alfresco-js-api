# .UserfiltersApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserProcessInstanceFilterUsingPOST**](UserfiltersApi.md#createUserProcessInstanceFilterUsingPOST) | **POST** /enterprise/filters/processes | Create a process instance filter
[**createUserTaskFilterUsingPOST**](UserfiltersApi.md#createUserTaskFilterUsingPOST) | **POST** /enterprise/filters/tasks | Create a task filter
[**deleteUserProcessInstanceFilterUsingDELETE**](UserfiltersApi.md#deleteUserProcessInstanceFilterUsingDELETE) | **DELETE** /enterprise/filters/processes/{userFilterId} | Delete a process instance filter
[**deleteUserTaskFilterUsingDELETE**](UserfiltersApi.md#deleteUserTaskFilterUsingDELETE) | **DELETE** /enterprise/filters/tasks/{userFilterId} | Delete a task filter
[**getUserProcessInstanceFilterUsingGET**](UserfiltersApi.md#getUserProcessInstanceFilterUsingGET) | **GET** /enterprise/filters/processes/{userFilterId} | Get a process instance filter
[**getUserProcessInstanceFiltersUsingGET**](UserfiltersApi.md#getUserProcessInstanceFiltersUsingGET) | **GET** /enterprise/filters/processes | List process instance filters
[**getUserTaskFilterUsingGET**](UserfiltersApi.md#getUserTaskFilterUsingGET) | **GET** /enterprise/filters/tasks/{userFilterId} | Get a task filter
[**getUserTaskFiltersUsingGET**](UserfiltersApi.md#getUserTaskFiltersUsingGET) | **GET** /enterprise/filters/tasks | List task filters
[**orderUserProcessInstanceFiltersUsingPUT**](UserfiltersApi.md#orderUserProcessInstanceFiltersUsingPUT) | **PUT** /enterprise/filters/processes | Re-order the list of user process instance filters
[**orderUserTaskFiltersUsingPUT**](UserfiltersApi.md#orderUserTaskFiltersUsingPUT) | **PUT** /enterprise/filters/tasks | Re-order the list of user task filters
[**updateUserProcessInstanceFilterUsingPUT**](UserfiltersApi.md#updateUserProcessInstanceFilterUsingPUT) | **PUT** /enterprise/filters/processes/{userFilterId} | Update a process instance filter
[**updateUserTaskFilterUsingPUT**](UserfiltersApi.md#updateUserTaskFilterUsingPUT) | **PUT** /enterprise/filters/tasks/{userFilterId} | Update a task filter


<a name="createUserProcessInstanceFilterUsingPOST"></a>
# **createUserProcessInstanceFilterUsingPOST**
> UserProcessInstanceFilterRepresentation createUserProcessInstanceFilterUsingPOST(userProcessInstanceFilterRepresentation)

Create a process instance filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.createUserProcessInstanceFilterUsingPOST(userProcessInstanceFilterRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProcessInstanceFilterRepresentation** | [**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)| userProcessInstanceFilterRepresentation | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

<a name="createUserTaskFilterUsingPOST"></a>
# **createUserTaskFilterUsingPOST**
> UserTaskFilterRepresentation createUserTaskFilterUsingPOST(userTaskFilterRepresentation)

Create a task filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.createUserTaskFilterUsingPOST(userTaskFilterRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userTaskFilterRepresentation** | [**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)| userTaskFilterRepresentation | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

<a name="deleteUserProcessInstanceFilterUsingDELETE"></a>
# **deleteUserProcessInstanceFilterUsingDELETE**
> deleteUserProcessInstanceFilterUsingDELETE(userFilterId)

Delete a process instance filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.deleteUserProcessInstanceFilterUsingDELETE(userFilterId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 

### Return type

null (empty response body)

<a name="deleteUserTaskFilterUsingDELETE"></a>
# **deleteUserTaskFilterUsingDELETE**
> deleteUserTaskFilterUsingDELETE(userFilterId)

Delete a task filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.deleteUserTaskFilterUsingDELETE(userFilterId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 

### Return type

null (empty response body)

<a name="getUserProcessInstanceFilterUsingGET"></a>
# **getUserProcessInstanceFilterUsingGET**
> UserProcessInstanceFilterRepresentation getUserProcessInstanceFilterUsingGET(userFilterId)

Get a process instance filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.getUserProcessInstanceFilterUsingGET(userFilterId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

<a name="getUserProcessInstanceFiltersUsingGET"></a>
# **getUserProcessInstanceFiltersUsingGET**
> ResultListDataRepresentationUserProcessInstanceFilterRepresentation getUserProcessInstanceFiltersUsingGET(opts)

List process instance filters

Returns filters for the current user, optionally filtered by *appId*.

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);

let opts = { 
  'appId': 789 // number | appId
};

userfiltersApi.getUserProcessInstanceFiltersUsingGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **number**| appId | [optional] 

### Return type

[**ResultListDataRepresentationUserProcessInstanceFilterRepresentation**](ResultListDataRepresentationUserProcessInstanceFilterRepresentation.md)

<a name="getUserTaskFilterUsingGET"></a>
# **getUserTaskFilterUsingGET**
> UserTaskFilterRepresentation getUserTaskFilterUsingGET(userFilterId)

Get a task filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.getUserTaskFilterUsingGET(userFilterId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

<a name="getUserTaskFiltersUsingGET"></a>
# **getUserTaskFiltersUsingGET**
> ResultListDataRepresentationUserTaskFilterRepresentation getUserTaskFiltersUsingGET(opts)

List task filters

Returns filters for the current user, optionally filtered by *appId*.

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);

let opts = { 
  'appId': 789 // number | appId
};

userfiltersApi.getUserTaskFiltersUsingGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **number**| appId | [optional] 

### Return type

[**ResultListDataRepresentationUserTaskFilterRepresentation**](ResultListDataRepresentationUserTaskFilterRepresentation.md)

<a name="orderUserProcessInstanceFiltersUsingPUT"></a>
# **orderUserProcessInstanceFiltersUsingPUT**
> orderUserProcessInstanceFiltersUsingPUT(filterOrderRepresentation)

Re-order the list of user process instance filters

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.orderUserProcessInstanceFiltersUsingPUT(filterOrderRepresentation).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterOrderRepresentation** | [**UserFilterOrderRepresentation**](UserFilterOrderRepresentation.md)| filterOrderRepresentation | 

### Return type

null (empty response body)

<a name="orderUserTaskFiltersUsingPUT"></a>
# **orderUserTaskFiltersUsingPUT**
> orderUserTaskFiltersUsingPUT(filterOrderRepresentation)

Re-order the list of user task filters

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.orderUserTaskFiltersUsingPUT(filterOrderRepresentation).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterOrderRepresentation** | [**UserFilterOrderRepresentation**](UserFilterOrderRepresentation.md)| filterOrderRepresentation | 

### Return type

null (empty response body)

<a name="updateUserProcessInstanceFilterUsingPUT"></a>
# **updateUserProcessInstanceFilterUsingPUT**
> UserProcessInstanceFilterRepresentation updateUserProcessInstanceFilterUsingPUT(userFilterIduserProcessInstanceFilterRepresentation)

Update a process instance filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.updateUserProcessInstanceFilterUsingPUT(userFilterIduserProcessInstanceFilterRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 
 **userProcessInstanceFilterRepresentation** | [**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)| userProcessInstanceFilterRepresentation | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

<a name="updateUserTaskFilterUsingPUT"></a>
# **updateUserTaskFilterUsingPUT**
> UserTaskFilterRepresentation updateUserTaskFilterUsingPUT(userFilterIduserTaskFilterRepresentation)

Update a task filter

### Example
```javascript
import UserfiltersApi from 'UserfiltersApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let userfiltersApi = new UserfiltersApi(this.alfrescoApi);


userfiltersApi.updateUserTaskFilterUsingPUT(userFilterIduserTaskFilterRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 
 **userTaskFilterRepresentation** | [**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)| userTaskFilterRepresentation | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

