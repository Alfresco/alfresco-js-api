# FormmodelsApi

All URIs are relative to */activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormEditorJson**](FormmodelsApi.md#getFormEditorJson) | **GET** /enterprise/forms/{formId}/editorJson | Get form content
[**getFormHistory**](FormmodelsApi.md#getFormHistory) | **GET** /enterprise/editor/form-models/{formId}/history/{formHistoryId} | Get form history
[**getForm**](FormmodelsApi.md#getForm) | **GET** /enterprise/editor/form-models/{formId} | Get a form model
[**getForm**](FormmodelsApi.md#getForm) | **GET** /enterprise/forms/{formId} | Get a form
[**getForms**](FormmodelsApi.md#getForms) | **GET** /enterprise/editor/form-models/values | Get forms
[**getForms**](FormmodelsApi.md#getForms) | **GET** /enterprise/editor/form-models | List form models
[**getForms**](FormmodelsApi.md#getForms) | **GET** /enterprise/forms | Query forms
[**saveForm**](FormmodelsApi.md#saveForm) | **PUT** /enterprise/editor/form-models/{formId} | Update form model content
[**validateModel**](FormmodelsApi.md#validateModel) | **PUT** /enterprise/editor/form-models/{formId}/validate | Validate form model content


<a name="getFormEditorJson"></a>
# **getFormEditorJson**
> FormDefinitionRepresentation getFormEditorJson(formId)

Get form content

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getFormEditorJson(formId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

<a name="getFormHistory"></a>
# **getFormHistory**
> FormRepresentation getFormHistory(formIdformHistoryId)

Get form history

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getFormHistory(formIdformHistoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 
 **formHistoryId** | **number**| formHistoryId | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

<a name="getForm"></a>
# **getForm**
> FormRepresentation getForm(formId)

Get a form model

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getForm(formId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

<a name="getForms"></a>
# **getForms**
> FormRepresentation getForms(formId)

Get forms

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getForms(formId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | [**string**](string.md)| formId | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

<a name="getForms"></a>
# **getForms**
> ResultListDataRepresentationFormRepresentation getForms()

List form models

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);

formmodelsApi.getForms().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationFormRepresentation**](ResultListDataRepresentationFormRepresentation.md)

<a name="getForms"></a>
# **getForms**
> ResultListDataRepresentationRuntimeFormRepresentation getForms(opts)

Query forms

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);

let opts = { 
  'nameLike': nameLike_example //  | nameLike
  'appId': 789 //  | appId
  'tenantId': 789 //  | tenantId
  'start': 56 //  | start
  'sort': sort_example //  | sort
  'order': order_example //  | order
  'size': 56 //  | size
};

formmodelsApi.getForms(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nameLike** | **string**| nameLike | [optional] 
 **appId** | **number**| appId | [optional] 
 **tenantId** | **number**| tenantId | [optional] 
 **start** | **number**| start | [optional] 
 **sort** | **string**| sort | [optional] 
 **order** | **string**| order | [optional] 
 **size** | **number**| size | [optional] 

### Return type

[**ResultListDataRepresentationRuntimeFormRepresentation**](ResultListDataRepresentationRuntimeFormRepresentation.md)

<a name="saveForm"></a>
# **saveForm**
> FormRepresentation saveForm(formIdsaveRepresentation)

Update form model content

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.saveForm(formIdsaveRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| ID of the form to update | 
 **saveRepresentation** | [**FormSaveRepresentation**](FormSaveRepresentation.md)| saveRepresentation | 

### Return type

[**FormRepresentation**](FormRepresentation.md)

<a name="validateModel"></a>
# **validateModel**
> ValidationErrorRepresentation validateModel(formIdsaveRepresentation)

Validate form model content

The model content to be validated must be specified in the POST body

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.validateModel(formIdsaveRepresentation).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **formId** | **number**| formId | 
 **saveRepresentation** | [**FormSaveRepresentation**](FormSaveRepresentation.md)| saveRepresentation | 

### Return type

[**ValidationErrorRepresentation**](ValidationErrorRepresentation.md)

