# AdminendpointsApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createBasicAuthConfiguration**](AdminendpointsApi.md#createBasicAuthConfiguration) | **POST** /enterprise/admin/basic-auths | Add an endpoint authorization
[**createEndpointConfiguration**](AdminendpointsApi.md#createEndpointConfiguration) | **POST** /enterprise/admin/endpoints | Create an endpoint
[**getBasicAuthConfiguration**](AdminendpointsApi.md#getBasicAuthConfiguration) | **GET** /enterprise/admin/basic-auths/{basicAuthId} | Get an endpoint authorization
[**getBasicAuthConfigurations**](AdminendpointsApi.md#getBasicAuthConfigurations) | **GET** /enterprise/admin/basic-auths | List endpoint authorizations
[**getEndpointConfiguration**](AdminendpointsApi.md#getEndpointConfiguration) | **GET** /enterprise/admin/endpoints/{endpointConfigurationId} | Get an endpoint
[**getEndpointConfigurations**](AdminendpointsApi.md#getEndpointConfigurations) | **GET** /enterprise/admin/endpoints | List endpoints
[**removeBasicAuthonfiguration**](AdminendpointsApi.md#removeBasicAuthonfiguration) | **DELETE** /enterprise/admin/basic-auths/{basicAuthId} | Delete an endpoint authorization
[**removeEndpointConfiguration**](AdminendpointsApi.md#removeEndpointConfiguration) | **DELETE** /enterprise/admin/endpoints/{endpointConfigurationId} | Delete an endpoint
[**updateBasicAuthConfiguration**](AdminendpointsApi.md#updateBasicAuthConfiguration) | **PUT** /enterprise/admin/basic-auths/{basicAuthId} | Update an endpoint authorization
[**updateEndpointConfiguration**](AdminendpointsApi.md#updateEndpointConfiguration) | **PUT** /enterprise/admin/endpoints/{endpointConfigurationId} | Update an endpoint


<a name="createBasicAuthConfiguration"></a>
# **createBasicAuthConfiguration**
> EndpointBasicAuthRepresentation createBasicAuthConfiguration(createRepresentation)

Add an endpoint authorization

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.createBasicAuthConfiguration(createRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md)| createRepresentation | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

<a name="createEndpointConfiguration"></a>
# **createEndpointConfiguration**
> EndpointConfigurationRepresentation createEndpointConfiguration(representation)

Create an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.createEndpointConfiguration(representation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **representation** | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)| representation | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

<a name="getBasicAuthConfiguration"></a>
# **getBasicAuthConfiguration**
> EndpointBasicAuthRepresentation getBasicAuthConfiguration(basicAuthIdtenantId)

Get an endpoint authorization

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getBasicAuthConfiguration(basicAuthIdtenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **number**| basicAuthId | 
 **tenantId** | **number**| tenantId | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

<a name="getBasicAuthConfigurations"></a>
# **getBasicAuthConfigurations**
> EndpointBasicAuthRepresentation getBasicAuthConfigurations(tenantId)

List endpoint authorizations

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getBasicAuthConfigurations(tenantId).then((data) => {
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

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

<a name="getEndpointConfiguration"></a>
# **getEndpointConfiguration**
> EndpointConfigurationRepresentation getEndpointConfiguration(endpointConfigurationIdtenantId)

Get an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getEndpointConfiguration(endpointConfigurationIdtenantId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 
 **tenantId** | **number**| tenantId | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

<a name="getEndpointConfigurations"></a>
# **getEndpointConfigurations**
> EndpointConfigurationRepresentation getEndpointConfigurations(tenantId)

List endpoints

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getEndpointConfigurations(tenantId).then((data) => {
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

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

<a name="removeBasicAuthonfiguration"></a>
# **removeBasicAuthonfiguration**
> removeBasicAuthonfiguration(basicAuthIdtenantId)

Delete an endpoint authorization

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.removeBasicAuthonfiguration(basicAuthIdtenantId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **number**| basicAuthId | 
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

<a name="removeEndpointConfiguration"></a>
# **removeEndpointConfiguration**
> removeEndpointConfiguration(endpointConfigurationIdtenantId)

Delete an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.removeEndpointConfiguration(endpointConfigurationIdtenantId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 
 **tenantId** | **number**| tenantId | 

### Return type

null (empty response body)

<a name="updateBasicAuthConfiguration"></a>
# **updateBasicAuthConfiguration**
> EndpointBasicAuthRepresentation updateBasicAuthConfiguration(basicAuthIdcreateRepresentation)

Update an endpoint authorization

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.updateBasicAuthConfiguration(basicAuthIdcreateRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **basicAuthId** | **number**| basicAuthId | 
 **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md)| createRepresentation | 

### Return type

[**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

<a name="updateEndpointConfiguration"></a>
# **updateEndpointConfiguration**
> EndpointConfigurationRepresentation updateEndpointConfiguration(endpointConfigurationIdrepresentation)

Update an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.updateEndpointConfiguration(endpointConfigurationIdrepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **endpointConfigurationId** | **number**| endpointConfigurationId | 
 **representation** | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)| representation | 

### Return type

[**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

