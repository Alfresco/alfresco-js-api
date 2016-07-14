# ActivitiPublicRestApi.IntegrationAlfrescoCloudApi

All URIs are relative to *https://localhost:8080/activiti-app*

Method | HTTP request | Description
------------- | ------------- | -------------
[**confirmAuthorisationUsingGET**](IntegrationAlfrescoCloudApi.md#confirmAuthorisationUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/confirm-auth-request | Alfresco Cloud Authorization
[**getAllNetworksUsingGET**](IntegrationAlfrescoCloudApi.md#getAllNetworksUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks | List Alfresco networks
[**getAllSitesUsingGET**](IntegrationAlfrescoCloudApi.md#getAllSitesUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites | List Alfresco sites
[**getContentInFolderUsingGET**](IntegrationAlfrescoCloudApi.md#getContentInFolderUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/folders/{folderId}/content | List file &amp; folders inside a specific folder
[**getContentInSiteUsingGET**](IntegrationAlfrescoCloudApi.md#getContentInSiteUsingGET) | **GET** /api/enterprise/integration/alfresco-cloud/networks/{networkId}/sites/{siteId}/content | List file &amp; folders inside a specific site


<a name="confirmAuthorisationUsingGET"></a>
# **confirmAuthorisationUsingGET**
> confirmAuthorisationUsingGET(code)

Alfresco Cloud Authorization

Returns Alfresco Oauth HTML Page

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoCloudApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoCloudApi();

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

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoCloudApi();

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

<a name="getContentInFolderUsingGET"></a>
# **getContentInFolderUsingGET**
> ResultListDataRepresentation getContentInFolderUsingGET(networkId, folderId)

List file &amp; folders inside a specific folder

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoCloudApi();

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

<a name="getContentInSiteUsingGET"></a>
# **getContentInSiteUsingGET**
> ResultListDataRepresentation getContentInSiteUsingGET(networkId, siteId)

List file &amp; folders inside a specific site

### Example
```javascript
var ActivitiPublicRestApi = require('activiti-public-rest-api');

var apiInstance = new ActivitiPublicRestApi.IntegrationAlfrescoCloudApi();

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

