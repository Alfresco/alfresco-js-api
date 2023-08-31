# TrashcanApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

| Method                                                                                | HTTP request                                                                        | Description                                                                  |
|---------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| [**deleteDeletedNode**](TrashcanApi.md#deleteDeletedNode)                             | **DELETE** /deleted-nodes/{nodeId}                                                  | Permanently delete a deleted node                                            |
| [**getArchivedNodeRendition**](TrashcanApi.md#getArchivedNodeRendition)               | **GET** /deleted-nodes/{nodeId}/renditions/{renditionId}                            | Get rendition information for a deleted node                                 |
| [**getArchivedNodeRenditionContent**](TrashcanApi.md#getArchivedNodeRenditionContent) | **GET** /deleted-nodes/{nodeId}/renditions/{renditionId}/content                    | Get rendition content of a deleted node                                      |
| [**getDeletedNode**](TrashcanApi.md#getDeletedNode)                                   | **GET** /deleted-nodes/{nodeId}                                                     | Get a deleted node                                                           |
| [**getDeletedNodeContent**](TrashcanApi.md#getDeletedNodeContent)                     | **GET** /deleted-nodes/{nodeId}/content                                             | Get deleted node content                                                     |
| [**listDeletedNodeRenditions**](TrashcanApi.md#listDeletedNodeRenditions)             | **GET** /deleted-nodes/{nodeId}/renditions                                          | List renditions for a deleted node                                           |
| [**listDeletedNodes**](TrashcanApi.md#listDeletedNodes)                               | **GET** /deleted-nodes                                                              | List deleted nodes                                                           |
| [**requestDirectAccessUrl**](TrashcanApi.md#requestDirectAccessUrl)                   | **POST** /deleted-nodes/{nodeId}/request-direct-access-url                          | Generate a direct access content url for a given deleted node                |
| [**requestRenditionDirectAccessUrl**](TrashcanApi.md#requestRenditionDirectAccessUrl) | **POST** /deleted-nodes/{nodeId}/renditions/{renditionId}/request-direct-access-url | Generate a direct access content url for a given rendition of a deleted node |
| [**restoreDeletedNode**](TrashcanApi.md#restoreDeletedNode)                           | **POST** /deleted-nodes/{nodeId}/restore                                            | Restore a deleted node                                                       |

<a name="deleteDeletedNode"></a>
## deleteDeletedNode
Permanently delete a deleted node
> **Note:** this endpoint is available in Alfresco 5.2 and newer versions.


```javascript
deleteDeletedNode(nodeId)
```

**Example**

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);


trashcanApi.deleteDeletedNode(nodeId).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});
```

**Parameters**

| Name        | Type   | Description                                                        |
|-------------|--------|--------------------------------------------------------------------|
| nodeId      | string | The identifier of a node.                                          |

<a name="getArchivedNodeRendition"></a>
## getArchivedNodeRendition

Get rendition information for a deleted node

> **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

```text
getArchivedNodeRendition(nodeId, renditionId) -> Promise<RenditionEntry>
```

**Parameters**

| Name        | Type   | Description                                                        |
|-------------|--------|--------------------------------------------------------------------|
| nodeId      | string | The identifier of a node.                                          | 
| renditionId | string | The name of a thumbnail rendition, for example *doclib*, or *pdf*. | 

**Example**

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);

trashcanApi.getArchivedNodeRendition('node-id', 'rendition-id').then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

### Return type

[**RenditionEntry**](RenditionEntry.md)

<a name="getArchivedNodeRenditionContent"></a>
## getArchivedNodeRenditionContent
> getArchivedNodeRenditionContent(nodeId, renditionId, opts) -> Promise<Blob>

Get rendition content of a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

**Example**

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);

trashcanApi.getArchivedNodeRenditionContent('node-id', 'rendition-id').then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

**Parameters**

| Name        | Type    | Description                                                                                                                                                                           |
|-------------|---------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nodeId      | string  | The identifier of a node.                                                                                                                                                             | 
| renditionId | string  | The name of a thumbnail rendition, for example *doclib*, or *pdf*.                                                                                                                    | 
| attachment  | boolean | **true** (default) enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file. |

You can only set this parameter to **false** if the content type of the file is in the supported list;
for example, certain image files and PDF files.

If the content type is not supported for preview, then a value of **false**  is ignored, and
the attachment will be returned in the response.

| Name            | Type    | Description                                                                                                                                                                            |
|-----------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ifModifiedSince | boolean | Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, Wed, 09 Mar 2016 16:56:34 GMT.                             | [optional] | 
| range           | string  | The Range header indicates the part of a document that the server should return. Single part request supported, for example: bytes=1-10.                                               | [optional] |
| placeholder     | boolean | If **true** and there is no rendition for this **nodeId** and **renditionId**, then the placeholder image for the mime type of this rendition is returned, rather than a 404 response. | [optional] [default to false] |

**Return type**: **Blob**

<a name="getDeletedNode"></a>
## getDeletedNode
> DeletedNodeEntry getDeletedNode(nodeIdopts)

Get a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the specific deleted node **nodeId**.

**Example**

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);

trashcanApi.getDeletedNode('nodeId').then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

**Parameters**

| Name       | Type   | Description                                                                                                                                                                                                 |
|------------|--------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **nodeId** | string | The identifier of a node.                                                                                                                                                                                   | 
| include    | string | Returns additional information about the node. The following optional fields can be requested: `allowableOperations`, `association`, `isLink`, `isFavorite`,`isLocked`, `path`, `permissions`, `definition` | 

### Return type

[**DeletedNodeEntry**](DeletedNodeEntry.md)

<a name="getDeletedNodeContent"></a>
## getDeletedNodeContent
> Blob getDeletedNodeContent(nodeIdopts)

Get deleted node content

> **Note:** this endpoint is available in Alfresco 5.2 and newer versions.

**Example**

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);

trashcanApi.getDeletedNodeContent('nodeId').then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

### Parameters

| Name            | Type    | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **nodeId**      | string  | The identifier of a node.                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | 
| attachment      | boolean | **true** (default) enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file. You can only set this parameter to **false** if the content type of the file is in the supported list for example, certain image files and PDF files. If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. |
| ifModifiedSince | Date    | Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.                                                                                                                                                                                                                                                                                                                              |
| range           | string  | The Range header indicates the part of a document that the server should return. Single part request supported, for example: bytes=1-10.                                                                                                                                                                                                                                                                                                                                                  | 

**Return type**: **Blob**

<a name="listDeletedNodeRenditions"></a>
## listDeletedNodeRenditions
> RenditionPaging listDeletedNodeRenditions(nodeIdopts)

List renditions for a deleted node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of the rendition information for each rendition of the file **nodeId**, including the rendition id.

Each rendition returned has a **status**: `CREATED` means it is available to view or download, `NOT_CREATED` means the rendition can be requested.

You can use the **where** parameter to filter the returned renditions by **status**. For example, the following **where**
clause will return just the `CREATED` renditions:

```text
(status='CREATED')
```

**Example**

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);
const nodeId = '<guid>';

trashcanApi.listDeletedNodeRenditions(nodeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

**Parameters**

| Name       | Type       | Description                                                     | Notes      |
|------------|------------|-----------------------------------------------------------------|------------|
| **nodeId** | **string** | The identifier of a node.                                       | 
| **where**  | **string** | A string to restrict the returned objects by using a predicate. | [optional] |

**Return type**: [**RenditionPaging**](RenditionPaging.md)

<a name="listDeletedNodes"></a>
## listDeletedNodes
> DeletedNodesPaging listDeletedNodes(opts)

List deleted nodes

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of deleted nodes for the current user.

If the current user is an administrator deleted nodes for all users will be returned.

The list of deleted nodes will be ordered with the most recently deleted node at the top of the list.


### Example

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);

trashcanApi.listDeletedNodes(opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

### Parameters

| Name          | Type                    | Description                                                                                                                                                                                                                 | Notes                                          |
|---------------|-------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------|
| **skipCount** | **number**              | The number of entities that exist in the collection before those included in this list. If not supplied then the default value is 0.                                                                                        | [optional] [default to 0]                      |
| **maxItems**  | **number**              | The maximum number of items to return in the list.                                                                                                                                                                          | If not supplied then the default value is 100. | [optional] [default to 100] |
| **include**   | [**string**](string.md) | Returns additional information about the node. The following optional fields can be requested: `allowableOperations`, `aspectNames`, `association`, `isLink`, `isFavorite`, `isLocked`, `path`, `properties`, `permissions` | [optional]                                     |

**Return type**: [**DeletedNodesPaging**](DeletedNodesPaging.md)

<a name="requestDirectAccessUrl"></a>
## requestDirectAccessUrl
> DirectAccessUrlEntry requestDirectAccessUrl(nodeId)

Generate a direct access content url for a given deleted node

**Note:** this endpoint is available in Alfresco 7.1 and newer versions.

**Example**

```javascript
import { AlfrescoApi, TrashcanApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);
const nodeId = 'da2e6953-3850-408b-8284-3534dd777417';

trashcanApi.requestDirectAccessUrl(nodeId).then((data) => {
  console.log('URL generated successfully: ', data.contentUrl);
}, (error) => {
  console.error(error);
});
```

**Parameters**

| Name       | Type       | Description               |
|------------|------------|---------------------------|
| **nodeId** | **string** | The identifier of a node. |

**Return type**: [**DirectAccessUrlEntry**](DirectAccessUrlEntry.md)

<a name="requestRenditionDirectAccessUrl"></a>
## requestRenditionDirectAccessUrl
> DirectAccessUrlEntry requestRenditionDirectAccessUrl(nodeId, renditionId)

Generate a direct access content url for a given rendition of a deleted node

**Note:** this endpoint is available in Alfresco 7.1 and newer versions.

**Example**

```javascript
import { AlfrescoApi, TrashcanApi } from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const trashcanApi = new TrashcanApi(alfrescoApi);

const nodeId = 'da2e6953-3850-408b-8284-3534dd777417';
const renditionId = 'avatar';

trashcanApi.requestRenditionDirectAccessUrl(nodeId, renditionId).then((data) => {
  console.log('URL generated successfully: ', data.contentUrl);
}, (error) => {
  console.error(error);
});
```

**Parameters**

| Name            | Type       | Description                    |
|-----------------|------------|--------------------------------|
| **nodeId**      | **string** | The identifier of a node.      |
| **renditionId** | **string** | The identifier of a rendition. |

**Return type**: [**DirectAccessUrlEntry**](DirectAccessUrlEntry.md)

<a name="restoreDeletedNode"></a>
## restoreDeletedNode
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


**Example**

```javascript
import { AlfrescoApi, TrashcanApi} from '@alfresco/js-api';

const alfrescoApi = new AlfrescoApi({
    hostEcm: 'http://127.0.0.1:8080'
});

const nodeId = '<guid>';

const trashcanApi = new TrashcanApi(alfrescoApi);

trashcanApi.restoreDeletedNode(nodeId).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});
```

**Parameters**

| Name   | Type   | Description               |
|--------|--------|---------------------------|
| nodeId | string | The identifier of a node. | 

**Options**

| Name                       | Type                                                    | Description                                                   | Notes      |
|----------------------------|---------------------------------------------------------|---------------------------------------------------------------|------------|
| fields                     | string                                                  | A list of field names.                                        | [optional] |
| **deletedNodeBodyRestore** | [**DeletedNodeBodyRestore**](DeletedNodeBodyRestore.md) | The targetParentId if the node is restored to a new location. | [optional] | 

**Return type**: [**NodeEntry**](NodeEntry.md)

