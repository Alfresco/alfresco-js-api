# .AdmintenantsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTenantUsingPOST**](AdmintenantsApi.md#createTenantUsingPOST) | **POST** /enterprise/admin/tenants | Create a tenant
[**deleteTenantUsingDELETE**](AdmintenantsApi.md#deleteTenantUsingDELETE) | **DELETE** /enterprise/admin/tenants/{tenantId} | Delete a tenant
[**getTenantEventsUsingGET**](AdmintenantsApi.md#getTenantEventsUsingGET) | **GET** /enterprise/admin/tenants/{tenantId}/events | Get tenant events
[**getTenantLogoUsingGET**](AdmintenantsApi.md#getTenantLogoUsingGET) | **GET** /enterprise/admin/tenants/{tenantId}/logo | Get a tenant&#39;s logo
[**getTenantUsingGET**](AdmintenantsApi.md#getTenantUsingGET) | **GET** /enterprise/admin/tenants/{tenantId} | Get a tenant
[**getTenantsUsingGET**](AdmintenantsApi.md#getTenantsUsingGET) | **GET** /enterprise/admin/tenants | List tenants
[**updateUsingPUT**](AdmintenantsApi.md#updateUsingPUT) | **PUT** /enterprise/admin/tenants/{tenantId} | Update a tenant
[**uploadTenantLogoUsingPOST**](AdmintenantsApi.md#uploadTenantLogoUsingPOST) | **POST** /enterprise/admin/tenants/{tenantId}/logo | Update a tenant&#39;s logo


<a name="createTenantUsingPOST"></a>
# **createTenantUsingPOST**
> LightTenantRepresentation createTenantUsingPOST(createTenantRepresentation)

Create a tenant

Only a tenant manager may access this endpoint

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTenantUsingPOST(createTenantRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTenantRepresentation** | [**CreateTenantRepresentation**](CreateTenantRepresentation.md)| createTenantRepresentation | 

### Return type

[**LightTenantRepresentation**](LightTenantRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTenantUsingDELETE"></a>
# **deleteTenantUsingDELETE**
> deleteTenantUsingDELETE(tenantId)

Delete a tenant

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTenantUsingDELETE(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantEventsUsingGET"></a>
# **getTenantEventsUsingGET**
> any getTenantEventsUsingGET(tenantId)

Get tenant events

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTenantEventsUsingGET(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**any**](TenantEvent.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantLogoUsingGET"></a>
# **getTenantLogoUsingGET**
> getTenantLogoUsingGET(tenantId)

Get a tenant&#39;s logo

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTenantLogoUsingGET(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantUsingGET"></a>
# **getTenantUsingGET**
> TenantRepresentation getTenantUsingGET(tenantId)

Get a tenant

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTenantUsingGET(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**TenantRepresentation**](TenantRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantsUsingGET"></a>
# **getTenantsUsingGET**
> any getTenantsUsingGET()

List tenants

Only a tenant manager may access this endpoint

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTenantsUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**any**](LightTenantRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUsingPUT"></a>
# **updateUsingPUT**
> TenantRepresentation updateUsingPUT(tenantIdcreateTenantRepresentation)

Update a tenant

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT(tenantIdcreateTenantRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 
 **createTenantRepresentation** | [**CreateTenantRepresentation**](CreateTenantRepresentation.md)| createTenantRepresentation | 

### Return type

[**TenantRepresentation**](TenantRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadTenantLogoUsingPOST"></a>
# **uploadTenantLogoUsingPOST**
> ImageUploadRepresentation uploadTenantLogoUsingPOST(tenantIdfile)

Update a tenant&#39;s logo

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .AdmintenantsApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadTenantLogoUsingPOST(tenantIdfile, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 
 **file** | **Blob**| file | 

### Return type

[**ImageUploadRepresentation**](ImageUploadRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

