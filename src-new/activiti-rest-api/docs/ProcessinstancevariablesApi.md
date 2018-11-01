# .ProcessinstancevariablesApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createOrUpdateProcessInstanceVariablesUsingPUT**](ProcessinstancevariablesApi.md#createOrUpdateProcessInstanceVariablesUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/variables | Create or update variables
[**createProcessInstanceVariablesUsingPOST**](ProcessinstancevariablesApi.md#createProcessInstanceVariablesUsingPOST) | **POST** /enterprise/process-instances/{processInstanceId}/variables | Create variables
[**deleteProcessInstanceVariableUsingDELETE**](ProcessinstancevariablesApi.md#deleteProcessInstanceVariableUsingDELETE) | **DELETE** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Delete a variable
[**getProcessInstanceVariableUsingGET**](ProcessinstancevariablesApi.md#getProcessInstanceVariableUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Get a variable
[**getProcessInstanceVariablesUsingGET**](ProcessinstancevariablesApi.md#getProcessInstanceVariablesUsingGET) | **GET** /enterprise/process-instances/{processInstanceId}/variables | List variables
[**updateProcessInstanceVariableUsingPUT**](ProcessinstancevariablesApi.md#updateProcessInstanceVariableUsingPUT) | **PUT** /enterprise/process-instances/{processInstanceId}/variables/{variableName} | Update a variable


<a name="createOrUpdateProcessInstanceVariablesUsingPUT"></a>
# **createOrUpdateProcessInstanceVariablesUsingPUT**
> any createOrUpdateProcessInstanceVariablesUsingPUT(processInstanceIdrestVariables)

Create or update variables

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessinstancevariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createOrUpdateProcessInstanceVariablesUsingPUT(processInstanceIdrestVariables, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 
 **restVariables** | [**any**](RestVariable.md)| restVariables | 

### Return type

[**any**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createProcessInstanceVariablesUsingPOST"></a>
# **createProcessInstanceVariablesUsingPOST**
> any createProcessInstanceVariablesUsingPOST(processInstanceIdrestVariables)

Create variables

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessinstancevariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createProcessInstanceVariablesUsingPOST(processInstanceIdrestVariables, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 
 **restVariables** | [**any**](RestVariable.md)| restVariables | 

### Return type

[**any**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteProcessInstanceVariableUsingDELETE"></a>
# **deleteProcessInstanceVariableUsingDELETE**
> deleteProcessInstanceVariableUsingDELETE(processInstanceIdvariableName)

Delete a variable

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessinstancevariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteProcessInstanceVariableUsingDELETE(processInstanceIdvariableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **variableName** | **string**| variableName | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceVariableUsingGET"></a>
# **getProcessInstanceVariableUsingGET**
> RestVariable getProcessInstanceVariableUsingGET(processInstanceIdvariableName)

Get a variable

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessinstancevariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceVariableUsingGET(processInstanceIdvariableName, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **variableName** | **string**| variableName | 

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getProcessInstanceVariablesUsingGET"></a>
# **getProcessInstanceVariablesUsingGET**
> any getProcessInstanceVariablesUsingGET(processInstanceId)

List variables

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessinstancevariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getProcessInstanceVariablesUsingGET(processInstanceId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| Process instance ID | 

### Return type

[**any**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateProcessInstanceVariableUsingPUT"></a>
# **updateProcessInstanceVariableUsingPUT**
> RestVariable updateProcessInstanceVariableUsingPUT(processInstanceIdvariableNamerestVariable)

Update a variable

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .ProcessinstancevariablesApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateProcessInstanceVariableUsingPUT(processInstanceIdvariableNamerestVariable, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processInstanceId** | **string**| processInstanceId | 
 **variableName** | **string**| variableName | 
 **restVariable** | [**RestVariable**](RestVariable.md)| restVariable | 

### Return type

[**RestVariable**](RestVariable.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

