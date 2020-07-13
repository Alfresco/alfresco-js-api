# VersionsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createVersionRendition**](VersionsApi.md#createVersionRendition) | **POST** /nodes/{nodeId}/versions/{versionId}/renditions | Create rendition for a file version
[**deleteVersion**](VersionsApi.md#deleteVersion) | **DELETE** /nodes/{nodeId}/versions/{versionId} | Delete a version
[**getVersion**](VersionsApi.md#getVersion) | **GET** /nodes/{nodeId}/versions/{versionId} | Get version information
[**getVersionContent**](VersionsApi.md#getVersionContent) | **GET** /nodes/{nodeId}/versions/{versionId}/content | Get version content
[**getVersionRendition**](VersionsApi.md#getVersionRendition) | **GET** /nodes/{nodeId}/versions/{versionId}/renditions/{renditionId} | Get rendition information for a file version
[**getVersionRenditionContent**](VersionsApi.md#getVersionRenditionContent) | **GET** /nodes/{nodeId}/versions/{versionId}/renditions/{renditionId}/content | Get rendition content for a file version
[**listVersionHistory**](VersionsApi.md#listVersionHistory) | **GET** /nodes/{nodeId}/versions | List version history
[**listVersionRenditions**](VersionsApi.md#listVersionRenditions) | **GET** /nodes/{nodeId}/versions/{versionId}/renditions | List renditions for a file version
[**revertVersion**](VersionsApi.md#revertVersion) | **POST** /nodes/{nodeId}/versions/{versionId}/revert | Revert a version


<a name="createVersionRendition"></a>
## createVersionRendition
> createVersionRendition(nodeIdversionIdrenditionBodyCreate)

Create rendition for a file version

**Note:** this endpoint is available in Alfresco 7.0.0 and newer versions.

An asynchronous request to create a rendition for version of file **nodeId** and **versionId**.

The version rendition is specified by name **id** in the request body:
JSON
{
  \"id\":\"doclib\"
}

  Multiple names may be specified as a comma separated list or using a list format:
JSON
[
  {
      \"id\": \"doclib\"
  },
  {
      \"id\": \"avatar\"
  }
]



### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);


versionsApi.createVersionRendition(nodeIdversionIdrenditionBodyCreate).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 
 **renditionBodyCreate** | [**RenditionBodyCreate**](RenditionBodyCreate.md)| The rendition \"id\". | 

### Return type

null (empty response body)

<a name="deleteVersion"></a>
## deleteVersion
> deleteVersion(nodeIdversionId)

Delete a version

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Delete the version identified by **versionId** and **nodeId*.

If the version is successfully deleted then the content and metadata for that versioned node
will be deleted and will no longer appear in the version history. This operation cannot be undone.

If the most recent version is deleted the live node will revert to the next most recent version.

We currently do not allow the last version to be deleted. If you wish to clear the history then you
can remove the \"cm:versionable\" aspect (via update node) which will also disable versioning. In this
case, you can re-enable versioning by adding back the \"cm:versionable\" aspect or using the version
params (majorVersion and comment) on a subsequent file content update.


### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);


versionsApi.deleteVersion(nodeIdversionId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 

### Return type

null (empty response body)

<a name="getVersion"></a>
## getVersion
> VersionEntry getVersion(nodeIdversionId)

Get version information

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the version information for **versionId** of file node **nodeId**.


### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);


versionsApi.getVersion(nodeIdversionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 

### Return type

[**VersionEntry**](VersionEntry.md)

<a name="getVersionContent"></a>
## getVersionContent
> Blob getVersionContent(nodeIdversionIdopts)

Get version content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the version content for **versionId** of file node **nodeId**.


### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);

const opts = { 
  'attachment': true /*  | **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.
 */
  'ifModifiedSince': 2013-10-20T19:20:30+01:00 /*  | Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
 */
  'range': range_example /*  | The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.
 */
};

versionsApi.getVersionContent(nodeIdversionIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 
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

### Return type

**Blob**

<a name="getVersionRendition"></a>
## getVersionRendition
> RenditionEntry getVersionRendition(nodeIdversionIdrenditionId)

Get rendition information for a file version

**Note:** this endpoint is available in Alfresco 7.0.0 and newer versions.

Gets the rendition information for **renditionId** of version of file **nodeId** and **versionId**.


### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);


versionsApi.getVersionRendition(nodeIdversionIdrenditionId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 
 **renditionId** | **string**| The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 

### Return type

[**RenditionEntry**](RenditionEntry.md)

<a name="getVersionRenditionContent"></a>
## getVersionRenditionContent
> Blob getVersionRenditionContent(nodeIdversionIdrenditionIdopts)

Get rendition content for a file version

**Note:** this endpoint is available in Alfresco 7.0.0 and newer versions.

Gets the rendition content for **renditionId** of version of file **nodeId** and **versionId**.


### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);

const opts = { 
  'attachment': true /*  | **true** enables a web browser to download the file as an attachment.
**false** means a web browser may preview the file in a new tab or window, but not
download the file.

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.
 */
  'ifModifiedSince': 2013-10-20T19:20:30+01:00 /*  | Only returns the content if it has been modified since the date provided.
Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.
 */
  'range': range_example /*  | The Range header indicates the part of a document that the server should return.
Single part request supported, for example: bytes=1-10.
 */
  'placeholder': true /*  | If **true** and there is no rendition for this **nodeId** and **renditionId**,
then the placeholder image for the mime type of this rendition is returned, rather
than a 404 response.
 */
};

versionsApi.getVersionRenditionContent(nodeIdversionIdrenditionIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 
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

**Blob**

<a name="listVersionHistory"></a>
## listVersionHistory
> VersionPaging listVersionHistory(nodeIdopts)

List version history

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the version history as an ordered list of versions for the specified **nodeId**.

The list is ordered in descending modified order. So the most recent version is first and
the original version is last in the list.


### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);

const opts = { 
  'include':  /*  | Returns additional information about the version node. The following optional fields can be requested:
* properties
* aspectNames
 */
  'fields':  /*  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 */
  'skipCount': 56 /*  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 */
  'maxItems': 56 /*  | The maximum number of items to return in the list.
If not supplied then the default value is 100.
 */
};

versionsApi.listVersionHistory(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **include** | [**string**](string.md)| Returns additional information about the version node. The following optional fields can be requested:
* properties
* aspectNames
 | [optional] 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]

### Return type

[**VersionPaging**](VersionPaging.md)

<a name="listVersionRenditions"></a>
## listVersionRenditions
> RenditionPaging listVersionRenditions(nodeIdversionIdopts)

List renditions for a file version

**Note:** this endpoint is available in Alfresco 7.0.0 and newer versions.

Gets a list of the rendition information for each rendition of the version of file **nodeId** and **versionId**, including the rendition id.

Each rendition returned has a **status**: CREATED means it is available to view or download, NOT_CREATED means the rendition can be requested.

You can use the **where** parameter to filter the returned renditions by **status**. For example, the following **where**
clause will return just the CREATED renditions:


(status='CREATED')



### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);

const opts = { 
  'where': where_example /*  | A string to restrict the returned objects by using a predicate. */
};

versionsApi.listVersionRenditions(nodeIdversionIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 
 **where** | **string**| A string to restrict the returned objects by using a predicate. | [optional] 

### Return type

[**RenditionPaging**](RenditionPaging.md)

<a name="revertVersion"></a>
## revertVersion
> VersionEntry revertVersion(nodeIdversionIdrevertBodyopts)

Revert a version

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Attempts to revert the version identified by **versionId** and **nodeId** to the live node.

If the node is successfully reverted then the content and metadata for that versioned node
will be promoted to the live node and a new version will appear in the version history.


### Example

```javascript
import { AlfrescoApi, VersionsApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const versionsApi = new VersionsApi(alfrescoApi);

const opts = { 
  'fields':  /*  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 */
};

versionsApi.revertVersion(nodeIdversionIdrevertBodyopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **versionId** | **string**| The identifier of a version, ie. version label, within the version history of a node. | 
 **revertBody** | [**RevertBody**](RevertBody.md)| Optionally, specify a version comment and whether this should be a major version, or not. | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 

### Return type

[**VersionEntry**](VersionEntry.md)

