# .IntegrationboxApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET1**](IntegrationboxApi.md#confirmAuthorisationUsingGET1) | **GET** /enterprise/integration/box/confirm-auth-request | Box Authorization
[**createRepositoryAccountUsingPOST**](IntegrationboxApi.md#createRepositoryAccountUsingPOST) | **POST** /enterprise/integration/box/{userId}/account | Add Box account
[**deleteRepositoryAccountUsingDELETE**](IntegrationboxApi.md#deleteRepositoryAccountUsingDELETE) | **DELETE** /enterprise/integration/box/{userId}/account | Delete account information
[**getBoxPluginStatusUsingGET**](IntegrationboxApi.md#getBoxPluginStatusUsingGET) | **GET** /enterprise/integration/box/status | Get status information
[**getFilesUsingGET**](IntegrationboxApi.md#getFilesUsingGET) | **GET** /enterprise/integration/box/files | List file and folders
[**getRepositoryAccountUsingGET**](IntegrationboxApi.md#getRepositoryAccountUsingGET) | **GET** /enterprise/integration/box/{userId}/account | Get account information
[**updateRepositoryAccountUsingPUT**](IntegrationboxApi.md#updateRepositoryAccountUsingPUT) | **PUT** /enterprise/integration/box/{userId}/account | Update account information


<a name="confirmAuthorisationUsingGET1"></a>
# **confirmAuthorisationUsingGET1**
> confirmAuthorisationUsingGET1()

Box Authorization

Returns Box OAuth HTML Page

### Example
```javascript
import IntegrationboxApi from 'IntegrationboxApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationboxApi = new IntegrationboxApi(this.alfrescoApi);

integrationboxApi.confirmAuthorisationUsingGET1().then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

<a name="createRepositoryAccountUsingPOST"></a>
# **createRepositoryAccountUsingPOST**
> createRepositoryAccountUsingPOST(userIdcredentials)

Add Box account

### Example
```javascript
import IntegrationboxApi from 'IntegrationboxApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationboxApi = new IntegrationboxApi(this.alfrescoApi);


integrationboxApi.createRepositoryAccountUsingPOST(userIdcredentials).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

<a name="deleteRepositoryAccountUsingDELETE"></a>
# **deleteRepositoryAccountUsingDELETE**
> deleteRepositoryAccountUsingDELETE(userId)

Delete account information

### Example
```javascript
import IntegrationboxApi from 'IntegrationboxApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationboxApi = new IntegrationboxApi(this.alfrescoApi);


integrationboxApi.deleteRepositoryAccountUsingDELETE(userId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 

### Return type

null (empty response body)

<a name="getBoxPluginStatusUsingGET"></a>
# **getBoxPluginStatusUsingGET**
> boolean getBoxPluginStatusUsingGET()

Get status information

### Example
```javascript
import IntegrationboxApi from 'IntegrationboxApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationboxApi = new IntegrationboxApi(this.alfrescoApi);

integrationboxApi.getBoxPluginStatusUsingGET().then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

**boolean**

<a name="getFilesUsingGET"></a>
# **getFilesUsingGET**
> ResultListDataRepresentationBoxContent getFilesUsingGET(opts)

List file and folders

### Example
```javascript
import IntegrationboxApi from 'IntegrationboxApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationboxApi = new IntegrationboxApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example // string | filter
  'parent': parent_example // string | parent
};

integrationboxApi.getFilesUsingGET(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **string**| filter | [optional] 
 **parent** | **string**| parent | [optional] 

### Return type

[**ResultListDataRepresentationBoxContent**](ResultListDataRepresentationBoxContent.md)

<a name="getRepositoryAccountUsingGET"></a>
# **getRepositoryAccountUsingGET**
> getRepositoryAccountUsingGET(userId)

Get account information

### Example
```javascript
import IntegrationboxApi from 'IntegrationboxApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationboxApi = new IntegrationboxApi(this.alfrescoApi);


integrationboxApi.getRepositoryAccountUsingGET(userId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 

### Return type

null (empty response body)

<a name="updateRepositoryAccountUsingPUT"></a>
# **updateRepositoryAccountUsingPUT**
> updateRepositoryAccountUsingPUT(userIdcredentials)

Update account information

### Example
```javascript
import IntegrationboxApi from 'IntegrationboxApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationboxApi = new IntegrationboxApi(this.alfrescoApi);


integrationboxApi.updateRepositoryAccountUsingPUT(userIdcredentials).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **number**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

