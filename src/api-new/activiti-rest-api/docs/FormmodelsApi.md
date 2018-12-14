# .FormmodelsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getFormEditorJsonUsingGET**](FormmodelsApi.md#getFormEditorJsonUsingGET) | **GET** /enterprise/forms/{formId}/editorJson | Get form content
[**getFormHistoryUsingGET**](FormmodelsApi.md#getFormHistoryUsingGET) | **GET** /enterprise/editor/form-models/{formId}/history/{formHistoryId} | Get form history
[**getFormUsingGET**](FormmodelsApi.md#getFormUsingGET) | **GET** /enterprise/editor/form-models/{formId} | Get a form model
[**getFormUsingGET1**](FormmodelsApi.md#getFormUsingGET1) | **GET** /enterprise/forms/{formId} | Get a form
[**getFormsUsingGET**](FormmodelsApi.md#getFormsUsingGET) | **GET** /enterprise/editor/form-models/values | Get forms
[**getFormsUsingGET1**](FormmodelsApi.md#getFormsUsingGET1) | **GET** /enterprise/editor/form-models | List form models
[**getFormsUsingGET2**](FormmodelsApi.md#getFormsUsingGET2) | **GET** /enterprise/forms | Query forms
[**saveFormUsingPUT**](FormmodelsApi.md#saveFormUsingPUT) | **PUT** /enterprise/editor/form-models/{formId} | Update form model content
[**validateModelUsingPUT**](FormmodelsApi.md#validateModelUsingPUT) | **PUT** /enterprise/editor/form-models/{formId}/validate | Validate form model content


<a name="getFormEditorJsonUsingGET"></a>
# **getFormEditorJsonUsingGET**
> FormDefinitionRepresentation getFormEditorJsonUsingGET(formId)

Get form content

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getFormEditorJsonUsingGET(formId).then((data) => {
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

<a name="getFormHistoryUsingGET"></a>
# **getFormHistoryUsingGET**
> FormRepresentation getFormHistoryUsingGET(formIdformHistoryId)

Get form history

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getFormHistoryUsingGET(formIdformHistoryId).then((data) => {
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

<a name="getFormUsingGET"></a>
# **getFormUsingGET**
> FormRepresentation getFormUsingGET(formId)

Get a form model

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getFormUsingGET(formId).then((data) => {
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

<a name="getFormUsingGET1"></a>
# **getFormUsingGET1**
> RuntimeFormRepresentation getFormUsingGET1(formId)

Get a form

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getFormUsingGET1(formId).then((data) => {
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

[**RuntimeFormRepresentation**](RuntimeFormRepresentation.md)

<a name="getFormsUsingGET"></a>
# **getFormsUsingGET**
> FormRepresentation getFormsUsingGET(formId)

Get forms

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.getFormsUsingGET(formId).then((data) => {
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

<a name="getFormsUsingGET1"></a>
# **getFormsUsingGET1**
> ResultListDataRepresentationFormRepresentation getFormsUsingGET1()

List form models

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);

formmodelsApi.getFormsUsingGET1().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationFormRepresentation**](ResultListDataRepresentationFormRepresentation.md)

<a name="getFormsUsingGET2"></a>
# **getFormsUsingGET2**
> ResultListDataRepresentationRuntimeFormRepresentation getFormsUsingGET2(opts)

Query forms

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

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

formmodelsApi.getFormsUsingGET2(opts).then((data) => {
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

<a name="saveFormUsingPUT"></a>
# **saveFormUsingPUT**
> FormRepresentation saveFormUsingPUT(formIdsaveRepresentation)

Update form model content

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.saveFormUsingPUT(formIdsaveRepresentation).then((data) => {
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

<a name="validateModelUsingPUT"></a>
# **validateModelUsingPUT**
> ValidationErrorRepresentation validateModelUsingPUT(formIdsaveRepresentation)

Validate form model content

The model content to be validated must be specified in the POST body

### Example
```javascript
import FormmodelsApi from 'FormmodelsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let formmodelsApi = new FormmodelsApi(this.alfrescoApi);


formmodelsApi.validateModelUsingPUT(formIdsaveRepresentation).then((data) => {
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

