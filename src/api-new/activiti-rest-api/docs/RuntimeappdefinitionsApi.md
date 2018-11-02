# .RuntimeappdefinitionsApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deployAppDefinitionsUsingPOST**](RuntimeappdefinitionsApi.md#deployAppDefinitionsUsingPOST) | **POST** /enterprise/runtime-app-definitions | Deploy a published app
[**getAppDefinitionUsingGET1**](RuntimeappdefinitionsApi.md#getAppDefinitionUsingGET1) | **GET** /enterprise/runtime-app-definitions/{appDefinitionId} | Get a runtime app
[**getAppDefinitionsUsingGET**](RuntimeappdefinitionsApi.md#getAppDefinitionsUsingGET) | **GET** /enterprise/runtime-app-definitions | List runtime apps


<a name="deployAppDefinitionsUsingPOST"></a>
# **deployAppDefinitionsUsingPOST**
> deployAppDefinitionsUsingPOST(saveObject)

Deploy a published app

Deploying an app allows the user to see it on his/her landing page. Apps must be published before they can be deployed.

### Example
```javascript
import RuntimeappdefinitionsApi from 'RuntimeappdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdefinitionsApi = new RuntimeappdefinitionsApi(this.alfrescoApi);


runtimeappdefinitionsApi.deployAppDefinitionsUsingPOST(saveObject).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **saveObject** | [**RuntimeAppDefinitionSaveRepresentation**](RuntimeAppDefinitionSaveRepresentation.md)| saveObject | 

### Return type

null (empty response body)

<a name="getAppDefinitionUsingGET1"></a>
# **getAppDefinitionUsingGET1**
> AppDefinitionRepresentation getAppDefinitionUsingGET1(appDefinitionId)

Get a runtime app

### Example
```javascript
import RuntimeappdefinitionsApi from 'RuntimeappdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdefinitionsApi = new RuntimeappdefinitionsApi(this.alfrescoApi);


runtimeappdefinitionsApi.getAppDefinitionUsingGET1(appDefinitionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **appDefinitionId** | **number**| appDefinitionId | 

### Return type

[**AppDefinitionRepresentation**](AppDefinitionRepresentation.md)

<a name="getAppDefinitionsUsingGET"></a>
# **getAppDefinitionsUsingGET**
> ResultListDataRepresentationAppDefinitionRepresentation getAppDefinitionsUsingGET()

List runtime apps

When a user logs in into Alfresco Process Services Suite, a landing page is displayed containing all the apps that the user is allowed to see and use. These are referred to as runtime apps.

### Example
```javascript
import RuntimeappdefinitionsApi from 'RuntimeappdefinitionsApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let runtimeappdefinitionsApi = new RuntimeappdefinitionsApi(this.alfrescoApi);

runtimeappdefinitionsApi.getAppDefinitionsUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationAppDefinitionRepresentation**](ResultListDataRepresentationAppDefinitionRepresentation.md)

