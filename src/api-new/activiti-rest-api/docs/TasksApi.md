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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createIdentityLinkUsingPOST2(taskIdidentityLinkRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **identityLinkRepresentation** | [**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)| identityLinkRepresentation | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createNewTaskUsingPOST"></a>
# **createNewTaskUsingPOST**
> TaskRepresentation createNewTaskUsingPOST(taskRepresentation)

Create a standalone task

A standalone task is one which is not associated with any process instance.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createNewTaskUsingPOST(taskRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskRepresentation** | [**TaskRepresentation**](TaskRepresentation.md)| taskRepresentation | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteIdentityLinkUsingDELETE2"></a>
# **deleteIdentityLinkUsingDELETE2**
> deleteIdentityLinkUsingDELETE2(taskIdfamilyidentityIdtype)

Remove a user or group involvement from a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteIdentityLinkUsingDELETE2(taskIdfamilyidentityIdtype, callback);
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

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTaskUsingDELETE"></a>
# **deleteTaskUsingDELETE**
> deleteTaskUsingDELETE(taskId)

Delete a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTaskUsingDELETE(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="filterTasksUsingPOST"></a>
# **filterTasksUsingPOST**
> ResultListDataRepresentationTaskRepresentation filterTasksUsingPOST(tasksFilter)

Filter a list of tasks

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.filterTasksUsingPOST(tasksFilter, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasksFilter** | [**TaskFilterRequestRepresentation**](TaskFilterRequestRepresentation.md)| tasksFilter | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIdentityLinkTypeUsingGET2"></a>
# **getIdentityLinkTypeUsingGET2**
> IdentityLinkRepresentation getIdentityLinkTypeUsingGET2(taskIdfamilyidentityIdtype)

Get a user or group involvement with a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIdentityLinkTypeUsingGET2(taskIdfamilyidentityIdtype, callback);
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

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIdentityLinksForFamilyUsingGET2"></a>
# **getIdentityLinksForFamilyUsingGET2**
> any getIdentityLinksForFamilyUsingGET2(taskIdfamily)

List either the users or groups involved with a process instance

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIdentityLinksForFamilyUsingGET2(taskIdfamily, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **family** | **string**| family | 

### Return type

[**any**](IdentityLinkRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getIdentityLinksUsingGET2"></a>
# **getIdentityLinksUsingGET2**
> any getIdentityLinksUsingGET2(taskId)

getIdentityLinks

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getIdentityLinksUsingGET2(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

[**any**](IdentityLinkRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskAuditLogUsingGET1"></a>
# **getTaskAuditLogUsingGET1**
> TaskAuditInfoRepresentation getTaskAuditLogUsingGET1(taskId)

Get the audit log for a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskAuditLogUsingGET1(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

[**TaskAuditInfoRepresentation**](TaskAuditInfoRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTaskUsingGET"></a>
# **getTaskUsingGET**
> TaskRepresentation getTaskUsingGET(taskId)

Get a task

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTaskUsingGET(taskId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listHistoricTasksUsingPOST"></a>
# **listHistoricTasksUsingPOST**
> ResultListDataRepresentationTaskRepresentation listHistoricTasksUsingPOST(queryRequest)

Query historic tasks

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listHistoricTasksUsingPOST(queryRequest, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **queryRequest** | [**HistoricTaskInstanceQueryRepresentation**](HistoricTaskInstanceQueryRepresentation.md)| queryRequest | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listTasksUsingPOST"></a>
# **listTasksUsingPOST**
> ResultListDataRepresentationTaskRepresentation listTasksUsingPOST(tasksQuery)

List tasks

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.listTasksUsingPOST(tasksQuery, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tasksQuery** | [**TaskQueryRepresentation**](TaskQueryRepresentation.md)| tasksQuery | 

### Return type

[**ResultListDataRepresentationTaskRepresentation**](ResultListDataRepresentationTaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateTaskUsingPUT"></a>
# **updateTaskUsingPUT**
> TaskRepresentation updateTaskUsingPUT(taskIdupdated)

Update a task

You can edit only name, description and dueDate (ISO 8601 string).

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TasksApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateTaskUsingPUT(taskIdupdated, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **updated** | [**TaskUpdateRepresentation**](TaskUpdateRepresentation.md)| updated | 

### Return type

[**TaskRepresentation**](TaskRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

