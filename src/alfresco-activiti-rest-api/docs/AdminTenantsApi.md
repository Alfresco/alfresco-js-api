# ActivitiPublicRestApi.AdminTenantsApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createTenant**](AdminTenantsApi.md#createTenant) | **POST** /api/enterprise/admin/tenants | Create a new tenant
[**deleteTenant**](AdminTenantsApi.md#deleteTenant) | **DELETE** /api/enterprise/admin/tenants/{tenantId} | Delete a tenant
[**getTenantEvents**](AdminTenantsApi.md#getTenantEvents) | **GET** /api/enterprise/admin/tenants/{tenantId}/events | Get tenant events
[**getTenantLogo**](AdminTenantsApi.md#getTenantLogo) | **GET** /api/enterprise/admin/tenants/{tenantId}/logo | Get tenant logo
[**getTenant**](AdminTenantsApi.md#getTenant) | **GET** /api/enterprise/admin/tenants/{tenantId} | Get tenant details
[**getTenants**](AdminTenantsApi.md#getTenants) | **GET** /api/enterprise/admin/tenants | Get all tenants
[**update**](AdminTenantsApi.md#update) | **PUT** /api/enterprise/admin/tenants/{tenantId} | Update a tenant
[**uploadTenantLogo**](AdminTenantsApi.md#uploadTenantLogo) | **POST** /api/enterprise/admin/tenants/{tenantId}/logo | Update tenant logo


<a name="createTenant"></a>
# **createTenant**
> LightTenantRepresentation createTenant(createTenantRepresentation)

Create a new tenant

Tenant manager only

### Example
```javascript

var createTenantRepresentation = new this.alfrescoJsApi.activiti.CreateTenantRepresentation(); // CreateTenantRepresentation | createTenantRepresentation

this.alfrescoJsApi.activiti.adminTenantsApi.createTenant(createTenantRepresentation);
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

<a name="deleteTenant"></a>
# **deleteTenant**
> deleteTenant(tenantId)

Delete a tenant

### Example
```javascript

var tenantId = 789; // Integer | tenantId

this.alfrescoJsApi.activiti.adminTenantsApi.deleteTenant(tenantId);
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

<a name="getTenantEvents"></a>
# **getTenantEvents**
> [TenantEvent] getTenantEvents(tenantId)

Get tenant events

### Example
```javascript

var tenantId = 789; // Integer | tenantId

this.alfrescoJsApi.activiti.adminTenantsApi.getTenantEvents(tenantId);
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

<a name="getTenantLogo"></a>
# **getTenantLogo**
> getTenantLogo(tenantId)

Get tenant logo

### Example
```javascript

var tenantId = 789; // Integer | tenantId

this.alfrescoJsApi.activiti.adminTenantsApi.getTenantLogo(tenantId);
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

<a name="getTenant"></a>
# **getTenant**
> TenantRepresentation getTenant(tenantId)

Get tenant details

### Example
```javascript

var tenantId = 789; // Integer | tenantId

this.alfrescoJsApi.activiti.adminTenantsApi.getTenant(tenantId);
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

<a name="getTenants"></a>
# **getTenants**
> [LightTenantRepresentation] getTenants()

Get all tenants

Tenant manager only

### Example
```javascript

this.alfrescoJsApi.activiti.adminTenantsApi.getTenants();
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

<a name="update"></a>
# **update**
> TenantRepresentation update(tenantId, createTenantRepresentation)

Update a tenant

### Example
```javascript

var tenantId = 789; // Integer | tenantId

var createTenantRepresentation = new this.alfrescoJsApi.activiti.CreateTenantRepresentation(); // CreateTenantRepresentation | createTenantRepresentation

this.alfrescoJsApi.activiti.adminTenantsApi.update(tenantId, createTenantRepresentation);
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

<a name="uploadTenantLogo"></a>
# **uploadTenantLogo**
> ImageUploadRepresentation uploadTenantLogo(tenantId, file)

Update tenant logo

### Example
```javascript

var tenantId = 789; // Integer | tenantId

var file = "/path/to/file.txt"; // File | file

this.alfrescoJsApi.activiti.adminTenantsApi.uploadTenantLogo(tenantId, file);
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

