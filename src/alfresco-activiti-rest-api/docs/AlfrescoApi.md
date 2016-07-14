# ActivitiPublicRestApi.AlfrescoApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET**](AlfrescoApi.md#confirmAuthorisationUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
[**getAllNetworksUsingGET**](AlfrescoApi.md#getAllNetworksUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
[**getAllSitesUsingGET**](AlfrescoApi.md#getAllSitesUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
[**getAllSitesUsingGET1**](AlfrescoApi.md#getAllSitesUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getContentInFolderUsingGET**](AlfrescoApi.md#getContentInFolderUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInFolderUsingGET1**](AlfrescoApi.md#getContentInFolderUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSiteUsingGET**](AlfrescoApi.md#getContentInSiteUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getContentInSiteUsingGET1**](AlfrescoApi.md#getContentInSiteUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getRepositoriesUsingGET**](AlfrescoApi.md#getRepositoriesUsingGET) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories


<a name="confirmAuthorisationUsingGET"></a>
# **confirmAuthorisationUsingGET**
> confirmAuthorisationUsingGET(code)

Alfresco Cloud Authorization

Returns Alfresco Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var code = "code_example"; // String | code


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
 **code** | **String**| code | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: text/html, application/json

<a name="getAllNetworksUsingGET"></a>
# **getAllNetworksUsingGET**
> ResultListDataRepresentation getAllNetworksUsingGET()

List Alfresco networks

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

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

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllSitesUsingGET"></a>
# **getAllSitesUsingGET**
> ResultListDataRepresentation getAllSitesUsingGET(networkId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var networkId = "networkId_example"; // String | networkId


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
 **networkId** | **String**| networkId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllSitesUsingGET1"></a>
# **getAllSitesUsingGET1**
> ResultListDataRepresentation getAllSitesUsingGET1(repositoryId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var repositoryId = "repositoryId_example"; // String | repositoryId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getAllSitesUsingGET1(repositoryId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **String**| repositoryId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentInFolderUsingGET"></a>
# **getContentInFolderUsingGET**
> ResultListDataRepresentation getContentInFolderUsingGET(networkId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var networkId = "networkId_example"; // String | networkId

var folderId = "folderId_example"; // String | folderId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentInFolderUsingGET(networkId, folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**| networkId | 
 **folderId** | **String**| folderId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentInFolderUsingGET1"></a>
# **getContentInFolderUsingGET1**
> ResultListDataRepresentation getContentInFolderUsingGET1(repositoryId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var repositoryId = "repositoryId_example"; // String | repositoryId

var folderId = "folderId_example"; // String | folderId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentInFolderUsingGET1(repositoryId, folderId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **String**| repositoryId | 
 **folderId** | **String**| folderId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentInSiteUsingGET"></a>
# **getContentInSiteUsingGET**
> ResultListDataRepresentation getContentInSiteUsingGET(networkId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var networkId = "networkId_example"; // String | networkId

var siteId = "siteId_example"; // String | siteId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentInSiteUsingGET(networkId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkId** | **String**| networkId | 
 **siteId** | **String**| siteId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getContentInSiteUsingGET1"></a>
# **getContentInSiteUsingGET1**
> ResultListDataRepresentation getContentInSiteUsingGET1(repositoryId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var repositoryId = "repositoryId_example"; // String | repositoryId

var siteId = "siteId_example"; // String | siteId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getContentInSiteUsingGET1(repositoryId, siteId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repositoryId** | **String**| repositoryId | 
 **siteId** | **String**| siteId | 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRepositoriesUsingGET"></a>
# **getRepositoriesUsingGET**
> ResultListDataRepresentation getRepositoriesUsingGET(opts)

List Alfresco repositories

A tenant administrator can configure one or more Alfresco repositories to use when working with content.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var opts = { 
  'tenantId': 789, // Integer | tenantId
  'includeAccounts': true // Boolean | includeAccounts
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRepositoriesUsingGET(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **tenantId** | **Integer**| tenantId | [optional] 
 **includeAccounts** | **Boolean**| includeAccounts | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

