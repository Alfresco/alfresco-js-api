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
[**getNodeChildren**](NodesApi.md#getNodeChildren) | **GET** /nodes/{nodeId}/children | Get node children
[**moveNode**](NodesApi.md#moveNode) | **POST** /nodes/{nodeId}/move | Move a node
[**purgeDeletedNode**](NodesApi.md#purgeDeletedNode) | **DELETE** /deleted-nodes/{nodeId} | Purge a deleted node
[**restoreNode**](NodesApi.md#restoreNode) | **POST** /deleted-nodes/{nodeId}/restore | Restore a deleted node
[**updateFileContent**](NodesApi.md#updateFileContent) | **PUT** /nodes/{nodeId}/content | Update file content
[**updateNode**](NodesApi.md#updateNode) | **PUT** /nodes/{nodeId} | Update a node


<a name="addNode"></a>
# **addNode**
> NodeEntry addNode(nodeId, nodeBody, opts)

Create a node

Creates a node as a (primary) child of the node with identifier **nodeId**.\n\nYou must specify at least a **name** and **nodeType**. For example, to create a folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;\n}\n&#x60;&#x60;&#x60;\n\nYou can create an empty file like this:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My text file.txt\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;,\n  \&quot;content\&quot;:\n   {\n     \&quot;mimeType\&quot;:\&quot;text/plain\&quot;\n   }\n}\n&#x60;&#x60;&#x60;\nYou can update binary content using the &#x60;&#x60;&#x60;PUT /nodes/{nodeId}&#x60;&#x60;&#x60; API method.\n\nYou can create a folder, or other node, inside a folder hierarchy:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Special Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n&#x60;&#x60;&#x60;\nThe **relativePath** specifies the folder structure to create relative to the node identified by  **nodeId**. Folders in the\n**relativePath** that do not exist are created before the node is created.\n\nYou can set properties when you create a new node:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My Other Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:folder\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;,\n      \&quot;cm:description\&quot;:\&quot;This is an important folder\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\nAny missing aspects are auto-applied. For example, **cm:titled** in the JSON shown above. You can set aspects\nexplicitly set, if needed, using an **aspectNames** field.\n\nThis API method also supports file upload using multipart/form-data.\n\nUse the **filedata** field to represent the content to upload.\nYou can use a **filename** field to give an alternative name for the new file.\n\nUse **overwrite** to overwrite an existing file, matched by name. If the file is versionable,\nthe existing content is replaced.\n\nWhen you overwrite overwrite existing content, you can set the **majorVersion** boolean field to **true** to indicate a major version\nshould be created. The default for **majorVersion** is **false**.\nSetting  **majorVersion** enables versioning of the node, if it is not already versioned.\n\nWhen you overwrite overwrite existing content, you can use the **comment** field to add a version comment that appears in the\nversion history. This also enables versioning of this node, if it is not already versioned.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nAny field in the JSON body defined below can also be passed as a form-data field.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var nodeBody = new AlfrescoCoreRestApi.NodeBody1(); // {NodeBody1} The node information to create.

var opts = { 
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.addNode(nodeId, nodeBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **nodeBody** | [**NodeBody1**](NodeBody1.md)| The node information to create. | 
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

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

Copy the node **nodeId** to the parent folder node **targetParentId**. The **targetParentId** is specified in the request body.\n\nThe new node has the same name as the source node unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also copied.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var copyBody = new AlfrescoCoreRestApi.CopyBody(); // {CopyBody} The targetParentId and, optionally, a new name.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.copyNode(nodeId, copyBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **copyBody** | [**CopyBody**](CopyBody.md)| The targetParentId and, optionally, a new name. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteNode"></a>
# **deleteNode**
> deleteNode(nodeId, , opts)

Delete a node

Deletes the node with identifier **nodeId**.\nIf the **nodeId** is a folder, then its children are also deleted.\nDeleted nodes move to the trashcan unless the **permanent** query parameter is true, and the current user is the owner or an admin.\n\nDeleting a node removes the child associations, ie. both primary and also secondary, if any.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = { 
  'permanent': false // {Boolean} If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n
};
apiInstance.deleteNode(nodeId, , opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **permanent** | **Boolean**| If **true** then the node is deleted permanently, without it moving to the trashcan.\nYou must be the owner or an admin to permanently delete the node.\n | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getDeletedNode"></a>
# **getDeletedNode**
> DeletedNodeEntry getDeletedNode(nodeId, , opts)

Get a deleted node

Returns a specific deleted node identified by **nodeId**.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
};
apiInstance.getDeletedNode(nodeId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 

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

Returns a list of deleted nodes for the current user.\nIf the current user is an administrator deleted nodes\nfor all users will be returned.\nThe list of deleted nodes will be ordered with the most recently deleted node at the top of the list.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
};
apiInstance.getDeletedNodes(opts).then(function(data) {
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
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n | [optional] 

### Return type

[**DeletedNodesPaging**](DeletedNodesPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getFileContent"></a>
# **getFileContent**
> getFileContent(nodeId, , opts)

Get file content

Returns the file content of the node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var opts = { 
  'attachment': true, // {Boolean} **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n
  'ifModifiedSince': new Date("2013-10-20T19:20:30+01:00") // {Date} Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, `Wed, 09 Mar 2016 16:56:34 GMT`.\n
};
apiInstance.getFileContent(nodeId, , opts).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. | 
 **attachment** | **Boolean**| **true** enables a web browser to download the file as an attachment.\n**false** means a web browser may preview the file in a new tab or window, but not\ndownload the file.\n\nYou can only set this parameter to **false** if the content type of the file is in the supported list;\nfor example, certain image files and PDF files.\n\nIf the content type is not supported for preview, then a value of **false**  is ignored, and\nthe attachment will be returned in the response.\n | [optional] [default to true]
 **ifModifiedSince** | **Date**| Only returns the content if it has been modified since the date provided.\nUse the date format defined by HTTP. For example, &#x60;Wed, 09 Mar 2016 16:56:34 GMT&#x60;.\n | [optional] 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNode"></a>
# **getNode**
> NodeEntry getNode(nodeId, , opts)

Get a node

Get information for the node with identifier **nodeId**.

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'relativePath': "relativePath_example", // {String} If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getNode(nodeId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **relativePath** | **String**| If specified, returns information on the node resolved by this path.\nThe path is relative to the specified **nodeId**\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getNodeChildren"></a>
# **getNodeChildren**
> NodePaging getNodeChildren(nodeId, , opts)

Get node children

Returns the children of the node with identifier **nodeId**.\nMinimal information for each child is returned by default.\nYou can use the **include** parameter to return addtional information.\n\nThe list of child nodes includes primary children and also secondary children, if any.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'orderBy': "orderBy_example", // {String} If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \"orderBy=isFolder DESC,name ASC\".\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy=name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n
  'where': "where_example", // {String} Optionally filter the list. Here are some examples:\n\n*   where=(isFolder=true)\n\n*   where=(isFile=true)\n\n*   where=(nodeType='my:specialtype')\n\n*   where=(nodeType='my:specialtype' INCLUDESUBTYPES)\n
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n
  'relativePath': "relativePath_example", // {String} Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder)
  'includeSource': true, // {Boolean} Also include \"source\" (in addition to \"entries\") with folder information on parent node (either the specified parent \"nodeId\" or as resolved by \"relativePath\")
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getNodeChildren(nodeId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **skipCount** | **Integer**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Integer**| The maximum number of items to return in the list. | [optional] 
 **orderBy** | **String**| If not specified then default sort is for folders to be sorted before files, and by ascending name\ni.e. \&quot;orderBy&#x3D;isFolder DESC,name ASC\&quot;.\n\nThis default can be completely overridden by specifying a specific orderBy consisting of one, two or\nthree comma-separated list of properties (with optional ASCending or DESCending), for example,\nspecifying \u201CorderBy&#x3D;name DESC\u201D would return a mixed folder/file list.\n\nThe following properties can be used to order the results:\n* isFolder\n* name\n* mimeType\n* nodeType\n* sizeInBytes\n* modifiedAt\n* createdAt\n* modifiedByUser\n* createdByUser\n | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:\n\n*   where&#x3D;(isFolder&#x3D;true)\n\n*   where&#x3D;(isFile&#x3D;true)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39;)\n\n*   where&#x3D;(nodeType&#x3D;&#39;my:specialtype&#39; INCLUDESUBTYPES)\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* properties\n* aspectNames\n* path\n* isLink\n* allowableOperations\n* association\n | [optional] 
 **relativePath** | **String**| Return information on children within the folder resolved by this path (relative to specified nodeId as the starting parent folder) | [optional] 
 **includeSource** | **Boolean**| Also include \&quot;source\&quot; (in addition to \&quot;entries\&quot;) with folder information on parent node (either the specified parent \&quot;nodeId\&quot; or as resolved by \&quot;relativePath\&quot;) | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodePaging**](NodePaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="moveNode"></a>
# **moveNode**
> NodeEntry moveNode(nodeId, moveBody, opts)

Move a node

Move the node **nodeId** to the parent folder node **targetParentId**.  in request body.\nThe **targetParentId** is specified in the in request body.\n\nThe moved node retains its name unless you specify a new **name** in the request body.\n\nIf the source **nodeId** is a folder, then all of its children are also moved.\n\nThe move will effectively change the primary parent\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var moveBody = new AlfrescoCoreRestApi.MoveBody(); // {MoveBody} The targetParentId and, optionally, a new name.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.moveNode(nodeId, moveBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **moveBody** | [**MoveBody**](MoveBody.md)| The targetParentId and, optionally, a new name. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="purgeDeletedNode"></a>
# **purgeDeletedNode**
> purgeDeletedNode(nodeId, )

Purge a deleted node

Permanently removes the deleted node identified by **nodeId**.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

apiInstance.purgeDeletedNode(nodeId, ).then(function() {
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
> NodeEntry restoreNode(nodeId, )

Restore a deleted node

Attempts to restore the deleted node identified by **nodeId** to its original location.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

apiInstance.restoreNode(nodeId, ).then(function(data) {
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

<a name="updateFileContent"></a>
# **updateFileContent**
> NodeEntry updateFileContent(nodeId, contentBody, opts)

Update file content

Updates the content of the node with identifier **nodeId**.\n\nThe request body for this endpoint can be any text or binary stream. The Content-Type header should be set\ncorrectly for the type of content being updated. The Content-Type header is used to set the mimetype in the repository.\n\nThe **majorVersion** and **comment** parameters can be used to control versioning behaviour. If the content is versionable,\na new minor version is created by default.\n\n**Note:** This API method accepts any content type, but for testing with this tool text based content can be provided.\nThis is because the OpenAPI Specification does not allow a wildcard to be provided or the ability for\ntooling to accept an arbitary file.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node.

var contentBody = "B"; // {String} The binary content

var opts = { 
  'majorVersion': false, // {Boolean} If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
  'comment': "comment_example", // {String} Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateFileContent(nodeId, contentBody, opts).then(function(data) {
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
 **majorVersion** | **Boolean**| If **true**, create a major version.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n | [optional] [default to false]
 **comment** | **String**| Add a version comment which will appear in version history.\nSetting this parameter also enables versioning of this node, if it is not already versioned.\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

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

Updates the node with identifier **nodeId**. For example, you can rename a file or folder:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;,\n}\n&#x60;&#x60;&#x60;\nYou can also set or update one or more properties:\n&#x60;&#x60;&#x60;JSON\n{\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:title\&quot;:\&quot;Folder title\&quot;\n    }\n}\n&#x60;&#x60;&#x60;\n**Note:** if you want to add or remove aspects, then you must use **GET /nodes/{nodeId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoCoreRestApi = require('alfresco-core-rest-api');
var defaultClient = AlfrescoCoreRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoCoreRestApi.NodesApi()

var nodeId = "nodeId_example"; // {String} The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n

var nodeBody = new AlfrescoCoreRestApi.NodeBody(); // {NodeBody} The node information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateNode(nodeId, nodeBody, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **nodeId** | **String**| The identifier of a node. You can also use one of these well-known aliases:\n* -my-\n* -shared-\n* -root-\n | 
 **nodeBody** | [**NodeBody**](NodeBody.md)| The node information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the node. The following optional fields can be requested:\n* path\n* isLink\n* allowableOperations\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**NodeEntry**](NodeEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

