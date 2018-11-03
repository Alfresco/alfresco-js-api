# .RuntimeappdeploymentsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAppDeploymentUsingDELETE**](RuntimeappdeploymentsApi.md#deleteAppDeploymentUsingDELETE) | **DELETE** /enterprise/runtime-app-deployments/{appDeploymentId} | Remove an app deployment
[**exportAppDefinitionUsingGET1**](RuntimeappdeploymentsApi.md#exportAppDefinitionUsingGET1) | **GET** /enterprise/export-app-deployment/{deploymentId} | Export the app archive for a deployment
[**getAppDefinitionsUsingGET1**](RuntimeappdeploymentsApi.md#getAppDefinitionsUsingGET1) | **GET** /enterprise/runtime-app-deployments | Query app deployments
[**getAppDeploymentUsingGET**](RuntimeappdeploymentsApi.md#getAppDeploymentUsingGET) | **GET** /enterprise/runtime-app-deployments/{appDeploymentId} | Get an app deployment
[**getRuntimeAppDeploymentByDeploymentUsingGET**](RuntimeappdeploymentsApi.md#getRuntimeAppDeploymentByDeploymentUsingGET) | **GET** /enterprise/runtime-app-deployment | Get an app by deployment ID or DMN deployment ID


<a name="deleteAppDeploymentUsingDELETE"></a>
# **deleteAppDeploymentUsingDELETE**
> deleteAppDeploymentUsingDELETE(appDeploymentId)

Remove an app deployment

### Example
```javascript
import RuntimeappdeploymentsApi from 'RuntimeappdeploymentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdeploymentsApi = new RuntimeappdeploymentsApi(this.alfrescoApi);


runtimeappdeploymentsApi.deleteAppDeploymentUsingDELETE(appDeploymentId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appDeploymentId** | **number**| appDeploymentId | 

### Return type

null (empty response body)

<a name="exportAppDefinitionUsingGET1"></a>
# **exportAppDefinitionUsingGET1**
> exportAppDefinitionUsingGET1(deploymentId)

Export the app archive for a deployment

### Example
```javascript
import RuntimeappdeploymentsApi from 'RuntimeappdeploymentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdeploymentsApi = new RuntimeappdeploymentsApi(this.alfrescoApi);


runtimeappdeploymentsApi.exportAppDefinitionUsingGET1(deploymentId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentId** | **string**| deploymentId | 

### Return type

null (empty response body)

<a name="getAppDefinitionsUsingGET1"></a>
# **getAppDefinitionsUsingGET1**
> ResultListDataRepresentationAppDeploymentRepresentation getAppDefinitionsUsingGET1(opts)

Query app deployments

### Example
```javascript
import RuntimeappdeploymentsApi from 'RuntimeappdeploymentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdeploymentsApi = new RuntimeappdeploymentsApi(this.alfrescoApi);

let opts = { 
  'nameLike': nameLike_example //  | nameLike
  'tenantId': 789 //  | tenantId
  'latest': true //  | latest
  'start': 56 //  | start
  'sort': sort_example //  | sort
  'order': order_example //  | order
  'size': 56 //  | size
};

runtimeappdeploymentsApi.getAppDefinitionsUsingGET1(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameLike** | **string**| nameLike | [optional] 
 **tenantId** | **number**| tenantId | [optional] 
 **latest** | **boolean**| latest | [optional] 
 **start** | **number**| start | [optional] 
 **sort** | **string**| sort | [optional] 
 **order** | **string**| order | [optional] 
 **size** | **number**| size | [optional] 

### Return type

[**ResultListDataRepresentationAppDeploymentRepresentation**](ResultListDataRepresentationAppDeploymentRepresentation.md)

<a name="getAppDeploymentUsingGET"></a>
# **getAppDeploymentUsingGET**
> AppDeploymentRepresentation getAppDeploymentUsingGET(appDeploymentId)

Get an app deployment

### Example
```javascript
import RuntimeappdeploymentsApi from 'RuntimeappdeploymentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdeploymentsApi = new RuntimeappdeploymentsApi(this.alfrescoApi);


runtimeappdeploymentsApi.getAppDeploymentUsingGET(appDeploymentId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appDeploymentId** | **number**| appDeploymentId | 

### Return type

[**AppDeploymentRepresentation**](AppDeploymentRepresentation.md)

<a name="getRuntimeAppDeploymentByDeploymentUsingGET"></a>
# **getRuntimeAppDeploymentByDeploymentUsingGET**
> AppDeploymentRepresentation getRuntimeAppDeploymentByDeploymentUsingGET(opts)

Get an app by deployment ID or DMN deployment ID

Either a deploymentId or a dmnDeploymentId must be provided

### Example
```javascript
import RuntimeappdeploymentsApi from 'RuntimeappdeploymentsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdeploymentsApi = new RuntimeappdeploymentsApi(this.alfrescoApi);

let opts = { 
  'deploymentId': deploymentId_example //  | deploymentId
  'dmnDeploymentId': 789 //  | dmnDeploymentId
};

runtimeappdeploymentsApi.getRuntimeAppDeploymentByDeploymentUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deploymentId** | **string**| deploymentId | [optional] 
 **dmnDeploymentId** | **number**| dmnDeploymentId | [optional] 

### Return type

[**AppDeploymentRepresentation**](AppDeploymentRepresentation.md)

