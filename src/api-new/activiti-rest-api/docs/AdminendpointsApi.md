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
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.createBasicAuthConfigurationUsingPOST(createRepresentation).then((data) => {
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

<a name="createEndpointConfigurationUsingPOST"></a>
# **createEndpointConfigurationUsingPOST**
> EndpointConfigurationRepresentation createEndpointConfigurationUsingPOST(representation)

Create an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.createEndpointConfigurationUsingPOST(representation).then((data) => {
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

<a name="getBasicAuthConfigurationUsingGET"></a>
# **getBasicAuthConfigurationUsingGET**
> EndpointBasicAuthRepresentation getBasicAuthConfigurationUsingGET(basicAuthIdtenantId)

Get an endpoint authorization

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getBasicAuthConfigurationUsingGET(basicAuthIdtenantId).then((data) => {
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

<a name="getBasicAuthConfigurationsUsingGET"></a>
# **getBasicAuthConfigurationsUsingGET**
> EndpointBasicAuthRepresentation getBasicAuthConfigurationsUsingGET(tenantId)

List endpoint authorizations

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getBasicAuthConfigurationsUsingGET(tenantId).then((data) => {
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

<a name="getEndpointConfigurationUsingGET1"></a>
# **getEndpointConfigurationUsingGET1**
> EndpointConfigurationRepresentation getEndpointConfigurationUsingGET1(endpointConfigurationIdtenantId)

Get an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getEndpointConfigurationUsingGET1(endpointConfigurationIdtenantId).then((data) => {
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

<a name="getEndpointConfigurationsUsingGET1"></a>
# **getEndpointConfigurationsUsingGET1**
> EndpointConfigurationRepresentation getEndpointConfigurationsUsingGET1(tenantId)

List endpoints

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.getEndpointConfigurationsUsingGET1(tenantId).then((data) => {
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

<a name="removeBasicAuthonfigurationUsingDELETE"></a>
# **removeBasicAuthonfigurationUsingDELETE**
> removeBasicAuthonfigurationUsingDELETE(basicAuthIdtenantId)

Delete an endpoint authorization

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.removeBasicAuthonfigurationUsingDELETE(basicAuthIdtenantId).then(() => {
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

<a name="removeEndpointConfigurationUsingDELETE"></a>
# **removeEndpointConfigurationUsingDELETE**
> removeEndpointConfigurationUsingDELETE(endpointConfigurationIdtenantId)

Delete an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.removeEndpointConfigurationUsingDELETE(endpointConfigurationIdtenantId).then(() => {
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

<a name="updateBasicAuthConfigurationUsingPUT"></a>
# **updateBasicAuthConfigurationUsingPUT**
> EndpointBasicAuthRepresentation updateBasicAuthConfigurationUsingPUT(basicAuthIdcreateRepresentation)

Update an endpoint authorization

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.updateBasicAuthConfigurationUsingPUT(basicAuthIdcreateRepresentation).then((data) => {
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

<a name="updateEndpointConfigurationUsingPUT"></a>
# **updateEndpointConfigurationUsingPUT**
> EndpointConfigurationRepresentation updateEndpointConfigurationUsingPUT(endpointConfigurationIdrepresentation)

Update an endpoint

### Example
```javascript
import AdminendpointsApi from 'AdminendpointsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let adminendpointsApi = new AdminendpointsApi(this.alfrescoApi);


adminendpointsApi.updateEndpointConfigurationUsingPUT(endpointConfigurationIdrepresentation).then((data) => {
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

