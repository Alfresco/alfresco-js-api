# .AppdefinitionsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteAppDefinitionUsingDELETE**](AppdefinitionsApi.md#deleteAppDefinitionUsingDELETE) | **DELETE** /enterprise/app-definitions/{appDefinitionId} | deleteAppDefinition
[**exportAppDefinitionUsingGET**](AppdefinitionsApi.md#exportAppDefinitionUsingGET) | **GET** /enterprise/app-definitions/{modelId}/export | Export an app definition
[**getAppDefinitionUsingGET**](AppdefinitionsApi.md#getAppDefinitionUsingGET) | **GET** /enterprise/app-definitions/{modelId} | Get an app definition
[**importAndPublishAppUsingPOST**](AppdefinitionsApi.md#importAndPublishAppUsingPOST) | **POST** /enterprise/app-definitions/publish-app | importAndPublishApp
[**importAndPublishAppUsingPOST1**](AppdefinitionsApi.md#importAndPublishAppUsingPOST1) | **POST** /enterprise/app-definitions/{modelId}/publish-app | importAndPublishApp
[**importAppDefinitionUsingPOST**](AppdefinitionsApi.md#importAppDefinitionUsingPOST) | **POST** /enterprise/app-definitions/import | Import a new app definition
[**importAppDefinitionUsingPOST1**](AppdefinitionsApi.md#importAppDefinitionUsingPOST1) | **POST** /enterprise/app-definitions/{modelId}/import | Update the content of an existing app
[**publishAppDefinitionUsingPOST**](AppdefinitionsApi.md#publishAppDefinitionUsingPOST) | **POST** /enterprise/app-definitions/{modelId}/publish | Publish an app definition
[**updateAppDefinitionUsingPUT**](AppdefinitionsApi.md#updateAppDefinitionUsingPUT) | **PUT** /enterprise/app-definitions/{modelId} | Update an app definition


<a name="deleteAppDefinitionUsingDELETE"></a>
# **deleteAppDefinitionUsingDELETE**
> deleteAppDefinitionUsingDELETE(appDefinitionId)

deleteAppDefinition

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.deleteAppDefinitionUsingDELETE(appDefinitionId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appDefinitionId** | **number**| appDefinitionId | 

### Return type

null (empty response body)

<a name="exportAppDefinitionUsingGET"></a>
# **exportAppDefinitionUsingGET**
> exportAppDefinitionUsingGET(modelId)

Export an app definition

This will return a zip file containing the app definition model and all related models (process definitions and forms).

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.exportAppDefinitionUsingGET(modelId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId from a runtime app or the id of an app definition model | 

### Return type

null (empty response body)

<a name="getAppDefinitionUsingGET"></a>
# **getAppDefinitionUsingGET**
> AppDefinitionRepresentation getAppDefinitionUsingGET(modelId)

Get an app definition

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.getAppDefinitionUsingGET(modelId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| Application definition ID | 

### Return type

[**AppDefinitionRepresentation**](AppDefinitionRepresentation.md)

<a name="importAndPublishAppUsingPOST"></a>
# **importAndPublishAppUsingPOST**
> AppDefinitionUpdateResultRepresentation importAndPublishAppUsingPOST(file)

importAndPublishApp

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.importAndPublishAppUsingPOST(file).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Blob**| file | 

### Return type

[**AppDefinitionUpdateResultRepresentation**](AppDefinitionUpdateResultRepresentation.md)

<a name="importAndPublishAppUsingPOST1"></a>
# **importAndPublishAppUsingPOST1**
> AppDefinitionUpdateResultRepresentation importAndPublishAppUsingPOST1(modelIdfile)

importAndPublishApp

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.importAndPublishAppUsingPOST1(modelIdfile).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **file** | **Blob**| file | 

### Return type

[**AppDefinitionUpdateResultRepresentation**](AppDefinitionUpdateResultRepresentation.md)

<a name="importAppDefinitionUsingPOST"></a>
# **importAppDefinitionUsingPOST**
> AppDefinitionRepresentation importAppDefinitionUsingPOST(fileopts)

Import a new app definition

Allows a zip file to be uploaded containing an app definition and any number of included models.<p>This is useful to bootstrap an environment (for users or continuous integration).<p>Before using any processes included in the import the app must be published and deployed.

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);

let opts = { 
  'renewIdmEntries': renewIdmEntries_example //  | Whether to renew user and group identifiers
};

appdefinitionsApi.importAppDefinitionUsingPOST(fileopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **file** | **Blob**| file | 
 **renewIdmEntries** | **string**| Whether to renew user and group identifiers | [optional] [default to false]

### Return type

[**AppDefinitionRepresentation**](AppDefinitionRepresentation.md)

<a name="importAppDefinitionUsingPOST1"></a>
# **importAppDefinitionUsingPOST1**
> AppDefinitionRepresentation importAppDefinitionUsingPOST1(modelIdfile)

Update the content of an existing app

Imports an app inside an existing app definition and creates a new version<p>Before using any new or updated processes included in the import the app must be (re-)published and deployed.

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.importAppDefinitionUsingPOST1(modelIdfile).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **file** | **Blob**| file | 

### Return type

[**AppDefinitionRepresentation**](AppDefinitionRepresentation.md)

<a name="publishAppDefinitionUsingPOST"></a>
# **publishAppDefinitionUsingPOST**
> AppDefinitionUpdateResultRepresentation publishAppDefinitionUsingPOST(modelIdpublishModel)

Publish an app definition

Publishing an app definition makes it available for use. The application must not have any validation errors or an error will be returned.<p>Before an app definition can be used by other users, it must also be deployed for their use

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.publishAppDefinitionUsingPOST(modelIdpublishModel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **publishModel** | [**AppDefinitionPublishRepresentation**](AppDefinitionPublishRepresentation.md)| publishModel | 

### Return type

[**AppDefinitionUpdateResultRepresentation**](AppDefinitionUpdateResultRepresentation.md)

<a name="updateAppDefinitionUsingPUT"></a>
# **updateAppDefinitionUsingPUT**
> AppDefinitionUpdateResultRepresentation updateAppDefinitionUsingPUT(modelIdupdatedModel)

Update an app definition

### Example
```javascript
import AppdefinitionsApi from 'AppdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let appdefinitionsApi = new AppdefinitionsApi(this.alfrescoApi);


appdefinitionsApi.updateAppDefinitionUsingPUT(modelIdupdatedModel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| Application definition ID | 
 **updatedModel** | [**AppDefinitionSaveRepresentation**](AppDefinitionSaveRepresentation.md)| updatedModel | 

### Return type

[**AppDefinitionUpdateResultRepresentation**](AppDefinitionUpdateResultRepresentation.md)

