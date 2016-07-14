# ActivitiPublicRestApi.AdminEndpointsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBasicAuthConfigurationUsingPOST1**](AdminEndpointsApi.md#createBasicAuthConfigurationUsingPOST1) | **POST** /api/enterprise/admin/basic-auths | createBasicAuthConfiguration
[**createEndpointConfigurationUsingPOST1**](AdminEndpointsApi.md#createEndpointConfigurationUsingPOST1) | **POST** /api/enterprise/admin/endpoints | createEndpointConfiguration
[**getBasicAuthConfigurationUsingGET1**](AdminEndpointsApi.md#getBasicAuthConfigurationUsingGET1) | **GET** /api/enterprise/admin/basic-auths/{basicAuthId} | getBasicAuthConfiguration
[**getBasicAuthConfigurationsUsingGET1**](AdminEndpointsApi.md#getBasicAuthConfigurationsUsingGET1) | **GET** /api/enterprise/admin/basic-auths | getBasicAuthConfigurations
[**getEndpointConfigurationUsingGET1**](AdminEndpointsApi.md#getEndpointConfigurationUsingGET1) | **GET** /api/enterprise/admin/endpoints/{endpointConfigurationId} | getEndpointConfiguration
[**getEndpointConfigurationsUsingGET1**](AdminEndpointsApi.md#getEndpointConfigurationsUsingGET1) | **GET** /api/enterprise/admin/endpoints | getEndpointConfigurations
[**removeBasicAuthonfigurationUsingDELETE1**](AdminEndpointsApi.md#removeBasicAuthonfigurationUsingDELETE1) | **DELETE** /api/enterprise/admin/basic-auths/{basicAuthId} | removeBasicAuthonfiguration
[**removeEndpointConfigurationUsingDELETE1**](AdminEndpointsApi.md#removeEndpointConfigurationUsingDELETE1) | **DELETE** /api/enterprise/admin/endpoints/{endpointConfigurationId} | removeEndpointConfiguration
[**updateBasicAuthConfigurationUsingPUT1**](AdminEndpointsApi.md#updateBasicAuthConfigurationUsingPUT1) | **PUT** /api/enterprise/admin/basic-auths/{basicAuthId} | updateBasicAuthConfiguration
[**updateEndpointConfigurationUsingPUT1**](AdminEndpointsApi.md#updateEndpointConfigurationUsingPUT1) | **PUT** /api/enterprise/admin/endpoints/{endpointConfigurationId} | updateEndpointConfiguration


<a name="createBasicAuthConfigurationUsingPOST1"></a>
# **createBasicAuthConfigurationUsingPOST1**
> EndpointBasicAuthRepresentation createBasicAuthConfigurationUsingPOST1(createRepresentation)

createBasicAuthConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var createRepresentation = new ActivitiPublicRestApi.CreateEndpointBasicAuthRepresentation(); // CreateEndpointBasicAuthRepresentation | createRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBasicAuthConfigurationUsingPOST1(createRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md)| createRepresentation | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEndpointConfigurationUsingPOST1"></a>
# **createEndpointConfigurationUsingPOST1**
> EndpointConfigurationRepresentation createEndpointConfigurationUsingPOST1(representation)

createEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var representation = new ActivitiPublicRestApi.EndpointConfigurationRepresentation(); // EndpointConfigurationRepresentation | representation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEndpointConfigurationUsingPOST1(representation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **representation** | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)| representation | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBasicAuthConfigurationUsingGET1"></a>
# **getBasicAuthConfigurationUsingGET1**
> EndpointBasicAuthRepresentation getBasicAuthConfigurationUsingGET1(basicAuthId, tenantId)

getBasicAuthConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var basicAuthId = 789; // Integer | basicAuthId

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBasicAuthConfigurationUsingGET1(basicAuthId, tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **Integer**| basicAuthId | 
 **tenantId** | **Integer**| tenantId | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBasicAuthConfigurationsUsingGET1"></a>
# **getBasicAuthConfigurationsUsingGET1**
> [EndpointBasicAuthRepresentation] getBasicAuthConfigurationsUsingGET1(tenantId)

getBasicAuthConfigurations

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBasicAuthConfigurationsUsingGET1(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 

### Return type

[**[EndpointBasicAuthRepresentation]**](EndpointBasicAuthRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEndpointConfigurationUsingGET1"></a>
# **getEndpointConfigurationUsingGET1**
> EndpointConfigurationRepresentation getEndpointConfigurationUsingGET1(endpointConfigurationId, tenantId)

getEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var endpointConfigurationId = 789; // Integer | endpointConfigurationId

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointConfigurationUsingGET1(endpointConfigurationId, tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **Integer**| endpointConfigurationId | 
 **tenantId** | **Integer**| tenantId | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEndpointConfigurationsUsingGET1"></a>
# **getEndpointConfigurationsUsingGET1**
> [EndpointConfigurationRepresentation] getEndpointConfigurationsUsingGET1(tenantId)

getEndpointConfigurations

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointConfigurationsUsingGET1(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 

### Return type

[**[EndpointConfigurationRepresentation]**](EndpointConfigurationRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeBasicAuthonfigurationUsingDELETE1"></a>
# **removeBasicAuthonfigurationUsingDELETE1**
> removeBasicAuthonfigurationUsingDELETE1(basicAuthId, tenantId)

removeBasicAuthonfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var basicAuthId = 789; // Integer | basicAuthId

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeBasicAuthonfigurationUsingDELETE1(basicAuthId, tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **Integer**| basicAuthId | 
 **tenantId** | **Integer**| tenantId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEndpointConfigurationUsingDELETE1"></a>
# **removeEndpointConfigurationUsingDELETE1**
> removeEndpointConfigurationUsingDELETE1(endpointConfigurationId, tenantId)

removeEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var endpointConfigurationId = 789; // Integer | endpointConfigurationId

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeEndpointConfigurationUsingDELETE1(endpointConfigurationId, tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **Integer**| endpointConfigurationId | 
 **tenantId** | **Integer**| tenantId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBasicAuthConfigurationUsingPUT1"></a>
# **updateBasicAuthConfigurationUsingPUT1**
> EndpointBasicAuthRepresentation updateBasicAuthConfigurationUsingPUT1(basicAuthId, createRepresentation)

updateBasicAuthConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var basicAuthId = 789; // Integer | basicAuthId

var createRepresentation = new ActivitiPublicRestApi.CreateEndpointBasicAuthRepresentation(); // CreateEndpointBasicAuthRepresentation | createRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBasicAuthConfigurationUsingPUT1(basicAuthId, createRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **Integer**| basicAuthId | 
 **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md)| createRepresentation | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEndpointConfigurationUsingPUT1"></a>
# **updateEndpointConfigurationUsingPUT1**
> EndpointConfigurationRepresentation updateEndpointConfigurationUsingPUT1(endpointConfigurationId, representation)

updateEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var endpointConfigurationId = 789; // Integer | endpointConfigurationId

var representation = new ActivitiPublicRestApi.EndpointConfigurationRepresentation(); // EndpointConfigurationRepresentation | representation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEndpointConfigurationUsingPUT1(endpointConfigurationId, representation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **Integer**| endpointConfigurationId | 
 **representation** | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)| representation | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

