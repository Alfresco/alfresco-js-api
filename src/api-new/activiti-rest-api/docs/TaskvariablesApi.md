# .TaskvariablesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTaskVariableUsingPOST**](TaskvariablesApi.md#createTaskVariableUsingPOST) | **POST** /enterprise/tasks/{taskId}/variables | Create variables
[**deleteAllLocalTaskVariablesUsingDELETE**](TaskvariablesApi.md#deleteAllLocalTaskVariablesUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/variables | Create or update variables
[**deleteVariableUsingDELETE**](TaskvariablesApi.md#deleteVariableUsingDELETE) | **DELETE** /enterprise/tasks/{taskId}/variables/{variableName} | Delete a variable
[**getVariableUsingGET**](TaskvariablesApi.md#getVariableUsingGET) | **GET** /enterprise/tasks/{taskId}/variables/{variableName} | Get a variable
[**getVariablesUsingGET**](TaskvariablesApi.md#getVariablesUsingGET) | **GET** /enterprise/tasks/{taskId}/variables | List variables
[**updateVariableUsingPUT**](TaskvariablesApi.md#updateVariableUsingPUT) | **PUT** /enterprise/tasks/{taskId}/variables/{variableName} | Update a variable


<a name="createTaskVariableUsingPOST"></a>
# **createTaskVariableUsingPOST**
> any createTaskVariableUsingPOST(taskIdrestVariables)

Create variables

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TaskvariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTaskVariableUsingPOST(taskIdrestVariables, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **restVariables** | [**any**](RestVariable.md)| restVariables | 

### Return type

[**any**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAllLocalTaskVariablesUsingDELETE"></a>
# **deleteAllLocalTaskVariablesUsingDELETE**
> deleteAllLocalTaskVariablesUsingDELETE(taskId)

Create or update variables

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TaskvariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAllLocalTaskVariablesUsingDELETE(taskId, callback);
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

<a name="deleteVariableUsingDELETE"></a>
# **deleteVariableUsingDELETE**
> deleteVariableUsingDELETE(taskIdvariableNameopts)

Delete a variable

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TaskvariablesApi();

var opts = { 
  'scope': scope_example // string | scope
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteVariableUsingDELETE(taskIdvariableNameopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **variableName** | **string**| variableName | 
 **scope** | **string**| scope | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariableUsingGET"></a>
# **getVariableUsingGET**
> RestVariable getVariableUsingGET(taskIdvariableNameopts)

Get a variable

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TaskvariablesApi();

var opts = { 
  'scope': scope_example // string | scope
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariableUsingGET(taskIdvariableNameopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **variableName** | **string**| variableName | 
 **scope** | **string**| scope | [optional] 

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getVariablesUsingGET"></a>
# **getVariablesUsingGET**
> any getVariablesUsingGET(taskIdopts)

List variables

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TaskvariablesApi();

var opts = { 
  'scope': scope_example // string | scope
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getVariablesUsingGET(taskIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **scope** | **string**| scope | [optional] 

### Return type

[**any**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateVariableUsingPUT"></a>
# **updateVariableUsingPUT**
> RestVariable updateVariableUsingPUT(taskIdvariableNamerestVariable)

Update a variable

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .TaskvariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateVariableUsingPUT(taskIdvariableNamerestVariable, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **taskId** | **string**| taskId | 
 **variableName** | **string**| variableName | 
 **restVariable** | [**RestVariable**](RestVariable.md)| restVariable | 

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

