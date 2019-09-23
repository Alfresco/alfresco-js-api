# AlfrescoCoreRestApi.NodesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNode**](NodesApi.md#addNode) | **POST** /nodes/{nodeId}/children | Create a node
[**copyNode**](NodesApi.md#copyNode) | **POST** /nodes/{nodeId}/copy | Copy a node
[**deleteNode**](NodesApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete a node
[**getDeletedNode**](NodesApi.md#getDeletedNode) | **GET** /deleted-nodes/{nodeId} | Get a deleted node
[**getDeletedNodes**](NodesApi.md#getDeletedNodes) | **GET** /deleted-nodes | Get deleted nodes
[**getFileContent**](NodesApi.md#getFileContent) | **GET** /nodes/{nodeId}/content | Get file content
[**getNode**](NodesApi.md#getNode) | **GET** /nodes/{nodeId} | Get a node
[**getNodeContent**](NodesApi.md#getNodeContent) | **GET** /nodes/{nodeId}/content | Get node content
[**getNodeChildren**](NodesApi.md#getNodeChildren) | **GET** /nodes/{nodeId}/children | Get node children
[**getParents**](NodesApi.md#getParents) | **GET** /nodes/{nodeId}/parents | Get parents
[**getSecondaryChildren**](NodesApi.md#getSecondaryChildren) | **GET** /nodes/{nodeId}/secondary-children | Get secondary children
[**getSourceAssociations**](NodesApi.md#getSourceAssociations) | **GET** /nodes/{nodeId}/sources | Get source associations
[**getTargetAssociations**](NodesApi.md#getTargetAssociations) | **GET** /nodes/{nodeId}/targets | Get target associations
[**lockNode**](NodesApi.md#lockNode) | **POST** /nodes/{nodeId}/lock | Lock a node
[**unlockNode**](NodesApi.md#unlockNode) | **POST** /nodes/{nodeId}/unlock | Unlock a node
[**moveNode**](NodesApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
[**purgeDeletedNode**](NodesApi.md#purgeDeletedNode) | **DELETE** /deleted-nodes/{nodeId} | Purge a deleted node
[**restoreNode**](NodesApi.md#restoreNode) | **POST** /deleted-nodes/{nodeId}/restore | Restore a deleted node
[**updateNodeContent**](NodesApi.md#updateNodeContent) | **PUT** /nodes/{nodeId}/content | Update file content
[**updateNode**](NodesApi.md#updateNode) | **PUT** /nodes/{nodeId} | Update a node


<a name="addNode"></a>
# **addNode**
> NodeEntry addNode(nodeId, nodeBody, opts)

Create a node

Creates a node as a (primary) child of the node with identifier **nodeId**.

You must specify at least a **name** and **nodeType**. For example, to create a folder:
```JSON
{
  "name":"My Folder",
  "nodeType":"cm:folder"
}
```

You can create an empty file like this:
```JSON
{
  "name":"My text file.txt",
  "nodeType":"cm:content",
  "content":
   {
     "mimeType":"text/plain"
   }
}
```
You can update binary content using the ```PUT /nodes/{nodeId}``` API method.

You can create a folder, or other node, inside a folder hierarchy:
```JSON
{
  "name":"My Special Folder",
  "nodeType":"cm:folder",
  "relativePath":"X/Y/Z"
}
```
The **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the
**relativePath** that do not exist are created before the node is created.

You can set properties when you create a new node:
```JSON
{
  "name":"My Other Folder",
  "nodeType":"cm:folder",
  "properties":
    {
      "cm:title":"Folder title",
      "cm:description":"This is an important folder"
    }
}
```
Any missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects
explicitly set, if needed, using an **aspectNames** field.

This API method also supports file upload using multipart/form-data.

Use the **filedata** field to represent the content to upload.
You can use a **filename** field to give an alternative name for the new file.

Use **overwrite** to overwrite an existing file, matched by name. If the file is versionable,
the existing content is replaced.

When you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version
should be created. The default for **majorVersion** is **false**.
Setting  **majorVersion** enables versioning of the node, if it is not already versioned.

When you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the
version history. This also enables versioning of this node, if it is not already versioned.

You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then
the API method tries to create
a unique name using an integer suffix.

Any field in the JSON body defined below can also be passed as a form-data field.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:  -my-,  -shared- , -root-

var nodeBody = new this.alfrescoJsApi.core.NodeBody1(); // {NodeBody1} The node information to create.

var opts = {
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:  path , isLink ,  allowableOperations
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.nodesApi.addNode(nodeId, nodeBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:* -my-*-shared-*-root- |
 **nodeBody** | [**NodeBody1**](NodeBody1.md)| The node information to create. |
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include* parameter, then the fields specified in the **include* parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="copyNode"></a>
# **copyNode**
> NodeEntry copyNode(nodeId, copyBody, opts)

Copy a node

Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.

The new node has the same name as the source node unless you specify a new **name** in the request body.

If the source **nodeId** is a folder, then all of its children are also copied.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: *-my-*-shared-*-root-

var copyBody = new this.alfrescoJsApi.core.CopyBody(); // {CopyBody} The targetParentId and, optionally, a new name.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:  path , isLink , allowableOperations
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.nodesApi.copyNode(nodeId, copyBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **copyBody** | [**CopyBody**](CopyBody.md)| The targetParentId and, optionally, a new name. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNode"></a>
# **deleteNode**
> deleteNode(nodeId, opts)

Delete a node

Deletes the node with identifier **nodeId**.
If the **nodeId** is a folder, then its children are also deleted.
Deleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.

Deleting a node removes the child associations, ie. both primary and also secondary, if any.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'permanent': false // {Boolean} If **true** then the node is deleted permanently, without it moving to the trashcan.
You must be the owner or an admin to permanently delete the node.

};
this.alfrescoJsApi.core.nodesApi.deleteNode(nodeId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **permanent** | **Boolean**| If **true** then the node is deleted permanently, without it moving to the trashcan. You must be the owner or an admin to permanently delete the node.  | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeletedNode"></a>
# **getDeletedNode**
> DeletedNodeEntry getDeletedNode(nodeId, opts)

Get a deleted node

Returns a specific deleted node identified by **nodeId**.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: path , isLink, allowableOperations
};
this.alfrescoJsApi.core.nodesApi.getDeletedNode(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested * path * isLink * allowableOperations  | [optional]

### Return type

[**DeletedNodeEntry**](DeletedNodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeletedNodes"></a>
# **getDeletedNodes**
> DeletedNodesPaging getDeletedNodes(opts)

Get deleted nodes

Returns a list of deleted nodes for the current user.
If the current user is an administrator deleted nodes
for all users will be returned.
The list of deleted nodes will be ordered with the most recently deleted node at the top of the list.


### Example
```javascript
var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'include': ["include_example"], /* {[String]} Returns additional information about the node. The following optional fields can be requested:
                                    * properties
                                    * aspectNames
                                    * path
                                    * isLink
                                    * allowableOperations
                                    * association */

};
this.alfrescoJsApi.core.nodesApi.getDeletedNodes(opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * properties * aspectNames * path * isLink * allowableOperations * association | [optional]

### Return type

[**DeletedNodesPaging**](DeletedNodesPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileContent"></a>
# **getFileContent**
> getFileContent(nodeId, opts)

Get file content

Returns the file content of the node with identifier **nodeId**.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = {
  'attachment': true, /* {Boolean} **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.
                        You can only set this parameter to **false** if the content type of the file is in the supported list;
                        for example, certain image files and PDF files.

                        If the content type is not supported for preview, then a value of **false**  is ignored, and
                        the attachment will be returned in the response. */

    'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") /* {Date} Only returns the content if it has been modified since the date provided.
                        Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.*/

};
this.alfrescoJsApi.core.nodesApi.getFileContent(nodeId, opts).then(function(data) {
  fs.writeFile('./test/namefile.extension', data, function(error) {
         if (error) {
             console.error(error);
             return; 
         }
         console.log('The file was saved!');
     });
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.  **false** means a web browser may preview the file in a new tab or window, but not download the file. You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files. If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.  | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNode"></a>
# **getNode**
> NodeEntry getNode(nodeId, opts)

Get a node

Get information for the node with identifier **nodeId**.

### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: -my- , -shared- , -root-
var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: path , isLink , allowableOperations
  'relativePath': "relativePath_example", // {String} If specified, returns information on the node resolved by this path. The path is relative to the specified **nodeId**
  'fields': ["fields_example"] /* {[String]} A list of field names.

                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.nodesApi.getNode(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **relativePath** | **String**| If specified, returns information on the node resolved by this path. The path is relative to the specified **nodeId** | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodeContent"></a>
# **getNodeContent**
> getNodeContent(nodeId, opts)

Get node content

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets the content of the node with identifier **nodeId**. 

### Example
```javascript
var nodeId = "nodeId_example"; // String | The identifier of a node.

var opts = { 
  'attachment': true, // Boolean | **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response. 
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // Date | Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`. 
};
this.alfrescoJsApi.core.nodesApi.getNodeContent(nodeId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment. **false** means a web browser may preview the file in a new tab or window, but not download the file.  You can only set this parameter to **false** if the content type of the file is in the supported list; for example, certain image files and PDF files.  If the content type is not supported for preview, then a value of **false**  is ignored, and the attachment will be returned in the response.  | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided. Use the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.  | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


<a name="getNodeChildren"></a>
# **getNodeChildren**
> NodePaging getNodeChildren(nodeId, opts)

Get node children

Returns the children of the node with identifier **nodeId**.
Minimal information for each child is returned by default.
You can use the **include** parameter to return additional information.

The list of child nodes includes primary children and also secondary children, if any.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: -my- , -share d- , -root-


var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", /* {String} If not specified then default sort is for folders to be sorted before files, and by ascending name  i.e. "orderBy=isFolder DESC,name ASC".
                                This default can be completely overridden by specifying a specific orderBy consisting of one, two or
                                three comma-separated list of properties (with optional ASCending or DESCending), for example,
                                specifying “CorderBy=name DESC“D would return a mixed folder/file list.

                                The following properties can be used to order the results:
                                * isFolder
                                * name
                                * mimeType
                                * nodeType
                                * sizeInBytes
                                * modifiedAt
                                * createdAt
                                * modifiedByUser
                                * createdByUser  */

  'where': "where_example", /* {String} Optionally filter the list. Here are some examples:
                                *   where=(isFolder=true)
                                *   where=(isFile=true)
                                *   where=(nodeType='my:specialtype')
                                *   where=(nodeType='my:specialtype' INCLUDESUBTYPES) */
  'include': ["include_example"], /* {[String]} Returns additional information about the node. The following optional fields can be requested:
                                        * properties
                                        * aspectNames
                                        * path
                                        * isLink
                                        * allowableOperations
                                        * association */
  'relativePath': "relativePath_example", // {String} Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
  'includeSource': true, // {Boolean} Also include "source" (in addition to "entries") with folder information on parent node (either the specified parent "nodeId" or as resolved by "relativePath")
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.nodesApi.getNodeChildren(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **orderBy** | **String**| If not specified then default sort is for folders to be sorted before files, and by ascending name i.e. "orderBy=isFolder DESC,name ASC". This default can be completely overridden by specifying a specific orderBy consisting of one, two or three comma-separated list of properties (with optional ASCending or DESCending), for example, specifying “CorderBy=name DESC“D would return a mixed folder/file list. The following properties can be used to order the results: * isFolder * name * mimeType * nodeType * sizeInBytes * modifiedAt * createdAt * modifiedByUser * createdByUser | [optional]
 **where** | **String**| Optionally filter the list. Here are some examples: *   where=(isFolder=true) *   where=(isFile=true) *   where=(nodeType='my:specialtype') *   where=(nodeType='my:specialtype' INCLUDESUBTYPES)  | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * properties * aspectNames * path * isLink * allowableOperations * association | [optional]
 **relativePath** | **String**| Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder) | [optional]
 **includeSource** | **Boolean**| Also include "source" (in addition to "entries") with folder information on parent node (either the specified parent "nodeId" or as resolved by "relativePath") | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
 
 
<a name="getParents"></a>
# **getParents**
> NodeAssociationPaging getParents(nodeId, opts)

List parents

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of parent nodes that are associated with the current child **nodeId**.  The list includes both the primary parent and any secondary parents. 

### Example
```javascript
var nodeId = "nodeId_example"; // String | The identifier of a child node. You can also use one of these well-known aliases: * -my- * -shared- * -root- 

var opts = { 
  'where': "where_example", // String | Optionally filter the list by **assocType** and/or **isPrimary**. Here are some example filters:  *   ```where=(assocType='my:specialAssocType')```  *   ```where=(isPrimary=true)```  *   ```where=(isPrimary=false and assocType='my:specialAssocType')``` 
  'include': ["include_example"], // [String] | Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with folder information on **nodeId**
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.core.nodesApi.getParents(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a child node. You can also use one of these well-known aliases: * -my- * -shared- * -root-  | 
 **where** | **String**| Optionally filter the list by **assocType** and/or **isPrimary**. Here are some example filters:  *   &#x60;&#x60;&#x60;where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isPrimary&#x3D;true)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isPrimary&#x3D;false and assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties  | [optional] 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on **nodeId** | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**NodeAssociationPaging**](NodeAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getSecondaryChildren"></a>
# **getSecondaryChildren**
> NodeChildAssociationPaging getSecondaryChildren(nodeId, opts)

List secondary children

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of secondary child nodes that are associated with the current parent **nodeId**, via a secondary child association. 

### Example
```javascript
var nodeId = "nodeId_example"; // String | The identifier of a parent node. You can also use one of these well-known aliases: * -my- * -shared- * -root- 

var opts = { 
  'where': "where_example", // String | Optionally filter the list by assocType. Here's an example:  *   where=(assocType='my:specialAssocType') 
  'include': ["include_example"], // [String] | Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with folder information on **nodeId**
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.getSecondaryChildren(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a parent node. You can also use one of these well-known aliases: * -my- * -shared- * -root-  | 
 **where** | **String**| Optionally filter the list by assocType. Here&#39;s an example:  *   where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties  | [optional] 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on **nodeId** | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**NodeChildAssociationPaging**](NodeChildAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json


<a name="getSourceAssociations"></a>
# **getSourceAssociations**
> NodeAssociationPaging getSourceAssociations(nodeId, opts)

List source associations

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of source nodes that are associated with the current target **nodeId**. 

### Example
```javascript
var nodeId = "nodeId_example"; // String | The identifier of a target node.

var opts = { 
  'where': "where_example", // String | Optionally filter the list by **assocType**. Here's an example:  *   ```where=(assocType='my:specialAssocType')``` 
  'include': ["include_example"], // [String] | Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.core.nodesApi.getSourceAssociations(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a target node. | 
 **where** | **String**| Optionally filter the list by **assocType**. Here&#39;s an example:  *   &#x60;&#x60;&#x60;where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**NodeAssociationPaging**](NodeAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getTargetAssociations"></a>
# **getTargetAssociations**
> NodeAssociationPaging getTargetAssociations(nodeId, , opts)

List target associations

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Gets a list of target nodes that are associated with the current source **nodeId**. 

### Example
```javascript
var nodeId = "nodeId_example"; // String | The identifier of a source node.

var opts = { 
  'where': "where_example", // String | Optionally filter the list by **assocType**. Here's an example:  *   ```where=(assocType='my:specialAssocType')``` 
  'include': ["include_example"], // [String] | Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.core.nodesApi.getTargetAssociations(nodeId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a source node. | 
 **where** | **String**| Optionally filter the list by **assocType**. Here&#39;s an example:  *   &#x60;&#x60;&#x60;where&#x3D;(assocType&#x3D;&#39;my:specialAssocType&#39;)&#x60;&#x60;&#x60;  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * allowableOperations * aspectNames * isLink * isLocked * path * properties  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**NodeAssociationPaging**](NodeAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lockNode"></a>
# **lockNode**
> NodeEntry lockNode(nodeIdnodeBodyLock, opts)

Lock a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Places a lock on node **nodeId**.  **Note:** you can only lock files. More specifically, a node can only be locked if it is of type &#x60;cm:content&#x60; or a subtype of &#x60;cm:content&#x60;.  The lock is owned by the current user, and prevents other users or processes from making updates to the node until the lock is released.    If the **timeToExpire** is not set or is zero, then the lock never expires.  Otherwise, the **timeToExpire** is the number of seconds before the lock expires.    When a lock expires, the lock is released.  If the node is already locked, and the user is the lock owner, then the lock is renewed with the new **timeToExpire**.          By default, a lock is applied that allows the owner to update or delete the node. You can use **type** to change the lock type to one of the following:  * **ALLOW_OWNER_CHANGES** (default) changes to the node can be made only by the lock owner. This enum is the same value as the deprecated WRITE_LOCK described in &#x60;org.alfresco.service.cmr.lock.LockType&#x60; in the Alfresco Public Java API. This is the default value. * **FULL** no changes by any user are allowed. This enum is the same value as the deprecated READ_ONLY_LOCK described in &#x60;org.alfresco.service.cmr.lock.LockType&#x60; in the Alfresco Public Java API.  By default, a lock is persisted in the database. You can create a volatile in-memory lock by setting the **lifetime** property to EPHEMERAL. You might choose use EPHEMERAL locks, for example, if you are taking frequent short-term locks that you don&#39;t need  to be kept over a restart of the repository. In this case you don&#39;t need the  overhead of writing the locks to the database.  If a lock on the node cannot be taken, then an error is returned.          

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco_content_services_rest_api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME';
basicAuth.password = 'YOUR PASSWORD';

var apiInstance = new AlfrescoCoreRestApi.NodesApi();

var nodeId = "nodeId_example"; // String | The identifier of a node.

var nodeBodyLock = new AlfrescoCoreRestApi.NodeBodyLock(); // NodeBodyLock | Lock details.

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
apiInstance.lockNode(nodeIdnodeBodyLock, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **nodeBodyLock** | [**NodeBodyLock**](NodeBodyLock.md)| Lock details. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="lockNode"></a>
# **lockNode**
> NodeEntry lockNode(nodeIdnodeBodyLock, opts)

Lock a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Places a lock on node **nodeId**.  **Note:** you can only lock files. More specifically, a node can only be locked if it is of type &#x60;cm:content&#x60; or a subtype of &#x60;cm:content&#x60;.  The lock is owned by the current user, and prevents other users or processes from making updates to the node until the lock is released.    If the **timeToExpire** is not set or is zero, then the lock never expires.  Otherwise, the **timeToExpire** is the number of seconds before the lock expires.    When a lock expires, the lock is released.  If the node is already locked, and the user is the lock owner, then the lock is renewed with the new **timeToExpire**.          By default, a lock is applied that allows the owner to update or delete the node. You can use **type** to change the lock type to one of the following:  * **ALLOW_OWNER_CHANGES** (default) changes to the node can be made only by the lock owner. This enum is the same value as the deprecated WRITE_LOCK described in &#x60;org.alfresco.service.cmr.lock.LockType&#x60; in the Alfresco Public Java API. This is the default value. * **FULL** no changes by any user are allowed. This enum is the same value as the deprecated READ_ONLY_LOCK described in &#x60;org.alfresco.service.cmr.lock.LockType&#x60; in the Alfresco Public Java API.  By default, a lock is persisted in the database. You can create a volatile in-memory lock by setting the **lifetime** property to EPHEMERAL. You might choose use EPHEMERAL locks, for example, if you are taking frequent short-term locks that you don&#39;t need  to be kept over a restart of the repository. In this case you don&#39;t need the  overhead of writing the locks to the database.  If a lock on the node cannot be taken, then an error is returned.          

### Example
```javascript
var nodeId = "nodeId_example"; // String | The identifier of a node.

var nodeBodyLock = new AlfrescoCoreRestApi.NodeBodyLock(); // NodeBodyLock | Lock details.

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.core.nodesApi..lockNode(nodeIdnodeBodyLock, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **nodeBodyLock** | [**NodeBodyLock**](NodeBodyLock.md)| Lock details. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
 
<a name="unlockNode"></a>
# **unlockNode**
> NodeEntry unlockNode(nodeId, opts)

Unlock a node

**Note:** this endpoint is available in Alfresco 5.2 and newer versions.  Deletes a lock on node **nodeId**.  The current user must be the owner of the locks or have admin rights, otherwise an error is returned.  If a lock on the node cannot be released, then an error is returned. 

### Example
```javascript
var nodeId = "nodeId_example"; // String | The identifier of a node.

var opts = { 
  'include': ["include_example"] // [String] | Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions 
  'fields': ["fields_example"], // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.core.nodesApi..unlockNode(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * allowableOperations * association * isLink * isLocked * path * permissions  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json
  
<a name="moveNode"></a>
# **moveNode**
> NodeEntry moveNode(nodeIdnodeBodyMove, opts)

<a name="moveNode"></a>
# **moveNode**
> NodeEntry moveNode(nodeId, moveBody, opts)

Move a node

Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.
The **targetParentId** is specified in the in request body.

The moved node retains its name unless you specify a new **name** in the request body.

If the source **nodeId** is a folder, then all of its children are also moved.

The move will effectively change the primary parent


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: -my- , -share d- , -root-

var moveBody = new this.alfrescoJsApi.core.MoveBody(); // {MoveBody} The targetParentId and, optionally, a new name.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:  path , isLink , allowableOperations
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.nodesApi.moveNode(nodeId, moveBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **moveBody** | [**MoveBody**](MoveBody.md)| The targetParentId and, optionally, a new name. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth  The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="purgeDeletedNode"></a>
# **purgeDeletedNode**
> purgeDeletedNode(nodeId)

Purge a deleted node

Permanently removes the deleted node identified by **nodeId**.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

this.alfrescoJsApi.core.nodesApi.purgeDeletedNode(nodeId).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="restoreNode"></a>
# **restoreNode**
> NodeEntry restoreNode(nodeId)

Restore a deleted node

Attempts to restore the deleted node identified by **nodeId** to its original location.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

this.alfrescoJsApi.core.nodesApi.restoreNode(nodeId).then(function(data) {
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

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateNodeContent"></a>
# **updateNodeContent**
> NodeEntry updateNodeContent(nodeId, contentBody, opts)

Update file content

Updates the content of the node with identifier **nodeId**.

The request body for this endpoint can be any text or binary stream. The Content-Type header should be set
correctly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.

The **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,
a new minor version is created by default.

**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.
This is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for
tooling to accept an arbitrary file.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node.

var contentBody = "B"; // {String} The binary content

var opts = {
  'majorVersion': false, // {Boolean} If **true**, create a major version. Setting this parameter also enables versioning of this node, if it is not already versioned.
  'comment': "comment_example", // {String} Add a version comment which will appear in version history. Setting this parameter also enables versioning of this node, if it is not already versioned.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations
  'fields': ["fields_example"] /* {[String]} A list of field names.
                        You can use this parameter to restrict the fields
                        returned within a response if, for example, you want to save on overall bandwidth.

                        The list applies to a returned individual
                        entity or entries within a collection.

                        If the API method also supports the **include**
                        parameter, then the fields specified in the **include**
                        parameter are returned in addition to those specified in the **fields** parameter. */

};
this.alfrescoJsApi.core.nodesApi.updateNodeContent(nodeId, contentBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. |
 **contentBody** | **String**| The binary content |
 **majorVersion** | **Boolean**| If **true**, create a major version. Setting this parameter also enables versioning of this node, if it is not already versioned. | [optional] [default to false]
 **comment** | **String**| Add a version comment which will appear in version history. Setting this parameter also enables versioning of this node, if it is not already versioned. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="updateNode"></a>
# **updateNode**
> NodeEntry updateNode(nodeId, nodeBody, opts)

Update a node

Updates the node with identifier **nodeId**. For example, you can rename a file or folder:
```JSON
{
  "name":"My new name",
}
```
You can also set or update one or more properties:
```JSON
{
  "properties":
    {
      "cm:title":"Folder title"
    }
}
```
**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.

**Note:** Currently there is no optimistic locking for updates, so they are applied in "last one wins" order.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases: * -my- * -shared- * -root-

var nodeBody = new this.alfrescoJsApi.core.NodeBody(); // {NodeBody} The node information to update.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations
  'fields': ["fields_example"] // {[String]} A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.
};
this.alfrescoJsApi.core.nodesApi.updateNode(nodeId, nodeBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root- |
 **nodeBody** | [**NodeBody**](NodeBody.md)| The node information to update. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations  | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

