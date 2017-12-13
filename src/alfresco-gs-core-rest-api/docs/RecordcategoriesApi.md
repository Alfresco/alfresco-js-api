# AlfrescoGovernanceServicesRestApi.RecordcategoriesApi

All URIs are relative to *https://localhost/alfresco/api/-default-/public/gs/versions/1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createRecordCategoryChild**](RecordcategoriesApi.md#createRecordCategoryChild) | **POST** /record-categories/{recordCategoryId}/children | Create a record category or a record folder
[**deleteRecordCategory**](RecordcategoriesApi.md#deleteRecordCategory) | **DELETE** /record-categories/{recordCategoryId} | Delete a record category
[**getRecordCategory**](RecordcategoriesApi.md#getRecordCategory) | **GET** /record-categories/{recordCategoryId} | Get a record category
[**listRecordCategoryChildren**](RecordcategoriesApi.md#listRecordCategoryChildren) | **GET** /record-categories/{recordCategoryId}/children | List record category&#39;s children
[**updateRecordCategory**](RecordcategoriesApi.md#updateRecordCategory) | **PUT** /record-categories/{recordCategoryId} | Update a record category


<a name="createRecordCategoryChild"></a>
# **createRecordCategoryChild**
> RecordCategoryChildEntry createRecordCategoryChild(recordCategoryId, nodeBodyCreate, opts)

Create a record category or a record folder

Create a record category or a record folder as a primary child of **recordCategoryId**.\n\nYou can set the **autoRename** boolean field to automatically resolve name clashes. If there is a name clash, then\nthe API method tries to create\na unique name using an integer suffix.\n\nThis API method also supports record category or record folder creation using application/json.\n\nYou must specify at least a **name** and **nodeType**.\n\nYou can create a category like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;\n}\n```\n\nYou can create a record folder like this:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Folder\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;\n}\n```\n\nYou can create a record folder inside a container hierarchy (applies to record categories as well):\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Fileplan Component\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;,\n  \&quot;relativePath\&quot;:\&quot;X/Y/Z\&quot;\n}\n```\nThe **relativePath** specifies the container structure to create relative to the node (record category or record folder). Containers in the\n**relativePath** that do not exist are created before the node is created. The container type is decided considering\nthe type of the parent container and the type of the node to be created.\n\nYou can set properties when creating a record category (applies to record folders as well):\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n  \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;,\n  \&quot;properties\&quot;:\n  {\n    \&quot;rma:vitalRecordIndicator\&quot;:\&quot;true\&quot;,\n    \&quot;rma:reviewPeriod\&quot;:\&quot;month|1\&quot;\n  }\n}\n```\n\nAny missing aspects are applied automatically. You can set aspects explicitly, if needed, using an **aspectNames** field.\n\n**Note:** You can create more than one child by\nspecifying a list of nodes in the JSON body. For example, the following JSON\nbody creates a record category and a record folder inside the specified **categoryId**:\n```JSON\n[\n  {\n    \&quot;name\&quot;:\&quot;My Record Category\&quot;,\n    \&quot;nodeType\&quot;:\&quot;rma:recordCategory\&quot;\n  },\n  {\n    \&quot;name\&quot;:\&quot;My Record Folder\&quot;,\n    \&quot;nodeType\&quot;:\&quot;rma:recordFolder\&quot;\n  }\n]\n```\nIf you specify a list as input, then a paginated list rather than an entry is returned in the response body. For example:\n\n```JSON\n{\n  \&quot;list\&quot;: {\n    \&quot;pagination\&quot;: {\n      \&quot;count\&quot;: 2,\n      \&quot;hasMoreItems\&quot;: false,\n      \&quot;totalItems\&quot;: 2,\n      \&quot;skipCount\&quot;: 0,\n      \&quot;maxItems\&quot;: 100\n    },\n    \&quot;entries\&quot;: [\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      },\n      {\n        \&quot;entry\&quot;: {\n          ...\n        }\n      }\n    ]\n  }\n}\n```\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordcategoriesApi()

var recordCategoryId = "recordCategoryId_example"; // {String} The identifier of a record category.

var nodeBodyCreate = new AlfrescoGovernanceServicesRestApi.RMNodeBodyCreateWithRelativePath(); // {RMNodeBodyCreateWithRelativePath} The node information to create.\n

var opts = { 
  'autoRename': true, // {Boolean} If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n
  'include': ["include_example"], // {[String]} Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.createRecordCategoryChild(recordCategoryId, nodeBodyCreate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **String**| The identifier of a record category. | 
 **nodeBodyCreate** | [**RMNodeBodyCreateWithRelativePath**](RMNodeBodyCreateWithRelativePath.md)| The node information to create.\n | 
 **autoRename** | **Boolean**| If true, then  a name clash will cause an attempt to auto rename by finding a unique name using an integer suffix.\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordCategoryChildEntry**](RecordCategoryChildEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json, multipart/form-data
 - **Accept**: application/json

<a name="deleteRecordCategory"></a>
# **deleteRecordCategory**
> deleteRecordCategory(recordCategoryId, )

Delete a record category

Deletes record category **recordCategoryId**.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordcategoriesApi()

var recordCategoryId = "recordCategoryId_example"; // {String} The identifier of a record category.

apiInstance.deleteRecordCategory(recordCategoryId, ).then(function() {
  console.log('API called successfully.');
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **String**| The identifier of a record category. | 

### Return type

null (empty response body)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="getRecordCategory"></a>
# **getRecordCategory**
> RecordCategoryEntry getRecordCategory(recordCategoryId, , opts)

Get a record category

Gets information for record category **recordCategoryId**\n\nMandatory fields and the record category&#39;s aspects and properties are returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordcategoriesApi()

var recordCategoryId = "recordCategoryId_example"; // {String} The identifier of a record category.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
  'relativePath': "relativePath_example", // {String} Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.getRecordCategory(recordCategoryId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **String**| The identifier of a record category. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n | [optional] 
 **relativePath** | **String**| Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordCategoryEntry**](RecordCategoryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listRecordCategoryChildren"></a>
# **listRecordCategoryChildren**
> RecordCategoryChildPaging listRecordCategoryChildren(recordCategoryId, , opts)

List record category&#39;s children

Returns a list of record categories and/or record folders.\n\nMinimal information for each child is returned by default.\n\nYou can use the **include** parameter (include=allowableOperations) to return additional information.\n\nThe list of child nodes includes primary children and secondary children, if there are any.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordcategoriesApi()

var recordCategoryId = "recordCategoryId_example"; // {String} The identifier of a record category.

var opts = { 
  'skipCount': 56, // {Integer} The number of entities that exist in the collection before those included in this list.
  'maxItems': 56, // {Integer} The maximum number of items to return in the list.
  'where': "where_example", // {String} Optionally filter the list. Here are some examples:\n\n*   ```where=(nodeType='rma:recordFolder')```\n\n*   ```where=(nodeType='rma:recordCategory')```\n\n*   ```where=(isRecordFolder=true AND isClosed=false)```\n
  'include': ["include_example"], // {[String]} Returns additional information about the record category child. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* hasRetentionSchedule\n* isClosed\n* isRecordCategory\n* isRecordFolder\n* path\n* properties\n
  'relativePath': "relativePath_example", // {String} Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.\n
  'includeSource': true, // {Boolean} Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 either the specified parent **recordCategoryId**, or as resolved by **relativePath**.
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.listRecordCategoryChildren(recordCategoryId, , opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **String**| The identifier of a record category. | 
 **skipCount** | [**Integer**](.md)| The number of entities that exist in the collection before those included in this list. | [optional] 
 **maxItems** | [**Integer**](.md)| The maximum number of items to return in the list. | [optional] 
 **where** | **String**| Optionally filter the list. Here are some examples:\n\n*   ```where=(nodeType=&#39;rma:recordFolder&#39;)```\n\n*   ```where=(nodeType=&#39;rma:recordCategory&#39;)```\n\n*   ```where=(isRecordFolder=true AND isClosed=false)```\n | [optional] 
 **include** | [**[String]**](String.md)| Returns additional information about the record category child. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* aspectNames\n* hasRetentionSchedule\n* isClosed\n* isRecordCategory\n* isRecordFolder\n* path\n* properties\n | [optional] 
 **relativePath** | **String**| Return information on children in the record category resolved by this path. The path is relative to **recordCategoryId**.\n | [optional] 
 **includeSource** | **Boolean**| Also include **source** (in addition to **entries**) with folder information on the parent node \u2013 either the specified parent **recordCategoryId**, or as resolved by **relativePath**. | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordCategoryChildPaging**](RecordCategoryChildPaging.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="updateRecordCategory"></a>
# **updateRecordCategory**
> RecordCategoryEntry updateRecordCategory(recordCategoryId, recordCategoryBodyUpdate, opts)

Update a record category

Updates record category **recordCategoryId**. For example, you can rename a record category:\n```JSON\n{\n  \&quot;name\&quot;:\&quot;My new name\&quot;\n}\n```\nYou can also set or update one or more properties:\n```JSON\n{\n  \&quot;properties\&quot;:\n    {\n       \&quot;rma:vitalRecordIndicator\&quot;: true,\n       \&quot;rma:reviewPeriod\&quot;:\&quot;month|6\&quot;\n    }\n}\n```\n**Note:** If you want to add or remove aspects, then you must use **GET /record-categories/{recordCategoryId}** first to get the complete set of *aspectNames*.\n\n**Note:** Currently there is no optimistic locking for updates, so they are applied in \&quot;last one wins\&quot; order.\n

### Example
```javascript
var AlfrescoGovernanceServicesRestApi = require('alfresco-governance-services-rest-api');
var defaultClient = AlfrescoGovernanceServicesRestApi.ApiClient.default;

// Configure HTTP basic authorization: basicAuth
var basicAuth = defaultClient.authentications['basicAuth'];
basicAuth.username = 'YOUR USERNAME'
basicAuth.password = 'YOUR PASSWORD'

var apiInstance = new AlfrescoGovernanceServicesRestApi.RecordcategoriesApi()

var recordCategoryId = "recordCategoryId_example"; // {String} The identifier of a record category.

var recordCategoryBodyUpdate = new AlfrescoGovernanceServicesRestApi.FilePlanComponentBodyUpdate(); // {FilePlanComponentBodyUpdate} The record category information to update.

var opts = { 
  'include': ["include_example"], // {[String]} Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n
  'fields': ["fields_example"] // {[String]} A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n
};
apiInstance.updateRecordCategory(recordCategoryId, recordCategoryBodyUpdate, opts).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recordCategoryId** | **String**| The identifier of a record category. | 
 **recordCategoryBodyUpdate** | [**FilePlanComponentBodyUpdate**](FilePlanComponentBodyUpdate.md)| The record category information to update. | 
 **include** | [**[String]**](String.md)| Returns additional information about the record category. Any optional field from the response model can be requested. For example:\n* allowableOperations\n* hasRetentionSchedule\n* path\n | [optional] 
 **fields** | [**[String]**](String.md)| A list of field names.\n\nYou can use this parameter to restrict the fields\nreturned within a response if, for example, you want to save on overall bandwidth.\n\nThe list applies to a returned individual\nentity or entries within a collection.\n\nIf the API method also supports the **include**\nparameter, then the fields specified in the **include**\nparameter are returned in addition to those specified in the **fields** parameter.\n | [optional] 

### Return type

[**RecordCategoryEntry**](RecordCategoryEntry.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP reuqest headers

 - **Content-Type**: application/json
 - **Accept**: application/json

