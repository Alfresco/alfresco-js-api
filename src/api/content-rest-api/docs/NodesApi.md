# NodesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**copyNode**](NodesApi.md#copyNode) | **POST** /nodes/{nodeId}/copy | Copy a node
[**createAssociation**](NodesApi.md#createAssociation) | **POST** /nodes/{nodeId}/targets | Create node association
[**createNode**](NodesApi.md#createNode) | **POST** /nodes/{nodeId}/children | Create a node
[**createSecondaryChildAssociation**](NodesApi.md#createSecondaryChildAssociation) | **POST** /nodes/{nodeId}/secondary-children | Create secondary child
[**deleteAssociation**](NodesApi.md#deleteAssociation) | **DELETE** /nodes/{nodeId}/targets/{targetId} | Delete node association(s)
[**deleteNode**](NodesApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete a node
[**deleteSecondaryChildAssociation**](NodesApi.md#deleteSecondaryChildAssociation) | **DELETE** /nodes/{nodeId}/secondary-children/{childId} | Delete secondary child or children
[**getNode**](NodesApi.md#getNode) | **GET** /nodes/{nodeId} | Get a node
[**getNodeContent**](NodesApi.md#getNodeContent) | **GET** /nodes/{nodeId}/content | Get node content
[**listNodeChildren**](NodesApi.md#listNodeChildren) | **GET** /nodes/{nodeId}/children | List node children
[**listParents**](NodesApi.md#listParents) | **GET** /nodes/{nodeId}/parents | List parents
[**listSecondaryChildren**](NodesApi.md#listSecondaryChildren) | **GET** /nodes/{nodeId}/secondary-children | List secondary children
[**listSourceAssociations**](NodesApi.md#listSourceAssociations) | **GET** /nodes/{nodeId}/sources | List source associations
[**listTargetAssociations**](NodesApi.md#listTargetAssociations) | **GET** /nodes/{nodeId}/targets | List target associations
[**lockNode**](NodesApi.md#lockNode) | **POST** /nodes/{nodeId}/lock | Lock a node
[**moveNode**](NodesApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
[**unlockNode**](NodesApi.md#unlockNode) | **POST** /nodes/{nodeId}/unlock | Unlock a node
[**updateNode**](NodesApi.md#updateNode) | **PUT** /nodes/{nodeId} | Update a node
[**updateNodeContent**](NodesApi.md#updateNodeContent) | **PUT** /nodes/{nodeId}/content | Update node content


<a name="copyNode"></a>
# **copyNode**
> NodeEntry copyNode(nodeIdnodeBodyCopyopts)

Copy a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Copies the node **nodeId** to the parent folder node **targetParentId**. You specify the **targetParentId** in the request body.

The new node has the same name as the source node unless you specify a new **name** in the request body.

If the source **nodeId** is a folder, then all of its children are also copied.

If the source **nodeId** is a file, it's properties, aspects and tags are copied, it's ratings, comments and locks are not.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.copyNode(nodeIdnodeBodyCopyopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **nodeBodyCopy** | [**NodeBodyCopy**](NodeBodyCopy.md)| The targetParentId and, optionally, a new name which should include the file extension. | 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
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

### Return type

[**NodeEntry**](NodeEntry.md)

<a name="createAssociation"></a>
# **createAssociation**
> AssociationEntry createAssociation(nodeIdassociationBodyCreateopts)

Create node association

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Create an association, with the given association type, between the source **nodeId** and a target node.

**Note:** You can create more than one association by
specifying a list of associations in the JSON body like this:

JSON
[
  {
     \"targetId\": \"string\",
     \"assocType\": \"string\"
  },
  {
    \"targetId\": \"string\",
    \"assocType\": \"string\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.createAssociation(nodeIdassociationBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a source node. | 
 **associationBodyCreate** | [**AssociationBody**](AssociationBody.md)| The target node id and assoc type. | 
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

[**AssociationEntry**](AssociationEntry.md)

<a name="createNode"></a>
# **createNode**
> NodeEntry createNode(nodeIdnodeBodyCreateopts)

Create a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Create a node and add it as a primary child of node **nodeId**.

This endpoint supports both JSON and multipart/form-data (file upload).

**Using multipart/form-data**

Use the **filedata** field to represent the content to upload, for example, the following curl command will
create a node with the contents of test.txt in the test user's home folder.

curl -utest:test -X POST host:port/alfresco/api/-default-/public/alfresco/versions/1/nodes/-my-/children -F filedata=@test.txt

You can use the **name** field to give an alternative name for the new file.

You can use the **nodeType** field to create a specific type. The default is cm:content.

You can use the **renditions** field to create renditions (e.g. doclib) asynchronously upon upload.
Note that currently only one rendition can be requested. Also, as requesting rendition is a background process,
any rendition failure (e.g. No transformer is currently available) will not fail the whole upload and has the potential to silently fail.

Use **overwrite** to overwrite an existing file, matched by name. If the file is versionable,
the existing content is replaced.

When you overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version
should be created. The default for **majorVersion** is **false**.
Setting  **majorVersion** enables versioning of the node, if it is not already versioned.

When you overwrite existing content, you can use the **comment** field to add a version comment that appears in the
version history. This also enables versioning of this node, if it is not already versioned.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create a unique name using an integer suffix.

You can use the **relativePath** field to specify the folder structure to create relative to the node **nodeId**.
Folders in the **relativePath** that do not exist are created before the node is created.

Any other field provided will be treated as a property to set on the newly created node.

**Note:** setting properties of type d:content and d:category are not supported.

**Using JSON**

You must specify at least a **name** and **nodeType**. For example, to create a folder:
JSON
{
  \"name\":\"My Folder\",
  \"nodeType\":\"cm:folder\"
}


You can create an empty file like this:
JSON
{
  \"name\":\"My text file.txt\",
  \"nodeType\":\"cm:content\"
}

You can update binary content using the PUT /nodes/{nodeId} API method.

You can create a folder, or other node, inside a folder hierarchy:
JSON
{
  \"name\":\"My Special Folder\",
  \"nodeType\":\"cm:folder\",
  \"relativePath\":\"X/Y/Z\"
}

The **relativePath** specifies the folder structure to create relative to the node **nodeId**. Folders in the
**relativePath** that do not exist are created before the node is created.

You can set properties when you create a new node:
JSON
{
  \"name\":\"My Other Folder\",
  \"nodeType\":\"cm:folder\",
  \"properties\":
  {
    \"cm:title\":\"Folder title\",
    \"cm:description\":\"This is an important folder\"
  }
}

Any missing aspects are applied automatically. For example, **cm:titled** in the JSON shown above. You can set aspects
explicitly, if needed, using an **aspectNames** field.

**Note:** setting properties of type d:content and d:category are not supported.

Typically, for files and folders, the primary children are created within the parent folder using the default \"cm:contains\" assocType.
If the content model allows then it is also possible to create primary children with a different assoc type. For example:
JSON
{
  \"name\":\"My Node\",
  \"nodeType\":\"my:specialNodeType\",
  \"association\":
  {
    \"assocType\":\"my:specialAssocType\"
  }
}


Additional associations can be added after creating a node. You can also add associations at the time the node is created. This is
required, for example, if the content model specifies that a node has mandatory associations to one or more existing nodes. You can optionally
specify an array of **secondaryChildren** to create one or more secondary child associations, such that the newly created node acts as a parent node.
You can optionally specify an array of **targets** to create one or more peer associations such that the newly created node acts as a source node.
For example, to associate one or more secondary children at time of creation:
JSON
{
  \"name\":\"My Folder\",
  \"nodeType\":\"cm:folder\",
  \"secondaryChildren\":
    [ {\"childId\":\"abcde-01234-...\", \"assocType\":\"my:specialChildAssocType\"} ]
}

For example, to associate one or more targets at time of creation:
JSON
{
  \"name\":\"My Folder\",
  \"nodeType\":\"cm:folder\",
  \"targets\":
    [ {\"targetId\":\"abcde-01234-...\", \"assocType\":\"my:specialPeerAssocType\"} ]
}


**Note:** You can create more than one child by
specifying a list of nodes in the JSON body. For example, the following JSON
body creates two folders inside the specified **nodeId**, if the **nodeId** identifies
a folder:

JSON
[
  {
    \"name\":\"My Folder 1\",
    \"nodeType\":\"cm:folder\"
  },
  {
    \"name\":\"My Folder 2\",
    \"nodeType\":\"cm:folder\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'autoRename': true //  | If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.createNode(nodeIdnodeBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. You can also use one of these well-known aliases:
* -my-
* -shared-
* -root-
 | 
 **nodeBodyCreate** | [**NodeBodyCreate**](NodeBodyCreate.md)| The node information to create. | 
 **autoRename** | **boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
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

### Return type

[**NodeEntry**](NodeEntry.md)

<a name="createSecondaryChildAssociation"></a>
# **createSecondaryChildAssociation**
> ChildAssociationEntry createSecondaryChildAssociation(nodeIdsecondaryChildAssociationBodyCreateopts)

Create secondary child

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Create a secondary child association, with the given association type, between the parent **nodeId** and a child node.

**Note:** You can create more than one secondary child association by
specifying a list of associations in the JSON body like this:

JSON
[
  {
    \"childId\": \"string\",
    \"assocType\": \"string\"
  },
  {
    \"childId\": \"string\",
    \"assocType\": \"string\"
  }
]

If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:

JSON
{
  \"list\": {
    \"pagination\": {
      \"count\": 2,
      \"hasMoreItems\": false,
      \"totalItems\": 2,
      \"skipCount\": 0,
      \"maxItems\": 100
    },
    \"entries\": [
      {
        \"entry\": {
          ...
        }
      },
      {
        \"entry\": {
          ...
        }
      }
    ]
  }
}



### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.createSecondaryChildAssociation(nodeIdsecondaryChildAssociationBodyCreateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a parent node. | 
 **secondaryChildAssociationBodyCreate** | [**ChildAssociationBody**](ChildAssociationBody.md)| The child node id and assoc type. | 
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

[**ChildAssociationEntry**](ChildAssociationEntry.md)

<a name="deleteAssociation"></a>
# **deleteAssociation**
> deleteAssociation(nodeIdtargetIdopts)

Delete node association(s)

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Delete an association, or associations, from the source **nodeId* to a target node for the given association type.

If the association type is **not** specified, then all peer associations, of any type, in the direction
from source to target, are deleted.

**Note:** After removal of the peer association, or associations, from source to target, the two nodes may still have peer associations
in the other direction.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'assocType': assocType_example //  | Only delete associations of this type.
};

nodesApi.deleteAssociation(nodeIdtargetIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a source node. | 
 **targetId** | **string**| The identifier of a target node. | 
 **assocType** | **string**| Only delete associations of this type. | [optional] 

### Return type

null (empty response body)

<a name="deleteNode"></a>
# **deleteNode**
> deleteNode(nodeIdopts)

Delete a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Deletes the node **nodeId**.

If **nodeId** is a folder, then its children are also deleted.

Deleted nodes move to the trashcan unless the **permanent** query parameter is **true** and the current user is the owner of the node or an admin.

Deleting a node deletes it from its primary parent and also from any secondary parents. Peer associations are also deleted, where the deleted
node is either a source or target of an association. This applies recursively to any hierarchy of primary children of the deleted node.

**Note:** If the node is not permanently deleted, and is later successfully restored to its former primary parent, then the primary
child association is restored. This applies recursively for any primary children. No other secondary child associations or
peer associations are restored for any of the nodes in the primary parent-child hierarchy of restored nodes, regardless of whether the original
associations were to nodes inside or outside the restored hierarchy.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'permanent': true //  | If **true** then the node is deleted permanently, without moving to the trashcan.
Only the owner of the node or an admin can permanently delete the node.

};

nodesApi.deleteNode(nodeIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **permanent** | **boolean**| If **true** then the node is deleted permanently, without moving to the trashcan.
Only the owner of the node or an admin can permanently delete the node.
 | [optional] [default to false]

### Return type

null (empty response body)

<a name="deleteSecondaryChildAssociation"></a>
# **deleteSecondaryChildAssociation**
> deleteSecondaryChildAssociation(nodeIdchildIdopts)

Delete secondary child or children

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Delete secondary child associations between the parent **nodeId** and child nodes for the given association type.

If the association type is **not** specified, then all secondary child associations, of any type in the direction
from parent to secondary child, will be deleted. The child will still have a primary parent and may still be
associated as a secondary child with other secondary parents.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'assocType': assocType_example //  | Only delete associations of this type.
};

nodesApi.deleteSecondaryChildAssociation(nodeIdchildIdopts).then(() => {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a parent node. | 
 **childId** | **string**| The identifier of a child node. | 
 **assocType** | **string**| Only delete associations of this type. | [optional] 

### Return type

null (empty response body)

<a name="getNode"></a>
# **getNode**
> NodeEntry getNode(nodeIdopts)

Get a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Get information for node **nodeId**.

You can use the **include** parameter to return additional information.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'relativePath': relativePath_example //  | A path relative to the **nodeId**. If you set this,
information is returned on the node resolved by this path.

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.getNode(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. You can also use one of these well-known aliases:
* -my-
* -shared-
* -root-
 | 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
 | [optional] 
 **relativePath** | **string**| A path relative to the **nodeId**. If you set this,
information is returned on the node resolved by this path.
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

### Return type

[**NodeEntry**](NodeEntry.md)

<a name="getNodeContent"></a>
# **getNodeContent**
> getNodeContent(nodeIdopts)

Get node content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets the content of the node with identifier **nodeId**.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

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

nodesApi.getNodeContent(nodeIdopts).then(() => {
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

<a name="listNodeChildren"></a>
# **listNodeChildren**
> NodeChildAssociationPaging listNodeChildren(nodeIdopts)

List node children

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of children of the parent node **nodeId**.

Minimal information for each child is returned by default.

You can use the **include** parameter to return additional information.

The list of child nodes includes primary children and secondary children, if there are any.

You can use the **include** parameter (include=association) to return child association details
for each child, including the **assocTyp**e and the **isPrimary** flag.

The default sort order for the returned list is for folders to be sorted before files, and by ascending name.

You can override the default using **orderBy** to specify one or more fields to sort by. The default order is always ascending, but
you can use an optional **ASC** or **DESC** modifier to specify an ascending or descending sort order.

For example, specifying orderBy=name DESC returns a mixed folder/file list in descending **name** order.

You can use any of the following fields to order the results:
* isFolder
* name
* mimeType
* nodeType
* sizeInBytes
* modifiedAt
* createdAt
* modifiedByUser
* createdByUser


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'orderBy':  //  | A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.

  'where': where_example //  | Optionally filter the list. Here are some examples:

*   where=(isFolder=true)

*   where=(isFile=true)

*   where=(nodeType='my:specialNodeType')

*   where=(nodeType='my:specialNodeType INCLUDESUBTYPES')

*   where=(isPrimary=true)

*   where=(assocType='my:specialAssocType')

*   where=(isPrimary=false and assocType='my:specialAssocType')

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

  'relativePath': relativePath_example //  | Return information on children in the folder resolved by this path. The path is relative to **nodeId**.
  'includeSource': true //  | Also include **source** in addition to **entries** with folder information on the parent node – either the specified parent **nodeId**, or as resolved by **relativePath**.
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.listNodeChildren(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. You can also use one of these well-known aliases:
* -my-
* -shared-
* -root-
 | 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **orderBy** | [**string**](string.md)| A string to control the order of the entities returned in a list. You can use the **orderBy** parameter to
sort the list by one or more fields.

Each field has a default sort order, which is normally ascending order. Read the API method implementation notes
above to check if any fields used in this method have a descending default search order.

To sort the entities in a specific order, you can use the **ASC** and **DESC** keywords for any field.
 | [optional] 
 **where** | **string**| Optionally filter the list. Here are some examples:

*   where=(isFolder=true)

*   where=(isFile=true)

*   where=(nodeType='my:specialNodeType')

*   where=(nodeType='my:specialNodeType INCLUDESUBTYPES')

*   where=(isPrimary=true)

*   where=(assocType='my:specialAssocType')

*   where=(isPrimary=false and assocType='my:specialAssocType')
 | [optional] 
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
 **relativePath** | **string**| Return information on children in the folder resolved by this path. The path is relative to **nodeId**. | [optional] 
 **includeSource** | **boolean**| Also include **source** in addition to **entries** with folder information on the parent node – either the specified parent **nodeId**, or as resolved by **relativePath**. | [optional] 
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

[**NodeChildAssociationPaging**](NodeChildAssociationPaging.md)

<a name="listParents"></a>
# **listParents**
> NodeAssociationPaging listParents(nodeIdopts)

List parents

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of parent nodes that are associated with the current child **nodeId**.

The list includes both the primary parent and any secondary parents.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'where': where_example //  | Optionally filter the list by **assocType** and/or **isPrimary**. Here are some example filters:

*   where=(assocType='my:specialAssocType')

*   where=(isPrimary=true)

*   where=(isPrimary=false and assocType='my:specialAssocType')

  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties

  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'includeSource': true //  | Also include **source** (in addition to **entries**) with folder information on **nodeId**
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.listParents(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a child node. You can also use one of these well-known aliases:
* -my-
* -shared-
* -root-
 | 
 **where** | **string**| Optionally filter the list by **assocType** and/or **isPrimary**. Here are some example filters:

*   where=(assocType='my:specialAssocType')

*   where=(isPrimary=true)

*   where=(isPrimary=false and assocType='my:specialAssocType')
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on **nodeId** | [optional] 
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

[**NodeAssociationPaging**](NodeAssociationPaging.md)

<a name="listSecondaryChildren"></a>
# **listSecondaryChildren**
> NodeChildAssociationPaging listSecondaryChildren(nodeIdopts)

List secondary children

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of secondary child nodes that are associated with the current parent **nodeId**, via a secondary child association.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'where': where_example //  | Optionally filter the list by assocType. Here's an example:

*   where=(assocType='my:specialAssocType')

  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties

  'skipCount': 56 //  | The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.

  'maxItems': 56 //  | The maximum number of items to return in the list.
If not supplied then the default value is 100.

  'includeSource': true //  | Also include **source** (in addition to **entries**) with folder information on **nodeId**
  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.listSecondaryChildren(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a parent node. You can also use one of these well-known aliases:
* -my-
* -shared-
* -root-
 | 
 **where** | **string**| Optionally filter the list by assocType. Here's an example:

*   where=(assocType='my:specialAssocType')
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties
 | [optional] 
 **skipCount** | **number**| The number of entities that exist in the collection before those included in this list.
If not supplied then the default value is 0.
 | [optional] [default to 0]
 **maxItems** | **number**| The maximum number of items to return in the list.
If not supplied then the default value is 100.
 | [optional] [default to 100]
 **includeSource** | **boolean**| Also include **source** (in addition to **entries**) with folder information on **nodeId** | [optional] 
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

[**NodeChildAssociationPaging**](NodeChildAssociationPaging.md)

<a name="listSourceAssociations"></a>
# **listSourceAssociations**
> NodeAssociationPaging listSourceAssociations(nodeIdopts)

List source associations

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of source nodes that are associated with the current target **nodeId**.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'where': where_example //  | Optionally filter the list by **assocType**. Here's an example:

*   where=(assocType='my:specialAssocType')

  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.listSourceAssociations(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a target node. | 
 **where** | **string**| Optionally filter the list by **assocType**. Here's an example:

*   where=(assocType='my:specialAssocType')
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties
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

### Return type

[**NodeAssociationPaging**](NodeAssociationPaging.md)

<a name="listTargetAssociations"></a>
# **listTargetAssociations**
> NodeAssociationPaging listTargetAssociations(nodeIdopts)

List target associations

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Gets a list of target nodes that are associated with the current source **nodeId**.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'where': where_example //  | Optionally filter the list by **assocType**. Here's an example:

*   where=(assocType='my:specialAssocType')

  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.listTargetAssociations(nodeIdopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a source node. | 
 **where** | **string**| Optionally filter the list by **assocType**. Here's an example:

*   where=(assocType='my:specialAssocType')
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* aspectNames
* isLink
* isFavorite
* isLocked
* path
* properties
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

### Return type

[**NodeAssociationPaging**](NodeAssociationPaging.md)

<a name="lockNode"></a>
# **lockNode**
> NodeEntry lockNode(nodeIdnodeBodyLockopts)

Lock a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Places a lock on node **nodeId**.

**Note:** you can only lock files. More specifically, a node can only be locked if it is
of type cm:content or a subtype of cm:content.

The lock is owned by the current user, and prevents other users or processes from making updates to the node until the lock is released.

If the **timeToExpire** is not set or is zero, then the lock never expires.  Otherwise, the **timeToExpire** is the number of seconds before the lock expires.

When a lock expires, the lock is released.

If the node is already locked, and the user is the lock owner, then the lock is renewed with the new **timeToExpire**.

By default, a lock is applied that allows the owner to update or delete the node.
You can use **type** to change the lock type to one of the following:
* **ALLOW_OWNER_CHANGES** (default) changes to the node can be made only by the lock owner. This enum is the same value as the deprecated WRITE_LOCK described in org.alfresco.service.cmr.lock.LockType in the Alfresco Public Java API. This is the default value.
* **FULL** no changes by any user are allowed. This enum is the same value as the deprecated READ_ONLY_LOCK described in org.alfresco.service.cmr.lock.LockType in the Alfresco Public Java API.

By default, a lock is persisted in the database. You can create a volatile in-memory lock by setting the **lifetime** property to EPHEMERAL.
You might choose use EPHEMERAL locks, for example, if you are taking frequent short-term locks that you don't need
to be kept over a restart of the repository. In this case you don't need the
overhead of writing the locks to the database.

If a lock on the node cannot be taken, then an error is returned.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.lockNode(nodeIdnodeBodyLockopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **nodeBodyLock** | [**NodeBodyLock**](NodeBodyLock.md)| Lock details. | 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
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

### Return type

[**NodeEntry**](NodeEntry.md)

<a name="moveNode"></a>
# **moveNode**
> NodeEntry moveNode(nodeIdnodeBodyMoveopts)

Move a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Move the node **nodeId** to the parent folder node **targetParentId**.

The **targetParentId** is specified in the in request body.

The moved node retains its name unless you specify a new **name** in the request body.

If the source **nodeId** is a folder, then its children are also moved.

The move will effectively change the primary parent.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.moveNode(nodeIdnodeBodyMoveopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **nodeBodyMove** | [**NodeBodyMove**](NodeBodyMove.md)| The targetParentId and, optionally, a new name which should include the file extension. | 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
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

### Return type

[**NodeEntry**](NodeEntry.md)

<a name="unlockNode"></a>
# **unlockNode**
> NodeEntry unlockNode(nodeIdopts)

Unlock a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Deletes a lock on node **nodeId**.

The current user must be the owner of the locks or have admin rights, otherwise an error is returned.

If a lock on the node cannot be released, then an error is returned.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.unlockNode(nodeIdopts).then((data) => {
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

[**NodeEntry**](NodeEntry.md)

<a name="updateNode"></a>
# **updateNode**
> NodeEntry updateNode(nodeIdnodeBodyUpdateopts)

Update a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Updates the node **nodeId**. For example, you can rename a file or folder:
JSON
{
  \"name\":\"My new name\"
}

You can also set or update one or more properties:
JSON
{
  \"properties\":
  {
    \"cm:title\":\"Folder title\"
  }
}

**Note:** setting properties of type d:content and d:category are not supported.

**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.

You can add (or remove) *locallySet* permissions, if any, in addition to any inherited permissions.
You can also optionally disable (or re-enable) inherited permissions via *isInheritanceEnabled* flag:
JSON
{
  \"permissions\":
    {
      \"isInheritanceEnabled\": false,
      \"locallySet\":
        [
          {\"authorityId\": \"GROUP_special\", \"name\": \"Read\", \"accessStatus\":\"DENIED\"},
          {\"authorityId\": \"testuser\", \"name\": \"Contributor\", \"accessStatus\":\"ALLOWED\"}
        ]
    }
}

**Note:** if you want to add or remove locally set permissions then you must use **GET /nodes/{nodeId}** first to get the complete set of *locallySet* permissions.

**Note:** Currently there is no optimistic locking for updates, so they are applied in \"last one wins\" order.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.updateNode(nodeIdnodeBodyUpdateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **nodeBodyUpdate** | [**NodeBodyUpdate**](NodeBodyUpdate.md)| The node information to update. | 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
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

### Return type

[**NodeEntry**](NodeEntry.md)

<a name="updateNodeContent"></a>
# **updateNodeContent**
> NodeEntry updateNodeContent(nodeIdcontentBodyUpdateopts)

Update node content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.

Updates the content of the node with identifier **nodeId**.

The request body for this endpoint can be any text or binary stream.

The **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,
a new minor version is created by default.

Optionally a new **name** parameter can also be specified that must be unique within the parent folder. If specified and valid then this
will rename the node. If invalid then an error is returned and the content is not updated.

**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.
This is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for
tooling to accept an arbitrary file.


### Example
```javascript
import NodesApi from 'NodesApi';
import { AlfrescoApi } from '@alfresco/js-api';

this.alfrescoApi = new AlfrescoApi();
this.alfrescoApi.setConfig({
    hostEcm: 'http://127.0.0.1:8080'
});

let nodesApi = new NodesApi(this.alfrescoApi);

let opts = { 
  'majorVersion': true //  | If **true**, create a major version.
Setting this parameter also enables versioning of this node, if it is not already versioned.

  'comment': comment_example //  | Add a version comment which will appear in version history.
Setting this parameter also enables versioning of this node, if it is not already versioned.

  'name': name_example //  | Optional new name. This should include the file extension.
The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.
The character . must not be used at the end of the name.

  'include':  //  | Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions

  'fields':  //  | A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};

nodesApi.updateNodeContent(nodeIdcontentBodyUpdateopts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **string**| The identifier of a node. | 
 **contentBodyUpdate** | **string**| The binary content | 
 **majorVersion** | **boolean**| If **true**, create a major version.
Setting this parameter also enables versioning of this node, if it is not already versioned.
 | [optional] [default to false]
 **comment** | **string**| Add a version comment which will appear in version history.
Setting this parameter also enables versioning of this node, if it is not already versioned.
 | [optional] 
 **name** | **string**| Optional new name. This should include the file extension.
The name must not contain spaces or the following special characters: * \" < > \\ / ? : and |.
The character . must not be used at the end of the name.
 | [optional] 
 **include** | [**string**](string.md)| Returns additional information about the node. The following optional fields can be requested:
* allowableOperations
* association
* isLink
* isFavorite
* isLocked
* path
* permissions
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

### Return type

[**NodeEntry**](NodeEntry.md)

