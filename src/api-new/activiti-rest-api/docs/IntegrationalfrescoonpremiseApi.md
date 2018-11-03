# .IntegrationalfrescoonpremiseApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSitesUsingGET1**](IntegrationalfrescoonpremiseApi.md#getAllSitesUsingGET1) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getContentInFolderPathUsingGET1**](IntegrationalfrescoonpremiseApi.md#getContentInFolderPathUsingGET1) | **GET** /enterprise/rest/integration/alfresco/{repositoryId}/sites/{siteId}/folderpath/{folderPath}/content | List files and folders inside a specific folder identified by folder path
[**getContentInFolderUsingGET1**](IntegrationalfrescoonpremiseApi.md#getContentInFolderUsingGET1) | **GET** /enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List files and folders inside a specific folder
[**getContentInSiteUsingGET1**](IntegrationalfrescoonpremiseApi.md#getContentInSiteUsingGET1) | **GET** /enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List files and folders inside a specific site
[**getRepositoriesUsingGET**](IntegrationalfrescoonpremiseApi.md#getRepositoriesUsingGET) | **GET** /enterprise/profile/accounts/alfresco | List Alfresco repositories


<a name="getAllSitesUsingGET1"></a>
# **getAllSitesUsingGET1**
> ResultListDataRepresentationAlfrescoSiteRepresenation getAllSitesUsingGET1(repositoryId)

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


integrationalfrescoonpremiseApi.getAllSitesUsingGET1(repositoryId).then((data) => {
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

<a name="getContentInFolderPathUsingGET1"></a>
# **getContentInFolderPathUsingGET1**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolderPathUsingGET1(repositoryIdsiteIdfolderPath)

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


integrationalfrescoonpremiseApi.getContentInFolderPathUsingGET1(repositoryIdsiteIdfolderPath).then((data) => {
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

<a name="getContentInFolderUsingGET1"></a>
# **getContentInFolderUsingGET1**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolderUsingGET1(repositoryIdfolderId)

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


integrationalfrescoonpremiseApi.getContentInFolderUsingGET1(repositoryIdfolderId).then((data) => {
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

<a name="getContentInSiteUsingGET1"></a>
# **getContentInSiteUsingGET1**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInSiteUsingGET1(repositoryIdsiteId)

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


integrationalfrescoonpremiseApi.getContentInSiteUsingGET1(repositoryIdsiteId).then((data) => {
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

<a name="getRepositoriesUsingGET"></a>
# **getRepositoriesUsingGET**
> ResultListDataRepresentationAlfrescoEndpointRepresentation getRepositoriesUsingGET(opts)

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

integrationalfrescoonpremiseApi.getRepositoriesUsingGET(opts).then((data) => {
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

