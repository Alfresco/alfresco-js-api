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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createUserTaskFilterUsingPOST"></a>
# **createUserTaskFilterUsingPOST**
> UserTaskFilterRepresentation createUserTaskFilterUsingPOST(userTaskFilterRepresentation)

Create a task filter

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserProcessInstanceFilterUsingDELETE"></a>
# **deleteUserProcessInstanceFilterUsingDELETE**
> deleteUserProcessInstanceFilterUsingDELETE(userFilterId)

Delete a process instance filter

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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
 **userFilterId** | **number**| userFilterId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteUserTaskFilterUsingDELETE"></a>
# **deleteUserTaskFilterUsingDELETE**
> deleteUserTaskFilterUsingDELETE(userFilterId)

Delete a task filter

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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
 **userFilterId** | **number**| userFilterId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserProcessInstanceFilterUsingGET"></a>
# **getUserProcessInstanceFilterUsingGET**
> UserProcessInstanceFilterRepresentation getUserProcessInstanceFilterUsingGET(userFilterId)

Get a process instance filter

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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
 **userFilterId** | **number**| userFilterId | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserProcessInstanceFiltersUsingGET"></a>
# **getUserProcessInstanceFiltersUsingGET**
> ResultListDataRepresentationUserProcessInstanceFilterRepresentation getUserProcessInstanceFiltersUsingGET(opts)

List process instance filters

Returns filters for the current user, optionally filtered by *appId*.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();

var opts = { 
  'appId': 789 // number | appId
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
 **appId** | **number**| appId | [optional] 

### Return type

[**ResultListDataRepresentationUserProcessInstanceFilterRepresentation**](ResultListDataRepresentationUserProcessInstanceFilterRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserTaskFilterUsingGET"></a>
# **getUserTaskFilterUsingGET**
> UserTaskFilterRepresentation getUserTaskFilterUsingGET(userFilterId)

Get a task filter

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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
 **userFilterId** | **number**| userFilterId | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUserTaskFiltersUsingGET"></a>
# **getUserTaskFiltersUsingGET**
> ResultListDataRepresentationUserTaskFilterRepresentation getUserTaskFiltersUsingGET(opts)

List task filters

Returns filters for the current user, optionally filtered by *appId*.

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();

var opts = { 
  'appId': 789 // number | appId
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
 **appId** | **number**| appId | [optional] 

### Return type

[**ResultListDataRepresentationUserTaskFilterRepresentation**](ResultListDataRepresentationUserTaskFilterRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderUserProcessInstanceFiltersUsingPUT"></a>
# **orderUserProcessInstanceFiltersUsingPUT**
> orderUserProcessInstanceFiltersUsingPUT(filterOrderRepresentation)

Re-order the list of user process instance filters

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="orderUserTaskFiltersUsingPUT"></a>
# **orderUserTaskFiltersUsingPUT**
> orderUserTaskFiltersUsingPUT(filterOrderRepresentation)

Re-order the list of user task filters

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


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

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserProcessInstanceFilterUsingPUT"></a>
# **updateUserProcessInstanceFilterUsingPUT**
> UserProcessInstanceFilterRepresentation updateUserProcessInstanceFilterUsingPUT(userFilterIduserProcessInstanceFilterRepresentation)

Update a process instance filter

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserProcessInstanceFilterUsingPUT(userFilterIduserProcessInstanceFilterRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 
 **userProcessInstanceFilterRepresentation** | [**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)| userProcessInstanceFilterRepresentation | 

### Return type

[**UserProcessInstanceFilterRepresentation**](UserProcessInstanceFilterRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUserTaskFilterUsingPUT"></a>
# **updateUserTaskFilterUsingPUT**
> UserTaskFilterRepresentation updateUserTaskFilterUsingPUT(userFilterIduserTaskFilterRepresentation)

Update a task filter

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .UserfiltersApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUserTaskFilterUsingPUT(userFilterIduserTaskFilterRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userFilterId** | **number**| userFilterId | 
 **userTaskFilterRepresentation** | [**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)| userTaskFilterRepresentation | 

### Return type

[**UserTaskFilterRepresentation**](UserTaskFilterRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

