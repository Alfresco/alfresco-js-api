# ActivitiPublicRestApi.AdminEndpointsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBasicAuthConfiguration**](AdminEndpointsApi.md#createBasicAuthConfiguration) | **POST** /api/enterprise/admin/basic-auths | createBasicAuthConfiguration
[**createEndpointConfiguration**](AdminEndpointsApi.md#createEndpointConfiguration) | **POST** /api/enterprise/admin/endpoints | createEndpointConfiguration
[**getBasicAuthConfiguration**](AdminEndpointsApi.md#getBasicAuthConfiguration) | **GET** /api/enterprise/admin/basic-auths/{basicAuthId} | getBasicAuthConfiguration
[**getBasicAuthConfigurations**](AdminEndpointsApi.md#getBasicAuthConfigurations) | **GET** /api/enterprise/admin/basic-auths | getBasicAuthConfigurations
[**getEndpointConfiguration**](AdminEndpointsApi.md#getEndpointConfiguration) | **GET** /api/enterprise/admin/endpoints/{endpointConfigurationId} | getEndpointConfiguration
[**getEndpointConfigurations**](AdminEndpointsApi.md#getEndpointConfigurations) | **GET** /api/enterprise/admin/endpoints | getEndpointConfigurations
[**removeBasicAuthonfiguration**](AdminEndpointsApi.md#removeBasicAuthonfiguration) | **DELETE** /api/enterprise/admin/basic-auths/{basicAuthId} | removeBasicAuthonfiguration
[**removeEndpointConfiguration**](AdminEndpointsApi.md#removeEndpointConfiguration) | **DELETE** /api/enterprise/admin/endpoints/{endpointConfigurationId} | removeEndpointConfiguration
[**updateBasicAuthConfiguration**](AdminEndpointsApi.md#updateBasicAuthConfiguration) | **PUT** /api/enterprise/admin/basic-auths/{basicAuthId} | updateBasicAuthConfiguration
[**updateEndpointConfiguration**](AdminEndpointsApi.md#updateEndpointConfiguration) | **PUT** /api/enterprise/admin/endpoints/{endpointConfigurationId} | updateEndpointConfiguration


<a name="createBasicAuthConfiguration"></a>
# **createBasicAuthConfiguration**
> EndpointBasicAuthRepresentation createBasicAuthConfiguration(createRepresentation)

createBasicAuthConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var createRepresentation = new ActivitiPublicRestApi.CreateEndpointBasicAuthRepresentation(); // CreateEndpointBasicAuthRepresentation | createRepresentation


apiInstance.createBasicAuthConfiguration(createRepresentation);
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

<a name="createEndpointConfiguration"></a>
# **createEndpointConfiguration**
> EndpointConfigurationRepresentation createEndpointConfiguration(representation)

createEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var representation = new ActivitiPublicRestApi.EndpointConfigurationRepresentation(); // EndpointConfigurationRepresentation | representation


apiInstance.createEndpointConfiguration(representation);
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

<a name="getBasicAuthConfiguration"></a>
# **getBasicAuthConfiguration**
> EndpointBasicAuthRepresentation getBasicAuthConfiguration(basicAuthId, tenantId)

getBasicAuthConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var basicAuthId = 789; // Integer | basicAuthId

var tenantId = 789; // Integer | tenantId

apiInstance.getBasicAuthConfiguration(basicAuthId, tenantId,);
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

<a name="getBasicAuthConfigurations"></a>
# **getBasicAuthConfigurations**
> [EndpointBasicAuthRepresentation] getBasicAuthConfigurations(tenantId)

getBasicAuthConfigurations

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var tenantId = 789; // Integer | tenantId

apiInstance.getBasicAuthConfigurations(tenantId);
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

<a name="getEndpointConfiguration"></a>
# **getEndpointConfiguration**
> EndpointConfigurationRepresentation getEndpointConfiguration(endpointConfigurationId, tenantId)

getEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var endpointConfigurationId = 789; // Integer | endpointConfigurationId

var tenantId = 789; // Integer | tenantId


apiInstance.getEndpointConfiguration(endpointConfigurationId, tenantId);
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

<a name="getEndpointConfigurations"></a>
# **getEndpointConfigurations**
> [EndpointConfigurationRepresentation] getEndpointConfigurations(tenantId)

getEndpointConfigurations

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var tenantId = 789; // Integer | tenantId


apiInstance.getEndpointConfigurations(tenantId);
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

<a name="removeBasicAuthonfiguration"></a>
# **removeBasicAuthonfiguration**
> removeBasicAuthonfiguration(basicAuthId, tenantId)

removeBasicAuthonfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var basicAuthId = 789; // Integer | basicAuthId

var tenantId = 789; // Integer | tenantId

apiInstance.removeBasicAuthonfiguration(basicAuthId, tenantId);
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

<a name="removeEndpointConfiguration"></a>
# **removeEndpointConfiguration**
> removeEndpointConfiguration(endpointConfigurationId, tenantId)

removeEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var endpointConfigurationId = 789; // Integer | endpointConfigurationId

var tenantId = 789; // Integer | tenantId

apiInstance.removeEndpointConfiguration(endpointConfigurationId, tenantId);
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

<a name="updateBasicAuthConfiguration"></a>
# **updateBasicAuthConfiguration**
> EndpointBasicAuthRepresentation updateBasicAuthConfiguration(basicAuthId, createRepresentation)

updateBasicAuthConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var basicAuthId = 789; // Integer | basicAuthId

var createRepresentation = new ActivitiPublicRestApi.CreateEndpointBasicAuthRepresentation(); // CreateEndpointBasicAuthRepresentation | createRepresentation


apiInstance.updateBasicAuthConfiguration(basicAuthId, createRepresentation);
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

<a name="updateEndpointConfiguration"></a>
# **updateEndpointConfiguration**
> EndpointConfigurationRepresentation updateEndpointConfiguration(endpointConfigurationId, representation)

updateEndpointConfiguration

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminEndpointsApi();

var endpointConfigurationId = 789; // Integer | endpointConfigurationId

var representation = new ActivitiPublicRestApi.EndpointConfigurationRepresentation(); // EndpointConfigurationRepresentation | representation


apiInstance.updateEndpointConfiguration(endpointConfigurationId, representation);
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

