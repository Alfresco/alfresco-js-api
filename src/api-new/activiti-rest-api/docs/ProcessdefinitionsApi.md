# .ProcessdefinitionsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createIdentityLinkUsingPOST**](ProcessdefinitionsApi.md#createIdentityLinkUsingPOST) | **POST** /enterprise/process-definitions/{processDefinitionId}/identitylinks | Add a user or group involvement to a process definition
[**deleteIdentityLinkUsingDELETE**](ProcessdefinitionsApi.md#deleteIdentityLinkUsingDELETE) | **DELETE** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Remove a user or group involvement from a process definition
[**getIdentityLinkTypeUsingGET**](ProcessdefinitionsApi.md#getIdentityLinkTypeUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family}/{identityId} | Get a user or group involvement with a process definition
[**getIdentityLinksForFamilyUsingGET**](ProcessdefinitionsApi.md#getIdentityLinksForFamilyUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks/{family} | List either the users or groups involved with a process definition
[**getIdentityLinksUsingGET**](ProcessdefinitionsApi.md#getIdentityLinksUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/identitylinks | List the users and groups involved with a process definition
[**getProcessDefinitionDecisionTablesUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionDecisionTablesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/decision-tables | List the decision tables associated with a process definition
[**getProcessDefinitionFormsUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionFormsUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/forms | List the forms associated with a process definition
[**getProcessDefinitionStartFormUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionStartFormUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form | Retrieve the start form for a process definition
[**getProcessDefinitionsUsingGET**](ProcessdefinitionsApi.md#getProcessDefinitionsUsingGET) | **GET** /enterprise/process-definitions | Retrieve a list of process definitions
[**getRestFieldValuesUsingGET**](ProcessdefinitionsApi.md#getRestFieldValuesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field} | Retrieve field values (eg. the typeahead field)
[**getRestTableFieldValuesUsingGET**](ProcessdefinitionsApi.md#getRestTableFieldValuesUsingGET) | **GET** /enterprise/process-definitions/{processDefinitionId}/start-form-values/{field}/{column} | Retrieve field values (eg. the table field)


<a name="createIdentityLinkUsingPOST"></a>
# **createIdentityLinkUsingPOST**
> IdentityLinkRepresentation createIdentityLinkUsingPOST(processDefinitionIdidentityLinkRepresentation)

Add a user or group involvement to a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);


processdefinitionsApi.createIdentityLinkUsingPOST(processDefinitionIdidentityLinkRepresentation).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 
 **identityLinkRepresentation** | [**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)| identityLinkRepresentation | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="deleteIdentityLinkUsingDELETE"></a>
# **deleteIdentityLinkUsingDELETE**
> deleteIdentityLinkUsingDELETE(processDefinitionIdfamilyidentityId)

Remove a user or group involvement from a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);


processdefinitionsApi.deleteIdentityLinkUsingDELETE(processDefinitionIdfamilyidentityId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| Process definition ID | 
 **family** | **string**| Identity type | 
 **identityId** | **string**| User or group ID | 

### Return type

null (empty response body)

<a name="getIdentityLinkTypeUsingGET"></a>
# **getIdentityLinkTypeUsingGET**
> IdentityLinkRepresentation getIdentityLinkTypeUsingGET(processDefinitionIdfamilyidentityId)

Get a user or group involvement with a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);


processdefinitionsApi.getIdentityLinkTypeUsingGET(processDefinitionIdfamilyidentityId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| Process definition ID | 
 **family** | **string**| Identity type | 
 **identityId** | **string**| User or group ID | 

### Return type

[**IdentityLinkRepresentation**](IdentityLinkRepresentation.md)

<a name="getIdentityLinksForFamilyUsingGET"></a>
# **getIdentityLinksForFamilyUsingGET**
> Array<IdentityLinkRepresentation> getIdentityLinksForFamilyUsingGET(processDefinitionIdfamily)

List either the users or groups involved with a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);


processdefinitionsApi.getIdentityLinksForFamilyUsingGET(processDefinitionIdfamily).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 
 **family** | **string**| Identity type | 

### Return type

[**Array&lt;IdentityLinkRepresentation&gt;**](IdentityLinkRepresentation.md)

<a name="getIdentityLinksUsingGET"></a>
# **getIdentityLinksUsingGET**
> Array<IdentityLinkRepresentation> getIdentityLinksUsingGET(processDefinitionId)

List the users and groups involved with a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);


processdefinitionsApi.getIdentityLinksUsingGET(processDefinitionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 

### Return type

[**Array&lt;IdentityLinkRepresentation&gt;**](IdentityLinkRepresentation.md)

<a name="getProcessDefinitionDecisionTablesUsingGET"></a>
# **getProcessDefinitionDecisionTablesUsingGET**
> ResultListDataRepresentationRuntimeDecisionTableRepresentation getProcessDefinitionDecisionTablesUsingGET(processDefinitionId)

List the decision tables associated with a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);


processdefinitionsApi.getProcessDefinitionDecisionTablesUsingGET(processDefinitionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 

### Return type

[**ResultListDataRepresentationRuntimeDecisionTableRepresentation**](ResultListDataRepresentationRuntimeDecisionTableRepresentation.md)

<a name="getProcessDefinitionFormsUsingGET"></a>
# **getProcessDefinitionFormsUsingGET**
> ResultListDataRepresentationRuntimeFormRepresentation getProcessDefinitionFormsUsingGET(processDefinitionId)

List the forms associated with a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);


processdefinitionsApi.getProcessDefinitionFormsUsingGET(processDefinitionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **processDefinitionId** | **string**| processDefinitionId | 

### Return type

[**ResultListDataRepresentationRuntimeFormRepresentation**](ResultListDataRepresentationRuntimeFormRepresentation.md)

<a name="getProcessDefinitionStartFormUsingGET"></a>
# **getProcessDefinitionStartFormUsingGET**
> FormDefinitionRepresentation getProcessDefinitionStartFormUsingGET()

Retrieve the start form for a process definition

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);

processdefinitionsApi.getProcessDefinitionStartFormUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**FormDefinitionRepresentation**](FormDefinitionRepresentation.md)

<a name="getProcessDefinitionsUsingGET"></a>
# **getProcessDefinitionsUsingGET**
> ResultListDataRepresentationProcessDefinitionRepresentation getProcessDefinitionsUsingGET(opts)

Retrieve a list of process definitions

Get a list of process definitions (visible within the tenant of the user)

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);

let opts = { 
  'latest': true // boolean | latest
  'appDefinitionId': 789 // number | appDefinitionId
  'deploymentId': deploymentId_example // string | deploymentId
};

processdefinitionsApi.getProcessDefinitionsUsingGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **latest** | **boolean**| latest | [optional] 
 **appDefinitionId** | **number**| appDefinitionId | [optional] 
 **deploymentId** | **string**| deploymentId | [optional] 

### Return type

[**ResultListDataRepresentationProcessDefinitionRepresentation**](ResultListDataRepresentationProcessDefinitionRepresentation.md)

<a name="getRestFieldValuesUsingGET"></a>
# **getRestFieldValuesUsingGET**
> Array<FormValueRepresentation> getRestFieldValuesUsingGET()

Retrieve field values (eg. the typeahead field)

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);

processdefinitionsApi.getRestFieldValuesUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;FormValueRepresentation&gt;**](FormValueRepresentation.md)

<a name="getRestTableFieldValuesUsingGET"></a>
# **getRestTableFieldValuesUsingGET**
> Array<FormValueRepresentation> getRestTableFieldValuesUsingGET()

Retrieve field values (eg. the table field)

### Example
```javascript
import ProcessdefinitionsApi from 'ProcessdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let processdefinitionsApi = new ProcessdefinitionsApi(this.alfrescoApi);

processdefinitionsApi.getRestTableFieldValuesUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Array&lt;FormValueRepresentation&gt;**](FormValueRepresentation.md)

