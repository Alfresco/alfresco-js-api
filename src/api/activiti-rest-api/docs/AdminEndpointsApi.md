# Admin Endpoints Api

All URIs are relative to */activiti-app/api*

| Method                                                            | HTTP request                                                     | Description                      |
|-------------------------------------------------------------------|------------------------------------------------------------------|----------------------------------|
| [**createBasicAuthConfiguration**](#createBasicAuthConfiguration) | **POST** /enterprise/admin/basic-auths                           | Add an endpoint authorization    |
| [**createEndpointConfiguration**](#createEndpointConfiguration)   | **POST** /enterprise/admin/endpoints                             | Create an endpoint               |
| [**getBasicAuthConfiguration**](#getBasicAuthConfiguration)       | **GET** /enterprise/admin/basic-auths/{basicAuthId}              | Get an endpoint authorization    |
| [**getBasicAuthConfigurations**](#getBasicAuthConfigurations)     | **GET** /enterprise/admin/basic-auths                            | List endpoint authorizations     |
| [**getEndpointConfiguration**](#getEndpointConfiguration)         | **GET** /enterprise/admin/endpoints/{endpointConfigurationId}    | Get an endpoint                  |
| [**getEndpointConfigurations**](#getEndpointConfigurations)       | **GET** /enterprise/admin/endpoints                              | List endpoints                   |
| [**removeBasicAuthonfiguration**](#removeBasicAuthonfiguration)   | **DELETE** /enterprise/admin/basic-auths/{basicAuthId}           | Delete an endpoint authorization |
| [**removeEndpointConfiguration**](d#removeEndpointConfiguration)  | **DELETE** /enterprise/admin/endpoints/{endpointConfigurationId} | Delete an endpoint               |
| [**updateBasicAuthConfiguration**](#updateBasicAuthConfiguration) | **PUT** /enterprise/admin/basic-auths/{basicAuthId}              | Update an endpoint authorization |
| [**updateEndpointConfiguration**](#updateEndpointConfiguration)   | **PUT** /enterprise/admin/endpoints/{endpointConfigurationId}    | Update an endpoint               |


# createBasicAuthConfiguration

Add an endpoint authorization

**Parameters**

| Name                     | Type                                                                                  | Description          | Notes |
|--------------------------|---------------------------------------------------------------------------------------|----------------------|-------|
| **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md) | createRepresentation |       | 

**Return type**: [**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminEndpointsApi.createBasicAuthConfiguration(createRepresentation).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```

# createEndpointConfiguration

Create an endpoint

**Parameters**

| Name               | Type                                                                              | Description    |
|--------------------|-----------------------------------------------------------------------------------|----------------|
| **representation** | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md) | representation | 

**Return type**: [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminEndpointsApi.createEndpointConfiguration(representation).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```

# getBasicAuthConfiguration

Get an endpoint authorization

**Parameters**

| Name            | Type   | Description |
|-----------------|--------|-------------|
| **basicAuthId** | number | basicAuthId | 
| **tenantId**    | number | tenantId    | 

**Return type**: [**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

**Example**

```javascript
import {AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminEndpointsApi.getBasicAuthConfiguration('authId', 'tenantId').then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```

# getBasicAuthConfigurations

List endpoint authorizations

**Parameters**

| Name         | Type       | Description |
|--------------|------------|-------------|
| **tenantId** | **number** | tenantId    | 

**Return type**: [**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminEndpointsApi.getBasicAuthConfigurations(tenantId).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```

# getEndpointConfiguration

Get an endpoint

**Parameters**

| Name                        | Type       | Description             |
|-----------------------------|------------|-------------------------|
| **endpointConfigurationId** | **number** | endpointConfigurationId | 
| **tenantId**                | **number** | tenantId                | 

**Return type**: [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminEndpointsApi.getEndpointConfiguration(endpointConfigurationIdtenantId).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```

# getEndpointConfigurations

List endpoints

**Parameters**

| Name         | Type       | Description |
|--------------|------------|-------------|
| **tenantId** | **number** | tenantId    | 

**Return type**: [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminEndpointsApi.getEndpointConfigurations(`tenantId`).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```

# removeBasicAuthConfiguration

Delete an endpoint authorization

**Parameters**

| Name            | Type       | Description |
|-----------------|------------|-------------|
| **basicAuthId** | **number** | basicAuthId | 
| **tenantId**    | **number** | tenantId    | 

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminEndpointsApi.removeBasicAuthConfiguration(basicAuthIdtenantId).then(() => {
    console.log('API called successfully.');
});
```

# removeEndpointConfiguration

Delete an endpoint

**Parameters**

| Name                        | Type       | Description             |
|-----------------------------|------------|-------------------------|
| **endpointConfigurationId** | **number** | endpointConfigurationId | 
| **tenantId**                | **number** | tenantId                | 

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);

adminendpointsApi.removeEndpointConfiguration(endpointConfigurationIdtenantId).then(() => {
    console.log('API called successfully.');
});
```

# updateBasicAuthConfiguration**

Update an endpoint authorization

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminEndpointsApi = new AdminEndpointsApi(alfrescoApi);
const payload = {};

adminEndpointsApi.updateBasicAuthConfiguration('<basicAuthId>', payload).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```

**Parameters**

| Name                     | Type                                                                                  | Description          |
|--------------------------|---------------------------------------------------------------------------------------|----------------------|
| **basicAuthId**          | **number**                                                                            | basicAuthId          | 
| **createRepresentation** | [**CreateEndpointBasicAuthRepresentation**](CreateEndpointBasicAuthRepresentation.md) | createRepresentation | 

**Return type**: [**EndpointBasicAuthRepresentation**](EndpointBasicAuthRepresentation.md)

# updateEndpointConfiguration

Update an endpoint

**Parameters**

| Name                        | Type                                                                              | Description             | Notes |
|-----------------------------|-----------------------------------------------------------------------------------|-------------------------|-------|
| **endpointConfigurationId** | **number**                                                                        | endpointConfigurationId | 
| **representation**          | [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md) | representation          | 

**Return type**: [**EndpointConfigurationRepresentation**](EndpointConfigurationRepresentation.md)

**Example**

```javascript
import { AlfrescoApi, AdminEndpointsApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const adminendpointsApi = new AdminEndpointsApi(alfrescoApi);
const endpointConfigurationId = '<id>';
const payload = {};

adminendpointsApi.updateEndpointConfiguration(endpointConfigurationId, payload).then((data) => {
    console.log('API called successfully. Returned data: ' + data);
});
```