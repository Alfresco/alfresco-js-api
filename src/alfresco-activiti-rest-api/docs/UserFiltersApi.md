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

var userProcessInstanceFilterRepresentation = new this.alfrescoJsApi.activiti.UserProcessInstanceFilterRepresentation(); // UserProcessInstanceFilterRepresentation | userProcessInstanceFilterRepresentation

this.alfrescoJsApi.activiti.userFiltersApi.createUserProcessInstanceFilter(userProcessInstanceFilterRepresentation);
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

var userTaskFilterRepresentation = new this.alfrescoJsApi.activiti.UserTaskFilterRepresentation(); // UserTaskFilterRepresentation | userTaskFilterRepresentation

this.alfrescoJsApi.activiti.userFiltersApi.createUserTaskFilter(userTaskFilterRepresentation);
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

var userFilterId = 789; // Integer | userFilterId

this.alfrescoJsApi.activiti.userFiltersApi.deleteUserProcessInstanceFilter(userFilterId);
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

var userFilterId = 789; // Integer | userFilterId

this.alfrescoJsApi.activiti.userFiltersApi.deleteUserTaskFilter(userFilterId);
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

var userFilterId = 789; // Integer | userFilterId

this.alfrescoJsApi.activiti.userFiltersApi.getUserProcessInstanceFilter(userFilterId);
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

var opts = { 
  'appId': 789 // Integer | appId
};

this.alfrescoJsApi.activiti.userFiltersApi.getUserProcessInstanceFilters(opts);
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

var userFilterId = 789; // Integer | userFilterId

this.alfrescoJsApi.activiti.userFiltersApi.getUserTaskFilter(userFilterId);
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

var opts = { 
  'appId': 789 // Integer | appId
};

this.alfrescoJsApi.activiti.userFiltersApi.getUserTaskFilters(opts);
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

var filterOrderRepresentation = new this.alfrescoJsApi.activiti.UserFilterOrderRepresentation(); // UserFilterOrderRepresentation | filterOrderRepresentation

this.alfrescoJsApi.activiti.userFiltersApi.orderUserProcessInstanceFilters(filterOrderRepresentation);
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

var filterOrderRepresentation = new this.alfrescoJsApi.activiti.UserFilterOrderRepresentation(); // UserFilterOrderRepresentation | filterOrderRepresentation

this.alfrescoJsApi.activiti.userFiltersApi.orderUserTaskFilters(filterOrderRepresentation);
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

var userFilterId = 789; // Integer | userFilterId

var userProcessInstanceFilterRepresentation = new this.alfrescoJsApi.activiti.UserProcessInstanceFilterRepresentation(); // UserProcessInstanceFilterRepresentation | userProcessInstanceFilterRepresentation

this.alfrescoJsApi.activiti.userFiltersApi.updateUserProcessInstanceFilter(userFilterId, userProcessInstanceFilterRepresentation);
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

var userFilterId = 789; // Integer | userFilterId

var userTaskFilterRepresentation = new this.alfrescoJsApi.activiti.UserTaskFilterRepresentation(); // UserTaskFilterRepresentation | userTaskFilterRepresentation

this.alfrescoJsApi.activiti.userFiltersApi.updateUserTaskFilter(userFilterId, userTaskFilterRepresentation);
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

