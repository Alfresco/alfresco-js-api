# ActivitiPublicRestApi.IntegrationApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET**](IntegrationApi.md#confirmAuthorisationUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
[**confirmAuthorisationUsingGET1**](IntegrationApi.md#confirmAuthorisationUsingGET1) | **GET** /api/enterprise/integration/box/confirm-auth-request | Box Authorization
[**confirmAuthorisationUsingGET2**](IntegrationApi.md#confirmAuthorisationUsingGET2) | **GET** /api/enterprise/integration/google-drive/confirm-auth-request | Drive Authorization
[**createRepositoryAccountUsingPOST**](IntegrationApi.md#createRepositoryAccountUsingPOST) | **POST** /api/enterprise/integration/box/{userId}/account | Create Box account
[**deleteRepositoryAccountUsingDELETE**](IntegrationApi.md#deleteRepositoryAccountUsingDELETE) | **DELETE** /api/enterprise/integration/box/{userId}/account | Delete Box account
[**getAllNetworksUsingGET**](IntegrationApi.md#getAllNetworksUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
[**getAllSitesUsingGET**](IntegrationApi.md#getAllSitesUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
[**getAllSitesUsingGET1**](IntegrationApi.md#getAllSitesUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites | List Alfresco sites
[**getBoxPluginStatusUsingGET**](IntegrationApi.md#getBoxPluginStatusUsingGET) | **GET** /api/enterprise/integration/box/status | Retrieve if Box Integration is enabled
[**getContentInFolderUsingGET**](IntegrationApi.md#getContentInFolderUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInFolderUsingGET1**](IntegrationApi.md#getContentInFolderUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSiteUsingGET**](IntegrationApi.md#getContentInSiteUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getContentInSiteUsingGET1**](IntegrationApi.md#getContentInSiteUsingGET1) | **GET** /api/enterprise/integration/alfresco/{repositoryId}/sites/{siteId}/content | List file &amp; folders inside a specific site
[**getFilesUsingGET**](IntegrationApi.md#getFilesUsingGET) | **GET** /api/enterprise/integration/box/files | List file &amp; folders
[**getFilesUsingGET1**](IntegrationApi.md#getFilesUsingGET1) | **GET** /api/enterprise/integration/google-drive/files | List file &amp; folders
[**getRepositoriesUsingGET**](IntegrationApi.md#getRepositoriesUsingGET) | **GET** /api/enterprise/profile/accounts/alfresco | List Alfresco repositories
[**getRepositoryAccountUsingGET**](IntegrationApi.md#getRepositoryAccountUsingGET) | **GET** /api/enterprise/integration/box/{userId}/account | List Box Account
[**updateRepositoryAccountUsingPUT**](IntegrationApi.md#updateRepositoryAccountUsingPUT) | **PUT** /api/enterprise/integration/box/{userId}/account | Update Box account


<a name="confirmAuthorisationUsingGET"></a>
# **confirmAuthorisationUsingGET**
> confirmAuthorisationUsingGET(code)

Alfresco Cloud Authorization

Returns Alfresco Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

<a name="confirmAuthorisationUsingGET1"></a>
# **confirmAuthorisationUsingGET1**
> confirmAuthorisationUsingGET1(code)

Box Authorization

Returns Box Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var code = "code_example"; // String | code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmAuthorisationUsingGET1(code, callback);
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

<a name="confirmAuthorisationUsingGET2"></a>
# **confirmAuthorisationUsingGET2**
> confirmAuthorisationUsingGET2(code)

Drive Authorization

Returns Drive Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var code = "code_example"; // String | code


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.confirmAuthorisationUsingGET2(code, callback);
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

<a name="createRepositoryAccountUsingPOST"></a>
# **createRepositoryAccountUsingPOST**
> createRepositoryAccountUsingPOST(userId, credentials)

Create Box account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var userId = 789; // Integer | userId

var credentials = new ActivitiPublicRestApi.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createRepositoryAccountUsingPOST(userId, credentials, callback);
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

<a name="deleteRepositoryAccountUsingDELETE"></a>
# **deleteRepositoryAccountUsingDELETE**
> deleteRepositoryAccountUsingDELETE(userId)

Delete Box account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var userId = 789; // Integer | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteRepositoryAccountUsingDELETE(userId, callback);
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

<a name="getAllNetworksUsingGET"></a>
# **getAllNetworksUsingGET**
> ResultListDataRepresentation getAllNetworksUsingGET()

List Alfresco networks

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

<a name="getBoxPluginStatusUsingGET"></a>
# **getBoxPluginStatusUsingGET**
> &#39;Boolean&#39; getBoxPluginStatusUsingGET()

Retrieve if Box Integration is enabled

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getBoxPluginStatusUsingGET(callback);
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

<a name="getContentInFolderUsingGET"></a>
# **getContentInFolderUsingGET**
> ResultListDataRepresentation getContentInFolderUsingGET(networkId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

<a name="getFilesUsingGET"></a>
# **getFilesUsingGET**
> ResultListDataRepresentation getFilesUsingGET(opts)

List file &amp; folders

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example" // String | parent
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFilesUsingGET(opts, callback);
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

<a name="getFilesUsingGET1"></a>
# **getFilesUsingGET1**
> ResultListDataRepresentation getFilesUsingGET1(opts)

List file &amp; folders

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var opts = { 
  'filter': "filter_example", // String | filter
  'parent': "parent_example", // String | parent
  'currentFolderOnly': true // Boolean | currentFolderOnly
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getFilesUsingGET1(opts, callback);
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

<a name="getRepositoriesUsingGET"></a>
# **getRepositoriesUsingGET**
> ResultListDataRepresentation getRepositoriesUsingGET(opts)

List Alfresco repositories

A tenant administrator can configure one or more Alfresco repositories to use when working with content.

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

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

<a name="getRepositoryAccountUsingGET"></a>
# **getRepositoryAccountUsingGET**
> BoxUserAccountCredentialsRepresentation getRepositoryAccountUsingGET(userId)

List Box Account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var userId = 789; // Integer | userId


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getRepositoryAccountUsingGET(userId, callback);
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

<a name="updateRepositoryAccountUsingPUT"></a>
# **updateRepositoryAccountUsingPUT**
> updateRepositoryAccountUsingPUT(userId, credentials)

Update Box account

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationApi();

var userId = 789; // Integer | userId

var credentials = new ActivitiPublicRestApi.UserAccountCredentialsRepresentation(); // UserAccountCredentialsRepresentation | credentials


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.updateRepositoryAccountUsingPUT(userId, credentials, callback);
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

