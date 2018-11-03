# .IntegrationalfrescocloudApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET**](IntegrationalfrescocloudApi.md#confirmAuthorisationUsingGET) | **GET** /enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
[**getAllNetworksUsingGET**](IntegrationalfrescocloudApi.md#getAllNetworksUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks | List Alfresco networks
[**getAllSitesUsingGET**](IntegrationalfrescocloudApi.md#getAllSitesUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
[**getContentInFolderPathUsingGET**](IntegrationalfrescocloudApi.md#getContentInFolderPathUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/folderpath/{folderPath}/content | List files and folders inside a specific folder identified by path
[**getContentInFolderUsingGET**](IntegrationalfrescocloudApi.md#getContentInFolderUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List files and folders inside a specific folder
[**getContentInSiteUsingGET**](IntegrationalfrescocloudApi.md#getContentInSiteUsingGET) | **GET** /enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List files and folders inside a specific site


<a name="confirmAuthorisationUsingGET"></a>
# **confirmAuthorisationUsingGET**
> confirmAuthorisationUsingGET(code)

Alfresco Cloud Authorization

Returns Alfresco OAuth HTML Page

### Example
```javascript
import IntegrationalfrescocloudApi from 'IntegrationalfrescocloudApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescocloudApi = new IntegrationalfrescocloudApi(this.alfrescoApi);


integrationalfrescocloudApi.confirmAuthorisationUsingGET(code).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **string**| code | 

### Return type

null (empty response body)

<a name="getAllNetworksUsingGET"></a>
# **getAllNetworksUsingGET**
> ResultListDataRepresentationAlfrescoNetworkRepresenation getAllNetworksUsingGET()

List Alfresco networks

### Example
```javascript
import IntegrationalfrescocloudApi from 'IntegrationalfrescocloudApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescocloudApi = new IntegrationalfrescocloudApi(this.alfrescoApi);

integrationalfrescocloudApi.getAllNetworksUsingGET().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationAlfrescoNetworkRepresenation**](ResultListDataRepresentationAlfrescoNetworkRepresenation.md)

<a name="getAllSitesUsingGET"></a>
# **getAllSitesUsingGET**
> ResultListDataRepresentationAlfrescoSiteRepresenation getAllSitesUsingGET(networkId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
import IntegrationalfrescocloudApi from 'IntegrationalfrescocloudApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescocloudApi = new IntegrationalfrescocloudApi(this.alfrescoApi);


integrationalfrescocloudApi.getAllSitesUsingGET(networkId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 

### Return type

[**ResultListDataRepresentationAlfrescoSiteRepresenation**](ResultListDataRepresentationAlfrescoSiteRepresenation.md)

<a name="getContentInFolderPathUsingGET"></a>
# **getContentInFolderPathUsingGET**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolderPathUsingGET(networkIdopts)

List files and folders inside a specific folder identified by path

### Example
```javascript
import IntegrationalfrescocloudApi from 'IntegrationalfrescocloudApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescocloudApi = new IntegrationalfrescocloudApi(this.alfrescoApi);

let opts = { 
  'siteId': siteId_example //  | siteId
  'path': path_example //  | path
};

integrationalfrescocloudApi.getContentInFolderPathUsingGET(networkIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 
 **siteId** | **string**| siteId | [optional] 
 **path** | **string**| path | [optional] 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

<a name="getContentInFolderUsingGET"></a>
# **getContentInFolderUsingGET**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolderUsingGET(networkIdfolderId)

List files and folders inside a specific folder

### Example
```javascript
import IntegrationalfrescocloudApi from 'IntegrationalfrescocloudApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescocloudApi = new IntegrationalfrescocloudApi(this.alfrescoApi);


integrationalfrescocloudApi.getContentInFolderUsingGET(networkIdfolderId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 
 **folderId** | **string**| folderId | 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

<a name="getContentInSiteUsingGET"></a>
# **getContentInSiteUsingGET**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInSiteUsingGET(networkIdsiteId)

List files and folders inside a specific site

### Example
```javascript
import IntegrationalfrescocloudApi from 'IntegrationalfrescocloudApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationalfrescocloudApi = new IntegrationalfrescocloudApi(this.alfrescoApi);


integrationalfrescocloudApi.getContentInSiteUsingGET(networkIdsiteId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 
 **siteId** | **string**| siteId | 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

