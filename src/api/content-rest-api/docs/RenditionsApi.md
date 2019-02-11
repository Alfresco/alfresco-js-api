# RenditionsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRendition**](RenditionsApi.md#createRendition) | **POST** /nodes/{nodeId}/renditions | Create rendition
[**getRendition**](RenditionsApi.md#getRendition) | **GET** /nodes/{nodeId}/renditions/{renditionId} | Get rendition information
[**getRenditionContent**](RenditionsApi.md#getRenditionContent) | **GET** /nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content
[**listRenditions**](RenditionsApi.md#listRenditions) | **GET** /nodes/{nodeId}/renditions | List renditions


<a name="createRendition"></a>
# **createRendition**
> createRendition(nodeIdrenditionBodyCreate)

Create rendition

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

An asynchronous request to create a rendition for file **nodeId**.

The rendition is specified by name **id** in the request body:
JSON
{
  \"id\":\"doclib\"
}



### Example
```javascript
import RenditionsApi from 'RenditionsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let renditionsApi = new RenditionsApi(this.alfrescoApi);


renditionsApi.createRendition(nodeIdrenditionBodyCreate).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **renditionBodyCreate** | [**RenditionBodyCreate**](RenditionBodyCreate.md)| The rendition \"id\". | 

### Return type

null (empty response body)

<a name="getRendition"></a>
# **getRendition**
> RenditionEntry getRendition(nodeIdrenditionId)

Get rendition information

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the rendition information for **renditionId** of file **nodeId**.


### Example
```javascript
import RenditionsApi from 'RenditionsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let renditionsApi = new RenditionsApi(this.alfrescoApi);


renditionsApi.getRendition(nodeIdrenditionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **renditionId** | **string**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 

### Return type

[**RenditionEntry**](RenditionEntry.md)

<a name="getRenditionContent"></a>
# **getRenditionContent**
> getRenditionContent(nodeIdrenditionIdopts)

Get rendition content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the rendition content for **renditionId** of file **nodeId**.


### Example
```javascript
import RenditionsApi from 'RenditionsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let renditionsApi = new RenditionsApi(this.alfrescoApi);

let opts = { 
  'attachment': true //  | **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.

  'ifModifiedSince': 2013-10-20T19:20:30+01:00 //  | Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.

  'range': range_example //  | The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.

  'placeholder': true //  | If **true** and there is no rendition for this **nodeId** and **renditionId**,
then the placeholder image for the mime type of this rendition is returned, rather
than a 404 response.

};

renditionsApi.getRenditionContent(nodeIdrenditionIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **renditionId** | **string**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 
 **attachment** | **boolean**| **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.
 | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
 | [optional] 
 **range** | **string**| The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.
 | [optional] 
 **placeholder** | **boolean**| If **true** and there is no rendition for this **nodeId** and **renditionId**,
then the placeholder image for the mime type of this rendition is returned, rather
than a 404 response.
 | [optional] [default to false]

### Return type

null (empty response body)

<a name="listRenditions"></a>
# **listRenditions**
> RenditionPaging listRenditions(nodeIdopts)

List renditions

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of the rendition information for each rendition of the the file **nodeId**, including the rendition id.

Each rendition returned has a **status**: CREATED means it is available to view or download, NOT_CREATED means the rendition can be requested.

You can use the **where** parameter to filter the returned renditions by **status**. For example, the following **where**
clause will return just the CREATED renditions:


(status='CREATED')



### Example
```javascript
import RenditionsApi from 'RenditionsApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let renditionsApi = new RenditionsApi(this.alfrescoApi);

let opts = { 
  'where': where_example //  | A string to restrict the returned objects by using a predicate.
};

renditionsApi.listRenditions(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 

### Return type

[**RenditionPaging**](RenditionPaging.md)

