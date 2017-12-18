# AlfrescoGovernanceServicesRestApi.UnfiledRecordFoldersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnfiledRecordFolderChildren**](UnfiledRecordFoldersApi.md#createUnfiledRecordFolderChildren) | **POST** /unfiled-record-folders/{unfiledRecordFolderId}/children | Create a record or an unfiled record folder
[**deleteUnfiledRecordFolder**](UnfiledRecordFoldersApi.md#deleteUnfiledRecordFolder) | **DELETE** /unfiled-record-folders/{unfiledRecordFolderId} | Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.
[**getUnfiledRecordFolder**](UnfiledRecordFoldersApi.md#getUnfiledRecordFolder) | **GET** /unfiled-record-folders/{unfiledRecordFolderId} | Get the unfiled record folder
[**listUnfiledRecordFolderChildren**](UnfiledRecordFoldersApi.md#listUnfiledRecordFolderChildren) | **GET** /unfiled-record-folders/{unfiledRecordFolderId}/children | List unfiled record folder&#39;s children
[**updateUnfiledRecordFolder**](UnfiledRecordFoldersApi.md#updateUnfiledRecordFolder) | **PUT** /unfiled-record-folders/{unfiledRecordFolderId} | Update an unfiled record folder


<a name="createUnfiledRecordFolderChildren"></a>
# **createUnfiledRecordFolderChildren**
> UnfiledRecordFolderAssociationPaging createUnfiledRecordFolderChildren(unfiledRecordFolderId, nodeBodyCreate, opts)

Create a record or an unfiled record folder

Create a record or an unfiled record folder as a primary child of **unfiledRecordFolderId**.  You can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then the API method tries to create a unique name using an integer suffix.  This endpoint supports both JSON and multipart/form-data (file upload).  **Using multipart/form-data**  Use the **filedata** field to represent the content to upload, for example, the following curl command will create a node with the contents of test.txt in the test user&#39;s home folder.  &#x60;&#x60;&#x60;curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-record-folders/{unfiledRecordFolderId}/children -F filedata&#x3D;@test.txt&#x60;&#x60;&#x60;  This API method also supports record and unfiled record folder creation using application/json.  You must specify at least a **name** and **nodeType**.  You can create a non-electronic record like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,   \&quot;properties\&quot;:     {       \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,       \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,       \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,       \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,       \&quot;rma:numberOfCopies\&quot;:1,       \&quot;rma:physicalSize\&quot;:30,       \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,       \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;     } } &#x60;&#x60;&#x60;  You can create an empty electronic record like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;cm:content\&quot; } &#x60;&#x60;&#x60;  You can create an unfiled record folder like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,   \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,   \&quot;properties\&quot;:   {     \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;   } } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  **Note:** You can create more than one child by specifying a list of nodes in the JSON body. For example, the following JSON body creates a record and an unfiled record folder inside the specified **unfiledRecordFolderId**: &#x60;&#x60;&#x60;JSON [   {     \&quot;name\&quot;:\&quot;My Record\&quot;,     \&quot;nodeType\&quot;:\&quot;cm:content\&quot;   },   {     \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,     \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60; 

### Example
```javascript

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // String | The identifier of an unfiled record folder.

var nodeBodyCreate = new AlfrescoGovernanceServicesRestApi.RMNodeBodyCreateWithRelativePath(); // RMNodeBodyCreateWithRelativePath | The node information to create.

var opts = { 
  'autoRename': true, // Boolean | If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix. 
  'include': ["include_example"], // [String] | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example: * allowableOperations * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.unfiledRecordFoldersApi.createUnfiledRecordFolderChildren(unfiledRecordFolderId, nodeBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **String**| The identifier of an unfiled record folder. | 
 **nodeBodyCreate** | [**RMNodeBodyCreateWithRelativePath**](RMNodeBodyCreateWithRelativePath.md)| The node information to create. | 
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**UnfiledRecordFolderAssociationPaging**](UnfiledRecordFolderAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteUnfiledRecordFolder"></a>
# **deleteUnfiledRecordFolder**
> deleteUnfiledRecordFolder(unfiledRecordFolderId, )

Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.

Deletes the unfiled record folder **unfiledRecordFolderId**. 

### Example
```javascript

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // String | The identifier of an unfiled record folder.

this.alfrescoJsApi.gsCore.unfiledRecordFoldersApi.deleteUnfiledRecordFolder(unfiledRecordFolderId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **String**| The identifier of an unfiled record folder. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnfiledRecordFolder"></a>
# **getUnfiledRecordFolder**
> UnfiledRecordFolderEntry getUnfiledRecordFolder(unfiledRecordFolderId, , opts)

Get the unfiled record folder

Gets information for unfiled record folder id **unfiledRecordFolderId**  Mandatory fields and the unfiled record folder&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // String | The identifier of an unfiled record folder.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example: * allowableOperations * path 
  'relativePath': "relativePath_example", // String | Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**. 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.unfiledRecordFoldersApi.getUnfiledRecordFolder(unfiledRecordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **String**| The identifier of an unfiled record folder. | 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path  | [optional] 
 **relativePath** | **String**| Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**UnfiledRecordFolderEntry**](UnfiledRecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUnfiledRecordFolderChildren"></a>
# **listUnfiledRecordFolderChildren**
> UnfiledRecordFolderAssociationPaging listUnfiledRecordFolderChildren(unfiledRecordFolderId, , opts)

List unfiled record folder&#39;s children

Returns a list of records or unfiled record folders.  Minimal information for each child is returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // String | The identifier of an unfiled record folder.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'where': "where_example", // String | Optionally filter the list. Here are some examples:  *   ```where=(isRecord=true)```  *   ```where=(isUnfiledRecordFolder=false)```  *   ```where=(nodeType='cm:content INCLUDESUBTYPES')``` 
  'include': ["include_example"], // [String] | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * association * path * properties 
  'relativePath': "relativePath_example", // String | Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**. 
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.unfiledRecordFoldersApi.listUnfiledRecordFolderChildren(unfiledRecordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **String**| The identifier of an unfiled record folder. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:  *   &#x60;&#x60;&#x60;where&#x3D;(isRecord&#x3D;true)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isUnfiledRecordFolder&#x3D;false)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;cm:content INCLUDESUBTYPES&#39;)&#x60;&#x60;&#x60;  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * association * path * properties  | [optional] 
 **relativePath** | **String**| Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.  | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**UnfiledRecordFolderAssociationPaging**](UnfiledRecordFolderAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUnfiledRecordFolder"></a>
# **updateUnfiledRecordFolder**
> UnfiledRecordFolderEntry updateUnfiledRecordFolder(unfiledRecordFolderId, unfiledRecordFolderBodyUpdate, opts)

Update an unfiled record folder

Updates unfiled record folder **unfiledRecordFolderId**. For example, you can rename a record folder: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;cm:title\&quot;:\&quot;New title\&quot;,        \&quot;cm:description\&quot;:\&quot;New description\&quot;     } } &#x60;&#x60;&#x60; **Note:** if you want to add or remove aspects, then you must use **GET /unfiled-record-folders/{unfiledRecordFolderId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order. 

### Example
```javascript

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // String | The identifier of an unfiled record folder.

var unfiledRecordFolderBodyUpdate = new AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderBodyUpdate(); // UnfiledRecordFolderBodyUpdate | The record folder information to update.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example: * allowableOperations * path 
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.unfiledRecordFoldersApi.updateUnfiledRecordFolder(unfiledRecordFolderId, unfiledRecordFolderBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **String**| The identifier of an unfiled record folder. | 
 **unfiledRecordFolderBodyUpdate** | [**UnfiledRecordFolderBodyUpdate**](UnfiledRecordFolderBodyUpdate.md)| The record folder information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example: * allowableOperations * path  | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node – either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**UnfiledRecordFolderEntry**](UnfiledRecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

