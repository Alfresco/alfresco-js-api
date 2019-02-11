# TrashcanApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deleteDeletedNode**](TrashcanApi.md#deleteDeletedNode) | **DELETE** /deleted-nodes/{nodeId} | Permanently delete a deleted node
[**getArchivedNodeRendition**](TrashcanApi.md#getArchivedNodeRendition) | **GET** /deleted-nodes/{nodeId}/renditions/{renditionId} | Get rendition information for a deleted node
[**getArchivedNodeRenditionContent**](TrashcanApi.md#getArchivedNodeRenditionContent) | **GET** /deleted-nodes/{nodeId}/renditions/{renditionId}/content | Get rendition content of a deleted node
[**getDeletedNode**](TrashcanApi.md#getDeletedNode) | **GET** /deleted-nodes/{nodeId} | Get a deleted node
[**getDeletedNodeContent**](TrashcanApi.md#getDeletedNodeContent) | **GET** /deleted-nodes/{nodeId}/content | Get deleted node content
[**listDeletedNodeRenditions**](TrashcanApi.md#listDeletedNodeRenditions) | **GET** /deleted-nodes/{nodeId}/renditions | List renditions for a deleted node
[**listDeletedNodes**](TrashcanApi.md#listDeletedNodes) | **GET** /deleted-nodes | List deleted nodes
[**restoreDeletedNode**](TrashcanApi.md#restoreDeletedNode) | **POST** /deleted-nodes/{nodeId}/restore | Restore a deleted node


<a name="deleteDeletedNode"></a>
# **deleteDeletedNode**
> deleteDeletedNode(nodeId)

Permanently delete a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Permanently deletes the deleted node **nodeId**.


### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);


trashcanApi.deleteDeletedNode(nodeId).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 

### Return type

null (empty response body)

<a name="getArchivedNodeRendition"></a>
# **getArchivedNodeRendition**
> RenditionEntry getArchivedNodeRendition(nodeIdrenditionId)

Get rendition information for a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the rendition information for **renditionId** of file **nodeId**.


### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);


trashcanApi.getArchivedNodeRendition(nodeIdrenditionId).then((data) => {
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

<a name="getArchivedNodeRenditionContent"></a>
# **getArchivedNodeRenditionContent**
> getArchivedNodeRenditionContent(nodeIdrenditionIdopts)

Get rendition content of a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the rendition content for **renditionId** of file **nodeId**.


### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);

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

trashcanApi.getArchivedNodeRenditionContent(nodeIdrenditionIdopts).then(() => {
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

<a name="getDeletedNode"></a>
# **getDeletedNode**
> DeletedNodeEntry getDeletedNode(nodeIdopts)

Get a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the specific deleted node **nodeId**.


### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

};

trashcanApi.getDeletedNode(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
 | [optional] 

### Return type

[**DeletedNodeEntry**](DeletedNodeEntry.md)

<a name="getDeletedNodeContent"></a>
# **getDeletedNodeContent**
> getDeletedNodeContent(nodeIdopts)

Get deleted node content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the content of the deleted node with identifier **nodeId**.


### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);

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

};

trashcanApi.getDeletedNodeContent(nodeIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
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

null (empty response body)

<a name="listDeletedNodeRenditions"></a>
# **listDeletedNodeRenditions**
> RenditionPaging listDeletedNodeRenditions(nodeIdopts)

List renditions for a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of the rendition information for each rendition of the file **nodeId**, including the rendition id.

Each rendition returned has a **status**: CREATED means it is available to view or download, NOT_CREATED means the rendition can be requested.

You can use the **where** parameter to filter the returned renditions by **status**. For example, the following **where**
clause will return just the CREATED renditions:


(status='CREATED')



### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);

let opts = { 
  'where': where_example //  | A string to restrict the returned objects by using a predicate.
};

trashcanApi.listDeletedNodeRenditions(nodeIdopts).then((data) => {
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

<a name="listDeletedNodes"></a>
# **listDeletedNodes**
> DeletedNodesPaging listDeletedNodes(opts)

List deleted nodes

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of deleted nodes for the current user.

If the current user is an administrator deleted nodes for all users will be returned.

The list of deleted nodes will be ordered with the most recently deleted node at the top of the list.


### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* association
* isLink
* isFavorite
* isLocked
* path
* properties
* permissions

};

trashcanApi.listDeletedNodes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* association
* isLink
* isFavorite
* isLocked
* path
* properties
* permissions
 | [optional] 

### Return type

[**DeletedNodesPaging**](DeletedNodesPaging.md)

<a name="restoreDeletedNode"></a>
# **restoreDeletedNode**
> NodeEntry restoreDeletedNode(nodeIdopts)

Restore a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Attempts to restore the deleted node **nodeId** to its original location or to a new location.

If the node is successfully restored to its former primary parent, then only the
primary child association will be restored, including recursively for any primary
children. It should be noted that no other secondary child associations or peer
associations will be restored, for any of the nodes within the primary parent-child
hierarchy of restored nodes, irrespective of whether these associations were to
nodes within or outside of the restored hierarchy.

Also, any previously shared link will not be restored since it is deleted at the time
of delete of each node.


### Example
```javascript
import TrashcanApi from 'TrashcanApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let trashcanApi = new TrashcanApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

  'deletedNodeBodyRestore':  //  | The targetParentId if the node is restored to a new location.
};

trashcanApi.restoreDeletedNode(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **fields** | [**string**](string.md)| A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.
 | [optional] 
 **deletedNodeBodyRestore** | [**DeletedNodeBodyRestore**](DeletedNodeBodyRestore.md)| The targetParentId if the node is restored to a new location. | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

