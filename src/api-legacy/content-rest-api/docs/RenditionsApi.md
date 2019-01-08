# AlfrescoCoreRestApi.RenditionsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRendition**](RenditionsApi.md#createRendition) | **POST** /nodes/{nodeId}/renditions | Create rendition
[**getRendition**](RenditionsApi.md#getRendition) | **GET** /nodes/{nodeId}/renditions/{renditionId} | Get rendition information
[**getRenditionContent**](RenditionsApi.md#getRenditionContent) | **GET** /nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content
[**getRenditions**](RenditionsApi.md#getRenditions) | **GET** /nodes/{nodeId}/renditions | List information for renditions
[**getSharedLinkRenditionContent**](RenditionsApi.md#getSharedLinkRenditionContent) | **GET** /shared-links/{sharedId}/renditions/{renditionId}/content | Get shared link rendition content
[**getSharedLinkRenditions**](RenditionsApi.md#getSharedLinkRenditions) | **GET** /shared-links/{sharedId}/renditions | List information for created renditions


<a name="createRendition"></a>
# **createRendition**
> createRendition(nodeId, renditionBody)

Create rendition

Async request to create a rendition for file with identifier
**nodeId**. The rendition is specified by name "id" in the request body:
```JSON
{
  "id":"doclib"
}
```


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:  -my-,  -shared- , -root-

var renditionBody = new this.alfrescoJsApi.core.RenditionBody(); // {RenditionBody} The rendition "id".

this.alfrescoJsApi.core.renditionsApi.createRendition(nodeId, renditionBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  |
 **renditionBody** | [**RenditionBody**](RenditionBody.md)| The rendition "id". |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

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
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

this.alfrescoJsApi.core.renditionsApi.getRendition(nodeId, renditionId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. |

### Return type

[**RenditionEntry**](RenditionEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

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
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

var opts = {
  'attachment': true, /* {Boolean} **true** enables a web browser to download the file as an attachment.
                        **false** means a web browser may preview the file in a new tab or window, but not
                        download the file.

                        You can only set this parameter to **false** if the content type of the file is in the supported list;
                        for example, certain image files and PDF files.

                        If the content type is not supported for preview, then a value of **false**  is ignored, and
                        the attachment will be returned in the response. */

'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.

};
this.alfrescoJsApi.core.renditionsApi.getRenditionContent(nodeId, renditionId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **renditionId** | **String**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. |
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file. You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.  | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRenditions"></a>
# **getRenditions**
> RenditionPaging getRenditions(nodeId)

List information for renditions

Returns the rendition information for the file node with identifier **nodeId**.
This will return rendition information, including the rendition id, for each rendition. The\u00A0rendition status is CREATED (ie. available\u00A0to view/download) or NOT_CREATED (ie. rendition can be requested).

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

this.alfrescoJsApi.core.renditionsApi.getRenditions(nodeId).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |

### Return type

[**RenditionPaging**](RenditionPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRenditionContent"></a>
# **getSharedLinkRenditionContent**
> getSharedLinkRenditionContent(sharedId, renditionId, opts)

Get shared link rendition content

Returns the rendition content for file with shared link identifier **sharedId**.

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

var renditionId = "renditionId_example"; // {String} The name of a thumbnail rendition, for example *doclib*, or *pdf*.

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
this.alfrescoJsApi.core.renditionsApi.getSharedLinkRenditionContent(sharedId, renditionId, opts).then(function() {
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
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file. You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.  | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSharedLinkRenditions"></a>
# **getSharedLinkRenditions**
> RenditionPaging getSharedLinkRenditions(sharedId)

List information for created renditions

Returns the rendition information for the file with shared link identifier **sharedId**.

This will only return rendition information, including the rendition id, for each rendition
where the rendition status is CREATED (ie. available\u00A0to view/download).

**Note:** No authentication is required to call this endpoint.


### Example
```javascript
var sharedId = "sharedId_example"; // {String} The identifier of a shared link to a file.

this.alfrescoJsApi.core.renditionsApi.getSharedLinkRenditions(sharedId).then(function(data) {
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

