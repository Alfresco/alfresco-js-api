# ActivitiPublicRestApi.UserFiltersApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserProcessInstanceFilterUsingPOST**](UserFiltersApi.md#createUserProcessInstanceFilterUsingPOST) | **POST** /api/enterprise/filters/processes | Create a user process instance task filter
[**createUserTaskFilterUsingPOST**](UserFiltersApi.md#createUserTaskFilterUsingPOST) | **POST** /api/enterprise/filters/tasks | Create a new task filter
[**deleteUserProcessInstanceFilterUsingDELETE**](UserFiltersApi.md#deleteUserProcessInstanceFilterUsingDELETE) | **DELETE** /api/enterprise/filters/processes/{userFilterId} | Delete a user process instance task filter
[**deleteUserTaskFilterUsingDELETE**](UserFiltersApi.md#deleteUserTaskFilterUsingDELETE) | **DELETE** /api/enterprise/filters/tasks/{userFilterId} | Delete a task filter
[**getUserProcessInstanceFilterUsingGET**](UserFiltersApi.md#getUserProcessInstanceFilterUsingGET) | **GET** /api/enterprise/filters/processes/{userFilterId} | Get a specific user process instance task filter
[**getUserProcessInstanceFiltersUsingGET**](UserFiltersApi.md#getUserProcessInstanceFiltersUsingGET) | **GET** /api/enterprise/filters/processes | Retrieve list of taks filters
[**getUserTaskFilterUsingGET**](UserFiltersApi.md#getUserTaskFilterUsingGET) | **GET** /api/enterprise/filters/tasks/{userFilterId} | Get a specific task filter
[**getUserTaskFiltersUsingGET**](UserFiltersApi.md#getUserTaskFiltersUsingGET) | **GET** /api/enterprise/filters/tasks | Retrieve list of task filters
[**orderUserProcessInstanceFiltersUsingPUT**](UserFiltersApi.md#orderUserProcessInstanceFiltersUsingPUT) | **PUT** /api/enterprise/filters/processes | To order the list of user process instance filters
[**orderUserTaskFiltersUsingPUT**](UserFiltersApi.md#orderUserTaskFiltersUsingPUT) | **PUT** /api/enterprise/filters/tasks | To order the list of user task filters
[**updateUserProcessInstanceFilterUsingPUT**](UserFiltersApi.md#updateUserProcessInstanceFilterUsingPUT) | **PUT** /api/enterprise/filters/processes/{userFilterId} | Update a user process instance task filter
[**updateUserTaskFilterUsingPUT**](UserFiltersApi.md#updateUserTaskFilterUsingPUT) | **PUT** /api/enterprise/filters/tasks/{userFilterId} | Update a specific task filter


<a name="createUserProcessInstanceFilterUsingPOST"></a>
# **createUserProcessInstanceFilterUsingPOST**
> UserProcessInstanceFilterRepresentation createUserProcessInstanceFilterUsingPOST(userProcessInstanceFilterRepresentation)

Create a user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userProcessInstanceFilterRepresentation = new ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation(); // UserProcessInstanceFilterRepresentation | userProcessInstanceFilterRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserProcessInstanceFilterUsingPOST(userProcessInstanceFilterRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userProcessInstanceFilterRepresentation** | [**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)| userProcessInstanceFilterRepresentation | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserTaskFilterUsingPOST"></a>
# **createUserTaskFilterUsingPOST**
> UserTaskFilterRepresentation createUserTaskFilterUsingPOST(userTaskFilterRepresentation)

Create a new task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userTaskFilterRepresentation = new ActivitiPublicRestApi.UserTaskFilterRepresentation(); // UserTaskFilterRepresentation | userTaskFilterRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createUserTaskFilterUsingPOST(userTaskFilterRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userTaskFilterRepresentation** | [**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)| userTaskFilterRepresentation | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserProcessInstanceFilterUsingDELETE"></a>
# **deleteUserProcessInstanceFilterUsingDELETE**
> deleteUserProcessInstanceFilterUsingDELETE(userFilterId)

Delete a user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserProcessInstanceFilterUsingDELETE(userFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **Integer**| userFilterId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserTaskFilterUsingDELETE"></a>
# **deleteUserTaskFilterUsingDELETE**
> deleteUserTaskFilterUsingDELETE(userFilterId)

Delete a task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteUserTaskFilterUsingDELETE(userFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **Integer**| userFilterId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserProcessInstanceFilterUsingGET"></a>
# **getUserProcessInstanceFilterUsingGET**
> UserProcessInstanceFilterRepresentation getUserProcessInstanceFilterUsingGET(userFilterId)

Get a specific user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserProcessInstanceFilterUsingGET(userFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **Integer**| userFilterId | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserProcessInstanceFiltersUsingGET"></a>
# **getUserProcessInstanceFiltersUsingGET**
> ResultListDataRepresentation getUserProcessInstanceFiltersUsingGET(opts)

Retrieve list of taks filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var opts = { 
  'appId': 789 // Integer | appId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserProcessInstanceFiltersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Integer**| appId | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserTaskFilterUsingGET"></a>
# **getUserTaskFilterUsingGET**
> UserTaskFilterRepresentation getUserTaskFilterUsingGET(userFilterId)

Get a specific task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserTaskFilterUsingGET(userFilterId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **Integer**| userFilterId | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserTaskFiltersUsingGET"></a>
# **getUserTaskFiltersUsingGET**
> ResultListDataRepresentation getUserTaskFiltersUsingGET(opts)

Retrieve list of task filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var opts = { 
  'appId': 789 // Integer | appId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getUserTaskFiltersUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appId** | **Integer**| appId | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderUserProcessInstanceFiltersUsingPUT"></a>
# **orderUserProcessInstanceFiltersUsingPUT**
> orderUserProcessInstanceFiltersUsingPUT(filterOrderRepresentation)

To order the list of user process instance filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var filterOrderRepresentation = new ActivitiPublicRestApi.UserFilterOrderRepresentation(); // UserFilterOrderRepresentation | filterOrderRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderUserProcessInstanceFiltersUsingPUT(filterOrderRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterOrderRepresentation** | [**UserFilterOrderRepresentation**](UserFilterOrderRepresentation.md)| filterOrderRepresentation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderUserTaskFiltersUsingPUT"></a>
# **orderUserTaskFiltersUsingPUT**
> orderUserTaskFiltersUsingPUT(filterOrderRepresentation)

To order the list of user task filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var filterOrderRepresentation = new ActivitiPublicRestApi.UserFilterOrderRepresentation(); // UserFilterOrderRepresentation | filterOrderRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.orderUserTaskFiltersUsingPUT(filterOrderRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filterOrderRepresentation** | [**UserFilterOrderRepresentation**](UserFilterOrderRepresentation.md)| filterOrderRepresentation | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserProcessInstanceFilterUsingPUT"></a>
# **updateUserProcessInstanceFilterUsingPUT**
> UserProcessInstanceFilterRepresentation updateUserProcessInstanceFilterUsingPUT(userFilterId, userProcessInstanceFilterRepresentation)

Update a user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

var userProcessInstanceFilterRepresentation = new ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation(); // UserProcessInstanceFilterRepresentation | userProcessInstanceFilterRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserProcessInstanceFilterUsingPUT(userFilterId, userProcessInstanceFilterRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **Integer**| userFilterId | 
 **userProcessInstanceFilterRepresentation** | [**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)| userProcessInstanceFilterRepresentation | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserTaskFilterUsingPUT"></a>
# **updateUserTaskFilterUsingPUT**
> UserTaskFilterRepresentation updateUserTaskFilterUsingPUT(userFilterId, userTaskFilterRepresentation)

Update a specific task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

var userTaskFilterRepresentation = new ActivitiPublicRestApi.UserTaskFilterRepresentation(); // UserTaskFilterRepresentation | userTaskFilterRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserTaskFilterUsingPUT(userFilterId, userTaskFilterRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **Integer**| userFilterId | 
 **userTaskFilterRepresentation** | [**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)| userTaskFilterRepresentation | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

