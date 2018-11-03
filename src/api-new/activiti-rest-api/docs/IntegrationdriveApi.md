# .IntegrationdriveApi

All URIs are relative to *https://adfdev.envalfresco.com/activiti-app/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET2**](IntegrationdriveApi.md#confirmAuthorisationUsingGET2) | **GET** /enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
[**getFilesUsingGET1**](IntegrationdriveApi.md#getFilesUsingGET1) | **GET** /enterprise/integration/google-drive/files | List files and folders


<a name="confirmAuthorisationUsingGET2"></a>
# **confirmAuthorisationUsingGET2**
> confirmAuthorisationUsingGET2()

Drive Authorization

Returns Drive OAuth HTML Page

### Example
```javascript
import IntegrationdriveApi from 'IntegrationdriveApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationdriveApi = new IntegrationdriveApi(this.alfrescoApi);

integrationdriveApi.confirmAuthorisationUsingGET2().then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

<a name="getFilesUsingGET1"></a>
# **getFilesUsingGET1**
> ResultListDataRepresentationGoogleDriveContent getFilesUsingGET1(opts)

List files and folders

### Example
```javascript
import IntegrationdriveApi from 'IntegrationdriveApi';
import { AlfrescoApi } from 'alfresco-js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let integrationdriveApi = new IntegrationdriveApi(this.alfrescoApi);

let opts = { 
  'filter': filter_example //  | filter
  'parent': parent_example //  | parent
  'currentFolderOnly': true //  | currentFolderOnly
};

integrationdriveApi.getFilesUsingGET1(opts).then((data) => {
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
 **currentFolderOnly** | **boolean**| currentFolderOnly | [optional] 

### Return type

[**ResultListDataRepresentationGoogleDriveContent**](ResultListDataRepresentationGoogleDriveContent.md)

