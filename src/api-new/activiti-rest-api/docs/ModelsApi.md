# .ModelsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createModelUsingPOST**](ModelsApi.md#createModelUsingPOST) | **POST** /enterprise/models | Create a new model
[**deleteModelUsingDELETE**](ModelsApi.md#deleteModelUsingDELETE) | **DELETE** /enterprise/models/{modelId} | Delete a model
[**duplicateModelUsingPOST**](ModelsApi.md#duplicateModelUsingPOST) | **POST** /enterprise/models/{modelId}/clone | Duplicate an existing model
[**getModelJSONUsingGET**](ModelsApi.md#getModelJSONUsingGET) | **GET** /enterprise/models/{modelId}/editor/json | Get model content
[**getModelThumbnailUsingGET**](ModelsApi.md#getModelThumbnailUsingGET) | **GET** /enterprise/models/{modelId}/thumbnail | Get a model's thumbnail image
[**getModelUsingGET**](ModelsApi.md#getModelUsingGET) | **GET** /enterprise/models/{modelId} | Get a model
[**getModelsToIncludeInAppDefinitionUsingGET**](ModelsApi.md#getModelsToIncludeInAppDefinitionUsingGET) | **GET** /enterprise/models-for-app-definition | List process definition models shared with the current user
[**getModelsUsingGET**](ModelsApi.md#getModelsUsingGET) | **GET** /enterprise/models | List models (process, form, decision rule or app)
[**importNewVersionUsingPOST**](ModelsApi.md#importNewVersionUsingPOST) | **POST** /enterprise/models/{modelId}/newversion | Create a new version of a model
[**importProcessModelUsingPOST**](ModelsApi.md#importProcessModelUsingPOST) | **POST** /enterprise/process-models/import | Import a BPMN 2.0 XML file
[**saveModelUsingPOST**](ModelsApi.md#saveModelUsingPOST) | **POST** /enterprise/models/{modelId}/editor/json | Update model content
[**updateModelUsingPUT**](ModelsApi.md#updateModelUsingPUT) | **PUT** /enterprise/models/{modelId} | Update a model
[**validateModelUsingPOST**](ModelsApi.md#validateModelUsingPOST) | **POST** /enterprise/models/{modelId}/editor/validate | Validate model content


<a name="createModelUsingPOST"></a>
# **createModelUsingPOST**
> ModelRepresentation createModelUsingPOST(modelRepresentation)

Create a new model

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.createModelUsingPOST(modelRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelRepresentation** | [**ModelRepresentation**](ModelRepresentation.md)| modelRepresentation | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

<a name="deleteModelUsingDELETE"></a>
# **deleteModelUsingDELETE**
> deleteModelUsingDELETE(modelIdopts)

Delete a model

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);

let opts = { 
  'cascade': true //  | cascade
  'deleteRuntimeApp': true //  | deleteRuntimeApp
};

modelsApi.deleteModelUsingDELETE(modelIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **cascade** | **boolean**| cascade | [optional] 
 **deleteRuntimeApp** | **boolean**| deleteRuntimeApp | [optional] 

### Return type

null (empty response body)

<a name="duplicateModelUsingPOST"></a>
# **duplicateModelUsingPOST**
> ModelRepresentation duplicateModelUsingPOST(modelIdmodelRepresentation)

Duplicate an existing model

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.duplicateModelUsingPOST(modelIdmodelRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **modelRepresentation** | [**ModelRepresentation**](ModelRepresentation.md)| modelRepresentation | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

<a name="getModelJSONUsingGET"></a>
# **getModelJSONUsingGET**
> ObjectNode getModelJSONUsingGET(modelId)

Get model content

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.getModelJSONUsingGET(modelId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 

### Return type

[**ObjectNode**](ObjectNode.md)

<a name="getModelThumbnailUsingGET"></a>
# **getModelThumbnailUsingGET**
> string getModelThumbnailUsingGET(modelId)

Get a model's thumbnail image

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.getModelThumbnailUsingGET(modelId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 

### Return type

**string**

<a name="getModelUsingGET"></a>
# **getModelUsingGET**
> ModelRepresentation getModelUsingGET(modelIdopts)

Get a model

Models act as containers for process, form, decision table and app definitions

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);

let opts = { 
  'includePermissions': true //  | includePermissions
};

modelsApi.getModelUsingGET(modelIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **includePermissions** | **boolean**| includePermissions | [optional] 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

<a name="getModelsToIncludeInAppDefinitionUsingGET"></a>
# **getModelsToIncludeInAppDefinitionUsingGET**
> ResultListDataRepresentationModelRepresentation getModelsToIncludeInAppDefinitionUsingGET()

List process definition models shared with the current user

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);

modelsApi.getModelsToIncludeInAppDefinitionUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationModelRepresentation**](ResultListDataRepresentationModelRepresentation.md)

<a name="getModelsUsingGET"></a>
# **getModelsUsingGET**
> ResultListDataRepresentationModelRepresentation getModelsUsingGET(opts)

List models (process, form, decision rule or app)

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example //  | filter
  'sort': sort_example //  | sort
  'modelType': 56 //  | modelType
  'referenceId': 789 //  | referenceId
};

modelsApi.getModelsUsingGET(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| filter | [optional] 
 **sort** | **string**| sort | [optional] 
 **modelType** | **number**| modelType | [optional] 
 **referenceId** | **number**| referenceId | [optional] 

### Return type

[**ResultListDataRepresentationModelRepresentation**](ResultListDataRepresentationModelRepresentation.md)

<a name="importNewVersionUsingPOST"></a>
# **importNewVersionUsingPOST**
> ModelRepresentation importNewVersionUsingPOST(modelIdfile)

Create a new version of a model

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.importNewVersionUsingPOST(modelIdfile).then((data) => {
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

[**ModelRepresentation**](ModelRepresentation.md)

<a name="importProcessModelUsingPOST"></a>
# **importProcessModelUsingPOST**
> ModelRepresentation importProcessModelUsingPOST(file)

Import a BPMN 2.0 XML file

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.importProcessModelUsingPOST(file).then((data) => {
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

[**ModelRepresentation**](ModelRepresentation.md)

<a name="saveModelUsingPOST"></a>
# **saveModelUsingPOST**
> ModelRepresentation saveModelUsingPOST(modelIdvalues)

Update model content

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.saveModelUsingPOST(modelIdvalues).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **values** | **any**| values | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

<a name="updateModelUsingPUT"></a>
# **updateModelUsingPUT**
> ModelRepresentation updateModelUsingPUT(modelIdupdatedModel)

Update a model

This method allows you to update the metadata of a model. In order to update the content of the model you will need to call the specific endpoint for that model type.

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);


modelsApi.updateModelUsingPUT(modelIdupdatedModel).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **updatedModel** | [**ModelRepresentation**](ModelRepresentation.md)| updatedModel | 

### Return type

[**ModelRepresentation**](ModelRepresentation.md)

<a name="validateModelUsingPOST"></a>
# **validateModelUsingPOST**
> ValidationErrorRepresentation validateModelUsingPOST(modelIdopts)

Validate model content

### Example
```javascript
import ModelsApi from 'ModelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let modelsApi = new ModelsApi(this.alfrescoApi);

let opts = { 
  'values':  //  | values
};

modelsApi.validateModelUsingPOST(modelIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **modelId** | **number**| modelId | 
 **values** | **any**| values | [optional] 

### Return type

[**ValidationErrorRepresentation**](ValidationErrorRepresentation.md)

