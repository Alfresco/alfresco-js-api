# ActivitiPublicRestApi.AdminTenantsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTenantUsingPOST1**](AdminTenantsApi.md#createTenantUsingPOST1) | **POST** /api/enterprise/admin/tenants | Create a new tenant
[**deleteTenantUsingDELETE1**](AdminTenantsApi.md#deleteTenantUsingDELETE1) | **DELETE** /api/enterprise/admin/tenants/{tenantId} | Delete a tenant
[**getTenantEventsUsingGET1**](AdminTenantsApi.md#getTenantEventsUsingGET1) | **GET** /api/enterprise/admin/tenants/{tenantId}/events | Get tenant events
[**getTenantLogoUsingGET1**](AdminTenantsApi.md#getTenantLogoUsingGET1) | **GET** /api/enterprise/admin/tenants/{tenantId}/logo | Get tenant logo
[**getTenantUsingGET1**](AdminTenantsApi.md#getTenantUsingGET1) | **GET** /api/enterprise/admin/tenants/{tenantId} | Get tenant details
[**getTenantsUsingGET1**](AdminTenantsApi.md#getTenantsUsingGET1) | **GET** /api/enterprise/admin/tenants | Get all tenants
[**updateUsingPUT1**](AdminTenantsApi.md#updateUsingPUT1) | **PUT** /api/enterprise/admin/tenants/{tenantId} | Update a tenant
[**uploadTenantLogoUsingPOST1**](AdminTenantsApi.md#uploadTenantLogoUsingPOST1) | **POST** /api/enterprise/admin/tenants/{tenantId}/logo | Update tenant logo


<a name="createTenantUsingPOST1"></a>
# **createTenantUsingPOST1**
> LightTenantRepresentation createTenantUsingPOST1(createTenantRepresentation)

Create a new tenant

Tenant manager only

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var createTenantRepresentation = new ActivitiPublicRestApi.CreateTenantRepresentation(); // CreateTenantRepresentation | createTenantRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.createTenantUsingPOST1(createTenantRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTenantRepresentation** | [**CreateTenantRepresentation**](CreateTenantRepresentation.md)| createTenantRepresentation | 

### Return type

[**LightTenantRepresentation**](LightTenantRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteTenantUsingDELETE1"></a>
# **deleteTenantUsingDELETE1**
> deleteTenantUsingDELETE1(tenantId)

Delete a tenant

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteTenantUsingDELETE1(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantEventsUsingGET1"></a>
# **getTenantEventsUsingGET1**
> [TenantEvent] getTenantEventsUsingGET1(tenantId)

Get tenant events

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTenantEventsUsingGET1(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 

### Return type

[**[TenantEvent]**](TenantEvent.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantLogoUsingGET1"></a>
# **getTenantLogoUsingGET1**
> getTenantLogoUsingGET1(tenantId)

Get tenant logo

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.getTenantLogoUsingGET1(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantUsingGET1"></a>
# **getTenantUsingGET1**
> TenantRepresentation getTenantUsingGET1(tenantId)

Get tenant details

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var tenantId = 789; // Integer | tenantId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTenantUsingGET1(tenantId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 

### Return type

[**TenantRepresentation**](TenantRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTenantsUsingGET1"></a>
# **getTenantsUsingGET1**
> [LightTenantRepresentation] getTenantsUsingGET1()

Get all tenants

Tenant manager only

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getTenantsUsingGET1(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**[LightTenantRepresentation]**](LightTenantRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUsingPUT1"></a>
# **updateUsingPUT1**
> TenantRepresentation updateUsingPUT1(tenantId, createTenantRepresentation)

Update a tenant

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var tenantId = 789; // Integer | tenantId

var createTenantRepresentation = new ActivitiPublicRestApi.CreateTenantRepresentation(); // CreateTenantRepresentation | createTenantRepresentation


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.updateUsingPUT1(tenantId, createTenantRepresentation, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 
 **createTenantRepresentation** | [**CreateTenantRepresentation**](CreateTenantRepresentation.md)| createTenantRepresentation | 

### Return type

[**TenantRepresentation**](TenantRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="uploadTenantLogoUsingPOST1"></a>
# **uploadTenantLogoUsingPOST1**
> ImageUploadRepresentation uploadTenantLogoUsingPOST1(tenantId, file)

Update tenant logo

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AdminTenantsApi();

var tenantId = 789; // Integer | tenantId

var file = "/path/to/file.txt"; // File | file


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.uploadTenantLogoUsingPOST1(tenantId, file, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | 
 **file** | **File**| file | 

### Return type

[**ImageUploadRepresentation**](ImageUploadRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

