# AlfrescoGovernanceServicesRestApi.RecordfoldersApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecordFolderChild**](RecordfoldersApi.md#createRecordFolderChild) | **POST** /record-folders/{recordFolderId}/records | Create a record
[**deleteRecordFolder**](RecordfoldersApi.md#deleteRecordFolder) | **DELETE** /record-folders/{recordFolderId} | Delete a record folder
[**getRecordFolder**](RecordfoldersApi.md#getRecordFolder) | **GET** /record-folders/{recordFolderId} | Get a record folder
[**listRecordFolderChildren**](RecordfoldersApi.md#listRecordFolderChildren) | **GET** /record-folders/{recordFolderId}/records | List records
[**updateRecordFolder**](RecordfoldersApi.md#updateRecordFolder) | **PUT** /record-folders/{recordFolderId} | Update a record folder


<a name="createRecordFolderChild"></a>
# **createRecordFolderChild**
> RecordEntry createRecordFolderChild(recordFolderId, recordBodyCreate, opts)

Create a record

Create a record as a primary child of **recordFolderId**.\n\nThis endpoint supports both JSON and multipart/form-data (file upload).\n\n**Using multipart/form-data**\n\nUse the **filedata** field to represent the content to upload, for example, the following curl command will\ncreate a node with the contents of test.txt in the test user&#39;s home folder.\n\n```curl -utest:test -X POST host:port/alfresco/api/-default-/public/gs/versions/1/record-folders/{recordFolderId}/records -F filedata=@test.txt```\n\nThis API method also supports record creation using application/json.\n\nYou must specify at least a **name** and **nodeType**.\n\n\nYou can create a non-electronic record like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Non-electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:nonElectronicDocument\&quot;,\n  \&quot;properties\&quot;:\n    {\n      \&quot;cm:description\&quot;:\&quot;My Non-electronic Record Description\&quot;,\n      \&quot;cm:title\&quot;:\&quot;My Non-electronic Record Title\&quot;,\n      \&quot;rma:box\&quot;:\&quot;My Non-electronic Record Box\&quot;,\n      \&quot;rma:file\&quot;:\&quot;My Non-electronic Record File\&quot;,\n      \&quot;rma:numberOfCopies\&quot;:1,\n      \&quot;rma:physicalSize\&quot;:30,\n      \&quot;rma:shelf\&quot;:\&quot;My Non-electronic Record Shelf\&quot;,\n      \&quot;rma:storageLocation\&quot;:\&quot;My Non-electronic Record Location\&quot;\n    }\n}\n```\n\nYou can create an empty electronic record:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Electronic Record\&quot;,\n  \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\n**Note:** You can create more than one child by\nspecifying a list of nodes in the JSON body. For example, the following JSON\nbody creates a record category and a record folder inside the specified **categoryId**:\n```JSON\n[\n  {\n    \&quot;name\&quot;:\&quot;Record 1\&quot;,\n    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n  },\n  {\n    \&quot;name\&quot;:\&quot;Record 2\&quot;,\n    \&quot;nodeType\&quot;:\&quot;cm:content\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordfoldersApi()

var recordFolderId = "recordFolderId_example"; // {String} The identifier of a record folder.

var recordBodyCreate = new AlfrescoGovernanceServicesRestApi.RMNodeBodyCreate(); // {RMNodeBodyCreate} The record information to create.\n\nThis field is ignored for multipart/form-data content uploads.\n

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.createRecordFolderChild(recordFolderId, recordBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 
 **recordBodyCreate** | [**RMNodeBodyCreate**](RMNodeBodyCreate.md)| The record information to create.\n\nThis field is ignored for multipart/form-data content uploads.\n | 
 **include** | [**[String]**](String.md)| Returns additional information about the record. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* content\n* isCompleted\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordEntry**](RecordEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteRecordFolder"></a>
# **deleteRecordFolder**
> deleteRecordFolder(recordFolderId, )

Delete a record folder

Deletes record folder **recordFolderId**. Deleted file plan components cannot be recovered, they are deleted permanently.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordfoldersApi()

var recordFolderId = "recordFolderId_example"; // {String} The identifier of a record folder.

apiInstance.deleteRecordFolder(recordFolderId, ).then(function() {
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

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecordFolder"></a>
# **getRecordFolder**
> RecordFolderEntry getRecordFolder(recordFolderId, , opts)

Get a record folder

Gets information for record folder **recordFolderId**\n\nMandatory fields and the record folder&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordfoldersApi()

var recordFolderId = "recordFolderId_example"; // {String} The identifier of a record folder.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the record folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* isClosed\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getRecordFolder(recordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* isClosed\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordFolderEntry**](RecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listRecordFolderChildren"></a>
# **listRecordFolderChildren**
> RecordFolderAssociationPaging listRecordFolderChildren(recordFolderId, , opts)

List records

Gets a list of records.\n\nMinimal information for each record is returned by default.\n\nThe list of records includes primary children and secondary children, if there are any.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordfoldersApi()

var recordFolderId = "recordFolderId_example"; // {String} The identifier of a record folder.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'where': "where_example", // {String} Optionally filter the list. Here are some examples:\n\n*   ```where=(nodeType='my:specialNodeType')```\n\n*   ```where=(nodeType='my:specialNodeType INCLUDESUBTYPES')```\n\n*   ```where=(isPrimary=true)```\n
  'include': ["include_example"], // {[String]} Returns additional information about the records. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* content\n* isCompleted\n* path\n* properties\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with record information on the parent folder \u2013 the specified parent **recordFolderId**
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.listRecordFolderChildren(recordFolderId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordFolderId** | **String**| The identifier of a record folder. | 
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:\n\n*   ```where=(nodeType=&#39;my:specialNodeType&#39;)```\n\n*   ```where=(nodeType=&#39;my:specialNodeType INCLUDESUBTYPES&#39;)```\n\n*   ```where=(isPrimary=true)```\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the records. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* association\n* content\n* isCompleted\n* path\n* properties\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with record information on the parent folder \u2013 the specified parent **recordFolderId** | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordFolderAssociationPaging**](RecordFolderAssociationPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRecordFolder"></a>
# **updateRecordFolder**
> RecordFolderEntry updateRecordFolder(recordFolderId, recordFolderBodyUpdate, opts)

Update a record folder

Updates record folder **recordFolderId**. For example, you can rename a record folder:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update one or more properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;rma:vitalRecordIndicator\&quot;: true,\n       \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;\n    }\n}\n```\n**Note:** if you want to add or remove aspects, then you must use **GET /record-folders/{recordFolderId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordfoldersApi()

var recordFolderId = "recordFolderId_example"; // {String} The identifier of a record folder.

var recordFolderBodyUpdate = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate(); // {FilePlanComponentBodyUpdate} The record folder information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the record folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* isClosed\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateRecordFolder(recordFolderId, recordFolderBodyUpdate, opts).then(function(data) {
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
 **include** | [**[String]**](String.md)| Returns additional information about the record folders. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* isClosed\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordFolderEntry**](RecordFolderEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

