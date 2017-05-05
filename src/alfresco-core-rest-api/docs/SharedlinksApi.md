# AlfrescoCoreRestApi.SharedlinksApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSharedLink**](SharedlinksApi.md#createSharedLink) | **POST** /shared-links | Create a shared link to a file
[**deleteSharedLink**](SharedlinksApi.md#deleteSharedLink) | **DELETE** /shared-links/{sharedId} | Deletes a shared link
[**emailSharedLink**](SharedlinksApi.md#emailSharedLink) | **POST** /shared-links/{sharedId}/email | Email shared link
[**getSharedLink**](SharedlinksApi.md#getSharedLink) | **GET** /shared-links/{sharedId} | Get a shared link
[**getSharedLinkContent**](SharedlinksApi.md#getSharedLinkContent) | **GET** /shared-links/{sharedId}/content | Get shared link content
[**getSharedLinkRendition**](SharedlinksApi.md#getSharedLinkRendition) | **GET** /shared-links/{sharedId}/renditions/{renditionId} | Get shared link rendition information
[**getSharedLinkRenditionContent**](SharedlinksApi.md#getSharedLinkRenditionContent) | **GET** /shared-links/{sharedId}/renditions/{renditionId}/content | Get shared link rendition content
[**listSharedLinkRenditions**](SharedlinksApi.md#listSharedLinkRenditions) | **GET** /shared-links/{sharedId}/renditions | List renditions for a shared link
[**listSharedLinks**](SharedlinksApi.md#listSharedLinks) | **GET** /shared-links | List shared links


<a name="createSharedLink"></a>
# **createSharedLink**
> SharedLinkEntry createSharedLink(sharedLinkBodyCreate, opts)

Create a shared link to a file

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Create a shared link to the file **nodeId** in the request body. Also, an optional expiry date could be set, so the shared link would become invalid when the expiry date is reached. For example:  &#x60;&#x60;&#x60;JSON   {     \&quot;nodeId\&quot;: \&quot;1ff9da1a-ee2f-4b9c-8c34-3333333333\&quot;,     \&quot;expiresAt\&quot;: \&quot;2017-03-23T23:00:00.000+0000\&quot;   } &#x60;&#x60;&#x60;  **Note:** You can create shared links to more than one file  specifying a list of **nodeId**s in the JSON body like this:  &#x60;&#x60;&#x60;JSON [   {     \&quot;nodeId\&quot;: \&quot;1ff9da1a-ee2f-4b9c-8c34-4444444444\&quot;   },   {                 \&quot;nodeId\&quot;: \&quot;1ff9da1a-ee2f-4b9c-8c34-5555555555\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60; 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedLinkBodyCreate = new AlfrescoCoreRestApi.SharedLinkBodyCreate(); // SharedLinkBodyCreate | The nodeId to create a shared link for.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.createSharedLink(sharedLinkBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedLinkBodyCreate** | [**SharedLinkBodyCreate**](SharedLinkBodyCreate.md)| The nodeId to create a shared link for. | 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SharedLinkEntry**](SharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSharedLink"></a>
# **deleteSharedLink**
> deleteSharedLink(sharedId, )

Deletes a shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Deletes the shared link with identifier **sharedId**. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedId = "sharedId_example"; // String | The identifier of a shared link to a file.

apiInstance.deleteSharedLink(sharedId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="emailSharedLink"></a>
# **emailSharedLink**
> emailSharedLink(sharedId, sharedLinkBodyEmail)

Email shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Sends email with app-specific url including identifier **sharedId**.  The client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info: &#x60;&#x60;&#x60;JSON {     \&quot;client\&quot;: \&quot;myClient\&quot;,     \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com] } &#x60;&#x60;&#x60; A plain text message property can be optionally provided in the request body to customise the sent email. Also, a locale property can be optionally provided in the request body to send the emails in a particular language. For example, to email a shared link with a messages and a locale: &#x60;&#x60;&#x60;JSON {     \&quot;client\&quot;: \&quot;myClient\&quot;,     \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],     \&quot;message\&quot;: \&quot;myMessage\&quot;,     \&quot;locale\&quot;:\&quot;en-GB\&quot; } &#x60;&#x60;&#x60; **Note:** The client must be registered before you can send a shared link email. See [server documentation] 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedId = "sharedId_example"; // String | The identifier of a shared link to a file.

var sharedLinkBodyEmail = new AlfrescoCoreRestApi.SharedLinkBodyEmail(); // SharedLinkBodyEmail | The shared link email to send.

apiInstance.emailSharedLink(sharedId, sharedLinkBodyEmail).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **sharedLinkBodyEmail** | [**SharedLinkBodyEmail**](SharedLinkBodyEmail.md)| The shared link email to send. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLink"></a>
# **getSharedLink**
> SharedLinkEntry getSharedLink(sharedId, , opts)

Get a shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets minimal information for the file with shared link identifier **sharedId**.  **Note:** No authentication is required to call this endpoint. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedId = "sharedId_example"; // String | The identifier of a shared link to a file.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.getSharedLink(sharedId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SharedLinkEntry**](SharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkContent"></a>
# **getSharedLinkContent**
> getSharedLinkContent(sharedId, , opts)

Get shared link content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the content of the file with shared link identifier **sharedId**.  **Note:** No authentication is required to call this endpoint. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedId = "sharedId_example"; // String | The identifier of a shared link to a file.

var opts = { 
  'attachment': true, // Boolean | **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. 
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // Date | Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. 
};
apiInstance.getSharedLinkContent(sharedId, , opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRendition"></a>
# **getSharedLinkRendition**
> RenditionEntry getSharedLinkRendition(sharedId, renditionId)

Get shared link rendition information

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets rendition information for the file with shared link identifier **sharedId**.  This API method returns rendition information where the rendition status is CREATED,  which means the rendition is available to view/download.  **Note:** No authentication is required to call this endpoint.       

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedId = "sharedId_example"; // String | The identifier of a shared link to a file.

var renditionId = "renditionId_example"; // String | The name of a thumbnail rendition, for example *doclib*, or *pdf*.

apiInstance.getSharedLinkRendition(sharedId, renditionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 

### Return type

[**RenditionEntry**](RenditionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRenditionContent"></a>
# **getSharedLinkRenditionContent**
> getSharedLinkRenditionContent(sharedId, renditionId, opts)

Get shared link rendition content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the rendition content for file with shared link identifier **sharedId**.  **Note:** No authentication is required to call this endpoint. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedId = "sharedId_example"; // String | The identifier of a shared link to a file.

var renditionId = "renditionId_example"; // String | The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = { 
  'attachment': true, // Boolean | **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. 
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // Date | Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. 
};
apiInstance.getSharedLinkRenditionContent(sharedId, renditionId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSharedLinkRenditions"></a>
# **listSharedLinkRenditions**
> RenditionPaging listSharedLinkRenditions(sharedId, )

List renditions for a shared link

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of the rendition information for the file with shared link identifier **sharedId**.  This API method returns rendition information, including the rendition id, for each rendition where the rendition status is CREATED, which means the rendition is available to view/download.  **Note:** No authentication is required to call this endpoint.       

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var sharedId = "sharedId_example"; // String | The identifier of a shared link to a file.

apiInstance.listSharedLinkRenditions(sharedId, ).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 

### Return type

[**RenditionPaging**](RenditionPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSharedLinks"></a>
# **listSharedLinks**
> SharedLinkPaging listSharedLinks(opts)

List shared links

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Get a list of links that the current user has read permission on source node.  **Note:** The list of links is eventually consistent so newly created shared links may not appear immediately. 

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi();

var opts = { 
  'where': "where_example", // String | Optionally filter the list by \"sharedByUser\" userid of person who shared the link (can also use -me-) *   where=(sharedByUser='jbloggs') *   where=(sharedByUser='-me-')
  'include': ["include_example"], // [String] | Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.listSharedLinks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-) *   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;) *   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;) | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**SharedLinkPaging**](SharedLinkPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

