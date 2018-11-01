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
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationalfrescocloudApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmAuthorisationUsingGET(code, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **code** | **string**| code | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html

<a name="getAllNetworksUsingGET"></a>
# **getAllNetworksUsingGET**
> ResultListDataRepresentationAlfrescoNetworkRepresenation getAllNetworksUsingGET()

List Alfresco networks

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationalfrescocloudApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllNetworksUsingGET(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**ResultListDataRepresentationAlfrescoNetworkRepresenation**](ResultListDataRepresentationAlfrescoNetworkRepresenation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllSitesUsingGET"></a>
# **getAllSitesUsingGET**
> ResultListDataRepresentationAlfrescoSiteRepresenation getAllSitesUsingGET(networkId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationalfrescocloudApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSitesUsingGET(networkId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 

### Return type

[**ResultListDataRepresentationAlfrescoSiteRepresenation**](ResultListDataRepresentationAlfrescoSiteRepresenation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentInFolderPathUsingGET"></a>
# **getContentInFolderPathUsingGET**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolderPathUsingGET(networkIdopts)

List files and folders inside a specific folder identified by path

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationalfrescocloudApi();

var opts = { 
  'siteId': siteId_example // string | siteId
  'path': path_example // string | path
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentInFolderPathUsingGET(networkIdopts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 
 **siteId** | **string**| siteId | [optional] 
 **path** | **string**| path | [optional] 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentInFolderUsingGET"></a>
# **getContentInFolderUsingGET**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInFolderUsingGET(networkIdfolderId)

List files and folders inside a specific folder

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationalfrescocloudApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentInFolderUsingGET(networkIdfolderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 
 **folderId** | **string**| folderId | 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentInSiteUsingGET"></a>
# **getContentInSiteUsingGET**
> ResultListDataRepresentationAlfrescoContentRepresentation getContentInSiteUsingGET(networkIdsiteId)

List files and folders inside a specific site

### Example
```javascript
var  = require('');
var defaultClient = .ApiClient.instance;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new .IntegrationalfrescocloudApi();


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentInSiteUsingGET(networkIdsiteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **string**| networkId | 
 **siteId** | **string**| siteId | 

### Return type

[**ResultListDataRepresentationAlfrescoContentRepresentation**](ResultListDataRepresentationAlfrescoContentRepresentation.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

