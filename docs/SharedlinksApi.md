# AlfrescoCoreRestApi.SharedlinksApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addSharedLink**](SharedlinksApi.md#addSharedLink) | **POST** /shared-links | Create a shared link to a file
[**deleteSharedLink**](SharedlinksApi.md#deleteSharedLink) | **DELETE** /shared-links/{sharedId} | Deletes a shared link
[**emailSharedLink**](SharedlinksApi.md#emailSharedLink) | **POST** /shared-links/{sharedId}/email | Email shared link
[**findSharedLinks**](SharedlinksApi.md#findSharedLinks) | **GET** /shared-links | Find shared links
[**getSharedLink**](SharedlinksApi.md#getSharedLink) | **GET** /shared-links/{sharedId} | Get a shared link
[**getSharedLinkContent**](SharedlinksApi.md#getSharedLinkContent) | **GET** /shared-links/{sharedId}/content | Get file content


<a name="addSharedLink"></a>
# **addSharedLink**
> NodeSharedLinkEntry addSharedLink(sharedLinkBody, opts)

Create a shared link to a file

Create shared link to specfied file identified by **nodeId** in request body.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi()

var sharedLinkBody = new AlfrescoCoreRestApi.SharedLinkBody(); // {SharedLinkBody} The nodeId to create a shared link for.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.addSharedLink(sharedLinkBody, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedLinkBody** | [**SharedLinkBody**](SharedLinkBody.md)| The nodeId to create a shared link for. | 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSharedLink"></a>
# **deleteSharedLink**
> deleteSharedLink(sharedId, )

Deletes a shared link

Deletes the shared link with identifier **sharedId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.deleteSharedLink(sharedId, , callback);
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
> emailSharedLink(sharedId, emailSharedLinkBody)

Email shared link

Sends email with app-specific url including identifier **sharedId**. \n\nThe client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com]\n}\n&#x60;&#x60;&#x60;\nA plain text message property can be optionally provided in the request body to customise the sent email.\nAlso, a locale property can be optionally provided in the request body to send the emails in a particular language.\nFor example, to email a shared link with a messages and a locale:\n&#x60;&#x60;&#x60;JSON\n{\n    \&quot;client\&quot;: \&quot;myClient\&quot;,\n    \&quot;recipientEmails\&quot;: [\&quot;john.doe@acme.com\&quot;, joe.bloggs@acme.com],\n    \&quot;message\&quot;: \&quot;myMessage\&quot;,\n    \&quot;locale\&quot;:\&quot;en-GB\&quot;\n}\n&#x60;&#x60;&#x60;\n**Note:** The client must be registered before you can send a shared link email. See [server documentation]\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var emailSharedLinkBody = new AlfrescoCoreRestApi.EmailSharedLinkBody(); // {EmailSharedLinkBody} The shared link email to send.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.emailSharedLink(sharedId, emailSharedLinkBody, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **emailSharedLinkBody** | [**EmailSharedLinkBody**](EmailSharedLinkBody.md)| The shared link email to send. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="findSharedLinks"></a>
# **findSharedLinks**
> NodeSharedLinkEntry findSharedLinks(opts)

Find shared links

Find (search for) links that current user has read permission on source node.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi()

var opts = { 
  'where': "where_example", // {String} Optionally filter the list by \"sharedByUser\" userid of person who shared the link (can also use -me-)\n*   where=(sharedByUser='jbloggs')\n*   where=(sharedByUser='-me-')
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.findSharedLinks(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Optionally filter the list by \&quot;sharedByUser\&quot; userid of person who shared the link (can also use -me-)\n*   where&#x3D;(sharedByUser&#x3D;&#39;jbloggs&#39;)\n*   where&#x3D;(sharedByUser&#x3D;&#39;-me-&#39;) | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLink"></a>
# **getSharedLink**
> NodeSharedLinkEntry getSharedLink(sharedId, , opts)

Get a shared link

Returns minimal information for the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getSharedLink(sharedId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested:\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names. \n\nYou can use this parameter to restrict the fields \nreturned within a response if, for example, you want to save on overall bandwidth. \n\nThe list applies to a returned individual \nentity or entries within a collection. \n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkContent"></a>
# **getSharedLinkContent**
> getSharedLinkContent(sharedId, , opts)

Get file content

Returns the content of the file with shared link identifier **sharedId**.\n\n**Note:** No authentication is required to call this endpoint.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.SharedlinksApi()

var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment. \n**false** means a web browser may preview the file in a new tab or window, but not \ndownload the file. \n\nYou can only set this parameter to **false** if the content type of the file is in the supported list; \nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and \nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
api.getSharedLinkContent(sharedId, , opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. \n**false** means a web browser may preview the file in a new tab or window, but not \ndownload the file. \n\nYou can only set this parameter to **false** if the content type of the file is in the supported list; \nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and \nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

