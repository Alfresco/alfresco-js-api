# ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSitesUsingGET1**](IntegrationAlfrescoOnPremiseApi.md#getAllSitesUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getContentInFolderUsingGET1**](IntegrationAlfrescoOnPremiseApi.md#getContentInFolderUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSiteUsingGET1**](IntegrationAlfrescoOnPremiseApi.md#getContentInSiteUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getRepositoriesUsingGET**](IntegrationAlfrescoOnPremiseApi.md#getRepositoriesUsingGET) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories


<a name="getAllSitesUsingGET1"></a>
# **getAllSitesUsingGET1**
> ResultListDataRepresentation getAllSitesUsingGET1(repositoryId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi();

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

<a name="getContentInFolderUsingGET1"></a>
# **getContentInFolderUsingGET1**
> ResultListDataRepresentation getContentInFolderUsingGET1(repositoryId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi();

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

<a name="getContentInSiteUsingGET1"></a>
# **getContentInSiteUsingGET1**
> ResultListDataRepresentation getContentInSiteUsingGET1(repositoryId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi();

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

