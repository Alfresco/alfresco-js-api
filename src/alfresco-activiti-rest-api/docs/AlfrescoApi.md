# ActivitiPublicRestApi.AlfrescoApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisation**](AlfrescoApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
[**getAllNetworks**](AlfrescoApi.md#getAllNetworks) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
[**getAllSites**](AlfrescoApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
[**getAllSites**](AlfrescoApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getContentInFolder**](AlfrescoApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInFolder**](AlfrescoApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSite**](AlfrescoApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getContentInSite**](AlfrescoApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getRepositories**](AlfrescoApi.md#getRepositories) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories


<a name="confirmAuthorisation"></a>
# **confirmAuthorisation**
> confirmAuthorisation(code)

Alfresco Cloud Authorization

Returns Alfresco Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var code = "code_example"; // String | code

apiInstance.confirmAuthorisation(code);
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

<a name="getAllNetworks"></a>
# **getAllNetworks**
> ResultListDataRepresentation getAllNetworks()

List Alfresco networks

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

apiInstance.getAllNetworks();
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

<a name="getAllSites"></a>
# **getAllSites**
> ResultListDataRepresentation getAllSites(networkId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var networkId = "networkId_example"; // String | networkId

apiInstance.getAllSites(networkId);
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

<a name="getAllSites"></a>
# **getAllSites**
> ResultListDataRepresentation getAllSites(repositoryId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var repositoryId = "repositoryId_example"; // String | repositoryId

apiInstance.getAllSites(repositoryId);
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

<a name="getContentInFolder"></a>
# **getContentInFolder**
> ResultListDataRepresentation getContentInFolder(networkId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var networkId = "networkId_example"; // String | networkId

var folderId = "folderId_example"; // String | folderId

apiInstance.getContentInFolder(networkId, folderId);
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

<a name="getContentInFolder"></a>
# **getContentInFolder**
> ResultListDataRepresentation getContentInFolder(repositoryId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var repositoryId = "repositoryId_example"; // String | repositoryId

var folderId = "folderId_example"; // String | folderId

apiInstance.getContentInFolder(repositoryId, folderId);
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

<a name="getContentInSite"></a>
# **getContentInSite**
> ResultListDataRepresentation getContentInSite(networkId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var networkId = "networkId_example"; // String | networkId

var siteId = "siteId_example"; // String | siteId

apiInstance.getContentInSite(networkId, siteId);
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

<a name="getContentInSite"></a>
# **getContentInSite**
> ResultListDataRepresentation getContentInSite(repositoryId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.AlfrescoApi();

var repositoryId = "repositoryId_example"; // String | repositoryId

var siteId = "siteId_example"; // String | siteId

apiInstance.getContentInSite(repositoryId, siteId);
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

<a name="getRepositories"></a>
# **getRepositories**
> ResultListDataRepresentation getRepositories(opts)

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

apiInstance.getRepositories(opts);
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

