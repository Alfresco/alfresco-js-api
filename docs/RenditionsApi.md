# AlfrescoCoreRestApi.RenditionsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRendition**](RenditionsApi.md#createRendition) | **POST** /nodes/{nodeId}/renditions | Create rendition
[**getRendition**](RenditionsApi.md#getRendition) | **GET** /nodes/{nodeId}/renditions/{renditionId} | Get rendition information
[**getRenditionContent**](RenditionsApi.md#getRenditionContent) | **GET** /nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content
[**getRenditions**](RenditionsApi.md#getRenditions) | **GET** /nodes/{nodeId}/renditions | List information for renditions
[**getSharedLinkRenditionContent**](RenditionsApi.md#getSharedLinkRenditionContent) | **GET** /shared-links/{sharedId}/renditions/{renditionId}/content | Get shared link rendition content


<a name="createRendition"></a>
# **createRendition**
> createRendition(nodeId, renditionBody)

Create rendition

Async request to create a rendition for file with identifier\n**nodeId**. The rendition is specified by name \&quot;id\&quot; in the request body:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;id\&quot;:\&quot;doclib\&quot;\n}\n&#x60;&#x60;&#x60;\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.RenditionsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var renditionBody = new AlfrescoCoreRestApi.RenditionBody(); // {RenditionBody} The rendition \"id\".


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.createRendition(nodeId, renditionBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **renditionBody** | [**RenditionBody**](RenditionBody.md)| The rendition \&quot;id\&quot;. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRendition"></a>
# **getRendition**
> RenditionEntry getRendition(nodeId, renditionId)

Get rendition information

Returns the rendition information for file node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.RenditionsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRendition(nodeId, renditionId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 

### Return type

[**RenditionEntry**](RenditionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRenditionContent"></a>
# **getRenditionContent**
> getRenditionContent(nodeId, renditionId, opts)

Get rendition content

Returns the rendition content for file node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.RenditionsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getRenditionContent(nodeId, renditionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRenditions"></a>
# **getRenditions**
> RenditionPaging getRenditions(nodeId, )

List information for renditions

Returns the rendition information for the file node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.RenditionsApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getRenditions(nodeId, , callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 

### Return type

[**RenditionPaging**](RenditionPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRenditionContent"></a>
# **getSharedLinkRenditionContent**
> getSharedLinkRenditionContent(sharedId, renditionId, opts)

Get shared link rendition content

Returns the rendition content for file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

// Configure API key authorization: ticketAuth
var ticketAuth = defaultClient.authentications['ticketAuth'];
ticketAuth.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//ticketAuth.apiKeyPrefix['alf_ticket'] = "Token"

var apiInstance = new AlfrescoCoreRestApi.RenditionsApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getSharedLinkRenditionContent(sharedId, renditionId, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth), [ticketAuth](../README.md#ticketAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

