# .RuntimeappdeploymentsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAppDeploymentUsingDELETE**](RuntimeappdeploymentsApi.md#deleteAppDeploymentUsingDELETE) | **DELETE** /enterprise/runtime-app-deployments/{appDeploymentId} | Remove an app deployment
[**exportAppDefinitionUsingGET1**](RuntimeappdeploymentsApi.md#exportAppDefinitionUsingGET1) | **GET** /enterprise/export-app-deployment/{deploymentId} | Export the app archive for a deployment
[**getAppDefinitionsUsingGET1**](RuntimeappdeploymentsApi.md#getAppDefinitionsUsingGET1) | **GET** /enterprise/runtime-app-deployments | Query app deployments
[**getAppDeploymentUsingGET**](RuntimeappdeploymentsApi.md#getAppDeploymentUsingGET) | **GET** /enterprise/runtime-app-deployments/{appDeploymentId} | Get an app deployment
[**getRuntimeAppDeploymentByDeploymentUsingGET**](RuntimeappdeploymentsApi.md#getRuntimeAppDeploymentByDeploymentUsingGET) | **GET** /enterprise/runtime-app-deployment | Get an app by deployment ID or DMN deployment ID


<a name="deleteAppDeploymentUsingDELETE"></a>
# **deleteAppDeploymentUsingDELETE**
> deleteAppDeploymentUsingDELETE(appDeploymentId)

Remove an app deployment

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdeploymentsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteAppDeploymentUsingDELETE(appDeploymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appDeploymentId** | **number**| appDeploymentId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="exportAppDefinitionUsingGET1"></a>
# **exportAppDefinitionUsingGET1**
> exportAppDefinitionUsingGET1(deploymentId)

Export the app archive for a deployment

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdeploymentsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.exportAppDefinitionUsingGET1(deploymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentId** | **string**| deploymentId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/zip

<a name="getAppDefinitionsUsingGET1"></a>
# **getAppDefinitionsUsingGET1**
> ResultListDataRepresentationAppDeploymentRepresentation getAppDefinitionsUsingGET1(opts)

Query app deployments

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdeploymentsApi();

var opts = { 
  'nameLike': nameLike_example // string | nameLike
  'tenantId': 789 // number | tenantId
  'latest': true // boolean | latest
  'start': 56 // number | start
  'sort': sort_example // string | sort
  'order': order_example // string | order
  'size': 56 // number | size
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppDefinitionsUsingGET1(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameLike** | **string**| nameLike | [optional] 
 **tenantId** | **number**| tenantId | [optional] 
 **latest** | **boolean**| latest | [optional] 
 **start** | **number**| start | [optional] 
 **sort** | **string**| sort | [optional] 
 **order** | **string**| order | [optional] 
 **size** | **number**| size | [optional] 

### Return type

[**ResultListDataRepresentationAppDeploymentRepresentation**](ResultListDataRepresentationAppDeploymentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAppDeploymentUsingGET"></a>
# **getAppDeploymentUsingGET**
> AppDeploymentRepresentation getAppDeploymentUsingGET(appDeploymentId)

Get an app deployment

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdeploymentsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAppDeploymentUsingGET(appDeploymentId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appDeploymentId** | **number**| appDeploymentId | 

### Return type

[**AppDeploymentRepresentation**](AppDeploymentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRuntimeAppDeploymentByDeploymentUsingGET"></a>
# **getRuntimeAppDeploymentByDeploymentUsingGET**
> AppDeploymentRepresentation getRuntimeAppDeploymentByDeploymentUsingGET(opts)

Get an app by deployment ID or DMN deployment ID

Either a deploymentId or a dmnDeploymentId must be provided

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .RuntimeappdeploymentsApi();

var opts = { 
  'deploymentId': deploymentId_example // string | deploymentId
  'dmnDeploymentId': 789 // number | dmnDeploymentId
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRuntimeAppDeploymentByDeploymentUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentId** | **string**| deploymentId | [optional] 
 **dmnDeploymentId** | **number**| dmnDeploymentId | [optional] 

### Return type

[**AppDeploymentRepresentation**](AppDeploymentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

