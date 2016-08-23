# ActivitiPublicRestApi.IntegrationAlfrescoCloudApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisation**](IntegrationAlfrescoCloudApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
[**getAllNetworks**](IntegrationAlfrescoCloudApi.md#getAllNetworks) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
[**getAllSites**](IntegrationAlfrescoCloudApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
[**getContentInFolder**](IntegrationAlfrescoCloudApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSite**](IntegrationAlfrescoCloudApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site


<a name="confirmAuthorisation"></a>
# **confirmAuthorisation**
> confirmAuthorisation(code)

Alfresco Cloud Authorization

Returns Alfresco Oauth HTML Page

### Example
```javascript

var code = "code_example"; // String | code

this.alfrescoJsApi.activiti.integrationAlfrescoCloudApi.confirmAuthorisation(code);
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

this.alfrescoJsApi.activiti.integrationAlfrescoCloudApi.getAllNetworks();
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

var networkId = "networkId_example"; // String | networkId

this.alfrescoJsApi.activiti.integrationAlfrescoCloudApi.getAllSites(networkId);
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

<a name="getContentInFolder"></a>
# **getContentInFolder**
> ResultListDataRepresentation getContentInFolder(networkId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript

var networkId = "networkId_example"; // String | networkId

var folderId = "folderId_example"; // String | folderId

this.alfrescoJsApi.activiti.integrationAlfrescoCloudApi.getContentInFolder(networkId, folderId);
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

<a name="getContentInSite"></a>
# **getContentInSite**
> ResultListDataRepresentation getContentInSite(networkId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript

var networkId = "networkId_example"; // String | networkId

var siteId = "siteId_example"; // String | siteId

this.alfrescoJsApi.activiti.integrationAlfrescoCloudApi.getContentInSite(networkId, siteId);
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

