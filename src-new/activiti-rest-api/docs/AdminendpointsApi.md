# .AdminendpointsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBasicAuthConfigurationUsingPOST**](AdminendpointsApi.md#createBasicAuthConfigurationUsingPOST) | **POST** /enterprise/admin/basic-auths | Add an endpoint authorization
[**createEndpointConfigurationUsingPOST**](AdminendpointsApi.md#createEndpointConfigurationUsingPOST) | **POST** /enterprise/admin/endpoints | Create an endpoint
[**getBasicAuthConfigurationUsingGET**](AdminendpointsApi.md#getBasicAuthConfigurationUsingGET) | **GET** /enterprise/admin/basic-auths/{basicAuthId} | Get an endpoint authorization
[**getBasicAuthConfigurationsUsingGET**](AdminendpointsApi.md#getBasicAuthConfigurationsUsingGET) | **GET** /enterprise/admin/basic-auths | List endpoint authorizations
[**getEndpointConfigurationUsingGET1**](AdminendpointsApi.md#getEndpointConfigurationUsingGET1) | **GET** /enterprise/admin/endpoints/{endpointConfigurationId} | Get an endpoint
[**getEndpointConfigurationsUsingGET1**](AdminendpointsApi.md#getEndpointConfigurationsUsingGET1) | **GET** /enterprise/admin/endpoints | List endpoints
[**removeBasicAuthonfigurationUsingDELETE**](AdminendpointsApi.md#removeBasicAuthonfigurationUsingDELETE) | **DELETE** /enterprise/admin/basic-auths/{basicAuthId} | Delete an endpoint authorization
[**removeEndpointConfigurationUsingDELETE**](AdminendpointsApi.md#removeEndpointConfigurationUsingDELETE) | **DELETE** /enterprise/admin/endpoints/{endpointConfigurationId} | Delete an endpoint
[**updateBasicAuthConfigurationUsingPUT**](AdminendpointsApi.md#updateBasicAuthConfigurationUsingPUT) | **PUT** /enterprise/admin/basic-auths/{basicAuthId} | Update an endpoint authorization
[**updateEndpointConfigurationUsingPUT**](AdminendpointsApi.md#updateEndpointConfigurationUsingPUT) | **PUT** /enterprise/admin/endpoints/{endpointConfigurationId} | Update an endpoint


<a name="createBasicAuthConfigurationUsingPOST"></a>
# **createBasicAuthConfigurationUsingPOST**
> EndpointBasicAuthRepresentation createBasicAuthConfigurationUsingPOST(createRepresentation)

Add an endpoint authorization

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createBasicAuthConfigurationUsingPOST(createRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md)| createRepresentation | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createEndpointConfigurationUsingPOST"></a>
# **createEndpointConfigurationUsingPOST**
> EndpointConfigurationRepresentation createEndpointConfigurationUsingPOST(representation)

Create an endpoint

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createEndpointConfigurationUsingPOST(representation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **representation** | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)| representation | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBasicAuthConfigurationUsingGET"></a>
# **getBasicAuthConfigurationUsingGET**
> EndpointBasicAuthRepresentation getBasicAuthConfigurationUsingGET(basicAuthIdtenantId)

Get an endpoint authorization

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBasicAuthConfigurationUsingGET(basicAuthIdtenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **number**| basicAuthId | 
 **tenantId** | **number**| tenantId | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getBasicAuthConfigurationsUsingGET"></a>
# **getBasicAuthConfigurationsUsingGET**
> any getBasicAuthConfigurationsUsingGET(tenantId)

List endpoint authorizations

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBasicAuthConfigurationsUsingGET(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**any**](EndpointBasicAuthRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEndpointConfigurationUsingGET1"></a>
# **getEndpointConfigurationUsingGET1**
> EndpointConfigurationRepresentation getEndpointConfigurationUsingGET1(endpointConfigurationIdtenantId)

Get an endpoint

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getEndpointConfigurationUsingGET1(endpointConfigurationIdtenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 
 **tenantId** | **number**| tenantId | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getEndpointConfigurationsUsingGET1"></a>
# **getEndpointConfigurationsUsingGET1**
> any getEndpointConfigurationsUsingGET1(tenantId)

List endpoints

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


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
 **tenantId** | **number**| tenantId | 

### Return type

[**any**](EndpointConfigurationRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeBasicAuthonfigurationUsingDELETE"></a>
# **removeBasicAuthonfigurationUsingDELETE**
> removeBasicAuthonfigurationUsingDELETE(basicAuthIdtenantId)

Delete an endpoint authorization

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeBasicAuthonfigurationUsingDELETE(basicAuthIdtenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **number**| basicAuthId | 
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeEndpointConfigurationUsingDELETE"></a>
# **removeEndpointConfigurationUsingDELETE**
> removeEndpointConfigurationUsingDELETE(endpointConfigurationIdtenantId)

Delete an endpoint

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.removeEndpointConfigurationUsingDELETE(endpointConfigurationIdtenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateBasicAuthConfigurationUsingPUT"></a>
# **updateBasicAuthConfigurationUsingPUT**
> EndpointBasicAuthRepresentation updateBasicAuthConfigurationUsingPUT(basicAuthIdcreateRepresentation)

Update an endpoint authorization

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateBasicAuthConfigurationUsingPUT(basicAuthIdcreateRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **number**| basicAuthId | 
 **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md)| createRepresentation | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateEndpointConfigurationUsingPUT"></a>
# **updateEndpointConfigurationUsingPUT**
> EndpointConfigurationRepresentation updateEndpointConfigurationUsingPUT(endpointConfigurationIdrepresentation)

Update an endpoint

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdminendpointsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateEndpointConfigurationUsingPUT(endpointConfigurationIdrepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 
 **representation** | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)| representation | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

