# ActivitiPublicRestApi.UserFiltersApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUserProcessInstanceFilter**](UserFiltersApi.md#createUserProcessInstanceFilter) | **POST** /api/enterprise/filters/processes | Create a user process instance task filter
[**createUserTaskFilter**](UserFiltersApi.md#createUserTaskFilter) | **POST** /api/enterprise/filters/tasks | Create a new task filter
[**deleteUserProcessInstanceFilter**](UserFiltersApi.md#deleteUserProcessInstanceFilter) | **DELETE** /api/enterprise/filters/processes/{userFilterId} | Delete a user process instance task filter
[**deleteUserTaskFilter**](UserFiltersApi.md#deleteUserTaskFilter) | **DELETE** /api/enterprise/filters/tasks/{userFilterId} | Delete a task filter
[**getUserProcessInstanceFilter**](UserFiltersApi.md#getUserProcessInstanceFilter) | **GET** /api/enterprise/filters/processes/{userFilterId} | Get a specific user process instance task filter
[**getUserProcessInstanceFilters**](UserFiltersApi.md#getUserProcessInstanceFilters) | **GET** /api/enterprise/filters/processes | Retrieve list of taks filters
[**getUserTaskFilter**](UserFiltersApi.md#getUserTaskFilter) | **GET** /api/enterprise/filters/tasks/{userFilterId} | Get a specific task filter
[**getUserTaskFilters**](UserFiltersApi.md#getUserTaskFilters) | **GET** /api/enterprise/filters/tasks | Retrieve list of task filters
[**orderUserProcessInstanceFilters**](UserFiltersApi.md#orderUserProcessInstanceFilters) | **PUT** /api/enterprise/filters/processes | To order the list of user process instance filters
[**orderUserTaskFilters**](UserFiltersApi.md#orderUserTaskFilters) | **PUT** /api/enterprise/filters/tasks | To order the list of user task filters
[**updateUserProcessInstanceFilter**](UserFiltersApi.md#updateUserProcessInstanceFilter) | **PUT** /api/enterprise/filters/processes/{userFilterId} | Update a user process instance task filter
[**updateUserTaskFilter**](UserFiltersApi.md#updateUserTaskFilter) | **PUT** /api/enterprise/filters/tasks/{userFilterId} | Update a specific task filter


<a name="createUserProcessInstanceFilter"></a>
# **createUserProcessInstanceFilter**
> UserProcessInstanceFilterRepresentation createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation)

Create a user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userProcessInstanceFilterRepresentation = new ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation(); // UserProcessInstanceFilterRepresentation | userProcessInstanceFilterRepresentation

apiInstance.createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation);
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

<a name="createUserTaskFilter"></a>
# **createUserTaskFilter**
> UserTaskFilterRepresentation createUserTaskFilter(userTaskFilterRepresentation)

Create a new task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userTaskFilterRepresentation = new ActivitiPublicRestApi.UserTaskFilterRepresentation(); // UserTaskFilterRepresentation | userTaskFilterRepresentation

apiInstance.createUserTaskFilter(userTaskFilterRepresentation);
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

<a name="deleteUserProcessInstanceFilter"></a>
# **deleteUserProcessInstanceFilter**
> deleteUserProcessInstanceFilter(userFilterId)

Delete a user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

apiInstance.deleteUserProcessInstanceFilter(userFilterId);
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

<a name="deleteUserTaskFilter"></a>
# **deleteUserTaskFilter**
> deleteUserTaskFilter(userFilterId)

Delete a task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

apiInstance.deleteUserTaskFilter(userFilterId);
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

<a name="getUserProcessInstanceFilter"></a>
# **getUserProcessInstanceFilter**
> UserProcessInstanceFilterRepresentation getUserProcessInstanceFilter(userFilterId)

Get a specific user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

apiInstance.getUserProcessInstanceFilter(userFilterId);
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

<a name="getUserProcessInstanceFilters"></a>
# **getUserProcessInstanceFilters**
> ResultListDataRepresentation getUserProcessInstanceFilters(opts)

Retrieve list of taks filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var opts = { 
  'appId': 789 // Integer | appId
};

apiInstance.getUserProcessInstanceFilters(opts);
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

<a name="getUserTaskFilter"></a>
# **getUserTaskFilter**
> UserTaskFilterRepresentation getUserTaskFilter(userFilterId)

Get a specific task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

apiInstance.getUserTaskFilter(userFilterId);
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

<a name="getUserTaskFilters"></a>
# **getUserTaskFilters**
> ResultListDataRepresentation getUserTaskFilters(opts)

Retrieve list of task filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var opts = { 
  'appId': 789 // Integer | appId
};

apiInstance.getUserTaskFilters(opts);
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

<a name="orderUserProcessInstanceFilters"></a>
# **orderUserProcessInstanceFilters**
> orderUserProcessInstanceFilters(filterOrderRepresentation)

To order the list of user process instance filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var filterOrderRepresentation = new ActivitiPublicRestApi.UserFilterOrderRepresentation(); // UserFilterOrderRepresentation | filterOrderRepresentation

apiInstance.orderUserProcessInstanceFilters(filterOrderRepresentation);
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

<a name="orderUserTaskFilters"></a>
# **orderUserTaskFilters**
> orderUserTaskFilters(filterOrderRepresentation)

To order the list of user task filters

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var filterOrderRepresentation = new ActivitiPublicRestApi.UserFilterOrderRepresentation(); // UserFilterOrderRepresentation | filterOrderRepresentation

apiInstance.orderUserTaskFilters(filterOrderRepresentation);
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

<a name="updateUserProcessInstanceFilter"></a>
# **updateUserProcessInstanceFilter**
> UserProcessInstanceFilterRepresentation updateUserProcessInstanceFilter(userFilterId, userProcessInstanceFilterRepresentation)

Update a user process instance task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

var userProcessInstanceFilterRepresentation = new ActivitiPublicRestApi.UserProcessInstanceFilterRepresentation(); // UserProcessInstanceFilterRepresentation | userProcessInstanceFilterRepresentation

apiInstance.updateUserProcessInstanceFilter(userFilterId, userProcessInstanceFilterRepresentation);
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

<a name="updateUserTaskFilter"></a>
# **updateUserTaskFilter**
> UserTaskFilterRepresentation updateUserTaskFilter(userFilterId, userTaskFilterRepresentation)

Update a specific task filter

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.UserFiltersApi();

var userFilterId = 789; // Integer | userFilterId

var userTaskFilterRepresentation = new ActivitiPublicRestApi.UserTaskFilterRepresentation(); // UserTaskFilterRepresentation | userTaskFilterRepresentation

apiInstance.updateUserTaskFilter(userFilterId, userTaskFilterRepresentation);
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

