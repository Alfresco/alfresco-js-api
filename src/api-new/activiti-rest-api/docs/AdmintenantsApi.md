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
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);


admintenantsApi.createTenantUsingPOST(createTenantRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createTenantRepresentation** | [**CreateTenantRepresentation**](CreateTenantRepresentation.md)| createTenantRepresentation | 

### Return type

[**LightTenantRepresentation**](LightTenantRepresentation.md)

<a name="deleteTenantUsingDELETE"></a>
# **deleteTenantUsingDELETE**
> deleteTenantUsingDELETE(tenantId)

Delete a tenant

### Example
```javascript
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);


admintenantsApi.deleteTenantUsingDELETE(tenantId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

<a name="getTenantEventsUsingGET"></a>
# **getTenantEventsUsingGET**
> Array<TenantEvent> getTenantEventsUsingGET(tenantId)

Get tenant events

### Example
```javascript
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);


admintenantsApi.getTenantEventsUsingGET(tenantId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**Array&lt;TenantEvent&gt;**](TenantEvent.md)

<a name="getTenantLogoUsingGET"></a>
# **getTenantLogoUsingGET**
> getTenantLogoUsingGET(tenantId)

Get a tenant&#39;s logo

### Example
```javascript
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);


admintenantsApi.getTenantLogoUsingGET(tenantId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

<a name="getTenantUsingGET"></a>
# **getTenantUsingGET**
> TenantRepresentation getTenantUsingGET(tenantId)

Get a tenant

### Example
```javascript
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);


admintenantsApi.getTenantUsingGET(tenantId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 

### Return type

[**TenantRepresentation**](TenantRepresentation.md)

<a name="getTenantsUsingGET"></a>
# **getTenantsUsingGET**
> Array<LightTenantRepresentation> getTenantsUsingGET()

List tenants

Only a tenant manager may access this endpoint

### Example
```javascript
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);

admintenantsApi.getTenantsUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;LightTenantRepresentation&gt;**](LightTenantRepresentation.md)

<a name="updateUsingPUT"></a>
# **updateUsingPUT**
> TenantRepresentation updateUsingPUT(tenantIdcreateTenantRepresentation)

Update a tenant

### Example
```javascript
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);


admintenantsApi.updateUsingPUT(tenantIdcreateTenantRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 
 **createTenantRepresentation** | [**CreateTenantRepresentation**](CreateTenantRepresentation.md)| createTenantRepresentation | 

### Return type

[**TenantRepresentation**](TenantRepresentation.md)

<a name="uploadTenantLogoUsingPOST"></a>
# **uploadTenantLogoUsingPOST**
> ImageUploadRepresentation uploadTenantLogoUsingPOST(tenantIdfile)

Update a tenant&#39;s logo

### Example
```javascript
import AdmintenantsApi from 'AdmintenantsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let admintenantsApi = new AdmintenantsApi(this.alfrescoApi);


admintenantsApi.uploadTenantLogoUsingPOST(tenantIdfile).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | 
 **file** | **Blob**| file | 

### Return type

[**ImageUploadRepresentation**](ImageUploadRepresentation.md)

