# ActivitiPublicRestApi.IntegrationApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisation**](IntegrationApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
[**confirmAuthorisation**](IntegrationApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
[**confirmAuthorisation**](IntegrationApi.md#confirmAuthorisation) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
[**createRepositoryAccount**](IntegrationApi.md#createRepositoryAccount) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
[**deleteRepositoryAccount**](IntegrationApi.md#deleteRepositoryAccount) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
[**getAllNetworks**](IntegrationApi.md#getAllNetworks) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
[**getAllSites**](IntegrationApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
[**getAllSites**](IntegrationApi.md#getAllSites) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getBoxPluginStatus**](IntegrationApi.md#getBoxPluginStatus) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
[**getContentInFolder**](IntegrationApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInFolder**](IntegrationApi.md#getContentInFolder) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSite**](IntegrationApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getContentInSite**](IntegrationApi.md#getContentInSite) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getFiles**](IntegrationApi.md#getFiles) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
[**getFiles**](IntegrationApi.md#getFiles) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders
[**getRepositories**](IntegrationApi.md#getRepositories) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
[**getRepositoryAccount**](IntegrationApi.md#getRepositoryAccount) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
[**updateRepositoryAccount**](IntegrationApi.md#updateRepositoryAccount) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account


<a name="confirmAuthorisation"></a>
# **confirmAuthorisation**
> confirmAuthorisation(code)

Alfresco Cloud Authorization

Returns Alfresco Oauth HTML Page

### Example
```javascript

var code = "code_example"; // String | code

this.alfrescoJsApi.activiti.integrationApi.confirmAuthorisation(code);
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

<a name="confirmAuthorisation"></a>
# **confirmAuthorisation**
> confirmAuthorisation(code)

Box Authorization

Returns Box Oauth HTML Page

### Example
```javascript

var code = "code_example"; // String | code

this.alfrescoJsApi.activiti.integrationApi.confirmAuthorisation(code);
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

<a name="confirmAuthorisation"></a>
# **confirmAuthorisation**
> confirmAuthorisation(code)

Drive Authorization

Returns Drive Oauth HTML Page

### Example
```javascript

var code = "code_example"; // String | code

this.alfrescoJsApi.activiti.integrationApi.confirmAuthorisation(code);
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

<a name="createRepositoryAccount"></a>
# **createRepositoryAccount**
> createRepositoryAccount(userId, credentials)

Create Box account

### Example
```javascript

var userId = 789; // Integer | userId

var credentials = new this.alfrescoJsApi.activiti.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials

this.alfrescoJsApi.activiti.integrationApi.createRepositoryAccount(userId, credentials);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteRepositoryAccount"></a>
# **deleteRepositoryAccount**
> deleteRepositoryAccount(userId)

Delete Box account

### Example
```javascript

var userId = 789; // Integer | userId

this.alfrescoJsApi.activiti.integrationApi.deleteRepositoryAccount(userId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getAllNetworks"></a>
# **getAllNetworks**
> ResultListDataRepresentation getAllNetworks()

List Alfresco networks

### Example
```javascript

this.alfrescoJsApi.activiti.integrationApi.getAllNetworks();
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

this.alfrescoJsApi.activiti.integrationApi.getAllSites(networkId);
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

var repositoryId = "repositoryId_example"; // String | repositoryId

this.alfrescoJsApi.activiti.integrationApi.getAllSites(repositoryId);
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

<a name="getBoxPluginStatus"></a>
# **getBoxPluginStatus**
> &#39;Boolean&#39; getBoxPluginStatus()

Retrieve if Box Integration is enabled

### Example
```javascript

this.alfrescoJsApi.activiti.integrationApi.getBoxPluginStatus();
```

### Parameters
This endpoint does not need any parameter.

### Return type

**&#39;Boolean&#39;**

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

this.alfrescoJsApi.activiti.integrationApi.getContentInFolder(networkId, folderId);
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

var repositoryId = "repositoryId_example"; // String | repositoryId

var folderId = "folderId_example"; // String | folderId

this.alfrescoJsApi.activiti.integrationApi.getContentInFolder(repositoryId, folderId);
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

var networkId = "networkId_example"; // String | networkId

var siteId = "siteId_example"; // String | siteId

this.alfrescoJsApi.activiti.integrationApi.getContentInSite(networkId, siteId);
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

var repositoryId = "repositoryId_example"; // String | repositoryId

var siteId = "siteId_example"; // String | siteId

this.alfrescoJsApi.activiti.integrationApi.getContentInSite(repositoryId, siteId);
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

<a name="getFiles"></a>
# **getFiles**
> ResultListDataRepresentation getFiles(opts)

List file &amp; folders

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example" // String | parent
};

this.alfrescoJsApi.activiti.integrationApi.getFiles(opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| filter | [optional] 
 **parent** | **String**| parent | [optional] 

### Return type

[**ResultListDataRepresentation**](ResultListDataRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFiles"></a>
# **getFiles**
> ResultListDataRepresentation getFiles(opts)

List file &amp; folders

### Example
```javascript

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example", // String | parent
  'currentFolderOnly': true // Boolean | currentFolderOnly
};

this.alfrescoJsApi.activiti.integrationApi.getFiles(opts);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter** | **String**| filter | [optional] 
 **parent** | **String**| parent | [optional] 
 **currentFolderOnly** | **Boolean**| currentFolderOnly | [optional] 

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

this.alfrescoJsApi.activiti.integrationApi.getRepositories(opts);
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

<a name="getRepositoryAccount"></a>
# **getRepositoryAccount**
> BoxUserAccountCredentialsRepresentation getRepositoryAccount(userId)

List Box Account

### Example
```javascript

var userId = 789; // Integer | userId

this.alfrescoJsApi.activiti.integrationApi.getRepositoryAccount(userId);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 

### Return type

[**BoxUserAccountCredentialsRepresentation**](BoxUserAccountCredentialsRepresentation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRepositoryAccount"></a>
# **updateRepositoryAccount**
> updateRepositoryAccount(userId, credentials)

Update Box account

### Example
```javascript

var userId = 789; // Integer | userId

var credentials = new this.alfrescoJsApi.activiti.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials

this.alfrescoJsApi.activiti.integrationApi.updateRepositoryAccount(userId, credentials);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Integer**| userId | 
 **credentials** | [**UserAccountCredentialsRepresentation**](UserAccountCredentialsRepresentation.md)| credentials | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

