# AlfrescoGovernanceServicesRestApi.RecordFoldersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecordFolderChild**](RecordFoldersApi.md#createRecordFolderChild) | **POST** /record-folders/{recordFolderId}/records | Create a record
[**deleteRecordFolder**](RecordFoldersApi.md#deleteRecordFolder) | **DELETE** /record-folders/{recordFolderId} | Delete a record folder
[**getRecordFolder**](RecordFoldersApi.md#getRecordFolder) | **GET** /record-folders/{recordFolderId} | Get a record folder
[**listRecordFolderChildren**](RecordFoldersApi.md#listRecordFolderChildren) | **GET** /record-folders/{recordFolderId}/records | List records
[**updateRecordFolder**](RecordFoldersApi.md#updateRecordFolder) | **PUT** /record-folders/{recordFolderId} | Update a record folder


<a name="createRecordFolderChild"></a>
# **createRecordFolderChild**
> RecordEntry createRecordFolderChild(recordFolderId, recordBodyCreate, opts)

Create a record

Create a record as a primary child of **recordFolderId**.  This endpoint supports both JSON and multipart/form-data (file upload).  **Using multipart/form-data**  Use the **filedata** field to represent the content to upload, for example, the following curl command will create a node with the contents of test.txt in the test user&#39;s home folder.  &#x60;&#x60;&#x60;curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/record-folders/{recordFolderId}/records -F filedata&#x3D;@test.txt&#x60;&#x60;&#x60;  This API method also supports record creation using application/json.  You must specify at least a **name** and **nodeType**.   You can create a non-electronic record like this: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,   \&quot;properties\&quot;:     {       \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,       \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,       \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,       \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,       \&quot;rma:numberOfCopies\&quot;:1,       \&quot;rma:physicalSize\&quot;:30,       \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,       \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;     } } &#x60;&#x60;&#x60;  You can create an empty electronic record: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,   \&quot;nodeType\&quot;:\&quot;cm:content\&quot; } &#x60;&#x60;&#x60;  Any missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.  **Note:** You can create more than one child by specifying a list of nodes in the JSON body. For example, the following JSON body creates a record category and a record folder inside the specified **categoryId**: &#x60;&#x60;&#x60;JSON [   {     \&quot;name\&quot;:\&quot;Record 1\&quot;,     \&quot;nodeType\&quot;:\&quot;cm:content\&quot;   },   {     \&quot;name\&quot;:\&quot;Record 2\&quot;,     \&quot;nodeType\&quot;:\&quot;cm:content\&quot;   } ] &#x60;&#x60;&#x60; If you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:  &#x60;&#x60;&#x60;JSON {   \&quot;list\&quot;: {     \&quot;pagination\&quot;: {       \&quot;count\&quot;: 2,       \&quot;hasMoreItems\&quot;: false,       \&quot;totalItems\&quot;: 2,       \&quot;skipCount\&quot;: 0,       \&quot;maxItems\&quot;: 100     },     \&quot;entries\&quot;: [       {         \&quot;entry\&quot;: {           ...         }       },       {         \&quot;entry\&quot;: {           ...         }       }     ]   } } &#x60;&#x60;&#x60; 

### Example
```javascript

var recordFolderId = "recordFolderId_example"; // String | The identifier of a record folder.

var recordBodyCreate = new AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate(); // RMNodeBodyCreate | The record information to create.  This field is ignored for multipart/form-data content uploads. 

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordFoldersApi.createRecordFolderChild(recordFolderId, recordBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 
 **recordBodyCreate** | [**RMNodeBodyCreate**](RMNodeBodyCreate.md)| The record information to create.  This field is ignored for multipart/form-data content uploads.  | 
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example: * allowableOperations * content * isCompleted * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteRecordFolder"></a>
# **deleteRecordFolder**
> deleteRecordFolder(recordFolderId, )

Delete a record folder

Deletes record folder **recordFolderId**. Deleted file plan components cannot be recovered, they are deleted permanently. 

### Example
```javascript

var recordFolderId = "recordFolderId_example"; // String | The identifier of a record folder.

this.alfrescoJsApi.gsCore.recordFoldersApi.deleteRecordFolder(recordFolderId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecordFolder"></a>
# **getRecordFolder**
> RecordFolderEntry getRecordFolder(recordFolderId, , opts)

Get a record folder

Gets information for record folder **recordFolderId**  Mandatory fields and the record folder&#39;s aspects and properties are returned by default.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var recordFolderId = "recordFolderId_example"; // String | The identifier of a record folder.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the record folders. Any optional field from the response model can be requested. For example: * allowableOperations * isClosed * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordFoldersApi.getRecordFolder(recordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record folders. Any optional field from the response model can be requested. For example: * allowableOperations * isClosed * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordFolderEntry**](RecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listRecordFolderChildren"></a>
# **listRecordFolderChildren**
> RecordFolderAssociationPaging listRecordFolderChildren(recordFolderId, , opts)

List records

Gets a list of records.  Minimal information for each record is returned by default.  The list of records includes primary children and secondary children, if there are any.  You can use the **include** parameter (include&#x3D;allowableOperations) to return additional information. 

### Example
```javascript

var recordFolderId = "recordFolderId_example"; // String | The identifier of a record folder.

var opts = { 
  'skipCount': 56, // Number | The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // Number | The maximum number of items to return in the list.
  'where': "where_example", // String | Optionally filter the list. Here are some examples:  *   ```where=(nodeType='my:specialNodeType')```  *   ```where=(nodeType='my:specialNodeType INCLUDESUBTYPES')```  *   ```where=(isPrimary=true)``` 
  'include': ["include_example"], // [String] | Returns additional information about the records. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * association * content * isCompleted * path * properties 
  'includeSource': true, // Boolean | Also include **source** (in addition to **entries**) with record information on the parent folder – the specified parent **recordFolderId**
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordFoldersApi.listRecordFolderChildren(recordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 
 **skipCount** | **Number**| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | **Number**| The maximum number of items to return in the list. | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;my:specialNodeType&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(nodeType&#x3D;&#39;my:specialNodeType INCLUDESUBTYPES&#39;)&#x60;&#x60;&#x60;  *   &#x60;&#x60;&#x60;where&#x3D;(isPrimary&#x3D;true)&#x60;&#x60;&#x60;  | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the records. Any optional field from the response model can be requested. For example: * allowableOperations * aspectNames * association * content * isCompleted * path * properties  | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with record information on the parent folder – the specified parent **recordFolderId** | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordFolderAssociationPaging**](RecordFolderAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRecordFolder"></a>
# **updateRecordFolder**
> RecordFolderEntry updateRecordFolder(recordFolderId, recordFolderBodyUpdate, opts)

Update a record folder

Updates record folder **recordFolderId**. For example, you can rename a record folder: &#x60;&#x60;&#x60;JSON {   \&quot;name\&quot;:\&quot;My new name\&quot; } &#x60;&#x60;&#x60; You can also set or update one or more properties: &#x60;&#x60;&#x60;JSON {   \&quot;properties\&quot;:     {        \&quot;rma:vitalRecordIndicator\&quot;: true,        \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;     } } &#x60;&#x60;&#x60; **Note:** if you want to add or remove aspects, then you must use **GET /record-folders/{recordFolderId}** first to get the complete set of *aspectNames*.  **Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order. 

### Example
```javascript

var recordFolderId = "recordFolderId_example"; // String | The identifier of a record folder.

var recordFolderBodyUpdate = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate(); // FilePlanComponentBodyUpdate | The record folder information to update.

var opts = { 
  'include': ["include_example"], // [String] | Returns additional information about the record folders. Any optional field from the response model can be requested. For example: * allowableOperations * isClosed * path 
  'fields': ["fields_example"] // [String] | A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter. 
};
this.alfrescoJsApi.gsCore.recordFoldersApi.updateRecordFolder(recordFolderId, recordFolderBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 
 **recordFolderBodyUpdate** | [**FilePlanComponentBodyUpdate**](FilePlanComponentBodyUpdate.md)| The record folder information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record folders. Any optional field from the response model can be requested. For example: * allowableOperations * isClosed * path  | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.  You can use this parameter to restrict the fields returned within a response if, for example, you want to save on overall bandwidth.  The list applies to a returned individual entity or entries within a collection.  If the API method also supports the **include** parameter, then the fields specified in the **include** parameter are returned in addition to those specified in the **fields** parameter.  | [optional] 

### Return type

[**RecordFolderEntry**](RecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

