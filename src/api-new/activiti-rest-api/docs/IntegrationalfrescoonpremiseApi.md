# .IntegrationalfrescoonpremiseApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSites**](IntegrationalfrescoonpremiseApi.md#getAllSites) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getContentInFolderPath**](IntegrationalfrescoonpremiseApi.md#getContentInFolderPath) | **GET** /enterprise/rest/integration/alfresco/{repositoryId}/sites/{siteId}/folderpath/{folderPath}/content | List files and folders inside a specific folder identified by folder path
[**getContentInFolder**](IntegrationalfrescoonpremiseApi.md#getContentInFolder) | **GET** /enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List files and folders inside a specific folder
[**getContentInSite**](IntegrationalfrescoonpremiseApi.md#getContentInSite) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List files and folders inside a specific site
[**getRepositories**](IntegrationalfrescoonpremiseApi.md#getRepositories) | **GET** /enterprise/profile/accounts/alfresco | List Alfresco repositories


<a name="getAllSites"></a>
# **getAllSites**
> ResultListDataRepresentationAlfrescoSiteRepresenation getAllSites(repositoryId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
import IntegrationalfrescoonpremiseApi from 'IntegrationalfrescoonpremiseApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescoonpremiseApi = new IntegrationalfrescoonpremiseApi(this.alfrescoApi);


integrationalfrescoonpremiseApi.getAllSites(repositoryId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **string**| repositoryId | 

### Return type

[**ResultListDataRepresentationAlfrescoSiteRepresenation**](ResultListDataRepresentationAlfrescoSiteRepresenation.md)

<a name="getContentInFolderPath"></a>
# **getContentInFolderPath**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolderPath(repositoryIdsiteIdfolderPath)

List files and folders inside a specific folder identified by folder path

### Example
```javascript
import IntegrationalfrescoonpremiseApi from 'IntegrationalfrescoonpremiseApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescoonpremiseApi = new IntegrationalfrescoonpremiseApi(this.alfrescoApi);


integrationalfrescoonpremiseApi.getContentInFolderPath(repositoryIdsiteIdfolderPath).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **string**| repositoryId | 
 **siteId** | **string**| siteId | 
 **folderPath** | **string**| folderPath | 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

<a name="getContentInFolder"></a>
# **getContentInFolder**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolder(repositoryIdfolderId)

List files and folders inside a specific folder

### Example
```javascript
import IntegrationalfrescoonpremiseApi from 'IntegrationalfrescoonpremiseApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescoonpremiseApi = new IntegrationalfrescoonpremiseApi(this.alfrescoApi);


integrationalfrescoonpremiseApi.getContentInFolder(repositoryIdfolderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **string**| repositoryId | 
 **folderId** | **string**| folderId | 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

<a name="getContentInSite"></a>
# **getContentInSite**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInSite(repositoryIdsiteId)

List files and folders inside a specific site

### Example
```javascript
import IntegrationalfrescoonpremiseApi from 'IntegrationalfrescoonpremiseApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescoonpremiseApi = new IntegrationalfrescoonpremiseApi(this.alfrescoApi);


integrationalfrescoonpremiseApi.getContentInSite(repositoryIdsiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **string**| repositoryId | 
 **siteId** | **string**| siteId | 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

<a name="getRepositories"></a>
# **getRepositories**
> ResultListDataRepresentationAlfrescoEndpointRepresentation getRepositories(opts)

List Alfresco repositories

A tenant administrator can configure one or more Alfresco repositories to use when working with content.

### Example
```javascript
import IntegrationalfrescoonpremiseApi from 'IntegrationalfrescoonpremiseApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescoonpremiseApi = new IntegrationalfrescoonpremiseApi(this.alfrescoApi);

let opts = { 
  'tenantId': 789 //  | tenantId
  'includeAccounts': true //  | includeAccounts
};

integrationalfrescoonpremiseApi.getRepositories(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **number**| tenantId | [optional] 
 **includeAccounts** | **boolean**| includeAccounts | [optional] [default to true]

### Return type

[**ResultListDataRepresentationAlfrescoEndpointRepresentation**](ResultListDataRepresentationAlfrescoEndpointRepresentation.md)

