# ActivitiPublicRestApi.IntegrationAlfrescoOnPremiseApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getAllSites**](IntegrationAlfrescoOnPremiseApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getContentInFolder**](IntegrationAlfrescoOnPremiseApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSite**](IntegrationAlfrescoOnPremiseApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getRepositories**](IntegrationAlfrescoOnPremiseApi.md#getRepositories) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories


<a name="getAllSites"></a>
# **getAllSites**
> ResultListDataRepresentation getAllSites(repositoryId)

List Alfresco sites

Returns ALL Sites

### Example
```javascript

var repositoryId = "repositoryId_example"; // String | repositoryId

this.alfrescoJsApi.activiti.integrationAlfrescoOnPremiseApi.getAllSites(repositoryId);
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
> ResultListDataRepresentation getContentInFolder(repositoryId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript

var repositoryId = "repositoryId_example"; // String | repositoryId

var folderId = "folderId_example"; // String | folderId

this.alfrescoJsApi.activiti.integrationAlfrescoOnPremiseApi.getContentInFolder(repositoryId, folderId);
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
> ResultListDataRepresentation getContentInSite(repositoryId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript

var repositoryId = "repositoryId_example"; // String | repositoryId

var siteId = "siteId_example"; // String | siteId

this.alfrescoJsApi.activiti.integrationAlfrescoOnPremiseApi.getContentInSite(repositoryId, siteId);
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

var opts = { 
  'tenantId': 789, // Integer | tenantId
  'includeAccounts': true // Boolean | includeAccounts
};

this.alfrescoJsApi.activiti.integrationAlfrescoOnPremiseApi.getRepositories(opts);
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

