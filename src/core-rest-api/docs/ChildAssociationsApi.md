# AlfrescoCoreRestApi.ChildAssociationsApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/alfresco/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**addNode**](ChildAssociationsApi.md#addNode) | **POST** /nodes/{nodeId}/children | Create a node
[**addSecondaryChildAssoc**](ChildAssociationsApi.md#addSecondaryChildAssoc) | **POST** /nodes/{parentId}/secondary-children | Add secondary child
[**deleteNode**](ChildAssociationsApi.md#deleteNode) | **DELETE** /nodes/{nodeId} | Delete a node
[**getNodeChildren**](ChildAssociationsApi.md#getNodeChildren) | **GET** /nodes/{nodeId}/children | Get node children
[**listParents**](ChildAssociationsApi.md#listParents) | **GET** /nodes/{childId}/parents | List parents
[**listSecondaryChildAssociations**](ChildAssociationsApi.md#listSecondaryChildAssociations) | **GET** /nodes/{parentId}/secondary-children | List secondary children
[**moveNode**](ChildAssociationsApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
[**removeSecondaryChildAssoc**](ChildAssociationsApi.md#removeSecondaryChildAssoc) | **DELETE** /nodes/{parentId}/secondary-children/{childId} | Remove secondary child (or children)


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
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:
* -my-
* -shared-
* -root-


var nodeBody = new this.alfrescoJsApi.core.NodeBody1(); // {NodeBody1} The node information to create.

var opts = {
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:
* path
* isLink
* allowableOperations

  'fields': ["fields_example"] // {[String]} A list of field names.

You can use this parameter to restrict the fields
returned within a response if, for example, you want to save on overall bandwidth.

The list applies to a returned individual
entity or entries within a collection.

If the API method also supports the **include**
parameter, then the fields specified in the **include**
parameter are returned in addition to those specified in the **fields** parameter.

};
this.alfrescoJsApi.core.childAssociationsApi.addNode(nodeId, nodeBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-   |
 **nodeBody** | [**NodeBody1**](NodeBody1.md)| The node information to create. |
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations  | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="addSecondaryChildAssoc"></a>
# **addSecondaryChildAssoc**
> addSecondaryChildAssoc(parentId, assocChildBody)

Add secondary child

Add secondary child association, with given association type, between parent and child node.


### Example
```javascript
var parentId = "parentId_example"; // {String} The identifier of a node.

var assocChildBody = new this.alfrescoJsApi.core.AssocChildBody(); // {AssocChildBody} The child node id and assoc type.

this.alfrescoJsApi.core.childAssociationsApi.addSecondaryChildAssoc(parentId, assocChildBody).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| The identifier of a node. |
 **assocChildBody** | [**AssocChildBody**](AssocChildBody.md)| The child node id and assoc type. |

### Return type

null (empty response body)

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
  'permanent': false // {Boolean} If **true** then the node is deleted permanently, without it moving to the trashcan.You must be the owner or an admin to permanently delete the node.
};
this.alfrescoJsApi.core.childAssociationsApi.deleteNode(nodeId, opts).then(function() {
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

<a name="getNodeChildren"></a>
# **getNodeChildren**
> NodePaging getNodeChildren(nodeId, opts)

Get node children

Returns the children of the node with identifier **nodeId**.
Minimal information for each child is returned by default.
You can use the **include** parameter to return addtional information.

The list of child nodes includes primary children and also secondary children, if any.


### Example
```javascript
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:  -my- , -shared- , -root-
var opts = {
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", /* {String} If not specified then default sort is for folders to be sorted before files, and by ascending name i.e. "orderBy=isFolder DESC,name ASC".
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
                                    * createdByUser*/

  'where': "where_example", /* {String} Optionally filter the list. Here are some examples:
                            *   where=(isFolder=true)
                            *   where=(isFile=true)
                            *   where=(nodeType='my:specialtype')
                            *   where=(nodeType='my:specialtype' INCLUDESUBTYPES)*/

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
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.childAssociationsApi.getNodeChildren(nodeId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-   |
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional]
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional]
 **orderBy** | **String**| If not specified then default sort is for folders to be sorted before files, and by ascending name i.e. "orderBy=isFolder DESC,name ASC". This default can be completely overridden by specifying a specific orderBy consisting of one, two or three comma-separated list of properties (with optional ASCending or DESCending), for example, specifying “CorderBy=name DESC“D would return a mixed folder/file list. The following properties can be used to order the results:* isFolder * name * mimeType * nodeType * sizeInBytes * modifiedAt * createdAt * modifiedByUser * createdByUser | [optional]
 **where** | **String**| Optionally filter the list. Here are some examples: *   where=(isFolder=true) *   where=(isFile=true) *   where=(nodeType='my:specialtype') *   where=(nodeType='my:specialtype' INCLUDESUBTYPES)  | [optional]
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * properties * aspectNames * path * isLink * allowableOperations * association | [optional]
 **relativePath** | **String**| Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder) | [optional]
 **includeSource** | **Boolean**| Also include "source" (in addition to "entries") with folder information on parent node (either the specified parent "nodeId" or as resolved by "relativePath") | [optional]
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

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listParents"></a>
# **listParents**
> NodeAssocPaging listParents(childId, opts)

List parents

Returns a list of parent nodes that point to (ie. are associated with) the current child node.

This inclues both the primary parent and also secondary parents, if any.


### Example
```javascript
var childId = "childId_example"; // {String} The identifier of a node.

var opts = {
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.childAssociationsApi.listParents(childId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **childId** | **String**| The identifier of a node. |
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')  | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include* parameter are returned in addition to those specified in the **fields** parameter.  | [optional]

### Return type

[**NodeAssocPaging**](NodeAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listSecondaryChildAssociations"></a>
# **listSecondaryChildAssociations**
> NodeChildAssocPaging listSecondaryChildAssociations(parentId, opts)

List secondary children

Returns a list of secondary child nodes that are associated with the current parent node, via a secondary child association.


### Example
```javascript
var parentId = "parentId_example"; // {String} The identifier of a node.

var opts = {
  'assocType': "assocType_example", // {String} Restrict the returned results to only those of the given association type
  'where': "where_example", // {String} Optionally filter the list by assocType. Here's an example:*   where=(assocType='my:assoctype')
  'include': "include_example", // {String} Return additional info, eg. aspect, properties, path, isLink
  'fields': ["fields_example"] /* {[String]} A list of field names.
                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.childAssociationsApi.listSecondaryChildAssociations(parentId, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| The identifier of a node. |
 **assocType** | **String**| Restrict the returned results to only those of the given association type | [optional]
 **where** | **String**| Optionally filter the list by assocType. Here's an example: *   where=(assocType='my:assoctype')  | [optional]
 **include** | **String**| Return additional info, eg. aspect, properties, path, isLink | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeChildAssocPaging**](NodeChildAssocPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

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
var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:  -my- , -shared- , -root-

var moveBody = new this.alfrescoJsApi.core.MoveBody(); // {MoveBody} The targetParentId and, optionally, a new name.

var opts = {
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations
  'fields': ["fields_example"] /* {[String]} A list of field names.

                                You can use this parameter to restrict the fields
                                returned within a response if, for example, you want to save on overall bandwidth.

                                The list applies to a returned individual
                                entity or entries within a collection.

                                If the API method also supports the **include**
                                parameter, then the fields specified in the **include**
                                parameter are returned in addition to those specified in the **fields** parameter.*/

};
this.alfrescoJsApi.core.childAssociationsApi.moveNode(nodeId, moveBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases: -my-   ,  -shared-   or   -root-  |
 **moveBody** | [**MoveBody**](MoveBody.md)| The targetParentId and, optionally, a new name. |
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested: * path * isLink * allowableOperations  | [optional]
 **fields** | [**[String]**](String.md)| A list of field names. You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth. The list applies to a returned individual entity or entries within a collection. If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. | [optional]

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="removeSecondaryChildAssoc"></a>
# **removeSecondaryChildAssoc**
> removeSecondaryChildAssoc(parentId, childId, opts)

Remove secondary child (or children)

Remove secondary child association(s) between parent and child node for given association type.

If association type is not specified then all secondary child associations between parent and child are removed.


### Example
```javascript
var parentId = "parentId_example"; // {String} The identifier of a node.

var childId = "childId_example"; // {String} The identifier of a node.

var opts = {
  'assocType': "assocType_example" // {String} Restrict the delete to only those of the given association type
};
this.alfrescoJsApi.core.childAssociationsApi.removeSecondaryChildAssoc(parentId, childId, opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parentId** | **String**| The identifier of a node. |
 **childId** | **String**| The identifier of a node. |
 **assocType** | **String**| Restrict the delete to only those of the given association type | [optional]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

