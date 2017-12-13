# AlfrescoGovernanceServicesRestApi.UnfiledrecordfoldersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createUnfiledRecordFolderChildren**](UnfiledrecordfoldersApi.md#createUnfiledRecordFolderChildren) | **POST** /unfiled-record-folders/{unfiledRecordFolderId}/children | Create a record or an unfiled record folder
[**deleteUnfiledRecordFolder**](UnfiledrecordfoldersApi.md#deleteUnfiledRecordFolder) | **DELETE** /unfiled-record-folders/{unfiledRecordFolderId} | Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.
[**getUnfiledRecordFolder**](UnfiledrecordfoldersApi.md#getUnfiledRecordFolder) | **GET** /unfiled-record-folders/{unfiledRecordFolderId} | Get the unfiled record folder
[**listUnfiledRecordFolderChildren**](UnfiledrecordfoldersApi.md#listUnfiledRecordFolderChildren) | **GET** /unfiled-record-folders/{unfiledRecordFolderId}/children | List unfiled record folder&#39;s children
[**updateUnfiledRecordFolder**](UnfiledrecordfoldersApi.md#updateUnfiledRecordFolder) | **PUT** /unfiled-record-folders/{unfiledRecordFolderId} | Update an unfiled record folder


<a name="createUnfiledRecordFolderChildren"></a>
# **createUnfiledRecordFolderChildren**
> UnfiledRecordFolderAssociationPaging createUnfiledRecordFolderChildren(unfiledRecordFolderId, nodeBodyCreate, opts)

Create a record or an unfiled record folder

Create a record or an unfiled record folder as a primary child of **unfiledRecordFolderId**.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create a unique name using an integer suffix.\n\nThis endpoint supports both JSON and multipart/form-data (file upload).\n\n**Using multipart/form-data**\n\nUse the **filedata** field to represent the content to upload, for example, the following curl command will\ncreate a node with the contents of test.txt in the test user&#39;s home folder.\n\n```curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/unfiled-record-folders/{unfiledRecordFolderId}/children -F filedata=@test.txt```\n\nThis API method also supports record and unfiled record folder creation using application/json.\n\nYou must specify at least a **name** and **nodeType**.\n\nYou can create a non-electronic record like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,\n      \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,\n      \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,\n      \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,\n      \&quot;rma:numberOfCopies\&quot;:1,\n      \&quot;rma:physicalSize\&quot;:30,\n      \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,\n      \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;\n    }\n}\n```\n\nYou can create an empty electronic record like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n}\n```\n\nYou can create an unfiled record folder like this:\n```JSON\n{\n  \&quot;name\&quot;: \&quot;My Unfiled Record Folder\&quot;,\n  \&quot;nodeType\&quot;: \&quot;rma:unfiledRecordFolder\&quot;,\n  \&quot;properties\&quot;:\n  {\n    \&quot;cm:title\&quot;: \&quot;My Unfiled Record Folder Title\&quot;\n  }\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\n**Note:** You can create more than one child by\nspecifying a list of nodes in the JSON body. For example, the following JSON\nbody creates a record and an unfiled record folder inside the specified **unfiledRecordFolderId**:\n```JSON\n[\n  {\n    \&quot;name\&quot;:\&quot;My Record\&quot;,\n    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n  },\n  {\n    \&quot;name\&quot;:\&quot;My Unfiled Record Folder\&quot;,\n    \&quot;nodeType\&quot;:\&quot;rma:unfiledRecordFolder\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledrecordfoldersApi()

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // {String} The identifier of an unfiled record folder.

var nodeBodyCreate = new AlfrescoGovernanceServicesRestApi.RMNodeBodyCreateWithRelativePath(); // {RMNodeBodyCreateWithRelativePath} The node information to create.

var opts = { 
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.createUnfiledRecordFolderChildren(unfiledRecordFolderId, nodeBodyCreate, opts).then(function(data) {
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
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledRecordFolderAssociationPaging**](UnfiledRecordFolderAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteUnfiledRecordFolder"></a>
# **deleteUnfiledRecordFolder**
> deleteUnfiledRecordFolder(unfiledRecordFolderId, )

Delete an unfiled record folder. Deleted file plan components cannot be recovered, they are deleted permanently.

Deletes the unfiled record folder **unfiledRecordFolderId**.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledrecordfoldersApi()

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // {String} The identifier of an unfiled record folder.

apiInstance.deleteUnfiledRecordFolder(unfiledRecordFolderId, ).then(function() {
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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getUnfiledRecordFolder"></a>
# **getUnfiledRecordFolder**
> UnfiledRecordFolderEntry getUnfiledRecordFolder(unfiledRecordFolderId, , opts)

Get the unfiled record folder

Gets information for unfiled record folder id **unfiledRecordFolderId**\n\nMandatory fields and the unfiled record folder&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledrecordfoldersApi()

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // {String} The identifier of an unfiled record folder.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'relativePath': "relativePath_example", // {String} Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getUnfiledRecordFolder(unfiledRecordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **String**| The identifier of an unfiled record folder. | 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **relativePath** | **String**| Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledRecordFolderEntry**](UnfiledRecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listUnfiledRecordFolderChildren"></a>
# **listUnfiledRecordFolderChildren**
> UnfiledRecordFolderAssociationPaging listUnfiledRecordFolderChildren(unfiledRecordFolderId, , opts)

List unfiled record folder&#39;s children

Returns a list of records or unfiled record folders.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledrecordfoldersApi()

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // {String} The identifier of an unfiled record folder.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'where': "where_example", // {String} Optionally filter the list. Here are some examples:\n\n*   ```where=(isRecord=true)```\n\n*   ```where=(isUnfiledRecordFolder=false)```\n\n*   ```where=(nodeType='cm:content INCLUDESUBTYPES')```\n
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* path\n* properties\n
  'relativePath': "relativePath_example", // {String} Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.listUnfiledRecordFolderChildren(unfiledRecordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **unfiledRecordFolderId** | **String**| The identifier of an unfiled record folder. | 
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:\n\n*   ```where=(isRecord=true)```\n\n*   ```where=(isUnfiledRecordFolder=false)```\n\n*   ```where=(nodeType=&#39;cm:content INCLUDESUBTYPES&#39;)```\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* path\n* properties\n | [optional] 
 **relativePath** | **String**| Return information on children in the unfiled records container resolved by this path. The path is relative to **unfiledRecordFolderId**.\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledRecordFolderAssociationPaging**](UnfiledRecordFolderAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateUnfiledRecordFolder"></a>
# **updateUnfiledRecordFolder**
> UnfiledRecordFolderEntry updateUnfiledRecordFolder(unfiledRecordFolderId, unfiledRecordFolderBodyUpdate, opts)

Update an unfiled record folder

Updates unfiled record folder **unfiledRecordFolderId**. For example, you can rename a record folder:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update one or more properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;cm:title\&quot;:\&quot;New title\&quot;,\n       \&quot;cm:description\&quot;:\&quot;New description\&quot;\n    }\n}\n```\n**Note:** if you want to add or remove aspects, then you must use **GET /unfiled-record-folders/{unfiledRecordFolderId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.UnfiledrecordfoldersApi()

var unfiledRecordFolderId = "unfiledRecordFolderId_example"; // {String} The identifier of an unfiled record folder.

var unfiledRecordFolderBodyUpdate = new AlfrescoGovernanceServicesRestApi.UnfiledRecordFolderBodyUpdate(); // {UnfiledRecordFolderBodyUpdate} The record folder information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the unfiled records container's children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**.
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateUnfiledRecordFolder(unfiledRecordFolderId, unfiledRecordFolderBodyUpdate, opts).then(function(data) {
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
 **include** | [**[String]**](String.md)| Returns additional information about the unfiled records container&#39;s children. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* path\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 either the specified parent **unfiledRecordFolderId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**UnfiledRecordFolderEntry**](UnfiledRecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

