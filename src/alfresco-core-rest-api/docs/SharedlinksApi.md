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
var sharedLinkBody = new this.alfrescoJsApi.core.SharedLinkBody(); // {SharedLinkBody} The nodeId to create a shared link for.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested:  allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.sharedlinksApi.addSharedLink(sharedLinkBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedLinkBody** | [**SharedLinkBody**](SharedLinkBody.md)| The nodeId to create a shared link for. |
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested:* allowableOperations| [optional]
 **fields** | [**[String]**](String.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional]

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteSharedLink"></a>
# **deleteSharedLink**
> deleteSharedLink(sharedId)

Deletes a shared link

Deletes the shared link with identifier **sharedId**.

### Example
```javascript
var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

this.alfrescoJsApi.core.sharedlinksApi.deleteSharedLink(sharedId).then(function() {
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
> emailSharedLink(sharedId, emailSharedLinkBody)

Email shared link

Sends email with app-specific url including identifier **sharedId**.

The client and recipientEmails properties are mandatory in the request body. For example, to email a shared link with minimum info:
```JSON
{
    "client": "myClient",
    "recipientEmails": ["john.doe@acme.com", joe.bloggs@acme.com]
}
```
A plain text message property can be optionally provided in the request body to customise the sent email.
Also, a locale property can be optionally provided in the request body to send the emails in a particular language.
For example, to email a shared link with a messages and a locale:
```JSON
{
    "client": "myClient",
    "recipientEmails": ["john.doe@acme.com", joe.bloggs@acme.com],
    "message": "myMessage",
    "locale":"en-GB"
}
```
**Note:** The client must be registered before you can send a shared link email. See [server documentation]


### Example
```javascript
var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var emailSharedLinkBody = new this.alfrescoJsApi.core.EmailSharedLinkBody(); // {EmailSharedLinkBody} The shared link email to send.

this.alfrescoJsApi.core.sharedlinksApi.emailSharedLink(sharedId, emailSharedLinkBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

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
> NodeSharedLinkPaging findSharedLinks(opts)

Find shared links

Find (search for) links that current user has read permission on source node.

### Example
```javascript
var opts = {
  'where': "where_example", // {String} Optionally filter the list by "sharedByUser" userid of person who shared the link (can also use -me-) where=(sharedByUser='jbloggs')    where=(sharedByUser='-me-')
   'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
   'maxItems': 56, // {Integer} The maximum number of items to return in the list.
   'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations
   'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.sharedlinksApi.findSharedLinks(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **where** | **String**| Optionally filter the list by "sharedByUser" userid of person who shared the link (can also use -me-) *   where=(sharedByUser='jbloggs') *   where=(sharedByUser='-me-') | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on verall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeSharedLinkPaging**](NodeSharedLinkPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLink"></a>
# **getSharedLink**
> NodeSharedLinkEntry getSharedLink(sharedId, opts)

Get a shared link

Returns minimal information for the file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations
  'fields': ["fields_example"]  /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.sharedlinksApi.getSharedLink(sharedId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |
 **include** | [**[String]**](String.md)| Returns additional information about the shared link, the following optional fields can be requested: * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. ou can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeSharedLinkEntry**](NodeSharedLinkEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkContent"></a>
# **getSharedLinkContent**
> getSharedLinkContent(sharedId, opts)

Get file content

Returns the content of the file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var opts = {
  'attachment': true, /* {Boolean} **true** enables a web browser to download the file as an attachment.
                        **false** means a web browser may preview the file in a new tab or window, but not
                        download the file.

                        You can only set this parameter to **false** if the content type of the file is in the supported list;
                        for example, certain image files and PDF files.

                        If the content type is not supported for preview, then a value of **false**  is ignored, and
                        the attachment will be returned in the response.*/

  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.
};
this.alfrescoJsApi.core.sharedlinksApi.getSharedLinkContent(sharedId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **sharedId** | **String**| The identifier of a shared link to a file. |
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files. If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.  | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

